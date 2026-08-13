---
title: "LSM-trie: An LSM-tree-based Ultra-Large Key-Value Store for Small Data Items"
authors:
  - "Xingbo Wu"
  - "Yuehai Xu"
  - "Zili Shao"
  - "Song Jiang"
year: 2015
venue: "ATC"
arxiv: null
doi: null
source: "https://www.usenix.org/conference/atc15/technical-session/presentation/wu"
topics:
  - lsm
seed_rank: 869
seed_batch: "to1000-db-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
lineage: contemporary-databases
cites:
  - title: "bLSM: A General Purpose Log Structured Merge Tree"
    url: "https://doi.org/10.1145/2213836.2213862"
    year: 2012
    arxiv: null
    doi: "10.1145/2213836.2213862"
    card: "857-blsm-a-general-purpose-log-structured-merge-tree"
  - title: "WiscKey: Separating Keys from Values in SSD-conscious Storage"
    url: "https://www.usenix.org/conference/fast16/technical-sessions/presentation/lu"
    year: 2016
    arxiv: null
    doi: null
    card: "868-wisckey-separating-keys-from-values-in-ssd-conscious-storage"
  - title: "Monkey: Optimal Navigable Key-Value Store"
    url: "https://doi.org/10.1145/3035918.3064054"
    year: 2017
    arxiv: null
    doi: "10.1145/3035918.3064054"
    card: "792-monkey-optimal-navigable-key-value-store"
  - title: "PebblesDB: Building Key-Value Stores using Fragmented Log-Structured Merge Trees"
    url: "https://doi.org/10.1145/3132747.3132765"
    year: 2017
    arxiv: null
    doi: "10.1145/3132747.3132765"
    card: "787-pebblesdb-building-key-value-stores-using-fragmented-log-str"
---

# LSM-trie: An LSM-tree-based Ultra-Large Key-Value Store for Small Data Items

## One-sentence takeaway

LSM-trie: Log-structured merge design for write-optimized persistent key-value storage.

## Why it matters here

Modern storage-engine and index design feeds GRID COMMAND / Broadside local state and telemetry stores.

## Key ideas

- Venue/year anchor: ATC 2015.
- Compaction / merge policy dominates write amp, read amp, and tail latency.
- Primary topics: lsm.
- Read as an architecture paper: deployment assumptions matter as much as algorithms.

## Caveats

- Seed card from contemporary-databases to-1000 pass; promote to a full `summaries/` digest before relying on fine-grained claims.
- Author lists may be truncated for long industrial papers; verify against the canonical PDF.
- Cross-check DOI/PDF if citing in production docs.

## Links

- URL: https://www.usenix.org/conference/atc15/technical-session/presentation/wu
