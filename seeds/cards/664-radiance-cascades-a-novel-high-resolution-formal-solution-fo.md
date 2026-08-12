---
title: "Radiance Cascades: A Novel High-Resolution Formal Solution for Multidimensional Non-LTE Radiative Transfer"
authors:
  - "Christopher M. J. Osborne"
  - "A. V. Sannikov"
year: 2024
venue: "RAS Techniques and Instruments"
arxiv: "2408.14425"
doi: "10.1093/rasti/rzae062"
source: "https://arxiv.org/abs/2408.14425"
topics:
  - radiance-cascades
  - gi
  - radiative-transfer
seed_rank: 664
seed_batch: "lineage-radiance-cascades-2026-08-13"
reviewed: "2026-08-13"
pool: "graphics"
relevance_score: 9
lineage: radiance-cascades
cites:
  - title: "Radiance Cascades: A Novel Approach to Calculating Global Illumination"
    url: "https://github.com/Raikiri/RadianceCascadesPaper"
    year: 2023
    card: "005-radiance-cascades-a-novel-approach-to-calculating-global-ill"
  - title: "Holographic Radiance Cascades for 2D Global Illumination"
    url: "https://arxiv.org/abs/2505.02041"
    year: 2025
    arxiv: "2505.02041"
    card: "270-holographic-radiance-cascades-for-2d-global-illumination"
  - title: "Split Radiance Cascades: Real-Time Global Illumination via Sparse Radiance Probes"
    url: "https://arxiv.org/abs/2607.20384"
    year: 2026
    arxiv: "2607.20384"
    card: "265-split-radiance-cascades-real-time-global-illumination-via-sp"
---

# Radiance Cascades: A Novel High-Resolution Formal Solution for Multidimensional Non-LTE Radiative Transfer

## One-sentence takeaway

Peer-reviewed formalization of Sannikov's Radiance Cascades applied to astrophysical non-LTE radiative transfer (DexRT), including cascade merge/artifact discussion used by the graphics community.

## Why it matters here

Direct RC neighbor already in the seeded orbit: carries the graphics RC idea into a published formal solver and documents bilinear/ringing fixes referenced by Holographic RC and community implementations.

## Key ideas

- Recasts radiance cascades as a high-resolution formal solution for multidimensional non-LTE transfer, avoiding ray effects of short-characteristics DOM solvers.
- Implements the method in the open DexRT code for solar-prominence synthesis with GPU acceleration.
- Documents the spatial↔angular resolution trade (penumbra hypothesis) that underpins game RTGI uses of RC.
- Discusses cascade artifacts and mitigations (including bilinear-style fixes) later cited by Holographic RC.

## Caveats

- Primary venue is astrophysics (RASTI), not a games engine paper — treat as cross-domain RC formalization, not a drop-in Vulkan GI recipe.
- Core graphics algorithm still credited to Sannikov (in preparation / ExileCon WIP).

## Links

- arXiv: [2408.14425](https://arxiv.org/abs/2408.14425)
- DOI: [10.1093/rasti/rzae062](https://doi.org/10.1093/rasti/rzae062)
- URL: https://arxiv.org/abs/2408.14425
