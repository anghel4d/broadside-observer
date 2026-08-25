---
title: "Realistic Human Face Rendering for \"The Matrix Reloaded\""
authors: ["George Borshukov", "J. P. Lewis"]
year: 2003
venue: "SIGGRAPH Sketches"
arxiv: null
doi: "10.1145/965400.965470"
source: "https://doi.org/10.1145/965400.965470"
topics: [subsurface-scattering]
seed_rank: 1281
seed_batch: "sss-translucent-2026-08-25"
reviewed: "2026-08-25"
pool: "graphics"
relevance_score: 9
lineage: subsurface-scattering
cites:
  - title: "A Practical Model for Subsurface Light Transport"
    url: "https://doi.org/10.1145/383259.383319"
    year: 2001
    arxiv: null
    doi: "10.1145/383259.383319"
see:
  - "1245-a-practical-model-for-subsurface-light-transport"
---

# Realistic Human Face Rendering for "The Matrix Reloaded"

## One-sentence takeaway

Borshukov–Lewis 2003 Matrix Reloaded faces: texture-space diffusion that made movie-skin SSS look real.

## Problem

JMLH01 is offline and slow. Reloaded needed a look-alike convolution on face textures, not a dipole gather per shade.

## Design

Blur irradiance in texture space with a profile shaped like the dipole. Lineage: JMLH01 look, convolution implementation.

## Evidence

SIGGRAPH Sketches 2003, DOI 10.1145/965400.965470. Parent of Green GPU Gems 2004 and d'Eon 2007 SoG.

## Limitations

Sketch. Not physically derived. Texture-space seams and no true light transport.

## Implications for Broadside

Anoptic has a forward+ mesh renderer and is betting on FMM+RC 3D GI. Skin is the first character-appearance hole: translucent dermis, not another BRDF lobe. Do not claim Anoptic already has SSS.

## Bottom line

Mint Borshukov 2003. Cite JMLH01; parent of Green 2004.

## Links

- DOI: [10.1145/965400.965470](https://doi.org/10.1145/965400.965470)
