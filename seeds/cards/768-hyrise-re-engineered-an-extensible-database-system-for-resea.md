---
title: "Hyrise Re-engineered: An Extensible Database System for Research in Relational In-Memory Data Management"
authors:
  - "Markus Dreseler"
  - "Jan Kossmann"
  - "Martin Boissier"
  - "Stefan Klauck"
  - "Matthias Uflacker"
  - "Hasso Plattner"
year: 2019
venue: "EDBT"
arxiv: null
doi: "10.5441/002/edbt.2019.28"
source: "https://doi.org/10.5441/002/edbt.2019.28"
topics:
  - research-db
  - htap
seed_rank: 768
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
  - title: "Procella: Unifying Serving and Analytical Data at YouTube"
    url: "https://doi.org/10.14778/3352063.3352121"
    year: 2019
    arxiv: null
    doi: "10.14778/3352063.3352121"
    card: "760-procella-unifying-serving-and-analytical-data-at-youtube"
  - title: "BatchDB: Efficient Isolated Execution of Hybrid OLTP+OLAP Workloads for Interactive Applications"
    url: "https://doi.org/10.1145/3035918.3035959"
    year: 2017
    arxiv: null
    doi: "10.1145/3035918.3035959"
    card: "786-batchdb-efficient-isolated-execution-of-hybrid-oltp-olap-wor"
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

# Hyrise Re-engineered: An Extensible Database System for Research in Relational In-Memory Data Management

## One-sentence takeaway

Hyrise Re-engineered: Hybrid transactional and analytical processing in one system.

## Why it matters here

Concurrency-control and HTAP isolation choices matter for mixed interactive + analytic game/sim workloads.

## Key ideas

- Venue/year anchor: EDBT 2019.
- Isolate or co-design OLTP and OLAP engines so scans do not wreck latency SLOs.
- Primary topics: research-db, htap.
- Read as an architecture paper: deployment assumptions matter as much as algorithms.

## Caveats

- Seed card from contemporary-databases to-1000 pass; promote to a full `summaries/` digest before relying on fine-grained claims.
- Author lists may be truncated for long industrial papers; verify against the canonical PDF.
- Cross-check DOI/PDF if citing in production docs.

## Links

- DOI: [10.5441/002/edbt.2019.28](https://doi.org/10.5441/002/edbt.2019.28)
- URL: https://doi.org/10.5441/002/edbt.2019.28
