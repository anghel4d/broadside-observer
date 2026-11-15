---
title: "Small Materialized Aggregates: A Light Weight Index Structure for Data Warehousing"
authors:
  - "Guido Moerkotte"
year: 1998
venue: "Proceedings of the 24th VLDB Conference, New York, pp. 476-487"
arxiv: null
doi: null
source: "https://www.vldb.org/conf/1998/p476.pdf"
topics:
  - "zone-maps"
  - "column-stores"
  - "data-skipping"
  - "materialized-aggregates"
  - "relational-ecs-queries"
seed_rank: 2602
seed_batch: "archive-2026-11-16"
reviewed: "2026-11-16"
pool: "systems"
relevance_score: 8
lineage: data-layout
see:
  - "2580-mil-primitives-for-querying-a-fragmented-world"
  - "2579-conjunctive-selection-conditions-in-main-memory"
  - "127-c-store-a-column-oriented-dbms"
---

# Small Materialized Aggregates: A Light Weight Index Structure for Data Warehousing

## One-sentence takeaway

Store a few aggregates (min, max, count, sum, optionally per group) for every physical bucket of consecutive tuples in flat side files in bucket order; a predicate then splits buckets into qualifying, disqualifying and ambivalent, so disqualifying buckets are skipped, qualifying ones are answered from the aggregates alone, and only ambivalent ones are scanned. This is the origin of what column stores now call zone maps.

## Why it matters here

An Anoptic/ano column chunk is exactly Moerkotte's bucket: consecutive rows in physical order. Keeping per-chunk min/max/count beside each column is nearly free to maintain on append, and it turns a selection into a chunk-level three-way split before any row is touched. The grouped variant goes further: an aggregate query over a chunk that fully qualifies never reads its rows. That gives ano a cheap, honest rule for "skip, answer from summary, or scan" without a B-tree, and it sits under the per-row selection plans of card 2579.

## Key ideas

- **SMA file.** One materialized aggregate value per bucket, stored sequentially in bucket order with no keys or pointers; position i is bucket i. Buckets must follow the table's physical order (pages or runs of pages).
- **Three-way split.** For a predicate like `shipdate <= d`, `max <= d` means the bucket qualifies, `min > d` means it disqualifies, otherwise it is ambivalent and must be visited. On realistically clustered data ambivalent buckets are rare.
- **Grouped SMAs.** Adding the query's GROUP BY (or a finer grouping) gives one SMA file per group, so TPC-D Query 1 (which selects 95–97% of LINEITEM and defeats ordinary indexes) is answered from sums and counts of qualifying buckets plus scans of the few ambivalent ones. The paper reports about two orders of magnitude speedup on Query 1.
- **Cheap upkeep.** Sequential organization makes bulkloading and appends simple; SMAs generalize projection indexes (one value per tuple) to one value per bucket.
- **Planning.** Section 3 shows plan generation over qualifying, disqualifying and ambivalent bucket sets, including when SMAs stop paying (most buckets ambivalent).

## Caveats

Read from the VLDB proceedings PDF (scanned OCR). The benefit depends entirely on physical clustering by the predicate column (here dates that correlate with load order); on shuffled data every bucket is ambivalent. The setting is disk pages and 1998 hardware; the speedup figure is for one TPC-D query. Bucket-size tuning and joins are only sketched.

## Links

- VLDB 1998 PDF: https://www.vldb.org/conf/1998/p476.pdf
- DBLP: https://dblp.org/rec/conf/vldb/Moerkotte98.html
