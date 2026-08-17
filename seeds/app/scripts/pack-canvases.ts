import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { gzipSync } from "node:zlib";
import { CanvasIdSchema, type CanvasCatalog, type SeedCanvas } from "../src/domain/schema.ts";

const here = dirname(fileURLToPath(import.meta.url));
const canvasesDir = join(here, "../../canvases");
const generatedFile = join(here, "../src/generated/canvases.json");
const compressedFile = join(here, "../src/generated/canvases.json.gz.b64");

function isMissingDir(cause: unknown): boolean {
  return typeof cause === "object" && cause !== null && "code" in cause && cause.code === "ENOENT";
}

function isCanvasFile(name: string): boolean {
  return name.endsWith(".tsx");
}

function stemTitle(file: string): { readonly id: string; readonly title: string } {
  const stem = file.replace(/\.canvas\.tsx$/u, "").replace(/\.tsx$/u, "");
  return { id: stem, title: stem };
}

let names: string[];
try {
  names = await readdir(canvasesDir);
} catch (cause) {
  if (isMissingDir(cause)) names = [];
  else throw cause;
}

const files = names.filter(isCanvasFile).sort((left, right) => left.localeCompare(right, "en"));
const seen = new Map<string, string>();
const canvases: SeedCanvas[] = [];

for (const file of files) {
  const { id, title } = stemTitle(file);
  const parsed = CanvasIdSchema.safeParse(id);
  if (!parsed.success) {
    console.error(`${file}: invalid canvas id "${id}"`);
    process.exit(1);
  }
  const prior = seen.get(parsed.data);
  if (prior !== undefined) {
    console.error(`${file}: duplicate id "${parsed.data}" (also ${prior})`);
    process.exit(1);
  }
  seen.set(parsed.data, file);
  const source = await readFile(join(canvasesDir, file), "utf8");
  canvases.push({ id: parsed.data, title, file, source });
}

const catalog = {
  generatedAt: new Date().toISOString(),
  count: canvases.length,
  canvases,
} satisfies CanvasCatalog;

const payload = `${JSON.stringify(catalog)}\n`;
await mkdir(dirname(generatedFile), { recursive: true });
await writeFile(generatedFile, payload, "utf8");
await writeFile(compressedFile, `${gzipSync(payload, { level: 9 }).toString("base64")}\n`, "utf8");
console.log(`Packed ${catalog.count} canvases → ${generatedFile} and ${compressedFile}`);
