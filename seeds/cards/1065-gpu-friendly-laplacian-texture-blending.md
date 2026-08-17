---
title: "GPU-Friendly Laplacian Texture Blending"
authors: ["Bartlomiej Wronski"]
year: 2025
venue: "JCGT"
arxiv: "2502.13945"
doi: null
source: "https://jcgt.org/published/0014/01/02/"
topics: [procedural-content-codegen, vulkan-realtime-rendering]
seed_rank: 1065
seed_batch: "craft-2026-08-17"
reviewed: "2026-08-17"
pool: "graphics"
relevance_score: 9
lineage: procedural-content-codegen
cites:
  - title: "High-Performance By-Example Noise using a Histogram-Preserving Blending Operator"
    url: "https://doi.org/10.1145/3233304"
    year: 2018
    arxiv: null
    doi: "10.1145/3233304"
  - title: "On Histogram-Preserving Blending for Randomized Texture Tiling"
    url: "https://jcgt.org/published/0008/04/02/"
    year: 2019
    arxiv: null
    doi: null
  - title: "Practical Real-Time Hex-Tiling"
    url: "https://jcgt.org/published/0011/03/05/"
    year: 2022
    arxiv: null
    doi: null
see:
  - "015-gpu-driven-rendering-pipelines"
---

# GPU-Friendly Laplacian Texture Blending

## One-sentence takeaway

Blend each Laplacian band with a mask radius matched to its frequency — constructed in-place as mip[i] − mip[i+1] — so terrain/hex-tile/material layering keeps contrast without histogram precompute, extra memory, or a network.

## Why it matters here

GRID COMMAND and Anoptic both paint worlds by blending materials (biome splat, hex tiling, season masks). Naive lerp either seams or washes contrast; Heitz–Neyret / Burley histogram-preserving blends need per-texture precompute. Wronski's JCGT recipe is a handful of extra lower-mip taps in the shader we already run, one artist knob (`NUM_LEVELS` 3–4), and it works on colour *and* normals. Ship-this-week graphics.

## Key ideas

- Linear blend of uncorrelated textures halves variance in the middle of the transition (ghosting / grey band). Laplacian blending spreads that loss across frequencies and spatial radii: high frequencies stay sharp, low frequencies cross wide.
- Do *not* store a Laplacian pyramid. Approximate `L_k ≈ upsample(mip_k) − upsample(mip_{k+1})` from the ordinary mip chain already required for trilinear.
- Cost: `n+1` texture taps, all but one from coarser mips; 3–5 levels are "not observed" to 0.11 ms at 4K×1000 repeats on an RTX 4090. Level-skipping (`mip_k − mip_{k+2}`) halves taps if needed.
- Minification: start the pyramid at `textureQueryLod` and drop fine Laplacians as the surface minifies.
- Dynamic masks can fake Gaussian levels by clamped rescale of a distance field, so the mask itself needs no mip pyramid.

## Caveats

- Saturates the texture unit if you splat many PBR channels × many layers; cache into a virtual texture for terrain.
- Box-filter mips + bilinear upsample can alias on *animated* masks; stronger downsample filters help.
- Clamp results to the source range to kill rare Laplacian overshoot.

## Links

- JCGT: https://jcgt.org/published/0014/01/02/
- PDF: https://jcgt.org/published/0014/01/02/paper.pdf
- arXiv: [2502.13945](https://arxiv.org/abs/2502.13945)
- Live demo: https://jcgt.org/published/0014/01/02/supplement_demo
