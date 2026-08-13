---
title: "bLSM: A General Purpose Log Structured Merge Tree"
authors:
  - "Russell Sears"
  - "Raghu Ramakrishnan"
year: 2012
venue: "SIGMOD"
arxiv: null
doi: "10.1145/2213836.2213862"
source: "https://doi.org/10.1145/2213836.2213862"
topics:
  - lsm
  - indexing
seed_rank: 857
seed_batch: "to1000-db-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
lineage: contemporary-databases
cites:
  - title: "LSM-trie: An LSM-tree-based Ultra-Large Key-Value Store for Small Data Items"
    url: "https://www.usenix.org/conference/atc15/technical-session/presentation/wu"
    year: 2015
    arxiv: null
    doi: null
    card: "869-lsm-trie-an-lsm-tree-based-ultra-large-key-value-store-for-s"
  - title: "FPTree: A Hybrid SCM-DRAM Persistent and Concurrent B-Tree for Storage-Class Memory"
    url: "https://doi.org/10.1145/2882903.2915251"
    year: 2016
    arxiv: null
    doi: "10.1145/2882903.2915251"
    card: "834-fptree-a-hybrid-scm-dram-persistent-and-concurrent-b-tree-fo"
  - title: "WiscKey: Separating Keys from Values in SSD-conscious Storage"
    url: "https://www.usenix.org/conference/fast16/technical-sessions/presentation/lu"
    year: 2016
    arxiv: null
    doi: null
    card: "868-wisckey-separating-keys-from-values-in-ssd-conscious-storage"
  - title: "PebblesDB: Building Key-Value Stores using Fragmented Log-Structured Merge Trees"
    url: "https://doi.org/10.1145/3132747.3132765"
    year: 2017
    arxiv: null
    doi: "10.1145/3132747.3132765"
    card: "787-pebblesdb-building-key-value-stores-using-fragmented-log-str"
---

# bLSM: A General Purpose Log Structured Merge Tree

## One-sentence takeaway

bLSM: Log-structured merge design for write-optimized persistent key-value storage.

## Why it matters here

Modern storage-engine and index design feeds GRID COMMAND / Broadside local state and telemetry stores.

## Key ideas

- Venue/year anchor: SIGMOD 2012.
- Compaction / merge policy dominates write amp, read amp, and tail latency.
- Primary topics: lsm, indexing.
- Read as an architecture paper: deployment assumptions matter as much as algorithms.

## Caveats

- Seed card from contemporary-databases to-1000 pass; promote to a full `summaries/` digest before relying on fine-grained claims.
- Author lists may be truncated for long industrial papers; verify against the canonical PDF.
- Cross-check DOI/PDF if citing in production docs.

## Links

- DOI: [10.1145/2213836.2213862](https://doi.org/10.1145/2213836.2213862)
- URL: https://doi.org/10.1145/2213836.2213862
