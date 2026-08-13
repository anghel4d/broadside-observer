---
title: "Serializable Snapshot Isolation in PostgreSQL"
authors:
  - "Dan R. K. Ports"
  - "Kevin Grittner"
year: 2012
venue: "VLDB"
arxiv: null
doi: "10.14778/2367502.2367523"
source: "https://doi.org/10.14778/2367502.2367523"
topics:
  - mvcc
  - ssi
  - postgres
seed_rank: 856
seed_batch: "to1000-db-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
lineage: contemporary-databases
cites:
  - title: "HyPer: A Hybrid OLTP&OLAP Main Memory Database System Based on Virtual Memory Snapshots"
    url: "https://doi.org/10.1109/ICDE.2011.5767867"
    year: 2011
    arxiv: null
    doi: "10.1109/ICDE.2011.5767867"
    card: "800-hyper-a-hybrid-oltp-olap-main-memory-database-system-based-o"
  - title: "Hekaton: SQL Server's Memory-Optimized OLTP Engine"
    url: "https://doi.org/10.1145/2463676.2463710"
    year: 2013
    arxiv: null
    doi: "10.1145/2463676.2463710"
    card: "813-hekaton-sql-server-s-memory-optimized-oltp-engine"
  - title: "Bohm: Durable and Scalable Multiversioning for Main Memory Databases"
    url: "https://doi.org/10.1145/2588555.2610492"
    year: 2014
    arxiv: null
    doi: "10.1145/2588555.2610492"
    card: "799-bohm-durable-and-scalable-multiversioning-for-main-memory-da"
  - title: "Rethinking Serializable Multiversion Concurrency Control"
    url: "https://doi.org/10.14778/2752939.2752940"
    year: 2015
    arxiv: null
    doi: "10.14778/2752939.2752940"
    card: "798-rethinking-serializable-multiversion-concurrency-control"
---

# Serializable Snapshot Isolation in PostgreSQL

## One-sentence takeaway

Serializable Snapshot Isolation in PostgreSQL: Multi-version concurrency for readers/writers without blocking reads.

## Why it matters here

Concurrency-control and HTAP isolation choices matter for mixed interactive + analytic game/sim workloads.

## Key ideas

- Venue/year anchor: VLDB 2012.
- Versions enable non-blocking reads; anomaly avoidance needs careful commit protocol.
- Primary topics: mvcc, ssi, postgres.
- Read as an architecture paper: deployment assumptions matter as much as algorithms.

## Caveats

- Seed card from contemporary-databases to-1000 pass; promote to a full `summaries/` digest before relying on fine-grained claims.
- Author lists may be truncated for long industrial papers; verify against the canonical PDF.
- Cross-check DOI/PDF if citing in production docs.

## Links

- DOI: [10.14778/2367502.2367523](https://doi.org/10.14778/2367502.2367523)
- URL: https://doi.org/10.14778/2367502.2367523
