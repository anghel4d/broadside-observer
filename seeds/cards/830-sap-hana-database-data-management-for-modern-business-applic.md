---
title: "SAP HANA Database: Data Management for Modern Business Applications"
authors:
  - "Franz Faerber"
  - "Sang Kyun Cha"
  - "Juergen Primsch"
  - "Christof Bornhoevd"
  - "Stefan Sigg"
  - "Wolfgang Lehner"
year: 2012
venue: "SIGMOD Record"
arxiv: null
doi: "10.1145/2094114.2094126"
source: "https://doi.org/10.1145/2094114.2094126"
topics:
  - htap
  - main-memory
seed_rank: 830
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
  - title: "Data Blocks: Hybrid OLTP and OLAP on Compressed Storage using both Vectorization and Compilation"
    url: "https://doi.org/10.1145/2882903.2882925"
    year: 2016
    arxiv: null
    doi: "10.1145/2882903.2882925"
    card: "771-data-blocks-hybrid-oltp-and-olap-on-compressed-storage-using"
  - title: "ERMIA: Fast Memory-Optimized Database System for Heterogeneous Workloads"
    url: "https://doi.org/10.1145/2882903.2882905"
    year: 2016
    arxiv: null
    doi: "10.1145/2882903.2882905"
    card: "742-ermia-fast-memory-optimized-database-system-for-heterogeneou"
---

# SAP HANA Database: Data Management for Modern Business Applications

## One-sentence takeaway

SAP HANA Database: Hybrid transactional and analytical processing in one system.

## Why it matters here

Concurrency-control and HTAP isolation choices matter for mixed interactive + analytic game/sim workloads.

## Key ideas

- Venue/year anchor: SIGMOD Record 2012.
- Isolate or co-design OLTP and OLAP engines so scans do not wreck latency SLOs.
- Primary topics: htap, main-memory.
- Read as an architecture paper: deployment assumptions matter as much as algorithms.

## Caveats

- Seed card from contemporary-databases to-1000 pass; promote to a full `summaries/` digest before relying on fine-grained claims.
- Author lists may be truncated for long industrial papers; verify against the canonical PDF.
- Cross-check DOI/PDF if citing in production docs.

## Links

- DOI: [10.1145/2094114.2094126](https://doi.org/10.1145/2094114.2094126)
- URL: https://doi.org/10.1145/2094114.2094126
