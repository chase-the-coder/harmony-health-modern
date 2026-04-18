#!/usr/bin/env node
/**
 * Capture real Slider Revolution hero images from the live homepage by watching autoplay.
 * Slider Rev's images don't appear in the XML export — they're referenced from Slider Rev's
 * custom DB tables. Only way to identify them without DB access is to observe the rendered
 * slides rotating in a real browser.
 *
 * Usage:
 *   node .claude/skills/recreate-page/scripts/capture-slider.mjs
 *
 * Outputs:
 *   legacy/live-slides/t-{seconds}s.png — screenshot at each 7s interval
 *   legacy/live-slides/slides-seen.json — image URLs observed at each timestep
 */
import { chromium } from "playwright";
import fs from "node:fs/promises";
import path from "node:path";

const PROJECT = path.resolve(new URL(import.meta.url).pathname, "../../../../..");
const OUT = path.join(PROJECT, "legacy/live-slides");
await fs.mkdir(OUT, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
await page.goto("https://yourharmonyhealth.com/", { waitUntil: "domcontentloaded", timeout: 60000 });
await page.waitForTimeout(4000);

const snapshots = [];
for (let i = 0; i < 6; i++) {
  const snap = await page.evaluate(() => {
    const imgs = [];
    for (const el of document.querySelectorAll("img")) {
      const r = el.getBoundingClientRect();
      if (r.top > 800 || r.bottom < 200) continue;
      if (el.naturalWidth < 800) continue;
      imgs.push({
        src: el.src,
        w: el.naturalWidth,
        h: el.naturalHeight,
        opacity: getComputedStyle(el).opacity,
        displayed: el.offsetParent !== null,
      });
    }
    const heading = Array.from(document.querySelectorAll("h1, h2, h3, rs-layer, .tp-layer"))
      .filter((h) => { const r = h.getBoundingClientRect(); return r.top < 600 && r.top > 100 && r.width > 100; })
      .map((h) => (h.textContent || "").trim())
      .join(" | ")
      .slice(0, 200);
    return { imgs, heading };
  });
  snapshots.push({ t: i * 7, ...snap });
  await page.screenshot({
    path: path.join(OUT, `t-${String(i * 7).padStart(2, "0")}s.png`),
    clip: { x: 0, y: 0, width: 1920, height: 1000 },
  });
  console.log(`\nT=${i * 7}s  heading: "${snap.heading.slice(0, 80)}"`);
  for (const im of snap.imgs.slice(0, 4)) {
    console.log(`  ${im.src} (${im.w}x${im.h})  opacity=${im.opacity}  displayed=${im.displayed}`);
  }
  await page.waitForTimeout(7000);
}

await fs.writeFile(path.join(OUT, "slides-seen.json"), JSON.stringify(snapshots, null, 2));

// Unique image sources seen across all snapshots
const uniq = new Set();
for (const s of snapshots) for (const i of s.imgs) uniq.add(i.src);
console.log(`\n=== Unique hero image sources over 40s ===`);
for (const u of uniq) console.log(`  ${u}`);

// Match each to a local file in public/legacy-images/full-uploads
console.log(`\n=== Local file matches ===`);
for (const u of uniq) {
  const idx = u.indexOf("/wp-content/uploads/");
  if (idx === -1) continue;
  const rel = u.slice(idx + "/wp-content/uploads/".length);
  const local = path.join(PROJECT, "public/legacy-images/full-uploads", rel);
  try {
    const st = await fs.stat(local);
    console.log(`  ✓ ${rel}  (${Math.round(st.size / 1024)}KB)  local: public/legacy-images/full-uploads/${rel}`);
  } catch {
    console.log(`  ✗ ${rel}  NOT FOUND in full-uploads`);
  }
}

await browser.close();
console.log(`\nscreenshots + json saved to ${OUT}/`);
