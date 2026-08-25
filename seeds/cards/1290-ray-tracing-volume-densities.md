---
title: "Ray Tracing Volume Densities"
authors: ["James T. Kajiya", "Brian P. Von Herzen"]
year: 1984
venue: "SIGGRAPH"
arxiv: null
doi: "10.1145/800031.808594"
source: "https://doi.org/10.1145/800031.808594"
topics: [subsurface-scattering]
seed_rank: 1290
seed_batch: "sss-translucent-2026-08-25"
reviewed: "2026-08-25"
pool: "graphics"
relevance_score: 8
lineage: subsurface-scattering
---

# Ray Tracing Volume Densities

## One-sentence takeaway

Kajiya–Von Herzen 1984: ray tracing volume densities — the volume RTE paper that predates the rendering equation.

## Problem

Surface ray tracing had no participating media. Need emission + inscatter along a ray through a density field.

## Design

Ray-march volume densities; single and multiple scattering terms; blobby / compact density representations. Lineage: RTE → KvH84 → photon maps / volume path tracing.

## Evidence

SIGGRAPH 1984, DOI 10.1145/800031.808594. Predecessor of Jensen 1998 volume photon maps. Card 152 (1986 RE) cites this; do not reverse-cite RE.

## Limitations

1984, pre-RE. Single-scatter-leaning. Not a BSSRDF. Different paper from Kajiya 1986 (already card 152).

## Implications for Broadside

FMM+RC is Anoptic's far-field 3D GI bet. Participating-media / SSS is the missing local transport operator inside skin, marble, wax, and interiors. Do not claim they already have SSS.

## Bottom line

Mint Kajiya 1984 volumes. Do not remint card 152. Do not put 152 in see (this paper is earlier).

## Links

- DOI: [10.1145/800031.808594](https://doi.org/10.1145/800031.808594)
