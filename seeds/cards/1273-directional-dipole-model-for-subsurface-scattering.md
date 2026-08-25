---
title: "Directional Dipole Model for Subsurface Scattering"
authors: ["Jeppe Revall Frisvad", "Toshiya Hachisuka", "Thomas Kim Kjeldsen"]
year: 2014
venue: "TOG"
arxiv: null
doi: "10.1145/2682629"
source: "https://doi.org/10.1145/2682629"
topics: [subsurface-scattering]
seed_rank: 1273
seed_batch: "sss-translucent-2026-08-25"
reviewed: "2026-08-25"
pool: "graphics"
relevance_score: 9
lineage: subsurface-scattering
cites:
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
  - title: "A Quantized-Diffusion Model for Rendering Translucent Materials"
    url: "https://doi.org/10.1145/1964921.1964951"
    year: 2011
    arxiv: null
    doi: "10.1145/1964921.1964951"
  - title: "Photon Beam Diffusion: A Hybrid Monte Carlo Method for Subsurface Scattering"
    url: "https://doi.org/10.1111/cgf.12148"
    year: 2013
    arxiv: null
    doi: "10.1111/cgf.12148"
see:
  - "152-the-rendering-equation"
  - "1245-a-practical-model-for-subsurface-light-transport"
  - "1253-a-quantized-diffusion-model-for-rendering-translucent-materials"
  - "1257-photon-beam-diffusion-a-hybrid-monte-carlo-method-for-subsurface"
---

# Directional Dipole Model for Subsurface Scattering

## One-sentence takeaway

Frisvad 2014 directional dipole: the BSSRDF remembers incident direction, not just |x_i − x_o|.

## Problem

Classic and quantized dipoles are radially symmetric. Oblique beams and grazing light need a directional Green's function.

## Design

Directional dipole constructed from the diffusion / radiative-transfer Green's function with a preferred axis. Lineage: JMLH01 + QD → Frisvad14 → Frederickx 2017.

## Evidence

TOG 2014, DOI 10.1145/2682629.

## Limitations

Still diffusion. Breaks as g → 1 (Frederickx 2017 is the fix). More expensive than a radial profile.

## Implications for Broadside

Anoptic has a forward+ mesh renderer and is betting on FMM+RC 3D GI. Translucent materials / SSS is the missing appearance model for skin, marble, wax, leaves, and interiors. Do not claim they already have SSS.

## Bottom line

Mint the directional dipole. Cite JMLH01 and QD11.

## Links

- DOI: [10.1145/2682629](https://doi.org/10.1145/2682629)
