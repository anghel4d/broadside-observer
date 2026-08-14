import { labelForLineage, labelForPool } from "./lineageLabels.ts";
import { assertNever } from "./never.ts";
import type { Corpus } from "./corpus.ts";
import type {
  BatchFilter,
  CardId,
  LineageFilter,
  PoolFilter,
  Query,
  SeedCard,
  SeedRank,
  SortKey,
  TopicFilter,
  YearRange,
} from "./schema.ts";

export function tokenize(search: string): ReadonlyArray<string> {
  return search
    .toLowerCase()
    .split(/\s+/u)
    .filter((token) => token.length > 0);
}

function matchesTopic(filter: TopicFilter, card: SeedCard): boolean {
  switch (filter._tag) {
    case "All":
      return true;
    case "One":
      return card.topics.includes(filter.topic);
  }
}

function matchesBatch(filter: BatchFilter, card: SeedCard): boolean {
  switch (filter._tag) {
    case "All":
      return true;
    case "One":
      return card.seed_batch === filter.batch;
  }
}

function matchesPool(filter: PoolFilter, card: SeedCard): boolean {
  switch (filter._tag) {
    case "All":
      return true;
    case "None":
      return card.pool === null;
    case "One":
      return card.pool === filter.pool;
  }
}

function matchesLineage(filter: LineageFilter, card: SeedCard): boolean {
  switch (filter._tag) {
    case "All":
      return true;
    case "None":
      return card.lineage === null;
    case "One":
      return card.lineage === filter.lineage;
  }
}

function matchesYear(range: YearRange, card: SeedCard): boolean {
  if (range.min !== null && card.year < range.min) return false;
  if (range.max !== null && card.year > range.max) return false;
  return true;
}

function matchesSearch(
  tokens: ReadonlyArray<string>,
  haystack: string | undefined,
): boolean {
  if (tokens.length === 0) return true;
  if (haystack === undefined) return false;
  return tokens.every((token) => haystack.includes(token));
}

/** Title hits outweigh haystack hits; used as a stable tie-breaker. */
export function searchScore(card: SeedCard, haystack: string, tokens: ReadonlyArray<string>): number {
  if (tokens.length === 0) return 0;
  const title = card.title.toLowerCase();
  let score = 0;
  for (const token of tokens) {
    if (title.includes(token)) score += 3;
    if (haystack.includes(token)) score += 1;
  }
  return score;
}

function comparePrimary(left: SeedCard, right: SeedCard, sort: SortKey): number {
  switch (sort) {
    case "rank":
      return left.seed_rank - right.seed_rank;
    case "year":
      return right.year - left.year;
    case "title":
      return left.title.localeCompare(right.title, "en");
    case "relevance":
      return (right.relevance_score ?? -1) - (left.relevance_score ?? -1);
    default:
      return assertNever(sort);
  }
}

function compareCards(
  left: SeedCard,
  right: SeedCard,
  sort: SortKey,
  scores: ReadonlyMap<CardId, number>,
): number {
  const primary = comparePrimary(left, right, sort);
  if (primary !== 0) return primary;
  const scoreDelta = (scores.get(right.id) ?? 0) - (scores.get(left.id) ?? 0);
  if (scoreDelta !== 0) return scoreDelta;
  return left.id.localeCompare(right.id, "en");
}

/** `Corpus × Query → [SeedCard]` — filter then sort; does not mutate the corpus. */
export function applyQuery(corpus: Corpus, query: Query): ReadonlyArray<SeedCard> {
  const tokens = tokenize(query.search);
  const scores = new Map<CardId, number>();
  const filtered: SeedCard[] = [];

  for (const card of corpus.cards) {
    if (!matchesTopic(query.topic, card)) continue;
    if (!matchesBatch(query.batch, card)) continue;
    if (!matchesPool(query.pool, card)) continue;
    if (!matchesLineage(query.lineage, card)) continue;
    if (!matchesYear(query.year, card)) continue;
    const haystack = corpus.haystack.get(card.id) ?? "";
    if (!matchesSearch(tokens, haystack)) continue;
    scores.set(card.id, searchScore(card, haystack, tokens));
    filtered.push(card);
  }

  filtered.sort((left, right) => compareCards(left, right, query.sort, scores));
  if (query.sortReversed) filtered.reverse();
  return filtered;
}

