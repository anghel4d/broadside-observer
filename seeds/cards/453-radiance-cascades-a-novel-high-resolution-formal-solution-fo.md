---
title: "Radiance Cascades: A Novel High-Resolution Formal Solution for Multidimensional Non-LTE Radiative Transfer"
authors:
  - "Christopher M. J. Osborne"
  - "Alexander Sannikov"
year: 2024
venue: "RAS Techniques and Instruments"
arxiv: "2408.14425"
doi: "10.1093/rasti/rzae062"
source: "https://arxiv.org/abs/2408.14425"
topics:
  - radiance-cascades
  - gi
  - radiative-transfer
seed_rank: 453
seed_batch: "lineage-radiance-cascades-2026-08-13"
reviewed: "2026-08-13"
pool: "graphics"
relevance_score: 9
lineage: radiance-cascades
cites:
  - title: "Radiance Cascades: A Novel Approach to Calculating Global Illumination"
    url: "https://github.com/Raikiri/RadianceCascadesPaper"
    year: 2023
see:
  - "005-radiance-cascades-a-novel-approach-to-calculating-global-ill"
  - "1107-a-simple-ray-acceleration-structure-for-non-lte-radiative-t"
  - "208-split-radiance-cascades-real-time-global-illumination-via-sp"
  - "211-holographic-radiance-cascades-for-2d-global-illumination"
---

# Radiance Cascades: A Novel High-Resolution Formal Solution for Multidimensional Non-LTE Radiative Transfer

## One-sentence takeaway

Osborne and Sannikov recast radiance cascades as a high-resolution formal solver for multidimensional non-LTE transfer, reusing angular samples across nested intervals so DexRT can synthesize solar prominences without the ray effects of short-characteristics discrete-ordinates methods.

## Why it matters here

This is the peer-reviewed formalization of Sannikov's graphics RC idea: the same spatial↔angular cascade trade Anoptic RTGI uses, documented with merge artifacts the engine community already copies.

## Key ideas

- Short-characteristics DOM solvers need prohibitive angular resolution wherever optically thick and thin regimes mix; cascades reuse computed samples instead of firing independent rays at every order.
- Implemented in the open DexRT code and applied to an MHD levitation-condensation prominence snapshot with GPU acceleration.
- The cascade merge encodes the penumbra / spatial-versus-angular resolution hypothesis that game RC implementations rely on.
- Positions RC as a route to routinely ray-effect-free multidimensional non-LTE models on GPU HPC systems.

## Caveats

## Links

- arXiv: [2408.14425](https://arxiv.org/abs/2408.14425)
- DOI: [10.1093/rasti/rzae062](https://doi.org/10.1093/rasti/rzae062)
