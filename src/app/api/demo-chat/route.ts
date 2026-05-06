import { NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { systemPrompt } from "@/lib/system-prompt";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

const MAX_USER_MESSAGES = 10;
const MAX_MESSAGE_LENGTH = 500;

export async function POST(req: Request) {
  if (!process.env.ANTHROPIC_API_KEY) {
    return NextResponse.json(
      { error: "השירות לא זמין כרגע. נסי שוב בעוד רגע." },
      { status: 503 }
    );
  }

  let body: { messages?: ChatMessage[] };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const messages = body.messages;
  if (!Array.isArray(messages) || messages.length === 0) {
    return NextResponse.json({ error: "Missing messages" }, { status: 400 });
  }

  const userMessageCount = messages.filter((m) => m.role === "user").length;
  if (userMessageCount > MAX_USER_MESSAGES) {
    return NextResponse.json(
      {
        error:
          "הגעת למגבלת הדמו (10 הודעות). רוצה לראות בוט אמיתי לעסק שלך? לחצי על הבאנר למעלה 💕",
        limited: true,
      },
      { status: 429 }
    );
  }

  const sanitized: ChatMessage[] = [];
  for (const m of messages) {
    if (m.role !== "user" && m.role !== "assistant") continue;
    if (typeof m.content !== "string") continue;
    const content = m.content.slice(0, MAX_MESSAGE_LENGTH).trim();
    if (!content) continue;
    sanitized.push({ role: m.role, content });
  }

  if (sanitized.length === 0 || sanitized[sanitized.length - 1].role !== "user") {
    return NextResponse.json({ error: "Invalid message order" }, { status: 400 });
  }

  const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

  try {
    const completion = await client.messages.create({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 400,
      system: systemPrompt,
      messages: sanitized,
    });

    const textBlock = completion.content.find((b) => b.type === "text");
    const response = textBlock && textBlock.type === "text" ? textBlock.text : "";

    if (!response) {
      return NextResponse.json(
        { error: "מצטערת, משהו השתבש. נסי שוב 💕" },
        { status: 500 }
      );
    }

    return NextResponse.json({ response });
  } catch (err) {
    console.error("demo-chat error:", err);
    return NextResponse.json(
      { error: "מצטערת, יש תקלה רגעית. נסי בעוד שנייה 💕" },
      { status: 500 }
    );
  }
}
