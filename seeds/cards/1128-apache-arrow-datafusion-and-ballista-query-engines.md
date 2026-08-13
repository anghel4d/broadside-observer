---
title: Apache Arrow DataFusion and Ballista Query Engines
authors:
- Apache Arrow community
- Andrew Lamb et al.
year: 2022
venue: Technical report / Arrow
arxiv: null
doi: null
source: "https://arrow.apache.org/datafusion/"
topics:
- datafusion
- arrow
- query-engine
- rust
seed_rank: 1128
seed_batch: to1000-db-types-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 9
lineage: contemporary-databases
cites:
  []
---

# Apache Arrow DataFusion and Ballista Query Engines

## One-sentence takeaway

Rust query engine on Arrow batches — composable optimizer + execution for lakehouse builders.

## Why it matters here

Modern embeddable planner/executor used under DuckDB-adjacent and cloud SQL engines.

## Key ideas

- Arrow memory as interchange.
- Extensible logical/physical plans in Rust.
- Ballista as distributed scheduler layer.

## Caveats

- Living OSS project — cite a pinned release in production.
- Not a single archival conference paper.

## Links

- URL: https://arrow.apache.org/datafusion/
