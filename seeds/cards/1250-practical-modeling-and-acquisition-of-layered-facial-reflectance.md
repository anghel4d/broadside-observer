---
title: "Practical modeling and acquisition of layered facial reflectance"
authors: ["Abhijeet Ghosh", "Tim Hawkins", "Pieter Peers", "Sune Frederiksen", "Paul Debevec"]
year: 2008
venue: "SIGGRAPH Asia"
arxiv: null
doi: "10.1145/1457515.1409092"
source: "https://doi.org/10.1145/1457515.1409092"
topics: [translucent-materials]
seed_rank: 1250
seed_batch: "sss-translucent-2026-08-25"
reviewed: "2026-08-25"
pool: "graphics"
relevance_score: 10
lineage: translucent-materials
cites:
  - title: "Acquiring the reflectance field of a human face"
    url: "https://doi.org/10.1145/344779.344855"
    year: 2000
    arxiv: null
    doi: "10.1145/344779.344855"
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
  - title: "Rapid Acquisition of Specular and Diffuse Normal Maps from Polarized Spherical Gradient Illumination"
    url: "https://doi.org/10.2312/EGWR/EGSR07/183-194"
    year: 2007
    arxiv: null
    doi: "10.2312/EGWR/EGSR07/183-194"
see:
  - "1279-acquiring-the-reflectance-field-of-a-human-face"
  - "1255-light-diffusion-in-multi-layered-translucent-materials"
  - "1254-analysis-of-human-faces-using-a-measurement-based-skin-reflectance"
  - "1315-rapid-acquisition-of-specular-and-diffuse-normal-maps-from-polarized"
---

# Practical modeling and acquisition of layered facial reflectance

## One-sentence takeaway

Polarized spherical-gradient acquisition of layered facial reflectance — Light Stage as a layered-skin scanner.

## Problem

Debevec 2000 reflectance fields and Weyrich 2006 point-source faces do not separate specular, single-scatter, and layered diffuse at Light-Stage quality.

## Design

Polarized spherical gradients (Ma 2007) plus a layered reflectance model. Lineage: Debevec 2000, Weyrich 2006, Donner 2005, Ma polarized gradients.

## Evidence

SIGGRAPH Asia 2008, DOI 10.1145/1457515.1409092. Feeds Digital Emily and later ICT microgeometry.

## Limitations

Acquisition paper, not a BSSRDF solver. Assumes the layered model it fits.

## Implications for Broadside

Capture papers say which parameters to store (σs, σa, g, layered weights), not how Anoptic evaluates them. The renderer still lacks an SSS operator. Do not claim they already have SSS.

## Bottom line

Mint Ghosh 2008. Cite Debevec 2000 and Ma 2007.

## Links

- DOI: [10.1145/1457515.1409092](https://doi.org/10.1145/1457515.1409092)
