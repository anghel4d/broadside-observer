import { CatalogSchema, type Catalog } from "./schema.ts";

/** Inflate the packer's gzip+base64 catalog payload to JSON text. */
export async function inflateGzipBase64(b64: string): Promise<string> {
  if (typeof DecompressionStream === "undefined") {
    throw new Error("Packed catalog needs a browser with DecompressionStream");
  }
  const binary = atob(b64.trim());
  const bytes = Uint8Array.from(binary, (ch) => ch.charCodeAt(0));
  const stream = new Blob([bytes]).stream().pipeThrough(new DecompressionStream("gzip"));
  return new Response(stream).text();
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
