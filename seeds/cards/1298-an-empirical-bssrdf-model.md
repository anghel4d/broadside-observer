---
title: "An Empirical BSSRDF Model"
authors: ["Craig Donner", "Jason Lawrence", "Ravi Ramamoorthi", "Toshiya Hachisuka", "Henrik Wann Jensen", "Shree K. Nayar"]
year: 2009
venue: "SIGGRAPH / TOG"
arxiv: null
doi: "10.1145/1531326.1531336"
source: "https://doi.org/10.1145/1531326.1531336"
topics: [subsurface-scattering, translucent-materials]
seed_rank: 1298
seed_batch: "sss-translucent-2026-08-25"
reviewed: "2026-08-25"
pool: "graphics"
relevance_score: 8
lineage: subsurface-scattering
cites:
  - title: "The Rendering Equation"
    url: "https://doi.org/10.1145/15922.15902"
    year: 1986
    arxiv: null
    doi: "10.1145/15922.15902"
  - title: "Light Diffusion in Multi-Layered Translucent Materials"
    url: "https://doi.org/10.1145/1073204.1073308"
    year: 2005
    arxiv: null
    doi: "10.1145/1073204.1073308"
see:
  - "152-the-rendering-equation"
  - "1255-light-diffusion-in-multi-layered-translucent-materials"
---

# An Empirical BSSRDF Model

## One-sentence takeaway

Tabulated homogeneous BSSRDF beyond dipole.

## Problem

Predecessor chain MC truth → empirical BSSRDF. This paper's job: Tabulated homogeneous BSSRDF beyond dipole.

## Design

Tabulated homogeneous BSSRDF beyond dipole. Lineage: MC truth → empirical BSSRDF.

## Evidence

SIGGRAPH / TOG 2009. DOI `10.1145/1531326.1531336`. Tabulated homogeneous BSSRDF beyond dipole.

## Limitations

Read the cited predecessors before treating this as a drop-in Anoptic shader. Do not claim the library already implements it.

## Implications for Broadside

Anoptic has a forward+ mesh renderer and is betting on FMM+RC 3D GI. Translucent materials / SSS is the missing appearance model for skin, marble, wax, leaves, and interiors. Do not claim they already have SSS.

## Bottom line

Mint this 2009 SIGGRAPH / TOG paper. Tabulated homogeneous BSSRDF beyond dipole.

## Links

- DOI: [10.1145/1531326.1531336](https://doi.org/10.1145/1531326.1531336)
