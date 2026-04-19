"use client";

import { motion } from "framer-motion";
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
          className="text-balance text-4xl font-black leading-tight tracking-tight md:text-6xl"
        >
          מוכנים להתחיל?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-5 max-w-xl text-balance text-base text-white/80 md:mt-6 md:text-xl"
        >
          בוחרים חבילה, שולחים הודעה, מתחילים לבנות.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10"
        >
          <a
            href={waLink("היי, ראיתי את האתר של Pixelio ואני רוצה להתחיל פרויקט")}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#25D366] px-8 py-5 text-lg font-bold text-white shadow-[0_8px_30px_rgba(37,211,102,0.4)] transition-all hover:bg-[#1EBA57] hover:shadow-[0_12px_40px_rgba(37,211,102,0.55)]"
          >
            <WhatsAppIcon size={22} />
            שלחו הודעה בוואטסאפ
          </a>
        </motion.div>
      </div>
    </section>
  );
}
