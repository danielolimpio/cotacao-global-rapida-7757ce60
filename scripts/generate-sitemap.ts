// Runs before `vite dev` and `vite build` (predev/prebuild hooks).
// Writes public/sitemap.xml enumerating every canonical route in the app.

import { writeFileSync } from "fs";
import { resolve } from "path";

const BASE_URL = "https://cotacaodehoje.com";
const today = new Date().toISOString().split("T")[0];

interface SitemapEntry {
  path: string;
  changefreq?:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority?: string;
}

// Kept in sync with src/App.tsx <Route> definitions.
// Excludes /404, /* (NotFound), legal pages get lower priority.
const entries: SitemapEntry[] = [
  // Core
  { path: "/", changefreq: "daily", priority: "1.0" },
  { path: "/cambio", changefreq: "daily", priority: "0.9" },
  { path: "/crypto", changefreq: "daily", priority: "0.9" },
  { path: "/acoes", changefreq: "daily", priority: "0.9" },
  { path: "/forex", changefreq: "daily", priority: "0.9" },
  { path: "/blog", changefreq: "weekly", priority: "0.7" },
  { path: "/sobre", changefreq: "monthly", priority: "0.5" },
  { path: "/contato", changefreq: "monthly", priority: "0.5" },
  { path: "/calculadora-juros", changefreq: "monthly", priority: "0.7" },
  { path: "/ver-todas-cotacoes", changefreq: "daily", priority: "0.8" },
  { path: "/sitemap", changefreq: "monthly", priority: "0.3" },

  // Câmbio
  ...[
    "dolar",
    "euro",
    "franco-suico",
    "iene",
    "libras",
    "peso-argentino",
    "peso-chileno",
    "peso-mexicano",
    "peso-uruguaio",
    "rand-sul-africano",
    "rublo-russo",
    "rupia-indiana",
    "yuan-chines",
    "won-sul-coreano",
    "usd-brl",
    "eur-brl",
    "gbp-brl",
    "cad-brl",
  ].map((s) => ({
    path: `/cambio/${s}`,
    changefreq: "daily" as const,
    priority: "0.8",
  })),

  // Crypto
  ...[
    "aave",
    "avalanche",
    "binance-coin",
    "bitcoin",
    "cardano",
    "chainlink",
    "dai",
    "dash",
    "ethereum",
    "litecoin",
    "polkadot",
    "ripple",
    "solana",
    "usdc",
    "usdt",
    "uniswap",
  ].map((s) => ({
    path: `/crypto/${s}`,
    changefreq: "daily" as const,
    priority: "0.8",
  })),

  // Ações
  ...[
    "allspring",
    "amazon",
    "ambev",
    "apple",
    "assai",
    "bank-of-china",
    "blackrock",
    "bradesco",
    "carrefour",
    "china-shenhua",
    "cisco",
    "eagle-point",
    "300-etf",
    "50-etf",
    "hapvida",
    "harvest-fund",
    "intel",
    "invesco",
    "kraft-heinz",
    "magazine-luiz",
    "meta",
    "microsoft",
    "monster",
    "nuveen",
    "nvidia",
    "pimco",
    "vertex",
    "petrobras",
    "vale",
    "itau",
    "sp500",
  ].map((s) => ({
    path: `/acoes/${s}`,
    changefreq: "daily" as const,
    priority: "0.8",
  })),

  // Forex principais
  ...[
    "eur-usd",
    "usd-jpy",
    "gbp-usd",
    "usd-chf",
    "aud-usd",
    "usd-cad",
    "nzd-usd",
  ].map((s) => ({
    path: `/forex/principais/${s}`,
    changefreq: "daily" as const,
    priority: "0.8",
  })),

  // Forex secundários
  ...[
    "eur-gbp",
    "eur-aud",
    "eur-cad",
    "eur-nzd",
    "gbp-jpy",
    "gbp-aud",
    "gbp-cad",
    "aud-jpy",
    "cad-jpy",
    "nzd-jpy",
    "aud-cad",
    "aud-nzd",
    "cad-chf",
    "nzd-cad",
  ].map((s) => ({
    path: `/forex/secundarios/${s}`,
    changefreq: "daily" as const,
    priority: "0.7",
  })),

  // Forex exóticos
  ...[
    "usd-try",
    "usd-zar",
    "usd-mxn",
    "usd-sek",
    "usd-nok",
    "usd-pln",
    "eur-try",
    "gbp-try",
    "aud-sgd",
    "eur-zar",
    "usd-hkd",
    "usd-thb",
    "usd-inr",
    "usd-rub",
  ].map((s) => ({
    path: `/forex/exoticos/${s}`,
    changefreq: "daily" as const,
    priority: "0.6",
  })),

  // Legal
  { path: "/politica-de-privacidade", changefreq: "yearly", priority: "0.3" },
  { path: "/politica-de-cookies", changefreq: "yearly", priority: "0.3" },
  { path: "/termos-de-uso", changefreq: "yearly", priority: "0.3" },
];

function toXml(list: SitemapEntry[]) {
  const urls = list
    .map((e) =>
      [
        `  <url>`,
        `    <loc>${BASE_URL}${e.path}</loc>`,
        `    <lastmod>${today}</lastmod>`,
        e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
        e.priority ? `    <priority>${e.priority}</priority>` : null,
        `  </url>`,
      ]
        .filter(Boolean)
        .join("\n"),
    )
    .join("\n");

  return [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
    urls,
    `</urlset>`,
  ].join("\n");
}

writeFileSync(resolve("public/sitemap.xml"), toXml(entries));
console.log(`✅ sitemap.xml written (${entries.length} entries) at ${today}`);
