---
title: "A practical extension to microfacet theory for the modeling of varying iridescence"
authors: ["Laurent Belcour", "Pascal Barla"]
year: 2017
venue: "ACM Transactions on Graphics"
arxiv: null
doi: "10.1145/3072959.3073620"
source: "https://doi.org/10.1145/3072959.3073620"
topics: [translucent-materials]
seed_rank: 1288
seed_batch: "sss-translucent-2026-08-25"
reviewed: "2026-08-25"
pool: "graphics"
relevance_score: 8
lineage: translucent-materials
cites:
  - title: "Wavelength dependent reflectance functions"
    url: "https://doi.org/10.1145/192161.192202"
    year: 1994
    arxiv: null
    doi: "10.1145/192161.192202"
  - title: "A comprehensive framework for rendering layered materials"
    url: "https://doi.org/10.1145/2601097.2601139"
    year: 2014
    arxiv: null
    doi: "10.1145/2601097.2601139"
see:
  - "1323-wavelength-dependent-reflectance-functions"
  - "1244-a-comprehensive-framework-for-rendering-layered-materials"
---

# A practical extension to microfacet theory for the modeling of varying iridescence

## One-sentence takeaway

Belcour–Barla 2017: iridescence as a practical microfacet extension (thin-film + GGX), not a full layered Fourier stack.

## Problem

Gondek 1994 spectral interference and Jakob layered are heavy. Need a shader-friendly iridescent lobe.

## Design

Attach a spectral thin-film / air-film term to microfacet theory so roughness and iridescence vary together. Lineage: Gondek, Jakob layered, GGX.

## Evidence

TOG 2017, DOI 10.1145/3072959.3073620. Related to Belcour 2018 atomic layers, different problem (iridescence vs adding).

## Limitations

Thin-film approximation, not general layered RTE. Not SSS.

## Implications for Broadside

Anoptic's mesh path can take a layered BSDF at a hit; coats, varnish, and thin slabs are the same missing appearance stack as SSS. FMM+RC is the far-field GI bet — this paper is the local layered operator. Do not claim Anoptic already has SSS.

## Bottom line

Mint Belcour–Barla 2017 iridescence. Cite Gondek 1994 and Jakob 2014. Cite Walter GGX in this batch.

## Links

- DOI: [10.1145/3072959.3073620](https://doi.org/10.1145/3072959.3073620)
