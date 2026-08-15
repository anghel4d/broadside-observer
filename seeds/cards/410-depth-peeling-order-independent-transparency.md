---
title: "Order-Independent Transparency (Depth Peeling)"
authors:
  - "Cass Everitt"
year: 2001
venue: "NVIDIA OpenGL SDK"
arxiv: null
doi: null
source: "https://developer.download.nvidia.com/assets/gamedev/docs/OrderIndependentTransparency.pdf"
topics:
  - oit
seed_rank: 410
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "graphics"
relevance_score: 7
cites:
  - title: "The Visibility Buffer: A Cache-Friendly Approach to Deferred Shading"
    url: "https://jcgt.org/published/0002/02/04/"
    year: 2013
    arxiv: null
    doi: null
  - title: "Weighted Blended Order-Independent Transparency"
    url: "https://jcgt.org/published/0002/02/09/"
    year: 2013
    arxiv: null
    doi: null
see:
  - "271-the-visibility-buffer-a-cache-friendly-approach-to-deferred-"
  - "338-weighted-blended-order-independent-transparency"
---

# Order-Independent Transparency (Depth Peeling)

## One-sentence takeaway

Peel the scene n times with a dual depth test (ordinary LESS plus a shadow-map GREATER against the previous layer) so each pass extracts the next-nearest fragment; composite the layers back-to-front.

## Why it matters here

Correct alpha still has no free lunch on a rasterizer. Depth peeling is the ground-truth multi-pass OIT that Weighted Blended and vis-buffer A-buffers later approximate — the yardstick for Anoptic glass, foliage, and UI overlays.

## Key ideas

- Hardware is object-order; correct blend needs a per-pixel sort. Peeling is that sort, implemented as n full scene passes.
- Dual depth: depth unit 0 is a read-only “already peeled” test (GREATER via shadow mapping); unit 1 writes the new nearest depth.
- Four layers are often enough for CAD/game glass; leftover fragments either drop or get an approximate tail.
- DEPTH_REPLACE texture shader was the 2001 invariance hack so shadow-map depth matched the framebuffer depth.

## Caveats

## Links

- NVIDIA whitepaper: https://developer.download.nvidia.com/assets/gamedev/docs/OrderIndependentTransparency.pdf
