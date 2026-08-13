---
title: "Dostoevsky: Better Space-Time Trade-Offs for LSM-Tree Based Key-Value Stores via Adaptive Removal of Superfluous Merging"
authors:
  - "Niv Dayan"
  - "Stratos Idreos"
year: 2018
venue: "SIGMOD"
arxiv: null
doi: "10.1145/3183713.3196927"
source: "https://doi.org/10.1145/3183713.3196927"
topics:
  - lsm
seed_rank: 797
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
  - title: "HashKV: Enabling Efficient Updates in KV Storage via Hashing"
    url: "https://www.usenix.org/conference/atc18/presentation/chan"
    year: 2018
    arxiv: null
    doi: null
    card: "867-hashkv-enabling-efficient-updates-in-kv-storage-via-hashing"
  - title: "Silk: Preventing Latency Spikes in Log-Structured Merge Key-Value Stores"
    url: "https://www.usenix.org/conference/atc19/presentation/balmau"
    year: 2019
    arxiv: null
    doi: null
    card: "863-silk-preventing-latency-spikes-in-log-structured-merge-key-v"
  - title: "From WiscKey to Bourbon: A Learned Index for Log-Structured Merge Trees"
    url: "https://www.usenix.org/conference/osdi20/presentation/dai"
    year: 2020
    arxiv: null
    doi: null
    card: "803-from-wisckey-to-bourbon-a-learned-index-for-log-structured-m"
---

# Dostoevsky: Better Space-Time Trade-Offs for LSM-Tree Based Key-Value Stores via Adaptive Removal of Superfluous Merging

## One-sentence takeaway

Dostoevsky: Log-structured merge design for write-optimized persistent key-value storage.

## Why it matters here

Modern storage-engine and index design feeds GRID COMMAND / Broadside local state and telemetry stores.

## Key ideas

- Venue/year anchor: SIGMOD 2018.
- Compaction / merge policy dominates write amp, read amp, and tail latency.
- Primary topics: lsm.
- Read as an architecture paper: deployment assumptions matter as much as algorithms.

## Caveats

- Seed card from contemporary-databases to-1000 pass; promote to a full `summaries/` digest before relying on fine-grained claims.
- Author lists may be truncated for long industrial papers; verify against the canonical PDF.
- Cross-check DOI/PDF if citing in production docs.

## Links

- DOI: [10.1145/3183713.3196927](https://doi.org/10.1145/3183713.3196927)
- URL: https://doi.org/10.1145/3183713.3196927
