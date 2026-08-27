---
title: "Reflections and Volumetrics of Killzone Shadow Fall"
authors:
  - "Michal Valient"
year: 2014
venue: "SIGGRAPH Advances in Real-Time Rendering"
arxiv: null
doi: null
source: "https://advances.realtimerendering.com/s2014/"
topics:
  - "production-reflections"
  - "SSR"
  - "parallax-cubemaps"
  - "Killzone"
seed_rank: 1428
seed_batch: "mirrors-2026-08-27"
reviewed: "2026-08-27"
pool: "graphics"
relevance_score: 9
lineage: mirrors
cites:
  - title: "Taking Killzone Shadow Fall Image Quality into the Next Generation"
    url: "https://www.guerrilla-games.com/media/News/Files/GDC2014_Valient_Killzone_Graphics.pdf"
    year: 2014
    arxiv: null
    doi: null
  - title: "Local Image-based Lighting with Parallax-corrected Cubemaps"
    url: "https://doi.org/10.1145/2343045.2343094"
    year: 2012
    arxiv: null
    doi: "10.1145/2343045.2343094"
  - title: "Stochastic Screen-Space Reflections"
    url: "https://www.ea.com/seed/news/siggraph-2015-stochastic-screen-space-reflections"
    year: 2015
    arxiv: null
    doi: null
see:
  - "1386-stochastic-screen-space-reflections"
  - "1426-local-image-based-lighting-with-parallax-corrected-cubemaps"
  - "1425-hi-z-screen-space-cone-traced-reflections"
  - "267-moving-frostbite-to-physically-based-rendering"
---

# Reflections and Volumetrics of Killzone Shadow Fall

## One-sentence takeaway

A shipping PS4 title treated reflections as a first-class lighting citizen: SSR, parallax cubemaps, and a distant cube, all matching the same BRDF.

## Why it's lovely

Why you might love this: THE production mirror/glass talk. Not a paper about tracing more rays — a paper about making wet streets, glass, and chrome *look* like the rest of the lighting model, at 1080p on a launch console.

## Problem

SSR alone holes out off-screen and occluded geometry. Cubemaps alone put the window in the wrong place and cannot reflect a moving actor. Planar stencil mirrors do not work on arbitrary glossy floors. Killzone needed one reflection that artists could trust like a light.

## Design

- Three-stage fallback, each sharing gloss/Fresnel with the analytic lights: screen-space ray march (dynamic, multiple distances) → artist-placed localized parallax cubemap zones → static background cube.
- Ray-trace at half-res with interleaved 2×2, Hi-Z-ish stepping scaled by smoothness; hit color / mask / gloss.
- Generate a mip chain from the SSR buffer that matches the BRDF cone the same way cubemap mips do; temporal reprojection both stabilizes and fake-supersamples; secondary bounces from last frame's reflection buffer.
- Compose with cubemaps using the miss mask. Localized cubes are tiled, two-pass baked (first bounce clean, second with reflections on), citing Lagarde 2012.

## Evidence

SIGGRAPH 2014 Advances + GDC 2014 'Taking Killzone Shadow Fall Image Quality into the Next Generation' (same system, public PDF). Shipped as a PS4 launch title. Every later hybrid (UE, Frostbite, Decima-1357 lighting) copied the SSR→local cube→sky cube stack. Distinct from Stachowiak 1386 (2015, stochastic) and from Decima 2017.

## Limitations

Still screen-space at the dynamic layer; you will not see yourself. Cubemap zones are artist labor and mostly static. Talk also covers volumetrics — the keep is the reflection stack, not the fog. Guerrilla later rebuilt lighting in Decima; this is the Killzone-era paper of record.

## Implications for Broadside

Anoptic should ship this *stack*, not a single technique: Hi-Z cone SSR (1425) for what is on screen, Lagarde parallax probes (1426) for the room, infinite IBL for the sky, one BRDF cone to bind them. That is production mirrors. Do not wait for RTX.

## Bottom line

Mint Valient 2014. THE shipping mirror/glass talk, not another SSR clone and not a raytracing tech paper.

## Links

- URL: https://advances.realtimerendering.com/s2014/
- GDC PDF: https://www.guerrilla-games.com/media/News/Files/GDC2014_Valient_Killzone_Graphics.pdf
