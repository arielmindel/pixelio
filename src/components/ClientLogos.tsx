"use client";

import { motion } from "framer-motion";

// 6 placeholder slots — each says "הלוגו שלך כאן" (doubles as a subtle sales hook).
const SLOTS = Array.from({ length: 6 }, (_, i) => i);

export function ClientLogos() {
  return (
    <section className="relative border-y border-white/5 bg-navy-950/60 py-10 md:py-14">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-white/40 md:text-sm"
        >
          עסקים שיעבדו איתנו בקרוב
        </motion.p>

        <div className="mt-7 grid grid-cols-2 gap-3 md:mt-10 md:grid-cols-6 md:gap-4">
          {SLOTS.map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex h-16 items-center justify-center rounded-xl border border-dashed border-white/10 bg-white/[0.02] text-xs font-medium text-white/30 transition-colors hover:border-accent/30 hover:text-white/50 md:h-20 md:text-sm"
            >
              הלוגו שלך כאן
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
