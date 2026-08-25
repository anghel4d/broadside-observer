---
title: "Fabricating Translucent Materials Using Continuous Pigment Mixtures"
authors: ["Marios Papas", "Christian Regg", "Wojciech Jarosz", "Bernd Bickel", "Philip Jackson", "Wojciech Matusik", "Steve Marschner", "Markus Gross"]
year: 2013
venue: "ACM Transactions on Graphics (Proc. SIGGRAPH)"
arxiv: null
doi: "10.1145/2461912.2461974"
source: "https://doi.org/10.1145/2461912.2461974"
topics: [translucent-materials]
seed_rank: 1293
seed_batch: "sss-translucent-2026-08-25"
reviewed: "2026-08-25"
pool: "graphics"
relevance_score: 8
lineage: translucent-materials
cites:
  - title: "Fabricating Spatially-Varying Subsurface Scattering"
    url: "https://doi.org/10.1145/1833349.1778799"
    year: 2010
    arxiv: null
    doi: "10.1145/1833349.1778799"
  - title: "Physical Reproduction of Materials with Specified Subsurface Scattering"
    url: "https://doi.org/10.1145/1778765.1778798"
    year: 2010
    arxiv: null
    doi: "10.1145/1778765.1778798"
see:
  - "1300-fabricating-spatially-varying-subsurface-scattering"
  - "1302-physical-reproduction-of-materials-with-specified-subsurface"
---

# Fabricating Translucent Materials Using Continuous Pigment Mixtures

## One-sentence takeaway

Papas 2013: fabricate translucent objects from continuous pigment mixtures that match a target BSSRDF.

## Problem

Hasan 2010 and Dong 2010 print discrete materials. Need continuous pigment mixing for smoother translucent matches.

## Design

Optimize pigment concentrations so measured / predicted SSS matches a target. Lineage: Hasan 2010, Dong 2010.

## Evidence

TOG / SIGGRAPH 2013, DOI 10.1145/2461912.2461974.

## Limitations

Fabrication, not a renderer. Assumes a forward SSS model.

## Implications for Broadside

Fabrication inverts the same BSSRDF Anoptic cannot yet evaluate. Useful as a parameter prior, not as a renderer. Do not claim they already have SSS.

## Bottom line

Mint Papas 2013 fabrication. Cite Hasan 2010 and Dong 2010.

## Links

- DOI: [10.1145/2461912.2461974](https://doi.org/10.1145/2461912.2461974)
