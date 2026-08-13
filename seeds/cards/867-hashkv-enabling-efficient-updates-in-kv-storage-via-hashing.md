---
title: "HashKV: Enabling Efficient Updates in KV Storage via Hashing"
authors:
  - "Helen H. W. Chan"
  - "Yongkun Li"
  - "Patrick P. C. Lee"
  - "Yinlong Xu"
year: 2018
venue: "ATC"
arxiv: null
doi: null
source: "https://www.usenix.org/conference/atc18/presentation/chan"
topics:
  - lsm
  - kv-store
seed_rank: 867
seed_batch: "to1000-db-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
lineage: contemporary-databases
cites:
  - title: "Accordion: Better Memory Organization for LSM Key-Value Stores"
    url: "https://doi.org/10.14778/3236187.3236210"
    year: 2018
    arxiv: null
    doi: "10.14778/3236187.3236210"
    card: "778-accordion-better-memory-organization-for-lsm-key-value-store"
  - title: "Dostoevsky: Better Space-Time Trade-Offs for LSM-Tree Based Key-Value Stores via Adaptive Removal of Superfluous Merging"
    url: "https://doi.org/10.1145/3183713.3196927"
    year: 2018
    arxiv: null
    doi: "10.1145/3183713.3196927"
    card: "797-dostoevsky-better-space-time-trade-offs-for-lsm-tree-based-k"
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

# HashKV: Enabling Efficient Updates in KV Storage via Hashing

## One-sentence takeaway

HashKV: Log-structured merge design for write-optimized persistent key-value storage.

## Why it matters here

Modern storage-engine and index design feeds GRID COMMAND / Broadside local state and telemetry stores.

## Key ideas

- Venue/year anchor: ATC 2018.
- Compaction / merge policy dominates write amp, read amp, and tail latency.
- Primary topics: lsm, kv-store.
- Read as an architecture paper: deployment assumptions matter as much as algorithms.

## Caveats

- Seed card from contemporary-databases to-1000 pass; promote to a full `summaries/` digest before relying on fine-grained claims.
- Author lists may be truncated for long industrial papers; verify against the canonical PDF.
- Cross-check DOI/PDF if citing in production docs.

## Links

- URL: https://www.usenix.org/conference/atc18/presentation/chan
