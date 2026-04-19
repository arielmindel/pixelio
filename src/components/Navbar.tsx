"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const LINKS = [
  { label: "עלינו", href: "#about" },
  { label: "חבילות", href: "#packages" },
  { label: "תיק עבודות", href: "#portfolio" },
  { label: "שאלות נפוצות", href: "#faq" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8 md:py-5">
        <a
          href="#top"
          className="text-xl font-black tracking-tight md:text-2xl"
        >
          <span className="bg-gradient-to-br from-white to-accent-light bg-clip-text text-transparent">
            Pixelio
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-white/70 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#packages"
            className="hidden rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-glow-sm transition-all hover:bg-accent-hover hover:shadow-glow-md md:inline-block"
          >
            דברו איתנו
          </a>

          <button
            type="button"
            className="rounded-lg border border-white/10 p-2 text-white md:hidden"
            aria-label="תפריט"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-white/10 bg-navy-950/95 backdrop-blur-lg md:hidden"
          >
            <ul className="flex flex-col gap-1 px-5 py-4">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-3 text-base font-medium text-white/80 transition-colors hover:bg-white/5 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="mt-2">
                <a
                  href="#packages"
                  onClick={() => setOpen(false)}
                  className="block rounded-full bg-accent px-5 py-3 text-center text-sm font-semibold text-white"
                >
                  דברו איתנו
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
