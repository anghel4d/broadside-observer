---
title: "TRIAD: Creating Synergies Between Memory, Disk and Log in Log Structured Key-Value Stores"
authors:
  - "Oana Balmau"
  - "Diego Didona"
  - "Rachid Guerraoui"
  - "Willy Zwaenepoel"
  - "Huapeng Yuan"
  - "Aashray Arora"
  - "Karan Gupta"
  - "Pavan Konka"
year: 2017
venue: "ATC"
arxiv: null
doi: null
source: "https://www.usenix.org/conference/atc17/technical-sessions/presentation/balmau"
topics:
  - lsm
  - kv-store
seed_rank: 861
seed_batch: "to1000-db-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
lineage: contemporary-databases
cites:
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
---

# TRIAD: Creating Synergies Between Memory, Disk and Log in Log Structured Key-Value Stores

## One-sentence takeaway

TRIAD: Log-structured merge design for write-optimized persistent key-value storage.

## Why it matters here

Modern storage-engine and index design feeds GRID COMMAND / Broadside local state and telemetry stores.

## Key ideas

- Venue/year anchor: ATC 2017.
- Compaction / merge policy dominates write amp, read amp, and tail latency.
- Primary topics: lsm, kv-store.
- Read as an architecture paper: deployment assumptions matter as much as algorithms.

## Caveats

- Seed card from contemporary-databases to-1000 pass; promote to a full `summaries/` digest before relying on fine-grained claims.
- Author lists may be truncated for long industrial papers; verify against the canonical PDF.
- Cross-check DOI/PDF if citing in production docs.

## Links

- URL: https://www.usenix.org/conference/atc17/technical-sessions/presentation/balmau
