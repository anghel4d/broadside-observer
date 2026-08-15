import { readFile } from "node:fs/promises";
import { join } from "node:path";
import process from "node:process";
import { textToCatalog } from "../domain/packedCatalog.ts";
import type { Catalog } from "../domain/schema.ts";

export const PAGES_CARDS_JSON = "https://anghel4d.github.io/broadside-observer/cards.json";

export type CatalogSource = {
  readonly catalog: Catalog;
  readonly source: string;
};

function isEnoent(cause: unknown): boolean {
  return typeof cause === "object" && cause !== null && "code" in cause && cause.code === "ENOENT";
}

function isHttpUrl(value: string): boolean {
  return /^https?:\/\//u.test(value);
}

async function readFileIfExists(path: string): Promise<string | null> {
  try {
    return await readFile(path, "utf8");
  } catch (cause) {
    if (isEnoent(cause)) return null;
    throw cause;
  }
}

async function readUrl(url: string): Promise<string> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`);
  }
  return await response.text();
}

async function readPathOrUrl(spec: string): Promise<string> {
  return isHttpUrl(spec) ? readUrl(spec) : readFile(spec, "utf8");
}

export function localCatalogPaths(appRoot: string): ReadonlyArray<string> {
  return [
    join(appRoot, "src/generated/cards.json.gz.b64"),
    join(appRoot, "public/cards.json"),
    join(appRoot, "src/generated/cards.json"),
    join(appRoot, "dist/cards.json"),
  ];
}

/** Local gzip+base64 catalog, then plain JSON, then `SEEDS_CARDS_JSON`, then GitHub Pages. */
export async function loadCatalog(
  appRoot: string,
  env: Readonly<Record<string, string | undefined>> = process.env,
): Promise<CatalogSource> {
  for (const path of localCatalogPaths(appRoot)) {
    const text = await readFileIfExists(path);
    if (text !== null) return { catalog: await textToCatalog(text, path), source: path };
  }

  const override = env.SEEDS_CARDS_JSON?.trim();
  if (override !== undefined && override.length > 0) {
    const text = await readPathOrUrl(override);
    return { catalog: await textToCatalog(text, override), source: override };
  }

  const text = await readUrl(PAGES_CARDS_JSON);
  return { catalog: await textToCatalog(text, PAGES_CARDS_JSON), source: PAGES_CARDS_JSON };
}
