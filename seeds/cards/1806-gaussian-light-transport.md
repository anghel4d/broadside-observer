---
title: "Gaussian Light Transport"
authors:
  - "Patrick Attimont"
  - "Kartic Subr"
  - "Cyril Soler"
year: 2026
venue: "arXiv"
arxiv: "2609.11430"
doi: null
source: "https://arxiv.org/abs/2609.11430"
topics:
  - "vulkan-realtime-rendering"
  - "ecs-data-oriented-simulation"
seed_rank: 1806
seed_batch: "frontier-2026-09-12"
reviewed: "2026-09-12"
pool: "engine"
relevance_score: 9
lineage: gaussian-mixture-light-transport
cites:
  - title: "Gaussian Light Transport"
    url: "https://arxiv.org/abs/2609.11430"
    year: 2026
    arxiv: "2609.11430"
    doi: null
see:
  - "005-radiance-cascades-a-novel-approach-to-calculating-global-ill"
  - "208-split-radiance-cascades-real-time-global-illumination-via-sp"
  - "1380-practical-path-guiding-for-efficient-light-transport-simulation"
  - "372-metropolis-light-transport"
  - "1414-anisotropic-spherical-gaussians"
---

# Gaussian Light Transport

## One-sentence takeaway

Gaussian Light Transport represents the light-transport solution as a 13D Gaussian mixture over position, direction, normals, and materials — folding scene properties into the Gaussians to cut function count and speed evaluation.

## Why it matters here

Anoptic’s radiance-cascades shelf (005 / 208) and path-guiding lineage need new compact transport representations. A GMM that eats normals and materials is a speculative but on-mission engine card for realtime/offline GI experimentation beside RC.

## Key ideas

- Casts solving the light transport equation as fitting/evaluating a 13D Gaussian mixture over positions, directions, surface normals, and material properties.
- Including scene properties inside the Gaussian representation drastically reduces the number of functions and speeds evaluation (per abstract).
- Positions Gaussians as a transport basis, not only as splat geometry (contrast with 3DGS-style novel-view work).
- Potential interface to path guiding and radiance-field style caches used near Anoptic GI experiments.
- Offline/research method first; realtime meshlet/Vulkan path is future work.

## Caveats

Not a drop-in for Split RC realtime GI; dimensionality and fitting cost may dominate dynamic scenes. Compare carefully to spherical Gaussians (1414) and path guiding (1380) before claiming engine readiness. Weekend Frontier engine slot — quality over padding, but this is crème graphics systems.

## Links

- arXiv: [2609.11430](https://arxiv.org/abs/2609.11430)
- PDF: https://arxiv.org/pdf/2609.11430
