import { applyQuery } from "../domain/query.ts";
import type { Corpus } from "../domain/corpus.ts";
import {
  CardIdSchema,
  LineageSchema,
  SeedRankSchema,
  TopicSchema,
  YearSchema,
  defaultQuery,
  type CardId,
  type Query,
  type SeedCard,
  type Year,
} from "../domain/schema.ts";

const DEFAULT_LIMIT = 20;
const MAX_LIMIT = 50;

export const EXAMPLE_QUERY_RADIANCE = `query_seeds {"query":"radiance cascades"}`;
export const EXAMPLE_QUERY_LOCKFREE = `query_seeds {"query":"lock-free","lineage":"concurrent-data-structures"}`;
export const EXAMPLE_GET_SEED = `get_seed {"id":"001-swe-agent-agent-computer-interfaces-enable-automated-softwar"}`;

export type QuerySeedsArgs = {
  readonly query?: string | undefined;
  readonly id?: string | undefined;
  readonly topic?: string | undefined;
  readonly lineage?: string | undefined;
  readonly year_min?: number | undefined;
  readonly year_max?: number | undefined;
  readonly limit?: number | undefined;
};

export type ReadCardMarkdown = (id: CardId) => Promise<string>;

function nonEmpty(value: string | undefined): string | undefined {
  if (value === undefined) return undefined;
  const trimmed = value.trim();
  return trimmed.length === 0 ? undefined : trimmed;
}

function stemId(raw: string): string {
  return raw.trim().replace(/\.md$/u, "");
}

function clampLimit(limit: number | undefined): number {
  if (limit === undefined || !Number.isFinite(limit)) return DEFAULT_LIMIT;
  return Math.min(MAX_LIMIT, Math.max(1, Math.floor(limit)));
}

function lookupCard(corpus: Corpus, rawId: string): SeedCard | undefined {
  const stem = stemId(rawId);
  const parsed = CardIdSchema.safeParse(stem);
  if (!parsed.success) return undefined;
  return corpus.byId.get(parsed.data);
}

function parseExactRank(search: string): number | null {
  const match = /^#?(\d+)$/u.exec(search.trim());
  if (match === null || match[1] === undefined) return null;
  const parsed = SeedRankSchema.safeParse(Number(match[1]));
  return parsed.success ? parsed.data : null;
}

function uniqueRankHit(corpus: Corpus, search: string): SeedCard | null {
  const rank = parseExactRank(search);
  if (rank === null) return null;
  const hits = corpus.cards.filter((card) => card.seed_rank === rank);
  return hits.length === 1 ? (hits[0] ?? null) : null;
}


function oneLine(value: string): string {
  return value.replace(/\s+/gu, " ").trim();
}

function failedDetail(args: {
  readonly query?: string | undefined;
  readonly id?: string | undefined;
  readonly topic?: string | undefined;
  readonly lineage?: string | undefined;
  readonly year_min?: number | undefined;
  readonly year_max?: number | undefined;
}): string {
  const parts: string[] = [];
  const id = nonEmpty(args.id);
  if (id !== undefined) parts.push(`id=${JSON.stringify(stemId(id))}`);
  if (args.query !== undefined || id === undefined) {
    parts.push(`query=${JSON.stringify(args.query ?? "")}`);
  }
  const topic = nonEmpty(args.topic);
  if (topic !== undefined) parts.push(`topic=${JSON.stringify(topic)}`);
  const lineage = nonEmpty(args.lineage);
  if (lineage !== undefined) parts.push(`lineage=${JSON.stringify(lineage)}`);
  if (args.year_min !== undefined) parts.push(`year_min=${args.year_min}`);
  if (args.year_max !== undefined) parts.push(`year_max=${args.year_max}`);
  return parts.join(" ");
}

export function formatZeroHits(detail: string): string {
  return `No matching seed cards for ${detail}.

NEXT: call query_seeds with {"query":"<tokens>"} or get_seed with {"id":"<card-id>"}.

query_seeds parameters:
- query (string, required unless id is set)
- id, topic, lineage, year_min, year_max, limit (optional)

What query matches: title, authors, topics, takeaway, lineage (AND tokens).

Examples:
- ${EXAMPLE_QUERY_RADIANCE}
- ${EXAMPLE_QUERY_LOCKFREE}
- ${EXAMPLE_GET_SEED}`;
}


