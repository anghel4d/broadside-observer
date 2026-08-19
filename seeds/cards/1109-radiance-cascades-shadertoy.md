---
title: "Radiance Cascades (Shadertoy)"
authors:
  - "fad"
year: 2023
venue: "Shadertoy"
arxiv: null
doi: null
source: "https://www.shadertoy.com/view/mtlBzX"
topics:
  - radiance-cascades
  - gi
  - shadertoy
seed_rank: 1109
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
see:
  - "005-radiance-cascades-a-novel-approach-to-calculating-global-ill"
  - "1108-exilecon-2023-rendering-path-of-exile-2"
  - "1110-radiance-cascades-3d-uv-space-shadertoy"
  - "1111-gm-shaders-guest-radiance-cascades"
---

# Radiance Cascades (Shadertoy)

## One-sentence takeaway

fad's Sep 2023 Shadertoy (`mtlBzX`) is the first public runnable 2D Radiance Cascades demo — skybox integral included — and the fork root every later 2D port cites.

## Why it matters here

Papers describe the merge; this is the implementation people actually copy. Yaazarai's GameMaker/GM Shaders work, jason.today's walkthrough, and the Godot ports all start from fad (2023-09-02) → Quinchilion (2023-11-23, `clVcD3`) → Suslik (2024-04, `MctXRr` then Experimental Testbed `4ctXD8`). For Anoptic, this is the living 2D reference while 3D world-space remains unsolved in the paper record.

## Key ideas

- Flatland cascade hierarchy with temporal merge forced by Shadertoy's four-buffer limit (light lag / flicker as a platform artifact, not an algorithm requirement).
- Skybox integral folded into the highest-angular cascade — the piece later tutorials (GM Shaders) call out as missing from their own writeup.
- Fork tree became the community testbed for bilinear-fix (Mytino `4clcWn`), parallax-fix (mxcop `XcfyDj`), and interval-length calculators.
- Suslik's Apr 2024 **RC Experimental Testbed** (`4ctXD8`) is the most-cited 2D fork, not a second algorithm.

## Caveats

- Shadertoy demo, not a refereed paper. Temporal merging and buffer packing are Shadertoy constraints.
- 2D / screenspace only. Do not read this as a 3D O(n³) solution.
- Author is the Shadertoy handle **fad**; the technique is Sannikov's.

## Links

- fad (canonical): https://www.shadertoy.com/view/mtlBzX
- Suslik Experimental Testbed: https://www.shadertoy.com/view/4ctXD8
- Fork tree notes: https://radiance.wiki/implementations/shadertoys
- Interactive playground: https://radiance-cascades.com/
