"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const TRUST_ITEMS = [
  "אתר חי תוך יומיים",
  "עד 3 תשלומים ללא ריבית",
  "שבועיים אחריות",
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pb-20 pt-36 md:pb-32 md:pt-44"
    >
      {/* Animated gradient background */}
      <div
        aria-hidden
        className="absolute inset-0 -z-20 animate-gradient bg-[length:200%_200%]"
        style={{
          background:
            "linear-gradient(135deg, #0A0E1A 0%, #1E1B4B 25%, #312E81 50%, #1E3A8A 75%, #0A0E1A 100%)",
        }}
      />

      {/* Radial spotlight */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-spotlight" />

      {/* Grain overlay */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.08] mix-blend-overlay bg-grain"
      />

      {/* Soft glow orbs */}
      <div
        aria-hidden
        className="absolute -top-40 right-1/4 -z-10 h-96 w-96 rounded-full bg-accent/20 blur-[120px]"
      />
      <div
        aria-hidden
        className="absolute -bottom-40 left-1/4 -z-10 h-96 w-96 rounded-full bg-purple-500/20 blur-[120px]"
      />

      <div className="mx-auto max-w-6xl px-5 text-center md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur-sm md:text-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          פתוח למשפטי פיתוח • נשאר 3 מקומות לחודש הזה
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-4xl text-balance text-4xl font-black leading-[1.1] tracking-tight md:text-6xl lg:text-7xl"
        >
          אתרים שמביאים לקוחות.
          <br />
          <span className="bg-gradient-to-br from-accent-light via-accent to-purple-400 bg-clip-text text-transparent">
            לא רק נראים טוב.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-6 max-w-2xl text-balance text-base leading-relaxed text-white/70 md:mt-8 md:text-xl"
        >
          סוכנות אתרים לעסקים בישראל. מקבלים אתר חי תוך יום-יומיים — עם תשלום
          נוח בעד 3 תשלומים.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row md:mt-10"
        >
          <a
            href="#packages"
            className="group relative inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-7 py-4 text-base font-semibold text-white shadow-glow-md transition-all hover:bg-accent-hover hover:shadow-glow-lg sm:w-auto"
          >
            לצפייה בחבילות
            <ArrowLeft
              size={18}
              className="transition-transform group-hover:-translate-x-1"
            />
          </a>
          <a
            href="#portfolio"
            className="inline-flex w-full items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-white/30 hover:bg-white/10 sm:w-auto"
          >
            ראו תיק עבודות
          </a>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-white/60"
        >
          {TRUST_ITEMS.map((item) => (
            <li key={item} className="flex items-center gap-1.5">
              <span className="text-accent">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
