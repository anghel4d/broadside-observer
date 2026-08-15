---
title: On the Shortest Spanning Subtree of a Graph and the Traveling Salesman Problem
authors:
  - Joseph B. Kruskal
year: 1956
venue: Proceedings of the AMS
arxiv: null
doi: 10.1090/S0002-9939-1956-0078686-7
source: "https://doi.org/10.1090/S0002-9939-1956-0078686-7"
topics:
  - mst
  - kruskal
seed_rank: 742
seed_batch: perfects-algorithms-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 10
lineage: algorithms-and-complexity
cites: []
see: []
---

# On the Shortest Spanning Subtree of a Graph and the Traveling Salesman Problem

## One-sentence takeaway

Sort the edges by weight and add an edge when it joins distinct components — Kruskal’s MST — and the same tree is a building block for TSP approximations.

## Why it matters here

Sparse map graphs, nav meshes, and wiring-style GRID COMMAND layouts want this greedy MST. Correctness is the cut/cycle property; speed is union-find (later Tarjan). Prim is the dense-graph twin.

## Key ideas

- Greedy intake of lightest unused edge that does not close a cycle yields a minimum spanning tree.
- The paper also notes the MST’s relation to the traveling salesman problem (tree doubling / tour bounds).
- No efficient disjoint-set structure is supplied; that engineering arrives with Hopcroft–Ullman / Tarjan union-find.
- Proc. Amer. Math. Soc. 7(1), 1956, pp. 48–50.
- Prim 1957 (and Jarník 1930) grow one tree instead of a forest.

## Caveats

## Links

- DOI: [10.1090/S0002-9939-1956-0078686-7](https://doi.org/10.1090/S0002-9939-1956-0078686-7)
- AMS: https://www.ams.org/journals/proc/1956-007-01/S0002-9939-1956-0078686-7/
