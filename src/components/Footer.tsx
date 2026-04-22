import Link from "next/link";
import { waLink } from "@/lib/whatsapp";

const QUICK_LINKS = [
  { label: "עלינו", href: "#about" },
  { label: "חבילות", href: "#packages" },
  { label: "תיק עבודות", href: "#portfolio" },
  { label: "שאלות נפוצות", href: "#faq" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-navy-950">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          <div>
            <div className="text-2xl font-black tracking-tight">
              <span className="bg-gradient-to-br from-white to-accent-light bg-clip-text text-transparent">
                Pixelio
              </span>
            </div>
            <p className="mt-3 text-sm text-white/60">
              אתרים שמביאים לקוחות.
            </p>
          </div>

          <nav aria-label="ניווט תחתון">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white/40">
              ניווט
            </h4>
            <ul className="mt-4 space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white/40">
              יצירת קשר
            </h4>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={waLink("היי, יש לי שאלה על Pixelio")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/70 transition-colors hover:text-white"
                  dir="ltr"
                >
                  WhatsApp: 058-712-2010
                </a>
              </li>
              <li>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=arielmindel10@gmail.com&su=פנייה%20דרך%20האתר%20של%20Pixelio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  arielmindel10@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-8 text-xs text-white/40 md:flex-row">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <p>© 2026 Pixelio. כל הזכויות שמורות.</p>
            <span className="hidden text-white/20 md:inline">·</span>
            <Link
              href="/privacy"
              className="transition-colors hover:text-white/70"
            >
              מדיניות פרטיות
            </Link>
            <span className="text-white/20">·</span>
            <Link
              href="/terms"
              className="transition-colors hover:text-white/70"
            >
              תנאי שימוש
            </Link>
          </div>
          <p>עוצב ונבנה באהבה בישראל 🇮🇱</p>
        </div>
      </div>
    </footer>
  );
}
