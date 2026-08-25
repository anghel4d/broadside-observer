---
title: "Light Reflection Functions for Simulation of Clouds and Dusty Surfaces"
authors: ["James F. Blinn"]
year: 1982
venue: "SIGGRAPH"
arxiv: null
doi: "10.1145/800064.801255"
source: "https://doi.org/10.1145/800064.801255"
topics: [subsurface-scattering]
seed_rank: 1292
seed_batch: "sss-translucent-2026-08-25"
reviewed: "2026-08-25"
pool: "graphics"
relevance_score: 8
lineage: subsurface-scattering
---

# Light Reflection Functions for Simulation of Clouds and Dusty Surfaces

## One-sentence takeaway

Blinn 1982 dusty surfaces and clouds — the early graphics phase-function / dusty-reflectance paper HK93 sits on.

## Problem

Need a cheap reflection function for dusty surfaces and clouds before anyone writes an RTE layer.

## Design

Phase-function-style dusty reflection; simulation of clouds and dusty surfaces. Lineage: Blinn82 dusty → HK93.

## Evidence

SIGGRAPH 1982, DOI 10.1145/800064.801255. Predecessor of Hanrahan–Krueger layered SSS.

## Limitations

Empirical / early. Not a BSSRDF. Not modern volume path tracing.

## Implications for Broadside

FMM+RC is Anoptic's far-field 3D GI bet. Participating-media / SSS is the missing local transport operator inside skin, marble, wax, and interiors. Do not claim they already have SSS.

## Bottom line

Mint Blinn 1982. Cite from HK93. Pre-RE (1982) so no see 152.

## Links

- DOI: [10.1145/800064.801255](https://doi.org/10.1145/800064.801255)
