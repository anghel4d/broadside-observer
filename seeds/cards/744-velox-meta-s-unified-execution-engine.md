---
title: "Velox: Meta's Unified Execution Engine"
authors:
  - "Pedro Pedreira"
  - "Orri Erling"
  - "Masha Basmanova"
  - "Kevin Wilfong"
  - "Laith Sakka"
  - "Krishna Pai"
  - "Wei He"
  - "Biswapesh Chattopadhyay"
year: 2022
venue: "VLDB"
arxiv: null
doi: "10.14778/3554821.3554874"
source: "https://doi.org/10.14778/3554821.3554874"
topics:
  - vectorized
  - execution-engine
  - velox
seed_rank: 744
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
  - title: "Photon: A Fast Query Engine for Lakehouse Systems"
    url: "https://doi.org/10.1145/3514221.3526054"
    year: 2022
    arxiv: null
    doi: "10.1145/3514221.3526054"
    card: "775-photon-a-fast-query-engine-for-lakehouse-systems"
  - title: "DuckDB: an Embeddable Analytical Database"
    url: "https://doi.org/10.1145/3299869.3320212"
    year: 2019
    arxiv: null
    doi: "10.1145/3299869.3320212"
    card: "796-duckdb-an-embeddable-analytical-database"
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
---

# Velox: Meta's Unified Execution Engine

## One-sentence takeaway

Velox: Vectorized/columnar execution to amortize interpretation and use SIMD.

## Why it matters here

Vectorized/compiled execution is the performance model for ano batched interpreters and analytics paths.

## Key ideas

- Venue/year anchor: VLDB 2022.
- Operate on cache-resident vectors/columns to cut interpretation overhead and enable SIMD.
- Primary topics: vectorized, execution-engine, velox.
- Read as an architecture paper: deployment assumptions matter as much as algorithms.

## Caveats

- Seed card from contemporary-databases to-1000 pass; promote to a full `summaries/` digest before relying on fine-grained claims.
- Author lists may be truncated for long industrial papers; verify against the canonical PDF.
- Cross-check DOI/PDF if citing in production docs.

## Links

- DOI: [10.14778/3554821.3554874](https://doi.org/10.14778/3554821.3554874)
- URL: https://doi.org/10.14778/3554821.3554874
