import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://pixelio.co.il/sitemap.xml",
    host: "https://pixelio.co.il",
  };
}
