---
title: "A High Accuracy Approximation for Solving Multiple Scattering Problems in Infinite Homogeneous Media"
authors: ["C. C. Grosjean"]
year: 1956
venue: "Il Nuovo Cimento"
arxiv: null
doi: "10.1007/bf02785007"
source: "https://doi.org/10.1007/bf02785007"
topics: [subsurface-scattering]
seed_rank: 1263
seed_batch: "sss-translucent-2026-08-25"
reviewed: "2026-08-25"
pool: "graphics"
relevance_score: 9
lineage: subsurface-scattering
---

# A High Accuracy Approximation for Solving Multiple Scattering Problems in Infinite Homogeneous Media

## One-sentence takeaway

Grosjean's 1956 high-accuracy multiple-scattering approximation — the neutron-transport source of quantized diffusion and the Better Dipole.

## Problem

Classical diffusion fails near the source. Need a closed approximation for infinite homogeneous multiple scattering that QD can quantize.

## Design

Extended-source / improved diffusion for infinite media (Il Nuovo Cimento 1956). Lineage: neutron transport → Grosjean56 → Better Dipole / QD.

## Evidence

Il Nuovo Cimento 1956, DOI 10.1007/bf02785007. Cited by d'Eon 2011 and the 2012 Better Dipole report.

## Limitations

Infinite homogeneous medium. Not a BSSRDF, not a renderer. Graphics only uses the Green's function.

## Implications for Broadside

Anoptic has a forward+ mesh renderer and is betting on FMM+RC 3D GI. Translucent materials / SSS is the missing appearance model for skin, marble, wax, leaves, and interiors. Do not claim they already have SSS.

## Bottom line

Mint Grosjean 1956 as the QD/Better-Dipole source.

## Links

- DOI: [10.1007/bf02785007](https://doi.org/10.1007/bf02785007)
