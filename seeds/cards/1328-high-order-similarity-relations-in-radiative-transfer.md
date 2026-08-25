---
title: "High-Order Similarity Relations in Radiative Transfer"
authors: ["Shuang Zhao", "Ravi Ramamoorthi", "Kavita Bala"]
year: 2014
venue: "SIGGRAPH / TOG"
arxiv: null
doi: "10.1145/2601097.2601104"
source: "https://doi.org/10.1145/2601097.2601104"
topics: [subsurface-scattering, translucent-materials]
seed_rank: 1328
seed_batch: "sss-translucent-2026-08-25"
reviewed: "2026-08-25"
pool: "graphics"
relevance_score: 7
lineage: translucent-materials
cites:
  - title: "The Rendering Equation"
    url: "https://doi.org/10.1145/15922.15902"
    year: 1986
    arxiv: null
    doi: "10.1145/15922.15902"
  - title: "A Radiative Transfer Framework for Rendering Materials with Anisotropic Structure"
    url: "https://doi.org/10.1145/1778765.1778790"
    year: 2010
    arxiv: null
    doi: "10.1145/1778765.1778790"
see:
  - "152-the-rendering-equation"
  - "1299-a-radiative-transfer-framework-for-rendering-materials-with"
---

# High-Order Similarity Relations in Radiative Transfer

## One-sentence takeaway

High-order similarity relations; better similarity for SSS.

## Problem

Predecessor chain g-rescaling theory for diffusion/MC. This paper's job: High-order similarity relations; better similarity for SSS.

## Design

High-order similarity relations; better similarity for SSS. Lineage: g-rescaling theory for diffusion/MC.

## Evidence

SIGGRAPH / TOG 2014. DOI `10.1145/2601097.2601104`. High-order similarity relations; better similarity for SSS.

## Limitations

Read the cited predecessors before treating this as a drop-in Anoptic shader. Do not claim the library already implements it.

## Implications for Broadside

Anoptic has a forward+ mesh renderer and is betting on FMM+RC 3D GI. Translucent materials / SSS is the missing appearance model for skin, marble, wax, leaves, and interiors. Do not claim they already have SSS.

## Bottom line

Mint this 2014 SIGGRAPH / TOG paper. High-order similarity relations; better similarity for SSS.

## Links

- DOI: [10.1145/2601097.2601104](https://doi.org/10.1145/2601097.2601104)
