---
title: "Everything You Always Wanted to Know About Compiled and Vectorized Queries But Were Afraid to Ask"
authors:
  - "Timo Kersten"
  - "Viktor Leis"
  - "Alfons Kemper"
  - "Thomas Neumann"
  - "Peter Boncz"
  - "Orri Erling"
year: 2018
venue: "VLDB"
arxiv: null
doi: "10.14778/3236186.3236200"
source: "https://doi.org/10.14778/3236186.3236200"
topics:
  - query-compilation
  - vectorized
seed_rank: 770
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
  - title: "How to Architect a Query Compiler, Revisited"
    url: "https://doi.org/10.1145/3183713.3196893"
    year: 2018
    arxiv: null
    doi: "10.1145/3183713.3196893"
    card: "789-how-to-architect-a-query-compiler-revisited"
  - title: "Quickstep: A Data Platform for Analytics"
    url: "https://doi.org/10.14778/3229863.3229875"
    year: 2018
    arxiv: null
    doi: "10.14778/3229863.3229875"
    card: "810-quickstep-a-data-platform-for-analytics"
  - title: "DuckDB: an Embeddable Analytical Database"
    url: "https://doi.org/10.1145/3299869.3320212"
    year: 2019
    arxiv: null
    doi: "10.1145/3299869.3320212"
    card: "796-duckdb-an-embeddable-analytical-database"
  - title: "Umbra: A Disk-Based System with In-Memory Performance"
    url: "https://www.cidrdb.org/cidr2020/papers/p29-neumann-cidr20.pdf"
    year: 2020
    arxiv: null
    doi: null
    card: "871-umbra-a-disk-based-system-with-in-memory-performance"
---

# Everything You Always Wanted to Know About Compiled and Vectorized Queries But Were Afraid to Ask

## One-sentence takeaway

Everything You Always Wanted to Know About Compiled and Vectorized Queries But Were Afraid to Ask: Compiles query plans to tight machine code / LLVM for modern CPUs.

## Why it matters here

Vectorized/compiled execution is the performance model for ano batched interpreters and analytics paths.

## Key ideas

- Venue/year anchor: VLDB 2018.
- Push code generation past tuple-at-a-time interpreters; fuse operators carefully.
- Operate on cache-resident vectors/columns to cut interpretation overhead and enable SIMD.
- Read as an architecture paper: deployment assumptions matter as much as algorithms.

## Caveats

- Seed card from contemporary-databases to-1000 pass; promote to a full `summaries/` digest before relying on fine-grained claims.
- Author lists may be truncated for long industrial papers; verify against the canonical PDF.
- Cross-check DOI/PDF if citing in production docs.

## Links

- DOI: [10.14778/3236186.3236200](https://doi.org/10.14778/3236186.3236200)
- URL: https://doi.org/10.14778/3236186.3236200
