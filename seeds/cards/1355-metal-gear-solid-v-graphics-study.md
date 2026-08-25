---
title: "Metal Gear Solid V - Graphics Study"
authors: ["Adrian Courrèges"]
year: 2017
venue: "adriancourreges.com"
arxiv: null
doi: null
source: "https://www.adriancourreges.com/blog/2017/12/15/mgs-v-graphics-study/"
topics:
  - "fox-engine"
seed_rank: 1355
seed_batch: "fox-engine-2013"
reviewed: "2026-08-25"
pool: "graphics"
relevance_score: 9
lineage: fox-engine
cites:
  - title: "Photorealism Through the Eyes of a FOX: The Core of Metal Gear Solid Ground Zeroes"
    url: "https://www.youtube.com/watch?v=WsmxBE9Gw6A"
    year: 2013
    arxiv: null
    doi: null
  - title: "Tech Analysis: Metal Gear Solid 5's FOX Engine"
    url: "https://www.eurogamer.net/digitalfoundry-tech-analysis-mgs5-fox-engine"
    year: 2013
    arxiv: null
    doi: null
  - title: "Scalable Ambient Obscurance"
    url: "https://doi.org/10.2312/EGGH/HPG12/097-103"
    year: 2012
    arxiv: null
    doi: "10.2312/EGGH/HPG12/097-103"
  - title: "A Reconstruction Filter for Plausible Motion Blur"
    url: "https://doi.org/10.1145/2159616.2159639"
    year: 2012
    arxiv: null
    doi: "10.1145/2159616.2159639"
see:
  - "1344-photorealism-through-the-eyes-of-a-fox-the-core"
  - "1354-tech-analysis-metal-gear-solid-5s-fox-engine"
  - "1349-scalable-ambient-obscurance"
  - "1350-rendering-techniques-in-toy-story-3"
  - "1351-frame-buffer-postprocessing-effects-in-double-s"
  - "1352-fxaa"
  - "1353-a-reconstruction-filter-for-plausible-motion-blur"
  - "367-an-efficient-representation-for-irradiance-environment-maps"
---

# Metal Gear Solid V - Graphics Study

## One-sentence takeaway

Courrèges 2017: frame-by-frame PC dissection of Fox, explicitly based on the GDC 2013 talk — G-buffer layout, dual SSAO (line-integral + SAO), SH irradiance tiles, Kawase bloom, MHBO-style motion blur, FXAA.

## Problem

The 2013 talk showed workflow and claims. Someone had to dump the 2015 PC G-buffer and name the post-process papers.

## Design

Hospital-prologue frame: depth pre-pass, 3×RGBA8 G-buffer (albedo+transmittance, normal+view-roughness, roughness/specular/material/SSS) + reverse 32-bit depth, velocity, then Line-Integral SSAO (TS3, 5 taps) plus a SAO variant, 16×16 SH irradiance atlas (2nd-order, i.e. 9 coefficients), bilateral-upscaled GI, shadow maps, early tone-map to LDR, SSR, Kawase bloom (4 iterations), scatter-bokeh DoF, MHBO-inspired motion blur, 16³ LUT color grade, FXAA. SH irradiance is Ramamoorthi–Hanrahan 2001 (already card 367) — not reminted.

## Evidence

Posted 2017-12-15. Author says some of the information "has already been made public in the GDC 2013 session". Links the talk, DF, and NVIDIA perf guide. This is the source that names SAO, Line Integral SSAO, Kawase, MHBO, FXAA for Fox.

## Limitations

One PC max-settings frame (and a later capture). Reverse-engineering, not a vendor paper. Translucency in the G-buffer alpha is not the same as the talk's half-Lambert wrap — both exist.

## Implications for Broadside

Citation spine for Fox post-process: mint the papers Courrèges named, not a 25% AO radar. 367 already covers SH irradiance probes.

## Bottom line

Mint as the frame-dissection follow-up. It is based on the GDC talk; it is not a second slides deck.

## Links

- Article: https://www.adriancourreges.com/blog/2017/12/15/mgs-v-graphics-study/
