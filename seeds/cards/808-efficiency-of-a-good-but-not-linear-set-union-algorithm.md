---
title: Efficiency of a Good But Not Linear Set Union Algorithm
authors:
- Robert E. Tarjan
year: 1975
venue: JACM
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

Tarjan analysis of union-find with path compression — nearly linear alpha(n) behavior.

## Why it matters here

Kruskal engine room; ubiquitous clustering/union structure.

## Key ideas

- Union by rank plus path compression.
- Inverse-Ackermann alpha(n) bound.
- Almost-linear disjoint-set operations.
- Pairs with Kruskal MST.

## Caveats

- Later lower bounds refine exactness.
- Simple union-by-size often enough in practice.

## Links

- DOI: [10.1145/321879.321884](https://doi.org/10.1145/321879.321884)
- URL: https://doi.org/10.1145/321879.321884
