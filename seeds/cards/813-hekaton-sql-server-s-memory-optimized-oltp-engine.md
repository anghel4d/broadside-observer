---
title: "Hekaton: SQL Server's Memory-Optimized OLTP Engine"
authors:
  - "Cristian Diaconu"
  - "Craig Freedman"
  - "Erik Ismert"
  - "Per-Ake Larson"
  - "Pravin Mittal"
  - "Ryan Stonecipher"
  - "Nitin Verma"
  - "Mike Zwilling"
year: 2013
venue: "SIGMOD"
arxiv: null
doi: "10.1145/2463676.2463710"
source: "https://doi.org/10.1145/2463676.2463710"
topics:
  - main-memory
  - oltp
  - mvcc
seed_rank: 813
seed_batch: "to1000-db-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
lineage: contemporary-databases
cites:
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
  - title: "Bohm: Durable and Scalable Multiversioning for Main Memory Databases"
    url: "https://doi.org/10.1145/2588555.2610492"
    year: 2014
    arxiv: null
    doi: "10.1145/2588555.2610492"
    card: "799-bohm-durable-and-scalable-multiversioning-for-main-memory-da"
  - title: "FOEDUS: OLTP Engine for a Thousand Cores and NVRAM"
    url: "https://doi.org/10.1145/2723372.2746480"
    year: 2015
    arxiv: null
    doi: "10.1145/2723372.2746480"
    card: "858-foedus-oltp-engine-for-a-thousand-cores-and-nvram"
---

# Hekaton: SQL Server's Memory-Optimized OLTP Engine

## One-sentence takeaway

Hekaton: Multi-version concurrency for readers/writers without blocking reads.

## Why it matters here

Concurrency-control and HTAP isolation choices matter for mixed interactive + analytic game/sim workloads.

## Key ideas

- Venue/year anchor: SIGMOD 2013.
- Versions enable non-blocking reads; anomaly avoidance needs careful commit protocol.
- Primary topics: main-memory, oltp, mvcc.
- Read as an architecture paper: deployment assumptions matter as much as algorithms.

## Caveats

- Seed card from contemporary-databases to-1000 pass; promote to a full `summaries/` digest before relying on fine-grained claims.
- Author lists may be truncated for long industrial papers; verify against the canonical PDF.
- Cross-check DOI/PDF if citing in production docs.

## Links

- DOI: [10.1145/2463676.2463710](https://doi.org/10.1145/2463676.2463710)
- URL: https://doi.org/10.1145/2463676.2463710
