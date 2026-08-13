---
title: "PolarDB-X: An Elastic Distributed Relational Database for Cloud-Native Applications"
authors:
  - "Wei Cao"
  - "Feifei Li"
year: 2022
venue: "ICDE"
arxiv: null
doi: "10.1109/ICDE53745.2022.00259"
source: "https://doi.org/10.1109/ICDE53745.2022.00259"
topics:
  - distributed-sql
  - cloud-native
seed_rank: 743
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
  - title: "OceanBase: A 707 Million tpmC Distributed Relational Database System"
    url: "https://doi.org/10.14778/3554821.3554830"
    year: 2022
    arxiv: null
    doi: "10.14778/3554821.3554830"
    card: "741-oceanbase-a-707-million-tpmc-distributed-relational-database"
  - title: "PolarDB Serverless: A Cloud Native Database for Disaggregated Data Centers"
    url: "https://doi.org/10.1145/3448016.3457560"
    year: 2021
    arxiv: null
    doi: "10.1145/3448016.3457560"
    card: "756-polardb-serverless-a-cloud-native-database-for-disaggregated"
  - title: "GaussDB: A Cloud-Native Multi-Primary Database with Compute-Memory-Storage Disaggregation"
    url: "https://doi.org/10.1145/3626246.3653398"
    year: 2024
    arxiv: null
    doi: "10.1145/3626246.3653398"
    card: "801-gaussdb-a-cloud-native-multi-primary-database-with-compute-m"
  - title: "TiDB: A Raft-based HTAP Database"
    url: "https://doi.org/10.14778/3415478.3415535"
    year: 2020
    arxiv: null
    doi: "10.14778/3415478.3415535"
    card: "738-tidb-a-raft-based-htap-database"
---

# PolarDB-X: An Elastic Distributed Relational Database for Cloud-Native Applications

## One-sentence takeaway

PolarDB-X: SQL semantics over a geo-distributed or shared-nothing transactional core.

## Why it matters here

Geo/distributed consistency and SQL-over-shards patterns inform Anoptic persistence and multi-region ops.

## Key ideas

- Venue/year anchor: ICDE 2022.
- Disaggregate storage/compute; treat the log or object store as the system of record.
- Primary topics: distributed-sql, cloud-native.
- Read as an architecture paper: deployment assumptions matter as much as algorithms.

## Caveats

- Seed card from contemporary-databases to-1000 pass; promote to a full `summaries/` digest before relying on fine-grained claims.
- Author lists may be truncated for long industrial papers; verify against the canonical PDF.
- Cross-check DOI/PDF if citing in production docs.

## Links

- DOI: [10.1109/ICDE53745.2022.00259](https://doi.org/10.1109/ICDE53745.2022.00259)
- URL: https://doi.org/10.1109/ICDE53745.2022.00259
