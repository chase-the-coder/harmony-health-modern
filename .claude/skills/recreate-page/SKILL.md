---
name: recreate-page
description: Recreate, rebuild, or review a page of this Next.js rebuild against the live yourharmonyhealth.com site using Playwright for pixel-level verification. TRIGGER whenever the user says "recreate page", "recreate the X page", "rebuild X page", "review X page", "verify X page", "audit X page", "compare X page to live", "check if X matches live", or any similar phrasing about making a page of this rebuild match the live WordPress site. Do NOT trigger for general coding tasks unrelated to yourharmonyhealth.com fidelity.
---

# Recreate Page (yourharmonyhealth.com → Next.js 15)

Project-scoped skill for this repo ONLY. Runs a rigorous live-vs-local fidelity pass using Playwright, then applies fixes page-by-page.

## When to use

The user is comparing the local Next.js rebuild to the live `yourharmonyhealth.com` site and wants pixel-level parity on a specific page. Triggers include:

- "Recreate the about page"
- "Rebuild the pricing page to match live"
- "Verify the contact page matches"
- "Audit the home page"
- "Why does /services-and-pricing look different from the live site?"

## Hard rules

1. **Always Playwright, never guess.** Every claim about the live site must come from a Playwright probe with screenshots + computed CSS, not from memory or the XML export. Memory is stale.
2. **Section-level screenshots, not just full-page.** A full-page screenshot hides layout-swap bugs (image-left vs image-right). Always capture per-section clips so they can be diffed side-by-side.
3. **Use the real images.** Every image referenced by the live site is already downloaded to `public/legacy-images/full-uploads/` (from the Duplicator archive, 8,098 files, 728MB). Never download from the live server — search locally first.
4. **Hero sliders:** the filenames in `/wp-content/uploads/revslider/slider-2/` are Kitchor theme demos and NOT what the site actually displays. The real slider images are referenced by Slider Revolution's custom DB config; capture them by observing autoplay over 40 seconds. See `scripts/capture-slider.mjs`.
5. **One page at a time.** Don't try to fix everything. The user asks for a specific page; scope to it.
6. **Dev server must be running.** Check `curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/` before running the audit. If not running, start it (`npm run dev` in background).

## The process

### Step 1 — Identify the page

Map the user's language to a route:

| User says | Route |
|---|---|
| home / homepage / main page | `/` |
| about / Megan / practitioners | `/about` |
| contact | `/contact` |
| pricing / pricing FAQ | `/pricing` |
| men's HRT pricing | `/pricing-mens-hrt` |
| women's HRT pricing | `/pricing-womens-hrt` |
| medical weight loss pricing | `/medical-weight-loss-pricing-kyre` |
| peptide consult | `/peptide-consultation` |
| services and pricing / full menu | `/services-and-pricing` |
| HRT / hormone / hormone replacement | `/hormone-replacement-therapy-athens-ga` |
| peptide therapy | `/peptide-therapy-athens-ga` |
| medical weight loss | `/medical-weight-loss-athens-ga` |
| IV hydration | `/iv-hydration-therapy-athens-ga` |
| aesthetic / aesthetics | `/aesthetic-treatments-athens-ga` |
| free handbook / lead magnet | `/free-handbook` |
| referral | `/referral-form` |

Live URL is always `https://yourharmonyhealth.com{route}/`. Local is `http://localhost:3000{route}`.

### Step 2 — Verify dev server

```bash
curl -s -o /dev/null -w "%{http_code}\n" http://localhost:3000/
```

If not 200, start it in the background:

```bash
cd /Users/chase/Documents/apps/code/your-harmony-health-ts && npm run dev
```

### Step 3 — Run the audit script

```bash
cd /Users/chase/Documents/apps/code/your-harmony-health-ts && node .claude/skills/recreate-page/scripts/audit-page.mjs <route>
```

This captures:
- Full-page screenshots of live + local at 1440×900
- Section-by-section clipped screenshots (one per section, for side-by-side comparison)
- Computed CSS for key elements (H1, H2s per section, body, nav links, buttons)
- Image manifest: every `<img src>` rendered with y-position + dimensions
- Background-image URL manifest
- Section outline: y-pos, height, heading text, image position (left/right), image count

Output goes to `legacy/audit/sections/{route-slug}/`:
- `live-full.png`, `local-full.png`
- `live-01-{slug}.png`, `local-01-{slug}.png`, etc.
- `report.md` — structured diff report

### Step 4 — If it's the home page AND the hero needs fixing

Run the slider capture helper:

```bash
node .claude/skills/recreate-page/scripts/capture-slider.mjs
```

This autoplays the live Slider Revolution for 40s, catches each slide transition, and reports the actual slide image URLs. Copy matches from `public/legacy-images/full-uploads/` into `public/legacy-images/hero-slider/`.

### Step 5 — Read the diff report

Open `legacy/audit/sections/{route-slug}/report.md`. For each mismatch:

