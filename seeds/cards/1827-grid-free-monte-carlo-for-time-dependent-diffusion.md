---
title: "Grid-Free Monte Carlo for Time-Dependent Diffusion"
authors:
  - "Zihong Zhou"
  - "Rohan Sawhney"
  - "Eugene d'Eon"
  - "Wojciech Jarosz"
year: 2026
venue: "arXiv"
arxiv: "2609.12306"
doi: null
source: "https://arxiv.org/abs/2609.12306"
topics:
  - "vulkan-realtime-rendering"
  - "radiance-cascades-gi"
seed_rank: 1827
seed_batch: "frontier-2026-09-14"
reviewed: "2026-09-14"
pool: "engine"
relevance_score: 9
lineage: monte-carlo-rendering
cites:
  - title: "Grid-Free Monte Carlo for Time-Dependent Diffusion"
    url: "https://arxiv.org/abs/2609.12306"
    year: 2026
    arxiv: "2609.12306"
    doi: null
see:
  - "1261-position-free-monte-carlo-simulation-for-arbitrary-layered-bsdfs"
  - "1270-monte-carlo-evaluation-of-non-linear-scattering-equations-for"
  - "1257-photon-beam-diffusion-a-hybrid-monte-carlo-method-for-subsurface"
  - "1806-gaussian-light-transport"
---

# Grid-Free Monte Carlo for Time-Dependent Diffusion

## One-sentence takeaway

Grid-free Monte Carlo (walk-on-spheres / walk-on-stars family) extends from steady-state to time-dependent diffusion without volumetric meshing or brittle time-stepping.

## Why it matters here

Anoptic’s GI and transport stack already drinks from grid-free MC (WoS/WoSt). Time-dependent diffusion is the next practical leap for transient heat/smoke/SSS-like fields in large worlds without meshing — complementary to Gaussian Light Transport 1806 and the FMM/RC thread.

## Key ideas

- Targets transient (time-dependent) diffusion PDEs, not only steady-state solutions.
- Avoids costly volumetric meshing and sequential time-step size fragility via grid-free estimators.
- Builds on walk-on-spheres / walk-on-stars style solvers for complex geometries.
- Useful wherever Anoptic wants evolving volumetric fields without a full Eulerian grid.

## Caveats

Scientific/graphics Monte Carlo paper — not a drop-in Vulkan pass. Variance, boundary conditions, and real-time budgets need careful reading. Do not remint 1261 / 1270 / 1806.

## Links

- arXiv: [2609.12306](https://arxiv.org/abs/2609.12306)
- PDF: https://arxiv.org/pdf/2609.12306
