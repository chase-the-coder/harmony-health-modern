#!/usr/bin/env node
// Mobile + desktop Playwright audit for harmony-health-modern.
// Usage:
//   node .claude/skills/mobile-audit/scripts/audit.js
//   PAGES=home,about node .claude/skills/mobile-audit/scripts/audit.js
//   URLS=/,/about node .claude/skills/mobile-audit/scripts/audit.js
//
// Outputs: /tmp/audit_{page}_{viewport}.png

const path = require('path');
const { chromium } = require(
  path.resolve(__dirname, '../../../../node_modules/playwright')
);

const DEFAULT_PAGES = [
  { url: '/', name: 'home' },
  { url: '/about', name: 'about' },
  { url: '/hormone-replacement-therapy-athens-ga', name: 'hrt' },
];

const VIEWPORTS = [
  { w: 375, h: 812, name: 'mobile' },
  { w: 1440, h: 900, name: 'desktop' },
];

function resolvePages() {
  if (process.env.URLS) {
    return process.env.URLS.split(',').map((u) => {
      const url = u.trim().startsWith('/') ? u.trim() : '/' + u.trim();
      const name = url === '/' ? 'home' : url.replace(/^\//, '').replace(/[\/]/g, '_').slice(0, 30) || 'root';
      return { url, name };
    });
  }
  if (process.env.PAGES) {
    const want = new Set(process.env.PAGES.split(',').map((s) => s.trim()));
    return DEFAULT_PAGES.filter((p) => want.has(p.name));
  }
  return DEFAULT_PAGES;
}

(async () => {
  const pages = resolvePages();
  if (pages.length === 0) {
    console.error('No pages resolved. Set PAGES= or URLS= or leave empty for defaults.');
    process.exit(1);
  }

  const browser = await chromium.launch();
  const results = [];
  for (const vp of VIEWPORTS) {
    const ctx = await browser.newContext({ viewport: { width: vp.w, height: vp.h } });
    const page = await ctx.newPage();
    for (const p of pages) {
      const url = 'http://localhost:3000' + p.url + '?cb=' + Date.now();
      try {
        await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
      } catch (err) {
        console.error(`FAIL goto ${url}: ${err.message}`);
        continue;
      }
      await page.waitForTimeout(1200);

      const h = await page.evaluate(() => document.body.scrollHeight);
      for (let y = 0; y <= h; y += 300) {
        await page.evaluate((yy) => window.scrollTo(0, yy), y);
        await page.waitForTimeout(250);
      }

      await page.addStyleTag({
        content:
          '[style*="opacity: 0"], [style*="opacity:0"] { opacity: 1 !important; transform: none !important; }',
      });

      await page.evaluate(() => window.scrollTo(0, 0));
      await page.waitForTimeout(1500);

      const outPath = `/tmp/audit_${p.name}_${vp.name}.png`;
      await page.screenshot({ path: outPath, fullPage: true });
      results.push(outPath);
    }
    await ctx.close();
  }
  await browser.close();

  console.log('\n=== Audit complete ===');
  for (const r of results) console.log(r);
  console.log(`\n${results.length} screenshots captured.`);
})();
