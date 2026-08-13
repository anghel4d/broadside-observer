---
title: Theoretical Improvements in Algorithmic Efficiency for Network Flow Problems
authors:
- Jack Edmonds
- Richard M. Karp
year: 1972
venue: JACM
arxiv: null
doi: 10.1145/321694.321699
source: "https://doi.org/10.1145/321694.321699"
topics:
- max-flow
- edmonds-karp
seed_rank: 1018
seed_batch: perfects-algorithms-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 9
lineage: algorithms-and-complexity
cites:
- title: Maximal Flow Through a Network
  url: "https://doi.org/10.4153/CJM-1956-045-5"
  year: 1956
  arxiv: null
  doi: 10.4153/CJM-1956-045-5
  card: 1017-maximal-flow-through-a-network
- title: Algorithm for Solution of a Problem of Maximum Flow in a Network with Power Estimation
  url: "https://en.wikipedia.org/wiki/Dinic%27s_algorithm"
  year: 1970
  arxiv: null
  doi: null
  card: 1019-algorithm-for-solution-of-a-problem-of-maximum-flow-in-a-net
---

# Theoretical Improvements in Algorithmic Efficiency for Network Flow Problems

## One-sentence takeaway

Edmonds–Karp: shortest augmenting paths yield polynomial max-flow.

## Why it matters here

Standard polynomial Ford–Fulkerson instantiation taught everywhere.

## Key ideas

- BFS residual shortest paths.
- O(VE²) bound.
- Makes augmenting-path method polynomial.
- Bridge toward Dinic blocking flows.

## Caveats

- Not the asymptotically fastest max-flow today.
- Excellent didactic and moderate-size algorithm.

## Links

- DOI: [10.1145/321694.321699](https://doi.org/10.1145/321694.321699)
- URL: https://doi.org/10.1145/321694.321699
