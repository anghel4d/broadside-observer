import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { formatParseError, parseCard, uniqueIds } from "../src/domain/parse.ts";
import { partitionResults } from "../src/domain/result.ts";
import type { Catalog } from "../src/domain/schema.ts";

const here = dirname(fileURLToPath(import.meta.url));
const cardsDir = join(here, "../../cards");
const outFile = join(here, "../src/generated/cards.json");

const files = (await readdir(cardsDir))
  .filter((name) => name.endsWith(".md"))
  .sort((left, right) => left.localeCompare(right, "en"));

const parsed = await Promise.all(
  files.map(async (file) => {
    const markdown = await readFile(join(cardsDir, file), "utf8");
    return parseCard({ file, markdown });
  }),
);

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
} satisfies Catalog;

await mkdir(dirname(outFile), { recursive: true });
await writeFile(outFile, `${JSON.stringify(catalog)}\n`, "utf8");
console.log(`Packed ${catalog.count} cards → ${outFile}`);
