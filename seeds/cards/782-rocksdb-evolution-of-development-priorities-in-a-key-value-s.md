---
title: "RocksDB: Evolution of Development Priorities in a Key-Value Store Serving Large-scale Applications"
authors:
  - "Siying Dong"
  - "Andrew Kryczka"
  - "Yanqin Jin"
  - "Michael Stumm"
year: 2021
venue: "ACM TOS"
arxiv: null
doi: "10.1145/3483840"
source: "https://doi.org/10.1145/3483840"
topics:
  - lsm
  - kv-store
seed_rank: 782
seed_batch: "to1000-db-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
lineage: contemporary-databases
cites:
  - title: "Constructing and Analyzing the LSM Compaction Design Space"
    url: "https://doi.org/10.14778/3476249.3476274"
    year: 2021
    arxiv: null
    doi: "10.14778/3476249.3476274"
    card: "781-constructing-and-analyzing-the-lsm-compaction-design-space"
  - title: "FoundationDB: A Distributed Unbundled Transactional Key Value Store"
    url: "https://doi.org/10.1145/3448016.3457559"
    year: 2021
    arxiv: null
    doi: "10.1145/3448016.3457559"
    card: "816-foundationdb-a-distributed-unbundled-transactional-key-value"
  - title: "Rosetta: A Robust Space-Time Optimized Range Filter for Key-Value Stores"
    url: "https://doi.org/10.1145/3318464.3389731"
    year: 2020
    arxiv: null
    doi: "10.1145/3318464.3389731"
    card: "784-rosetta-a-robust-space-time-optimized-range-filter-for-key-v"
  - title: "MyRocks: LSM-Tree Database Storage Engine Serving Facebook's Social Graph"
    url: "https://doi.org/10.14778/3415478.3415546"
    year: 2020
    arxiv: null
    doi: "10.14778/3415478.3415546"
    card: "788-myrocks-lsm-tree-database-storage-engine-serving-facebook-s-"
---

# RocksDB: Evolution of Development Priorities in a Key-Value Store Serving Large-scale Applications

## One-sentence takeaway

RocksDB: Log-structured merge design for write-optimized persistent key-value storage.

## Why it matters here

Modern storage-engine and index design feeds GRID COMMAND / Broadside local state and telemetry stores.

## Key ideas

- Venue/year anchor: ACM TOS 2021.
- Compaction / merge policy dominates write amp, read amp, and tail latency.
- Primary topics: lsm, kv-store.
- Read as an architecture paper: deployment assumptions matter as much as algorithms.

## Caveats

- Seed card from contemporary-databases to-1000 pass; promote to a full `summaries/` digest before relying on fine-grained claims.
- Author lists may be truncated for long industrial papers; verify against the canonical PDF.
- Cross-check DOI/PDF if citing in production docs.

## Links

- DOI: [10.1145/3483840](https://doi.org/10.1145/3483840)
- URL: https://doi.org/10.1145/3483840
