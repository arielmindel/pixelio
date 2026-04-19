"use client";

import { motion } from "framer-motion";
import { Tag, Zap, MessageSquare, ShieldCheck, type LucideIcon } from "lucide-react";

type Reason = {
  icon: LucideIcon;
  title: string;
  body: string;
};

const REASONS: Reason[] = [
  {
    icon: Tag,
    title: "מחירים שקופים",
    body: "כל מחיר באתר. בלי הפתעות, בלי 'ניפגש לקפה ונדבר'.",
  },
  {
    icon: Zap,
    title: "אספקה מהירה",
    body: "יום אחד לבייסיק. יומיים לפלוס. 3 ימים לפרימיום. על פי תאריך.",
  },
  {
    icon: MessageSquare,
    title: "תקשורת ישירה בוואטסאפ",
    body: "אין מתווכים. אין מזכירות. אתם מדברים ישירות עם מי שבונה את האתר.",
  },
  {
    icon: ShieldCheck,
    title: "אחריות שבועיים",
    body: "כל תיקון או שינוי בשבועיים הראשונים — על חשבוננו.",
  },
];

export function WhyPixelio() {
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
            למה לבחור ב-Pixelio?
          </h2>
          <p className="mt-5 text-base text-white/60 md:text-lg">
            ארבעה דברים שגורמים ללקוחות להישאר איתנו.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:mt-20 md:grid-cols-2 md:gap-6">
          {REASONS.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-navy-900/60 p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-glow-md md:p-8"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-accent/0 to-accent/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />

                <div className="flex items-start gap-5">
                  <div className="shrink-0 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent ring-1 ring-inset ring-accent/20">
                    <Icon size={22} strokeWidth={2} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold leading-snug md:text-xl">
                      {reason.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/60 md:text-base">
                      {reason.body}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
