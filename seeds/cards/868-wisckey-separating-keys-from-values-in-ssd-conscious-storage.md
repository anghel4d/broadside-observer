---
title: "WiscKey: Separating Keys from Values in SSD-conscious Storage"
authors:
  - "Lanyue Lu"
  - "Thanumalayan Sankaranarayana Pillai"
  - "Andrea C. Arpaci-Dusseau"
  - "Remzi H. Arpaci-Dusseau"
year: 2016
venue: "FAST"
arxiv: null
doi: null
source: "https://www.usenix.org/conference/fast16/technical-sessions/presentation/lu"
topics:
  - lsm
  - ssd
seed_rank: 868
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
  - title: "bLSM: A General Purpose Log Structured Merge Tree"
    url: "https://doi.org/10.1145/2213836.2213862"
    year: 2012
    arxiv: null
    doi: "10.1145/2213836.2213862"
    card: "857-blsm-a-general-purpose-log-structured-merge-tree"
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

# WiscKey: Separating Keys from Values in SSD-conscious Storage

## One-sentence takeaway

WiscKey: Log-structured merge design for write-optimized persistent key-value storage.

## Why it matters here

Modern storage-engine and index design feeds GRID COMMAND / Broadside local state and telemetry stores.

## Key ideas

- Venue/year anchor: FAST 2016.
- Compaction / merge policy dominates write amp, read amp, and tail latency.
- Primary topics: lsm, ssd.
- Read as an architecture paper: deployment assumptions matter as much as algorithms.

## Caveats

- Seed card from contemporary-databases to-1000 pass; promote to a full `summaries/` digest before relying on fine-grained claims.
- Author lists may be truncated for long industrial papers; verify against the canonical PDF.
- Cross-check DOI/PDF if citing in production docs.

## Links

- URL: https://www.usenix.org/conference/fast16/technical-sessions/presentation/lu
