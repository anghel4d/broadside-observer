---
title: Processing a trillion cells per mouse click
authors:
- Alexander Hall
- Olaf Bachmann
- Robert Büssow
- Silviu Gănceanu
- Marc Nunkesser
year: 2012
venue: Proceedings of the VLDB Endowment
arxiv: null
doi: 10.14778/2350229.2350259
source: "https://doi.org/10.14778/2350229.2350259"
topics:
- databases
- contemporary-db
seed_rank: 857
seed_batch: to1000-db-types-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 9
lineage: contemporary-databases
cites:
  - title: "Dremel: Interactive Analysis of Web-Scale Datasets"
    url: "https://doi.org/10.14778/1920841.1920886"
    year: 2010
    arxiv: null
    doi: "10.14778/1920841.1920886"
  - title: "Bigtable: A Distributed Storage System for Structured Data"
    url: "https://research.google/pubs/pub27898/"
    year: 2006
    arxiv: null
    doi: null
see:
  - "873-dremel-interactive-analysis-of-web-scale-datasets"
  - "813-bigtable-a-distributed-storage-system-for-structured-data"
---

# Processing a trillion cells per mouse click

## One-sentence takeaway

PowerDrill's in-memory column store, composite-range-partitioned at import, skips or caches ~97% of cells so one UI click can scan a trillion values in tens of seconds.

## Why it matters here

GRID COMMAND and Broadside dashboards are the same shape: interactive drill-down over huge logs where pre-aggregation cannot cover the next filter. PowerDrill is the "keep the hot columns in RAM and skip chunks" design, complementary to Dremel's "scan everything from GFS."

## Key ideas

- Import-time composite range partitioning (heaviest-first splits on 3–5 natural-key fields) plus per-chunk dictionaries let the engine skip 92% and cache 5% of production cells, scanning only ~2.7%.
- Double dictionary encoding (global id + per-chunk id) makes group-by a tight `counts[elements[row]]++` loop and shrinks elements to a small integer range.
- Unlike Dremel, PowerDrill serves a few selected datasets mostly from memory; it can beat Dremel 10–100× on typical UI queries but cannot host thousands of ad-hoc tables.
- Successive encodings (tries, bit-packing, virtual materialized expressions) cut memory another order of magnitude on high-cardinality strings.
- Production: >800 users/month, ~4M SQL queries, one click ≈ 20 queries ≈ 782B cells in 30–40 s.

## Caveats

## Links

- DOI: [10.14778/2350229.2350259](https://doi.org/10.14778/2350229.2350259)
- PDF: https://www.vldb.org/pvldb/vol5/p1436_alexanderhall_vldb2012.pdf
