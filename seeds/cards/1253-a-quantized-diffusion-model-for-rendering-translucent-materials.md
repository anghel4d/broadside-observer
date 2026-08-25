---
title: "A Quantized-Diffusion Model for Rendering Translucent Materials"
authors: ["Eugene d'Eon", "Geoffrey Irving"]
year: 2011
venue: "SIGGRAPH / TOG"
arxiv: null
doi: "10.1145/1964921.1964951"
source: "https://doi.org/10.1145/1964921.1964951"
topics: [subsurface-scattering, translucent-materials]
seed_rank: 1253
seed_batch: "sss-translucent-2026-08-25"
reviewed: "2026-08-25"
pool: "graphics"
relevance_score: 10
lineage: subsurface-scattering
cites:
  - title: "A High Accuracy Approximation for Solving Multiple Scattering Problems in Infinite Homogeneous Media"
    url: "https://doi.org/10.1007/bf02785007"
    year: 1956
    arxiv: null
    doi: "10.1007/bf02785007"
  - title: "The Rendering Equation"
    url: "https://doi.org/10.1145/15922.15902"
    year: 1986
    arxiv: null
    doi: "10.1145/15922.15902"
  - title: "A Practical Model for Subsurface Light Transport"
    url: "https://doi.org/10.1145/383259.383319"
    year: 2001
    arxiv: null
    doi: "10.1145/383259.383319"
  - title: "Light Diffusion in Multi-Layered Translucent Materials"
    url: "https://doi.org/10.1145/1073204.1073308"
    year: 2005
    arxiv: null
    doi: "10.1145/1073204.1073308"
see:
  - "152-the-rendering-equation"
  - "1263-a-high-accuracy-approximation-for-solving-multiple-scattering"
  - "1245-a-practical-model-for-subsurface-light-transport"
  - "1255-light-diffusion-in-multi-layered-translucent-materials"
---

# A Quantized-Diffusion Model for Rendering Translucent Materials

## One-sentence takeaway

Quantized-diffusion BSSRDF: Grosjean-accurate multipole that retires the classic dipole for thick translucent materials.

## Problem

JMLH01 dipole and Donner 2005 multi-layer are cheap and wrong at small source-detector separations and high absorption. Grosjean's neutron-transport approximation is the missing accuracy.

## Design

Quantize the diffusion Green's function (extended-source / Grosjean) into a sum of dipoles or Gaussians you can hierarchically evaluate. Lineage: JMLH01 + Donner 2005 + Grosjean → QD11 → PBD13.

## Evidence

SIGGRAPH / TOG 2011, DOI 10.1145/1964921.1964951. Immediate parent of Photon Beam Diffusion and the Better Dipole sidecar.

## Limitations

Still a homogeneous diffusion approximation. Beam diffusion and directional dipoles exist because QD is radially symmetric and expensive to importance-sample.

## Implications for Broadside

Anoptic has a forward+ mesh renderer and is betting on FMM+RC 3D GI. Translucent materials / SSS is the missing appearance model for skin, marble, wax, leaves, and interiors. Do not claim they already have SSS.

## Bottom line

Mint quantized diffusion. Cite JMLH01, Donner 2005, Grosjean 1956.

## Links

- DOI: [10.1145/1964921.1964951](https://doi.org/10.1145/1964921.1964951)
