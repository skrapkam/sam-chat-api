import { OpenAI } from "openai";
import { NextRequest } from "next/server";
import { ChatCompletionMessageParam } from "openai/resources/chat";
import {
  samGuardrails,
  samPersona,
  samVoice,
  samIsms,
  samQuickReplies,
  samVoiceExamples,
  samFunFacts,
  projectSummaries,
} from "../../../../lib/aiPrompts"; // Adjust as needed
import { ratelimit, getClientIdentifier } from "../../../../lib/rateLimiter";
import { conversationMemory, ConversationContext } from "../../../../lib/conversationMemory";

export const runtime = "edge";

// At the top of the file
const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN || "*";

export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, x-bypass-token, authorization",
      "Access-Control-Max-Age": "86400",
    },
  });
}

// 2. Handle POST/chat streaming
export async function POST(req: NextRequest) {
  const { userMessage, sessionId } = await req.json();

  // Generate session ID if not provided
  const currentSessionId = sessionId || `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

  // Allow authenticated users to bypass rate limiting if they provide a valid token
  const bypassHeader =
    req.headers.get("x-bypass-token") ??
    req.headers.get("authorization")?.replace(/Bearer\s+/i, "");
  const bypassSecret = process.env.RATE_LIMIT_BYPASS_TOKEN;
  const isBypass = bypassSecret && bypassHeader === bypassSecret;

  // Rate limiting: max 30 messages per 24-hour window per IP (unless bypassed)
  if (!isBypass) {
    const identifier = getClientIdentifier(req);
    const rateLimitResult = await ratelimit.limit(identifier);
    if (!rateLimitResult.success) {
      return new Response(
        JSON.stringify({ error: "Rate limit exceeded. Please try again tomorrow." }),
        {
          status: 429,
          headers: {
            "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
            "Content-Type": "application/json",
            "X-RateLimit-Limit": rateLimitResult.limit.toString(),
            "X-RateLimit-Remaining": rateLimitResult.remaining.toString(),
            "X-RateLimit-Reset": rateLimitResult.reset.toString(),
          },
        }
      );
    }
  }

  // Get or create conversation context
  const conversation = await conversationMemory.getOrCreateConversation(currentSessionId);
  
  // Extract user information from the message
  await conversationMemory.extractUserInfo(currentSessionId, userMessage);

  // Add user message to conversation history
  await conversationMemory.addMessage(currentSessionId, {
    role: "user",
    content: userMessage,
  });

  // Get updated conversation context
  const updatedConversation = await conversationMemory.getConversation(currentSessionId);
  if (!updatedConversation) {
    return new Response(
      JSON.stringify({ error: "Failed to retrieve conversation context" }),
      {
        status: 500,
        headers: {
          "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
          "Content-Type": "application/json",
        },
      }
    );
  }

  // Compose prompt with conversation context
  const projectInfo = projectSummaries
    .map((p) => `Project: ${p.slug}\n\n${p.fullText}`)
    .join("\n\n---\n\n");

  const funFactsFormatted = Object.entries(samFunFacts)
    .map(([key, value]) =>
      Array.isArray(value)
        ? `${key}: ${value.join(", ")}`
        : `${key}: ${value}`
    )
    .join("\n");

  // Build context-aware system message
  const userContextInfo = buildUserContextInfo(updatedConversation.userInfo);
  
  const systemMessage = `
You are Sam Chang, not an AI. You're chatting with someone visiting your site.

Here's who you are:
${samPersona}

Here's are your guardrails:
<guardrails>
${samGuardrails}
</guardrails>

Here's how you should respond:
<voice_rules>
${samVoice}
</voice_rules>

Here's how you should respond to quick replies:
<quick_replies>
${samQuickReplies}
</quick_replies>

Here's what your voice sounds like:
<voice_examples>
${samVoiceExamples}
</voice_examples>

Fun facts:
<fun_facts>
${funFactsFormatted}
</fun_facts>

Sprinkle these in your responses for flavor:
<isms>
${samIsms}
</isms>

Your projects:
${projectInfo}

${userContextInfo}
  `.trim();

  // Build messages array with conversation history
  const messages: ChatCompletionMessageParam[] = [
    {
      role: "system",
      content: systemMessage,
    },
    ...updatedConversation.messages.slice(-10), // Keep last 10 messages for context
  ];

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY!,
  });

  const completion = await openai.chat.completions.create({
    model: "gpt-4.1-mini",
    messages,
    stream: true,
    max_tokens: 800,
    temperature: 0.7,
  });

  // Stream the SSE response
  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    async start(controller) {
      let chunkCount = 0;
      let totalContent = '';
      let lastContentTime = Date.now();
      
      try {
        for await (const chunk of completion) {
          chunkCount++;
          lastContentTime = Date.now();
          
          const content = chunk.choices[0]?.delta?.content;
          if (content) {
            totalContent += content;
            controller.enqueue(encoder.encode(`data: ${content}\n\n`));
          }
          
          // Check for finish reason
          if (chunk.choices[0]?.finish_reason) {
            console.log('Finish reason:', chunk.choices[0].finish_reason);
            console.log('Total chunks processed:', chunkCount);
            console.log('Total content length:', totalContent.length);
            
            // If it's a length limit, try to complete the sentence
            if (chunk.choices[0].finish_reason === 'length') {
              console.log('Response hit length limit - attempting to complete');
            }
          }
        }

        // Add assistant's response to conversation history
        if (totalContent.trim()) {
          await conversationMemory.addMessage(currentSessionId, {
            role: "assistant",
            content: totalContent,
          });
        }

        controller.enqueue(encoder.encode("data: [DONE]\n\n"));
      } catch (error) {
        console.error('Streaming error:', error);
        console.error('Chunks processed before error:', chunkCount);
        console.error('Time since last chunk:', Date.now() - lastContentTime);
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        controller.enqueue(encoder.encode(`data: Error: ${errorMessage}\n\n`));
      } finally {
        controller.close();
      }
    }
  });

  return new Response(stream, {
    headers: {
        "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, x-bypass-token, authorization",
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
        "X-Session-Id": currentSessionId, // Return session ID to client
      },
  });
}

// Helper function to build user context information
function buildUserContextInfo(userInfo: ConversationContext['userInfo']): string {
  const contextParts: string[] = [];
  
  if (userInfo.name) {
    contextParts.push(`The person you're chatting with is named ${userInfo.name}.`);
  }
  
  if (userInfo.location) {
    contextParts.push(`They're from ${userInfo.location}.`);
  }
  
  if (userInfo.lastTopic) {
    contextParts.push(`You were recently discussing ${userInfo.lastTopic}.`);
  }
  
  if (contextParts.length > 0) {
    return `\n\nContext about who you're chatting with:\n${contextParts.join(' ')}`;
  }
  
  return '';
}
