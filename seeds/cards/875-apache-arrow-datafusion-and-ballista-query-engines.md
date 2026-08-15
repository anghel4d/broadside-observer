---
title: Apache Arrow DataFusion and Ballista Query Engines
authors:
- Andrew Lamb
- Yijie Shen
- Daniël Heres
- Jayjeet Chakraborty
- Mehmet Ozan Kabak
- Liang-Chi Hsieh
- Chao Sun
year: 2024
venue: SIGMOD
arxiv: null
doi: 10.1145/3626246.3653368
source: "https://doi.org/10.1145/3626246.3653368"
topics:
- datafusion
- arrow
- query-engine
- rust
seed_rank: 875
seed_batch: to1000-db-types-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 9
lineage: contemporary-databases
cites:
  - title: "DuckDB: an Embeddable Analytical Database"
    url: "https://doi.org/10.1145/3299869.3320212"
    year: 2019
    arxiv: null
    doi: "10.1145/3299869.3320212"
see:
  - "874-duckdb-an-embeddable-analytical-database"
---

# Apache Arrow DataFusion and Ballista Query Engines

## One-sentence takeaway

DataFusion is a Rust, Arrow-native, embeddable analytic engine whose extension APIs (catalogs, plans, operators, functions) still hit competitive speed; Ballista is the distributed scheduler on top.

## Why it matters here

If Broadside grows a composable planner/executor in-process — not a warehouse, not DuckDB-the-product — DataFusion is the current open kernel. Anoptic-adjacent tools already speak Arrow batches.

## Key ideas

- Apache Arrow memory is the interchange *and* the runtime representation; Parquet/object-store scans push down projection and predicates.
- Logical and physical plans, SQL and DataFrame APIs, and a vectorized parallel streaming executor are all replaceable at documented extension points.
- The 2024 SIGMOD paper argues you do not have to choose between modularity and speed; comparisons include DuckDB.
- Ballista (now less central than the embeddable engine) was the original distributed scheduler layer over the same plans.
- Living ASF project: pin a release in production. The archival cite is Lamb et al., SIGMOD Companion 2024, not a nameless "community report."

## Caveats

## Links

- DOI: [10.1145/3626246.3653368](https://doi.org/10.1145/3626246.3653368)
- Author PDF: https://andrew.nerdnetworks.org/pdf/SIGMOD-2024-lamb.pdf
- Docs: https://arrow.apache.org/datafusion/
