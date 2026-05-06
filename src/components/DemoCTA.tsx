"use client";

import { motion } from "framer-motion";
import { ArrowLeft, MessageSquareText } from "lucide-react";

export function DemoCTA() {
  return (
    <section id="demo" className="relative py-20 md:py-32">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-navy-900/70 p-10 text-center backdrop-blur-sm md:p-16"
        >
          <div
            aria-hidden
            className="absolute -top-32 left-1/2 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/15 blur-[100px]"
          />
          <div
            aria-hidden
            className="absolute -bottom-32 left-1/2 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-purple-500/15 blur-[100px]"
          />

          <div className="mx-auto mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent ring-1 ring-inset ring-accent/20">
            <MessageSquareText size={26} strokeWidth={2} />
          </div>

          <h2 className="text-balance text-3xl font-black leading-tight tracking-tight md:text-5xl">
            תראה איך זה נראה
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-balance text-base leading-relaxed text-white/70 md:mt-6 md:text-lg">
            בנינו דמו חי של בוט שעונה כמספרת ליאור גל בהוד השרון. דבר איתו
            בעצמך.
          </p>

          <div className="mt-9 flex justify-center md:mt-10">
            <a
              href="/demo"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-l from-accent to-purple-500 px-8 py-4 text-base font-semibold text-white shadow-glow-md transition-all hover:shadow-glow-lg md:text-lg"
            >
              פתח את הדמו
              <ArrowLeft
                size={18}
                className="transition-transform group-hover:-translate-x-1"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
