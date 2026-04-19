# Harmony Health Website

Next.js 15 marketing site for Harmony Health (yourharmonyhealth.com), a functional medicine practice in Athens, GA.

## Dev Server

At the start of every editing session, run `npm run dev` and tell the user to open http://localhost:3000 to preview changes live. Keep the server running for the entire session. The user should check their changes in the browser before publishing.

## Publishing

When the user says "publish", "ship it", "deploy", or "go live": commit all changes and push to main. Vercel auto-deploys from main.

## Medical Accuracy

Never fabricate medical statistics, patient counts, or clinical credentials. If the user asks to add a stat, ask for a source first.

## Images

When the user uploads or adds any image:

1. Convert it to WebP format, quality 82.
2. Resize to max 1920px width, preserve aspect ratio. Do not upscale smaller images.
3. Save to `public/images/` with a descriptive kebab-case filename (e.g. `megan-headshot.webp`, `semaglutide-hero.webp`).
4. Delete the original uploaded file after conversion.
5. Update the component to reference the new WebP path.

Use `npx sharp-cli` or `cwebp` for conversion. Install sharp-cli if not available (`npx sharp-cli` works without install). This is mandatory for every image, no exceptions.

## Design System (mandatory for all visual changes)

When creating or modifying any visual element, follow the established design system exactly. Never introduce new colors, fonts, or spacing scales.

### Palette
- Page background: `#FAF8F4` (cream)
- Dark sections/headings: `#1F2A25` (sage-deep)
- Accent/buttons: `#6B9680` (sage)
- Hover/headings on cream: `#517563` (sage-dark)
- Glows/pulses: `#80BE9F` (sage-light)
- On-dark accents: `#9BD3B6` (sage-mint)
- Body text: `#30373E`
- Secondary text: `#535353`
- Card borders: `#E5ECE8`
- Subtle section bg: `#F7F9F8` (tint)

### Typography
- Headlines: Plus Jakarta Sans 700, `tracking-tighter`, `leading-[1.05]`
- Body: Plus Jakarta Sans 400, `leading-relaxed`
- Eyebrows: `text-[11px] uppercase tracking-[0.25em] font-medium` in sage pill
- Accent pattern: `italic font-light text-[#517563]` after a `<br />`
- Anchor headlines use the "period + italic sage line" structure

### Spacing
- Section padding: `py-16 md:py-20`
- Page hero padding: `pt-24 pb-16 md:pt-32 md:pb-20`
- Service row spacing: `space-y-14 md:space-y-20`
- Section header margin: `mb-12 md:mb-14`

### Layout quality
- Generous whitespace between sections. Never crowd elements.
- Cards use `rounded-2xl` or `rounded-3xl` with subtle shadows (`shadow-sm` to `shadow-md`).
- Buttons: rounded-full with sage background, white text.
- Sections alternate between cream (`#FAF8F4`) and white/tint backgrounds for visual rhythm.
- Hero sections get extra breathing room. Never stack content tight at the top of a page.

### Mobile
- Image-before-text on stacked layouts. When a grid stacks on mobile, image comes first in DOM. Use `lg:order-1 / lg:order-2` to flip on desktop.
- No dark-on-dark contrast. Dark sections need `!text-white` on headings.
- Test at mobile and desktop widths before publishing.

### When adding new pages or sections
- Match the visual language of existing pages. Study the homepage and About page for reference.
- Use the same component patterns (eyebrow pill, headline with italic accent, card grids).
- Do not introduce new UI libraries, icon sets, or animation frameworks without explicit approval.

## Editing Rules

- Only make the change the user asks for. Do not "improve" surrounding code.
- Keep responses short, no jargon.
- If a build looks broken or risky, stop and ask before pushing.
