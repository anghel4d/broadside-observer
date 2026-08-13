---
title: "The Case for Learned Index Structures"
authors:
  - "Tim Kraska"
  - "Alex Beutel"
  - "Ed H. Chi"
  - "Jeffrey Dean"
  - "Neoklis Polyzotis"
year: 2018
venue: "SIGMOD"
arxiv: null
doi: "10.1145/3183713.3196909"
source: "https://doi.org/10.1145/3183713.3196909"
topics:
  - learned-indexes
  - indexing
seed_rank: 779
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
  - title: "SuRF: Practical Range Query Filtering with Fast Succinct Tries"
    url: "https://doi.org/10.1145/3183713.3196931"
    year: 2018
    arxiv: null
    doi: "10.1145/3183713.3196931"
    card: "820-surf-practical-range-query-filtering-with-fast-succinct-trie"
  - title: "FITing-Tree: A Data-aware Index Structure"
    url: "https://doi.org/10.1145/3299869.3319860"
    year: 2019
    arxiv: null
    doi: "10.1145/3299869.3319860"
    card: "777-fiting-tree-a-data-aware-index-structure"
  - title: "Recipe: Converting Concurrent DRAM Indexes to Persistent-Memory Indexes"
    url: "https://doi.org/10.1145/3341301.3359635"
    year: 2019
    arxiv: null
    doi: "10.1145/3341301.3359635"
    card: "832-recipe-converting-concurrent-dram-indexes-to-persistent-memo"
---

# The Case for Learned Index Structures

## One-sentence takeaway

The Case for Learned Index Structures: Replaces or accelerates classic indexes with learned models of key distributions.

## Why it matters here

Modern storage-engine and index design feeds GRID COMMAND / Broadside local state and telemetry stores. Learned components hint where Broadside can specialize layouts/plans from observed workloads.

## Key ideas

- Venue/year anchor: SIGMOD 2018.
- Models predict key positions; fallback structures preserve correctness under updates.
- Primary topics: learned-indexes, indexing.
- Read as an architecture paper: deployment assumptions matter as much as algorithms.

## Caveats

- Seed card from contemporary-databases to-1000 pass; promote to a full `summaries/` digest before relying on fine-grained claims.
- Author lists may be truncated for long industrial papers; verify against the canonical PDF.
- Cross-check DOI/PDF if citing in production docs.

## Links

- DOI: [10.1145/3183713.3196909](https://doi.org/10.1145/3183713.3196909)
- URL: https://doi.org/10.1145/3183713.3196909
