---
title: "Stochastic Screen-Space Reflections"
authors:
  - "Tomasz Stachowiak"
  - "Yuriy O'Donnell"
year: 2015
venue: "SIGGRAPH Advances in Real-Time Rendering"
arxiv: null
doi: null
source: "https://www.ea.com/seed/news/siggraph-2015-stochastic-screen-space-reflections"
topics:
  - "SSR"
  - "screen-space"
seed_rank: 1386
seed_batch: "gi-nature-2026-08-27"
reviewed: "2026-08-27"
pool: "graphics"
relevance_score: 8
lineage: realtime-gi
cites:
  - title: "Moving Frostbite to Physically Based Rendering"
    url: "https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf"
    year: 2014
    arxiv: null
    doi: null
  - title: "Efficient GPU Screen-Space Ray Tracing"
    url: "https://jcgt.org/published/0003/04/04/"
    year: 2014
    arxiv: null
    doi: null
see:
  - "267-moving-frostbite-to-physically-based-rendering"
---

# Stochastic Screen-Space Reflections

## One-sentence takeaway

Stochastic Hi-Z traces plus temporal resolve — the SSR every engine cloned after 2015.

## Why it's lovely

Why you might love this: THE SSR paper for games. One noisy Hi-Z ray, a temporal filter, and wet floors suddenly looked like contact.

## Problem

Raster games cannot afford cubemap-per-pixel or RT reflections. Deterministic screen-space ray march is either stair-stepped or too expensive. Glossy reflections need many taps; a single march cannot do roughness.

## Design

- Hi-Z screen-space ray march (Uludag-class acceleration).
- Stochastic: one (or few) rays per pixel, BRDF-importance sampled, so roughness is noise not blur.
- Temporal accumulation + neighborhood clamp; treat SSR as a sparse Monte Carlo estimate of the screen-space reflection integral.
- SEED/DICE SIGGRAPH Advances 2015; EA SEED writeup is the artifact.

## Evidence

Shipped in Frostbite titles; every later engine SSR (UE, Unity HDRP, custom) copies the stochastic+temporal pattern.

## Limitations

Screen-space: missing off-screen, missing backfaces. Not GI (that's SSGI/GIBS/Lumen). Do not confuse with McGuire DDA SSR (JCGT) — this is the stochastic production talk.

## Implications for Broadside

Anoptic wet floors and puddles (see Lagarde wet surfaces) still start with this SSR, not a cubemap. Pair with Frostbite PBR (267).

## Bottom line

Mint stochastic SSR. The game-reflection paper.

## Links

- URL: https://www.ea.com/seed/news/siggraph-2015-stochastic-screen-space-reflections
