const SITE_URL = "https://pixelio.co.il";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Pixelio",
  description:
    "סוכנות בוטי וואטסאפ AI לעסקים בישראל — בוטים חכמים שעונים ללקוחות 24/7",
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

type ServiceItem = {
  name: string;
  description: string;
  price: string; // ILS, numeric string (no symbols)
};

export function ServicesJsonLd({ services }: { services: ServiceItem[] }) {
  // Each package becomes its own Service + Offer.
  const data = services.map((svc) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Pixelio — ${svc.name}`,
    serviceType: "AI WhatsApp Chatbot Development",
    provider: {
      "@type": "Organization",
      name: "Pixelio",
      url: SITE_URL,
    },
    areaServed: { "@type": "Country", name: "Israel" },
    description: svc.description,
    offers: {
      "@type": "Offer",
      price: svc.price,
      priceCurrency: "ILS",
      availability: "https://schema.org/InStock",
      url: `${SITE_URL}/#packages`,
    },
  }));

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
