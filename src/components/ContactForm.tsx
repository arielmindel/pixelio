"use client";

import { motion } from "framer-motion";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { useState } from "react";
import { waLink } from "@/lib/whatsapp";

type Status = "idle" | "loading" | "ok" | "error";

const PACKAGES = [
  "לא בטוח",
  "בייסיק (1,900 ₪)",
  "פלוס (3,900 ₪)",
  "פרימיום (6,900 ₪)",
];

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);

    const name = String(fd.get("name") || "").trim();
    const business = String(fd.get("business") || "").trim();
    const phone = String(fd.get("phone") || "").trim();
    const pkg = String(fd.get("package") || "").trim();
    const maintenance = fd.get("maintenance") === "on";
    const message = String(fd.get("message") || "").trim();

    // Client-side validation with friendly Hebrew messages
    setErrorMsg("");
    if (name.length < 2) {
      setStatus("error");
      setErrorMsg("נא למלא שם מלא");
      return;
    }
    if (!/^[0-9+\-\s]{6,}$/.test(phone)) {
      setStatus("error");
      setErrorMsg("נא למלא מספר טלפון תקין");
      return;
    }
    if (!pkg) {
      setStatus("error");
      setErrorMsg("נא לבחור חבילה שמעניינת אתכם");
      return;
    }

    setStatus("loading");

    // Build a tidy WhatsApp message with all the form data, pre-filled for the visitor.
    const lines = [
      "היי! שלחתי פרטים דרך האתר של Pixelio:",
      "",
      `שם: ${name}`,
      business ? `עסק: ${business}` : "",
      `טלפון: ${phone}`,
      `חבילה: ${pkg}${maintenance ? " + תוספת תחזוקה חודשית" : ""}`,
      message ? "" : "",
      message ? `הודעה: ${message}` : "",
    ].filter(Boolean);

    const whatsappUrl = waLink(lines.join("\n"));

    // Fire-and-forget backup to /api/contact (lands in Vercel logs even if the
    // visitor closes WhatsApp without pressing send).
    fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        business,
        phone,
        package: pkg,
        maintenance,
        message,
      }),
    }).catch(() => {
      // Silent — WhatsApp is the primary path.
    });

    // Open WhatsApp in a new tab with the pre-filled message.
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    setStatus("ok");
    form.reset();
  }

  const inputBase =
    "w-full rounded-xl border border-white/10 bg-navy-900/60 px-4 py-3 text-base text-white placeholder:text-white/35 outline-none transition-colors focus:border-accent/60 focus:bg-navy-900";

  return (
    <section id="lead" className="relative py-20 md:py-32">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-balance text-3xl font-black leading-tight tracking-tight md:text-5xl">
            מעדיפים לשלוח פרטים?
          </h2>
          <p className="mt-5 text-base text-white/60 md:text-lg">
            מלאו את הטופס — בלחיצה על שליחה, נפתח לכם חלון וואטסאפ עם כל הפרטים
            כבר ממולאים. אתם רק לוחצים שלח.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          onSubmit={handleSubmit}
          noValidate
          className="mt-12 space-y-4 rounded-2xl border border-white/10 bg-navy-900/40 p-6 backdrop-blur-sm md:p-8"
        >
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-white/70">
                שם מלא <span className="text-accent">*</span>
              </span>
              <input
                type="text"
                name="name"
                required
                minLength={2}
                maxLength={100}
                autoComplete="name"
                className={inputBase}
                placeholder="ישראל ישראלי"
              />
            </label>

            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-white/70">
                שם העסק
              </span>
              <input
                type="text"
                name="business"
                maxLength={200}
                autoComplete="organization"
                className={inputBase}
                placeholder="הסלון של דנה"
              />
            </label>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-white/70">
                טלפון <span className="text-accent">*</span>
              </span>
              <input
                type="tel"
                name="phone"
                required
                pattern="[0-9+\-\s]{6,}"
                autoComplete="tel"
                dir="ltr"
                className={`${inputBase} text-left`}
                placeholder="052-123-4567"
              />
            </label>

            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-white/70">
                חבילה שמעניינת <span className="text-accent">*</span>
              </span>
              <select
                name="package"
                required
                defaultValue=""
                className={`${inputBase} appearance-none`}
              >
                <option value="" disabled>
                  בחרו חבילה
                </option>
                {PACKAGES.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </label>
          </div>

          {/* Maintenance add-on — optional extra on top of the chosen package */}
          <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 bg-navy-900/40 p-4 transition-colors hover:border-white/20 hover:bg-navy-900/60">
            <input
              type="checkbox"
              name="maintenance"
              className="mt-0.5 h-4 w-4 shrink-0 accent-accent"
            />
            <span className="flex-1 text-sm text-white/80 md:text-base">
              <span className="font-semibold text-white">
                להוסיף גם חבילת תחזוקה חודשית
              </span>
              <span className="block text-xs text-white/55 md:text-sm">
                249 ₪ לחודש — עדכוני תוכן, גיבויים, תמיכה בוואטסאפ
              </span>
            </span>
          </label>

          <label className="block">
            <span className="mb-1.5 block text-sm font-medium text-white/70">
              הודעה (לא חובה)
            </span>
            <textarea
              name="message"
              rows={4}
              maxLength={2000}
              className={`${inputBase} resize-y`}
              placeholder="ספרו לנו מעט על העסק ומה חשוב לכם"
            />
          </label>

          <button
            type="submit"
            disabled={status === "loading"}
            className="group flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-base font-semibold text-white shadow-glow-md transition-all hover:bg-accent-hover hover:shadow-glow-lg disabled:cursor-wait disabled:opacity-60"
          >
            {status === "loading" ? (
              "שולח..."
            ) : (
              <>
                שלחו פרטים
                <Send
                  size={18}
                  className="transition-transform group-hover:-translate-x-1"
                />
              </>
            )}
          </button>

          {status === "ok" && (
            <div className="flex items-start gap-2 rounded-xl border border-green-500/30 bg-green-500/10 p-4 text-sm text-green-300">
              <CheckCircle2 size={20} className="mt-0.5 shrink-0" />
              <span>
                נפתח לכם חלון וואטסאפ עם כל הפרטים — רק ללחוץ שלח ונקבל את
                הפנייה מייד. תודה!
              </span>
            </div>
          )}

          {status === "error" && (
            <div className="flex items-start gap-2 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-300">
              <AlertCircle size={20} className="mt-0.5 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}
        </motion.form>
      </div>
    </section>
  );
}
