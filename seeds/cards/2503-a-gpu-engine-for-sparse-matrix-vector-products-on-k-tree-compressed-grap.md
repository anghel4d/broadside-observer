---
title: "A GPU Engine for Sparse Matrix-Vector Products on k²-Tree-Compressed Graphs"
authors:
  - "Francesco Tosoni"
  - "Gabriele Mencagli"
year: 2026
venue: "arXiv preprint (cs.DS)"
arxiv: "2611.03610"
doi: null
source: "https://arxiv.org/abs/2611.03610"
topics:
  - "succinct-data-structures"
  - "gpu"
  - "sparse-linear-algebra"
  - "semirings"
seed_rank: 2503
seed_batch: "craft-2026-11-03"
reviewed: "2026-11-03"
pool: "systems"
relevance_score: 7
cites:
  - title: "A GPU Engine for Sparse Matrix-Vector Products on k²-Tree-Compressed Graphs"
    url: "https://arxiv.org/abs/2611.03610"
    year: 2026
    arxiv: "2611.03610"
    doi: null
see: ["1571-prefix-sums-and-their-applications"]
---

# A GPU Engine for Sparse Matrix-Vector Products on k²-Tree-Compressed Graphs

## One-sentence takeaway

Because a \(k^2\)-tree's shape does not depend on the vector, its child positions can be computed level by level with a parallel prefix sum (or a 0.1-bit-per-node sampled directory) instead of dependent rank queries, giving a GPU SpMV over plus-times, Boolean and tropical semirings that is 2.3 to 27 times smaller than cuSPARSE's CSR and needs a known, bounded amount of device memory before it runs.

## Why it matters here

It is a clean recipe for walking a pointerless hierarchical bitmap on the GPU without chasing pointers, which is the same shape as occupancy octrees and sparse voxel hierarchies in Anoptic and relational bitmaps in ano. The semiring-generic product also lines up with the recurrence algebra in card 2500.

## Key ideas

- **Static traversal.** Child offsets depend only on the tree, so one prefix sum per level replaces chains of irregular rank lookups.
- **Tiled descent.** Descending in tiles bounds temporary memory by tree depth, so the device footprint is known ahead of time.
- **Both sides, any semiring.** The same traversal computes right and left products, single or batched, over plus-times, Boolean and tropical semirings.
- **Results.** On graphs up to 1.2 billion edges, with the last internal level cached a product takes 0.7 to 2.4 times cuSPARSE's time on the right and 0.27 to 2.6 times on the left, and the largest graph needs 1.1 GB on the device, 9 times less than cuSPARSE.

## Caveats

It is memory-bound and often slower than cuSPARSE; the win is footprint, not speed. Results are on web and knowledge graphs, not spatial data. I read the abstract.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.03610
- PDF: https://arxiv.org/pdf/2611.03610
