---
title: "A layered, heterogeneous reflectance model for acquiring and rendering human skin"
authors: ["Craig Donner", "Tim Weyrich", "Eugene d'Eon", "Ravi Ramamoorthi", "Szymon Rusinkiewicz"]
year: 2008
venue: "SIGGRAPH Asia"
arxiv: null
doi: "10.1145/1457515.1409093"
source: "https://doi.org/10.1145/1457515.1409093"
topics: [translucent-materials]
seed_rank: 1248
seed_batch: "sss-translucent-2026-08-25"
reviewed: "2026-08-25"
pool: "graphics"
relevance_score: 10
lineage: translucent-materials
cites:
  - title: "A Biophysically‐Based Spectral Model of Light Interaction with Human Skin"
    url: "https://doi.org/10.1111/j.1467-8659.2004.00764.x"
    year: 2004
    arxiv: null
    doi: "10.1111/j.1467-8659.2004.00764.x"
  - title: "Light Diffusion in Multi-Layered Translucent Materials"
    url: "https://doi.org/10.1145/1073204.1073308"
    year: 2005
    arxiv: null
    doi: "10.1145/1073204.1073308"
  - title: "Analysis of human faces using a measurement-based skin reflectance model"
    url: "https://doi.org/10.1145/1179352.1141987"
    year: 2006
    arxiv: null
    doi: "10.1145/1179352.1141987"
  - title: "Efficient Rendering of Human Skin"
    url: "https://www.nvidia.com/docs/IO/40506/Eugene_dEon_Efficient_Skin.pdf"
    year: 2007
    arxiv: null
    doi: "10.2312/egwr/egsr07/147-157"
  - title: "Practical modeling and acquisition of layered facial reflectance"
    url: "https://doi.org/10.1145/1457515.1409092"
    year: 2008
    arxiv: null
    doi: "10.1145/1457515.1409092"
see:
  - "1317-a-biophysically-based-spectral-model-of-light-interaction-with-human"
  - "1255-light-diffusion-in-multi-layered-translucent-materials"
  - "1254-analysis-of-human-faces-using-a-measurement-based-skin-reflectance"
  - "1272-efficient-rendering-of-human-skin"
  - "1250-practical-modeling-and-acquisition-of-layered-facial-reflectance"
---

# A layered, heterogeneous reflectance model for acquiring and rendering human skin

## One-sentence takeaway

Acquire and render multi-layer heterogeneous human skin: spectral layers, spatially varying σs/σa, rough interfaces.

## Problem

Donner–Jensen 2005 multi-layer diffusion and Weyrich 2006 measured faces; neither combined layered heterogeneous transport with a full facial acquisition pipeline.

## Design

Layered diffusion + measured per-texel parameters + rough interfaces. Lineage: Donner–Jensen 2005, Weyrich 2006, d'Eon skin, BioSpec.

## Evidence

SIGGRAPH Asia 2008, DOI 10.1145/1457515.1409093. Twin of Ghosh 2008 layered facial reflectance at the same venue.

## Limitations

Heavyweight acquisition. Diffusion layers, not full MC. Shared-look with d'Eon 2007 skin, different capture path.

## Implications for Broadside

Anoptic has a forward+ mesh renderer and is betting on FMM+RC 3D GI. Skin is the first character-appearance hole: translucent dermis, not another BRDF lobe. Do not claim Anoptic already has SSS.

## Bottom line

Mint Donner 2008 layered skin. Cite DJ05 and Weyrich 2006. Shared paper with the SSS shelf.

## Links

- DOI: [10.1145/1457515.1409093](https://doi.org/10.1145/1457515.1409093)
