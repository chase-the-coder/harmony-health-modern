---
name: mobile-audit
description: Run a mandatory mobile + desktop Playwright audit after any redesign, page update, component change, or layout-affecting edit in the harmony-health-modern repo. TRIGGER automatically after completing a visual change to any page under app/ or any component under components/modern/. Enforces the Harmony design protocol: image-before-text on stacked mobile layouts, congruent section spacing, no dark-on-dark contrast, no regressions on previously-shipped pages.
---

# Mobile Audit (harmony-health-modern)

Project-scoped skill. Runs every time a page or modern component changes, before reporting work as complete.

## When to use

Invoke this skill AUTOMATICALLY (without waiting for the user to ask) in these situations:

- Finished a page redesign (home, about, any service page, any inner page under `app/`)
- Edited any component under `components/modern/`
- Reordered layout, changed padding/margin, swapped image/text positions
- Shipped a new section, block, or page
- User says "check on mobile", "audit this", "does this look right"

Skip ONLY when the change is purely non-visual: text content only (no layout), data-only (const arrays), metadata/SEO, API routes, middleware.

## Hard rules (the design protocol)

These are the checks the audit enforces. If any fail, fix before reporting the task complete.

1. **Mobile first.** Always capture both mobile (375px) AND desktop (1440px). Mobile bugs are invisible on desktop.
2. **Image-before-text on stacked layouts.** On mobile, when a section stacks a photo above its explainer text, the image must come first in visual order. For grid rows that use `lg:order-1/lg:order-2` to flip on desktop, the DOM must put the image div first so mobile default stack shows it first.
3. **Congruent spacing.** Sections use `py-16 md:py-20`. Heroes use `pt-24 pb-16 md:pt-32 md:pb-20`. Service rows use `space-y-14 md:space-y-20`. Don't introduce one-off padding values.
4. **No dark-on-dark contrast.** Sections with dark backgrounds (`bg-[#1F2A25]`, `bg-black`) need `!text-white` on headings to defeat the global `h1-h6 { color: #30373E }` rule in `app/globals.css`.
5. **Framer-motion animations must complete before screenshot.** The audit script scrolls slowly (250ms per step) and force-overrides residual `opacity: 0` styles before capture. Don't skip these steps.
6. **Regression check.** Any spacing / component edit must be re-audited on all previously-shipped pages, not just the page you touched. Current roster: home (`/`), about (`/about`), HRT (`/hormone-replacement-therapy-athens-ga`).

## The process

### Step 1 — Ensure dev server is up

```bash
curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/
```

If not 200, start it: `cd /Users/chase/Documents/apps/code/harmony-health-modern && npm run dev &` then wait for it to listen.

### Step 2 — Run the audit

```bash
node /Users/chase/Documents/apps/code/harmony-health-modern/.claude/skills/mobile-audit/scripts/audit.js
```

The script:
- Launches headless Chromium with Playwright
- Captures mobile (375x812) + desktop (1440x900) for each page in `PAGES`
- Scrolls each page top-to-bottom in 300px steps with 250ms settle so `useInView` fires
- Force-overrides any residual `opacity: 0` inline styles (belt-and-suspenders)
- Waits 1.5s after final scroll for animations to settle
- Writes full-page PNGs to `/tmp/audit_{page}_{viewport}.png`

Pass `PAGES=home,hrt` or `URLS=/,/about` env vars to narrow the run. Default is all 3 known pages.

### Step 3 — Review every screenshot

Use the `Read` tool on each PNG. Do NOT skip any. For each screenshot, check against the design protocol:

- Is there a visible layout break, collapsed column, or 0-height image?
- On mobile stacked sections: does the image appear before its explainer text?
- Is spacing between sections visually even? No giant gaps, no squished sections?
- Is all heading text readable? No dark-on-dark, no faint gray where white belongs?
- Compare against the previously-shipped baseline — any regression from a global CSS / component edit?

### Step 4 — Fix and re-audit

Any violation of the protocol → fix, then re-run Step 2. Do not mark the task complete until all 6 screenshots pass.

### Step 5 — Report

Briefly summarize: pages audited, viewport counts, protocol items verified, any fixes made during the audit cycle. Keep it tight — 3-5 lines.

## Known animation quirks

- Framer-motion `useInView` with `once: true` + `margin: "-80px"` + 900ms duration: if the screenshot fires before the element intersects + animates, it'll be captured at `opacity: 0`. The script's scroll-loop + opacity override handles this. Don't remove either.
- Playwright `fullPage: true` internally re-scrolls to stitch — your manual scroll doesn't replace it, it primes it.

## Files

- `scripts/audit.js` — the Playwright runner
- Screenshots: `/tmp/audit_{page}_{viewport}.png`

## Related memory

- `feedback_design_protocol.md` (user auto-memory): the canonical protocol rules this skill enforces.
- `feedback_medical_accuracy.md`: separate check — content accuracy, not layout. Not covered here.
