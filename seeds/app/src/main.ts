import compressedCatalog from "./generated/cards.json.gz.b64?raw";
import packedCanvases from "./generated/canvases.json";
import { buildCorpus } from "./domain/corpus.ts";
import { parsePackedCanvasCatalog, inflateGzipBase64, parsePackedCatalog } from "./domain/packedCatalog.ts";
import { startApp } from "./shell/app.ts";
import "./style.css";

let catalog;
try {
  catalog = parsePackedCatalog(await inflateGzipBase64(compressedCatalog));
} catch (cause) {
  const message = cause instanceof Error ? cause.message : String(cause);
  document.body.textContent = message;
  throw cause instanceof Error ? cause : new Error(message);
}

const root = document.getElementById("app");
if (!(root instanceof HTMLElement)) {
  throw new Error("Missing #app");
}

startApp(root, buildCorpus(catalog.cards, catalog.lineageDocs), parsePackedCanvasCatalog(packedCanvases).canvases);
