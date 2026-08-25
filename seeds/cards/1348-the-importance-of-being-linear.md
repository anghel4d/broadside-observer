---
title: "The Importance of Being Linear"
authors: ["Larry Gritz", "Eugene d'Eon"]
year: 2007
venue: "GPU Gems 3"
arxiv: null
doi: null
source: "https://developer.nvidia.com/gpugems/gpugems3/part-iv-image-effects/chapter-24-importance-being-linear"
topics:
  - "linear-workflow"
seed_rank: 1348
seed_batch: "fox-engine-2013"
reviewed: "2026-08-25"
pool: "graphics"
relevance_score: 9
lineage: linear-workflow
cites:
  []
see:
  - "1344-photorealism-through-the-eyes-of-a-fox-the-core"
  - "1345-real-time-physically-based-rendering"
---

# The Importance of Being Linear

## One-sentence takeaway

Gritz / d'Eon GPU Gems 3 ch.24: lighting math is linear; textures and displays are not. Decode sRGB in, compute, encode out. The standard linear-workflow cite Fox's gamma-1.0 pipeline sits on.

## Problem

Monitors apply a nonlinear transfer. If you multiply lights and albedos in that encoded space you get wrong falloff, wrong mipmaps, and saturated blends. Fox's GDC talk spends a slide on this (4gamer 前編: リニアスペースライティング).

## Design

Identify nonlinear color textures and decode to linear before shading. Leave already-linear data (normals, roughness) alone. Accumulate light in linear HDR. Apply tone-map + display gamma at the end. sRGB hardware samplers make the decode cheap.

## Evidence

GPU Gems 3 (Addison-Wesley, 2007), Chapter 24. Canonical HTML: NVIDIA GPU Gems site. Fox: compute at gamma 1.0, RAW + 18% gray card for references, tone-map before display (4gamer 前編; Digital Foundry 2013).

## Limitations

Chapter, not a TOG paper; no DOI. Does not specify a tone-mapper (Fox uses its own early LDR tone-map — Courrèges). 18% gray / RAW is photographic practice, not this chapter.

## Implications for Broadside

Any Anoptic material path that multiplies light × albedo in sRGB is repeating the bug this chapter exists to kill. Fox treated it as non-negotiable pipeline law.

## Bottom line

Mint Gritz/d'Eon 2007 as the linear-workflow cite. No DOI. Official NVIDIA chapter URL.

## Links

- NVIDIA GPU Gems 3 ch.24: https://developer.nvidia.com/gpugems/gpugems3/part-iv-image-effects/chapter-24-importance-being-linear
