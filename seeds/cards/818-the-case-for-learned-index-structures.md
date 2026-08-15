---
title: The Case for Learned Index Structures
authors:
- Tim Kraska
- Alex Beutel
- Ed H. Chi
- Jeffrey Dean
- Neoklis Polyzotis
year: 2018
venue: SIGMOD
arxiv: "1712.01208"
doi: 10.1145/3183713.3196909
source: "https://arxiv.org/abs/1712.01208"
topics:
- databases
- contemporary-db
seed_rank: 818
seed_batch: to1000-db-types-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 9
lineage: contemporary-databases
cites: []
---

# The Case for Learned Index Structures

## One-sentence takeaway

Kraska et al. recast B-trees, hash maps, and Bloom filters as models of the data’s CDF (or membership) and show that a staged Recursive Model Index of neural nets and linear regressions can beat cache-optimized B-trees by up to 70% in lookup time while using an order of magnitude less memory on real, read-mostly datasets.

## Why it matters here

Anoptic and ano already treat layouts as learned/compiled artifacts; this paper says the *index itself* is a CDF model plus a local search. For sorted ECS ids, replay timelines, and GRID COMMAND spatial keys that are almost arithmetic progressions, a tiny linear model plus exponential search is the right default, not a general B-tree.

## Key ideas

- A range index on a sorted array is a CDF estimate: position ≈ F(key) · N; any regression model plus local search (binary / exponential) preserves correctness.
- The Recursive Model Index stages cheap models: a top model picks an expert for a key-range, lower stages overfit the last mile; hybrid indexes can fall back to a B-tree leaf when a range is irregular.
- The same view recasts hash indexes (learned mapping into a packed array) and Bloom filters (learned existence classifiers with a fallback filter to kill false negatives).
- Reported wins are on static, in-memory, fixed-length keys; inserts, paging, and concurrency are left as open engineering.

## Caveats

## Links

- arXiv: [1712.01208](https://arxiv.org/abs/1712.01208)
- DOI: [10.1145/3183713.3196909](https://doi.org/10.1145/3183713.3196909)
