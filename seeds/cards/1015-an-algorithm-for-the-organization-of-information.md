---
title: An Algorithm for the Organization of Information
authors:
- G. M. Adelson-Velsky
- E. M. Landis
year: 1962
venue: Doklady Akademii Nauk SSSR
arxiv: null
doi: null
source: "https://en.wikipedia.org/wiki/AVL_tree"
topics:
- balanced-trees
- avl
seed_rank: 1015
seed_batch: perfects-algorithms-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 9
lineage: algorithms-and-complexity
cites:
- title: A Dichromatic Framework for Balanced Trees
  url: "https://doi.org/10.1109/SFCS.1978.3"
  year: 1978
  arxiv: null
  doi: 10.1109/SFCS.1978.3
- title: Self-Adjusting Binary Search Trees
  url: "https://doi.org/10.1145/3828.3835"
  year: 1985
  arxiv: null
  doi: 10.1145/3828.3835
- title: Organization and Maintenance of Large Ordered Indices
  url: "https://doi.org/10.1007/BF00288683"
  year: 1972
  arxiv: null
  doi: 10.1007/BF00288683
see:
- "1017-a-dichromatic-framework-for-balanced-trees"
- "1018-self-adjusting-binary-search-trees"
- "1016-organization-and-maintenance-of-large-ordered-indices"
---

# An Algorithm for the Organization of Information

## One-sentence takeaway

AVL trees — height-balanced BSTs with logarithmic updates.

## Why it matters here

First balanced-tree classic; used where strict balance beats red-black constants.

## Key ideas

- Balance factor invariant.
- Single/double rotations.
- Guaranteed O(log n) height.
- Opens balanced-search-tree field.

## Caveats

- More rotations than red-black on some workloads.
- Original Doklady; many textbook expositions.

## Links

- URL: https://en.wikipedia.org/wiki/AVL_tree
