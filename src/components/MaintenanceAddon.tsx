"use client";

import { motion } from "framer-motion";
import { Wrench, ArrowLeft } from "lucide-react";
import { waLink } from "@/lib/whatsapp";

export function MaintenanceAddon() {
  return (
    <section className="relative pb-20 pt-4 md:pb-32 md:pt-8">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-navy-900/70 p-8 backdrop-blur-sm md:p-12"
        >
          <div
            aria-hidden
            className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-accent/10 blur-3xl"
          />

          <div className="relative grid grid-cols-1 items-center gap-8 md:grid-cols-[1fr_auto] md:gap-12">
            <div>
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent ring-1 ring-inset ring-accent/20">
                <Wrench size={20} strokeWidth={2} />
              </div>

              <h3 className="text-2xl font-black leading-tight tracking-tight md:text-3xl">
                רוצים שנתחזק לכם את האתר?
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-white/70 md:text-base">
                תוספת אופציונלית —{" "}
                <span className="font-bold text-white">249 ₪ לחודש</span>.
                כוללת: עדכוני תוכן שוטפים, גיבויים, תיקוני באגים, תמיכה מהירה
                בוואטסאפ.
              </p>

              <p className="mt-3 text-xs text-white/40 md:text-sm">
                לא חובה. האתר שלכם נשאר שלכם גם בלי תחזוקה.
              </p>
            </div>

            <a
              href={waLink("היי, אני רוצה להוסיף חבילת תחזוקה חודשית")}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-base font-semibold text-navy-950 transition-all hover:bg-white/90"
            >
              הוסיפו תחזוקה
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
