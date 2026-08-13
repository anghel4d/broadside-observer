---
title: "FoundationDB: A Distributed Unbundled Transactional Key Value Store"
authors:
  - "Jingyu Zhou"
  - "Meng Xu"
  - "Alexander Shraer"
  - "Bala Namasivayam"
  - "Alex Miller"
  - "Evan Tschannen"
  - "Rusty Sears"
year: 2021
venue: "SIGMOD"
arxiv: null
doi: "10.1145/3448016.3457559"
source: "https://doi.org/10.1145/3448016.3457559"
topics:
  - kv-store
  - transactions
  - unbundled
seed_rank: 816
seed_batch: "to1000-db-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
lineage: contemporary-databases
cites:
  - title: "RocksDB: Evolution of Development Priorities in a Key-Value Store Serving Large-scale Applications"
    url: "https://doi.org/10.1145/3483840"
    year: 2021
    arxiv: null
    doi: "10.1145/3483840"
    card: "782-rocksdb-evolution-of-development-priorities-in-a-key-value-s"
  - title: "LiveGraph: A Transactional Graph Storage System with Purely Sequential Adjacency List Scans"
    url: "https://doi.org/10.14778/3389133.3389146"
    year: 2020
    arxiv: null
    doi: "10.14778/3389133.3389146"
    card: "823-livegraph-a-transactional-graph-storage-system-with-purely-s"
  - title: "Anna: A KVS for Any Scale"
    url: "https://doi.org/10.1109/TKDE.2018.2875891"
    year: 2019
    arxiv: null
    doi: "10.1109/TKDE.2018.2875891"
    card: "840-anna-a-kvs-for-any-scale"
  - title: "KVell: The Design and Implementation of a Fast Persistent Key-Value Store for Modern SSD Devices"
    url: "https://doi.org/10.1145/3341301.3359628"
    year: 2019
    arxiv: null
    doi: "10.1145/3341301.3359628"
    card: "841-kvell-the-design-and-implementation-of-a-fast-persistent-key"
---

# FoundationDB: A Distributed Unbundled Transactional Key Value Store

## One-sentence takeaway

Seminal contemporary database systems paper (2021) on kv-store, transactions, unbundled.

## Why it matters here

Modern storage-engine and index design feeds GRID COMMAND / Broadside local state and telemetry stores. Concurrency-control and HTAP isolation choices matter for mixed interactive + analytic game/sim workloads.

## Key ideas

- Venue/year anchor: SIGMOD 2021.
- Primary topics: kv-store, transactions, unbundled.
- Read as an architecture paper: deployment assumptions matter as much as algorithms.

## Caveats

- Seed card from contemporary-databases to-1000 pass; promote to a full `summaries/` digest before relying on fine-grained claims.
- Author lists may be truncated for long industrial papers; verify against the canonical PDF.
- Cross-check DOI/PDF if citing in production docs.

## Links

- DOI: [10.1145/3448016.3457559](https://doi.org/10.1145/3448016.3457559)
- URL: https://doi.org/10.1145/3448016.3457559
