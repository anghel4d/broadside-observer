---
title: "Precomputed Radiance Transfer for Real-Time Rendering in Dynamic, Low-Frequency Lighting Environments"
authors:
  - "Peter-Pike Sloan"
  - "Jan Kautz"
  - "John Snyder"
year: 2002
venue: "SIGGRAPH"
arxiv: null
doi: "10.1145/566570.566612"
source: "https://doi.org/10.1145/566570.566612"
topics:
  - prt
  - gi
seed_rank: 366
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "graphics"
relevance_score: 8
lineage: radiance-cascades
cites:
  - title: "An Efficient Representation for Irradiance Environment Maps"
    url: "https://doi.org/10.1145/383259.383317"
    year: 2001
    arxiv: null
    doi: "10.1145/383259.383317"
  - title: "The Irradiance Volume"
    url: "https://doi.org/10.1109/38.656788"
    year: 1998
    arxiv: null
    doi: "10.1109/38.656788"
see:
  - "367-an-efficient-representation-for-irradiance-environment-maps"
  - "451-the-irradiance-volume"
---

# Precomputed Radiance Transfer for Real-Time Rendering in Dynamic, Low-Frequency Lighting Environments

## One-sentence takeaway

Project a static object’s transport (self-shadow, interreflection) into a low-order SH basis so a dynamic environment map can relight it in real time with a few dot products.

## Why it matters here

Radiance cascades and DDGI buy fully dynamic geometry by paying rays every frame. PRT is the opposite trade: bake transport once, relight for free. Anoptic needs the contrast — when a Broadside prop is static, SH/PRT is still the cheapest GI it will ever get.

## Key ideas

- Lighting and transfer live in the same spherical-harmonic basis; exit radiance is a matrix–vector product per vertex or texel.
- Diffuse PRT is a short vector (order-2/3 SH); glossy PRT keeps a transfer matrix so view-dependent lobes survive.
- Self-transfer includes shadows and interreflections that a plain irradiance environment map cannot see.
- Assumes static geometry and low-frequency lighting; high-frequency shadows and moving casters are out of scope.

## Caveats

## Links

- DOI: https://doi.org/10.1145/566570.566612
