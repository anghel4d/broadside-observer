---
title: "Real-Time Global Illumination Using Precomputed Illuminance Composition with Chrominance Compression"
authors: ["Johannes Jendersie", "David Kuri", "Thorsten Grosch"]
year: 2016
venue: "JCGT"
arxiv: null
doi: null
source: "http://jcgt.org/published/0005/04/02/"
topics: [gi, surfels, illuminance-caches]
seed_rank: 1813
seed_batch: "craft-2026-09-13"
reviewed: "2026-09-13"
pool: "realtime"
relevance_score: 9
lineage: radiance-cascades
cites:
  - title: "Real-time Radiance Caching using Chrominance Compression"
    url: "http://jcgt.org/published/0003/04/06/"
    year: 2014
    arxiv: null
    doi: null
  - title: "Precomputed illuminance composition for real-time global illumination"
    url: "https://doi.org/10.1145/2856400.2856407"
    year: 2016
    arxiv: null
    doi: "10.1145/2856400.2856407"
  - title: "Adaptive Dynamic Global Illumination"
    url: "https://arxiv.org/abs/2301.05125"
    year: 2023
    arxiv: "2301.05125"
    doi: null
  - title: "Lightcuts: A Scalable Approach to Illumination"
    url: "https://doi.org/10.1145/1073204.1073318"
    year: 2005
    arxiv: null
    doi: "10.1145/1073204.1073318"
see:
  - "1784-adaptive-dynamic-global-illumination"
  - "1042-lightcuts-a-scalable-approach-to-illumination"
  - "1785-stochastic-light-culling"
  - "208-split-radiance-cascades-real-time-global-illumination-via-sp"
  - "318-dynamic-diffuse-global-illumination-with-ray-traced-irradian"
---

# Real-Time Global Illumination Using Precomputed Illuminance Composition with Chrominance Compression

## One-sentence takeaway

Jendersie–Kuri–Grosch gather lighting on surfels, propagate along precomputed transport paths through a hierarchy into SH caches (with YCoCg chrominance downsampling), giving dynamic many-light / multi-bounce GI without rebuilding the transport graph each frame.

## Why it matters here

Complement to Vardis CRC 1812 and Adaptive Dynamic GI 1784: where CRC compresses *what* a cache stores, PIC is the leftover *how light gets into caches* — surfel gather + hierarchical precomputed links + progressive multi-bounce. Useful when Anoptic wants dynamic lighting over mostly-static architecture (GRID COMMAND bases, Anoptic interiors) without full path tracing. Chrominance compression reuses the Vardis idea so higher SH bands stay affordable.

## Key ideas

- **Surfel gather, hierarchy propagate.** Local illumination sampled on surfels; light moves along precomputed transport paths through a hierarchy into caches.
- **SH caches for static + dynamic receivers.** Directionality preserved for diffuse and slightly glossy indirect; up to 8 SH bands stressed experimentally.
- **Chrominance downsampling.** YCoCg-style reduction of cache memory (same family as Vardis CRC).
- **Many lights / progressive bounces.** Sparse surfel sampling makes multi-light and multi-bounce practical; any existing pipeline can light the surfels (including skylight).

## Caveats

JCGT vol. 5 no. 4 2016; companion i3D short has DOI `10.1145/2856400.2856407`. Precomputed transport assumes mostly static geometry — dynamic blockers need care (same class of constraint as lightmaps/PRT). Do not remint Vardis (minted 1812 this batch), Adaptive Dynamic GI 1784, Lightcuts 1042, Stochastic Light Culling 1785, Split RC 208, or DDGI 318.

## Links

- JCGT: http://jcgt.org/published/0005/04/02/
- PDF: http://jcgt.org/published/0005/04/02/paper.pdf
- i3D DOI: https://doi.org/10.1145/2856400.2856407
