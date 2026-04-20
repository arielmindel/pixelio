"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { waLink } from "@/lib/whatsapp";

type Package = {
  name: string;
  price: string;
  subtitle: string;
  features: string[];
  cta: string;
  whatsappMessage: string;
  featured: boolean;
};

const PACKAGES: Package[] = [
  {
    name: "בייסיק",
    price: "1,900",
    subtitle: "דף נחיתה שעובד",
    features: [
      "אתר דף אחד מותאם למובייל",
      "כפתור וואטסאפ צף",
      "SEO בסיסי לגוגל",
      "העלאה לאוויר",
      "אספקה תוך יום אחד",
    ],
    cta: "בחרו בייסיק",
    whatsappMessage: "היי, אני מעוניין בחבילת בייסיק של Pixelio",
    featured: false,
  },
  {
    name: "פלוס",
    price: "3,900",
    subtitle: "חבילת הדגל — הכי משתלם",
    features: [
      "אתר רב-דפים (עד 5 דפים)",
      "כל מה שבבייסיק",
      "לוגו מעוצב",
      "רישום ב-Google My Business",
      "העברת דומיין קיים (או קנייה לכם)",
      "SEO מלא + אופטימיזציה ל-AI Search (GEO) — האתר מופיע גם בגוגל וגם בתוצאות של ChatGPT, Gemini ו-AI אחרים",
      "אספקה תוך יומיים",
    ],
    cta: "בחרו פלוס",
    whatsappMessage: "היי, אני מעוניין בחבילת פלוס של Pixelio",
    featured: true,
  },
  {
    name: "פרימיום",
    price: "6,900",
    subtitle: "הכל כלול + שיווק",
    features: [
      "כל מה שבפלוס",
      "טופס ליד חכם",
      "קמפיין פתיחה בפייסבוק/גוגל (ניהול ראשוני)",
      "SEO + GEO מתקדמים + אסטרטגיית מילות מפתח אישית — האתר שלך מותאם להופיע במנועי חיפוש מסורתיים ו-AI",
      "שבועיים תחזוקה חינם",
      "עדיפות בתמיכה",
      "אספקה תוך 3 ימים",
    ],
    cta: "בחרו פרימיום",
    whatsappMessage: "היי, אני מעוניין בחבילת פרימיום של Pixelio",
    featured: false,
  },
];

export function Packages() {
  return (
    <section id="packages" className="relative py-20 md:py-32">
      {/* Subtle background accent */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-1/4 -z-10 mx-auto h-[500px] max-w-4xl rounded-full bg-accent/10 blur-[120px]"
      />

      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-balance text-3xl font-black leading-tight tracking-tight md:text-5xl">
            3 חבילות השקה. בחרו את המתאימה לכם.
          </h2>
          <p className="mt-5 text-base text-white/60 md:text-lg">
            מחירים סופיים. בלי הפתעות. עד 3 תשלומים ללא ריבית בכרטיס אשראי.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:mt-20 md:grid-cols-3 md:items-start md:gap-5 lg:gap-6">
          {PACKAGES.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.12,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`relative flex flex-col rounded-2xl p-7 md:p-8 ${
                pkg.featured
                  ? "border-2 border-accent bg-gradient-to-b from-navy-800 to-navy-900 shadow-glow-lg md:-translate-y-4 md:scale-[1.03]"
                  : "border border-white/10 bg-navy-900/60 backdrop-blur-sm"
              }`}
            >
              {pkg.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1.5 rounded-full bg-gradient-to-l from-accent to-purple-500 px-4 py-1.5 text-xs font-bold text-white shadow-glow-md">
                    <Sparkles size={14} strokeWidth={2.5} />
                    הכי פופולרי
                  </div>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold md:text-3xl">{pkg.name}</h3>
                <p className="mt-1 text-sm text-white/60">{pkg.subtitle}</p>
              </div>

              <div className="mb-8 flex items-baseline gap-1.5">
                <span className="text-5xl font-black tracking-tight md:text-6xl">
                  {pkg.price}
                </span>
                <span className="text-2xl font-bold text-white/70">₪</span>
              </div>

              <ul className="mb-8 flex-1 space-y-3.5">
                {pkg.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-white/80 md:text-base"
                  >
                    <span
                      className={`mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                        pkg.featured
                          ? "bg-accent/20 text-accent"
                          : "bg-white/10 text-white/70"
                      }`}
                    >
                      <Check size={12} strokeWidth={3} />
                    </span>
                    <span className="leading-snug">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={waLink(pkg.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className={`block rounded-full px-6 py-3.5 text-center text-base font-semibold transition-all ${
                  pkg.featured
                    ? "bg-accent text-white shadow-glow-md hover:bg-accent-hover hover:shadow-glow-lg"
                    : "border border-white/15 bg-white/5 text-white hover:border-white/30 hover:bg-white/10"
                }`}
              >
                {pkg.cta}
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 text-center text-sm text-white/50 md:mt-14"
        >
          כל החבילות כוללות אחריות לשבועיים ותמיכה בוואטסאפ.
        </motion.p>
      </div>
    </section>
  );
}
