---
title: "ALEX: An Updatable Adaptive Learned Index"
authors:
- Jialin Ding
- Umar Farooq Minhas
- Jia Yu
- Chi Wang
- Jaeyoung Do
- Yinan Li
- Hantian Zhang
- Badrish Chandramouli
- Johannes Gehrke
- Donald Kossmann
- David Lomet
- Tim Kraska
year: 2020
venue: SIGMOD
arxiv: "1905.08898"
doi: 10.1145/3318464.3389711
source: "https://arxiv.org/abs/1905.08898"
topics:
- databases
- contemporary-db
seed_rank: 829
seed_batch: to1000-db-types-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 9
lineage: contemporary-databases
cites:
- title: The Case for Learned Index Structures
  url: "https://arxiv.org/abs/1712.01208"
  year: 2018
  arxiv: "1712.01208"
  doi: 10.1145/3183713.3196909
see:
- "818-the-case-for-learned-index-structures"
---

# ALEX: An Updatable Adaptive Learned Index

## One-sentence takeaway

ALEX makes learned indexes updatable: an adaptive RMI of linear models over gapped arrays, with exponential search around predictions and cost-based split/expand, matching or beating B+ trees on mixed read-write workloads (up to 4.1× faster, up to 2000× smaller in the paper’s experiments).

## Why it matters here

Kraska’s original learned index is read-only. ALEX is the version you could actually put under an Anoptic id map or a GRID COMMAND spatial key that inserts every tick: keep the CDF model, leave gaps for inserts, rebuild a node only when the cost model says so.

## Key ideas

- Internal nodes are linear regressions that pick a child; data nodes are gapped arrays so most inserts land in a nearby hole instead of shifting a packed page.
- Lookups predict a position, then exponential-search to correct model error — correctness never depends on a perfect CDF.
- Nodes split, merge, or change fanout when a cost model (search vs. shift vs. rebuild) trips; the tree shape tracks a shifting key distribution.
- On static data ALEX is up to 2.2× faster and 15× smaller than the original learned index; on read-write it never loses to the B+ tree in the reported suite.

## Caveats

## Links

- arXiv: [1905.08898](https://arxiv.org/abs/1905.08898)
- DOI: [10.1145/3318464.3389711](https://doi.org/10.1145/3318464.3389711)