export type SelectionState =
  | { readonly _tag: "None" }
  | { readonly _tag: "Visible"; readonly card: SeedCard }
  | { readonly _tag: "OffFilter"; readonly card: SeedCard };

/**
 * Resolve the detail card against the current filter.
 * A routed id still present in `visible` wins; a routed id excluded by the
 * filter is `OffFilter` (detail can warn instead of going stale); otherwise
 * the first visible card is selected.
 */
export function selectionState(
  corpus: Corpus,
  visible: ReadonlyArray<SeedCard>,
  id: CardId | null,
): SelectionState {
  if (id !== null) {
    for (const card of visible) {
      if (card.id === id) return { _tag: "Visible", card };
    }
    const off = corpus.byId.get(id);
    if (off !== undefined) return { _tag: "OffFilter", card: off };
  }
  const first = visible[0];
  return first === undefined ? { _tag: "None" } : { _tag: "Visible", card: first };
}

export function selectedCard(
  corpus: Corpus,
  visible: ReadonlyArray<SeedCard>,
  id: CardId | null,
): SeedCard | null {
  const state = selectionState(corpus, visible, id);
  return state._tag === "None" ? null : state.card;
}

export const FILTER_KEYS = ["search", "topic", "batch", "pool", "lineage", "year"] as const;
export type FilterKey = (typeof FILTER_KEYS)[number];

export type ActiveFilter = {
  readonly key: FilterKey;
  readonly label: string;
};

/** Facets that currently narrow the catalog (sort is not a filter). */
export function activeFilters(query: Query): ReadonlyArray<ActiveFilter> {
  const out: ActiveFilter[] = [];
  const search = query.search.trim();
  if (search.length > 0) out.push({ key: "search", label: search });
  if (query.topic._tag === "One") out.push({ key: "topic", label: query.topic.topic });
  if (query.batch._tag === "One") out.push({ key: "batch", label: query.batch.batch });
  if (query.pool._tag === "None") out.push({ key: "pool", label: "No pool" });
  if (query.pool._tag === "One") out.push({ key: "pool", label: labelForPool(query.pool.pool) });
  if (query.lineage._tag === "None") out.push({ key: "lineage", label: "No lineage" });
  if (query.lineage._tag === "One") {
    out.push({ key: "lineage", label: labelForLineage(query.lineage.lineage) });
  }
  if (query.year.min !== null || query.year.max !== null) {
    const lo = query.year.min === null ? "" : String(query.year.min);
    const hi = query.year.max === null ? "" : String(query.year.max);
    const label = query.year.min !== null && query.year.max !== null ? `${lo}–${hi}` : lo !== "" ? `from ${lo}` : `to ${hi}`;
    out.push({ key: "year", label });
  }
  return out;
}

export function clearFilter(query: Query, key: FilterKey): Query {
  switch (key) {
    case "search":
      return { ...query, search: "" };
    case "topic":
      return { ...query, topic: { _tag: "All" } };
    case "batch":
      return { ...query, batch: { _tag: "All" } };
    case "pool":
      return { ...query, pool: { _tag: "All" } };
    case "lineage":
      return { ...query, lineage: { _tag: "All" } };
    case "year":
      return { ...query, year: { min: null, max: null } };
    default:
      return assertNever(key);
  }
}

/** Prefer a visible card at `rank`; otherwise any corpus card with that rank. */
export function findCardByRank(
  preferred: ReadonlyArray<SeedCard>,
  fallback: ReadonlyArray<SeedCard>,
  rank: SeedRank,
): SeedCard | null {
  for (const card of preferred) {
    if (card.seed_rank === rank) return card;
  }
  for (const card of fallback) {
    if (card.seed_rank === rank) return card;
  }
  return null;
}
