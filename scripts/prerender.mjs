// Post-build static prerender.
// Boots a tiny SPA-fallback static server against ./dist, then uses
// puppeteer to visit every route listed in dist/sitemap.xml and writes
// the fully rendered HTML to dist/<route>/index.html.
//
// Preserves the current layout: no source refactor, no visual change.
// Client-side React still hydrates the same tree on top of the
// prerendered markup.

import { readFileSync, writeFileSync, mkdirSync, existsSync, statSync, readdirSync } from "node:fs";
import { resolve, join, extname, dirname } from "node:path";
import { createServer } from "node:http";

const DIST = resolve(process.cwd(), "dist");
const SITEMAP = join(DIST, "sitemap.xml");
const PORT = 45123;
const ORIGIN = `http://127.0.0.1:${PORT}`;

if (!existsSync(DIST) || !existsSync(SITEMAP)) {
  console.log("[prerender] dist/ or sitemap.xml missing, skipping prerender.");
  process.exit(0);
}

// --- 1. Try to load puppeteer (dev-only dep). Skip cleanly if unavailable. ---
let puppeteer;
try {
  puppeteer = (await import("puppeteer")).default;
} catch (err) {
  console.warn("[prerender] puppeteer not installed — skipping prerender step.");
  console.warn("            run: npm i -D puppeteer");
  process.exit(0);
}

// --- 2. Parse routes from sitemap.xml ---
const sitemapXml = readFileSync(SITEMAP, "utf8");
const routes = Array.from(sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g))
  .map((m) => {
    try {
      return new URL(m[1]).pathname || "/";
    } catch {
      return null;
    }
  })
  .filter(Boolean)
  // dedupe + normalize
  .map((p) => (p.length > 1 ? p.replace(/\/$/, "") : p))
  .filter((v, i, a) => a.indexOf(v) === i);

console.log(`[prerender] ${routes.length} routes to render`);

// --- 3. Tiny static file server with SPA fallback ---
const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".mjs": "application/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".webmanifest": "application/manifest+json",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

const server = createServer((req, res) => {
  const urlPath = decodeURIComponent((req.url || "/").split("?")[0]);
  let filePath = join(DIST, urlPath);
  try {
    if (existsSync(filePath) && statSync(filePath).isDirectory()) {
      filePath = join(filePath, "index.html");
    }
    if (!existsSync(filePath)) {
      filePath = join(DIST, "index.html");
    }
    const ext = extname(filePath).toLowerCase();
    res.writeHead(200, { "Content-Type": MIME[ext] || "application/octet-stream" });
    res.end(readFileSync(filePath));
  } catch (e) {
    res.writeHead(500);
    res.end(String(e));
  }
});

await new Promise((r) => server.listen(PORT, "127.0.0.1", r));
console.log(`[prerender] static server up at ${ORIGIN}`);

// --- 4. Launch puppeteer and render each route ---
const browser = await puppeteer.launch({
  headless: "new",
  args: ["--no-sandbox", "--disable-setuid-sandbox"],
});

const originalIndex = readFileSync(join(DIST, "index.html"), "utf8");
let ok = 0;
let fail = 0;

for (const route of routes) {
  const url = `${ORIGIN}${route}`;
  const page = await browser.newPage();
  try {
    await page.setViewport({ width: 1280, height: 900 });
    // Block heavy 3rd-party requests that don't affect SEO markup.
    await page.setRequestInterception(true);
    page.on("request", (req) => {
      const u = req.url();
      if (
        /tradingview|s3\.tradingview|googletagmanager|google-analytics|adservice|doubleclick|pagead2|adsbygoogle/.test(u)
      ) {
        return req.abort();
      }
      req.continue();
    });

    await page.goto(url, { waitUntil: "networkidle0", timeout: 30000 });
    // Give react-helmet-async time to flush head tags.
    await page.evaluate(() => new Promise((r) => setTimeout(r, 150)));

    const html = await page.content();

    // Write to dist/<route>/index.html (or dist/index.html for "/").
    const outDir = route === "/" ? DIST : join(DIST, route);
    mkdirSync(outDir, { recursive: true });
    writeFileSync(join(outDir, "index.html"), html, "utf8");
    ok++;
    process.stdout.write(`\r[prerender] ${ok}/${routes.length}  ${route.padEnd(50)}`);
  } catch (e) {
    fail++;
    console.warn(`\n[prerender] FAILED ${route}: ${e.message}`);
  } finally {
    await page.close();
  }
}

await browser.close();
server.close();

console.log(`\n[prerender] done. ok=${ok} fail=${fail}`);
