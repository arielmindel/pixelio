"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

// 2 honest placeholder cards — no fake testimonials.
const PLACEHOLDERS = [
  {
    initial: "?",
    name: "ביקורת ראשונה בקרוב",
    role: "לקוח Pixelio ראשון",
  },
  {
    initial: "?",
    name: "ביקורת שנייה בקרוב",
    role: "לקוח Pixelio שני",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-balance text-3xl font-black leading-tight tracking-tight md:text-5xl">
            מה אומרים עלינו
          </h2>
          <p className="mt-5 text-base text-white/60 md:text-lg">
            הביקורות הראשונות יתפרסמו כאן ברגע שהלקוחות הראשונים ישיקו את האתר
            שלהם. אין המצאות — רק דברים אמיתיים.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:mt-20 md:grid-cols-2 md:gap-8">
          {PLACEHOLDERS.map((item, i) => (
            <motion.blockquote
              key={item.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-navy-900/50 p-7 backdrop-blur-sm md:p-8"
            >
              <Quote
                aria-hidden
                className="absolute -top-2 right-5 text-accent/20"
                size={54}
                strokeWidth={1.5}
              />

              <p className="relative text-base leading-relaxed text-white/40 md:text-lg">
                &ldquo;הציטוט האמיתי יופיע כאן ברגע שלקוח ראשון ישלח לנו פידבק.
                אנחנו לא ממציאים כלום.&rdquo;
              </p>

              <footer className="relative mt-6 flex items-center gap-3 border-t border-white/5 pt-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-dashed border-white/15 bg-white/[0.03] text-base font-bold text-white/30">
                  {item.initial}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white/60 md:text-base">
                    {item.name}
                  </div>
                  <div className="text-xs text-white/40 md:text-sm">
                    {item.role}
                  </div>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
