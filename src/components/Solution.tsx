"use client";

import { motion } from "framer-motion";
import {
  Clock,
  Languages,
  CalendarCheck,
  Filter,
  type LucideIcon,
} from "lucide-react";

type Feature = {
  icon: LucideIcon;
  title: string;
  body: string;
};

const FEATURES: Feature[] = [
  {
    icon: Clock,
    title: "עונה אוטומטית 24/7",
    body: "שעות הבוקר, אמצע הלילה, סופ״ש — הבוט עונה תוך שניות, תמיד.",
  },
  {
    icon: Languages,
    title: "מבין עברית טבעית",
    body: "לא תפריטים. שיחה אמיתית. הלקוחות לא מרגישים שהם מדברים עם בוט.",
  },
  {
    icon: CalendarCheck,
    title: "קובע תורים בעצמו",
    body: "בודק זמינות ביומן, מציע שעות, מאשר וסוגר תור — בלי שתתערב.",
  },
  {
    icon: Filter,
    title: "מעביר אליך רק מה שחשוב",
    body: "מטפל בשאלות הקלות לבד. רק לידים חמים ובקשות מיוחדות מגיעים אליך.",
  },
];

export function Solution() {
  return (
    <section id="solution" className="relative py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-balance text-3xl font-black leading-tight tracking-tight md:text-5xl">
            בוט אחד. ארבע יכולות שמשנות הכל.
          </h2>
          <p className="mt-5 text-base text-white/60 md:text-lg">
            לא צ&apos;אטבוט עם תפריטים. AI שמדבר עם הלקוחות שלך כמו בן אדם.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:mt-20 md:grid-cols-2 md:gap-6">
          {FEATURES.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-navy-900/60 p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-navy-900 hover:shadow-glow-md md:p-8"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-accent/0 via-accent/0 to-accent/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />

                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent ring-1 ring-inset ring-accent/20">
                  <Icon size={24} strokeWidth={2} />
                </div>

                <h3 className="mb-2 text-xl font-bold leading-snug md:text-2xl">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/60 md:text-base">
                  {feature.body}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
