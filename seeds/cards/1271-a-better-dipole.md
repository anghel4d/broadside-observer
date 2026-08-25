---
title: "A Better Dipole"
authors: ["Eugene d'Eon"]
year: 2012
venue: "Technical report, Weta Digital"
arxiv: null
doi: null
source: "https://eugenedeon.com/pdfs/betterdipole.pdf"
topics: [subsurface-scattering]
seed_rank: 1271
seed_batch: "sss-translucent-2026-08-25"
reviewed: "2026-08-25"
pool: "graphics"
relevance_score: 9
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
  - title: "A Quantized-Diffusion Model for Rendering Translucent Materials"
    url: "https://doi.org/10.1145/1964921.1964951"
    year: 2011
    arxiv: null
    doi: "10.1145/1964921.1964951"
see:
  - "152-the-rendering-equation"
  - "1263-a-high-accuracy-approximation-for-solving-multiple-scattering"
  - "1245-a-practical-model-for-subsurface-light-transport"
  - "1253-a-quantized-diffusion-model-for-rendering-translucent-materials"
---

# A Better Dipole

## One-sentence takeaway

d'Eon's Better Dipole: Grosjean-corrected dipole constants — a two-page sidecar to quantized diffusion.

## Problem

JMLH01 dipole constants are the wrong extrapolation for Grosjean's approximation. Need a drop-in better dipole for existing hierarchical evaluators.

## Design

Re-derive dipole source strengths / extrapolated length from Grosjean; keep the same Rd(r) API. Weta technical report, 2012. PDF at eugenedeon.com.

## Evidence

2012 Weta report, no DOI. Source: https://eugenedeon.com/pdfs/betterdipole.pdf. Sidecar to QD 2011; cited by Frisvad 2014.

## Limitations

Still a radial dipole. Not quantized diffusion, not directional. Report, not a TOG paper.

## Implications for Broadside

Anoptic has a forward+ mesh renderer and is betting on FMM+RC 3D GI. Translucent materials / SSS is the missing appearance model for skin, marble, wax, leaves, and interiors. Do not claim they already have SSS.

## Bottom line

Mint the Better Dipole report. No DOI. Cite JMLH01 and Grosjean.

## Links

- Source: https://eugenedeon.com/pdfs/betterdipole.pdf
