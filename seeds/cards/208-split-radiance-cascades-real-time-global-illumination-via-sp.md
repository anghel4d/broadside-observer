---
title: "Split Radiance Cascades: Real-Time Global Illumination via Sparse Radiance Probes"
authors:
  - "Rouli Freeman"
  - "Alexander Sannikov"
year: 2026
venue: "arXiv:cs.GR"
arxiv: "2607.20384"
doi: null
source: "https://arxiv.org/abs/2607.20384"
topics:
  - gi
  - radiance-cascades
  - split-rc
seed_rank: 208
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "graphics"
relevance_score: 9
lineage: radiance-cascades
cites:
  - title: "Radiance Cascades: A Novel Approach to Calculating Global Illumination"
    url: "https://github.com/Raikiri/RadianceCascadesPaper"
    year: 2023
  - title: "Holographic Radiance Cascades for 2D Global Illumination"
    url: "https://arxiv.org/abs/2505.02041"
    year: 2025
    arxiv: "2505.02041"
  - title: "Dynamic Diffuse Global Illumination with Ray-Traced Irradiance Fields"
    url: "https://jcgt.org/published/0008/02/01/"
    year: 2019
  - title: "Real-Time Global Illumination using Precomputed Light Field Probes"
    url: "https://research.nvidia.com/publication/real-time-global-illumination-using-precomputed-light-field-probes"
    year: 2017
  - title: "GI-1.0: A Fast and Scalable Two-level Radiance Caching Scheme for Real-time Global Illumination"
    url: "https://arxiv.org/abs/2310.19855"
    year: 2023
    arxiv: "2310.19855"
see:
  - "005-radiance-cascades-a-novel-approach-to-calculating-global-ill"
  - "211-holographic-radiance-cascades-for-2d-global-illumination"
  - "318-dynamic-diffuse-global-illumination-with-ray-traced-irradian"
  - "327-real-time-global-illumination-using-precomputed-light-field-"
  - "231-gi-1-0-a-fast-and-scalable-two-level-radiance-caching-scheme"
---

# Split Radiance Cascades: Real-Time Global Illumination via Sparse Radiance Probes

## One-sentence takeaway

Bring Radiance Cascades into accurate real-time 3D diffuse GI via sparse hashmap world-space probes and ray splitting by hit distance.

## Why it matters here

Living 3D RC successor for Anoptic: directly tackles the volumetric storage wall that kept prior RC demos in 2D or screenspace.

## Key ideas

- Sparse hashmap stores world-space probes instead of a dense 3D cascade grid.
- Ray splitting assigns traced hit intervals to the correct cascade levels from visible surfaces.
- Targets detail at all scales without the noise/aliasing of undersampled path probes.
- Evaluated in both single-frame and temporally accumulated modes.

## Caveats

- 2026 arXiv preprint — validate against implementation cost on target GPUs before committing engine architecture.

## Links

- arXiv: [2607.20384](https://arxiv.org/abs/2607.20384)
- URL: https://arxiv.org/abs/2607.20384
