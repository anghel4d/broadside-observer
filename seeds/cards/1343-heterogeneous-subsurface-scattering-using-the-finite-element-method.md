---
title: "Heterogeneous Subsurface Scattering Using the Finite Element Method"
authors: ["Adam Arbree", "Bruce Walter", "Kavita Bala"]
year: 2011
venue: "IEEE TVCG"
arxiv: null
doi: "10.1109/tvcg.2010.117"
source: "https://doi.org/10.1109/tvcg.2010.117"
topics: [subsurface-scattering, translucent-materials]
seed_rank: 1343
seed_batch: "sss-translucent-2026-08-25"
reviewed: "2026-08-25"
pool: "graphics"
relevance_score: 8
lineage: subsurface-scattering
cites:
  - title: "The Rendering Equation"
    url: "https://doi.org/10.1145/15922.15902"
    year: 1986
    arxiv: null
    doi: "10.1145/15922.15902"
  - title: "Modeling and Rendering of Heterogeneous Translucent Materials using the Diffusion Equation"
    url: "https://doi.org/10.1145/1330511.1330520"
    year: 2008
    arxiv: null
    doi: "10.1145/1330511.1330520"
  - title: "A Radiative Transfer Framework for Rendering Materials with Anisotropic Structure"
    url: "https://doi.org/10.1145/1778765.1778790"
    year: 2010
    arxiv: null
    doi: "10.1145/1778765.1778790"
see:
  - "152-the-rendering-equation"
  - "1286-modeling-and-rendering-of-heterogeneous-translucent-materials-using"
  - "1299-a-radiative-transfer-framework-for-rendering-materials-with"
---

# Heterogeneous Subsurface Scattering Using the Finite Element Method

## One-sentence takeaway

FEM heterogeneous SSS (not Lightcuts).

## Problem

Predecessor chain Wang08 diffusion PDE → Arbree FEM. This paper's job: FEM heterogeneous SSS (not Lightcuts).

## Design

FEM heterogeneous SSS (not Lightcuts). Lineage: Wang08 diffusion PDE → Arbree FEM.

## Evidence

IEEE TVCG 2011. DOI `10.1109/tvcg.2010.117`. FEM heterogeneous SSS (not Lightcuts).

## Limitations

Read the cited predecessors before treating this as a drop-in Anoptic shader. Do not claim the library already implements it.

## Implications for Broadside

Anoptic has a forward+ mesh renderer and is betting on FMM+RC 3D GI. Skin is the first character-appearance hole: translucent dermis, not another BRDF lobe. Do not claim Anoptic already has SSS.

## Bottom line

Mint this 2011 IEEE TVCG paper. FEM heterogeneous SSS (not Lightcuts).

## Links

- DOI: [10.1109/tvcg.2010.117](https://doi.org/10.1109/tvcg.2010.117)
