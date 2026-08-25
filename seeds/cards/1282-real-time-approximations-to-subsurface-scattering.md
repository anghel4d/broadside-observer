---
title: "Real-Time Approximations to Subsurface Scattering"
authors: ["Simon Green"]
year: 2004
venue: "GPU Gems, Chapter 16"
arxiv: null
doi: null
source: "https://developer.nvidia.com/gpugems/gpugems/part-iii-materials/chapter-16-real-time-approximations-subsurface-scattering"
topics: [subsurface-scattering]
seed_rank: 1282
seed_batch: "sss-translucent-2026-08-25"
reviewed: "2026-08-25"
pool: "graphics"
relevance_score: 9
lineage: subsurface-scattering
cites:
  - title: "Realistic Human Face Rendering for \"The Matrix Reloaded\""
    url: "https://doi.org/10.1145/965400.965470"
    year: 2003
    arxiv: null
    doi: "10.1145/965400.965470"
see:
  - "1281-realistic-human-face-rendering-for-the-matrix-reloaded"
---

# Real-Time Approximations to Subsurface Scattering

## One-sentence takeaway

Green 2004 GPU Gems ch.16: real-time texture-space SSS — the book chapter that cloned Borshukov onto the GPU.

## Problem

Borshukov 2003 is a film sketch. Need a GPU recipe (irradiance render + blur + composite) that engine people can ship.

## Design

Render irradiance to a texture, blur with a dipole-like kernel, composite. Lineage: Borshukov03 → Green04 → d'Eon07.

## Evidence

GPU Gems Chapter 16, 2004. No DOI. NVIDIA: https://developer.nvidia.com/gpugems/gpugems/part-iii-materials/chapter-16-real-time-approximations-subsurface-scattering. GPU Gems duplicate of later EGSR 2007 was dropped from the cut; this chapter stays.

## Limitations

Chapter, not a paper. Texture-space. Jimenez screen-space is the later engine default.

## Implications for Broadside

Screen-space and convolution SSS are cheap previews of the same missing look. Anoptic still needs a real BSSRDF / path-traced SSS under FMM+RC, not a fullscreen blur. Do not claim they already have SSS.

## Bottom line

Mint Green 2004. No DOI. Cite Borshukov 2003.

## Links

- Source: https://developer.nvidia.com/gpugems/gpugems/part-iii-materials/chapter-16-real-time-approximations-subsurface-scattering
