import { assertNever } from "./never.ts";
import type { Corpus } from "./corpus.ts";
import type {
  BatchFilter,
  CardId,
  LineageFilter,
  PoolFilter,
  Query,
  SeedCard,
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
