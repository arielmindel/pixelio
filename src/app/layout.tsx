import type { Metadata, Viewport } from "next";
import { Heebo } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import { OrganizationJsonLd } from "@/components/JsonLd";
import { Clarity } from "@/components/Clarity";
import "./globals.css";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  display: "swap",
  variable: "--font-heebo",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const SITE_URL = "https://pixelio.co.il";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Pixelio — בוטי וואטסאפ AI לעסקים בישראל",
    template: "%s | Pixelio",
  },
  description:
    "בוט AI שעונה ללקוחות שלך 24/7 בעברית טבעית. מטפל ב-90% מההודעות אוטומטית. הקמה תוך 7 ימים. ללא התחייבות.",
  keywords: [
    "בוט וואטסאפ",
    "בוט AI",
    "WhatsApp Bot",
    "צ'אטבוט",
    "בוט לעסק",
    "אוטומציה לוואטסאפ",
    "בינה מלאכותית לעסק",
    "WhatsApp Business",
    "בוט בעברית",
    "Pixelio",
  ],
  authors: [{ name: "Pixelio" }],
  creator: "Pixelio",
  publisher: "Pixelio",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Pixelio — בוטי וואטסאפ AI לעסקים בישראל",
    description:
      "בוט AI שעונה ללקוחות שלך 24/7 בעברית טבעית. הקמה תוך 7 ימים. ללא התחייבות.",
    url: SITE_URL,
    siteName: "Pixelio",
    locale: "he_IL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pixelio — בוטי וואטסאפ AI לעסקים בישראל",
    description:
      "בוט AI שעונה ללקוחות שלך 24/7 בעברית טבעית. הקמה תוך 7 ימים.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Google Search Console meta tag — set NEXT_PUBLIC_GSC_VERIFICATION in .env.local
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION,
  },
  category: "business",
};

export const viewport: Viewport = {
  themeColor: "#0A0E1A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" className={heebo.variable}>
      <body className="font-sans bg-navy-950 text-white antialiased">
        {children}
        <GoogleAnalytics gaId="G-D8PM2J4JS5" />
        <OrganizationJsonLd />
        <Clarity />
      </body>
    </html>
  );
}
