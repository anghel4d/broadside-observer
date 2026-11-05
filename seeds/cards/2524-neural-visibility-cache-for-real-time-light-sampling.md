---
title: "Neural Visibility Cache for Real-Time Light Sampling"
authors:
  - "Jakub Bokšanský"
  - "Daniel Meister"
year: 2025
venue: "Journal of Computer Graphics Techniques (JCGT) 14(2)"
arxiv: null
doi: null
source: "https://jcgt.org/published/0014/02/01/"
topics:
  - "radiance-cascades-gi"
  - "vulkan-realtime-rendering"
seed_rank: 2524
seed_batch: "craft-2026-11-05"
reviewed: "2026-11-05"
pool: "graphics"
relevance_score: 8
cites:
  - title: "Neural Visibility Cache for Real-Time Light Sampling"
    url: "https://jcgt.org/published/0014/02/01/"
    year: 2025
    arxiv: null
    doi: null
see: ["1374-spatiotemporal-reservoir-resampling-for-real-time-ray-tracing-wi", "1375-restir-gi-path-resampling-for-real-time-path-tracing", "1378-real-time-neural-radiance-caching-for-path-tracing", "1852-rcpg-real-time-product-path-guiding-using-radiance-cascades"]
---

# Neural Visibility Cache for Real-Time Light Sampling

## One-sentence takeaway

An online-trained fully-fused MLP with multi-resolution hash-grid encoding caches light↔position visibility and feeds it into weighted reservoir sampling, giving a ReSTIR-compatible many-light sampler (and an approximate Neural DI that skips shadow rays except for training) at a few milliseconds per frame.

## Why it matters here

Radiance Cascades already want a cheap visibility / transport oracle between probes and emitters; this JCGT recipe is the practical "small online MLP + hash grid + WRS" pattern that plugs into ReSTIR candidate generation or recovers after abrupt visibility changes — closer to what Anoptic can ship than a full neural path tracer.

## Key ideas

- **Visibility as the guide.** Network predicts $V(\text{light}, x)$; WRS combines that with BRDF weight for unbiased light selection.
- **Architecture.** Fully-fused MLP (instant-NGP style) + multi-resolution hash-grid encoding for online train/infer at realtime rates on modern GPUs.
- **ReSTIR fit.** Drop in for initial candidates or for recovery when spatiotemporal reservoirs go stale after big visibility changes.
- **Neural DI mode.** Approximate direct lighting without shadow rays except those used to train the cache; kitchen scene ~4.41 ms vs screen-space ReSTIR 3.61 ms with lower FLIP in occlusions.
- **Scale.** Works on individual lights or clusters, so light count is not hard-capped by the network width.

## Caveats

AMD authors; engine integration still needs a ray-traced training budget. Approximate Neural DI is biased; the WRS path is the unbiased one. Online training cost is ongoing, not a bake. I read the JCGT abstract and introduction (PDF).

## Links

- JCGT page: https://jcgt.org/published/0014/02/01/
- PDF: https://jcgt.org/published/0014/02/01/paper.pdf
