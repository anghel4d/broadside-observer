---
title: "Geometrical Considerations and Nomenclature for Reflectance"
authors: ["F. E. Nicodemus", "J. C. Richmond", "J. J. Hsia", "I. W. Ginsberg", "T. Limperis"]
year: 1977
venue: "NBS Monograph 160"
arxiv: null
doi: "10.6028/nbs.mono.160"
source: "https://doi.org/10.6028/nbs.mono.160"
topics: [subsurface-scattering, translucent-materials]
seed_rank: 1251
seed_batch: "sss-translucent-2026-08-25"
reviewed: "2026-08-25"
pool: "graphics"
relevance_score: 10
lineage: subsurface-scattering
---

# Geometrical Considerations and Nomenclature for Reflectance

## One-sentence takeaway

Nicodemus names BRDF, BTDF, and BSSRDF — the radiometric dictionary graphics still uses.

## Problem

Reflectance vocabulary was lab-specific. A graphics BSSRDF needs the official 8D definition before anyone writes Rd(r).

## Design

NBS Monograph 160: geometrical reflectance nomenclature, including the bidirectional scattering-surface reflectance-distribution function.

## Evidence

NBS Monograph 160, 1977, DOI 10.6028/nbs.mono.160. Cited by Hanrahan–Krueger and JMLH01.

## Limitations

Nomenclature, not an algorithm. No renderer, no dipole.

## Implications for Broadside

Anoptic has a forward+ mesh renderer and is betting on FMM+RC 3D GI. Translucent materials / SSS is the missing appearance model for skin, marble, wax, leaves, and interiors. Do not claim they already have SSS.

## Bottom line

Mint Nicodemus 1977 as the BSSRDF definition. Cite it from JMLH01; do not remint Kajiya RE.

## Links

- DOI: [10.6028/nbs.mono.160](https://doi.org/10.6028/nbs.mono.160)
