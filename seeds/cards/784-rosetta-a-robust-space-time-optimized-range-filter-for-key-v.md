---
title: "Rosetta: A Robust Space-Time Optimized Range Filter for Key-Value Stores"
authors:
  - "Siqiang Luo"
  - "Subhadeep Sarkar"
  - "Wenshao Zhong"
  - "Manos Athanassoulis"
year: 2020
venue: "SIGMOD"
arxiv: null
doi: "10.1145/3318464.3389731"
source: "https://doi.org/10.1145/3318464.3389731"
topics:
  - filters
  - lsm
seed_rank: 784
seed_batch: "to1000-db-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
lineage: contemporary-databases
cites:
  - title: "From WiscKey to Bourbon: A Learned Index for Log-Structured Merge Trees"
    url: "https://www.usenix.org/conference/osdi20/presentation/dai"
    year: 2020
    arxiv: null
    doi: null
    card: "803-from-wisckey-to-bourbon-a-learned-index-for-log-structured-m"
  - title: "LSM-based Storage Techniques: A Survey"
    url: "https://doi.org/10.1007/s00778-019-00555-y"
    year: 2020
    arxiv: null
    doi: "10.1007/s00778-019-00555-y"
    card: "794-lsm-based-storage-techniques-a-survey"
  - title: "Constructing and Analyzing the LSM Compaction Design Space"
    url: "https://doi.org/10.14778/3476249.3476274"
    year: 2021
    arxiv: null
    doi: "10.14778/3476249.3476274"
    card: "781-constructing-and-analyzing-the-lsm-compaction-design-space"
  - title: "RocksDB: Evolution of Development Priorities in a Key-Value Store Serving Large-scale Applications"
    url: "https://doi.org/10.1145/3483840"
    year: 2021
    arxiv: null
    doi: "10.1145/3483840"
    card: "782-rocksdb-evolution-of-development-priorities-in-a-key-value-s"
---

# Rosetta: A Robust Space-Time Optimized Range Filter for Key-Value Stores

## One-sentence takeaway

Rosetta: Log-structured merge design for write-optimized persistent key-value storage.

## Why it matters here

Modern storage-engine and index design feeds GRID COMMAND / Broadside local state and telemetry stores.

## Key ideas

- Venue/year anchor: SIGMOD 2020.
- Compaction / merge policy dominates write amp, read amp, and tail latency.
- Primary topics: filters, lsm.
- Read as an architecture paper: deployment assumptions matter as much as algorithms.

## Caveats

- Seed card from contemporary-databases to-1000 pass; promote to a full `summaries/` digest before relying on fine-grained claims.
- Author lists may be truncated for long industrial papers; verify against the canonical PDF.
- Cross-check DOI/PDF if citing in production docs.

## Links

- DOI: [10.1145/3318464.3389731](https://doi.org/10.1145/3318464.3389731)
- URL: https://doi.org/10.1145/3318464.3389731
