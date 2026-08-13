---
title: "Skip Lists: A Probabilistic Alternative to Balanced Trees"
authors:
- William Pugh
year: 1990
venue: Communications of the ACM
arxiv: null
doi: 10.1145/78973.78977
source: "https://doi.org/10.1145/78973.78977"
topics:
- skip-lists
- randomized-structures
seed_rank: 1042
seed_batch: perfects-algorithms-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 8
lineage: algorithms-and-complexity
cites:
- title: A Dichromatic Framework for Balanced Trees
  url: "https://doi.org/10.1109/SFCS.1978.3"
  year: 1978
  arxiv: null
  doi: 10.1109/SFCS.1978.3
  card: 1039-a-dichromatic-framework-for-balanced-trees
- title: An Algorithm for the Organization of Information
  url: "https://en.wikipedia.org/wiki/AVL_tree"
  year: 1962
  arxiv: null
  doi: null
  card: 1037-an-algorithm-for-the-organization-of-information
---

# Skip Lists: A Probabilistic Alternative to Balanced Trees

## One-sentence takeaway

Skip lists — randomized layered linked lists with expected logarithmic search.

## Why it matters here

Simple concurrent-friendly ordered maps; Redis zset kinship.

## Key ideas

- Random tower heights.
- Expected O(log n) search/insert.
- Easier to reason about than some balanced trees.
- Good base for concurrent variants.

## Caveats

- Randomness needed for balance.
- Worst-case unbounded without hardening.

## Links

- DOI: [10.1145/78973.78977](https://doi.org/10.1145/78973.78977)
- URL: https://doi.org/10.1145/78973.78977
