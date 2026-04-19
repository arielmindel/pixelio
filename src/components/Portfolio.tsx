"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Image from "next/image";

export function Portfolio() {
  return (
    <section id="portfolio" className="relative py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-balance text-3xl font-black leading-tight tracking-tight md:text-5xl">
            תיק עבודות
          </h2>
          <p className="mt-5 text-base text-white/60 md:text-lg">
            דוגמאות מאתרים שבנינו לעסקים אמיתיים.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:mt-20 md:grid-cols-3">
          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="group relative col-span-1 overflow-hidden rounded-2xl border border-white/10 bg-navy-900/60 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-glow-md md:col-span-1"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src="/portfolio/qi-flow-placeholder.svg"
                alt="Qi Flow — אתר תדמית לעסק ריפוי הוליסטי"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-transparent" />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 text-xs font-medium text-accent">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
                ריפוי הוליסטי
              </div>
              <h3 className="mt-2 text-xl font-bold md:text-2xl">Qi Flow</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                אתר תדמית מלא לעסק ריפוי. דף ראשי + שירותים + יצירת קשר + טופס
                הזמנת פגישה.
              </p>
            </div>
          </motion.a>

          {[0, 1].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: 0.12 * (i + 1),
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-navy-900/40"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      i === 0
                        ? "linear-gradient(135deg, #1E3A8A 0%, #312E81 50%, #0F1420 100%)"
                        : "linear-gradient(135deg, #4C1D95 0%, #1E3A8A 50%, #0F1420 100%)",
                  }}
                />
                <div className="absolute inset-0 backdrop-blur-[2px]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/80 backdrop-blur-md">
                    <Sparkles size={14} className="text-accent" />
                    בקרוב — פרויקט חדש
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="h-3 w-20 rounded-full bg-white/10" />
                <div className="mt-3 h-5 w-32 rounded-full bg-white/10" />
                <div className="mt-3 h-3 w-full rounded-full bg-white/5" />
                <div className="mt-2 h-3 w-3/4 rounded-full bg-white/5" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
