---
title: "Geometric Queries on Tessellation-Free Displaced Surfaces"
authors:
  - "Bing Xu"
  - "Yang Zhou"
  - "Brian Budge"
year: 2026
venue: "arXiv"
arxiv: "2610.21584"
doi: null
source: "https://arxiv.org/abs/2610.21584"
topics:
  - "vulkan-realtime-rendering"
  - "mesh-shaders-gpu-driven"
seed_rank: 2320
seed_batch: "frontier-2026-10-16"
reviewed: "2026-10-16"
pool: "graphics"
relevance_score: 8
lineage: real-time-rendering
cites:
  - title: "Geometric Queries on Tessellation-Free Displaced Surfaces"
    url: "https://arxiv.org/abs/2610.21584"
    year: 2026
    arxiv: "2610.21584"
    doi: null
see: []
---

# Geometric Queries on Tessellation-Free Displaced Surfaces

## One-sentence takeaway

A first-order texture-space hierarchy over displacement maps, where each node stores a local affine height plane plus a conservative residual bound (and slope bounds), makes displaced surfaces queryable without pre-tessellation for surface sampling, closest-point and specular manifold search, not just ray tracing.

## Why it matters here

Tessellation-free displacement keeps Anoptic's geometry memory small; this extends it from 'can be ray traced' to 'can be sampled, distance-queried and used in light-path search', which is what physics, emitters and caustics need, with one shared acceleration structure.

## Key ideas

- **Beyond min–max.** Scalar height intervals give enclosures for rays but not area estimates or normal bounds; an affine plane plus residual keeps spatial height variation.
- **Enclosures.** Plane and residual bound the surface for intersection and distance searches.
- **Sampling.** Plane height and slopes give area estimates for importance sampling displaced emitters.
- **Specular paths.** Extra slope bounds support specular manifold search.
- **Demonstrations.** Caustics rendering, displaced emitters and surface PDE solvers; memory savings over pre-tessellation and speedups over query-specific baselines while keeping efficient ray tracing.

## Caveats

Reviewed from the abstract only: arXiv provides no HTML for this paper, so quantitative speedups and memory figures were not checked. Offline/production-rendering framing rather than a real-time budget. Preprint, Oct 2026.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.21584
- PDF: https://arxiv.org/pdf/2610.21584
