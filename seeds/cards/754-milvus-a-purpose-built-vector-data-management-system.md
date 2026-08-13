---
title: "Milvus: A Purpose-Built Vector Data Management System"
authors:
  - "Jianguo Wang"
  - "Xiaomeng Yi"
  - "Rentong Guo"
  - "Hai Jin"
  - "Peng Xu"
  - "Shengjun Li"
  - "Xiangyu Wang"
year: 2021
venue: "SIGMOD"
arxiv: null
doi: "10.1145/3448016.3457550"
source: "https://doi.org/10.1145/3448016.3457550"
topics:
  - vector-db
  - similarity-search
seed_rank: 754
seed_batch: "to1000-db-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
lineage: contemporary-databases
cites:
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
  - title: "Spanner: Becoming a SQL System"
    url: "https://doi.org/10.1145/3035918.3056103"
    year: 2017
    arxiv: null
    doi: "10.1145/3035918.3056103"
    card: "740-spanner-becoming-a-sql-system"
---

# Milvus: A Purpose-Built Vector Data Management System

## One-sentence takeaway

Milvus: Vector similarity search managed as a first-class database workload.

## Why it matters here

DB-flavored vector search is relevant for embedding retrieval beside relational state.

## Key ideas

- Venue/year anchor: SIGMOD 2021.
- ANN indexes (HNSW/DiskANN/etc.) become a storage/executor concern, not a sidecar toy.
- Primary topics: vector-db, similarity-search.
- Read as an architecture paper: deployment assumptions matter as much as algorithms.

## Caveats

- Seed card from contemporary-databases to-1000 pass; promote to a full `summaries/` digest before relying on fine-grained claims.
- Author lists may be truncated for long industrial papers; verify against the canonical PDF.
- Cross-check DOI/PDF if citing in production docs.

## Links

- DOI: [10.1145/3448016.3457550](https://doi.org/10.1145/3448016.3457550)
- URL: https://doi.org/10.1145/3448016.3457550
