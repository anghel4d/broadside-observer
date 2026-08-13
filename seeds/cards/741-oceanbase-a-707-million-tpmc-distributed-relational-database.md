---
title: "OceanBase: A 707 Million tpmC Distributed Relational Database System"
authors:
  - "Zhenkun Yang"
  - "Chuanhui Yang"
  - "Fusheng Han"
  - "Mingqiang Zhuang"
  - "Bing Yang"
  - "Zhifeng Yang"
year: 2022
venue: "VLDB"
arxiv: null
doi: "10.14778/3554821.3554830"
source: "https://doi.org/10.14778/3554821.3554830"
topics:
  - distributed-sql
  - htap
seed_rank: 741
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
  - title: "PolarDB-X: An Elastic Distributed Relational Database for Cloud-Native Applications"
    url: "https://doi.org/10.1109/ICDE53745.2022.00259"
    year: 2022
    arxiv: null
    doi: "10.1109/ICDE53745.2022.00259"
    card: "743-polardb-x-an-elastic-distributed-relational-database-for-clo"
  - title: "AnalyticDB-V: A Hybrid Analytical Engine Towards Query Fusion for Structured and Unstructured Data"
    url: "https://doi.org/10.14778/3415478.3415545"
    year: 2020
    arxiv: null
    doi: "10.14778/3415478.3415545"
    card: "739-analyticdb-v-a-hybrid-analytical-engine-towards-query-fusion"
  - title: "TiDB: A Raft-based HTAP Database"
    url: "https://doi.org/10.14778/3415478.3415535"
    year: 2020
    arxiv: null
    doi: "10.14778/3415478.3415535"
    card: "738-tidb-a-raft-based-htap-database"
  - title: "CockroachDB: The Resilient Geo-Distributed SQL Database"
    url: "https://doi.org/10.1145/3318464.3386134"
    year: 2020
    arxiv: null
    doi: "10.1145/3318464.3386134"
    card: "757-cockroachdb-the-resilient-geo-distributed-sql-database"
---

# OceanBase: A 707 Million tpmC Distributed Relational Database System

## One-sentence takeaway

OceanBase: SQL semantics over a geo-distributed or shared-nothing transactional core.

## Why it matters here

Geo/distributed consistency and SQL-over-shards patterns inform Anoptic persistence and multi-region ops. Concurrency-control and HTAP isolation choices matter for mixed interactive + analytic game/sim workloads.

## Key ideas

- Venue/year anchor: VLDB 2022.
- Isolate or co-design OLTP and OLAP engines so scans do not wreck latency SLOs.
- Primary topics: distributed-sql, htap.
- Read as an architecture paper: deployment assumptions matter as much as algorithms.

## Caveats

- Seed card from contemporary-databases to-1000 pass; promote to a full `summaries/` digest before relying on fine-grained claims.
- Author lists may be truncated for long industrial papers; verify against the canonical PDF.
- Cross-check DOI/PDF if citing in production docs.

## Links

- DOI: [10.14778/3554821.3554830](https://doi.org/10.14778/3554821.3554830)
- URL: https://doi.org/10.14778/3554821.3554830
