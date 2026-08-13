---
title: "Recipe: Converting Concurrent DRAM Indexes to Persistent-Memory Indexes"
authors:
  - "Se Kwon Lee"
  - "Jayeon Hwang"
  - "Wook-Hee Kim"
  - "Sam H. Noh"
  - "Beomseok Nam"
year: 2019
venue: "SOSP"
arxiv: null
doi: "10.1145/3341301.3359635"
source: "https://doi.org/10.1145/3341301.3359635"
topics:
  - nvram
  - indexing
seed_rank: 832
seed_batch: "to1000-db-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
lineage: contemporary-databases
cites:
  - title: "Building a Bw-Tree Takes More Than Just Buzz Words"
    url: "https://doi.org/10.1145/3183713.3196895"
    year: 2018
    arxiv: null
    doi: "10.1145/3183713.3196895"
    card: "819-building-a-bw-tree-takes-more-than-just-buzz-words"
  - title: "NoveLSM: Supporting Writes and Efficient Garbage Collection in Novel LSM-Trees"
    url: "https://www.usenix.org/conference/atc18/presentation/kannan"
    year: 2018
    arxiv: null
    doi: null
    card: "865-novelsm-supporting-writes-and-efficient-garbage-collection-i"
  - title: "Dash: Scalable Hashing on Persistent Memory"
    url: "https://doi.org/10.14778/3407790.3407799"
    year: 2020
    arxiv: null
    doi: "10.14778/3407790.3407799"
    card: "838-dash-scalable-hashing-on-persistent-memory"
  - title: "The Case for Learned Index Structures"
    url: "https://doi.org/10.1145/3183713.3196909"
    year: 2018
    arxiv: null
    doi: "10.1145/3183713.3196909"
    card: "779-the-case-for-learned-index-structures"
---

# Recipe: Converting Concurrent DRAM Indexes to Persistent-Memory Indexes

## One-sentence takeaway

Recipe: Persistent memory changes the recovery and indexing design space.

## Why it matters here

Modern storage-engine and index design feeds GRID COMMAND / Broadside local state and telemetry stores.

## Key ideas

- Venue/year anchor: SOSP 2019.
- Primary topics: nvram, indexing.
- Read as an architecture paper: deployment assumptions matter as much as algorithms.

## Caveats

- Seed card from contemporary-databases to-1000 pass; promote to a full `summaries/` digest before relying on fine-grained claims.
- Author lists may be truncated for long industrial papers; verify against the canonical PDF.
- Cross-check DOI/PDF if citing in production docs.

## Links

- DOI: [10.1145/3341301.3359635](https://doi.org/10.1145/3341301.3359635)
- URL: https://doi.org/10.1145/3341301.3359635
