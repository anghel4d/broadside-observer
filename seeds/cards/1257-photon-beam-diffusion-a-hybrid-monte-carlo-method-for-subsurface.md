---
title: "Photon Beam Diffusion: A Hybrid Monte Carlo Method for Subsurface Scattering"
authors: ["Ralf Habel", "Per H. Christensen", "Wojciech Jarosz"]
year: 2013
venue: "EGSR / CGF"
arxiv: null
doi: "10.1111/cgf.12148"
source: "https://doi.org/10.1111/cgf.12148"
topics: [subsurface-scattering]
seed_rank: 1257
seed_batch: "sss-translucent-2026-08-25"
reviewed: "2026-08-25"
pool: "graphics"
relevance_score: 10
lineage: subsurface-scattering
cites:
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
  - title: "A Quantized-Diffusion Model for Rendering Translucent Materials"
    url: "https://doi.org/10.1145/1964921.1964951"
    year: 2011
    arxiv: null
    doi: "10.1145/1964921.1964951"
see:
  - "152-the-rendering-equation"
  - "374-global-illumination-using-photon-maps"
  - "1253-a-quantized-diffusion-model-for-rendering-translucent-materials"
---

# Photon Beam Diffusion: A Hybrid Monte Carlo Method for Subsurface Scattering

## One-sentence takeaway

Photon beam diffusion: hybrid MC + quantized diffusion that became Disney / Hyperion's SSS profile.

## Problem

QD11 is accurate but a 2D radial profile. Production wants a beam-shaped source that handles searchlight and textured lighting.

## Design

Trace short photon beams, then apply a diffusion profile perpendicular to each beam. Lineage: QD11 → PBD13 → Christensen 2015 / Disney.

## Evidence

EGSR / CGF 2013, DOI 10.1111/cgf.12148. Direct parent of Christensen's approximate reflectance profile and Chiang 2016.

## Limitations

Still a diffusion residual after a short MC. Homogeneous medium. Path-traced SSS is the later production replacement.

## Implications for Broadside

Anoptic has a forward+ mesh renderer and is betting on FMM+RC 3D GI. Translucent materials / SSS is the missing appearance model for skin, marble, wax, leaves, and interiors. Do not claim they already have SSS.

## Bottom line

Mint photon beam diffusion. Cite QD11 and the 1998 volume photon-map paper, not Jensen 1996 card 374 unless the beams are stored as a photon map.

## Links

- DOI: [10.1111/cgf.12148](https://doi.org/10.1111/cgf.12148)
