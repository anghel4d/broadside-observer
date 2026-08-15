---
title: A Formal Basis for the Heuristic Determination of Minimum Cost Paths
authors:
- Peter E. Hart
- Nils J. Nilsson
- Bertram Raphael
year: 1968
venue: IEEE SSC
arxiv: null
doi: 10.1109/TSSC.1968.300136
source: https://doi.org/10.1109/TSSC.1968.300136
topics:
- pathfinding
- astar
seed_rank: 205
seed_batch: systems-prefill-2026-08-13
reviewed: '2026-08-13'
pool: game-ai
relevance_score: 10
lineage: pathfinding
cites:
- title: A Note on Two Problems in Connexion with Graphs
  url: https://doi.org/10.1007/BF01386390
  year: 1959
  arxiv: null
  doi: 10.1007/BF01386390
- title: Near Optimal Hierarchical Pathfinding (HPA*)
  url: https://doi.org/10.1613/jair.1423
  year: 2004
  arxiv: null
  doi: 10.1613/jair.1423
- title: Online Graph Pruning for Pathfinding on Grid Maps
  url: https://doi.org/10.1609/aaai.v25i1.7994
  year: 2011
  arxiv: null
  doi: 10.1609/aaai.v25i1.7994
- title: 'Theta*: Any-Angle Path Planning on Grids'
  url: https://doi.org/10.1613/jair.2994
  year: 2010
  arxiv: null
  doi: 10.1613/jair.2994
see:
- "310-a-note-on-two-problems-in-connexion-with-graphs-dijkstra"
- "294-near-optimal-hierarchical-pathfinding-hpa"
- "196-online-graph-pruning-for-pathfinding-on-grid-maps"
- "355-theta-any-angle-path-planning-on-grids"
---

# A Formal Basis for the Heuristic Determination of Minimum Cost Paths

## One-sentence takeaway

A* expands nodes by f = g + h and is optimally efficient among admissible algorithms whenever h never overestimates remaining cost.

## Why it matters here

Every GRID COMMAND grid search, JPS variant, and hierarchical planner in the seed spine is an A* descendant; admissibility and consistency are the contract those speedups must preserve.

## Key ideas

- Evaluation function f(n) = g(n) + h(n) mixes exact cost from the start with a heuristic estimate to the goal.
- Admissibility (h ≤ true remaining cost) is sufficient for A* to return a minimum-cost path.
- Consistency / monotonicity of h lets A* avoid reopening nodes and behave like a best-first Dijkstra with a tighter key.
- Among algorithms that use the same h, A* expands no more nodes than any other admissible search (up to ties).
- Dijkstra's algorithm is the special case h = 0; greedy best-first is the special case that ignores g.

## Caveats

## Links

- DOI: [10.1109/TSSC.1968.300136](https://doi.org/10.1109/TSSC.1968.300136)
- IEEE Xplore: https://ieeexplore.ieee.org/document/4082128
