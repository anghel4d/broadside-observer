---
title: "Algorithm 97: Shortest Path"
authors:
- Robert W. Floyd
year: 1962
venue: Communications of the ACM
arxiv: null
doi: 10.1145/367766.368168
source: "https://doi.org/10.1145/367766.368168"
topics:
- shortest-paths
- floyd-warshall
seed_rank: 991
seed_batch: perfects-algorithms-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 10
lineage: algorithms-and-complexity
cites:
- title: A Theorem on Boolean Matrices
  url: "https://doi.org/10.1145/321105.321107"
  year: 1962
  arxiv: null
  doi: 10.1145/321105.321107
- title: A Note on Two Problems in Connexion with Graphs
  url: "https://doi.org/10.1007/BF01386390"
  year: 1959
  arxiv: null
  doi: 10.1007/BF01386390
- title: Efficient Algorithms for Shortest Paths in Sparse Networks
  url: "https://doi.org/10.1145/322003.322004"
  year: 1977
  arxiv: null
  doi: 10.1145/322003.322004
see:
- "992-a-theorem-on-boolean-matrices"
- "386-a-note-on-two-problems-in-connexion-with-graphs-dijkstra"
- "1001-efficient-algorithms-for-shortest-paths-in-sparse-networks"
---

# Algorithm 97: Shortest Path

## One-sentence takeaway

Floyd’s all-pairs shortest paths via dense DP (Warshall transitive-closure kin).

## Why it matters here

Dense APSP/reachability baseline for small graphs and closures.

## Key ideas

- Triple-loop DP on intermediate vertices.
- In-place matrix updates.
- Same skeleton as Warshall closure.
- Clear O(n³).

## Caveats

- Not for large sparse graphs.
- Cite Warshall 1962 for closure credit.

## Links

- DOI: [10.1145/367766.368168](https://doi.org/10.1145/367766.368168)
- URL: https://doi.org/10.1145/367766.368168
