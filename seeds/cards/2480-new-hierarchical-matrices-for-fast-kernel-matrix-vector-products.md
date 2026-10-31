---
title: "New hierarchical matrices for fast kernel matrix-vector products with Applications to Gaussian processes and kernel ridge regression"
authors:
  - "Ritesh Khan"
  - "Sivaram Ambikasaran"
year: 2026
venue: "arXiv preprint (cs.MS)"
arxiv: "2610.40195"
doi: null
source: "https://arxiv.org/abs/2610.40195"
topics:
  - "hierarchical-matrices"
  - "admissibility"
  - "fast-kernel-summation"
seed_rank: 2480
seed_batch: "craft-2026-10-31"
reviewed: "2026-10-31"
pool: "engines"
lineage: h-matrices
relevance_score: 7
cites:
  - title: "New hierarchical matrices for fast kernel matrix-vector products with Applications to Gaussian processes and kernel ridge regression"
    url: "https://arxiv.org/abs/2610.40195"
    year: 2026
    arxiv: "2610.40195"
    doi: null
see: ["1191-data-sparse-approximation-by-adaptive-h2-matrices", "1192-introduction-to-hierarchical-matrices-with-applications", "1177-the-black-box-fast-multipole-method"]
---

# New hierarchical matrices for fast kernel matrix-vector products with Applications to Gaussian processes and kernel ridge regression

## One-sentence takeaway

Using a level-dependent "hybrid weak" admissibility rule (far and vertex-sharing clusters admissible at coarse levels, even adjacent clusters admissible at fine levels) with nested bases on top and non-nested ACA bases below gives two H/H² hybrid formats that beat uniform-admissibility versions in storage and matvec cost and compete with strong-admissibility H² matrices.

## Why it matters here

The open question in the FMM-for-radiance-cascades design is which box pairs may be compressed into one low-rank transfer, which is exactly what an admissibility rule decides. This paper shows the rule does not have to be the same at every level, and that relaxing it at fine levels while keeping nesting at coarse levels pays off. That maps onto cascades naturally: coarse cascades want nested, shared bases, and fine cascades are where neighbours are cheap enough to compress loosely.

## Key ideas

- **Hybrid weak admissibility** that changes with tree level instead of one global η.
- **Two formats.** H′_hw with semi-nested and H″_hw with fully nested coarse-level bases; fine levels non-nested.
- **Construction** with adaptive cross approximation (non-nested) and nested cross approximation (nested), so it is kernel-independent.
- **Results.** Lower storage and matvec cost than uniform-admissibility counterparts, competitive with strong-admissibility H², with Gaussian-process and kernel ridge regression demos.

## Caveats

Smooth kernels only: no visibility or occlusion, which is what makes radiance high-rank at silhouettes. Weak admissibility needs higher ranks near adjacency, so the gain depends on the kernel. Abstract-level read.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.40195
- PDF: https://arxiv.org/pdf/2610.40195
