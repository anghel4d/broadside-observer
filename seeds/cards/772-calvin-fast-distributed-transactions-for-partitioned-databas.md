---
title: "Calvin: Fast Distributed Transactions for Partitioned Database Systems"
authors:
  - "Alexander Thomson"
  - "Thaddeus Diamond"
  - "Shu-Chun Weng"
  - "Kun Ren"
  - "Philip Shao"
  - "Daniel J. Abadi"
year: 2012
venue: "SIGMOD"
arxiv: null
doi: "10.1145/2213836.2213838"
source: "https://doi.org/10.1145/2213836.2213838"
topics:
  - deterministic-txns
  - distributed-db
seed_rank: 772
seed_batch: "to1000-db-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
lineage: contemporary-databases
cites:
  - title: "Bigtable: A Distributed Storage System for Structured Data"
    url: "https://doi.org/10.1145/1365815.1365816"
    year: 2008
    arxiv: null
    doi: "10.1145/1365815.1365816"
    card: "874-bigtable-a-distributed-storage-system-for-structured-data"
  - title: "PNUTS: Yahoo!'s Hosted Data Serving Platform"
    url: "https://doi.org/10.14778/1454159.1454167"
    year: 2008
    arxiv: null
    doi: "10.14778/1454159.1454167"
    card: "875-pnuts-yahoo-s-hosted-data-serving-platform"
  - title: "Spanner: Google's Globally-Distributed Database"
    url: "https://doi.org/10.1145/2491245"
    year: 2013
    arxiv: null
    doi: "10.1145/2491245"
    card: "815-spanner-google-s-globally-distributed-database"
  - title: "Bohm: Durable and Scalable Multiversioning for Main Memory Databases"
    url: "https://doi.org/10.1145/2588555.2610492"
    year: 2014
    arxiv: null
    doi: "10.1145/2588555.2610492"
    card: "799-bohm-durable-and-scalable-multiversioning-for-main-memory-da"
---

# Calvin: Fast Distributed Transactions for Partitioned Database Systems

## One-sentence takeaway

Calvin: Deterministic scheduling to simplify distributed commit and replication.

## Why it matters here

Geo/distributed consistency and SQL-over-shards patterns inform Anoptic persistence and multi-region ops. Concurrency-control and HTAP isolation choices matter for mixed interactive + analytic game/sim workloads.

## Key ideas

- Venue/year anchor: SIGMOD 2012.
- Deterministic ordering turns distributed commit into agreement on inputs, not locks.
- Primary topics: deterministic-txns, distributed-db.
- Read as an architecture paper: deployment assumptions matter as much as algorithms.

## Caveats

- Seed card from contemporary-databases to-1000 pass; promote to a full `summaries/` digest before relying on fine-grained claims.
- Author lists may be truncated for long industrial papers; verify against the canonical PDF.
- Cross-check DOI/PDF if citing in production docs.

## Links

- DOI: [10.1145/2213836.2213838](https://doi.org/10.1145/2213836.2213838)
- URL: https://doi.org/10.1145/2213836.2213838
