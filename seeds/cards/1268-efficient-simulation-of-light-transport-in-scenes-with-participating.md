---
title: "Efficient Simulation of Light Transport in Scenes with Participating Media using Photon Maps"
authors: ["Henrik Wann Jensen", "Per H. Christensen"]
year: 1998
venue: "SIGGRAPH"
arxiv: null
doi: "10.1145/280814.280925"
source: "https://doi.org/10.1145/280814.280925"
topics: [subsurface-scattering]
seed_rank: 1268
seed_batch: "sss-translucent-2026-08-25"
reviewed: "2026-08-25"
pool: "graphics"
relevance_score: 9
lineage: subsurface-scattering
cites:
  - title: "Ray Tracing Volume Densities"
    url: "https://doi.org/10.1145/800031.808594"
    year: 1984
    arxiv: null
    doi: "10.1145/800031.808594"
  - title: "The Rendering Equation"
    url: "https://doi.org/10.1145/15922.15902"
    year: 1986
    arxiv: null
    doi: "10.1145/15922.15902"
  - title: "Global Illumination using Photon Maps"
    url: "https://graphics.stanford.edu/~henrik/papers/ewr7/ewr7.html"
    year: 1996
    arxiv: null
    doi: null
see:
  - "152-the-rendering-equation"
  - "374-global-illumination-using-photon-maps"
  - "1290-ray-tracing-volume-densities"
---

# Efficient Simulation of Light Transport in Scenes with Participating Media using Photon Maps

## One-sentence takeaway

Jensen–Christensen 1998: photon maps in participating media — the volume extension of the 1996 surface photon map.

## Problem

Kajiya–Von Herzen 1984 ray-marched volumes; Jensen 1996 photon maps are surfaces. Need volume inscatter, multiple scatter, and media caustics in one data structure.

## Design

Trace photons through volumes, store volume maps, estimate inscatter with density estimation. Lineage: Kajiya84 → JC98 → Dorsey 1999 / photon diffusion. Different paper from card 374 (1996 surfaces).

## Evidence

SIGGRAPH 1998, DOI 10.1145/280814.280925. Parent of weathered stone, photon diffusion, and beam radiance estimates.

## Limitations

Density-estimation bias and blur. Beam estimates (Jarosz 2008) exist because point photons in volumes are noisy.

## Implications for Broadside

FMM+RC is Anoptic's far-field 3D GI bet. Participating-media / SSS is the missing local transport operator inside skin, marble, wax, and interiors. Do not claim they already have SSS.

## Bottom line

Mint the 1998 participating-media photon-map paper. Do not remint card 374 (1996). See both 152 and 374.

## Links

- DOI: [10.1145/280814.280925](https://doi.org/10.1145/280814.280925)
