import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { formatParseError, parseCard, uniqueIds } from "../src/domain/parse.ts";
import { partitionResults } from "../src/domain/result.ts";
import { LineageSchema, type Catalog, type Lineage } from "../src/domain/schema.ts";

const here = dirname(fileURLToPath(import.meta.url));
const cardsDir = join(here, "../../cards");
const lineagesDir = join(here, "../../lineages");
const generatedFile = join(here, "../src/generated/cards.json");
const publicFile = join(here, "../public/cards.json");

function isMissingDir(cause: unknown): boolean {
  return typeof cause === "object" && cause !== null && "code" in cause && cause.code === "ENOENT";
}

async function listLineageDocs(): Promise<ReadonlyArray<Lineage>> {
  let names: string[];
  try {
    names = await readdir(lineagesDir);
  } catch (cause) {
    if (isMissingDir(cause)) return [];
    throw cause;
  }
  const slugs: Lineage[] = [];
  for (const name of names) {
    if (!name.endsWith(".md") || name.toLowerCase() === "readme.md") continue;
    const parsed = LineageSchema.safeParse(name.replace(/\.md$/u, ""));
    if (parsed.success) slugs.push(parsed.data);
  }
  return slugs.sort((left, right) => left.localeCompare(right, "en"));
}

const files = (await readdir(cardsDir))
  .filter((name) => name.endsWith(".md"))
  .sort((left, right) => left.localeCompare(right, "en"));

const [parsed, lineageDocs] = await Promise.all([
  Promise.all(
    files.map(async (file) => {
      const markdown = await readFile(join(cardsDir, file), "utf8");
      return parseCard({ file, markdown });
    }),
  ),
  listLineageDocs(),
]);

const { ok, err } = partitionResults(parsed);
if (err.length > 0) {
  for (const error of err) {
    console.error(formatParseError(error));
  }
  console.error(`\n${err.length} card(s) failed schema/parse validation.`);
  process.exit(1);
}

const unique = uniqueIds(ok);
if (unique._tag === "Err") {
  console.error(formatParseError(unique.error));
  process.exit(1);
}

const catalog = {
  generatedAt: new Date().toISOString(),
  count: unique.value.length,
  cards: unique.value,
  lineageDocs,
} satisfies Catalog;

const payload = `${JSON.stringify(catalog)}\n`;
await mkdir(dirname(generatedFile), { recursive: true });
await mkdir(dirname(publicFile), { recursive: true });
await writeFile(generatedFile, payload, "utf8");
await writeFile(publicFile, payload, "utf8");
console.log(
  `Packed ${catalog.count} cards · ${lineageDocs.length} lineage docs → ${generatedFile} and ${publicFile}`,
);
