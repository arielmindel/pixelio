"use client";

import { motion } from "framer-motion";
import { MessageSquareOff, Repeat, MoonStar, type LucideIcon } from "lucide-react";

type Problem = {
  icon: LucideIcon;
  title: string;
  body: string;
};

const PROBLEMS: Problem[] = [
  {
    icon: MessageSquareOff,
    title: "הודעות לא נענות",
    body: "30+ הודעות וואטסאפ ביום, אין זמן לענות לכולן בזמן. לקוחות פוטנציאליים עוברים למתחרים.",
  },
  {
    icon: Repeat,
    title: "תשובות חוזרות",
    body: "אותן שאלות 50 פעם בשבוע — שעות, מחירים, איך מגיעים. עבודה חוזרת שמתישה.",
  },
  {
    icon: MoonStar,
    title: "אובדן הזמנות בלילה",
    body: "הלקוח שואל ב-23:00, אתה רואה רק בבוקר. הוא כבר מצא מישהו אחר.",
  },
];

export function Problem() {
  return (
    <section id="about" className="relative py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-balance text-3xl font-black leading-tight tracking-tight md:text-5xl">
            למה עסקים מאבדים לקוחות בוואטסאפ?
          </h2>
          <p className="mt-5 text-base text-white/60 md:text-lg">
            שלוש סיבות שאנחנו רואים כמעט בכל יום — וכולן ניתנות לתיקון.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:mt-20 md:grid-cols-3 md:gap-6">
          {PROBLEMS.map((problem, i) => {
            const Icon = problem.icon;
            return (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative rounded-2xl border border-white/10 bg-navy-900/60 p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-navy-900 md:p-8"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-white/80 ring-1 ring-inset ring-white/10">
                  <Icon size={24} strokeWidth={2} />
                </div>

                <h3 className="mb-2 text-xl font-bold leading-snug md:text-2xl">
                  {problem.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/60 md:text-base">
                  {problem.body}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
