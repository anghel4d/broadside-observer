---
title: "Scans as Primitive Parallel Operations"
authors:
  - "Guy E. Blelloch"
year: 1989
venue: "IEEE Transactions on Computers"
arxiv: null
doi: "10.1109/12.42122"
source: "https://doi.org/10.1109/12.42122"
topics:
  - simd
  - parallel-prefix
seed_rank: 307
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 9
cites:
  - title: "Parallel Prefix Computation"
    url: "https://doi.org/10.1145/322217.322232"
    year: 1980
    arxiv: null
    doi: "10.1145/322217.322232"
  - title: "Parallelism in random access machines"
    url: "https://doi.org/10.1145/800133.804339"
    year: 1978
    arxiv: null
    doi: "10.1145/800133.804339"
see: []
---

# Scans as Primitive Parallel Operations

## One-sentence takeaway

Blelloch treats plus-scan and max-scan as unit-time PRAM primitives and shows that doing so simplifies, and often asymptotically speeds up, a long list of parallel algorithms.

## Why it matters here

Every GPU prefix-sum, ECS compact, and GPU-driven cull pass in Broadside is this primitive; the paper is why scan sits next to map/reduce in the engine toolbox.

## Key ideas

- A scan (parallel prefix) of an associative operator produces every prefix result; on a PRAM it can be implemented in `O(log n)` but the paper argues for treating it as a primitive.
- Integer add-scan and max-scan already express split, enumerate, and segmented operations used by radix sort, quicksort, and line drawing.
- Many graph algorithms (connected components, MST via Borůvka-style steps) become cleaner when the machine offers scan instead of only fetch-and-add.
- Giving scan unit cost removes an `O(log n)` factor that otherwise appears in every algorithm that had to rebuild prefix sums from scratch.
- The 1989 IEEE TC paper is the usual citation for “scan is a primitive,” later popularized by NESL and then by CUDA CUB/Thrust.

## Caveats

## Links

- DOI: [10.1109/12.42122](https://doi.org/10.1109/12.42122)
- PDF: https://people.eecs.berkeley.edu/~culler/cs262b/papers/scan89.pdf
