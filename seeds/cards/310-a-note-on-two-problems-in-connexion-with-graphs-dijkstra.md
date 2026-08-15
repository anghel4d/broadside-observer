---
title: A Note on Two Problems in Connexion with Graphs (Dijkstra)
authors:
- E. W. Dijkstra
year: 1959
venue: Numerische Mathematik
arxiv: null
doi: 10.1007/BF01386390
source: https://doi.org/10.1007/BF01386390
topics:
- pathfinding
seed_rank: 310
seed_batch: systems-prefill-2026-08-13
reviewed: '2026-08-13'
pool: game-ai
relevance_score: 9
lineage: pathfinding
cites: []
see: []
---

# A Note on Two Problems in Connexion with Graphs (Dijkstra)

## One-sentence takeaway

Dijkstra’s two-page 1959 note gives the O(n²) algorithm that grows a shortest-path tree from a source by always settling the unsettled vertex with the smallest tentative distance.

## Why it matters here

Every navmesh, waypoint, and grid search in GRID COMMAND is this algorithm plus a heuristic (A*) or a hierarchy; the paper is also the source of the “minimum spanning tree via repeated shortest links” construction.

## Key ideas

- Problem 1: construct a spanning tree of minimum total length. Repeatedly add the shortest edge that connects a new vertex to the tree already built (Prim’s algorithm, independently stated here).
- Problem 2: find the shortest path from a given source to every other vertex. Maintain a settled set and, at each step, move in the unsettled vertex whose best-known distance is smallest, then relax its outgoing edges.
- Both procedures use only comparisons and additions of edge lengths; no negative weights are considered.
- The note is three pages in *Numerische Mathematik* 1 (1959), 269–271, and does not mention priority queues — the binary heap / Fibonacci heap speedups come later.
- A* (Hart, Nilsson, Raphael 1968) is the admissible-heuristic generalization; Dijkstra is the `h = 0` special case.

## Caveats

## Links

- DOI: [10.1007/BF01386390](https://doi.org/10.1007/BF01386390)
