---
title: Efficient Algorithms for Shortest Paths in Sparse Networks
authors:
- Donald B. Johnson
year: 1977
venue: JACM
arxiv: null
doi: 10.1145/322003.322004
source: "https://doi.org/10.1145/322003.322004"
topics:
- shortest-paths
- johnson-algorithm
seed_rank: 750
seed_batch: perfects-algorithms-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 8
lineage: algorithms-and-complexity
cites:
- title: On a Routing Problem
  url: "https://doi.org/10.1090/qam/102435"
  year: 1958
  arxiv: null
  doi: 10.1090/qam/102435
- title: A Note on Two Problems in Connexion with Graphs
  url: "https://doi.org/10.1007/BF01386390"
  year: 1959
  arxiv: null
  doi: 10.1007/BF01386390
- title: "Algorithm 97: Shortest Path"
  url: "https://doi.org/10.1145/367766.368168"
  year: 1962
  arxiv: null
  doi: 10.1145/367766.368168
see:
- "739-on-a-routing-problem"
- "310-a-note-on-two-problems-in-connexion-with-graphs-dijkstra"
- "740-algorithm-97-shortest-path"
---

# Efficient Algorithms for Shortest Paths in Sparse Networks

## One-sentence takeaway

Johnson’s algorithm: reweight with Bellman–Ford, then Dijkstra from each vertex for sparse APSP.

## Why it matters here

Best practical APSP pattern on sparse graphs with negative edges but no negative cycles.

## Key ideas

- Potential reweighting preserves shortest paths.
- One Bellman–Ford + n Dijkstra.
- O(V² log V + VE) with heaps.
- Uses Dijkstra as subroutine (see card 386).

## Caveats

- Needs no negative cycles.
- Dense graphs may still prefer Floyd.

## Links

- DOI: [10.1145/322003.322004](https://doi.org/10.1145/322003.322004)
- URL: https://doi.org/10.1145/322003.322004
