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

Johnson’s APSP: run Bellman–Ford from a new source to compute potentials, reweight every edge to be non-negative, then run Dijkstra from each vertex.

## Why it matters here

Best practical all-pairs pattern on sparse graphs that may have negative edges but no negative cycles — exactly the shape of many Anoptic nav/influence graphs. Dense tables still prefer Floyd.

## Key ideas

- A potential \(h(v)\) from one Bellman–Ford makes \(w'(u,v) = w(u,v) + h(u) - h(v) \ge 0\) and preserves shortest paths.
- After reweighting, \(n\) Dijkstra runs give APSP; with binary (or Fibonacci) heaps this is \(O(V^2 \log V + VE)\).
- Negative cycles are reported by the initial Bellman–Ford; the algorithm does not apply if one exists.
- Bellman 1958, Dijkstra 1959, and Floyd 1962 are the cited subroutines and the dense alternative.
- JACM 24(1), January 1977, pp. 1–13.

## Caveats

## Links

- DOI: [10.1145/322003.322004](https://doi.org/10.1145/322003.322004)
- ACM: https://dl.acm.org/doi/10.1145/322003.322004
