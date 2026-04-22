# Pixelio Site Audit — April 2026

Status legend:
- ✅ **Already existed** before this audit
- 🆕 **Newly added** during this audit
- ⚠️ **Requires user input** before it fully works (env var, real content)

---

## SEO / Structured Data

| Item | Status | Location | Notes |
|---|---|---|---|
| robots.txt with AI crawler rules | ✅ | `src/app/robots.ts` | Explicit allowlist for GPTBot, ClaudeBot, PerplexityBot, Google-Extended + 8 more |
| sitemap.xml | ✅ | `src/app/sitemap.ts` | **Expanded** this pass to include `/privacy` and `/terms` |
| llms.txt | ✅ | `public/llms.txt` | Hebrew + English summary of services and pricing |
| Organization JSON-LD | ✅ | `src/components/JsonLd.tsx` → rendered in `layout.tsx` | Wired in `<body>` so it ships on every page |
| FAQPage JSON-LD | ✅ | `src/components/JsonLd.tsx` → rendered in `FAQ.tsx` | Uses existing 6 FAQ items as `mainEntity` |
| Service JSON-LD per package | 🆕 | `src/components/JsonLd.tsx` (`ServicesJsonLd`) → rendered in `Packages.tsx` | One `Service` + `Offer` per tier (Basic/Plus/Premium), ILS currency |
| Canonical URL | ✅ | `layout.tsx` (`alternates.canonical`) | Points to `https://pixelio.co.il` |
| Complete metadata (title/desc/OG/Twitter/keywords) | ✅ | `layout.tsx` | Title template `%s | Pixelio` added; keywords now include SEO/GEO/AI Search |

---

## Analytics (code only — IDs added later via env vars)

| Item | Status | Location | Notes |
|---|---|---|---|
| Google Analytics 4 | 🆕⚠️ | `src/components/Analytics.tsx` | Reads `NEXT_PUBLIC_GA_ID`. No-op if unset. IP anonymization on. |
| Microsoft Clarity | 🆕⚠️ | `src/components/Analytics.tsx` | Reads `NEXT_PUBLIC_CLARITY_ID`. No-op if unset. |
| Google Search Console verification | 🆕⚠️ | `layout.tsx` `metadata.verification.google` | Reads `NEXT_PUBLIC_GSC_VERIFICATION`. Emits `<meta name="google-site-verification">` only if set. |
| `.env.local.example` | 🆕 | Repo root | Full placeholder file with instructions for each variable. |

**What Ariel needs to do:**
1. Create GA4 property at https://analytics.google.com → copy Measurement ID (`G-XXXX…`) → paste as `NEXT_PUBLIC_GA_ID` in Vercel env vars
2. Create Clarity project at https://clarity.microsoft.com → copy Project ID → paste as `NEXT_PUBLIC_CLARITY_ID`
3. Verify site at https://search.google.com/search-console using "HTML tag" method → copy the `content="..."` value → paste as `NEXT_PUBLIC_GSC_VERIFICATION`
4. Redeploy (Vercel auto-redeploys when env vars change)

---

## On-site Sections (Hebrew, RTL)

| Item | Status | Location | Notes |
|---|---|---|---|
| Portfolio | ✅ | `src/components/Portfolio.tsx` | Qi Flow (placeholder SVG) + 2 "בקרוב" cards. Replace placeholder with a real screenshot when live. |
| Client logos strip (6 slots) | 🆕 | `src/components/ClientLogos.tsx` | All 6 say "הלוגו שלך כאן" — doubles as a sales hook. Positioned between Portfolio and WhyPixelio. |
| Testimonials (2 placeholder cards) | 🆕 | `src/components/Testimonials.tsx` | Honest placeholders — no fake quotes. "ביקורת ראשונה בקרוב". Positioned between WhyPixelio and FAQ. |
| Contact / lead form | 🆕⚠️ | `src/components/ContactForm.tsx` + `src/app/api/contact/route.ts` | Fields: שם, שם העסק, טלפון, חבילה (select), הודעה. Posts to `/api/contact` which validates and logs to server console. **Email delivery is a placeholder** — see `.env.local.example` for Resend integration code (commented). |
| "מה כולל בכל חבילה" expandable | 🆕 | `src/components/Packages.tsx` (`PackageCard`) | Each card now has a "מה כלול בפירוט" toggle that expands a descriptive paragraph. Uses `AnimatePresence` to match existing animation style. |
| Footer with contact | ✅ | `src/components/Footer.tsx` | WhatsApp 058-712-2010 (wa.me link), email arielmindel10@gmail.com (Gmail web compose). **Added** links to `/privacy` and `/terms` this pass. |

---

## Legal Pages

| Item | Status | Location | Notes |
|---|---|---|---|
| /privacy | 🆕 | `src/app/privacy/page.tsx` | 9 sections: identity, data collection, usage, third parties, cookies, rights, security, changes, contact. Real contact details (arielmindel10@gmail.com, 058-712-2010). |
| /terms | 🆕 | `src/app/terms/page.tsx` | 12 sections: general, services, process, warranty (2 weeks), maintenance (249 ILS/mo), IP, customer duties, payment, liability cap, changes, Israeli law + Tel Aviv jurisdiction, contact. |

Both pages: Hebrew RTL, dark navy theme, linked from footer, included in sitemap, metadata set.

---

## Design / Animation Guardrails (verified untouched)

| Feature | Status |
|---|---|
| Heebo font | ✅ Unchanged |
| RTL layout + `dir="rtl"` | ✅ Unchanged |
| Hero animated gradient + orbs + grain + spotlight | ✅ Unchanged |
| Text shimmer / spotlight cursor / sticky stacking (if earlier present) | ✅ Untouched (features from earlier experiments were reverted per user request) |
| Color palette (#0A0E1A navy, #3B82F6 accent) | ✅ Unchanged |
| Pricing values (1,900 / 3,900 / 6,900 / 249) | ✅ Unchanged |

---

## What's Still Pending (Product Work, Not Code)

These are things **you** need to do yourself — can't be automated:

1. **Get real clients → replace Qi Flow placeholder SVG** with actual screenshot at `public/portfolio/qi-flow.jpg` and update `src` in `Portfolio.tsx`.
2. **Collect real testimonials** after first launches → replace placeholders in `Testimonials.tsx` with real names and quotes.
3. **Replace client logo placeholders** with real SVG/PNG logos in `ClientLogos.tsx` after each new client launches.
4. **Set analytics env vars** in Vercel dashboard (see "What Ariel needs to do" section above).
5. **Decide on email delivery for the contact form** — either:
   - Keep it as-is (submissions only land in server logs, visible via `vercel logs`)
   - Install Resend and uncomment the block in `src/app/api/contact/route.ts` (free tier: 100 emails/day)
   - Use Formspree as an even simpler swap

---

## Build Verification

Run locally:
```bash
npm run build
```
Expected: ✅ No errors, all 11 routes prerendered (`/`, `/privacy`, `/terms`, `/api/contact`, `/icon`, `/apple-icon`, `/opengraph-image`, `/robots.txt`, `/sitemap.xml`, `/_not-found`, plus internals).
