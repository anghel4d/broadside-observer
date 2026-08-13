---
title: "FPTree: A Hybrid SCM-DRAM Persistent and Concurrent B-Tree for Storage-Class Memory"
authors:
  - "Ismail Oukid"
  - "Johan Lasperas"
  - "Anisoara Nica"
  - "Thomas Willhalm"
  - "Wolfgang Lehner"
year: 2016
venue: "SIGMOD"
arxiv: null
doi: "10.1145/2882903.2915251"
source: "https://doi.org/10.1145/2882903.2915251"
topics:
  - nvram
  - indexing
seed_rank: 834
seed_batch: "to1000-db-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
lineage: contemporary-databases
cites:
  - title: "Write-Behind Logging"
    url: "https://doi.org/10.14778/3025111.3025116"
    year: 2016
    arxiv: null
    doi: "10.14778/3025111.3025116"
    card: "848-write-behind-logging"
  - title: "FOEDUS: OLTP Engine for a Thousand Cores and NVRAM"
    url: "https://doi.org/10.1145/2723372.2746480"
    year: 2015
    arxiv: null
    doi: "10.1145/2723372.2746480"
    card: "858-foedus-oltp-engine-for-a-thousand-cores-and-nvram"
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
---

# FPTree: A Hybrid SCM-DRAM Persistent and Concurrent B-Tree for Storage-Class Memory

## One-sentence takeaway

FPTree: Persistent memory changes the recovery and indexing design space.

## Why it matters here

Modern storage-engine and index design feeds GRID COMMAND / Broadside local state and telemetry stores.

## Key ideas

- Venue/year anchor: SIGMOD 2016.
- Primary topics: nvram, indexing.
- Read as an architecture paper: deployment assumptions matter as much as algorithms.

## Caveats

- Seed card from contemporary-databases to-1000 pass; promote to a full `summaries/` digest before relying on fine-grained claims.
- Author lists may be truncated for long industrial papers; verify against the canonical PDF.
- Cross-check DOI/PDF if citing in production docs.

## Links

- DOI: [10.1145/2882903.2915251](https://doi.org/10.1145/2882903.2915251)
- URL: https://doi.org/10.1145/2882903.2915251
