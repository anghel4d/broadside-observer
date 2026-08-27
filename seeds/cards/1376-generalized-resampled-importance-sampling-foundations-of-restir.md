---
title: "Generalized Resampled Importance Sampling: Foundations of ReSTIR"
authors:
  - "Daqi Lin"
  - "Markus Kettunen"
  - "Benedikt Bitterli"
  - "Jacopo Pantaleoni"
  - "Cem Yuksel"
  - "Chris Wyman"
year: 2022
venue: "SIGGRAPH / TOG"
arxiv: null
doi: "10.1145/3528223.3530158"
source: "https://research.nvidia.com/publication/2022-07_generalized-resampled-importance-sampling-foundations-restir"
topics:
  - "ReSTIR-PT"
  - "GRIS"
seed_rank: 1376
seed_batch: "gi-nature-2026-08-27"
reviewed: "2026-08-27"
pool: "graphics"
relevance_score: 10
lineage: realtime-gi
cites:
  - title: "Spatiotemporal Reservoir Resampling for Real-Time Ray Tracing with Dynamic Direct Lighting"
    url: "https://benedikt-bitterli.me/restir/"
    year: 2020
    arxiv: null
    doi: "10.1145/3386569.3392481"
  - title: "ReSTIR GI: Path Resampling for Real-Time Path Tracing"
    url: "https://research.nvidia.com/publication/2021-06_restir-gi-path-resampling-real-time-path-tracing"
    year: 2021
    arxiv: null
    doi: "10.2312/hpg.20211281"
  - title: "Importance Resampling for Global Illumination"
    url: "https://faculty.cs.byu.edu/~talbot/publications/ris.pdf"
    year: 2005
    arxiv: null
    doi: null
see:
  - "1042-lightcuts-a-scalable-approach-to-illumination"
---

# Generalized Resampled Importance Sampling: Foundations of ReSTIR

## One-sentence takeaway

GRIS puts a measure-theoretic floor under every ReSTIR variant so full-path reuse is a theorem, not a hack.

## Why it's lovely

Why you might love this: ReSTIR PT's paperspace. The reason path-traced games can resample entire paths without inventing a new estimator every year.

## Problem

ReSTIR and ReSTIR GI each needed a bespoke justification. Reusing arbitrary path vertices, with shift maps that are not bijections, sits outside classical MIS. Engines were stacking heuristics on heuristics.

## Design

- Generalized RIS: resample from a mixture of shifted neighbor distributions with a correct weight that accounts for the shift Jacobian.
- Covers random replay, reconnection, and hybrid shifts used in ReSTIR PT.
- Gives conditions for unbiasedness vs consistent bias, so an engine can pick the cheap biased path and know what it paid.

## Evidence

SIGGRAPH 2022 / TOG. Became the citation for ReSTIR PT implementations (RTX, research path tracers, later game PT).

## Limitations

The paper is the foundation, not a drop-in shader. Shift-map design is still art. Does not denoise; does not place lights.

## Implications for Broadside

If Anoptic ever ships path-traced GI, GRIS is the math card next to ReSTIR 2020 (many-lights) and ReSTIR GI (game GI). Do not implement a third ad-hoc reuse rule.

## Bottom line

Mint GRIS. The foundations card for every later ReSTIR.

## Links

- DOI: [10.1145/3528223.3530158](https://doi.org/10.1145/3528223.3530158)
- URL: https://research.nvidia.com/publication/2022-07_generalized-resampled-importance-sampling-foundations-restir
