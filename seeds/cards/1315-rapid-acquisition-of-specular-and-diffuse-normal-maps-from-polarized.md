---
title: "Rapid Acquisition of Specular and Diffuse Normal Maps from Polarized Spherical Gradient Illumination"
authors: ["Wan-Chun Ma", "Tim Hawkins", "Pieter Peers", "Charles-Felix Chabert", "Malte Shah", "Paul Debevec"]
year: 2007
venue: "Eurographics Symposium on Rendering (EGSR)"
arxiv: null
doi: "10.2312/EGWR/EGSR07/183-194"
source: "https://doi.org/10.2312/EGWR/EGSR07/183-194"
topics: [translucent-materials]
seed_rank: 1315
seed_batch: "sss-translucent-2026-08-25"
reviewed: "2026-08-25"
pool: "graphics"
relevance_score: 8
lineage: translucent-materials
cites:
  - title: "Acquiring the reflectance field of a human face"
    url: "https://doi.org/10.1145/344779.344855"
    year: 2000
    arxiv: null
    doi: "10.1145/344779.344855"
  - title: "Analysis of human faces using a measurement-based skin reflectance model"
    url: "https://doi.org/10.1145/1179352.1141987"
    year: 2006
    arxiv: null
    doi: "10.1145/1179352.1141987"
see:
  - "1279-acquiring-the-reflectance-field-of-a-human-face"
  - "1254-analysis-of-human-faces-using-a-measurement-based-skin-reflectance"
---

# Rapid Acquisition of Specular and Diffuse Normal Maps from Polarized Spherical Gradient Illumination

## One-sentence takeaway

Ma/Hawkins/Peers/Debevec 2007: Light Stage polarization split of face spec vs subsurface diffuse.

## Problem

Predecessor chain Debevec 2000; Weyrich 2006. This paper's job: Ma/Hawkins/Peers/Debevec 2007: Light Stage polarization split of face spec vs subsurface diffuse.

## Design

Ma/Hawkins/Peers/Debevec 2007: Light Stage polarization split of face spec vs subsurface diffuse. Lineage: Debevec 2000; Weyrich 2006.

## Evidence

Eurographics Symposium on Rendering (EGSR) 2007. DOI `10.2312/EGWR/EGSR07/183-194`. Ma/Hawkins/Peers/Debevec 2007: Light Stage polarization split of face spec vs subsurface diffuse.

## Limitations

Read the cited predecessors before treating this as a drop-in Anoptic shader. Do not claim the library already implements it.

## Implications for Broadside

Anoptic has a forward+ mesh renderer and is betting on FMM+RC 3D GI. Skin is the first character-appearance hole: translucent dermis, not another BRDF lobe. Do not claim Anoptic already has SSS.

## Bottom line

Mint this 2007 Eurographics Symposium on Rendering (EGSR) paper. Ma/Hawkins/Peers/Debevec 2007: Light Stage polarization split of face spec vs subsurface diffuse.

## Links

- DOI: [10.2312/EGWR/EGSR07/183-194](https://doi.org/10.2312/EGWR/EGSR07/183-194)
