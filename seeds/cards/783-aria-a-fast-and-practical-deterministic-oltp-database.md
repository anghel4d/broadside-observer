---
title: "Aria: A Fast and Practical Deterministic OLTP Database"
authors:
  - "Yi Lu"
  - "Xiangyao Yu"
  - "Lei Cao"
  - "Samuel Madden"
year: 2020
venue: "VLDB"
arxiv: null
doi: "10.14778/3407790.3407808"
source: "https://doi.org/10.14778/3407790.3407808"
topics:
  - deterministic-txns
seed_rank: 783
seed_batch: "to1000-db-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
lineage: contemporary-databases
cites:
  - title: "Bohm: Durable and Scalable Multiversioning for Main Memory Databases"
    url: "https://doi.org/10.1145/2588555.2610492"
    year: 2014
    arxiv: null
    doi: "10.1145/2588555.2610492"
    card: "799-bohm-durable-and-scalable-multiversioning-for-main-memory-da"
  - title: "Calvin: Fast Distributed Transactions for Partitioned Database Systems"
    url: "https://doi.org/10.1145/2213836.2213838"
    year: 2012
    arxiv: null
    doi: "10.1145/2213836.2213838"
    card: "772-calvin-fast-distributed-transactions-for-partitioned-databas"
  - title: "TiDB: A Raft-based HTAP Database"
    url: "https://doi.org/10.14778/3415478.3415535"
    year: 2020
    arxiv: null
    doi: "10.14778/3415478.3415535"
    card: "738-tidb-a-raft-based-htap-database"
---

# Aria: A Fast and Practical Deterministic OLTP Database

## One-sentence takeaway

Aria: Deterministic scheduling to simplify distributed commit and replication.

## Why it matters here

Concurrency-control and HTAP isolation choices matter for mixed interactive + analytic game/sim workloads.

## Key ideas

- Venue/year anchor: VLDB 2020.
- Deterministic ordering turns distributed commit into agreement on inputs, not locks.
- Primary topics: deterministic-txns.
- Read as an architecture paper: deployment assumptions matter as much as algorithms.

## Caveats

- Seed card from contemporary-databases to-1000 pass; promote to a full `summaries/` digest before relying on fine-grained claims.
- Author lists may be truncated for long industrial papers; verify against the canonical PDF.
- Cross-check DOI/PDF if citing in production docs.

## Links

- DOI: [10.14778/3407790.3407808](https://doi.org/10.14778/3407790.3407808)
- URL: https://doi.org/10.14778/3407790.3407808
