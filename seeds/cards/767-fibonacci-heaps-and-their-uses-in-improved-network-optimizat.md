---
title: Fibonacci Heaps and Their Uses in Improved Network Optimization Algorithms
authors:
- Michael L. Fredman
- Robert Endre Tarjan
year: 1987
venue: Journal of the ACM
arxiv: null
doi: 10.1145/28869.28874
source: "https://doi.org/10.1145/28869.28874"
topics:
- fibonacci-heaps
- priority-queues
seed_rank: 767
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
- "310-a-note-on-two-problems-in-connexion-with-graphs-dijkstra"
- "762-algorithm-232-heapsort"
---

# Fibonacci Heaps and Their Uses in Improved Network Optimization Algorithms

## One-sentence takeaway

Fibonacci heaps support insert and decrease-key in amortized $O(1)$ and delete-min in amortized $O(\log n)$, so Dijkstra becomes $O(E+V\log V)$ and several MST algorithms pick up matching improvements.

## Why it matters here

This is the theoretical priority-queue bound behind textbook shortest-path and MST results that GRID COMMAND pathfinding and Anoptic nav-mesh papers still cite — even when production code uses a binary heap.

## Key ideas

- A collection of heap-ordered trees is linked lazily; marking plus cascading cuts keeps the maximum degree $O(\log n)$.
- Decrease-key cuts a node from its parent and plants it as a new root in $O(1)$ amortized time via a potential on trees and marks.
- With this heap, Dijkstra on a graph with $V$ vertices and $E$ edges is $O(E+V\log V)$ rather than $O((E+V)\log V)$.
- The same structure improves Edmonds’ branching algorithm and several other network-optimization classics.

## Caveats

## Links

- DOI: [10.1145/28869.28874](https://doi.org/10.1145/28869.28874)
- URL: https://doi.org/10.1145/28869.28874
