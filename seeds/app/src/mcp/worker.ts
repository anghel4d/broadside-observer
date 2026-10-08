// The MCP endpoint on Cloudflare Workers: the same server as `http.ts` over
// the fetch-standard transport. The catalog and the original cards are read
// from the Worker's own static assets (`dist/cards.json`, `dist/cards/*.md`)
// instead of the filesystem. Every other path is served as a static asset.
import { WebStandardStreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/webStandardStreamableHttp.js";
import { buildCorpus, type Corpus } from "../domain/corpus.ts";
import { textToCatalog } from "../domain/packedCatalog.ts";
import type { CardId } from "../domain/schema.ts";
import { createSeedServer } from "./server.ts";

type Env = {
  readonly ASSETS: { fetch(request: Request): Promise<Response> };
};

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "content-type, accept, mcp-session-id, mcp-protocol-version",
} as const;

const CARD_ID = /^[A-Za-z0-9][A-Za-z0-9._-]*$/u;

// broadside.tech itself has nothing but the observer; the apex and www go there.
const OBSERVER_HOST = "observer.broadside.tech";
const SENT_TO_OBSERVER = new Set(["broadside.tech", "www.broadside.tech"]);

function jsonRpcError(status: number, message: string): Response {
  return new Response(JSON.stringify({ jsonrpc: "2.0", error: { code: -32000, message }, id: null }), {
    status,
    headers: { "Content-Type": "application/json", ...CORS },
  });
}

async function assetText(env: Env, origin: string, path: string): Promise<string | null> {
  const response = await env.ASSETS.fetch(new Request(new URL(path, origin)));
  if (response.status === 404) return null;
  if (!response.ok) throw new Error(`Asset ${path}: ${response.status}`);
  return await response.text();
}

// One corpus per isolate: parsed on the first request, kept for the rest.
let corpusCache: Promise<Corpus> | undefined;

function corpusFor(env: Env, origin: string): Promise<Corpus> {
  corpusCache ??= (async () => {
    const text = await assetText(env, origin, "/cards.json");
    if (text === null) throw new Error("cards.json is not among the assets; run npm run stage");
    const catalog = await textToCatalog(text, "cards.json");
    return buildCorpus(catalog.cards, catalog.lineageDocs);
  })();
  return corpusCache;
}

async function readCard(env: Env, origin: string, id: CardId): Promise<string> {
  const markdown = CARD_ID.test(id) ? await assetText(env, origin, `/cards/${id}.md`) : null;
  if (markdown === null) throw new Error(`Original Markdown unavailable for card ${id}`);
  return markdown;
}

async function handleMcp(request: Request, env: Env, origin: string): Promise<Response> {
  const corpus = await corpusFor(env, origin);
  const server = createSeedServer(corpus, (id) => readCard(env, origin, id));
  // No session id generator: stateless, one server per request, as in http.ts.
  const transport = new WebStandardStreamableHTTPServerTransport({ enableJsonResponse: true });
  await server.connect(transport);
  const response = await transport.handleRequest(request);
  const headers = new Headers(response.headers);
  for (const [name, value] of Object.entries(CORS)) headers.set(name, value);
  return new Response(response.body, { status: response.status, headers });
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    if (SENT_TO_OBSERVER.has(url.hostname)) {
      url.hostname = OBSERVER_HOST;
      return Response.redirect(url.toString(), 301);
    }
    const path = url.pathname.replace(/\/$/u, "") || "/";
    if (path !== "/mcp") return env.ASSETS.fetch(request);
    if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: CORS });
    if (request.method !== "POST") return jsonRpcError(405, "Method not allowed. POST /mcp");
    try {
      return await handleMcp(request, env, url.origin);
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      console.error(`broadside-seeds Worker error: ${message}`);
      return jsonRpcError(500, "Internal server error");
    }
  },
};
