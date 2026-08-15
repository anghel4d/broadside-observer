---
title: "Cascaded Shadow Maps"
authors:
  - "Wolfgang Engel"
year: 2006
venue: "ShaderX5"
arxiv: null
doi: null
source: "https://developer.download.nvidia.com/SDK/10.5/opengl/src/cascaded_shadow_maps/doc/cascaded_shadow_maps.pdf"
topics:
  - shadows
seed_rank: 356
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "graphics"
relevance_score: 8
cites:
  - title: "Cascaded Shadow Maps"
    url: "https://developer.download.nvidia.com/SDK/10.5/opengl/src/cascaded_shadow_maps/doc/cascaded_shadow_maps.pdf"
    year: 2007
    arxiv: null
    doi: null
  - title: "Variance Shadow Maps"
    url: "https://doi.org/10.1145/1111411.1111440"
    year: 2006
    arxiv: null
    doi: "10.1145/1111411.1111440"
  - title: "Light Space Perspective Shadow Maps"
    url: "https://doi.org/10.2312/EGWR/EGSR04/143-151"
    year: 2004
    arxiv: null
    doi: "10.2312/EGWR/EGSR04/143-151"
see:
  - "359-variance-shadow-maps"
---

# Cascaded Shadow Maps

## One-sentence takeaway

Split the view frustum into nested sub-frusta and give each its own shadow map so nearby texels get far more resolution than the horizon.

## Why it matters here

Anoptic outdoor lighting (GRID COMMAND sun, Broadside decks in daylight) cannot put the whole camera frustum into one 2K shadow map without swimming or peter-panning. CSM is the production split: one cascade per distance band, one lookup in the fragment shader.

## Key ideas

- Partition the camera frustum (practical split scheme / logarithmic-uniform blend) and fit an orthographic light projection to each sub-frustum.
- Render one depth map per cascade; the pixel shader picks the tightest cascade that contains the fragment (or blends at borders).
- Engel’s ShaderX5 chapter (2006, pp. 197–206) is the named source; Dimitrov’s 2007 NVIDIA SDK note is the freely available implementation write-up.
- Pairs with filtering (PCF, VSM, ESM) — cascades solve resolution, not softness.

## Caveats

## Links

- NVIDIA SDK PDF (Dimitrov): https://developer.download.nvidia.com/SDK/10.5/opengl/src/cascaded_shadow_maps/doc/cascaded_shadow_maps.pdf
- Microsoft Learn: https://learn.microsoft.com/en-us/windows/win32/dxtecharts/cascaded-shadow-maps
