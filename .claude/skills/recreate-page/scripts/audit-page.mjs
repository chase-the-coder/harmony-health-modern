#!/usr/bin/env node
/**
 * Live-vs-local page audit. Usage:
 *   node .claude/skills/recreate-page/scripts/audit-page.mjs <route>
 *
 * e.g.
 *   node .claude/skills/recreate-page/scripts/audit-page.mjs /about
 *   node .claude/skills/recreate-page/scripts/audit-page.mjs /pricing-mens-hrt
 *   node .claude/skills/recreate-page/scripts/audit-page.mjs /
 *
 * Outputs:
 *   legacy/audit/sections/{slug}/live-full.png
 *   legacy/audit/sections/{slug}/local-full.png
 *   legacy/audit/sections/{slug}/live-NN-{heading}.png (one per section)
 *   legacy/audit/sections/{slug}/local-NN-{heading}.png
 *   legacy/audit/sections/{slug}/report.md
 */
import { chromium } from "playwright";
import fs from "node:fs/promises";
import path from "node:path";

const route = process.argv[2] || "/";
const slug = route === "/" ? "home" : route.replace(/^\//, "").replace(/\/$/, "").replace(/\//g, "-");
const PROJECT = path.resolve(new URL(import.meta.url).pathname, "../../../../..");
const OUT = path.join(PROJECT, "legacy/audit/sections", slug);
await fs.mkdir(OUT, { recursive: true });

const VIEWPORT = { width: 1440, height: 900 };
const LIVE = `https://yourharmonyhealth.com${route}${route.endsWith("/") ? "" : "/"}`.replace(/\/\/$/, "/");
const LOCAL = `http://localhost:3000${route}`;

console.log(`route: ${route}`);
console.log(`slug:  ${slug}`);
console.log(`live:  ${LIVE}`);
console.log(`local: ${LOCAL}`);
console.log(`out:   ${OUT}`);

async function probe(url, label) {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: VIEWPORT });
  await page.goto(url, { waitUntil: "domcontentloaded", timeout: 60000 });
  await page.waitForTimeout(5000);

  // Trigger lazy-load + Owl Carousel + Slider Revolution init
  await page.evaluate(async () => {
    for (let i = 0; i < document.body.scrollHeight; i += 400) {
      window.scrollTo(0, i);
      await new Promise((r) => setTimeout(r, 80));
    }
    window.scrollTo(0, 0);
  });
  await page.waitForTimeout(2000);

  // Full-page screenshot
  await page.screenshot({ path: path.join(OUT, `${label}-full.png`), fullPage: true });
  await page.screenshot({ path: path.join(OUT, `${label}-hero.png`), clip: { x: 0, y: 0, width: 1440, height: 900 } });

  // Section enumeration: y-position, heading, image side (left/right of section midpoint)
  const sections = await page.evaluate(() => {
    const all = Array.from(document.querySelectorAll("section, .elementor-section, footer"));
    const out = [];
    for (const s of all) {
      const r = s.getBoundingClientRect();
      const y = r.top + window.scrollY;
      if (r.height < 150 || r.width < 1000) continue;

      const cs = getComputedStyle(s);
      const headings = Array.from(s.querySelectorAll("h1, h2, h3, h4"))
        .map((h) => ({ tag: h.tagName.toLowerCase(), text: (h.textContent || "").trim() }))
        .filter((h) => h.text && h.text.length < 120);

      // Find the primary (biggest) image
      let primaryImg = null;
      let maxArea = 0;
      for (const img of s.querySelectorAll("img")) {
        const ir = img.getBoundingClientRect();
        const area = ir.width * ir.height;
        if (area > maxArea && area > 40000) {
          maxArea = area;
          primaryImg = { src: img.src, w: img.naturalWidth, h: img.naturalHeight, x: ir.left, width: ir.width };
        }
      }
      const sectionMid = r.left + r.width / 2;
      const imageSide = primaryImg ? (primaryImg.x + primaryImg.width / 2 < sectionMid ? "left" : "right") : null;

      out.push({
        y: Math.round(y),
        height: Math.round(r.height),
        bgColor: cs.backgroundColor,
        bgImage: cs.backgroundImage !== "none" ? cs.backgroundImage.slice(0, 120) : null,
        firstHeading: headings[0] ? `[${headings[0].tag}] ${headings[0].text.slice(0, 80)}` : "",
        imageSide,
        imageSrc: primaryImg ? primaryImg.src.split("/").slice(-1)[0].slice(0, 60) : null,
        headingCount: headings.length,
        imgCount: s.querySelectorAll("img").length,
      });
    }
    // Dedupe by (heading, y-bucket)
    const seen = new Set();
    return out.filter((s) => {
      const k = `${s.firstHeading}|${Math.round(s.y / 100)}`;
      if (seen.has(k)) return false;
      seen.add(k);
      return true;
    }).sort((a, b) => a.y - b.y);
  });

  // Capture per-section screenshots
  for (let i = 0; i < sections.length; i++) {
    const s = sections[i];
    const safe = (s.firstHeading || `section-${i + 1}`)
      .toLowerCase()
      .replace(/^\[h[1-6]\]\s*/, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "")
      .slice(0, 40) || `section-${i + 1}`;
    try {
      await page.screenshot({
        path: path.join(OUT, `${label}-${String(i + 1).padStart(2, "0")}-${safe}.png`),
        clip: { x: 0, y: s.y, width: 1440, height: Math.min(s.height, 1400) },
      });
    } catch {}
  }

  // Computed CSS probes for key elements
  const probes = await page.evaluate(() => {
    const out = {};
    const grab = (el, props) => {
      if (!el) return null;
      const cs = getComputedStyle(el);
      const r = el.getBoundingClientRect();
      return {
        text: (el.textContent || "").trim().slice(0, 60),
        rect: { w: Math.round(r.width), h: Math.round(r.height) },
        ...Object.fromEntries(props.map((p) => [p, cs[p]])),
      };
    };
    const h1 = document.querySelector("h1");
    const h2s = Array.from(document.querySelectorAll("h2")).slice(0, 6);
    const body = document.body;

    out.h1 = grab(h1, ["fontSize", "fontWeight", "color", "lineHeight", "letterSpacing"]);
    h2s.forEach((h, i) => {
      out[`h2_${i + 1}`] = grab(h, ["fontSize", "fontWeight", "color", "lineHeight", "letterSpacing"]);
    });
    out.body = grab(body, ["backgroundColor", "color", "fontFamily"]);

    // First button / CTA
    const btn = document.querySelector("a.btn, a[class*='button'], .elementor-button, button.btn");
    out.primaryButton = grab(btn, ["backgroundColor", "color", "borderRadius", "padding", "fontSize", "fontWeight", "textTransform", "letterSpacing"]);

    // Nav link
    const navLink = document.querySelector("nav a[href], header nav a");
    out.navLink = grab(navLink, ["fontSize", "fontWeight", "color", "textTransform", "letterSpacing"]);

    return out;
  });

  // All images rendered on page
  const imgs = await page.evaluate(() =>
    Array.from(document.querySelectorAll("img"))
      .filter((i) => i.naturalWidth > 200)
      .map((i) => ({
        src: i.src,
        y: Math.round(i.getBoundingClientRect().top + window.scrollY),
        w: i.naturalWidth,
        h: i.naturalHeight,
      }))
      .sort((a, b) => a.y - b.y)
  );

  await browser.close();
  return { sections, probes, imgs };
}

