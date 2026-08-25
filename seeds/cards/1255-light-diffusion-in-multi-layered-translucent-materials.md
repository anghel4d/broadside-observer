---
title: "Light Diffusion in Multi-Layered Translucent Materials"
authors: ["Craig Donner", "Henrik Wann Jensen"]
year: 2005
venue: "SIGGRAPH / TOG"
arxiv: null
doi: "10.1145/1073204.1073308"
source: "https://doi.org/10.1145/1073204.1073308"
topics: [subsurface-scattering, translucent-materials]
seed_rank: 1255
seed_batch: "sss-translucent-2026-08-25"
reviewed: "2026-08-25"
pool: "graphics"
relevance_score: 10
lineage: translucent-materials
cites:
  - title: "Ein Beitrag zur Optik der Farbanstriche"
    url: "https://www.graphics.cornell.edu/~westin/pubs/kubelka.pdf"
    year: 1931
    arxiv: null
    doi: null
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
see:
  - "152-the-rendering-equation"
  - "1260-ein-beitrag-zur-optik-der-farbanstriche"
  - "1245-a-practical-model-for-subsurface-light-transport"
---

# Light Diffusion in Multi-Layered Translucent Materials

## One-sentence takeaway

Multi-layer diffusion: Kubelka–Munk-style stacking of dipoles so skin and marble can be layered, not a single slab.

## Problem

JMLH01 is one homogeneous half-space. Real skin is epidermis + dermis with different σs. Kubelka–Munk layered paint but not a 2D BSSRDF.

## Design

Add fluxes between diffusion layers; each layer keeps a dipole profile. Lineage: JMLH01 + Kubelka–Munk → DJ05 → d'Eon 2007 / QD.

## Evidence

SIGGRAPH / TOG 2005, DOI 10.1145/1073204.1073308. The layered-dipole everyone cites for skin.

## Limitations

Still diffusion. Homogeneous per layer. Spectral skin (2006) and d'Eon 2007 are the production follow-ups.

## Implications for Broadside

Anoptic has a forward+ mesh renderer and is betting on FMM+RC 3D GI. Skin is the first character-appearance hole: translucent dermis, not another BRDF lobe. Do not claim Anoptic already has SSS.

## Bottom line

Mint Donner–Jensen 2005. Cite JMLH01 and Kubelka–Munk 1931.

## Links

- DOI: [10.1145/1073204.1073308](https://doi.org/10.1145/1073204.1073308)
