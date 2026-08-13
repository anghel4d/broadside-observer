---
title: "Quickstep: A Data Platform for Analytics"
authors:
  - "Jignesh M. Patel"
  - "Harshad Deshmukh"
  - "Jianqiao Zhu"
  - "Navneet Potti"
  - "Zuyu Zhang"
  - "Marc Spehlmann"
  - "Hakan Memisoglu"
  - "Saket Saurabh"
year: 2018
venue: "VLDB"
arxiv: null
doi: "10.14778/3229863.3229875"
source: "https://doi.org/10.14778/3229863.3229875"
topics:
  - query-execution
  - vectorized
seed_rank: 810
seed_batch: "to1000-db-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
lineage: contemporary-databases
cites:
  - title: "A Relational Model of Data for Large Shared Data Banks"
    url: "https://doi.org/10.1145/362384.362685"
    year: 1970
    arxiv: null
    doi: "10.1145/362384.362685"
    card: "048-a-relational-model-of-data-for-large-shared-data-banks"
  - title: "Everything You Always Wanted to Know About Compiled and Vectorized Queries But Were Afraid to Ask"
    url: "https://doi.org/10.14778/3236186.3236200"
    year: 2018
    arxiv: null
    doi: "10.14778/3236186.3236200"
    card: "770-everything-you-always-wanted-to-know-about-compiled-and-vect"
  - title: "Relaxed Operator Fusion for In-Memory Databases: Making Compilation, Vectorization, and Prefetching Work Together At Last"
    url: "https://doi.org/10.14778/3115404.3115411"
    year: 2017
    arxiv: null
    doi: "10.14778/3115404.3115411"
    card: "793-relaxed-operator-fusion-for-in-memory-databases-making-compi"
  - title: "DuckDB: an Embeddable Analytical Database"
    url: "https://doi.org/10.1145/3299869.3320212"
    year: 2019
    arxiv: null
    doi: "10.1145/3299869.3320212"
    card: "796-duckdb-an-embeddable-analytical-database"
  - title: "Photon: A Fast Query Engine for Lakehouse Systems"
    url: "https://doi.org/10.1145/3514221.3526054"
    year: 2022
    arxiv: null
    doi: "10.1145/3514221.3526054"
    card: "775-photon-a-fast-query-engine-for-lakehouse-systems"
---

# Quickstep: A Data Platform for Analytics

## One-sentence takeaway

Quickstep: Vectorized/columnar execution to amortize interpretation and use SIMD.

## Why it matters here

Vectorized/compiled execution is the performance model for ano batched interpreters and analytics paths.

## Key ideas

- Venue/year anchor: VLDB 2018.
- Operate on cache-resident vectors/columns to cut interpretation overhead and enable SIMD.
- Primary topics: query-execution, vectorized.
- Read as an architecture paper: deployment assumptions matter as much as algorithms.

## Caveats

- Seed card from contemporary-databases to-1000 pass; promote to a full `summaries/` digest before relying on fine-grained claims.
- Author lists may be truncated for long industrial papers; verify against the canonical PDF.
- Cross-check DOI/PDF if citing in production docs.

## Links

- DOI: [10.14778/3229863.3229875](https://doi.org/10.14778/3229863.3229875)
- URL: https://doi.org/10.14778/3229863.3229875
