---
title: "Meshlet Priors for 3D Mesh Reconstruction"
authors:
  - "Abhishek Badki"
  - "Orazio Gallo"
  - "Jan Kautz"
  - "Pradeep Sen"
year: 2020
venue: "arXiv:cs.CV"
arxiv: "2001.01744"
doi: null
source: "https://arxiv.org/abs/2001.01744"
topics:
  - meshlets
seed_rank: 329
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "graphics"
relevance_score: 9
---

# Meshlet Priors for 3D Mesh Reconstruction

## One-sentence takeaway

Estimating a mesh from an unordered set of sparse, noisy 3D points is a challenging problem that requires carefully selected priors.

## Why it matters here

Real-time graphics technique relevant to Anoptic Vulkan/meshlet/GI path (Meshlet Priors for 3D Mesh Reconstruction).

## Key ideas

- Estimating a mesh from an unordered set of sparse, noisy 3D points is a challenging problem that requires carefully selected priors.
- Existing hand-crafted priors, such as smoothness regularizers, impose an undesirable trade-off between attenuating noise and preserving local detail.
- Recent deep-learning approaches produce impressive results by learning priors directly from the data.
- However, the priors are learned at the object level, which makes these algorithms class-specific and even sensitive to the pose of the object.
- We introduce meshlets, small patches of mesh that we use to learn local shape priors.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2001.01744](https://arxiv.org/abs/2001.01744)
- URL: https://arxiv.org/abs/2001.01744
