---
title: "DuckDB: an Embeddable Analytical Database"
authors:
  - "Mark Raasveldt"
  - "Hannes Muehleisen"
year: 2019
venue: "SIGMOD"
arxiv: null
doi: "10.1145/3299869.3320212"
source: "https://doi.org/10.1145/3299869.3320212"
topics:
  - embedded-olap
  - vectorized
  - duckdb
seed_rank: 796
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
  - title: "Quickstep: A Data Platform for Analytics"
    url: "https://doi.org/10.14778/3229863.3229875"
    year: 2018
    arxiv: null
    doi: "10.14778/3229863.3229875"
    card: "810-quickstep-a-data-platform-for-analytics"
  - title: "Photon: A Fast Query Engine for Lakehouse Systems"
    url: "https://doi.org/10.1145/3514221.3526054"
    year: 2022
    arxiv: null
    doi: "10.1145/3514221.3526054"
    card: "775-photon-a-fast-query-engine-for-lakehouse-systems"
  - title: "Velox: Meta's Unified Execution Engine"
    url: "https://doi.org/10.14778/3554821.3554874"
    year: 2022
    arxiv: null
    doi: "10.14778/3554821.3554874"
    card: "744-velox-meta-s-unified-execution-engine"
---

# DuckDB: an Embeddable Analytical Database

## One-sentence takeaway

DuckDB: Vectorized/columnar execution to amortize interpretation and use SIMD.

## Why it matters here

Vectorized/compiled execution is the performance model for ano batched interpreters and analytics paths.

## Key ideas

- Venue/year anchor: SIGMOD 2019.
- Operate on cache-resident vectors/columns to cut interpretation overhead and enable SIMD.
- Primary topics: embedded-olap, vectorized, duckdb.
- Read as an architecture paper: deployment assumptions matter as much as algorithms.

## Caveats

- Seed card from contemporary-databases to-1000 pass; promote to a full `summaries/` digest before relying on fine-grained claims.
- Author lists may be truncated for long industrial papers; verify against the canonical PDF.
- Cross-check DOI/PDF if citing in production docs.

## Links

- DOI: [10.1145/3299869.3320212](https://doi.org/10.1145/3299869.3320212)
- URL: https://doi.org/10.1145/3299869.3320212
