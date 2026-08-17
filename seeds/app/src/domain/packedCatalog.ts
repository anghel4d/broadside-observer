import { CanvasCatalogSchema, CatalogSchema, type CanvasCatalog, type Catalog } from "./schema.ts";

/** Inflate the packer's gzip+base64 catalog payload to JSON text. */
export async function inflateGzipBase64(b64: string): Promise<string> {
  if (typeof DecompressionStream === "undefined") {
    throw new Error("Packed catalog needs DecompressionStream");
  }
  const binary = atob(b64.trim());
  const bytes = Uint8Array.from(binary, (ch) => ch.charCodeAt(0));
  const stream = new Blob([bytes]).stream().pipeThrough(new DecompressionStream("gzip"));
  return new Response(stream).text();
}

/** Packer writes gzip bytes as base64 plus a trailing newline. JSON catalogs start with `{`. */
export function isGzipBase64Catalog(source: string, text: string): boolean {
  if (source.endsWith(".gz.b64")) return true;
  const head = text.trimStart();
  return head.length > 0 && !head.startsWith("{");
}

/** JSON text, or the packer's gzip+base64 form, → Catalog. */
export async function textToCatalog(text: string, source = "catalog"): Promise<Catalog> {
  const json = isGzipBase64Catalog(source, text) ? await inflateGzipBase64(text) : text;
  try {
    return parsePackedCatalog(json);
  } catch (cause) {
    const message = cause instanceof Error ? cause.message : String(cause);
    throw new Error(`${message} (${source})`);
  }
}

/**
 * `unknown → Catalog` — same Zod denotation the packer and MCP use.
 * JSON.parse is only the text boundary; the schema is the decoder.
 */
export function parsePackedCatalog(text: string): Catalog {
  const decoded = CatalogSchema.safeParse(JSON.parse(text) as unknown);
  if (!decoded.success) {
    throw new Error(
      `Packed catalog failed schema decode (${decoded.error.issues.length} issues). Rebuild with npm run pack.`,
    );
  }
  return decoded.data;
}

/** `unknown → CanvasCatalog` — same Zod denotation the canvas packer uses. */
export function parsePackedCanvasCatalog(value: unknown): CanvasCatalog {
  const decoded = CanvasCatalogSchema.safeParse(value);
  if (!decoded.success) {
    throw new Error(
      `Packed canvases failed schema decode (${decoded.error.issues.length} issues). Rebuild with npm run pack.`,
    );
  }
  return decoded.data;
}
