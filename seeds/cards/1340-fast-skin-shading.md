---
title: "Fast Skin Shading"
authors: ["John Hable", "George Borshukov", "Jim Hejl"]
year: 2009
venue: "ShaderX7"
arxiv: null
doi: null
source: "https://therealmjp.github.io/posts/sss-intro/"
topics: [subsurface-scattering]
seed_rank: 1340
seed_batch: "sss-translucent-2026-08-25"
reviewed: "2026-08-25"
pool: "graphics"
relevance_score: 7
lineage: subsurface-scattering
cites:
  - title: "Efficient Rendering of Human Skin"
    url: "https://www.nvidia.com/docs/IO/40506/Eugene_dEon_Efficient_Skin.pdf"
    year: 2007
    arxiv: null
    doi: "10.2312/egwr/egsr07/147-157"
  - title: "Screen-Space Perceptual Rendering of Human Skin"
    url: "https://doi.org/10.1145/1609967.1609970"
    year: 2009
    arxiv: null
    doi: "10.1145/1609967.1609970"
see:
  - "1272-efficient-rendering-of-human-skin"
  - "1283-screen-space-perceptual-rendering-of-human-skin"
---

# Fast Skin Shading

## One-sentence takeaway

13-tap jittered TSD; Jimenez cites HBB09.

## Problem

Predecessor chain dEon07 cost → Hable taps. This paper's job: 13-tap jittered TSD; Jimenez cites HBB09.

## Design

13-tap jittered TSD; Jimenez cites HBB09. Lineage: dEon07 cost → Hable taps.

## Evidence

ShaderX7 2009. no DOI — use the source URL. 13-tap jittered TSD; Jimenez cites HBB09.

## Limitations

Real-time approximation. Misses off-screen lighting and thick-part transport. Not a replacement for path-traced SSS.

## Implications for Broadside

Anoptic has a forward+ mesh renderer and is betting on FMM+RC 3D GI. Skin is the first character-appearance hole: translucent dermis, not another BRDF lobe. Do not claim Anoptic already has SSS.

## Bottom line

Mint this 2009 ShaderX7 paper. 13-tap jittered TSD; Jimenez cites HBB09.

## Links

- Source: https://therealmjp.github.io/posts/sss-intro/
