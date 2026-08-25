---
title: "A Radiative Transfer Framework for Rendering Materials with Anisotropic Structure"
authors: ["Wenzel Jakob", "Adam Arbree", "Jonathan T. Moon", "Kavita Bala", "Steve Marschner"]
year: 2010
venue: "SIGGRAPH / TOG"
arxiv: null
doi: "10.1145/1778765.1778790"
source: "https://doi.org/10.1145/1778765.1778790"
topics: [subsurface-scattering, translucent-materials]
seed_rank: 1299
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
see:
  - "152-the-rendering-equation"
---

# A Radiative Transfer Framework for Rendering Materials with Anisotropic Structure

## One-sentence takeaway

Anisotropic RTE framework.

## Problem

Predecessor chain Isotropic volume → anisotropic structure. This paper's job: Anisotropic RTE framework.

## Design

Anisotropic RTE framework. Lineage: Isotropic volume → anisotropic structure.

## Evidence

SIGGRAPH / TOG 2010. DOI `10.1145/1778765.1778790`. Anisotropic RTE framework.

## Limitations

Read the cited predecessors before treating this as a drop-in Anoptic shader. Do not claim the library already implements it.

## Implications for Broadside

Anoptic has a forward+ mesh renderer and is betting on FMM+RC 3D GI. Translucent materials / SSS is the missing appearance model for skin, marble, wax, leaves, and interiors. Do not claim they already have SSS.

## Bottom line

Mint this 2010 SIGGRAPH / TOG paper. Anisotropic RTE framework.

## Links

- DOI: [10.1145/1778765.1778790](https://doi.org/10.1145/1778765.1778790)
