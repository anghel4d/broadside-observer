---
title: "SteadySplats: Resampling of Low-Variance Gaussians for High-Fidelity Stochastic Rendering"
authors:
  - "Felix Windisch"
  - "Thomas Köhler"
  - "Lukas Radl"
  - "Chris Wyman"
  - "Georgios Kopanas"
  - "Bernhard Kerbl"
  - "Markus Steinberger"
year: 2026
venue: "arXiv"
arxiv: "2610.05576"
doi: null
source: "https://arxiv.org/abs/2610.05576"
topics:
  - "oit"
  - "gaussian-splatting"
  - "resampling"
seed_rank: 2273
seed_batch: "craft-2026-10-13"
reviewed: "2026-10-13"
pool: "graphics"
relevance_score: 7
lineage: order-independent-transparency
cites:
  - title: "SteadySplats: Resampling of Low-Variance Gaussians for High-Fidelity Stochastic Rendering"
    url: "https://arxiv.org/abs/2610.05576"
    year: 2026
    arxiv: "2610.05576"
    doi: null
see:
  - "338-weighted-blended-order-independent-transparency"
  - "410-depth-peeling-order-independent-transparency"
  - "1374-spatiotemporal-reservoir-resampling-for-real-time-ray-tracing-wi"
  - "1376-generalized-resampled-importance-sampling-foundations-of-restir"
---

# SteadySplats: Resampling of Low-Variance Gaussians for High-Fidelity Stochastic Rendering

## One-sentence takeaway

Stochastic order-independent transparency becomes practical for Gaussian-splat scenes once history-based spatial resampling and temporal importance resampling attack the noise at render time and a colour regularizer lowers per-ray variance at training time.

## Why it matters here

Sort-free stochastic transparency is attractive for a Vulkan renderer with huge primitive counts (particles, foliage, splats) because it avoids the global sort; this paper brings ReSTIR-style resampling to the transparency noise problem, a recipe that transfers beyond 3DGS.

## Key ideas

- **Noise at two levels.** Attacks variance both in the representation (training) and in image synthesis (rendering).
- **History-based spatial resampling** accelerates convergence of the stochastic estimate; **temporal importance resampling** keeps it coherent under camera motion.
- **Colour regularizer** during training implicitly reduces variance of colour along view rays, so the model is easier to render stochastically.
- **Result.** About 13 dB PSNR gain over prior stochastic methods at 1 spp, converging to sorted 3DGS with mean L1 error below 1e-4; implemented in a Vulkan renderer.

## Caveats

Preprint (2026-10-04). The training-time regularizer only applies to fitted radiance fields, so for authored transparent geometry only the render-time resampling half carries over; temporal reuse brings the usual ghosting and disocclusion risks.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.05576
- PDF: https://arxiv.org/pdf/2610.05576
