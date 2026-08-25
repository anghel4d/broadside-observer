---
title: "Scalable Ambient Obscurance"
authors: ["Morgan McGuire", "Michael Mara", "David Luebke"]
year: 2012
venue: "HPG"
arxiv: null
doi: "10.2312/EGGH/HPG12/097-103"
source: "https://doi.org/10.2312/EGGH/HPG12/097-103"
topics:
  - "ambient-occlusion"
seed_rank: 1349
seed_batch: "fox-engine-2013"
reviewed: "2026-08-25"
pool: "graphics"
relevance_score: 9
lineage: ambient-occlusion
cites:
  - title: "The alchemy screen-space ambient obscurance algorithm"
    url: "https://doi.org/10.1145/2018323.2018327"
    year: 2011
    arxiv: null
    doi: "10.1145/2018323.2018327"
  - title: "Horizon-Based Ambient Occlusion"
    url: "https://doi.org/10.1145/1401032.1401061"
    year: 2008
    arxiv: null
    doi: "10.1145/1401032.1401061"
see:
  - "401-horizon-based-ambient-occlusion"
  - "484-finding-next-gen-cryengine-2-ssao"
  - "1350-rendering-techniques-in-toy-story-3"
  - "1344-photorealism-through-the-eyes-of-a-fox-the-core"
  - "1355-metal-gear-solid-v-graphics-study"
---

# Scalable Ambient Obscurance

## One-sentence takeaway

McGuire / Mara / Luebke HPG 2012: AlchemyAO made cache-efficient and depth-only, with a hard real-time bound. Courrèges reverse-engineered Fox SSAO as a SAO variant plus Line-Integral SSAO.

## Problem

AlchemyAO (HPG/JCGT 2011) needed position+normal buffers and got slower as the world-space radius grew. Games needed a depth-only pass that stays fast at 1080p+.

## Design

Keep Alchemy's math. Pre-filter the depth buffer; reconstruct high-precision positions (and optionally normals) from depth; architecture-aware sampling. Integrates with forward or deferred. Fox's variant (Courrèges): no depth mips, reads the G-buffer normal, half-resolution, 11 taps, same contrast filter and bilateral box-filter as the paper.

## Evidence

HPG 2012. DOI 10.2312/EGGH/HPG12/097-103. Authors are McGuire, Mara, Luebke — not Bavoil/Lottes (HBAO / FXAA). NVIDIA/casual-effects PDF. Courrèges 2017 names SAO explicitly as Fox's second SSAO pass.

## Limitations

Fox does not ship the paper's depth-mip hierarchy. Alchemy 2011 is the predecessor (not minted; cited). HBAO is already card 401.

## Implications for Broadside

Anoptic has no SSAO. If a screen-space AO pass is added, SAO is the 2012 production default Courrèges found in Fox.

## Bottom line

Mint SAO with the real authors and HPG DOI. Pair with the Toy Story 3 line-integral talk.

## Links

- DOI: https://doi.org/10.2312/EGGH/HPG12/097-103
- PDF: https://research.nvidia.com/sites/default/files/publications/McGuire12SAO.pdf
- Project: http://casual-effects.com/research/McGuire2012SAO/
