---
title: "Discrete Exterior Calculus"
authors: ["Mathieu Desbrun", "Anil N. Hirani", "Melvin Leok", "Jerrold E. Marsden"]
year: 2005
venue: "arXiv"
arxiv: "math/0508341"
doi: null
source: "https://arxiv.org/abs/math/0508341"
topics: [curiosity]
seed_rank: 1028
seed_batch: "curiosity-2026-08-15"
reviewed: "2026-08-15"
pool: "graphics"
relevance_score: 9
lineage: discrete-differential-geometry
cites:
  - title: "Discrete Exterior Calculus"
    url: "https://thesis.library.caltech.edu/1705/"
    year: 2003
    arxiv: null
    doi: null
  - title: "The Rendering Equation"
    url: "https://doi.org/10.1145/15922.15902"
    year: 1986
    arxiv: null
    doi: "10.1145/15922.15902"
see:
  - "090-nanite-a-deep-dive"
  - "226-towards-practical-meshlet-compression"
  - "005-radiance-cascades-a-novel-approach-to-calculating-global-ill"
  - "152-the-rendering-equation"
  - "1010-the-reyes-image-rendering-architecture"
  - "018-physics-topology-logic-and-computation-a-rosetta-stone"
---

# Discrete Exterior Calculus

## One-sentence takeaway

A stand-alone calculus on simplicial complexes — discrete forms *and* vector fields, Hodge star, Lie derivative, divergence, Laplace–deRham — built on the circumcentric dual rather than barycentric subdivision, so Stokes holds by definition and normals to faces are actually dual cells.

## Why it matters here

Why you might love this: Anoptic already lives on meshes (meshlets, radiance cascades, lock-free ECS over geometry). DEC is the missing discrete Stokes/Hodge layer: fluxes on primal (n−1)-simplices, Hodge that equates primal averages with dual averages, a cotangent Laplace–Beltrami that later graphics papers rediscovered. Bridge: radiance is a 2-form story; structure-preserving Poisson/GI on irregular triangulations is exactly what a circumcentric Hodge is for. Not last night's Archive pantheon — this 2005 preprint was never in the library.

## Key ideas

- Discrete k-forms are cochains (evaluations on k-chains); d is the coboundary, so ⟨dα, c⟩ = ⟨α, ∂c⟩ is Stokes by definition, and d² = 0 for free.
- Circumcentric dual ★σ^k is the dual (n−k)-cell through circumcenters; ★★σ^k = (−1)^{k(n−k)} σ^k. Barycentric duals do not give geometric normals, so they cannot host discrete vector fields.
- Discrete Hodge: (1/|σ^k|) ⟨α, σ^k⟩ = (1/|★σ^k|) ⟨*α, ★σ^k⟩.
- Flat/sharp between dual vector fields and primal 1-forms; contraction and Lie derivative via extrusion along interpolated fields, or algebraically via Cartan's magic formula.
- Divergence on dual vector fields is −δ X^♭; Laplace–Beltrami on primal 0-forms recovers the Meyer et al. cotangent formula.

## Caveats


## Links

- arXiv: [math/0508341](https://arxiv.org/abs/math/0508341)
- Hirani thesis: https://thesis.library.caltech.edu/1705/
