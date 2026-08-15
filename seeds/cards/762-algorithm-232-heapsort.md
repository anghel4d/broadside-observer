---
title: "Algorithm 232: Heapsort"
authors:
- J. W. J. Williams
year: 1964
venue: Communications of the ACM
arxiv: null
doi: 10.1145/512274.512284
source: "https://doi.org/10.1145/512274.512284"
topics:
- sorting
- heapsort
- binary-heap
seed_rank: 762
seed_batch: perfects-algorithms-2026-08-13
reviewed: 2026-08-13
pool: systems
relevance_score: 8
lineage: algorithms-and-complexity
cites: []
see: []
---

# Algorithm 232: Heapsort

## One-sentence takeaway

Williams introduces the binary heap as an array-packed complete tree and heapsort as an in-place $O(n\log n)$ worst-case sort built from sift-up / sift-down.

## Why it matters here

Binary heaps are the default priority queue for Anoptic job systems, GRID COMMAND pathfinding, and event schedulers — the same sift operations that make heapsort a worst-case foil to Quicksort.

## Key ideas

- A heap occupies $A[1..n]$ with parent $i$ at $\lfloor i/2\rfloor$; no explicit child pointers.
- `siftup` inserts; `siftdown` restores the heap after replacing the root — together they implement a priority queue.
- Heapsort builds a heap then repeatedly extracts the maximum into the tail of the array, using $O(1)$ extra words.
- Floyd’s linear-time heapify is the usual construction partner; Dijkstra implementations sit on the same structure.

## Caveats

## Links

- DOI: [10.1145/512274.512284](https://doi.org/10.1145/512274.512284)
- URL: https://doi.org/10.1145/512274.512284
