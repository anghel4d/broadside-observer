---
title: Efficiency of a Good But Not Linear Set Union Algorithm
authors:
- Robert E. Tarjan
year: 1975
venue: Journal of the ACM
arxiv: null
doi: 10.1145/321879.321884
source: "https://doi.org/10.1145/321879.321884"
topics:
- union-find
- tarjan
- disjoint-set
seed_rank: 808
seed_batch: perfects-algorithms-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 9
lineage: algorithms-and-complexity
cites:
- title: On the Shortest Spanning Subtree of a Graph and the Traveling Salesman Problem
  url: "https://doi.org/10.1090/S0002-9939-1956-0078686-7"
  year: 1956
  arxiv: null
  doi: 10.1090/S0002-9939-1956-0078686-7
see:
- "742-on-the-shortest-spanning-subtree-of-a-graph-and-the-travelin"
---

# Efficiency of a Good But Not Linear Set Union Algorithm

## One-sentence takeaway

Tarjan proves that disjoint-set union with union-by-rank and path compression runs in O(m α(m, n)) time, where α is a functional inverse of Ackermann’s function — so slow-growing it is constant on any machine that will ever exist, yet the algorithm is not quite linear.

## Why it matters here

Kruskal MST, connected-component labeling, incremental mesh welding, and ECS “merge these two islands” all sit on this structure. Anoptic’s clustering / union work should use the ranked + compressed variant unless a profile says union-by-size alone is enough.

## Key ideas

- Link the shorter (or lower-rank) tree under the taller one; find compresses the path toward the root.
- The inverse-Ackermann bound is the first tight-ish analysis of the compressed structure, replacing earlier log / log* folklore.
- Almost-linear is the right mental model: you will never observe α growing in production, but the proof shows a pure O(m) bound is false for this algorithm.
- Kruskal’s MST is the motivating consumer: n−1 successful unions plus many finds on a disjoint-set of vertices.

## Caveats

## Links

- DOI: [10.1145/321879.321884](https://doi.org/10.1145/321879.321884)
- URL: https://doi.org/10.1145/321879.321884
