---
title: Self-Adjusting Binary Search Trees
authors:
- Daniel Dominic Sleator
- Robert Endre Tarjan
year: 1985
venue: JACM
arxiv: null
doi: 10.1145/3828.3835
source: "https://doi.org/10.1145/3828.3835"
topics:
- splay-trees
- amortized
seed_rank: 1040
seed_batch: perfects-algorithms-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 8
lineage: algorithms-and-complexity
cites:
- title: An Algorithm for the Organization of Information
  url: "https://en.wikipedia.org/wiki/AVL_tree"
  year: 1962
  arxiv: null
  doi: null
  card: 1037-an-algorithm-for-the-organization-of-information
- title: A Dichromatic Framework for Balanced Trees
  url: "https://doi.org/10.1109/SFCS.1978.3"
  year: 1978
  arxiv: null
  doi: 10.1109/SFCS.1978.3
  card: 1039-a-dichromatic-framework-for-balanced-trees
---

# Self-Adjusting Binary Search Trees

## One-sentence takeaway

Splay trees: rotate-to-root access with amortized logarithmic bounds.

## Why it matters here

Amortized analysis showcase; adaptive to working sets.

## Key ideas

- Splaying rotations.
- Amortized O(log n) via potential.
- Working-set properties.
- No explicit balance fields.

## Caveats

- High constants.
- Single ops can be linear worst-case.

## Links

- DOI: [10.1145/3828.3835](https://doi.org/10.1145/3828.3835)
- URL: https://doi.org/10.1145/3828.3835
