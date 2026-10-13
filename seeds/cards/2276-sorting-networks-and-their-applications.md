---
title: "Sorting Networks and Their Applications"
authors:
  - "K. E. Batcher"
year: 1968
venue: "AFIPS Spring Joint Computer Conference (SJCC '68), vol. 32, 307–314"
arxiv: null
doi: "10.1145/1468075.1468121"
source: "https://www.cs.kent.edu/~batcher/sort.pdf"
topics:
  - sorting-networks
  - bitonic-sort
  - data-parallel
  - gpu-sorting
seed_rank: 2276
seed_batch: "archive-2026-10-14"
reviewed: "2026-10-14"
pool: "systems"
relevance_score: 8
lineage: parallel-sorting
cites:
  - title: "Sorting Networks and Their Applications"
    url: "https://doi.org/10.1145/1468075.1468121"
    year: 1968
    arxiv: null
    doi: "10.1145/1468075.1468121"
---

# Sorting Networks and Their Applications

## One-sentence takeaway

Batcher showed that a fixed, data-independent network of compare-exchange elements (built recursively from odd-even merges or from bitonic sorters) sorts 2^p items in p(p+1)/2 levels, which is the origin of bitonic sort and of every branch-free parallel sort that runs in lockstep lanes.

## Why it matters here

The library has GPU radix sorts and comparison-sort theory, but not the network that GPU and SIMD code falls back on whenever the sort is small, keyed oddly, or must be branch-free: sorting the lights in a tile, the candidates in a k-nearest query, the per-thread elements before a radix pass, or the units in a GRID COMMAND cell by priority. A sorting network is also an ideal ano primitive, since it is a static schedule of elementwise min/max over arrays, with no data-dependent control flow to vectorize around.

## Key ideas

- **Comparison element.** The only building block outputs min(A,B) on one line and max(A,B) on the other; a network is a fixed wiring of these, so its schedule never depends on the data.
- **Odd-even merging.** Two sorted lists are merged by recursively merging their odd- and even-indexed subsequences and then fixing adjacent pairs with one final row of comparators.
- **Bitonic sorters.** A sequence that rises then falls (or a rotation of one) is sorted by comparing element i with element i+n, giving two bitonic halves to sort recursively. Batcher notes that its wiring resembles the FFT.
- **Cost.** Sorting 2^p items takes p(p+1)/2 levels. The paper's worked example is 1024 inputs: 55 levels, with 24,063 elements using odd-even merges or 28,160 using bitonic sorters.
- **Beyond sorting.** Most of the paper uses the network as hardware: a switching fabric that needs roughly (1/4)n(log2 n)^2 elements instead of a crossbar's n^2, plus multi-access memories.

## Caveats

The O(n log² n) work is asymptotically worse than radix or merge sort, so for large arrays on a GPU a radix sort usually wins and networks belong in the small or per-tile stages. The paper is about 1968 hardware: the timing and switching sections are historical, and the copy on Batcher's page is a retypeset version of the AFIPS paper.

## Links

- Paper (author PDF, Kent State): https://www.cs.kent.edu/~batcher/sort.pdf
- Paper (DOI): https://doi.org/10.1145/1468075.1468121
