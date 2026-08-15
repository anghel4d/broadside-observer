---
title: "Meshlet Priors for 3D Mesh Reconstruction"
authors:
  - "Abhishek Badki"
  - "Orazio Gallo"
  - "Jan Kautz"
  - "Pradeep Sen"
year: 2020
venue: "CVPR / arXiv cs.CV"
arxiv: "2001.01744"
doi: null
source: "https://arxiv.org/abs/2001.01744"
topics:
  - meshlets
seed_rank: 255
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "graphics"
relevance_score: 9
lineage: gpu-driven-rendering
cites:
  - title: "meshoptimizer"
    url: "https://github.com/zeux/meshoptimizer"
    year: 2016
    arxiv: null
    doi: null
  - title: "Towards Practical Meshlet Compression"
    url: "https://arxiv.org/abs/2402.09919"
    year: 2024
    arxiv: "2402.09919"
    doi: null
see:
  - "482-meshoptimizer"
  - "226-towards-practical-meshlet-compression"
---

# Meshlet Priors for 3D Mesh Reconstruction

## One-sentence takeaway

Learned local mesh patches — meshlets — act as a pose- and class-agnostic dictionary so a surface can be reconstructed from sparse noisy points without an object-level prior.

## Why it matters here

Anoptic already thinks in meshlets for GPU-driven raster. This paper is the other meaning of the word: a local geometric atom. Useful foil when deciding whether meshlets are only a raster batch or also a reconstruction / LOD primitive.

## Key ideas

- Hand-crafted smoothness priors blur detail to kill noise; object-level learned priors overfit class and pose.
- A meshlet is a small surface patch whose latent codes form a dictionary of local shape.
- Reconstruction composes meshlets so unseen classes and arbitrary poses still have a prior, even under large noise and sparse samples.
- Presented at CVPR 2020; the meshlet here is a CV patch, not a Turing mesh-shader workgroup.

## Caveats

## Links

- arXiv: [2001.01744](https://arxiv.org/abs/2001.01744)
- PDF: https://arxiv.org/pdf/2001.01744
