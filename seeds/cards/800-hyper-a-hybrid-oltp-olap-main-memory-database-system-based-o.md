---
title: "HyPer: A Hybrid OLTP&OLAP Main Memory Database System Based on Virtual Memory Snapshots"
authors:
  - "Alfons Kemper"
  - "Thomas Neumann"
year: 2011
venue: "ICDE"
arxiv: null
doi: "10.1109/ICDE.2011.5767867"
source: "https://doi.org/10.1109/ICDE.2011.5767867"
topics:
  - htap
  - main-memory
  - mvcc
seed_rank: 800
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
  - title: "SAP HANA Database: Data Management for Modern Business Applications"
    url: "https://doi.org/10.1145/2094114.2094126"
    year: 2012
    arxiv: null
    doi: "10.1145/2094114.2094126"
    card: "830-sap-hana-database-data-management-for-modern-business-applic"
  - title: "Serializable Snapshot Isolation in PostgreSQL"
    url: "https://doi.org/10.14778/2367502.2367523"
    year: 2012
    arxiv: null
    doi: "10.14778/2367502.2367523"
    card: "856-serializable-snapshot-isolation-in-postgresql"
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
---

# HyPer: A Hybrid OLTP&OLAP Main Memory Database System Based on Virtual Memory Snapshots

## One-sentence takeaway

HyPer: Hybrid transactional and analytical processing in one system.

## Why it matters here

Concurrency-control and HTAP isolation choices matter for mixed interactive + analytic game/sim workloads.

## Key ideas

- Venue/year anchor: ICDE 2011.
- Isolate or co-design OLTP and OLAP engines so scans do not wreck latency SLOs.
- Versions enable non-blocking reads; anomaly avoidance needs careful commit protocol.
- Read as an architecture paper: deployment assumptions matter as much as algorithms.

## Caveats

- Seed card from contemporary-databases to-1000 pass; promote to a full `summaries/` digest before relying on fine-grained claims.
- Author lists may be truncated for long industrial papers; verify against the canonical PDF.
- Cross-check DOI/PDF if citing in production docs.

## Links

- DOI: [10.1109/ICDE.2011.5767867](https://doi.org/10.1109/ICDE.2011.5767867)
- URL: https://doi.org/10.1109/ICDE.2011.5767867
