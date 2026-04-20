const SITE_URL = "https://pixelio.co.il";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Pixelio",
  description:
    "סוכנות אתרים לעסקים קטנים בישראל — בניית אתרים שמביאים לקוחות",
  url: SITE_URL,
  logo: `${SITE_URL}/icon`,
  founder: {
    "@type": "Person",
    name: "Ariel Mindel",
  },
  areaServed: "IL",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+972587122010",
    contactType: "customer service",
    availableLanguage: ["Hebrew", "English"],
  },
  sameAs: [],
};

type FaqItem = { q: string; a: string };

export function OrganizationJsonLd() {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
    />
  );
}

export function FaqJsonLd({ items }: { items: FaqItem[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
