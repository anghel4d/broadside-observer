---
title: "Neural Caching of Prefiltered Radiance for Specular Lighting"
authors:
  - "Dmitrii Klepikov"
  - "Vladimir Frolov"
year: 2026
venue: "arXiv"
arxiv: "2610.11702"
doi: null
source: "https://arxiv.org/abs/2610.11702"
topics:
  - "vulkan-realtime-rendering"
  - "radiance-cascades-gi"
seed_rank: 2253
seed_batch: "craft-2026-10-09"
reviewed: "2026-10-09"
pool: "graphics"
relevance_score: 6
lineage: radiance-caching
cites:
  - title: "Neural Caching of Prefiltered Radiance for Specular Lighting"
    url: "https://arxiv.org/abs/2610.11702"
    year: 2026
    arxiv: "2610.11702"
    doi: null
see:
  - "1378-real-time-neural-radiance-caching-for-path-tracing"
  - "1812-real-time-radiance-caching-using-chrominance-compression"
  - "231-gi-1-0-a-fast-and-scalable-two-level-radiance-caching-scheme"
---

# Neural Caching of Prefiltered Radiance for Specular Lighting

## One-sentence takeaway

A neural radiance cache that predicts roughness-prefiltered incoming radiance in the reflection direction, combined with the split-sum BRDF lookup, converges faster and gives better specular lighting than standard NRC while staying real-time.

## Why it matters here

Standard neural radiance caching (card 1378) is weakest on glossy reflections, which is exactly where Anoptic's hybrid renderer struggles. Reusing the familiar split-sum BRDF integration map makes this a small, engine-friendly change to an NRC pipeline rather than a new system.

## Key ideas

- **Parameterisation.** Query the cache by surface point and reflection direction instead of outgoing direction.
- **Target.** Roughness-dependent prefiltered incoming radiance, so the network learns what the split-sum approximation needs.
- **Shading.** Outgoing radiance = predicted prefiltered radiance times precomputed BRDF integration term.
- **Online.** Trained during rendering, adapts to dynamic lighting at real-time rates.

## Caveats

Evaluated only on Bunny and Specular Sponza against NRC baselines; split-sum bias carries over (no stretched highlights at grazing angles). Preprint, 2026-10-08.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.11702
- PDF: https://arxiv.org/pdf/2610.11702
