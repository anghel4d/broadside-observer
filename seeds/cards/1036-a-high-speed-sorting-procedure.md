---
title: A High-Speed Sorting Procedure
authors:
- Donald L. Shell
year: 1959
venue: Communications of the ACM
arxiv: null
doi: 10.1145/368370.368387
source: "https://doi.org/10.1145/368370.368387"
topics:
- sorting
- shellsort
seed_rank: 1036
seed_batch: perfects-algorithms-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 7
lineage: algorithms-and-complexity
cites:
- title: Quicksort
  url: "https://doi.org/10.1093/comjnl/5.1.10"
  year: 1962
  arxiv: null
  doi: 10.1093/comjnl/5.1.10
  card: 1034-quicksort
---

# A High-Speed Sorting Procedure

## One-sentence takeaway

Shellsort: diminishing-increment insertion sort.

## Why it matters here

Historical bridge to modern n log n sorts; still in tiny codepaths.

## Key ideas

- Gap sequences.
- Improves insertion sort dramatically.
- Simple in-place code.
- Analysis depends on increments.

## Caveats

- Not asymptotically optimal vs quicksort/mergesort.
- Gap sequence choice is subtle.

## Links

- DOI: [10.1145/368370.368387](https://doi.org/10.1145/368370.368387)
- URL: https://doi.org/10.1145/368370.368387
