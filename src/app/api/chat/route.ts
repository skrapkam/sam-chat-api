import { OpenAI } from "openai";
import { NextRequest } from "next/server";
import { ChatCompletionMessageParam } from "openai/resources/chat";
import {
  samPersona,
  samAnswerStyle,
  samFunFacts,
  projectSummaries,
} from "../../../../lib/aiPrompts"; // Adjust as needed

export const runtime = "edge";

// At the top of the file
const ALLOWED_ORIGIN = "*"; // for quick testing only!

export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Max-Age": "86400",
    },
  });
}

// 2. Handle POST/chat streaming
export async function POST(req: NextRequest) {
  const { userMessage } = await req.json();

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

Here’s who you are:
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
  });

  // Stream the SSE response
  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    async start(controller) {
      for await (const chunk of completion) {
        const content = chunk.choices[0]?.delta?.content;
        if (content) {
          controller.enqueue(encoder.encode(`data: ${content}\n\n`));
        }
      }
      controller.enqueue(encoder.encode("data: [DONE]\n\n"));
      controller.close();
    }
  });

  return new Response(stream, {
    headers: {
        "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
      },
  });
}
