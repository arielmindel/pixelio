import type { Metadata, Viewport } from "next";
import { Heebo } from "next/font/google";
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
  title: "Pixelio — סוכנות אתרים לעסקים קטנים בישראל",
  description:
    "בונים אתרים שמביאים לקוחות. חבילות השקה החל מ-1,900 ₪. אתר חי תוך יום-יומיים. עד 3 תשלומים.",
  keywords: [
    "בניית אתרים",
    "סוכנות אתרים",
    "אתר לעסק",
    "אתרים לעסקים קטנים",
    "בניית אתר תדמית",
    "עיצוב אתרים",
    "דף נחיתה",
    "Pixelio",
  ],
  authors: [{ name: "Pixelio" }],
  creator: "Pixelio",
  publisher: "Pixelio",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Pixelio — סוכנות אתרים לעסקים קטנים בישראל",
    description:
      "בונים אתרים שמביאים לקוחות. חבילות השקה החל מ-1,900 ₪. אתר חי תוך יום-יומיים.",
    url: SITE_URL,
    siteName: "Pixelio",
    locale: "he_IL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pixelio — סוכנות אתרים לעסקים קטנים בישראל",
    description:
      "בונים אתרים שמביאים לקוחות. חבילות השקה החל מ-1,900 ₪. אתר חי תוך יום-יומיים.",
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
      </body>
    </html>
  );
}
