---
title: "Procella: Unifying Serving and Analytical Data at YouTube"
authors:
  - "Biswapesh Chattopadhyay"
  - "Priyam Dutta"
  - "Weiran Liu"
  - "Ott Tinn"
  - "Andrew McCormick"
  - "Aniket Mokashi"
  - "Hector Gonzalez"
year: 2019
venue: "VLDB"
arxiv: null
doi: "10.14778/3352063.3352121"
source: "https://doi.org/10.14778/3352063.3352121"
topics:
  - htap
  - olap
  - serving
seed_rank: 760
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
  - title: "AnalyticDB: Real-time OLAP Database System at Alibaba Cloud"
    url: "https://doi.org/10.14778/3352063.3352124"
    year: 2019
    arxiv: null
    doi: "10.14778/3352063.3352124"
    card: "807-analyticdb-real-time-olap-database-system-at-alibaba-cloud"
  - title: "Hyrise Re-engineered: An Extensible Database System for Research in Relational In-Memory Data Management"
    url: "https://doi.org/10.5441/002/edbt.2019.28"
    year: 2019
    arxiv: null
    doi: "10.5441/002/edbt.2019.28"
    card: "768-hyrise-re-engineered-an-extensible-database-system-for-resea"
  - title: "AnalyticDB-V: A Hybrid Analytical Engine Towards Query Fusion for Structured and Unstructured Data"
    url: "https://doi.org/10.14778/3415478.3415545"
    year: 2020
    arxiv: null
    doi: "10.14778/3415478.3415545"
    card: "739-analyticdb-v-a-hybrid-analytical-engine-towards-query-fusion"
  - title: "F1 Lightning: HTAP as a Service"
    url: "https://doi.org/10.14778/3415478.3415553"
    year: 2020
    arxiv: null
    doi: "10.14778/3415478.3415553"
    card: "766-f1-lightning-htap-as-a-service"
---

# Procella: Unifying Serving and Analytical Data at YouTube

## One-sentence takeaway

Procella: Hybrid transactional and analytical processing in one system.

## Why it matters here

Concurrency-control and HTAP isolation choices matter for mixed interactive + analytic game/sim workloads.

## Key ideas

- Venue/year anchor: VLDB 2019.
- Isolate or co-design OLTP and OLAP engines so scans do not wreck latency SLOs.
- Primary topics: htap, olap, serving.
- Read as an architecture paper: deployment assumptions matter as much as algorithms.

## Caveats

- Seed card from contemporary-databases to-1000 pass; promote to a full `summaries/` digest before relying on fine-grained claims.
- Author lists may be truncated for long industrial papers; verify against the canonical PDF.
- Cross-check DOI/PDF if citing in production docs.

## Links

- DOI: [10.14778/3352063.3352121](https://doi.org/10.14778/3352063.3352121)
- URL: https://doi.org/10.14778/3352063.3352121