console.log("\n--- LIVE ---");
const live = await probe(LIVE, "live");
console.log(`${live.sections.length} sections, ${live.imgs.length} images`);

console.log("\n--- LOCAL ---");
const local = await probe(LOCAL, "local");
console.log(`${local.sections.length} sections, ${local.imgs.length} images`);

// Build diff report
let report = `# Audit Report: ${route}\n\n`;
report += `- Live: ${LIVE}\n`;
report += `- Local: ${LOCAL}\n`;
report += `- Viewport: ${VIEWPORT.width}x${VIEWPORT.height}\n\n`;

report += `## Section outline (live vs local)\n\n`;
report += `### Live (${live.sections.length} sections)\n`;
for (const s of live.sections) {
  report += `- y=${s.y} h=${s.height} ${s.bgImage ? "[bg-image]" : s.bgColor} ${s.firstHeading || "(no heading)"} imgSide=${s.imageSide || "-"} imgs=${s.imgCount}\n`;
}
report += `\n### Local (${local.sections.length} sections)\n`;
for (const s of local.sections) {
  report += `- y=${s.y} h=${s.height} ${s.bgImage ? "[bg-image]" : s.bgColor} ${s.firstHeading || "(no heading)"} imgSide=${s.imageSide || "-"} imgs=${s.imgCount}\n`;
}

