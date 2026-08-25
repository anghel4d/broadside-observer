---
title: "A Spectral BSSRDF for Shading Human Skin"
authors: ["Craig Donner", "Henrik Wann Jensen"]
year: 2006
venue: "EGSR"
arxiv: null
doi: "10.2312/egwr/egsr06/409-417"
source: "https://doi.org/10.2312/egwr/egsr06/409-417"
topics: [subsurface-scattering, translucent-materials]
seed_rank: 1287
seed_batch: "sss-translucent-2026-08-25"
reviewed: "2026-08-25"
pool: "graphics"
relevance_score: 8
lineage: translucent-materials
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

# A Spectral BSSRDF for Shading Human Skin

## One-sentence takeaway

Donner–Jensen 2006 spectral skin BSSRDF: chromophores, not RGB dipoles.

## Problem

DJ05 layers are RGB. Skin color is hemoglobin + melanin + wavelength-dependent scatter. BioSpec / Anderson are the optics.

## Design

Spectral layered BSSRDF with chromophore concentrations as parameters. Lineage: DJ05 → spectral skin BSSRDF.

## Evidence

EGSR 2006, DOI 10.2312/egwr/egsr06/409-417. Cited by d'Eon 2007 and later aging / BioSpec graphics papers.

## Limitations

Still diffusion layers. Acquisition of chromophores is a different pipeline (Tsumura, Weyrich).

## Implications for Broadside

Anoptic has a forward+ mesh renderer and is betting on FMM+RC 3D GI. Skin is the first character-appearance hole: translucent dermis, not another BRDF lobe. Do not claim Anoptic already has SSS.

## Bottom line

Mint the 2006 spectral skin BSSRDF. Cite DJ05 and Anderson 1981.

## Links

- DOI: [10.2312/egwr/egsr06/409-417](https://doi.org/10.2312/egwr/egsr06/409-417)
