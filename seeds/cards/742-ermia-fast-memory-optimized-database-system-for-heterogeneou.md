---
title: "ERMIA: Fast Memory-Optimized Database System for Heterogeneous Workloads"
authors:
  - "Kangnyeon Kim"
  - "Tianzheng Wang"
  - "Ryan Johnson"
  - "Ippokratis Pandis"
year: 2016
venue: "SIGMOD"
arxiv: null
doi: "10.1145/2882903.2882905"
source: "https://doi.org/10.1145/2882903.2882905"
topics:
  - mvcc
  - htap
seed_rank: 742
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
  - title: "Data Blocks: Hybrid OLTP and OLAP on Compressed Storage using both Vectorization and Compilation"
    url: "https://doi.org/10.1145/2882903.2882925"
    year: 2016
    arxiv: null
    doi: "10.1145/2882903.2882925"
    card: "771-data-blocks-hybrid-oltp-and-olap-on-compressed-storage-using"
  - title: "Rethinking Serializable Multiversion Concurrency Control"
    url: "https://doi.org/10.14778/2752939.2752940"
    year: 2015
    arxiv: null
    doi: "10.14778/2752939.2752940"
    card: "798-rethinking-serializable-multiversion-concurrency-control"
  - title: "An Empirical Evaluation of In-Memory Multi-Version Concurrency Control"
    url: "https://doi.org/10.14778/3055540.3055553"
    year: 2017
    arxiv: null
    doi: "10.14778/3055540.3055553"
    card: "780-an-empirical-evaluation-of-in-memory-multi-version-concurren"
  - title: "BatchDB: Efficient Isolated Execution of Hybrid OLTP+OLAP Workloads for Interactive Applications"
    url: "https://doi.org/10.1145/3035918.3035959"
    year: 2017
    arxiv: null
    doi: "10.1145/3035918.3035959"
    card: "786-batchdb-efficient-isolated-execution-of-hybrid-oltp-olap-wor"
---

# ERMIA: Fast Memory-Optimized Database System for Heterogeneous Workloads

## One-sentence takeaway

ERMIA: Multi-version concurrency for readers/writers without blocking reads.

## Why it matters here

Concurrency-control and HTAP isolation choices matter for mixed interactive + analytic game/sim workloads.

## Key ideas

- Venue/year anchor: SIGMOD 2016.
- Isolate or co-design OLTP and OLAP engines so scans do not wreck latency SLOs.
- Versions enable non-blocking reads; anomaly avoidance needs careful commit protocol.
- Read as an architecture paper: deployment assumptions matter as much as algorithms.

## Caveats

- Seed card from contemporary-databases to-1000 pass; promote to a full `summaries/` digest before relying on fine-grained claims.
- Author lists may be truncated for long industrial papers; verify against the canonical PDF.
- Cross-check DOI/PDF if citing in production docs.

## Links

- DOI: [10.1145/2882903.2882905](https://doi.org/10.1145/2882903.2882905)
- URL: https://doi.org/10.1145/2882903.2882905
