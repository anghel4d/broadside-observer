---
title: "GM Shaders Guest: Radiance Cascades"
authors:
  - "Yaazarai (Alex)"
year: 2024
venue: "WIP"
arxiv: null
doi: null
source: "https://mini.gmshaders.com/p/radiance-cascades"
topics:
  - radiance-cascades
  - gi
  - tutorial
seed_rank: 1111
seed_batch: "radiance-cascades-wip-2026-08-20"
reviewed: "2026-08-20"
pool: "graphics"
relevance_score: 8
lineage: radiance-cascades
cites:
  - title: "Radiance Cascades: A Novel Approach to Calculating Global Illumination"
    url: "https://github.com/Raikiri/RadianceCascadesPaper"
    year: 2023
    arxiv: null
    doi: null
  - title: "Radiance Cascades (Shadertoy)"
    url: "https://www.shadertoy.com/view/mtlBzX"
    year: 2023
    arxiv: null
    doi: null
see:
  - "005-radiance-cascades-a-novel-approach-to-calculating-global-ill"
  - "1109-radiance-cascades-shadertoy"
  - "1112-radiance-cascades-building-real-time-global-illumination"
---

# GM Shaders Guest: Radiance Cascades

## One-sentence takeaway

Yaazarai's two-part GM Shaders series (Apr / Jul 2024) is the community's standard 2D technique writeup: penumbra hypothesis, 4× cascade scaling, bilinear merge, then direction-first probes and pre-averaging.

## Why it matters here

This is not a clone Shadertoy dump. Part 1 teaches the cascade memory layout and merge; Part 2 is the code deep-dive that jason.today cites as the biggest direct influence, and that Godot ports mix with jason's JS. Direction-first ordering + pre-averaging cuts the merge from 16 taps to one hardware sample — the practical 2D layout Anoptic should know before inventing a Vulkan 3D packing.

## Key ideas

- Part 1 (2024-04-13): penumbra hypothesis; cascade N has 1/4× probes and 4× rays vs N−1 so every cascade is the same texel count; reverse merge with 4-nearest-probe bilinear and a visibility term.
- Skybox integral is explicitly deferred to fad's Shadertoy.
- Part 2 (2024-07-13): pixel-space (not UV-space) raymarching to avoid non-square SDF skew; direction-first probe packing; pre-averaging; <100-line merge shader; RTX 3080 frame-time comparison vs the naive layout.
- Companion GameMaker repos: `Yaazarai/RadianceCascades` (from fad) and `Yaazarai/GMShaders-Radiance-Cascades`.

## Caveats

- Blog / tutorial, not a refereed paper. Screenspace 2D raymarching only; the author disclaims 3D.
- Still WIP on ringing, light leaks, non-linear attenuation — same open list as the founding paper.
- Hosted on Xor's GM Shaders Substack; author credit is Yaazarai (Alex).

## Links

- Part 1: https://mini.gmshaders.com/p/radiance-cascades
- Part 2: https://mini.gmshaders.com/p/radiance-cascades2
- GameMaker demo: https://github.com/Yaazarai/RadianceCascades
- Part 2 source: https://github.com/Yaazarai/GMShaders-Radiance-Cascades
