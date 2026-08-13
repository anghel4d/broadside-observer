import { readFile } from "node:fs/promises";
import { join } from "node:path";
import process from "node:process";
import { CatalogSchema, type Catalog } from "../domain/schema.ts";

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

export function decodeCatalog(text: string, source: string): Catalog {
  let raw: unknown;
  try {
    raw = JSON.parse(text) as unknown;
  } catch (cause) {
    const message = cause instanceof Error ? cause.message : String(cause);
    throw new Error(`Invalid JSON from ${source}: ${message}`);
  }
  const parsed = CatalogSchema.safeParse(raw);
  if (!parsed.success) {
    throw new Error(`Catalog schema failed from ${source} (${parsed.error.issues.length} issues). Run npm run pack.`);
  }
  return parsed.data;
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
    join(appRoot, "public/cards.json"),
    join(appRoot, "src/generated/cards.json"),
    join(appRoot, "dist/cards.json"),
  ];
}

/** Local packed JSON, then `SEEDS_CARDS_JSON` (path or URL), then GitHub Pages. */
export async function loadCatalog(
  appRoot: string,
  env: Readonly<Record<string, string | undefined>> = process.env,
): Promise<CatalogSource> {
  for (const path of localCatalogPaths(appRoot)) {
    const text = await readFileIfExists(path);
    if (text !== null) return { catalog: decodeCatalog(text, path), source: path };
  }

  const override = env.SEEDS_CARDS_JSON?.trim();
  if (override !== undefined && override.length > 0) {
    const text = await readPathOrUrl(override);
    return { catalog: decodeCatalog(text, override), source: override };
  }

  const text = await readUrl(PAGES_CARDS_JSON);
  return { catalog: decodeCatalog(text, PAGES_CARDS_JSON), source: PAGES_CARDS_JSON };
}
