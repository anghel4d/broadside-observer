---
title: "Hybrid Transactional/Analytical Processing: A Survey"
authors:
  - "Fatma Ozcan"
  - "Yuanyuan Tian"
  - "Pinar Tozun"
year: 2017
venue: "SIGMOD"
arxiv: null
doi: "10.1145/3035918.3054784"
source: "https://doi.org/10.1145/3035918.3054784"
topics:
  - htap
  - survey
seed_rank: 791
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
  - title: "BatchDB: Efficient Isolated Execution of Hybrid OLTP+OLAP Workloads for Interactive Applications"
    url: "https://doi.org/10.1145/3035918.3035959"
    year: 2017
    arxiv: null
    doi: "10.1145/3035918.3035959"
    card: "786-batchdb-efficient-isolated-execution-of-hybrid-oltp-olap-wor"
  - title: "Data Blocks: Hybrid OLTP and OLAP on Compressed Storage using both Vectorization and Compilation"
    url: "https://doi.org/10.1145/2882903.2882925"
    year: 2016
    arxiv: null
    doi: "10.1145/2882903.2882925"
    card: "771-data-blocks-hybrid-oltp-and-olap-on-compressed-storage-using"
  - title: "Hyrise Re-engineered: An Extensible Database System for Research in Relational In-Memory Data Management"
    url: "https://doi.org/10.5441/002/edbt.2019.28"
    year: 2019
    arxiv: null
    doi: "10.5441/002/edbt.2019.28"
    card: "768-hyrise-re-engineered-an-extensible-database-system-for-resea"
  - title: "Procella: Unifying Serving and Analytical Data at YouTube"
    url: "https://doi.org/10.14778/3352063.3352121"
    year: 2019
    arxiv: null
    doi: "10.14778/3352063.3352121"
    card: "760-procella-unifying-serving-and-analytical-data-at-youtube"
---

# Hybrid Transactional/Analytical Processing: A Survey

## One-sentence takeaway

Hybrid Transactional/Analytical Processing: Hybrid transactional and analytical processing in one system.

## Why it matters here

Concurrency-control and HTAP isolation choices matter for mixed interactive + analytic game/sim workloads.

## Key ideas

- Venue/year anchor: SIGMOD 2017.
- Isolate or co-design OLTP and OLAP engines so scans do not wreck latency SLOs.
- Primary topics: htap, survey.
- Read as an architecture paper: deployment assumptions matter as much as algorithms.

## Caveats

- Seed card from contemporary-databases to-1000 pass; promote to a full `summaries/` digest before relying on fine-grained claims.
- Author lists may be truncated for long industrial papers; verify against the canonical PDF.
- Cross-check DOI/PDF if citing in production docs.

## Links

- DOI: [10.1145/3035918.3054784](https://doi.org/10.1145/3035918.3054784)
- URL: https://doi.org/10.1145/3035918.3054784
