// Writes dist/sitemap.xml: the site, its machine-readable docs and catalog, and
// every staged card's Markdown, so crawlers can reach each card directly.
import { readdirSync, writeFileSync } from "node:fs";

const ORIGIN = "https://observer.broadside.tech";
const cards = readdirSync("dist/cards").filter((name) => name.endsWith(".md")).sort();
const paths = ["/", "/llms.txt", "/cards.json", ...cards.map((name) => `/cards/${encodeURIComponent(name)}`)];
const urls = paths.map((path) => `  <url><loc>${ORIGIN}${path}</loc></url>`).join("\n");
writeFileSync(
  "dist/sitemap.xml",
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
);
