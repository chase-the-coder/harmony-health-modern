# Harmony Health — Modern Redesign

[![Deployed on Vercel](https://img.shields.io/badge/deployed%20on-vercel-black?logo=vercel)](https://vercel.com/chases-projects-6ad67705/harmony-health-modern)
[![Next.js 15](https://img.shields.io/badge/Next.js-15.5-black?logo=next.js)](https://nextjs.org)

Marketing website for **Harmony Health**, a functional-medicine practice in Athens, GA, led by Megan Cryder, NP-C. This is a ground-up redesign of yourharmonyhealth.com built to feel like a premium DTC healthcare brand (think Function Health + Parsley Health) while staying authentic to a solo small-town practice.

**Live:** [yourharmonyhealth.com](https://yourharmonyhealth.com) (pending DNS switch)
**Repo:** [chase-the-coder/harmony-health-modern](https://github.com/chase-the-coder/harmony-health-modern)
**Services:** HRT · Medical Weight Loss · Peptide Therapy · IV Hydration · Aesthetic Treatments

---

## Tech stack

| Layer | Choice | Why |
|---|---|---|
| Framework | **Next.js 15.5** (App Router) | SSG for marketing pages, best-in-class SEO + image optimization on Vercel |
| Language | **TypeScript** (strict: false) | Type safety without ceremony |
| Styling | **Tailwind v4** + **DaisyUI 5** theme | CSS-first config, consistent tokens |
| Animations | **framer-motion 12** | `useInView` scroll reveals, crossfades |
| Icons | **@phosphor-icons/react** | Editorial line icons, tree-shakable |
| Fonts | `Plus_Jakarta_Sans` + `Allura` (Google Fonts) | Swap-friendly, CLS-safe |
| Forms | Native `<form>` + `/api/lead` route | No framework bloat for one contact form |
| Hosting | **Vercel** (auto-deploy on push) | Zero-config SSG + image CDN |

**Runtime deps:** 7 (down from 27 on the ShipFast template). See `package.json`.

---

## Project structure

```
harmony-health-modern/
├── app/
│   ├── page.tsx                                   # Home (hero + Meet Megan + pillars)
│   ├── layout.tsx                                 # Root layout (fonts, schema, viewport)
│   ├── about/                                     # About Megan
│   ├── contact/                                   # Contact + embedded map hero
│   ├── services-and-pricing/                      # All service + membership pricing
│   ├── hormone-replacement-therapy-athens-ga/     # HRT (men's + women's)
│   ├── medical-weight-loss-athens-ga/             # Semaglutide + Tirzepatide
│   ├── peptide-therapy-athens-ga/                 # Sermorelin + 4-card grid
│   ├── iv-hydration-therapy-athens-ga/            # Immunity + Reboot + Energize
│   ├── aesthetic-treatments-athens-ga/            # Morpheus8 + InMode + injectables
│   ├── pricing-mens-hrt/                          # Dedicated men's HRT pricing
│   ├── pricing-womens-hrt/                        # Dedicated women's HRT pricing
│   ├── privacy-policy/ · tos/                     # Legal
│   ├── api/lead/                                  # Contact form submission
│   ├── opengraph-image.jpg                        # 1200x630 branded OG image
│   ├── twitter-image.jpg                          # Same, for X/Twitter cards
│   ├── icon.png · apple-icon.png · favicon.ico    # Circle H favicons
│   ├── sitemap.ts · robots.ts                     # Auto-generated XML/TXT
│   ├── error.tsx · not-found.tsx                  # Branded error boundaries
│   └── globals.css                                # Tailwind theme tokens
│
├── components/
│   ├── modern/                                    # The redesign — 20+ components
│   │   ├── ModernHero.tsx                         # Cream hero w/ DNA helix video bg
│   │   ├── ModernMeetMegan.tsx                    # "Clinical precision." provider intro
│   │   ├── ModernServices.tsx                     # 5-pillar alternating rows
│   │   ├── ModernTreatmentDetail.tsx              # Reusable service detail w/ accordion
│   │   ├── ModernCardGrid.tsx                     # Generic icon-card grid (peptides, InMode)
│   │   ├── ModernFAQ.tsx                          # Accordion FAQ
│   │   ├── ModernCTA.tsx                          # Dark rounded card w/ sage glow
│   │   ├── ModernPageHero.tsx                     # Reusable inner-page hero
│   │   ├── ModernSymptomGrid.tsx                  # Symptom-card grid
│   │   ├── ModernContactMapHero.tsx               # Map-as-hero for /contact
│   │   ├── ModernContactBlock.tsx                 # Info + form block
│   │   ├── ModernPatientPlans.tsx                 # New Patient + Membership cards
│   │   ├── ModernPricingAccordion.tsx             # Service pricing accordion
│   │   ├── ModernAboutHero.tsx                    # "The provider your labs deserve."
│   │   ├── ModernAboutBio.tsx                     # Megan's story + credentials
│   │   ├── ModernAboutJourney.tsx                 # RA remission story
│   │   └── ModernAboutValues.tsx                  # 4 practice principles
│   ├── harmony/                                   # Shared non-modern (header/footer)
│   │   ├── Header.tsx                             # Sticky header + dropdown nav
│   │   ├── Footer.tsx                             # Dark footer w/ sage glow
│   │   ├── UtilityBar.tsx                         # Top contact strip
│   │   └── BookingButton.tsx                      # Optimantra booking URLs
│   └── LayoutClient.tsx                           # Top loader + toast provider
│
├── libs/
│   └── seo.tsx                                    # SEO + schema helpers (see SEO section)
│
├── public/
│   ├── assets/                                    # WebP images (hero, service photos)
│   └── legacy-images/                             # Real photos (Megan portrait, logos)
│
├── .claude/
│   └── skills/
│       ├── mobile-audit/                          # Project-scoped Playwright audit
│       └── recreate-page/                         # Live-vs-local parity skill
│
├── _archive/                                      # Dead ShipFast code kept reversible
├── _source/                                       # Source PNGs before WebP (gitignored)
├── middleware.ts                                  # 301 redirects from legacy URLs
├── config.ts                                      # App config (brand, domain, colors)
└── .env.local                                     # Placeholder env (gitignored)
```

---

## Getting started

**Prerequisites:** Node 18-22, npm or pnpm.

```bash
git clone git@github.com:chase-the-coder/harmony-health-modern.git
cd harmony-health-modern
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Changes hot-reload.

### Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server (port 3000) |
| `npm run build` | Production build (statically pre-renders every page) |
| `npm start` | Serve production build |
| `npm run lint` | ESLint + Next.js rules |

### Env vars

None are required to run. `.env.local` only contains empty placeholders for future Supabase/Stripe/Resend use. Do not commit `.env.local` (already in `.gitignore`).

---

## Design system

### Palette

```css
--cream:           #FAF8F4   /* page background */
--sage-deep:       #1F2A25   /* dark sections, body text on light */
--sage:            #6B9680   /* accent green, buttons */
--sage-dark:       #517563   /* hover, headings on cream */
--sage-light:      #80BE9F   /* glows, pulses */
--sage-mint:       #9BD3B6   /* on-dark accents */
--body:            #30373E   /* paragraph text */
--muted:           #535353   /* secondary text */
--ring:            #E5ECE8   /* hairline borders on cards */
--tint:            #F7F9F8   /* subtle section bg */
```

### Typography

- **Headlines:** `Plus Jakarta Sans` 700, `tracking-tighter`, `leading-[1.05]`
- **Body:** `Plus Jakarta Sans` 400, `leading-relaxed`
- **Eyebrow pattern:** `text-[11px] uppercase tracking-[0.25em] font-medium` in a sage pill
- **Pull quotes / accents:** `italic font-light text-[#517563]` after a `<br />`

The three anchor headlines on the site all use the same **"period + italic sage line"** structure:
- Home: *Feel your absolute* / **best.**
- About: *The provider* / **your labs deserve.**
- Meet Megan: *Clinical precision.* / **Delivered personally.**

### Spacing (Harmony design protocol)

| Element | Tailwind |
|---|---|
| Section padding | `py-16 md:py-20` |
| Page hero padding | `pt-24 pb-16 md:pt-32 md:pb-20` |
| Service row spacing | `space-y-14 md:space-y-20` |
| Section header margin | `mb-12 md:mb-14` |

### Mobile protocol

Three hard rules enforced by the `mobile-audit` skill:

1. **Image-before-text on stacked layouts.** When a grid row stacks on mobile, the image div must come first in the DOM. Use `lg:order-1 / lg:order-2` to flip on desktop.
2. **No dark-on-dark contrast.** Dark sections (`bg-[#1F2A25]`) need `!text-white` on headings to defeat the global `h1-h6 { color: #30373E }` rule in `globals.css`.
3. **Audit before claiming done.** After any visual edit, run the audit (see below) and review all 18 screenshots.

---

## SEO setup

### Metadata helper (`libs/seo.tsx`)

```ts
import { getSEOTags } from "@/libs/seo";

export const metadata = getSEOTags({
  title: "Page Title | Harmony Health",
  description: "...",
  canonicalUrlRelative: "/page-path",
});
```

Applies: canonical URLs, `robots` directive with `max-image-preview:large`, OG + Twitter card with 1200x630 image hints, per-page keywords inheriting site defaults.

### Structured data

Four schema helpers are exposed:

| Helper | Where | Purpose |
|---|---|---|
| `renderSchemaTags()` | Root layout | MedicalBusiness + LocalBusiness (once per page) |
| `renderServiceSchema()` | Each service page | MedicalTherapy |
| `renderBreadcrumbSchema()` | All inner pages | BreadcrumbList |
| `renderFAQSchema(faqs)` | Service + pricing pages | FAQPage (Google rich snippet) |

Call them inside the page component's `<>...</>` fragment:

```tsx
export default function Page() {
  return (
    <>
      {renderServiceSchema({ name: "...", description: "...", path: "/..." })}
      {renderBreadcrumbSchema([{ name: "Home", path: "/" }, ...])}
      {renderFAQSchema(faqs)}
      <Header />
      <main>...</main>
      <Footer />
    </>
  );
}
```

### Sitemap + robots

Auto-generated at `/sitemap.xml` and `/robots.txt` from `app/sitemap.ts` and `app/robots.ts`. When you add a new page, add the path to `sitemap.ts`.

### Open Graph / link previews

- `app/opengraph-image.jpg` (1200x630, 86KB) — shows in WhatsApp, Slack, iMessage, Facebook, LinkedIn
- `app/twitter-image.jpg` — same content, for X/Twitter cards

To regenerate after a rebrand, see `_archive/docs/og-image-recipe.md` (or ask Claude to run the Nano Banana Pro + PIL composite flow again).

---

## Images

### Format policy

- **Photos:** WebP at quality 82 (`cwebp -q 82`)
- **Logos:** PNG with transparency
- **OG:** JPG at quality 85

### Compression workflow

1. Generate source image (Nano Banana Pro, camera, etc.) in `/tmp/`
2. Convert: `cwebp -q 82 /tmp/src.png -o public/assets/category/name.webp`
3. Archive source to `_source/assets/category/name.png`
4. Reference `/assets/category/name.webp` via `<Image src="..." />`

Next/Image at request time re-optimizes WebP → AVIF for modern browsers, so serving WebP at source is optimal.

### Size targets

| Image type | Target size |
|---|---|
| Hero (1920x1080) | under 200KB WebP |
| Service detail (1200x1500) | under 150KB WebP |
| Card thumbnail (800x600) | under 100KB WebP |

---

## Deployment

### Vercel auto-deploy

- Push to `main` → production deploy (~90s)
- Push to any other branch → preview deploy with unique URL
- PRs get preview URLs auto-commented

### Manual deploy

```bash
vercel deploy --prod --yes
```

### Domain

`yourharmonyhealth.com` is pointed to Vercel via **Settings → Domains**. SSL is auto-issued.

### Deployment protection

By default, Vercel blocks preview URLs with auth. Production is public. To adjust: Vercel project → **Settings → Deployment Protection**.

---

## Editing content

### Text content

All page content lives inline in `app/{route}/page.tsx` as arrays of objects (benefits, FAQs, candidates, etc.). Editing copy is a file edit + commit.

### Adding a service FAQ question

Find the `const faqs = [...]` array in the service page, add `{ question, answer }`, commit. FAQ schema auto-updates.

### Adding a new service page

1. Create `app/new-service-athens-ga/page.tsx` (copy from an existing service)
2. Add metadata via `getSEOTags()` with a canonical path
3. Add the four schema renders (service, breadcrumb, FAQ)
4. Add the path to `app/sitemap.ts`
5. Add a nav entry in `components/harmony/Header.tsx` NAV array
6. Add a card in `components/modern/ModernServices.tsx`

### Booking links

Centralized in `components/harmony/BookingButton.tsx` → `BOOKING_URLS`. Edit once, propagates site-wide.

---

## Mobile audit

Project-scoped Playwright skill at `.claude/skills/mobile-audit/`. Enforces the Harmony design protocol (image-before-text, spacing congruence, no dark-on-dark, no regressions).

### Run manually

```bash
node .claude/skills/mobile-audit/scripts/audit.js
```

Or narrow the scope:

```bash
URLS=/,/about node .claude/skills/mobile-audit/scripts/audit.js
PAGES=home,hrt node .claude/skills/mobile-audit/scripts/audit.js
```

Screenshots output to `/tmp/audit_{page}_{viewport}.png`. Captures mobile (375px) + desktop (1440px) for each page.

### Invoked by Claude automatically

The skill triggers after any page redesign or component edit. See `.claude/skills/mobile-audit/SKILL.md` for trigger conditions.

---

## Medical accuracy rule

**Every clinical claim on this site must be verifiable from a primary source or removed.** No fabricated stats, patient counts, practice years, provider credentials, or outcome percentages.

Cited examples already in the site:
- **STEP 1 trial** (Wilding et al., NEJM 2021): ~14.9% mean body weight loss on Semaglutide 2.4mg at 68 weeks
- **SURMOUNT-1 trial** (Jastreboff et al., NEJM 2022): ~20.9% on Tirzepatide 15mg at 72 weeks
- **HIM study** (Mulligan 2006): 38.7% prevalence of low T in men 45+
- **SWAN study** (AHA 2021): up to 80% perimenopausal symptoms

Credential claims (verified from live site):
- Megan Cryder, NP-C: Medical College of Georgia School of Nursing, then MSN-FNP from Texas A&M University (2013), practicing western medicine since 2005

**If unsure, remove the claim or ask the practice owner for a source.**

---

## Architecture decisions

### Why Next.js over Vite

Static marketing site with heavy images + local-SEO target keywords. Next.js gives us:
- Static pre-rendering (every page is pure HTML on first paint — Vite SPAs hydrate client-side)
- `next/image` optimization (WebP/AVIF transcoding, responsive srcsets, CDN edge caching)
- File-based OG image / favicon conventions
- Free middleware for 301 redirects from legacy URLs

Vite would be the right choice for an app (dashboard, admin) — not a content site.

### Why the `_archive/` folder

Starting from the ShipFast boilerplate meant inheriting a lot of dead code (auth, Stripe, blog, etc.). Instead of deleting, unused routes + components + libs live in `_archive/` so:
- Nothing gets compiled (excluded in `tsconfig.json`)
- If we need DB/auth/payments later, the starter code is right there
- Git history is cleaner than a git reset

### Why WebP and not AVIF at source

AVIF has better compression but slower encoding. WebP at quality 82 hits 90% size reduction vs PNG, and `next/image` re-encodes to AVIF on-the-fly for browsers that support it. Best of both.

### Why framer-motion and not CSS animations

Used in 20+ components for scroll-reveal (`useInView` with `once: true, margin: "-80px"`). CSS `@keyframes` doesn't support "only animate when visible in viewport." Tradeoff: ~50KB gzipped JS. Acceptable for the design quality.

---

## Contributing

This is a private repo, but if you have commit access:

1. Branch from `main`: `git checkout -b feat/my-change`
2. Make changes, run `npm run lint` + `npm run build` to validate
3. Run the mobile audit: `node .claude/skills/mobile-audit/scripts/audit.js`
4. Push the branch and open a PR — Vercel auto-posts a preview URL
5. Merge to `main` triggers the production deploy

Follow the design protocol (spacing, image-before-text, medical accuracy) outlined above.

---

## Contact

**Harmony Health**
2425 W. Broad Street, Suite 2
Athens, GA 30606
[(706) 614-6818](tel:7066146818) · [info@yourharmonyhealth.com](mailto:info@yourharmonyhealth.com)
Tuesday · Wednesday · Thursday, 9am–3pm

---

_Built by Chase Lindsay at Ember Tech LLC. Redesign shipped 2026._
