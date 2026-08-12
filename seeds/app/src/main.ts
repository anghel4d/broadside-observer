import catalog from "./generated/cards.json";
import { buildCorpus } from "./domain/corpus.ts";
import { CatalogSchema } from "./domain/schema.ts";
import { startApp } from "./shell/app.ts";
import "./style.css";

const decoded = CatalogSchema.safeParse(catalog);
if (!decoded.success) {
  document.body.textContent = `Packed catalog failed schema decode (${decoded.error.issues.length} issues). Rebuild with npm run pack.`;
  throw new Error("Invalid packed catalog");
}

const root = document.getElementById("app");
if (!(root instanceof HTMLElement)) {
  throw new Error("Missing #app");
}

startApp(root, buildCorpus(decoded.data.cards, decoded.data.lineageDocs));
