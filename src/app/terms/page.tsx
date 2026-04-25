import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "תנאי שימוש",
  description:
    "תנאי השימוש של Pixelio — מה מותר ומה אסור באתר, ההסכם בין Pixelio לבין לקוחות שמזמינים שירות.",
};

export default function TermsPage() {
  return (
    <main className="relative min-h-screen bg-navy-950 py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <Link
          href="/"
          className="mb-10 inline-block text-sm text-accent transition-colors hover:text-accent-light"
        >
          → חזרה לעמוד הבית
        </Link>

        <h1 className="text-balance text-4xl font-black leading-tight tracking-tight md:text-5xl">
          תנאי שימוש
        </h1>

        <p className="mt-3 text-sm text-white/50">עודכן לאחרונה: אפריל 2026</p>

        <div className="prose-pixelio mt-10 space-y-8 text-white/75">
          <section>
            <h2 className="text-xl font-bold text-white md:text-2xl">1. כללי</h2>
            <p className="mt-3 leading-relaxed">
              ברוכים הבאים ל-Pixelio. השימוש באתר pixelio.co.il ובשירותים
              המוצעים בו כפוף לתנאים המפורטים כאן. כניסה לאתר או הזמנת שירות
              מהווה הסכמה לתנאים אלה.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white md:text-2xl">
              2. השירותים שאנחנו מציעים
            </h2>
            <p className="mt-3 leading-relaxed">
              Pixelio בונה אתרי אינטרנט לעסקים בישראל. כל חבילה (בייסיק,
              פלוס, פרימיום) כוללת את המוצרים והשירותים המפורטים בעמוד הבית.
              המחירים המפורסמים באתר הם המחירים הסופיים, לפני מע"מ אם וכאשר
              חל.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white md:text-2xl">
              3. תהליך העבודה
            </h2>
            <ul className="mt-3 list-disc space-y-2 pr-5 leading-relaxed">
              <li>שיחת היכרות בוואטסאפ לתיאום צרכים.</li>
              <li>אנחנו בונים גרסה ראשונית ושולחים אותה לאישור — ללא התחייבות.</li>
              <li>
                לאחר האישור שלכם — אתם משלמים (עד 3 תשלומים באשראי) ואנחנו
                מבצעים תיקונים אחרונים ומעלים לאוויר.
              </li>
              <li>
                משך האספקה: יום אחד (בייסיק), יומיים (פלוס), שלושה ימים
                (פרימיום) — החל מיום אישור החבילה.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white md:text-2xl">4. אחריות</h2>
            <p className="mt-3 leading-relaxed">
              כל החבילות כוללות <strong>שבועיים אחריות</strong> מיום עליית
              האתר לאוויר. במסגרתה נתקן באגים או תקלות שנובעים מהעבודה שלנו,
              ללא עלות נוספת. האחריות אינה כוללת שינויים יזומים של הלקוח
              (תוכן חדש, דפים חדשים, עיצוב שונה) — אלה כפופים לחבילת תחזוקה
              או לתמחור לפי שעה.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white md:text-2xl">
              5. תחזוקה חודשית (אופציונלי)
            </h2>
            <p className="mt-3 leading-relaxed">
              חבילת תחזוקה בסך 249 ₪ לחודש כוללת: עדכוני תוכן שוטפים, גיבויים,
              תיקוני באגים, ותמיכה בוואטסאפ. ניתן לבטל בכל עת בהודעה של 30
              יום מראש.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white md:text-2xl">
              6. בעלות וזכויות יוצרים
            </h2>
            <ul className="mt-3 list-disc space-y-2 pr-5 leading-relaxed">
              <li>
                לאחר תשלום מלא — האתר, הלוגו (אם רלוונטי לחבילה), וכל התוכן
                המותאם אישית — שייכים ללקוח.
              </li>
              <li>
                רכיבי קוד כלליים וספריות קוד פתוח נשארים תחת הרישיונות שלהם.
              </li>
              <li>
                Pixelio שומר לעצמו את הזכות להציג את האתר כדוגמה בתיק העבודות,
                אלא אם הלקוח מבקש אחרת בכתב.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white md:text-2xl">
              7. אחריות הלקוח
            </h2>
            <ul className="mt-3 list-disc space-y-2 pr-5 leading-relaxed">
              <li>
                לספק תוכן (טקסטים, תמונות, לוגו, פרטי עסק) בתוך 7 ימים מיום
                אישור החבילה. עיכוב בהעברת תוכן מאריך את זמן האספקה באופן
                יחסי.
              </li>
              <li>
                לוודא שהתוכן שהועבר חוקי ואינו מפר זכויות יוצרים של צד שלישי.
              </li>
              <li>
                להחזיק את חשבונות הפלטפורמה שלו (Google Business, Facebook,
                דומיין) על שמו.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white md:text-2xl">8. תשלום</h2>
            <p className="mt-3 leading-relaxed">
              התשלום מתבצע בכרטיס אשראי, עד 3 תשלומים ללא ריבית. התשלום מתבצע
              לאחר אישור האתר ולפני העלאתו לאוויר. ללא תשלום מלא, האתר לא
              יועלה לדומיין של הלקוח.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white md:text-2xl">
              9. הגבלת אחריות
            </h2>
            <p className="mt-3 leading-relaxed">
              Pixelio לא אחראית לנזקים עקיפים או תוצאתיים הנובעים משימוש
              באתר או בשירותים. האחריות הכוללת שלנו לא תעלה על סכום החבילה
              ששולם. אנחנו לא מבטיחים תוצאות עסקיות ספציפיות (מספר לידים,
              המרות, וכד&apos;) — אלה תלויים בגורמים שמחוץ לשליטתנו.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white md:text-2xl">
              10. שינויים בתנאים
            </h2>
            <p className="mt-3 leading-relaxed">
              אנחנו עשויים לעדכן תנאים אלה מעת לעת. השימוש המתמשך באתר לאחר
              עדכון מהווה הסכמה לתנאים החדשים.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white md:text-2xl">
              11. דין וסמכות שיפוט
            </h2>
            <p className="mt-3 leading-relaxed">
              על הסכם זה יחול הדין הישראלי. סמכות השיפוט הבלעדית בכל מחלוקת
              תהיה לבתי המשפט במחוז תל אביב.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white md:text-2xl">
              12. יצירת קשר
            </h2>
            <p className="mt-3 leading-relaxed">
              שאלות על התנאים? מייל: arielmindel10@gmail.com | וואטסאפ:
              058-712-2010.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
