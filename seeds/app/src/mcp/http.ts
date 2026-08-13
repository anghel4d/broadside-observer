import { Buffer } from "node:buffer";
import { createServer, type IncomingMessage, type ServerResponse } from "node:http";
import { dirname, join } from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";
import { StreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/streamableHttp.js";
import type { Transport } from "@modelcontextprotocol/sdk/shared/transport.js";
import { buildCorpus, type Corpus } from "../domain/corpus.ts";
import { loadCatalog } from "./load.ts";
import { createSeedServer } from "./server.ts";

const appRoot = join(dirname(fileURLToPath(import.meta.url)), "../..");

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "content-type, accept, mcp-session-id, mcp-protocol-version",
} as const;

function jsonRpcError(status: number, message: string, res: ServerResponse): void {
  res.writeHead(status, { "Content-Type": "application/json", ...CORS }).end(
    JSON.stringify({
      jsonrpc: "2.0",
      error: { code: -32000, message },
      id: null,
    }),
  );
}

async function readBody(req: IncomingMessage): Promise<unknown> {
  const chunks: Buffer[] = [];
  for await (const chunk of req) {
    chunks.push(typeof chunk === "string" ? Buffer.from(chunk) : chunk);
  }
  const raw = Buffer.concat(chunks).toString("utf8").trim();
  if (raw.length === 0) return undefined;
  return JSON.parse(raw) as unknown;
}

function pathnameOf(req: IncomingMessage): string {
  return new URL(req.url ?? "/", "http://127.0.0.1").pathname.replace(/\/$/u, "") || "/";
}

async function handleMcp(corpus: Corpus, req: IncomingMessage, res: ServerResponse): Promise<void> {
  const server = createSeedServer(corpus);
  const transport = new StreamableHTTPServerTransport({
    enableJsonResponse: true,
  });
  await server.connect(transport as Transport);
  const body = await readBody(req);
  await transport.handleRequest(req, res, body);
  res.on("close", () => {
    void transport.close();
    void server.close();
  });
}

async function main(): Promise<void> {
  const { catalog, source } = await loadCatalog(appRoot);
  const corpus = buildCorpus(catalog.cards, catalog.lineageDocs);
  const port = Number(process.env.PORT ?? "3000");
  if (!Number.isFinite(port) || port <= 0) {
    throw new Error(`Invalid PORT: ${process.env.PORT ?? ""}`);
  }

  const httpServer = createServer((req, res) => {
    void (async () => {
      const path = pathnameOf(req);
      if (req.method === "OPTIONS" && path === "/mcp") {
        res.writeHead(204, CORS).end();
        return;
      }
      if (path !== "/mcp") {
        jsonRpcError(404, "Not found. POST /mcp", res);
        return;
      }
      if (req.method !== "POST") {
        jsonRpcError(405, "Method not allowed. POST /mcp", res);
        return;
      }
      try {
        await handleMcp(corpus, req, res);
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        console.error(`broadside-seeds HTTP error: ${message}`);
        if (!res.headersSent) jsonRpcError(500, "Internal server error", res);
      }
    })();
  });

  await new Promise<void>((resolve, reject) => {
    httpServer.listen(port, "0.0.0.0", () => resolve());
    httpServer.on("error", reject);
  });
  console.error(
    `broadside-seeds: loaded ${catalog.count} cards from ${source}; Streamable HTTP on http://127.0.0.1:${port}/mcp`,
  );
}

main().catch((error: unknown) => {
  const message = error instanceof Error ? error.message : String(error);
  console.error(`broadside-seeds failed: ${message}`);
  console.error("Rebuild the catalog with: npm run pack");
  process.exit(1);
});
