---
title: "Rethinking Serializable Multiversion Concurrency Control"
authors:
  - "Jose M. Faleiro"
  - "Daniel J. Abadi"
year: 2015
venue: "VLDB"
arxiv: null
doi: "10.14778/2752939.2752940"
source: "https://doi.org/10.14778/2752939.2752940"
topics:
  - mvcc
  - serializability
seed_rank: 798
seed_batch: "to1000-db-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
lineage: contemporary-databases
cites:
  - title: "Bohm: Durable and Scalable Multiversioning for Main Memory Databases"
    url: "https://doi.org/10.1145/2588555.2610492"
    year: 2014
    arxiv: null
    doi: "10.1145/2588555.2610492"
    card: "799-bohm-durable-and-scalable-multiversioning-for-main-memory-da"
  - title: "Hekaton: SQL Server's Memory-Optimized OLTP Engine"
    url: "https://doi.org/10.1145/2463676.2463710"
    year: 2013
    arxiv: null
    doi: "10.1145/2463676.2463710"
    card: "813-hekaton-sql-server-s-memory-optimized-oltp-engine"
  - title: "ERMIA: Fast Memory-Optimized Database System for Heterogeneous Workloads"
    url: "https://doi.org/10.1145/2882903.2882905"
    year: 2016
    arxiv: null
    doi: "10.1145/2882903.2882905"
    card: "742-ermia-fast-memory-optimized-database-system-for-heterogeneou"
  - title: "An Empirical Evaluation of In-Memory Multi-Version Concurrency Control"
    url: "https://doi.org/10.14778/3055540.3055553"
    year: 2017
    arxiv: null
    doi: "10.14778/3055540.3055553"
    card: "780-an-empirical-evaluation-of-in-memory-multi-version-concurren"
---

# Rethinking Serializable Multiversion Concurrency Control

## One-sentence takeaway

Rethinking Serializable Multiversion Concurrency Control: Multi-version concurrency for readers/writers without blocking reads.

## Why it matters here

Concurrency-control and HTAP isolation choices matter for mixed interactive + analytic game/sim workloads.

## Key ideas

- Venue/year anchor: VLDB 2015.
- Versions enable non-blocking reads; anomaly avoidance needs careful commit protocol.
- Primary topics: mvcc, serializability.
- Read as an architecture paper: deployment assumptions matter as much as algorithms.

## Caveats

- Seed card from contemporary-databases to-1000 pass; promote to a full `summaries/` digest before relying on fine-grained claims.
- Author lists may be truncated for long industrial papers; verify against the canonical PDF.
- Cross-check DOI/PDF if citing in production docs.

## Links

- DOI: [10.14778/2752939.2752940](https://doi.org/10.14778/2752939.2752940)
- URL: https://doi.org/10.14778/2752939.2752940
