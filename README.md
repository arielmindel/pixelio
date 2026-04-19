# Pixelio — Agency Landing Page

אתר תדמית של [Pixelio](https://pixelio.co.il) — סוכנות אתרים לעסקים קטנים בישראל.

Hebrew-first, RTL, dark premium theme. Built with Next.js 14 App Router.

## Stack

- **Next.js 14** — App Router, TypeScript, `src/` directory
- **Tailwind CSS v3** — custom navy/accent palette, glassmorphism, grain texture
- **Framer Motion** — fade-in-on-scroll, accordion, pulse animations, timeline line drawing
- **lucide-react** — icon set
- **Heebo** via `next/font/google` — Hebrew + Latin
- **No backend** — static marketing site

## Local development

```bash
npm install
npm run dev           # http://localhost:3000
npm run build         # production build
npm run start         # serve production build
```

Node.js 18.17+ required.

## Structure

```
src/
├── app/
│   ├── layout.tsx            # Root layout (RTL, Heebo, SEO metadata)
│   ├── page.tsx              # Landing page (composes all sections)
│   ├── globals.css           # Tailwind + scrollbar + grain + glass utilities
│   ├── icon.tsx              # 32px favicon (gradient "P")
│   ├── apple-icon.tsx        # 180px Apple touch icon
│   ├── opengraph-image.tsx   # 1200x630 OG / social preview
│   ├── robots.ts             # robots.txt generator
│   └── sitemap.ts            # sitemap.xml generator
├── components/
│   ├── Navbar.tsx            # Fixed top, glass on scroll, mobile hamburger
│   ├── Hero.tsx              # Animated gradient bg + dual CTAs + trust line
│   ├── Problem.tsx           # 3 problem cards (why businesses lose customers)
│   ├── Packages.tsx          # 3 pricing cards — Plus is featured
│   ├── MaintenanceAddon.tsx  # ₪249/mo maintenance upsell
│   ├── Process.tsx           # 4-step timeline with scroll-animated line
│   ├── Portfolio.tsx         # Qi Flow + 2 "coming soon" placeholders
│   ├── WhyPixelio.tsx        # 2x2 grid of selling points
│   ├── FAQ.tsx               # Expandable accordion
│   ├── FinalCTA.tsx          # #contact — big WhatsApp button
│   ├── Footer.tsx            # Brand + links + contact
│   ├── WhatsAppFloat.tsx     # Fixed floating WA button with pulse
│   ├── FadeIn.tsx            # Reusable scroll-reveal wrapper
│   └── icons/
│       └── WhatsAppIcon.tsx  # Custom WhatsApp SVG
└── lib/
    └── whatsapp.ts           # waLink() helper with encoded Hebrew text
```

## Editing content

- **Pricing & features** — `src/components/Packages.tsx` (array `PACKAGES`)
- **Process steps** — `src/components/Process.tsx` (array `STEPS`)
- **FAQ items** — `src/components/FAQ.tsx` (array `FAQS`)
- **Why Pixelio reasons** — `src/components/WhyPixelio.tsx` (array `REASONS`)
- **Portfolio featured project** — `src/components/Portfolio.tsx`
- **WhatsApp number** — `src/lib/whatsapp.ts` (`WHATSAPP_NUMBER`)
- **SEO metadata** — `src/app/layout.tsx`
- **Colors / theme** — `tailwind.config.ts`

## Replacing the portfolio image

The Qi Flow card uses `/public/portfolio/qi-flow-placeholder.svg` (generated gradient).
To replace with a real screenshot:

1. Save your screenshot as `qi-flow.jpg` (or `.png`) in `public/portfolio/`
2. In `src/components/Portfolio.tsx`, update the `src` to `/portfolio/qi-flow.jpg`

## Deploying to Vercel

### First-time setup

```bash
# 1. Create GitHub repo and push
git init
git add .
git commit -m "initial commit: Pixelio landing page"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/pixelio.git
git push -u origin main

# 2. Connect to Vercel
# Option A (CLI):
npm i -g vercel
vercel                # first run — answer prompts, links project
vercel --prod         # deploy to production

# Option B (Dashboard):
# - Go to https://vercel.com/new
# - Import the GitHub repo
# - Framework preset: Next.js (auto-detected)
# - Deploy
```

### Custom domain (pixelio.co.il)

1. In Vercel dashboard → Project → Settings → Domains → add `pixelio.co.il` and `www.pixelio.co.il`
2. In MyNames DNS panel:
   - Add `A` record → `@` → `76.76.21.21`
   - Add `CNAME` → `www` → `cname.vercel-dns.com`
3. Vercel issues SSL certificates automatically (usually <5 min)

### Subsequent deploys

Any push to `main` auto-deploys to production. Any push to other branches creates a preview deployment.

## SEO checklist

- [x] Hebrew metadata, `lang="he"`, `dir="rtl"`
- [x] Open Graph + Twitter Card + `locale: he_IL`
- [x] Auto-generated `robots.txt` and `sitemap.xml`
- [x] Auto-generated OG image at `/opengraph-image`
- [x] Favicon + Apple touch icon
- [ ] Google Search Console verification (add after deploy)
- [ ] Google Analytics / Plausible (optional)

## License

Private — © 2026 Pixelio. All rights reserved.