- **Section missing locally:** Add the section. Use the live screenshot as reference. Find matching content in the Firecrawl extracts in `legacy/extracts/{slug}.json` or the Elementor JSON in `legacy/wp-export/elementor/{slug}.json`.
- **Section extra locally:** Remove it.
- **Image on wrong side:** Swap `order-1 lg:order-2` / `order-2 lg:order-1` on the two grid children.
- **Typography mismatch:** Apply exact px values from report's computed CSS probe.
- **Wrong image file:** Find the right one in `public/legacy-images/full-uploads/`. If the live site references an image you can't find, check:
  1. `/2025/08/` (professional photoshoot, A17I* files)
  2. `/2025/10/`, `/2025/11/` (branded images)
  3. `/revslider/slider-N/` (hero slider demos — may be out of date)

### Step 6 — Apply fixes and re-audit

After each fix, re-run step 3. Keep iterating until the diff report shows every probe as ✓ MATCH and every section has the right image side + heading text.

### Step 7 — Report back

Summarize for the user:
- What was wrong
- What's fixed
- What's still approximate (animations, font anti-aliasing, Slider Rev parallax — these are fundamental JS-framework differences, not gaps we can close without porting Slider Rev's full JS)
- Link to the section screenshots so they can spot-check

## Known quirks of this project

- **Utility bar color:** sage `#517563`, not `#30373E` navy. The Elementor JSON's top section had `#30373E` but that was a different section; the actual utility bar (Elementor header template) is sage.
- **Button radius: 5px** (not 0px). The original WordPress screenshots look flat because of the small radius at typical zoom.
- **Typography tokens:**
  - Eyebrow: `14px` weight 600, `#6B9680` sage, UPPERCASE, letter-spacing `3.4px`. Use `.hh-eyebrow` class.
  - H1 (about section): `43px` weight 700, `#30373E`, letter-spacing `-1px`.
  - H2 (sections): `42-48px` weight 700, `#30373E`, letter-spacing `-0.7px`. Use `.hh-h2` class.
  - Body: `16px` line-height `24px`, `#535353` (medium gray).
  - Nav link: `13px` weight 700, uppercase, letter-spacing `1.3px`. Active = sage `#517563` + 3px underline.
  - Button: `12-13px` weight 800, uppercase, letter-spacing `1.2-1.4px`, radius `5px`.
- **Content max-width:** `1350px` (Elementor's `content_width`).
- **Dark overlay sections** use `rgba(48, 55, 62, 0.73)` linear-gradient over a bg-image. White H2s need `!text-white` to override the global `h1,h2,h3 { color: #30373E }` rule in globals.css.
- **No CTASection component anymore** — the final CTA is now baked into the `Footer` component. Every page imports `Footer` once and gets the unified dark section with "Don't Wait" + contact info.
- **Optimantra is NOT an iframe.** All booking CTAs are plain `<Link href={BOOKING_URL}>` to optimantra.com. Per-service booking URLs live in `BOOKING_URLS` in `components/harmony/BookingButton.tsx`.
- **Optimantra Patient Portal URL:** `https://www.optimantra.com/optimus/om/patient/login` (not `app.optimantra.com`).

## Locations

- **Next.js pages:** `app/{route}/page.tsx`
- **Shared Harmony components:** `components/harmony/` (Header, Footer, HeroSlider, ServicesCarousel, PageHero, FAQSection, PricingCard, BookingButton, UtilityBar)
- **All real images (Duplicator dump):** `public/legacy-images/full-uploads/` (gitignored; see `scripts/replace-images.py` pattern for copying to working paths)
- **Working image paths used by components:** `public/legacy-images/{hero-slider,about,hrt,weight-loss,peptide,iv,aesthetic,pricing,services}/`
- **Firecrawl content extracts:** `legacy/extracts/{page}.json`
- **Elementor widget JSON per page:** `legacy/wp-export/elementor/{slug}.json`
- **Audit outputs:** `legacy/audit/sections/{route-slug}/`

## Anti-patterns (never do these)

- **Don't guess image file paths.** `ls public/legacy-images/full-uploads/2025/08/` before referencing.
- **Don't use branded service-page PNGs** (`hormone-replacement-therapy.png`, `Medical-Weight-Loss.png`, `Peptide-Therapy.png`, `Aesthetics.png`) **as hero slider images** — they have text baked into the image and the slider adds a second text overlay, creating a double-text bug. Those PNGs are for service-page hero headers only.
- **Don't touch the middleware.ts redirects.** They handle `/mens-hormone-replacement-pricing` → `/pricing-mens-hrt` and similar legacy URLs.
- **Don't skip Playwright "because it's slow."** The computed-CSS/screenshot evidence is the only way to avoid the "it looked right in my head" failure mode.
- **Don't report "done" without screenshots.** Every wrap-up message must link the user to `legacy/audit/sections/{route-slug}/` for visual spot-check.
