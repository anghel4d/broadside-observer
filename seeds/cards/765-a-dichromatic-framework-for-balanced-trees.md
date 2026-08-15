---
title: A Dichromatic Framework for Balanced Trees
authors:
- Leo J. Guibas
- Robert Sedgewick
year: 1978
venue: 19th Annual Symposium on Foundations of Computer Science
arxiv: null
doi: 10.1109/SFCS.1978.3
source: "https://doi.org/10.1109/SFCS.1978.3"
topics:
- balanced-trees
- red-black-trees
seed_rank: 765
seed_batch: perfects-algorithms-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 9
lineage: algorithms-and-complexity
cites:
- title: An Algorithm for the Organization of Information
  url: "https://www.mathnet.ru/eng/dan26964"
  year: 1962
  arxiv: null
  doi: null
see:
- "763-an-algorithm-for-the-organization-of-information"
---

# A Dichromatic Framework for Balanced Trees

## One-sentence takeaway

Guibas–Sedgewick color BST edges (or nodes) red or black so the tree simulates a 2-3-4 tree, giving $O(\log n)$ updates with fewer rotations than AVL and a single unifying framework for several balanced schemes.

## Why it matters here

Red-black trees are the default ordered map in many runtimes Anoptic talks to; the dichromatic invariants are what library `std::map` / Java `TreeMap` actually maintain.

## Key ideas

- No two reds in a row; every root-to-leaf path has the same number of blacks — height is at most $2\log_2(n+1)$.
- Insert and delete restore the coloring with a constant number of rotations and recolors, matching 2-3-4 split/merge.
- The same coloring encodes AA trees, 2-3 trees, and several other balanced families as special cases.
- CLRS later popularized the node-colored presentation used in most textbook implementations.

## Caveats

## Links

- DOI: [10.1109/SFCS.1978.3](https://doi.org/10.1109/SFCS.1978.3)
- URL: https://doi.org/10.1109/SFCS.1978.3
