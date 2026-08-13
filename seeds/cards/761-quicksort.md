---
title: Quicksort
authors:
- C. A. R. Hoare
year: 1962
venue: Computer Journal
arxiv: null
doi: 10.1093/comjnl/5.1.10
source: "https://doi.org/10.1093/comjnl/5.1.10"
topics:
- sorting
- quicksort
seed_rank: 761
seed_batch: perfects-algorithms-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 9
lineage: algorithms-and-complexity
cites:
- title: "Algorithm 232: Heapsort"
  url: "https://doi.org/10.1145/512274.512284"
  year: 1964
  arxiv: null
  doi: 10.1145/512274.512284
- title: A High-Speed Sorting Procedure
  url: "https://doi.org/10.1145/368370.368387"
  year: 1959
  arxiv: null
  doi: 10.1145/368370.368387
see:
- "762-algorithm-232-heapsort"
---

# Quicksort

## One-sentence takeaway

Hoare Quicksort — practical average-case n log n sorting by partitioning.

## Why it matters here

Default mental model for comparison sorting and in-place partitioning.

## Key ideas

- Pivot partition.
- Expected O(n log n).
- In-place cache-friendly variants.
- Dual-pivot/introsort descendants.

## Caveats

- Worst-case O(n^2) without safeguards.
- Stable mergesort when stability matters.

## Links

- DOI: [10.1093/comjnl/5.1.10](https://doi.org/10.1093/comjnl/5.1.10)
- URL: https://doi.org/10.1093/comjnl/5.1.10
