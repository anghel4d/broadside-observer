---
title: On a Routing Problem
authors:
- Richard Bellman
year: 1958
venue: Quarterly of Applied Mathematics
arxiv: null
doi: 10.1090/qam/102435
source: "https://doi.org/10.1090/qam/102435"
topics:
- shortest-paths
- bellman-ford
seed_rank: 990
seed_batch: perfects-algorithms-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 10
lineage: algorithms-and-complexity
cites:
- title: A Note on Two Problems in Connexion with Graphs
  url: "https://doi.org/10.1007/BF01386390"
  year: 1959
  arxiv: null
  doi: 10.1007/BF01386390
- title: Dynamic Programming
  url: "https://press.princeton.edu/books/paperback/9780691146683/dynamic-programming"
  year: 1957
  arxiv: null
  doi: null
- title: Efficient Algorithms for Shortest Paths in Sparse Networks
  url: "https://doi.org/10.1145/322003.322004"
  year: 1977
  arxiv: null
  doi: 10.1145/322003.322004
see:
- "386-a-note-on-two-problems-in-connexion-with-graphs-dijkstra"
- "1058-dynamic-programming"
- "1001-efficient-algorithms-for-shortest-paths-in-sparse-networks"
---

# On a Routing Problem

## One-sentence takeaway

Dynamic-programming shortest paths that tolerate negative edges (Bellman–Ford core).

## Why it matters here

Negative-edge counterpart to Dijkstra in game and network graphs.

## Key ideas

- Relax all edges |V|-1 times.
- Handles negative weights; detects negative cycles.
- DP recurrence for distances.
- Foundation for distance-vector routing.

## Caveats

- O(VE) vs better non-negative Dijkstra bounds.
- Distributed variants need separate analysis.

## Links

- DOI: [10.1090/qam/102435](https://doi.org/10.1090/qam/102435)
- URL: https://doi.org/10.1090/qam/102435
