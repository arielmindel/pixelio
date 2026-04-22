import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "מדיניות פרטיות",
  description:
    "מדיניות הפרטיות של Pixelio — איזה מידע אנחנו אוספים, איך אנחנו משתמשים בו, ומה הזכויות שלכם.",
};

export default function PrivacyPage() {
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
          מדיניות פרטיות
        </h1>

        <p className="mt-3 text-sm text-white/50">
          עודכן לאחרונה: אפריל 2026
        </p>

        <div className="prose-pixelio mt-10 space-y-8 text-white/75">
          <section>
            <h2 className="text-xl font-bold text-white md:text-2xl">1. מי אנחנו</h2>
            <p className="mt-3 leading-relaxed">
              Pixelio היא סוכנות אתרים לעסקים קטנים בישראל. בעלי האתר:
              אריאל מינדל. ליצירת קשר: arielmindel10@gmail.com,
              וואטסאפ 058-712-2010.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white md:text-2xl">
              2. איזה מידע אנחנו אוספים
            </h2>
            <ul className="mt-3 list-disc space-y-2 pr-5 leading-relaxed">
              <li>
                <strong>מידע שאתם שולחים לנו</strong> דרך טופס יצירת הקשר: שם,
                שם העסק, מספר טלפון, הודעה.
              </li>
              <li>
                <strong>נתוני גלישה אנונימיים</strong> דרך כלי אנליטיקה (Google
                Analytics, Microsoft Clarity) — עמודים שביקרתם בהם, זמן שהייה,
                סוג מכשיר, מיקום כללי. כתובת ה-IP שלכם עוברת אנונימיזציה.
              </li>
              <li>
                <strong>לא</strong> אנחנו אוספים מידע רגיש (מספרי תעודת זהות,
                פרטי אשראי, מידע רפואי).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white md:text-2xl">
              3. למה אנחנו משתמשים במידע
            </h2>
            <ul className="mt-3 list-disc space-y-2 pr-5 leading-relaxed">
              <li>להחזיר אליכם עם הצעת מחיר ולתאם פגישת היכרות.</li>
              <li>לשפר את האתר ואת שירותי החבילות שלנו.</li>
              <li>לספק את השירות שהזמנתם (בניית האתר שלכם).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white md:text-2xl">
              4. העברת מידע לצדדים שלישיים
            </h2>
            <p className="mt-3 leading-relaxed">
              אנחנו לא מוכרים את המידע שלכם לאף אחד. אנחנו משתמשים בספקי
              תשתית (Vercel לאחסון האתר, Google Analytics ו-Microsoft
              Clarity לאנליטיקה) שמעבדים נתונים מטעמנו בהתאם למדיניות
              הפרטיות שלהם.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white md:text-2xl">
              5. קוקיז (Cookies)
            </h2>
            <p className="mt-3 leading-relaxed">
              האתר משתמש בקוקיז הכרחיים (לתפקוד האתר) ובקוקיז אנליטיים
              (לשיפור השירות). אתם יכולים לחסום קוקיז דרך הגדרות הדפדפן שלכם
              — חלק מהאתר עשוי להיות פחות פונקציונלי.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white md:text-2xl">
              6. הזכויות שלכם
            </h2>
            <ul className="mt-3 list-disc space-y-2 pr-5 leading-relaxed">
              <li>לבקש לראות את המידע שאספנו עליכם.</li>
              <li>לבקש לתקן או למחוק את המידע שלכם.</li>
              <li>לבטל הסכמה לאנליטיקה בכל רגע.</li>
            </ul>
            <p className="mt-3 leading-relaxed">
              כדי לממש זכויות אלה, שלחו מייל ל-arielmindel10@gmail.com.
              נחזור אליכם תוך 14 ימי עסקים.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white md:text-2xl">
              7. אבטחת מידע
            </h2>
            <p className="mt-3 leading-relaxed">
              אנחנו נוקטים באמצעים סבירים להגן על המידע שלכם: הצפנה (HTTPS),
              חיבור מאובטח לאחסון, גישה מוגבלת. עם זאת, אף מערכת לא בטוחה
              ב-100% ברשת האינטרנט.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white md:text-2xl">
              8. שינויים במדיניות
            </h2>
            <p className="mt-3 leading-relaxed">
              אנחנו עשויים לעדכן את המדיניות הזאת מעת לעת. תמיד יופיע תאריך
              העדכון האחרון בראש העמוד.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white md:text-2xl">9. יצירת קשר</h2>
            <p className="mt-3 leading-relaxed">
              שאלות? מייל: arielmindel10@gmail.com | וואטסאפ: 058-712-2010.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
