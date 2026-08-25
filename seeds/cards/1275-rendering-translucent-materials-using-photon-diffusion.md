---
title: "Rendering Translucent Materials Using Photon Diffusion"
authors: ["Craig Donner", "Henrik Wann Jensen"]
year: 2007
venue: "EGSR"
arxiv: null
doi: "10.1145/1401132.1401138"
source: "https://doi.org/10.1145/1401132.1401138"
topics: [subsurface-scattering]
seed_rank: 1275
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
  - title: "Global Illumination using Photon Maps"
    url: "https://graphics.stanford.edu/~henrik/papers/ewr7/ewr7.html"
    year: 1996
    arxiv: null
    doi: null
  - title: "A Rapid Hierarchical Rendering Technique for Translucent Materials"
    url: "https://doi.org/10.1145/566570.566619"
    year: 2002
    arxiv: null
    doi: "10.1145/566570.566619"
  - title: "Light Diffusion in Multi-Layered Translucent Materials"
    url: "https://doi.org/10.1145/1073204.1073308"
    year: 2005
    arxiv: null
    doi: "10.1145/1073204.1073308"
see:
  - "152-the-rendering-equation"
  - "374-global-illumination-using-photon-maps"
  - "1256-a-rapid-hierarchical-rendering-technique-for-translucent-materials"
  - "1255-light-diffusion-in-multi-layered-translucent-materials"
---

# Rendering Translucent Materials Using Photon Diffusion

## One-sentence takeaway

Donner–Jensen 2007 photon diffusion: store photons, estimate a diffusion field — the hybrid that precedes beam diffusion.

## Problem

Hierarchical dipole (JB02) and layered dipole (DJ05) need lighting that is not a distant irradiance map. Photon maps know the lighting.

## Design

Trace photons, then apply diffusion as the density estimate / gather. Lineage: JB02 + DJ05 → photon diffusion → PBD.

## Evidence

EGSR 2007, DOI 10.1145/1401132.1401138. Parent of Habel 2013 PBD.

## Limitations

Point photons + diffusion blur. Beam diffusion is the shaped-source upgrade.

## Implications for Broadside

FMM+RC is Anoptic's far-field 3D GI bet. Participating-media / SSS is the missing local transport operator inside skin, marble, wax, and interiors. Do not claim they already have SSS.

## Bottom line

Mint photon diffusion. Cite JB02 and DJ05; see 374 only as the surface photon-map stem.

## Links

- DOI: [10.1145/1401132.1401138](https://doi.org/10.1145/1401132.1401138)
