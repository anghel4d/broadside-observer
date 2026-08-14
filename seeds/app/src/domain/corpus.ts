import type { ArxivId, CardId, Lineage, Pool, SeedBatch, SeedCard, Topic, Year } from "./schema.ts";

export type Corpus = {
  readonly cards: ReadonlyArray<SeedCard>;
  readonly byId: ReadonlyMap<CardId, SeedCard>;
  readonly byArxiv: ReadonlyMap<ArxivId, CardId>;
  readonly haystack: ReadonlyMap<CardId, string>;
  readonly topics: ReadonlyArray<Topic>;
  readonly batches: ReadonlyArray<SeedBatch>;
  readonly pools: ReadonlyArray<Pool>;
  readonly lineages: ReadonlyArray<Lineage>;
  readonly lineageDocs: ReadonlySet<Lineage>;
  readonly yearBounds: readonly [Year, Year] | null;
  readonly hasUnpooled: boolean;
  readonly hasUnlineaged: boolean;
};

function uniqueSorted<A extends string>(values: Iterable<A>): ReadonlyArray<A> {
  return [...new Set(values)].sort((left, right) => left.localeCompare(right, "en"));
}

export function haystackFor(card: SeedCard): string {
  return [
    card.title,
    card.authors.join(" "),
    card.topics.join(" "),
    card.lineage ?? "",
    card.venue,
    card.cites.map((cite) => cite.title).join(" "),
    card.sections.takeaway,
  ]
    .join("\n")
    .toLowerCase();
}

/** `[SeedCard] → Corpus` — derived indexes, no mutation of the input array. */
export function buildCorpus(
  cards: ReadonlyArray<SeedCard>,
  lineageDocs: ReadonlyArray<Lineage> = [],
): Corpus {
  const byId = new Map<CardId, SeedCard>();
  const byArxiv = new Map<ArxivId, CardId>();
  const haystack = new Map<CardId, string>();
  const topicValues: Topic[] = [];
  const batchValues: SeedBatch[] = [];
  const poolValues: Pool[] = [];
  const lineageValues: Lineage[] = [];
  let minYear: Year | null = null;
  let maxYear: Year | null = null;
  let hasUnpooled = false;
  let hasUnlineaged = false;

  for (const card of cards) {
    byId.set(card.id, card);
    if (card.arxiv !== null && !byArxiv.has(card.arxiv)) byArxiv.set(card.arxiv, card.id);
    haystack.set(card.id, haystackFor(card));
    topicValues.push(...card.topics);
    batchValues.push(card.seed_batch);
    if (card.pool === null) hasUnpooled = true;
    else poolValues.push(card.pool);
    if (card.lineage === null) hasUnlineaged = true;
    else lineageValues.push(card.lineage);
    if (minYear === null || card.year < minYear) minYear = card.year;
    if (maxYear === null || card.year > maxYear) maxYear = card.year;
  }

  const yearBounds: readonly [Year, Year] | null =
    minYear === null || maxYear === null ? null : [minYear, maxYear];

  return {
    cards,
    byId,
    byArxiv,
    haystack,
    topics: uniqueSorted(topicValues),
    batches: uniqueSorted(batchValues),
    pools: uniqueSorted(poolValues),
    lineages: uniqueSorted(lineageValues),
    lineageDocs: new Set(lineageDocs),
    yearBounds,
    hasUnpooled,
    hasUnlineaged,
  };
}

/**
 * In-library deep-link targets: live `see` stems, plus cites whose `arxiv` matches a packed card.
 * Dead stems and self-matches are omitted.
 */
export function inLibraryIds(card: SeedCard, corpus: Pick<Corpus, "byId" | "byArxiv">): ReadonlyArray<CardId> {
  const seen = new Set<CardId>();
  const out: CardId[] = [];
  const add = (id: CardId): void => {
    if (id === card.id || seen.has(id) || !corpus.byId.has(id)) return;
    seen.add(id);
    out.push(id);
  };
  for (const stem of card.see) add(stem);
  for (const cite of card.cites) {
    if (cite.arxiv === null) continue;
    const match = corpus.byArxiv.get(cite.arxiv);
    if (match !== undefined) add(match);
  }
  return out;
}
