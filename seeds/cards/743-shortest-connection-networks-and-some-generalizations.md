---
title: Shortest Connection Networks and Some Generalizations
authors:
  - R. C. Prim
year: 1957
venue: Bell System Technical Journal
arxiv: null
doi: 10.1002/j.1538-7305.1957.tb01515.x
source: "https://doi.org/10.1002/j.1538-7305.1957.tb01515.x"
topics:
  - mst
  - prim
seed_rank: 743
seed_batch: perfects-algorithms-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 10
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

# Shortest Connection Networks and Some Generalizations

## One-sentence takeaway

Prim’s algorithm grows a single tree by always adding the lightest edge leaving the current vertex set — the MST method that likes adjacency matrices and heaps.

## Why it matters here

Dense connection problems (fully linked regions, small complete distance tables) want Prim, not Kruskal. The cut property is the same; the data structure is a frontier, which is why the algorithm sits in the Jarník–Prim–Dijkstra family.

## Key ideas

- Start from an arbitrary vertex; repeatedly add the cheapest edge with exactly one end in the tree.
- The paper is a Bell System engineering article on connecting terminals; generalizations include Steiner-like extra junctions.
- Kruskal 1956 is cited as the forest-growing alternative.
- Heap or \(d\)-ary heap implementations dominate later asymptotics; the 1957 text is the growth rule.
- Bell System Technical Journal 36(6), November 1957, pp. 1389–1401. Jarník (1930) has historical priority.

## Caveats

## Links

- DOI: [10.1002/j.1538-7305.1957.tb01515.x](https://doi.org/10.1002/j.1538-7305.1957.tb01515.x)
