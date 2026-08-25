---
title: "Screen-Space Perceptual Rendering of Human Skin"
authors: ["Jorge Jimenez", "Veronica Sundstedt", "Diego Gutierrez"]
year: 2009
venue: "ACM TAP / APGV"
arxiv: null
doi: "10.1145/1609967.1609970"
source: "https://doi.org/10.1145/1609967.1609970"
topics: [subsurface-scattering]
seed_rank: 1283
seed_batch: "sss-translucent-2026-08-25"
reviewed: "2026-08-25"
pool: "graphics"
relevance_score: 9
lineage: subsurface-scattering
---

# Screen-Space Perceptual Rendering of Human Skin

## One-sentence takeaway

Jimenez 2009 screen-space perceptual skin — SSS as a framebuffer blur instead of a texture-space gather.

## Problem

Texture-space diffusion (TSD) costs a UV unwrap and extra renders. Games want a G-buffer-only skin pass.

## Design

Screen-space convolution of irradiance / albedo with a perceptual skin profile. Lineage: TSD cost → Jimenez09 SSSS → separable 2015.

## Evidence

ACM TAP / APGV 2009, DOI 10.1145/1609967.1609970.

## Limitations

Screen-space misses off-screen lighting and thick-ear transport. Separable SSS is the cheaper sequel, not a more correct one.

## Implications for Broadside

Screen-space and convolution SSS are cheap previews of the same missing look. Anoptic still needs a real BSSRDF / path-traced SSS under FMM+RC, not a fullscreen blur. Do not claim they already have SSS.

## Bottom line

Mint Jimenez 2009. Cite d'Eon 2007 / Green; parent of separable 2015.

## Links

- DOI: [10.1145/1609967.1609970](https://doi.org/10.1145/1609967.1609970)
