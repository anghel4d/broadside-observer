---
title: "Real-time Radiance Caching using Chrominance Compression"
authors: ["Kostas Vardis", "Georgios Papaioannou", "Anastasios Gkaravelis"]
year: 2014
venue: "JCGT"
arxiv: null
doi: null
source: "http://jcgt.org/published/0003/04/06/"
topics: [gi, radiance-caching, probes]
seed_rank: 1812
seed_batch: "craft-2026-09-13"
reviewed: "2026-09-13"
pool: "realtime"
relevance_score: 10
lineage: radiance-cascades
cites:
  - title: "The Irradiance Volume"
    url: "https://doi.org/10.1109/38.736467"
    year: 1998
    arxiv: null
    doi: "10.1109/38.736467"
  - title: "Adaptive Dynamic Global Illumination"
    url: "https://arxiv.org/abs/2301.05125"
    year: 2023
    arxiv: "2301.05125"
    doi: null
  - title: "Dynamic Diffuse Global Illumination with Ray-Traced Irradiance Fields"
    url: "https://jcgt.org/published/0008/02/01/"
    year: 2019
    arxiv: null
    doi: null
  - title: "Split Radiance Cascades: Real-Time Global Illumination via Sparse Radiance Probes"
    url: "https://arxiv.org/abs/2607.20384"
    year: 2026
    arxiv: "2607.20384"
    doi: null
see:
  - "451-the-irradiance-volume"
  - "1784-adaptive-dynamic-global-illumination"
  - "318-dynamic-diffuse-global-illumination-with-ray-traced-irradian"
  - "208-split-radiance-cascades-real-time-global-illumination-via-sp"
  - "256-scaling-probe-based-real-time-dynamic-global-illumination-fo"
---

# Real-time Radiance Caching using Chrominance Compression

## One-sentence takeaway

Vardis–Papaioannou–Gkaravelis store probe radiance in YCoCg, keep high-order SH for luminance and lower-order for chrominance, and populate caches only where they contribute — buying directional diffuse detail inside a fixed memory budget.

## Why it matters here

Anoptic probe / cascade GI this week sits on Split RC 208, DDGI 318, Scaling Probe 256, Adaptive Dynamic GI 1784, and Irradiance Volume 451. Last Craft already took Adaptive Dynamic GI; the leftover bandwidth craft is *chrominance compression + occupancy-aware cache placement* — spend SH coefficients on intensity edges and skip empty volume. Orthogonal to neural irradiance dirt; compose with cascade merge / probe update schedules.

## Key ideas

- **YCoCg SH split.** Luminance gets higher-order spherical harmonics; chrominance is deliberately lower-order inside the same memory envelope.
- **Occupancy-aware population.** Cache points only where they contribute to surface irradiance — no full-grid empty-space tax.
- **Directional diffuse.** Higher-order luminance SH preserves indirect shadow / intensity directionality that low-order RGB SH washes out.
- **Real-time budget.** Aimed at dynamic environments with arbitrary bounces and view-independent indirect occlusion.

## Caveats

JCGT vol. 3 no. 4 2014 (pages 111–131); PDF at jcgt.org; no DOI/arXiv. Pre-DDGI / pre-RC — validate against Anoptic’s cascade schedule before treating CRC as drop-in. Shader/demo available from author pages. Do not remint 451 / 1784 / 318 / 208 / 256 / Lightcuts 1042.

## Links

- JCGT: http://jcgt.org/published/0003/04/06/
- PDF: http://jcgt.org/published/0003/04/06/paper.pdf
- Author code: https://github.com/kvarcg/publications
