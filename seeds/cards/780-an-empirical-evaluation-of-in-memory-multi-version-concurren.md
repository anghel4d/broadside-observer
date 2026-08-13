---
title: "An Empirical Evaluation of In-Memory Multi-Version Concurrency Control"
authors:
  - "Yingjun Wu"
  - "Jia Yu"
  - "Yuanyuan Tian"
  - "Richard Sidle"
  - "Ronald Barber"
year: 2017
venue: "VLDB"
arxiv: null
doi: "10.14778/3055540.3055553"
source: "https://doi.org/10.14778/3055540.3055553"
topics:
  - mvcc
  - benchmark
seed_rank: 780
seed_batch: "to1000-db-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
lineage: contemporary-databases
cites:
  - title: "An Evaluation of Distributed Concurrency Control"
    url: "https://doi.org/10.14778/3055540.3055548"
    year: 2017
    arxiv: null
    doi: "10.14778/3055540.3055548"
    card: "843-an-evaluation-of-distributed-concurrency-control"
  - title: "Cicada: Dependably Fast Multi-Core In-Memory Transactions"
    url: "https://doi.org/10.1145/3035918.3064015"
    year: 2017
    arxiv: null
    doi: "10.1145/3035918.3064015"
    card: "790-cicada-dependably-fast-multi-core-in-memory-transactions"
  - title: "Are We Ready For Learned Cardinality Estimation?"
    url: "https://doi.org/10.14778/3476249.3476255"
    year: 2021
    arxiv: null
    doi: "10.14778/3476249.3476255"
    card: "776-are-we-ready-for-learned-cardinality-estimation"
  - title: "ERMIA: Fast Memory-Optimized Database System for Heterogeneous Workloads"
    url: "https://doi.org/10.1145/2882903.2882905"
    year: 2016
    arxiv: null
    doi: "10.1145/2882903.2882905"
    card: "742-ermia-fast-memory-optimized-database-system-for-heterogeneou"
---

# An Empirical Evaluation of In-Memory Multi-Version Concurrency Control

## One-sentence takeaway

An Empirical Evaluation of In-Memory Multi-Version Concurrency Control: Multi-version concurrency for readers/writers without blocking reads.

## Why it matters here

Concurrency-control and HTAP isolation choices matter for mixed interactive + analytic game/sim workloads.

## Key ideas

- Venue/year anchor: VLDB 2017.
- Versions enable non-blocking reads; anomaly avoidance needs careful commit protocol.
- Primary topics: mvcc, benchmark.
- Read as an architecture paper: deployment assumptions matter as much as algorithms.

## Caveats

- Seed card from contemporary-databases to-1000 pass; promote to a full `summaries/` digest before relying on fine-grained claims.
- Author lists may be truncated for long industrial papers; verify against the canonical PDF.
- Cross-check DOI/PDF if citing in production docs.

## Links

- DOI: [10.14778/3055540.3055553](https://doi.org/10.14778/3055540.3055553)
- URL: https://doi.org/10.14778/3055540.3055553
