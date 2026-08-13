---
title: "A Study of Replacement Algorithms for a Virtual-Storage Computer"
authors:
  - "L. A. Belady"
year: 1966
venue: "IBM Systems Journal"
arxiv: null
doi: "10.1147/sj.52.0078"
source: "https://doi.org/10.1147/sj.52.0078"
topics:
  - operating-systems
  - paging
  - belady
seed_rank: 1131
seed_batch: "perfects-systems-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
lineage: systems-classics
cites:
  - title: "The Working Set Model for Program Behavior"
    url: "https://doi.org/10.1145/363095.363141"
    year: 1968
    arxiv: null
    doi: "10.1145/363095.363141"
    card: "1130-the-working-set-model-for-program-behavior"
---

# A Study of Replacement Algorithms for a Virtual-Storage Computer

## One-sentence takeaway

Belady compares page-replacement algorithms and exposes anomalies (including Belady's anomaly for FIFO)—the paging policy classic.

## Why it matters here

Replacement-policy intuition for caches, resident sets, and streaming heaps.

## Key ideas

- Comparative study of MIN/OPT, LRU, FIFO, etc.
- Stack algorithms and inclusion properties.
- Belady's anomaly: more frames can worsen FIFO fault rates.
- Empirical methodology for memory policies.

## Caveats

- Classic; verify claims against the primary text before engineering decisions.

## Links

- DOI: [10.1147/sj.52.0078](https://doi.org/10.1147/sj.52.0078)
- URL: https://doi.org/10.1147/sj.52.0078
