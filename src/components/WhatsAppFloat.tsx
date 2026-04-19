"use client";

import { motion } from "framer-motion";
import { waLink } from "@/lib/whatsapp";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

export function WhatsAppFloat() {
  return (
    <motion.a
      href={waLink("היי, יש לי שאלה על Pixelio")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="דברו איתנו בוואטסאפ"
      initial={{ opacity: 0, scale: 0.4, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="group fixed bottom-5 right-5 z-40 md:bottom-6 md:right-6"
    >
      {/* Pulse ring */}
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30 [animation-duration:2.5s]" />

      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_24px_rgba(37,211,102,0.5)] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#1EBA57] md:h-16 md:w-16">
        <WhatsAppIcon size={28} />
      </span>

      {/* Tooltip */}
      <span className="pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-navy-800 px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
        דברו איתנו
      </span>
    </motion.a>
  );
}
