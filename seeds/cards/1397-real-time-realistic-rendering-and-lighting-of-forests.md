---
title: "Real-time Realistic Rendering and Lighting of Forests"
authors:
  - "Eric Bruneton"
  - "Fabrice Neyret"
year: 2012
venue: "Computer Graphics Forum (Eurographics)"
arxiv: null
doi: "10.1111/j.1467-8659.2012.03014.x"
source: "https://hal.inria.fr/hal-00649787/"
topics:
  - "z-fields"
  - "shader-maps"
  - "forest-gi"
seed_rank: 1397
seed_batch: "gi-nature-2026-08-27"
reviewed: "2026-08-27"
pool: "graphics"
relevance_score: 10
lineage: vegetation
cites:
  - title: "Precomputed Atmospheric Scattering"
    url: "https://hal.inria.fr/inria-00288758/"
    year: 2008
    arxiv: null
    doi: "10.1111/j.1467-8659.2008.01245.x"
  - title: "Between Tech and Art: The Vegetation of Horizon Zero Dawn"
    url: "https://www.gdcvault.com/play/1025129/Between-Tech-and-Art-The"
    year: 2018
    arxiv: null
    doi: null
---

# Real-time Realistic Rendering and Lighting of Forests

## One-sentence takeaway

THE forest lighting paper: z-fields plus shader-maps, sun/sky, tree-tree shadows, no popping.

## Why it's lovely

Why you might love this: A forest that lights as a volume of trees, not a pile of meshes. Bruneton–Neyret, still unmatched for distant woods.

## Problem

Drawing every leaf fails. Impostors pop. Tree-tree shadows and sky occlusion are a many-body GI problem. Need a representation that interpolates from a hero tree to a forest BRDF without a pop.

## Design

- Z-fields / shader-maps: precomputed per-tree appearance as a function of view and light.
- Tree-tree shadows and sky lighting without tracing every needle.
- LOD that does not pop because the far representation is the same integral.
- EG 2012 / CGF; HAL hal-00649787.

## Evidence

The academic forest-lighting paper every later foliage talk (HZD, BroadLeaf, UE foliage) still cites for the lighting, not the art pipeline.

## Limitations

Precomputation per tree type. Not a wind/interaction paper. Not BroadLeaf (Tencent cinematic LOD).

## Implications for Broadside

Anoptic woods: Bruneton for lighting, HZD/Tsushima/BroadLeaf for production LOD. Do not fake forest GI with a single SSAO.

## Bottom line

Mint Bruneton–Neyret forests. The lighting paper.

## Links

- DOI: [10.1111/j.1467-8659.2012.03014.x](https://doi.org/10.1111/j.1467-8659.2012.03014.x)
- URL: https://hal.inria.fr/hal-00649787/
