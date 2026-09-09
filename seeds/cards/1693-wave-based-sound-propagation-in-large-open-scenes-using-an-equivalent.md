---
title: "Wave-Based Sound Propagation in Large Open Scenes Using an Equivalent Source Formulation"
authors: ["Ravish Mehra", "Nikunj Raghuvanshi", "Lakulish Antani", "Anish Chandak", "Sean Curtis", "Dinesh Manocha"]
year: 2013
venue: "ACM TOG"
arxiv: null
doi: "10.1145/2451236.2451245"
source: "https://doi.org/10.1145/2451236.2451245"
topics: [wave-based, wave, equivalent-source, outdoor, interactive]
seed_rank: 1693
seed_batch: "audio-harvest-2026-09-09"
reviewed: "2026-09-09"
pool: "realtime"
relevance_score: 10
lineage: wave-based-acoustics
cites:
  - title: "Efficient and Accurate Sound Propagation Using Adaptive Rectangular Decomposition"
    url: "https://doi.org/10.1109/tvcg.2009.28"
    year: 2009
    arxiv: null
    doi: "10.1109/tvcg.2009.28"
see:
  - "1683-efficient-and-accurate-sound-propagation-using-adaptive-rectangular"
  - "1669-precomputed-wave-simulation-for-real-time-sound-propagation-of-dynamic"
  - "1174-multilevel-fast-multipole-algorithm-for-solving-combined-field"
  - "1171-rapid-solution-of-integral-equations-of-scattering-theory-in-tw"
---

# Wave-Based Sound Propagation in Large Open Scenes Using an Equivalent Source Formulation

## One-sentence takeaway

Equivalent-source wave propagation for large *open* scenes: encode outgoing radiation as equivalent sources so outdoor/complex exteriors auralize without meshing all air.

## Why it matters here

ARD bricks hate unbounded outdoors. Mehra et al. 2013 TOG place equivalent sources on a coupling surface (Kirchhoff-ish) so the far field is a sum of monopoles/multipoles. Anoptic overland maps: this, not a km³ FDTD grid. Related to FMM *in spirit* — do not remint 1171–1175.

## Key ideas

- **Equivalent sources.** Match field on a boundary; radiate analytically outside.
- **Large open scenes.** Outdoor / mixed indoor-outdoor, interactive pretensions.
- **TOG 2013.** Mehra, Raghuvanshi, Antani, Chandak, Curtis, Manocha.
- **Precompute + runtime eval** of a compact source set.

## Caveats

Not a substitute for indoor modal fields. Equivalent-source order vs accuracy. Do not remint FMM Helmholtz cluster.

## Links

- DOI: https://doi.org/10.1145/2451236.2451245
