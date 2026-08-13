import { dirname, join } from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { buildCorpus } from "../domain/corpus.ts";
import { loadCatalog } from "./load.ts";
import { createSeedServer } from "./server.ts";

const appRoot = join(dirname(fileURLToPath(import.meta.url)), "../..");

async function main(): Promise<void> {
  const { catalog, source } = await loadCatalog(appRoot);
  console.error(`broadside-seeds: loaded ${catalog.count} cards from ${source}`);
  const server = createSeedServer(buildCorpus(catalog.cards, catalog.lineageDocs));
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main().catch((error: unknown) => {
  const message = error instanceof Error ? error.message : String(error);
  console.error(`broadside-seeds failed: ${message}`);
  console.error("Rebuild the catalog with: npm run pack");
  process.exit(1);
});
