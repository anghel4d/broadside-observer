---
title: On-Line Construction of Suffix Trees
authors:
- Esko Ukkonen
year: 1995
venue: Algorithmica
arxiv: null
doi: 10.1007/BF01206331
source: "https://doi.org/10.1007/BF01206331"
topics:
- suffix-tree
- ukkonen
seed_rank: 756
seed_batch: perfects-algorithms-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 8
lineage: algorithms-and-complexity
cites:
- title: "Suffix Arrays: A New Method for On-Line String Searches"
  url: "https://doi.org/10.1137/0222058"
  year: 1993
  arxiv: null
  doi: 10.1137/0222058
see:
- "755-suffix-arrays-a-new-method-for-on-line-string-searches"
---

# On-Line Construction of Suffix Trees

## One-sentence takeaway

Ukkonen’s algorithm grows a suffix tree left-to-right, one character at a time, in $O(n)$ on integer alphabets by using suffix links and an implicit “active point” so unfinished leaves stay open.

## Why it matters here

Online suffix trees are the right structure when an Anoptic or Broadside stream must answer substring queries on a text that is still arriving — replay, chat, or incremental pack indexes.

## Key ideas

- After $i$ characters the tree represents every suffix of $T[1..i]$; character $i+1$ is folded in without rebuilding.
- Suffix links jump from the node for $aW$ to the node for $W$, so the algorithm walks the current suffixes in amortized constant time per character.
- Open leaves are represented by an implicit end pointer; they all grow when the text extends.
- The presentation is substantially simpler to implement and teach than Weiner’s original right-to-left construction.

## Caveats

## Links

- DOI: [10.1007/BF01206331](https://doi.org/10.1007/BF01206331)
- URL: https://doi.org/10.1007/BF01206331
