---
title: "Separable Subsurface Scattering"
authors: ["Jorge Jimenez", "Károly Zsolnai", "Adrian Jarabo", "Christian Freude", "Thomas Auzinger", "Xian-Chun Wu", "Javier van der Pahlen", "Michael Wimmer", "Diego Gutierrez"]
year: 2015
venue: "Computer Graphics Forum"
arxiv: null
doi: "10.1111/cgf.12529"
source: "https://doi.org/10.1111/cgf.12529"
topics: [subsurface-scattering, translucent-materials]
seed_rank: 1284
seed_batch: "sss-translucent-2026-08-25"
reviewed: "2026-08-25"
pool: "graphics"
relevance_score: 9
lineage: subsurface-scattering
cites:
  - title: "Efficient Rendering of Human Skin"
    url: "https://www.nvidia.com/docs/IO/40506/Eugene_dEon_Efficient_Skin.pdf"
    year: 2007
    arxiv: null
    doi: "10.2312/egwr/egsr07/147-157"
  - title: "Screen-Space Perceptual Rendering of Human Skin"
    url: "https://doi.org/10.1145/1609967.1609970"
    year: 2009
    arxiv: null
    doi: "10.1145/1609967.1609970"
see:
  - "1272-efficient-rendering-of-human-skin"
  - "1283-screen-space-perceptual-rendering-of-human-skin"
---

# Separable Subsurface Scattering

## One-sentence takeaway

Jimenez 2015 separable SSS: two 1D convolutions instead of a 2D screen-space kernel.

## Problem

SoG / Jimenez 2009 multi-pass 2D blurs are too many taps for consoles. Need a separable kernel that still looks like skin.

## Design

Separate the SSS kernel into 1D passes; jitter / follow-up for isotropy. Lineage: SoG multi-pass → separable kernel.

## Evidence

Computer Graphics Forum 2015, DOI 10.1111/cgf.12529.

## Limitations

Still screen-space. Not a BSSRDF. Production film uses Chiang-style walks, not this.

## Implications for Broadside

Screen-space and convolution SSS are cheap previews of the same missing look. Anoptic still needs a real BSSRDF / path-traced SSS under FMM+RC, not a fullscreen blur. Do not claim they already have SSS.

## Bottom line

Mint separable SSS. Cite Jimenez 2009 and d'Eon 2007.

## Links

- DOI: [10.1111/cgf.12529](https://doi.org/10.1111/cgf.12529)
