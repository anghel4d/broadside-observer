---
title: "Bohm: Durable and Scalable Multiversioning for Main Memory Databases"
authors:
  - "Jose M. Faleiro"
  - "Daniel J. Abadi"
year: 2014
venue: "SIGMOD"
arxiv: null
doi: "10.1145/2588555.2610492"
source: "https://doi.org/10.1145/2588555.2610492"
topics:
  - deterministic-txns
  - mvcc
seed_rank: 799
seed_batch: "to1000-db-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
lineage: contemporary-databases
cites:
  - title: "Hekaton: SQL Server's Memory-Optimized OLTP Engine"
    url: "https://doi.org/10.1145/2463676.2463710"
    year: 2013
    arxiv: null
    doi: "10.1145/2463676.2463710"
    card: "813-hekaton-sql-server-s-memory-optimized-oltp-engine"
  - title: "Calvin: Fast Distributed Transactions for Partitioned Database Systems"
    url: "https://doi.org/10.1145/2213836.2213838"
    year: 2012
    arxiv: null
    doi: "10.1145/2213836.2213838"
    card: "772-calvin-fast-distributed-transactions-for-partitioned-databas"
  - title: "Rethinking Serializable Multiversion Concurrency Control"
    url: "https://doi.org/10.14778/2752939.2752940"
    year: 2015
    arxiv: null
    doi: "10.14778/2752939.2752940"
    card: "798-rethinking-serializable-multiversion-concurrency-control"
  - title: "ERMIA: Fast Memory-Optimized Database System for Heterogeneous Workloads"
    url: "https://doi.org/10.1145/2882903.2882905"
    year: 2016
    arxiv: null
    doi: "10.1145/2882903.2882905"
    card: "742-ermia-fast-memory-optimized-database-system-for-heterogeneou"
---

# Bohm: Durable and Scalable Multiversioning for Main Memory Databases

## One-sentence takeaway

Bohm: Deterministic scheduling to simplify distributed commit and replication.

## Why it matters here

Concurrency-control and HTAP isolation choices matter for mixed interactive + analytic game/sim workloads.

## Key ideas

- Venue/year anchor: SIGMOD 2014.
- Deterministic ordering turns distributed commit into agreement on inputs, not locks.
- Versions enable non-blocking reads; anomaly avoidance needs careful commit protocol.
- Read as an architecture paper: deployment assumptions matter as much as algorithms.

## Caveats

- Seed card from contemporary-databases to-1000 pass; promote to a full `summaries/` digest before relying on fine-grained claims.
- Author lists may be truncated for long industrial papers; verify against the canonical PDF.
- Cross-check DOI/PDF if citing in production docs.

## Links

- DOI: [10.1145/2588555.2610492](https://doi.org/10.1145/2588555.2610492)
- URL: https://doi.org/10.1145/2588555.2610492
