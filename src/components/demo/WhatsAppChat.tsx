"use client";

import { useEffect, useRef, useState } from "react";
import { Send, Phone, Video, ArrowRight, Wifi, BatteryFull, SignalHigh } from "lucide-react";

type Role = "user" | "assistant";
type ChatMessage = { role: Role; content: string; time: string };

const INITIAL_BOT_MESSAGE: ChatMessage = {
  role: "assistant",
  content: "היי! זאת ליאור גל מהמספרה ✨ אשמח לעזור לך — מה את רוצה לדעת?",
  time: nowHHMM(),
};

function nowHHMM() {
  const d = new Date();
  return `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
}

export function WhatsAppChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_BOT_MESSAGE]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [limited, setLimited] = useState(false);
  const [statusTime, setStatusTime] = useState("9:41");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setStatusTime(nowHHMM());
    const id = setInterval(() => setStatusTime(nowHHMM()), 30_000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, sending]);

  async function sendMessage(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed || sending || limited) return;

    setError(null);
    const userMsg: ChatMessage = { role: "user", content: trimmed, time: nowHHMM() };
    const next = [...messages, userMsg];
    setMessages(next);
    setInput("");
    setSending(true);

    try {
      const res = await fetch("/api/demo-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: next.map(({ role, content }) => ({ role, content })),
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        if (data.limited) setLimited(true);
        setError(data.error || "משהו השתבש, נסי שוב");
        return;
      }

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.response, time: nowHHMM() },
      ]);
    } catch {
      setError("בעיית רשת. נסי שוב 💕");
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="mx-auto w-full max-w-[380px]">
      {/* iPhone frame */}
      <div className="relative rounded-[2.75rem] bg-black p-2 shadow-[0_30px_80px_-20px_rgba(59,130,246,0.35)] ring-1 ring-white/10">
        <div className="overflow-hidden rounded-[2.25rem] bg-[#ECE5DD]">
          {/* iOS status bar */}
          <div className="relative flex h-9 items-center justify-between bg-black px-6 text-[13px] font-semibold text-white">
            <span className="tabular-nums">{statusTime}</span>
            <div className="absolute left-1/2 top-1/2 h-5 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black" />
            <div className="flex items-center gap-1.5" aria-hidden>
              <SignalHigh className="h-3.5 w-3.5" />
              <Wifi className="h-3.5 w-3.5" />
              <BatteryFull className="h-4 w-4" />
            </div>
          </div>

          {/* WhatsApp header */}
          <div className="flex items-center gap-3 bg-[#075E54] px-3 py-2.5 text-white">
            <ArrowRight className="h-5 w-5 opacity-90" aria-hidden />
            <div className="relative">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-sm font-bold">
                ל
              </div>
              <span className="absolute bottom-0 left-0 h-2.5 w-2.5 rounded-full bg-[#25D366] ring-2 ring-[#075E54]" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="truncate text-[15px] font-semibold leading-tight">
                מספרת ליאור גל
              </div>
              <div className="text-[11px] text-white/75 leading-tight">Online</div>
            </div>
            <Video className="h-5 w-5 opacity-90" aria-hidden />
            <Phone className="h-4 w-4 opacity-90" aria-hidden />
          </div>

          {/* Chat area */}
          <div
            ref={scrollRef}
            className="h-[440px] overflow-y-auto bg-[#ECE5DD] bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22120%22 height=%22120%22 viewBox=%220 0 120 120%22><g fill=%22%23d9d2c5%22 fill-opacity=%220.35%22><circle cx=%2220%22 cy=%2220%22 r=%221%22/><circle cx=%2260%22 cy=%2240%22 r=%221%22/><circle cx=%22100%22 cy=%2220%22 r=%221%22/><circle cx=%2240%22 cy=%2280%22 r=%221%22/><circle cx=%2280%22 cy=%22100%22 r=%221%22/></g></svg>')] px-3 py-3"
          >
            <div className="flex flex-col gap-1.5">
              {messages.map((m, i) => (
                <Bubble key={i} message={m} />
              ))}
              {sending && <TypingBubble />}
            </div>
          </div>

          {/* Error banner */}
          {error && (
            <div className="bg-red-50 px-3 py-2 text-center text-[12px] text-red-700">
              {error}
            </div>
          )}

          {/* Input bar */}
          <form
            onSubmit={sendMessage}
            className="flex items-center gap-2 border-t border-black/10 bg-[#F0F0F0] px-2 py-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={limited ? "סיימת את הדמו 💕" : "הקלד הודעה..."}
              disabled={sending || limited}
              dir="rtl"
              className="flex-1 rounded-full bg-white px-4 py-2 text-[14px] text-gray-900 placeholder:text-gray-400 outline-none ring-1 ring-black/5 focus:ring-[#25D366] disabled:opacity-60"
              aria-label="הודעה לבוט"
              maxLength={500}
            />
            <button
              type="submit"
              disabled={!input.trim() || sending || limited}
              aria-label="שליחת הודעה"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white shadow-md transition-transform hover:scale-105 active:scale-95 disabled:cursor-not-allowed disabled:bg-gray-400 disabled:hover:scale-100"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

function Bubble({ message }: { message: ChatMessage }) {
  const isUser = message.role === "user";
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`relative max-w-[78%] rounded-lg px-3 py-1.5 text-[14px] leading-snug shadow-sm ${
          isUser ? "bg-[#E2E8F0] text-gray-900" : "bg-white text-gray-900"
        }`}
      >
        <p className="whitespace-pre-wrap break-words">{message.content}</p>
        <div className="mt-0.5 flex items-center justify-end gap-1 text-[10px] text-gray-500">
          <span className="tabular-nums">{message.time}</span>
          {isUser && <span className="text-[#34B7F1]">✓✓</span>}
        </div>
      </div>
    </div>
  );
}

function TypingBubble() {
  return (
    <div className="flex justify-start">
      <div className="rounded-lg bg-white px-3 py-2 shadow-sm">
        <div className="flex items-center gap-1">
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-gray-400 [animation-delay:-0.3s]" />
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-gray-400 [animation-delay:-0.15s]" />
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-gray-400" />
        </div>
      </div>
    </div>
  );
}
