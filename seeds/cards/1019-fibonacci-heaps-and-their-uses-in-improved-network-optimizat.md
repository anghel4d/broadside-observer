---
title: Fibonacci Heaps and Their Uses in Improved Network Optimization Algorithms
authors:
- Michael L. Fredman
- Robert Endre Tarjan
year: 1987
venue: JACM
arxiv: null
doi: 10.1145/28869.28874
source: "https://doi.org/10.1145/28869.28874"
topics:
- fibonacci-heaps
- priority-queues
seed_rank: 1019
seed_batch: perfects-algorithms-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 8
lineage: algorithms-and-complexity
cites:
- title: A Note on Two Problems in Connexion with Graphs
  url: "https://doi.org/10.1007/BF01386390"
  year: 1959
  arxiv: null
  doi: 10.1007/BF01386390
- title: "Algorithm 232: Heapsort"
  url: "https://doi.org/10.1145/512274.512284"
  year: 1964
  arxiv: null
  doi: 10.1145/512274.512284
see:
- "386-a-note-on-two-problems-in-connexion-with-graphs-dijkstra"
- "1013-algorithm-232-heapsort"
---

# Fibonacci Heaps and Their Uses in Improved Network Optimization Algorithms

## One-sentence takeaway

Fibonacci heaps give amortized O(1) decrease-key, speeding Dijkstra and MST algorithms.

## Why it matters here

Theoretical priority-queue breakthrough behind many textbook graph bounds.

## Key ideas

- Lazy linking and marking.
- Amortized decrease-key O(1).
- Improves Dijkstra to O(E + V log V).
- Influences later heap designs.

## Caveats

- Poor constants — rarely used raw in production.
- Important for theory and design ideas.

## Links

- DOI: [10.1145/28869.28874](https://doi.org/10.1145/28869.28874)
- URL: https://doi.org/10.1145/28869.28874
