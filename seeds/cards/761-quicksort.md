---
title: Quicksort
authors:
- C. A. R. Hoare
year: 1962
venue: The Computer Journal
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
- title: A High-Speed Sorting Procedure
  url: "https://doi.org/10.1145/368370.368387"
  year: 1959
  arxiv: null
  doi: 10.1145/368370.368387
see: []
---

# Quicksort

## One-sentence takeaway

Hoare’s Quicksort partitions around a pivot and recurses on both sides, giving expected $O(n\log n)$ comparisons and an in-place inner loop that still dominates comparison sorting.

## Why it matters here

Partitioning is the default mental model for sorting ECS keys, GPU radix fallbacks, and ano array primitives: cache-friendly, in-place, and the ancestor of introsort / dual-pivot library sorts.

## Key ideas

- Choose a pivot, exchange elements so lesser keys lie left and greater keys lie right, then recurse.
- Average-case $O(n\log n)$ follows from a balanced split in expectation; the original paper analyzes the expected comparison count.
- The partition is in-place and sequential, which is why tuned Quicksort beats heapsort on real caches.
- Dual-pivot Quicksort and introsort (Quicksort + heapsort fallback) are the industrial descendants.

## Caveats

## Links

- DOI: [10.1093/comjnl/5.1.10](https://doi.org/10.1093/comjnl/5.1.10)
- URL: https://doi.org/10.1093/comjnl/5.1.10
