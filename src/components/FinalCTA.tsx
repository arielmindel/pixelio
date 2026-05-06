"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { waLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

export function FinalCTA() {
  return (
    <section id="contact" className="relative overflow-hidden py-24 md:py-32">
      <div
        aria-hidden
        className="absolute inset-0 -z-20 animate-gradient bg-[length:200%_200%]"
        style={{
          background:
            "linear-gradient(135deg, #1E3A8A 0%, #312E81 40%, #6D28D9 70%, #1E3A8A 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.08] mix-blend-overlay bg-grain"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-navy-950/40 via-transparent to-navy-950/60"
      />

      <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-balance text-3xl font-black leading-tight tracking-tight md:text-5xl"
        >
          הלקוחות שלך כותבים. הבוט שלך עונה.
          <br />
          <span className="bg-gradient-to-br from-white via-accent-light to-purple-300 bg-clip-text text-transparent">
            הקסם מתחיל בשבוע הבא.
          </span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a
            href="/demo"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-base font-semibold text-navy-950 shadow-lg transition-all hover:bg-white/90 sm:w-auto"
          >
            ראה דמו
            <ArrowLeft
              size={18}
              className="transition-transform group-hover:-translate-x-1"
            />
          </a>
          <a
            href={waLink("היי, אני רוצה בוט וואטסאפ לעסק שלי")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/15 sm:w-auto"
          >
            <WhatsAppIcon size={18} />
            דבר איתנו
          </a>
        </motion.div>
      </div>
    </section>
  );
}
