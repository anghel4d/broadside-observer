---
title: "Data Blocks: Hybrid OLTP and OLAP on Compressed Storage using both Vectorization and Compilation"
authors:
  - "Harald Lang"
  - "Tobias Muehlbauer"
  - "Florian Funke"
  - "Peter Boncz"
  - "Thomas Neumann"
  - "Alfons Kemper"
year: 2016
venue: "SIGMOD"
arxiv: null
doi: "10.1145/2882903.2882925"
source: "https://doi.org/10.1145/2882903.2882925"
topics:
  - htap
  - compression
  - vectorized
seed_rank: 771
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
  - title: "ERMIA: Fast Memory-Optimized Database System for Heterogeneous Workloads"
    url: "https://doi.org/10.1145/2882903.2882905"
    year: 2016
    arxiv: null
    doi: "10.1145/2882903.2882905"
    card: "742-ermia-fast-memory-optimized-database-system-for-heterogeneou"
  - title: "SAP HANA Database: Data Management for Modern Business Applications"
    url: "https://doi.org/10.1145/2094114.2094126"
    year: 2012
    arxiv: null
    doi: "10.1145/2094114.2094126"
    card: "830-sap-hana-database-data-management-for-modern-business-applic"
  - title: "BatchDB: Efficient Isolated Execution of Hybrid OLTP+OLAP Workloads for Interactive Applications"
    url: "https://doi.org/10.1145/3035918.3035959"
    year: 2017
    arxiv: null
    doi: "10.1145/3035918.3035959"
    card: "786-batchdb-efficient-isolated-execution-of-hybrid-oltp-olap-wor"
  - title: "Hybrid Transactional/Analytical Processing: A Survey"
    url: "https://doi.org/10.1145/3035918.3054784"
    year: 2017
    arxiv: null
    doi: "10.1145/3035918.3054784"
    card: "791-hybrid-transactional-analytical-processing-a-survey"
---

# Data Blocks: Hybrid OLTP and OLAP on Compressed Storage using both Vectorization and Compilation

## One-sentence takeaway

Data Blocks: Hybrid transactional and analytical processing in one system.

## Why it matters here

Vectorized/compiled execution is the performance model for ano batched interpreters and analytics paths. Concurrency-control and HTAP isolation choices matter for mixed interactive + analytic game/sim workloads.

## Key ideas

- Venue/year anchor: SIGMOD 2016.
- Operate on cache-resident vectors/columns to cut interpretation overhead and enable SIMD.
- Isolate or co-design OLTP and OLAP engines so scans do not wreck latency SLOs.
- Read as an architecture paper: deployment assumptions matter as much as algorithms.

## Caveats

- Seed card from contemporary-databases to-1000 pass; promote to a full `summaries/` digest before relying on fine-grained claims.
- Author lists may be truncated for long industrial papers; verify against the canonical PDF.
- Cross-check DOI/PDF if citing in production docs.

## Links

- DOI: [10.1145/2882903.2882925](https://doi.org/10.1145/2882903.2882925)
- URL: https://doi.org/10.1145/2882903.2882925
