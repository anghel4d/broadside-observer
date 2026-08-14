import type { Corpus } from "../domain/corpus.ts";
import {
  LineageSchema,
  PoolSchema,
  SORT_KEYS,
  SeedBatchSchema,
  TopicSchema,
  YearSchema,
  defaultQuery,
  type Query,
  type SortKey,
  type Year,
} from "../domain/schema.ts";
import { printViewSearch, type ViewMode } from "./view.ts";

export const QUERY_URL_KEYS = [
  "q",
  "topic",
  "batch",
  "pool",
  "lineage",
  "ymin",
  "ymax",
  "sort",
  "rev",
] as const;

export function parseSortKey(value: string | null): SortKey | null {
  if (value === null) return null;
  for (const key of SORT_KEYS) {
    if (key === value) return key;
  }
  return null;
}

export function orderedYear(
  min: Year | null,
  max: Year | null,
): { readonly min: Year | null; readonly max: Year | null } {
  if (min !== null && max !== null && min > max) return { min: max, max: min };
  return { min, max };
}

function paramsFromSearch(search: string): URLSearchParams {
  const raw = search.startsWith("?") ? search.slice(1) : search;
  return new URLSearchParams(raw);
}

export function searchHasQueryParams(search: string): boolean {
  const params = paramsFromSearch(search);
  return QUERY_URL_KEYS.some((key) => params.has(key));
}

export function parseQueryFromSearch(search: string, corpus: Corpus): Query | null {
  if (!searchHasQueryParams(search)) return null;
  const params = paramsFromSearch(search);
  let topic: Query["topic"] = { _tag: "All" };
  const topicRaw = params.get("topic");
  if (topicRaw !== null && topicRaw !== "") {
    const parsed = TopicSchema.safeParse(topicRaw);
    if (parsed.success && corpus.topics.includes(parsed.data)) {
      topic = { _tag: "One", topic: parsed.data };
    }
  }
  let batch: Query["batch"] = { _tag: "All" };
  const batchRaw = params.get("batch");
  if (batchRaw !== null && batchRaw !== "") {
    const parsed = SeedBatchSchema.safeParse(batchRaw);
    if (parsed.success && corpus.batches.includes(parsed.data)) {
      batch = { _tag: "One", batch: parsed.data };
    }
  }
  let pool: Query["pool"] = { _tag: "All" };
  const poolRaw = params.get("pool");
  if (poolRaw === "__none__") pool = { _tag: "None" };
  else if (poolRaw !== null && poolRaw !== "") {
    const parsed = PoolSchema.safeParse(poolRaw);
    if (parsed.success && corpus.pools.includes(parsed.data)) {
      pool = { _tag: "One", pool: parsed.data };
    }
  }
  let lineage: Query["lineage"] = { _tag: "All" };
  const lineageRaw = params.get("lineage");
  if (lineageRaw === "__none__") lineage = { _tag: "None" };
  else if (lineageRaw !== null && lineageRaw !== "") {
    const parsed = LineageSchema.safeParse(lineageRaw);
    if (parsed.success && corpus.lineages.includes(parsed.data)) {
      lineage = { _tag: "One", lineage: parsed.data };
    }
  }
  const ymin = params.get("ymin");
  const ymax = params.get("ymax");
  const minParsed = ymin !== null ? YearSchema.safeParse(Number(ymin)) : null;
  const maxParsed = ymax !== null ? YearSchema.safeParse(Number(ymax)) : null;
  const min = minParsed !== null && minParsed.success ? minParsed.data : null;
  const max = maxParsed !== null && maxParsed.success ? maxParsed.data : null;
  return {
    search: params.get("q") ?? "",
    topic,
    batch,
    pool,
    lineage,
    year: orderedYear(min, max),
    sort: parseSortKey(params.get("sort")) ?? defaultQuery.sort,
    sortReversed: params.get("rev") === "1",
  };
}

export function printQuerySearch(search: string, view: ViewMode, query: Query): string {
  const params = paramsFromSearch(search);
  for (const key of QUERY_URL_KEYS) params.delete(key);
  if (query.search.trim() !== "") params.set("q", query.search);
  if (query.topic._tag === "One") params.set("topic", query.topic.topic);
  if (query.batch._tag === "One") params.set("batch", query.batch.batch);
  if (query.pool._tag === "None") params.set("pool", "__none__");
  if (query.pool._tag === "One") params.set("pool", query.pool.pool);
  if (query.lineage._tag === "None") params.set("lineage", "__none__");
  if (query.lineage._tag === "One") params.set("lineage", query.lineage.lineage);
  if (query.year.min !== null) params.set("ymin", String(query.year.min));
  if (query.year.max !== null) params.set("ymax", String(query.year.max));
  if (query.sort !== defaultQuery.sort) params.set("sort", query.sort);
  if (query.sortReversed) params.set("rev", "1");
  const qs = params.toString();
  return printViewSearch(qs === "" ? "" : `?${qs}`, view);
}
