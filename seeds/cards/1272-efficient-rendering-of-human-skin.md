---
title: "Efficient Rendering of Human Skin"
authors: ["Eugene d'Eon", "David Luebke", "Eric Enderton"]
year: 2007
venue: "EGSR"
arxiv: null
doi: "10.2312/egwr/egsr07/147-157"
source: "https://www.nvidia.com/docs/IO/40506/Eugene_dEon_Efficient_Skin.pdf"
topics: [subsurface-scattering, translucent-materials]
seed_rank: 1272
seed_batch: "sss-translucent-2026-08-25"
reviewed: "2026-08-25"
pool: "graphics"
relevance_score: 9
lineage: translucent-materials
cites:
  - title: "The Rendering Equation"
    url: "https://doi.org/10.1145/15922.15902"
    year: 1986
    arxiv: null
    doi: "10.1145/15922.15902"
  - title: "Realistic Human Face Rendering for \"The Matrix Reloaded\""
    url: "https://doi.org/10.1145/965400.965470"
    year: 2003
    arxiv: null
    doi: "10.1145/965400.965470"
  - title: "Real-Time Approximations to Subsurface Scattering"
    url: "https://developer.nvidia.com/gpugems/gpugems/part-iii-materials/chapter-16-real-time-approximations-subsurface-scattering"
    year: 2004
    arxiv: null
    doi: null
  - title: "Light Diffusion in Multi-Layered Translucent Materials"
    url: "https://doi.org/10.1145/1073204.1073308"
    year: 2005
    arxiv: null
    doi: "10.1145/1073204.1073308"
see:
  - "152-the-rendering-equation"
  - "1281-realistic-human-face-rendering-for-the-matrix-reloaded"
  - "1282-real-time-approximations-to-subsurface-scattering"
  - "1255-light-diffusion-in-multi-layered-translucent-materials"
---

# Efficient Rendering of Human Skin

## One-sentence takeaway

d'Eon–Luebke–Enderton 2007: sum-of-Gaussians skin — the real-time / GPU skin that Jimenez and GPU Gems 3 shipped.

## Problem

Donner–Jensen 2005 layers plus Borshukov / Green convolutions: accurate enough, not GPU-separable. Need a texture-space SoG that matches layered diffusion.

## Design

Fit the multi-layer diffusion profile to a sum of Gaussians; convolve irradiance maps. Lineage: DJ05 + Borshukov/Green → d'Eon07 → Jimenez / QD SoG.

## Evidence

EGSR 2007, DOI 10.2312/egwr/egsr07/147-157. NVIDIA PDF: https://www.nvidia.com/docs/IO/40506/Eugene_dEon_Efficient_Skin.pdf.

## Limitations

Texture-space, not screen-space (Jimenez). Homogeneous-per-texel. Separable SSS is the later cheap version.

## Implications for Broadside

Anoptic has a forward+ mesh renderer and is betting on FMM+RC 3D GI. Skin is the first character-appearance hole: translucent dermis, not another BRDF lobe. Do not claim Anoptic already has SSS.

## Bottom line

Mint d'Eon 2007 skin. Cite Donner 2005 and Borshukov 2003.

## Links

- DOI: [10.2312/egwr/egsr07/147-157](https://doi.org/10.2312/egwr/egsr07/147-157)
- Source: https://www.nvidia.com/docs/IO/40506/Eugene_dEon_Efficient_Skin.pdf
