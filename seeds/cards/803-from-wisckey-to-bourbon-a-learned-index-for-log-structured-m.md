---
title: "From WiscKey to Bourbon: A Learned Index for Log-Structured Merge Trees"
authors:
  - "Yifan Dai"
  - "Yien Xu"
  - "Aishwarya Ganesan"
  - "Ramnatthan Alagappan"
  - "Brian Kroth"
  - "Andrea Arpaci-Dusseau"
  - "Remzi Arpaci-Dusseau"
year: 2020
venue: "OSDI"
arxiv: null
doi: null
source: "https://www.usenix.org/conference/osdi20/presentation/dai"
topics:
  - learned-indexes
  - lsm
seed_rank: 803
seed_batch: "to1000-db-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
lineage: contemporary-databases
cites:
  - title: "ALEX: An Updatable Adaptive Learned Index"
    url: "https://doi.org/10.1145/3318464.3389711"
    year: 2020
    arxiv: null
    doi: "10.1145/3318464.3389711"
    card: "746-alex-an-updatable-adaptive-learned-index"
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

# From WiscKey to Bourbon: A Learned Index for Log-Structured Merge Trees

## One-sentence takeaway

From WiscKey to Bourbon: Replaces or accelerates classic indexes with learned models of key distributions.

## Why it matters here

Modern storage-engine and index design feeds GRID COMMAND / Broadside local state and telemetry stores. Learned components hint where Broadside can specialize layouts/plans from observed workloads.

## Key ideas

- Venue/year anchor: OSDI 2020.
- Compaction / merge policy dominates write amp, read amp, and tail latency.
- Models predict key positions; fallback structures preserve correctness under updates.
- Read as an architecture paper: deployment assumptions matter as much as algorithms.

## Caveats

- Seed card from contemporary-databases to-1000 pass; promote to a full `summaries/` digest before relying on fine-grained claims.
- Author lists may be truncated for long industrial papers; verify against the canonical PDF.
- Cross-check DOI/PDF if citing in production docs.

## Links

- URL: https://www.usenix.org/conference/osdi20/presentation/dai
