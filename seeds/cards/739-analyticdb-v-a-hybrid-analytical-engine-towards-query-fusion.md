---
title: "AnalyticDB-V: A Hybrid Analytical Engine Towards Query Fusion for Structured and Unstructured Data"
authors:
  - "Chuangxian Wei"
  - "Bin Wu"
  - "Sheng Wang"
  - "Renjie Lou"
  - "Chaoqun Zhan"
  - "Feifei Li"
  - "Yuanzhe Cai"
year: 2020
venue: "VLDB"
arxiv: null
doi: "10.14778/3415478.3415545"
source: "https://doi.org/10.14778/3415478.3415545"
topics:
  - vector-db
  - htap
seed_rank: 739
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
  - title: "F1 Lightning: HTAP as a Service"
    url: "https://doi.org/10.14778/3415478.3415553"
    year: 2020
    arxiv: null
    doi: "10.14778/3415478.3415553"
    card: "766-f1-lightning-htap-as-a-service"
  - title: "TiDB: A Raft-based HTAP Database"
    url: "https://doi.org/10.14778/3415478.3415535"
    year: 2020
    arxiv: null
    doi: "10.14778/3415478.3415535"
    card: "738-tidb-a-raft-based-htap-database"
  - title: "Milvus: A Purpose-Built Vector Data Management System"
    url: "https://doi.org/10.1145/3448016.3457550"
    year: 2021
    arxiv: null
    doi: "10.1145/3448016.3457550"
    card: "754-milvus-a-purpose-built-vector-data-management-system"
  - title: "OceanBase: A 707 Million tpmC Distributed Relational Database System"
    url: "https://doi.org/10.14778/3554821.3554830"
    year: 2022
    arxiv: null
    doi: "10.14778/3554821.3554830"
    card: "741-oceanbase-a-707-million-tpmc-distributed-relational-database"
---

# AnalyticDB-V: A Hybrid Analytical Engine Towards Query Fusion for Structured and Unstructured Data

## One-sentence takeaway

AnalyticDB-V: Vector similarity search managed as a first-class database workload.

## Why it matters here

Concurrency-control and HTAP isolation choices matter for mixed interactive + analytic game/sim workloads. DB-flavored vector search is relevant for embedding retrieval beside relational state.

## Key ideas

- Venue/year anchor: VLDB 2020.
- Isolate or co-design OLTP and OLAP engines so scans do not wreck latency SLOs.
- ANN indexes (HNSW/DiskANN/etc.) become a storage/executor concern, not a sidecar toy.
- Read as an architecture paper: deployment assumptions matter as much as algorithms.

## Caveats

- Seed card from contemporary-databases to-1000 pass; promote to a full `summaries/` digest before relying on fine-grained claims.
- Author lists may be truncated for long industrial papers; verify against the canonical PDF.
- Cross-check DOI/PDF if citing in production docs.

## Links

- DOI: [10.14778/3415478.3415545](https://doi.org/10.14778/3415478.3415545)
- URL: https://doi.org/10.14778/3415478.3415545
