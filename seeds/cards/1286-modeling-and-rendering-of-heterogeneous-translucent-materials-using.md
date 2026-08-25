---
title: "Modeling and Rendering of Heterogeneous Translucent Materials using the Diffusion Equation"
authors: ["Jiaping Wang", "Shuang Zhao", "Xin Tong", "Stephen Lin", "Zhouchen Lin", "Yue Liu", "Baining Guo", "Heung-Yeung Shum"]
year: 2008
venue: "ACM TOG"
arxiv: null
doi: "10.1145/1330511.1330520"
source: "https://doi.org/10.1145/1330511.1330520"
topics: [subsurface-scattering, translucent-materials]
seed_rank: 1286
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

# Modeling and Rendering of Heterogeneous Translucent Materials using the Diffusion Equation

## One-sentence takeaway

Wang 2008: heterogeneous translucent materials via the diffusion PDE, not a homogeneous dipole.

## Problem

Dipole is homogeneous. Marble with veins and wax with voids need a spatially varying diffusion field.

## Design

Discretize the diffusion equation on the volume / tetrahedral mesh; light as a boundary condition. Lineage: Dipole is homogeneous → Wang08 PDE.

## Evidence

ACM TOG 2008, DOI 10.1145/1330511.1330520. Parent of Arbree 2011 FEM and the 2010 real-time heterogeneous paper.

## Limitations

Diffusion, not RTE. Mesh / volume discretization cost. FEM (Arbree) is the more careful solver.

## Implications for Broadside

Anoptic has a forward+ mesh renderer and is betting on FMM+RC 3D GI. Translucent materials / SSS is the missing appearance model for skin, marble, wax, leaves, and interiors. Do not claim they already have SSS.

## Bottom line

Mint Wang 2008 diffusion PDE. Cite JMLH01; parent of Arbree 2011.

## Links

- DOI: [10.1145/1330511.1330520](https://doi.org/10.1145/1330511.1330520)
