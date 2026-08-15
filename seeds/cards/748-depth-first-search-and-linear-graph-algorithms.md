---
title: Depth-First Search and Linear Graph Algorithms
authors:
  - Robert Tarjan
year: 1972
venue: SIAM J. Comput.
arxiv: null
doi: 10.1137/0201010
source: "https://doi.org/10.1137/0201010"
topics:
  - graph-algorithms
  - dfs
  - tarjan
seed_rank: 748
seed_batch: perfects-algorithms-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 10
lineage: algorithms-and-complexity
cites: []
see: []
---

# Depth-First Search and Linear Graph Algorithms

## One-sentence takeaway

A single DFS with discovery times and low-link values computes biconnected components, bridges, and articulation points in linear time.

## Why it matters here

Dependency graphs, nav topology, and “what breaks if this entity dies” questions in Anoptic are BCC/bridge/articulation queries. Tarjan 1972 is the template; the later SCC presentation uses the same timestamps.

## Key ideas

- Number vertices in discovery order; `low[v]` is the least discovery time reachable from \(v\) via tree edges plus one back edge.
- A vertex is an articulation point when a child cannot climb above it; a tree edge is a bridge when the child cannot climb to it.
- Biconnected components fall out of a stack discipline on the same walk.
- The paper also treats strongly connected components; later expositions sometimes split SCC into a separate write-up.
- SIAM J. Comput. 1(2), 1972, pp. 146–160. Recursion depth is a practical caveat on huge graphs.

## Caveats

## Links

- DOI: [10.1137/0201010](https://doi.org/10.1137/0201010)
- SIAM: https://epubs.siam.org/doi/10.1137/0201010
