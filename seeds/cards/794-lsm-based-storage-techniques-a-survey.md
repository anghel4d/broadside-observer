---
title: "LSM-based Storage Techniques: A Survey"
authors:
  - "Chen Luo"
  - "Michael J. Carey"
year: 2020
venue: "VLDB Journal"
arxiv: null
doi: "10.1007/s00778-019-00555-y"
source: "https://doi.org/10.1007/s00778-019-00555-y"
topics:
  - lsm
  - survey
seed_rank: 794
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
  - title: "MatrixKV: Reducing Write Amplification by Exploiting Multi-level Memory for LSM-tree-based KV Stores"
    url: "https://www.usenix.org/conference/atc20/presentation/yao"
    year: 2020
    arxiv: null
    doi: null
    card: "860-matrixkv-reducing-write-amplification-by-exploiting-multi-le"
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

# LSM-based Storage Techniques: A Survey

## One-sentence takeaway

LSM-based Storage Techniques: Log-structured merge design for write-optimized persistent key-value storage.

## Why it matters here

Modern storage-engine and index design feeds GRID COMMAND / Broadside local state and telemetry stores.

## Key ideas

- Venue/year anchor: VLDB Journal 2020.
- Compaction / merge policy dominates write amp, read amp, and tail latency.
- Primary topics: lsm, survey.
- Read as an architecture paper: deployment assumptions matter as much as algorithms.

## Caveats

- Seed card from contemporary-databases to-1000 pass; promote to a full `summaries/` digest before relying on fine-grained claims.
- Author lists may be truncated for long industrial papers; verify against the canonical PDF.
- Cross-check DOI/PDF if citing in production docs.

## Links

- DOI: [10.1007/s00778-019-00555-y](https://doi.org/10.1007/s00778-019-00555-y)
- URL: https://doi.org/10.1007/s00778-019-00555-y
