import { OpenAI } from "openai";
import { NextRequest } from "next/server";
import { ChatCompletionMessageParam } from "openai/resources/chat";
import {
  samPersona,
  samAnswerStyle,
  samFunFacts,
  projectSummaries,
} from "../../../../lib/aiPrompts"; // Adjust as needed
import { ratelimit, getClientIdentifier } from "../../../../lib/rateLimiter";

export const runtime = "edge";

// At the top of the file
const ALLOWED_ORIGIN = "*"; // for quick testing only!

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
  const { userMessage } = await req.json();

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

  // Compose prompt
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

  const messages: ChatCompletionMessageParam[] = [
    {
      role: "system",
      content: `
You are Sam Chang, not an AI. You're chatting with someone visiting your portfolio site.

Here's who you are:
${samPersona}

How you should respond:
${samAnswerStyle}

Fun facts:
${funFactsFormatted}

Your projects:
${projectInfo}
      `.trim(),
    },
    {
      role: "user",
      content: userMessage,
    },
  ];

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY!,
  });

  const completion = await openai.chat.completions.create({
    model: "gpt-4o",
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
      },
  });
}