report += `\n## Section-by-section comparison\n\n`;
const maxSections = Math.max(live.sections.length, local.sections.length);
for (let i = 0; i < maxSections; i++) {
  const lv = live.sections[i];
  const lo = local.sections[i];
  report += `### Section ${i + 1}\n`;
  report += `- LIVE:  ${lv ? `${lv.firstHeading} (y=${lv.y}, h=${lv.height}, imgSide=${lv.imageSide})` : "(none)"}\n`;
  report += `- LOCAL: ${lo ? `${lo.firstHeading} (y=${lo.y}, h=${lo.height}, imgSide=${lo.imageSide})` : "(none)"}\n`;
  if (lv && lo) {
    const issues = [];
    if (lv.imageSide && lo.imageSide && lv.imageSide !== lo.imageSide) issues.push(`IMAGE SIDE MISMATCH: live=${lv.imageSide} local=${lo.imageSide}`);
    if (Boolean(lv.bgImage) !== Boolean(lo.bgImage)) issues.push(`BG-IMAGE MISMATCH: live=${lv.bgImage ? "yes" : "no"} local=${lo.bgImage ? "yes" : "no"}`);
    const liveH = (lv.firstHeading || "").replace(/^\[h[1-6]\]\s*/, "").toLowerCase();
    const locH = (lo.firstHeading || "").replace(/^\[h[1-6]\]\s*/, "").toLowerCase();
    if (liveH && locH && !liveH.includes(locH.slice(0, 10)) && !locH.includes(liveH.slice(0, 10))) {
      issues.push(`HEADING MISMATCH: live="${lv.firstHeading}" local="${lo.firstHeading}"`);
    }
    if (issues.length === 0) report += `- ✓ structural match\n`;
    else for (const x of issues) report += `- ✗ ${x}\n`;
  } else {
    report += `- ✗ SECTION MISSING ON ${lv ? "LOCAL" : "LIVE"}\n`;
  }
  report += `\n`;
}

report += `## Computed CSS probes\n\n`;
for (const key of Object.keys(live.probes)) {
  const a = live.probes[key];
  const b = local.probes[key];
  report += `### ${key}\n`;
  if (a) {
    report += `- LIVE:  "${a.text}" ${a.rect.w}x${a.rect.h}\n`;
    for (const k of Object.keys(a)) if (!["text", "rect"].includes(k)) report += `    - ${k}: ${a[k]}\n`;
  }
  if (b) {
    report += `- LOCAL: "${b.text}" ${b.rect.w}x${b.rect.h}\n`;
    for (const k of Object.keys(b)) if (!["text", "rect"].includes(k)) report += `    - ${k}: ${b[k]}\n`;
  }
  if (a && b) {
    const mm = [];
    for (const k of Object.keys(a)) {
      if (["text", "rect"].includes(k)) continue;
      if (a[k] !== b[k]) mm.push(`${k}: live="${a[k]}" local="${b[k]}"`);
    }
    if (mm.length === 0) report += `- ✓ MATCH\n`;
    else for (const m of mm) report += `- ✗ ${m}\n`;
  }
  report += `\n`;
}

report += `## Images rendered\n\n`;
report += `### Live (${live.imgs.length})\n`;
for (const i of live.imgs.slice(0, 25)) report += `- y=${i.y} ${i.src.split("/").slice(-1)[0]} (${i.w}x${i.h})\n`;
report += `\n### Local (${local.imgs.length})\n`;
for (const i of local.imgs.slice(0, 25)) {
  const clean = i.src.includes("/_next/image") ? decodeURIComponent(i.src.match(/url=([^&]+)/)?.[1] || "") : i.src;
  report += `- y=${i.y} ${clean} (${i.w}x${i.h})\n`;
}

await fs.writeFile(path.join(OUT, "report.md"), report);
console.log(`\nreport: ${path.join(OUT, "report.md")}`);
console.log(`screenshots: ${OUT}/`);
