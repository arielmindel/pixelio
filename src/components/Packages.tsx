"use client";

import { motion } from "framer-motion";
import { Check, Sparkles, Plus } from "lucide-react";
import { waLink } from "@/lib/whatsapp";
import { ServicesJsonLd } from "@/components/JsonLd";

const MAIN_FEATURES = [
  "בניית הבוט מאפס לעסק שלך",
  "חיבור ל-WhatsApp Business",
  "מאגר ידע מותאם אישית",
  "דשבורד לעריכת תוכן",
  "תחזוקה שוטפת ועדכוני AI כלולים",
];

type AddOn = {
  name: string;
  price: string;
  description: string;
};

const ADD_ONS: AddOn[] = [
  {
    name: "Multi-Channel",
    price: "+100 ₪/חודש",
    description: "אותו בוט עונה גם ב-Instagram וב-Facebook Messenger.",
  },
  {
    name: "אינטגרציה ליומן + תשלומים",
    price: "+150 ₪/חודש",
    description:
      "סנכרון ליומן Google/Calendly וקישורי תשלום ישירים בשיחה עם הלקוח.",
  },
];

export function Packages() {
  return (
    <section id="packages" className="relative py-20 md:py-32">
      <ServicesJsonLd
        services={[
          {
            name: "חבילת השקה",
            description:
              "בוט וואטסאפ מבוסס AI לעסק. הקמה חד-פעמית 2,500 ₪ + תחזוקה חודשית 250–350 ₪.",
            price: "2500",
          },
        ]}
      />

      <div
        aria-hidden
        className="absolute inset-x-0 top-1/4 -z-10 mx-auto h-[500px] max-w-4xl rounded-full bg-accent/10 blur-[120px]"
      />

      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-balance text-3xl font-black leading-tight tracking-tight md:text-5xl">
            חבילה אחת. מחיר ברור.
          </h2>
          <p className="mt-5 text-base text-white/60 md:text-lg">
            הקמה חד-פעמית, תחזוקה חודשית, ללא התחייבות. אפשר לבטל בכל חודש.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto mt-14 max-w-2xl rounded-2xl border-2 border-accent bg-gradient-to-b from-navy-800 to-navy-900 p-7 shadow-glow-lg md:mt-20 md:p-10"
        >
          <div className="absolute -top-4 left-1/2 -translate-x-1/2">
            <div className="flex items-center gap-1.5 rounded-full bg-gradient-to-l from-accent to-purple-500 px-4 py-1.5 text-xs font-bold text-white shadow-glow-md">
              <Sparkles size={14} strokeWidth={2.5} />
              חבילת השקה
            </div>
          </div>

          <div className="mb-6 text-center md:mb-8">
            <h3 className="text-2xl font-bold md:text-3xl">חבילת השקה</h3>
            <p className="mt-2 text-sm text-white/60">
              הכל מה שצריך כדי להעלות בוט באוויר ולשמור עליו חי.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 border-y border-white/10 py-6 md:grid-cols-2 md:gap-8 md:py-8">
            <div className="text-center md:text-right">
              <div className="text-xs font-semibold uppercase tracking-wider text-white/50">
                הקמה חד-פעמית
              </div>
              <div className="mt-2 flex items-baseline justify-center gap-1.5 md:justify-start">
                <span className="text-4xl font-black tracking-tight md:text-5xl">
                  2,500
                </span>
                <span className="text-xl font-bold text-white/70">₪</span>
              </div>
            </div>
            <div className="text-center md:text-right">
              <div className="text-xs font-semibold uppercase tracking-wider text-white/50">
                תחזוקה חודשית
              </div>
              <div className="mt-2 flex items-baseline justify-center gap-1.5 md:justify-start">
                <span className="text-4xl font-black tracking-tight md:text-5xl">
                  250–350
                </span>
                <span className="text-xl font-bold text-white/70">₪</span>
              </div>
              <p className="mt-1 text-xs text-white/50">
                כולל עדכוני תוכן, AI ו-API
              </p>
            </div>
          </div>

          <ul className="mt-7 space-y-3.5 md:mt-8">
            {MAIN_FEATURES.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-3 text-sm text-white/85 md:text-base"
              >
                <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent">
                  <Check size={12} strokeWidth={3} />
                </span>
                <span className="leading-snug">{feature}</span>
              </li>
            ))}
          </ul>

          <a
            href={waLink("היי, אני מעוניין בחבילת ההשקה של בוט הוואטסאפ")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 block rounded-full bg-accent px-6 py-4 text-center text-base font-semibold text-white shadow-glow-md transition-all hover:bg-accent-hover hover:shadow-glow-lg md:mt-10"
          >
            דברו איתנו בוואטסאפ
          </a>

          <p className="mt-4 text-center text-xs text-white/50">
            ללא התחייבות. אפשר לבטל בכל חודש.
          </p>
        </motion.div>

        <div className="mt-16 md:mt-24">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h3 className="text-xl font-bold tracking-tight md:text-2xl">
              תוספות לבחירה
            </h3>
            <p className="mt-2 text-sm text-white/60">
              להוסיף בכל שלב — לא חובה.
            </p>
          </motion.div>

          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
            {ADD_ONS.map((addon, i) => (
              <motion.div
                key={addon.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-navy-900/60 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-navy-900 hover:shadow-glow-md md:p-7"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent ring-1 ring-inset ring-accent/20">
                  <Plus size={20} strokeWidth={2.5} />
                </div>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h4 className="text-lg font-bold leading-snug md:text-xl">
                    {addon.name}
                  </h4>
                  <span className="text-sm font-semibold text-accent-light">
                    {addon.price}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-white/60 md:text-base">
                  {addon.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
