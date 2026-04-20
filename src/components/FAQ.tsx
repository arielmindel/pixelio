"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import { FaqJsonLd } from "@/components/JsonLd";

type QA = { q: string; a: string };

const FAQS: QA[] = [
  {
    q: "כמה זמן לוקח לבנות אתר?",
    a: "בייסיק — יום אחד. פלוס — יומיים. פרימיום — עד 3 ימים. מהיום שמאשרים חבילה.",
  },
  {
    q: "מה אם אני לא מרוצה מהעיצוב?",
    a: "אתם מקבלים סבב תיקונים מלא. משנים צבעים, תמונות, טקסטים — עד שאתם מרוצים.",
  },
  {
    q: "האם כלול דומיין ואחסון?",
    a: "בחבילת פלוס ופרימיום — כולל העברת דומיין קיים או קנייה לכם (בתוספת עלות הדומיין עצמו). אחסון כלול בכל החבילות לשנה הראשונה.",
  },
  {
    q: "מה קורה אחרי שהאתר עולה לאוויר?",
    a: "שבועיים אחריות מלאה על תיקונים. אחר כך — אפשר להוסיף חבילת תחזוקה חודשית ב-249 ₪ (לא חובה).",
  },
  {
    q: "אני יכול לעדכן את האתר לבד?",
    a: "כן. אנחנו מעבירים לכם גישה מלאה לעריכת תוכן בסיסי. לשינויים מורכבים יותר — תחזוקה חודשית או עבודה לפי שעה.",
  },
  {
    q: "למה לא Wix?",
    a: "Wix זה לבנות לבד. אצלנו אתם מקבלים אתר מעוצב מקצועית, מותאם לעסק שלכם, מהיר, ועם SEO נכון — בלי שתצטרכו לגעת בכלום.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-20 md:py-32">
      <FaqJsonLd items={FAQS} />
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-balance text-3xl font-black leading-tight tracking-tight md:text-5xl">
            שאלות נפוצות
          </h2>
          <p className="mt-5 text-base text-white/60 md:text-lg">
            לא מצאתם תשובה? שלחו הודעה בוואטסאפ ונחזור תוך שעה.
          </p>
        </motion.div>

        <div className="mt-12 space-y-3 md:mt-16">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`overflow-hidden rounded-2xl border transition-colors ${
                  isOpen
                    ? "border-accent/40 bg-navy-900/80"
                    : "border-white/10 bg-navy-900/50 hover:border-white/20"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-right md:px-7 md:py-6"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold md:text-lg">
                    {faq.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                      isOpen ? "bg-accent text-white" : "bg-white/5 text-white/70"
                    }`}
                    aria-hidden
                  >
                    <Plus size={16} strokeWidth={2.5} />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-sm leading-relaxed text-white/70 md:px-7 md:pb-7 md:text-base">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
