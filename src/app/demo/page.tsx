import type { Metadata } from "next";
import Link from "next/link";
import { Bot, Sparkles, ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppChat } from "@/components/demo/WhatsAppChat";

export const metadata: Metadata = {
  title: "דמו בוט וואטסאפ AI — Pixelio",
  description:
    "נסי בעצמך — בוט וואטסאפ חכם שעונה ללקוחות של מספרת ליאור גל בעברית טבעית, מסביר מחירים וקובע תורים. דמו אינטראקטיבי של Pixelio.",
  alternates: { canonical: "https://pixelio.co.il/demo" },
  openGraph: {
    title: "דמו בוט וואטסאפ AI — Pixelio",
    description:
      "בוט אמיתי שעונה ללקוחות בעברית, מטפל בתורים ובמחירים — נסי בעצמך.",
    url: "https://pixelio.co.il/demo",
  },
};

export default function DemoPage() {
  return (
    <>
      <Navbar />
      <main className="relative min-h-screen overflow-hidden bg-navy-950 pt-24 pb-20">
        {/* Background gradients */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />
          <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-[120px]" />
        </div>

        <div className="mx-auto max-w-3xl px-4">
          {/* Hero copy */}
          <div className="mx-auto mb-8 max-w-2xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm text-accent">
              <Sparkles className="h-3.5 w-3.5" />
              <span>דמו חי</span>
            </div>
            <h1 className="text-balance text-3xl font-extrabold leading-tight text-white md:text-5xl">
              נסי בוט וואטסאפ <span className="bg-gradient-to-r from-accent to-purple-400 bg-clip-text text-transparent">חכם</span> בעצמך
            </h1>
            <p className="mt-4 text-balance text-base text-white/70 md:text-lg">
              ככה ייראה הוואטסאפ של העסק שלך כשבוט AI עונה ללקוחות אוטומטית — בעברית טבעית, 24/7.
              <br />
              דברי איתו כאילו את לקוחה של <span className="font-semibold text-white">מספרת ליאור גל</span>.
            </p>
          </div>

          {/* Callout banner */}
          <Link
            href="/#lead"
            className="group mx-auto mb-6 flex max-w-md items-center justify-between gap-3 rounded-2xl border border-accent/30 bg-gradient-to-l from-accent/15 via-purple-500/15 to-accent/15 px-4 py-3 transition-all hover:border-accent/60 hover:shadow-glow-md"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent/20 text-accent">
                <Bot className="h-4 w-4" />
              </div>
              <div className="text-right">
                <div className="text-sm font-semibold text-white">
                  זה דמו — בוט אמיתי שאנחנו בונים לעסקים
                </div>
                <div className="text-xs text-white/60">
                  לחצי כאן להזמנת דמו לעסק שלך
                </div>
              </div>
            </div>
            <ArrowLeft className="h-4 w-4 shrink-0 text-accent transition-transform group-hover:-translate-x-1" />
          </Link>

          {/* Chat */}
          <WhatsAppChat />

          {/* Bottom hint */}
          <p className="mx-auto mt-6 max-w-md text-center text-xs text-white/40">
            הבוט ענה לך אוטומטית. אצלך זה יעבוד עם ה-WhatsApp Business האמיתי שלך, יומן הזמנות חי ומאגר המידע של העסק.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
