---
title: "Constructing and Analyzing the LSM Compaction Design Space"
authors:
  - "Subhadeep Sarkar"
  - "Dimitris Staratzis"
  - "Zichen Zhu"
  - "Manos Athanassoulis"
year: 2021
venue: "VLDB"
arxiv: null
doi: "10.14778/3476249.3476274"
source: "https://doi.org/10.14778/3476249.3476274"
topics:
  - lsm
  - compaction
seed_rank: 781
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
  - title: "From WiscKey to Bourbon: A Learned Index for Log-Structured Merge Trees"
    url: "https://www.usenix.org/conference/osdi20/presentation/dai"
    year: 2020
    arxiv: null
    doi: null
    card: "803-from-wisckey-to-bourbon-a-learned-index-for-log-structured-m"
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

# Constructing and Analyzing the LSM Compaction Design Space

## One-sentence takeaway

Constructing and Analyzing the LSM Compaction Design Space: Log-structured merge design for write-optimized persistent key-value storage.

## Why it matters here

Modern storage-engine and index design feeds GRID COMMAND / Broadside local state and telemetry stores.

## Key ideas

- Venue/year anchor: VLDB 2021.
- Compaction / merge policy dominates write amp, read amp, and tail latency.
- Primary topics: lsm, compaction.
- Read as an architecture paper: deployment assumptions matter as much as algorithms.

## Caveats

- Seed card from contemporary-databases to-1000 pass; promote to a full `summaries/` digest before relying on fine-grained claims.
- Author lists may be truncated for long industrial papers; verify against the canonical PDF.
- Cross-check DOI/PDF if citing in production docs.

## Links

- DOI: [10.14778/3476249.3476274](https://doi.org/10.14778/3476249.3476274)
- URL: https://doi.org/10.14778/3476249.3476274
