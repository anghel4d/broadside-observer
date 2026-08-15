---
title: "The Vertica Analytic Database: C-Store 7 Years Later"
authors:
- Andrew Lamb
- Matt Fuller
- Ramakrishna Varadarajan
- Nga Tran
- Ben Vandier
- Lyric Doshi
- Chuck Bear
year: 2012
venue: Proceedings of the VLDB Endowment
arxiv: "1208.4173"
doi: 10.14778/2367502.2367518
source: "https://arxiv.org/abs/1208.4173"
topics:
- databases
- contemporary-db
seed_rank: 835
seed_batch: to1000-db-types-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 9
lineage: contemporary-databases
cites: []
---

# The Vertica Analytic Database: C-Store 7 Years Later

## One-sentence takeaway

Vertica is the commercial C-Store: projections (sorted, compressed column groups) replace heap-plus-secondary-indexes, a WOS/ROS split absorbs writes, and the execution engine runs SQL over those projections at warehouse scale.

## Why it matters here

It is the existence proof that the C-Store design survives contact with paying customers. When Anoptic or Broadside pick a physical layout, think “which projections / sort orders do we materialize,” not “which B-tree indexes.”

## Key ideas

- A table is stored as one or more projections — each a different column subset, sort order, and encoding — so the optimizer picks a physical copy rather than chasing secondary indexes.
- Writes land in a write-optimized store (WOS) and are moved into read-optimized ROS containers by the Tuple Mover; deletes are marked, not in-place.
- Encoding/compression is per-column and chosen to stay CPU-operable (RLE on sorted runs is the workhorse).
- Segmentation (hash / range) plus buddy projections give shared-nothing scale-out and K-safety without a separate replica format.

## Caveats

## Links

- arXiv: [1208.4173](https://arxiv.org/abs/1208.4173)
- PVLDB: Vol. 5, No. 12, pp. 1790–1801
