---
title: Self-Adjusting Binary Search Trees
authors:
- Daniel Dominic Sleator
- Robert Endre Tarjan
year: 1985
venue: Journal of the ACM
arxiv: null
doi: 10.1145/3828.3835
source: "https://doi.org/10.1145/3828.3835"
topics:
- splay-trees
- amortized
seed_rank: 766
seed_batch: perfects-algorithms-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 8
lineage: algorithms-and-complexity
cites:
- title: An Algorithm for the Organization of Information
  url: "https://www.mathnet.ru/eng/dan26964"
  year: 1962
  arxiv: null
  doi: null
- title: A Dichromatic Framework for Balanced Trees
  url: "https://doi.org/10.1109/SFCS.1978.3"
  year: 1978
  arxiv: null
  doi: 10.1109/SFCS.1978.3
see:
- "763-an-algorithm-for-the-organization-of-information"
- "765-a-dichromatic-framework-for-balanced-trees"
---

# Self-Adjusting Binary Search Trees

## One-sentence takeaway

Splay trees rotate the accessed key to the root (zig / zig-zig / zig-zag) and need no balance bits; a potential-function argument gives amortized $O(\log n)$ per operation plus working-set and static-optimality properties.

## Why it matters here

This is the amortized-analysis showcase for adaptive maps: recently touched ECS keys, UI trees, and compiler symbol tables migrate to cheap depth without an explicit LRU.

## Key ideas

- Every access, insert, or delete finishes by splaying the relevant node to the root, restructuring the tree as a side effect.
- The potential is a sum of subtree-size logarithms; each splay’s amortized cost is $O(\log n)$.
- Working-set bound: accessing an item among the $t$ most recent costs amortized $O(\log t)$.
- No stored balance factors, so nodes are just left/right/parent pointers — but a single operation can still be linear.

## Caveats

## Links

- DOI: [10.1145/3828.3835](https://doi.org/10.1145/3828.3835)
- URL: https://doi.org/10.1145/3828.3835
