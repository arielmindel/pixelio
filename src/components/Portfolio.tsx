"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowUpLeft } from "lucide-react";

const QI_FLOW_URL = "https://qi-flow-craft.lovable.app";

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
          {/* Featured — Qi Flow (live site) */}
          <motion.article
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-navy-900/60 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-glow-md"
          >
            {/* Live iframe thumbnail — renders the real site at full res then scales down */}
            <a
              href={QI_FLOW_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="פתיחת האתר של Qi Flow בחלון חדש"
              className="relative block aspect-[16/10] overflow-hidden bg-navy-950"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute left-0 top-0"
                style={{
                  width: "333.3333%",
                  height: "333.3333%",
                  transform: "scale(0.3)",
                  transformOrigin: "top left",
                }}
              >
                <iframe
                  src={QI_FLOW_URL}
                  title="Qi Flow — תצוגה מקדימה"
                  loading="lazy"
                  sandbox="allow-same-origin allow-scripts"
                  className="h-full w-full border-0 bg-white"
                  scrolling="no"
                />
              </div>

              {/* Gradient overlay for legibility and "live" cue */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/10 to-transparent" />

              {/* Live indicator */}
              <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full border border-white/15 bg-navy-950/70 px-3 py-1 text-[11px] font-semibold text-white/85 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
                </span>
                אתר חי
              </div>
            </a>

            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-center gap-2 text-xs font-medium text-accent">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
                ריפוי הוליסטי
              </div>
              <h3 className="mt-2 text-xl font-bold md:text-2xl">Qi Flow</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-white/60">
                אתר תדמית לקליניקה הוליסטית. כולל פירוט טיפולים, יצירת קשר
                וכפתור וואטסאפ. עוצב עם אווירה רגועה וצבעים טבעיים.
              </p>

              <a
                href={QI_FLOW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:border-accent/40 hover:bg-accent/10 hover:text-white"
              >
                צפייה באתר
                <ArrowUpLeft
                  size={16}
                  className="transition-transform group-hover:-translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </motion.article>

          {/* Coming-soon placeholders */}
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