function formatListItem(card: SeedCard): string {
  return `- ${card.title} (${card.year}) — ${card.authors.join(", ")}
  id: ${card.id}
  ${oneLine(card.sections.takeaway)}`;
}

function formatManyHits(cards: ReadonlyArray<SeedCard>, limit: number): string {
  const shown = cards.slice(0, limit);
  const first = shown[0];
  if (first === undefined) return formatZeroHits('query=""');
  const exampleId = first.id;
  const lines = [
    `NEXT: call get_seed with {"id": ${JSON.stringify(exampleId)}} to retrieve the full seed card for any one hit.`,
    `Example: get_seed {"id":${JSON.stringify(exampleId)}}`,
  ];
  if (shown.length < cards.length) {
    lines.push(
      `Showing ${shown.length} of ${cards.length}. NEXT: call query_seeds again with a tighter query, or get_seed {"id":${JSON.stringify(exampleId)}} for one of the ids below.`,
    );
  }
  lines.push("");
  lines.push(shown.map(formatListItem).join("\n"));
  return lines.join("\n");
}

function topicFilter(raw: string | undefined): Query["topic"] | "invalid" {
  const value = nonEmpty(raw);
  if (value === undefined) return { _tag: "All" };
  const parsed = TopicSchema.safeParse(value);
  return parsed.success ? { _tag: "One", topic: parsed.data } : "invalid";
}

function lineageFilter(raw: string | undefined): Query["lineage"] | "invalid" {
  const value = nonEmpty(raw);
  if (value === undefined) return { _tag: "All" };
  const parsed = LineageSchema.safeParse(value);
  return parsed.success ? { _tag: "One", lineage: parsed.data } : "invalid";
}

function yearBound(raw: number | undefined): Year | null | "invalid" {
  if (raw === undefined) return null;
  const parsed = YearSchema.safeParse(raw);
  return parsed.success ? parsed.data : "invalid";
}

function hasSearchConstraint(args: QuerySeedsArgs, search: string | undefined): boolean {
  return (
    search !== undefined ||
    nonEmpty(args.topic) !== undefined ||
    nonEmpty(args.lineage) !== undefined ||
    args.year_min !== undefined ||
    args.year_max !== undefined
  );
}

export async function querySeeds(
  corpus: Corpus,
  args: QuerySeedsArgs,
  readCard: ReadCardMarkdown,
): Promise<string> {
  const id = nonEmpty(args.id);
  if (id !== undefined) {
    const card = lookupCard(corpus, id);
    return card === undefined ? formatZeroHits(failedDetail(args)) : readCard(card.id);
  }

  const search = nonEmpty(args.query);
  if (search !== undefined) {
    const ranked = uniqueRankHit(corpus, search);
    if (ranked !== null) return readCard(ranked.id);
  }

  if (!hasSearchConstraint(args, search)) {
    return formatZeroHits(failedDetail({ query: args.query ?? "" }));
  }

  const topic = topicFilter(args.topic);
  const lineage = lineageFilter(args.lineage);
  const yearMin = yearBound(args.year_min);
  const yearMax = yearBound(args.year_max);
  if (topic === "invalid" || lineage === "invalid" || yearMin === "invalid" || yearMax === "invalid") {
    return formatZeroHits(failedDetail(args));
  }

  const query: Query = {
    ...defaultQuery,
    search: search ?? "",
    topic,
    lineage,
    year: { min: yearMin, max: yearMax },
  };
  const hits = applyQuery(corpus, query);
  if (hits.length === 0) return formatZeroHits(failedDetail(args));
  if (hits.length === 1) {
    const only = hits[0];
    return only === undefined ? formatZeroHits(failedDetail(args)) : readCard(only.id);
  }
  return formatManyHits(hits, clampLimit(args.limit));
}

export async function getSeed(
  corpus: Corpus,
  id: string,
  readCard: ReadCardMarkdown,
): Promise<string> {
  const card = lookupCard(corpus, id);
  if (card === undefined) {
    return formatZeroHits(failedDetail({ id, query: undefined }));
  }
  return readCard(card.id);
}
