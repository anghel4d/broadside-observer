import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import type { Corpus } from "../domain/corpus.ts";
import { getSeed, querySeeds } from "./respond.ts";

export const SERVER_NAME = "broadside-seeds";
export const SERVER_VERSION = "0.1.0";

export const QUERY_SEEDS_DESCRIPTION = `Search Broadside Observer seed cards (no LLM). Tokenized AND over title, authors, topics, takeaway, and lineage via applyQuery.

Call shape: query_seeds {"query":"<tokens>"} with optional {"id":"<card-id>","topic":"<slug>","lineage":"<slug>","year_min":YYYY,"year_max":YYYY,"limit":20}.
query is required unless id is set. limit defaults to 20, max 50.

Response branching (do not guess):
- 0 hits: text starting with "No matching seed cards" plus NEXT: and copy-pasteable calls query_seeds {"query":"..."} / get_seed {"id":"..."}.
- 1 hit: full seed card. Also when id matches, or query is exact rank "#123" / "123" that uniquely matches seed_rank.
- 2+ hits: first lines are NEXT: call get_seed {"id":"<card-id>"} then a compact list (title, year, authors, takeaway, id). Never dump full cards. If truncated: Showing N of M with a NEXT: get_seed {"id":"..."} line.

Copy id from a list hit into get_seed {"id":"<card-id>"}. Empty query with no id/topic/lineage/year returns the 0-hit usage text.`;

export const GET_SEED_DESCRIPTION = `Return the entire seed card. Required call: get_seed {"id":"<card-id>"}.
id is the cards.json file stem without .md (the id field from query_seeds list hits), e.g. get_seed {"id":"001-swe-agent-agent-computer-interfaces-enable-automated-softwar"}.

If the id is unknown, returns a 0-hit message with NEXT: example calls. On success, returns the full card (YAML-ish frontmatter + five body sections). Do not call this with a title; use the id string.`;

export function createSeedServer(corpus: Corpus): McpServer {
  const server = new McpServer(
    { name: SERVER_NAME, version: SERVER_VERSION },
    {
      instructions:
        'Query Broadside Observer seed cards. Call query_seeds {"query":"<tokens>"}. When the result is a list, call get_seed {"id":"<card-id>"} with an id copied from that list. Never invent ids.',
    },
  );

  server.registerTool(
    "query_seeds",
    {
      title: "Query seed cards",
      description: QUERY_SEEDS_DESCRIPTION,
      inputSchema: {
        query: z
          .string()
          .optional()
          .describe("AND search tokens over title, authors, topics, takeaway, lineage. Required unless id is set. Exact #123 or 123 uniquely matching seed_rank returns that full card."),
        id: z
          .string()
          .optional()
          .describe("Card file stem without .md. If found, returns that full card even when query is empty."),
        topic: z.string().optional().describe("Exact topic slug filter."),
        lineage: z.string().optional().describe("Exact lineage slug filter."),
        year_min: z.number().int().optional().describe("Inclusive minimum year."),
        year_max: z.number().int().optional().describe("Inclusive maximum year."),
        limit: z
          .number()
          .int()
          .optional()
          .describe("Max list hits to show (default 20, max 50). Ignored for 0-hit and 1-hit responses."),
      },
      annotations: {
        readOnlyHint: true,
        destructiveHint: false,
        idempotentHint: true,
        openWorldHint: false,
      },
    },
    async (args) => ({
      content: [{ type: "text" as const, text: querySeeds(corpus, args) }],
    }),
  );

  server.registerTool(
    "get_seed",
    {
      title: "Get one seed card",
      description: GET_SEED_DESCRIPTION,
      inputSchema: {
        id: z
          .string()
          .describe(
            "Card file stem without .md, e.g. 001-swe-agent-agent-computer-interfaces-enable-automated-softwar",
          ),
      },
      annotations: {
        readOnlyHint: true,
        destructiveHint: false,
        idempotentHint: true,
        openWorldHint: false,
      },
    },
    async ({ id }) => ({
      content: [{ type: "text" as const, text: getSeed(corpus, id) }],
    }),
  );

  return server;
}
