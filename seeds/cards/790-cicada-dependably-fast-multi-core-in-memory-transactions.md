---
title: "Cicada: Dependably Fast Multi-Core In-Memory Transactions"
authors:
  - "Hyeontaek Lim"
  - "Michael Kaminsky"
  - "David G. Andersen"
year: 2017
venue: "SIGMOD"
arxiv: null
doi: "10.1145/3035918.3064015"
source: "https://doi.org/10.1145/3035918.3064015"
topics:
  - transactions
  - mvcc
  - main-memory
seed_rank: 790
seed_batch: "to1000-db-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
lineage: contemporary-databases
cites:
  - title: "An Empirical Evaluation of In-Memory Multi-Version Concurrency Control"
    url: "https://doi.org/10.14778/3055540.3055553"
    year: 2017
    arxiv: null
    doi: "10.14778/3055540.3055553"
    card: "780-an-empirical-evaluation-of-in-memory-multi-version-concurren"
  - title: "ERMIA: Fast Memory-Optimized Database System for Heterogeneous Workloads"
    url: "https://doi.org/10.1145/2882903.2882905"
    year: 2016
    arxiv: null
    doi: "10.1145/2882903.2882905"
    card: "742-ermia-fast-memory-optimized-database-system-for-heterogeneou"
  - title: "LiveGraph: A Transactional Graph Storage System with Purely Sequential Adjacency List Scans"
    url: "https://doi.org/10.14778/3389133.3389146"
    year: 2020
    arxiv: null
    doi: "10.14778/3389133.3389146"
    card: "823-livegraph-a-transactional-graph-storage-system-with-purely-s"
  - title: "FoundationDB: A Distributed Unbundled Transactional Key Value Store"
    url: "https://doi.org/10.1145/3448016.3457559"
    year: 2021
    arxiv: null
    doi: "10.1145/3448016.3457559"
    card: "816-foundationdb-a-distributed-unbundled-transactional-key-value"
---

# Cicada: Dependably Fast Multi-Core In-Memory Transactions

## One-sentence takeaway

Cicada: Multi-version concurrency for readers/writers without blocking reads.

## Why it matters here

Concurrency-control and HTAP isolation choices matter for mixed interactive + analytic game/sim workloads.

## Key ideas

- Venue/year anchor: SIGMOD 2017.
- Versions enable non-blocking reads; anomaly avoidance needs careful commit protocol.
- Primary topics: transactions, mvcc, main-memory.
- Read as an architecture paper: deployment assumptions matter as much as algorithms.

## Caveats

- Seed card from contemporary-databases to-1000 pass; promote to a full `summaries/` digest before relying on fine-grained claims.
- Author lists may be truncated for long industrial papers; verify against the canonical PDF.
- Cross-check DOI/PDF if citing in production docs.

## Links

- DOI: [10.1145/3035918.3064015](https://doi.org/10.1145/3035918.3064015)
- URL: https://doi.org/10.1145/3035918.3064015
