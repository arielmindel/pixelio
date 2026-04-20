"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { MessageCircle, CreditCard, Code2, Rocket, type LucideIcon } from "lucide-react";
import { useRef } from "react";

type Step = {
  icon: LucideIcon;
  title: string;
  body: string;
};

const STEPS: Step[] = [
  {
    icon: MessageCircle,
    title: "שיחת היכרות",
    body: "שיחה קצרה בוואטסאפ. מבינים בדיוק מה העסק שלכם צריך.",
  },
  {
    icon: Code2,
    title: "בנייה + תצוגה",
    body: "בונים את האתר ושולחים לכם לראות. אין התחייבות עד שאתם מאשרים.",
  },
  {
    icon: CreditCard,
    title: "אישור ותשלום",
    body: "מאשרים את האתר, משלמים בעד 3 תשלומים.",
  },
  {
    icon: Rocket,
    title: "תיקונים + עלייה לאוויר",
    body: "מבצעים שינויים אחרונים, מחברים דומיין, עולים לאוויר.",
  },
];

export function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 70%"],
  });
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

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
            4 צעדים. יומיים. אתר באוויר.
          </h2>
          <p className="mt-5 text-base text-white/60 md:text-lg">
            תהליך פשוט וברור. בלי בירוקרטיה, בלי הפתעות.
          </p>
        </motion.div>

        <div ref={containerRef} className="relative mt-16 md:mt-24">
          <div className="pointer-events-none absolute inset-x-0 top-8 hidden md:block">
            <div className="relative mx-auto h-px max-w-[85%] bg-white/10">
              <motion.div
                className="absolute inset-y-0 right-0 origin-right bg-gradient-to-l from-accent via-accent to-purple-500"
                style={{ scaleX, width: "100%" }}
              />
            </div>
          </div>

          <div className="pointer-events-none absolute bottom-0 right-8 top-0 w-px bg-white/10 md:hidden">
            <motion.div
              className="absolute inset-x-0 top-0 origin-top bg-gradient-to-b from-accent to-purple-500"
              style={{ scaleY: scaleX, height: "100%" }}
            />
          </div>

          <ol className="relative grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-6">
            {STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.li
                  key={step.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.12,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="relative flex gap-5 md:flex-col md:items-center md:text-center md:gap-0"
                >
                  <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-white/10 bg-navy-900 text-accent shadow-glow-sm md:h-16 md:w-16">
                    <Icon size={24} strokeWidth={2} />
                    <div className="absolute -top-2 -left-2 flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-accent to-purple-500 text-xs font-black text-white shadow-glow-sm">
                      {i + 1}
                    </div>
                  </div>

                  <div className="md:mt-5">
                    <h3 className="text-lg font-bold leading-snug md:text-xl">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/60 md:mt-2 md:text-[0.95rem]">
                      {step.body}
                    </p>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
