---
title: A Dichromatic Framework for Balanced Trees
authors:
- Leo J. Guibas
- Robert Sedgewick
year: 1978
venue: FOCS
arxiv: null
doi: 10.1109/SFCS.1978.3
source: "https://doi.org/10.1109/SFCS.1978.3"
topics:
- balanced-trees
- red-black-trees
seed_rank: 1017
seed_batch: perfects-algorithms-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 9
lineage: algorithms-and-complexity
cites:
- title: An Algorithm for the Organization of Information
  url: "https://en.wikipedia.org/wiki/AVL_tree"
  year: 1962
  arxiv: null
  doi: null
- title: Self-Adjusting Binary Search Trees
  url: "https://doi.org/10.1145/3828.3835"
  year: 1985
  arxiv: null
  doi: 10.1145/3828.3835
see:
- "1015-an-algorithm-for-the-organization-of-information"
- "1018-self-adjusting-binary-search-trees"
---

# A Dichromatic Framework for Balanced Trees

## One-sentence takeaway

Red-black trees as a dichromatic balanced BST framework.

## Why it matters here

Default ordered map in many runtimes; fewer rotations than AVL often.

## Key ideas

- Color invariants approximating 2-3-4 trees.
- O(log n) insert/delete.
- Unifying balanced-tree framework.
- Widely standardized in libraries.

## Caveats

- Many implementations follow CLRS.
- AA/scapegoat/treaps are alternatives.

## Links

- DOI: [10.1109/SFCS.1978.3](https://doi.org/10.1109/SFCS.1978.3)
- URL: https://doi.org/10.1109/SFCS.1978.3
