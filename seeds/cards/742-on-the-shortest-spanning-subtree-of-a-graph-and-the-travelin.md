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
cites:
- title: Shortest Connection Networks and Some Generalizations
  url: "https://doi.org/10.1002/j.1538-7305.1957.tb01515.x"
  year: 1957
  arxiv: null
  doi: 10.1002/j.1538-7305.1957.tb01515.x
- title: Efficiency of a Good But Not Linear Set Union Algorithm
  url: "https://doi.org/10.1145/321879.321884"
  year: 1975
  arxiv: null
  doi: 10.1145/321879.321884
- title: A Note on Two Problems in Connexion with Graphs
  url: "https://doi.org/10.1007/BF01386390"
  year: 1959
  arxiv: null
  doi: 10.1007/BF01386390
see:
- "743-shortest-connection-networks-and-some-generalizations"
- "808-efficiency-of-a-good-but-not-linear-set-union-algorithm"
- "310-a-note-on-two-problems-in-connexion-with-graphs-dijkstra"
---

# On the Shortest Spanning Subtree of a Graph and the Traveling Salesman Problem

## One-sentence takeaway

Kruskal’s MST: sort edges, add if they join distinct components.

## Why it matters here

Canonical sparse MST; drives union-find pedagogy and map tooling.

## Key ideas

- Greedy edge intake by weight.
- Cycle avoidance via components.
- Cut/matroid correctness.
- Pairs with efficient disjoint-set union.

## Caveats

- Needs good Union-Find to shine.
- Prim often faster on dense graphs.

## Links

- DOI: [10.1090/S0002-9939-1956-0078686-7](https://doi.org/10.1090/S0002-9939-1956-0078686-7)
- URL: https://doi.org/10.1090/S0002-9939-1956-0078686-7
