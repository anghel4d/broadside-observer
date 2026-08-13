---
title: "Photon: A Fast Query Engine for Lakehouse Systems"
authors:
  - "Alexander Behm"
  - "Shoumik Palkar"
  - "Umar Farooq Minhas"
  - "Reynold Xin"
  - "Mosha Pasumansky"
year: 2022
venue: "SIGMOD"
arxiv: null
doi: "10.1145/3514221.3526054"
source: "https://doi.org/10.1145/3514221.3526054"
topics:
  - lakehouse
  - query-engine
  - vectorized
seed_rank: 775
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
  - title: "Velox: Meta's Unified Execution Engine"
    url: "https://doi.org/10.14778/3554821.3554874"
    year: 2022
    arxiv: null
    doi: "10.14778/3554821.3554874"
    card: "744-velox-meta-s-unified-execution-engine"
  - title: "Lakehouse: A New Generation of Open Platforms that Unify Data Warehousing and Advanced Analytics"
    url: "https://www.cidrdb.org/cidr2021/papers/cidr2021_paper17.pdf"
    year: 2021
    arxiv: null
    doi: null
    card: "866-lakehouse-a-new-generation-of-open-platforms-that-unify-data"
  - title: "Delta Lake: High-Performance ACID Table Storage over Cloud Object Stores"
    url: "https://doi.org/10.14778/3415478.3415560"
    year: 2020
    arxiv: null
    doi: "10.14778/3415478.3415560"
    card: "765-delta-lake-high-performance-acid-table-storage-over-cloud-ob"
  - title: "Starling: A Scalable Query Engine on Cloud Functions"
    url: "https://doi.org/10.1145/3318464.3380609"
    year: 2020
    arxiv: null
    doi: "10.1145/3318464.3380609"
    card: "839-starling-a-scalable-query-engine-on-cloud-functions"
---

# Photon: A Fast Query Engine for Lakehouse Systems

## One-sentence takeaway

Photon: Unifies warehouse ACID tables with open object-storage formats.

## Why it matters here

Vectorized/compiled execution is the performance model for ano batched interpreters and analytics paths. Open table formats and object-storage analytics shape archival / lake-style Broadside corpora.

## Key ideas

- Venue/year anchor: SIGMOD 2022.
- Operate on cache-resident vectors/columns to cut interpretation overhead and enable SIMD.
- ACID table metadata over Parquet/ORC/Iceberg/Delta on object storage.
- Read as an architecture paper: deployment assumptions matter as much as algorithms.

## Caveats

- Seed card from contemporary-databases to-1000 pass; promote to a full `summaries/` digest before relying on fine-grained claims.
- Author lists may be truncated for long industrial papers; verify against the canonical PDF.
- Cross-check DOI/PDF if citing in production docs.

## Links

- DOI: [10.1145/3514221.3526054](https://doi.org/10.1145/3514221.3526054)
- URL: https://doi.org/10.1145/3514221.3526054
