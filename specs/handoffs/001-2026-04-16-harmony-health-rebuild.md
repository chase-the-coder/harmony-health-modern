# Session Handoff - 2026-04-16

## Context

Cloning yourharmonyhealth.com (WordPress + Elementor + Slider Revolution site for Megan Cryder's HRT/weight-loss clinic in Athens, GA) into a Next.js 15 + Tailwind v4 + DaisyUI 5 + Supabase ShipFast codebase for her as a client. Goal is pixel-level parity with the live site across all 16 pages.

## Completed

- Cloned `Marc-Lou-Org/ship-fast-ts@supabase` into `/Users/chase/Documents/apps/code/your-harmony-health-ts/` and pushed to private repo `chase-the-coder/your-harmony-health-ts`
- Installed Firecrawl MCP + aidesigner MCP (both authenticated)
- Full Firecrawl crawl: 22 pages of content extracted to `legacy/extracts/`, 54 images downloaded
- Parsed WordPress XML export: Elementor widget JSON per page in `legacy/wp-export/elementor/`, attachment URLs in `legacy/wp-export/attachments.json`
- Extracted full Duplicator archive: 8,098 files (728MB) of real WP uploads in `public/legacy-images/full-uploads/` (gitignored)
- Identified real Slider Revolution hero images via Playwright autoplay observation (40s capture): `Megan-covered-3`, `Untitled-1-2024-12-29T153507.739`, `pexels-gustavo-fring-4127589`, `Untitled-1-2024-12-29T153623.048`
- Built 16 pages: home, about, contact, 5 service pages, 4 pricing pages, services-and-pricing menu, free-handbook, referral-form, peptide-consultation
- Shared harmony components: Header (with active nav highlight), Footer (unified dark CTA + info), HeroSlider (Swiper slide effect), ServicesCarousel, PageHero, FAQSection, PricingCard, BookingButton, UtilityBar
- Applied exact typography from live site via Playwright computed-CSS diff: `.hh-eyebrow` (14px/600/sage/uppercase/3.4px spacing), `.hh-h2` (48px/700/navy/-0.7px spacing)
- Fixed utility bar color `#517563` sage (was incorrectly `#30373E` navy initially)
- Fixed hero slider: removed fade effect that caused double-text bug, switched to slide transition, all text explicitly `!text-white`
- Home page: 5/6 computed-CSS probes MATCH live; About page: 3/4 MATCH
- Created project-scoped skill at `.claude/skills/recreate-page/` with audit-page.mjs + capture-slider.mjs

## In Progress

- **Visual fidelity iteration on home + about.** Skill is built and smoke-tested. Chase last reviewed the about page and the Health Journey section image/text were swapped (image left instead of right) — FIXED in this session, unverified by Chase since.
- 14 other pages have NOT been audited via the new skill yet. They were built from Firecrawl content without pixel-level verification against live.

## Next Steps

1. **Have Chase verify the about page fix** (Health Journey section now has text LEFT, image RIGHT per live). If he confirms it's good, move on.
2. **Run the `/recreate-page` skill on the remaining 14 pages one at a time** starting with the highest-traffic: `/contact`, then `/services-and-pricing`, then the 5 service pages, then the 4 pricing pages, then the 3 form pages. Apply fixes per page before moving to next.
3. **When user requests any page audit**, the skill auto-triggers from phrases like "recreate the X page", "verify X page", "rebuild X to match live", "audit X page". See `.claude/skills/recreate-page/SKILL.md` for full trigger list.
4. **Outstanding visual gaps to flag to Chase** (not blockers, but worth discussing):
   - Slider Revolution parallax animations aren't replicated (we use plain Swiper slide transitions)
   - Owl Carousel testimonial auto-rotation on home is static 3-card (live rotates one at a time)
   - Font anti-aliasing micro-differences between Plus Jakarta Sans on macOS vs Linux rendering
5. **Before shipping**: hook up `/api/lead` Server Action to Supabase `leads` table (currently a stub), fill real Supabase/Stripe/Resend keys in `.env.local`, apply `supabase/schema.sql` via Supabase MCP, wire middleware.ts back to Supabase auth (currently redirect-only), set up SEO via `new-site-seo` skill.

## Key Files

- `.claude/skills/recreate-page/SKILL.md` — project-scoped audit skill, trigger phrases, known quirks, typography tokens
- `.claude/skills/recreate-page/scripts/audit-page.mjs` — Playwright audit: takes route arg, outputs full + section screenshots + computed-CSS diff to `legacy/audit/sections/{slug}/`
- `.claude/skills/recreate-page/scripts/capture-slider.mjs` — Slider Revolution hero image identifier via 40s autoplay observation
- `components/harmony/Header.tsx` — client component with `usePathname()` for active-nav sage underline
- `components/harmony/Footer.tsx` — unified dark-overlay footer with CTA + 3-column info (Logo/Contact/Address), replaces separate CTASection
- `components/harmony/HeroSlider.tsx` — Swiper with plain slide transition (fade causes overlap bug), all text `!text-white`
- `components/harmony/BookingButton.tsx` — `BOOKING_URLS` dict with per-service Optimantra links
- `app/page.tsx` — home page; hero slides use `/legacy-images/hero-slider/slide-{1-4}-*.{png,jpg}` (the real live images)
- `app/about/page.tsx` — about page; Megan (text LEFT, image RIGHT), Health Journey (text LEFT, image RIGHT), Kate (text LEFT, image RIGHT)
- `app/globals.css` — `.hh-eyebrow` and `.hh-h2` classes + DaisyUI `harmony` theme block
- `public/legacy-images/full-uploads/` — 728MB of real WP uploads (gitignored via `legacy/*` in .gitignore)
- `public/legacy-images/hero-slider/` — the 4 real slider images copied from full-uploads
- `legacy/audit/sections/{slug}/` — per-page audit output (screenshots + report.md) from `recreate-page` skill
- `legacy/wp-export/elementor/{slug}.json` — Elementor widget JSON per page (ground truth for padding/color/typography values)
- `legacy/extracts/{page}.json` — Firecrawl verbatim content extracts
- `SETUP.md` — one-time manual setup checklist (Supabase project, Stripe, Resend, Google OAuth, env vars)
- `supabase/schema.sql` — profiles + leads tables + RLS, to be applied via Supabase MCP
- `middleware.ts` — currently redirect-only (`/mens-hormone-replacement-pricing` → `/pricing-mens-hrt` etc.); originally was Supabase auth middleware, backup at `middleware.ts.bak`

## Blockers / Notes

- **Dev server must be running for the skill.** `npm run dev` in the project root; the audit script expects localhost:3000.
- **`.env.local` has placeholder Supabase/Stripe/Resend values** for demo. Real keys needed before shipping. SETUP.md has the checklist.
- **Chase's MCP constraints:** aidesigner has only 5 free credits total, no subscription. Firecrawl ~500 credits (used ~112). Playwright is free/local. Use Playwright for this repo; reserve aidesigner for genuinely new designs.
- **Service page hero PNGs** (`Medical-Weight-Loss.png`, `hormone-replacement-therapy.png`, `Peptide-Therapy.png`, `Aesthetics.png`) have title text baked into the image — only use as `/legacy-images/{service}/hero-branded.png` for service-page heroes, NEVER as home-slider backgrounds (causes double-text bug).
- **Kate Optimantra URL** is different from Megan's (`.../prospects?pid=Z28vSjRvNDV1NEhYTUpLSXowK3N6UT09`). Flag to Megan: confirm Kate is still active.
- **Pricing mismatch on live site:** `/medical-weight-loss-pricing-kyre` says Semaglutide $299/Tirzepatide $499, but `/services-and-pricing` says $325/$475. Our rebuild uses the `-kyre` version. Flag to Megan for reconciliation.
- **Live site uses Kitchor theme demo stock photos for the 3 "Our Services" card images** (HRT, Medical Weight Loss, Peptide). Megan never replaced them. Business decision whether to swap for real clinic photos / AI-generated / custom photoshoot.
- **Duplicator archive still at** `/Users/chase/Downloads/20260416_harmonyhealth_50a61936290504c26913_20260416190710_archive.zip` (881MB) in case anything needs re-extraction.
- **Firecrawl key persisted at user scope** in `~/.claude.json`. Future sessions don't need re-auth.
- **Supabase MCP** not yet connected to a specific Supabase project. When Chase creates one, `supabase/schema.sql` applies via MCP (per saved memory `feedback_supabase_mcp.md`).
