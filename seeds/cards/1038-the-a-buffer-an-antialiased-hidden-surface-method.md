---
title: "The A-buffer, an Antialiased Hidden Surface Method"
authors: ["Loren C. Carpenter"]
year: 1984
venue: "SIGGRAPH"
arxiv: null
doi: "10.1145/800031.808585"
source: "https://doi.org/10.1145/800031.808585"
topics: [a-buffer, coverage-masks, order-independent-transparency, reyes]
seed_rank: 1038
seed_batch: "archive-2026-08-16"
reviewed: "2026-08-16"
pool: "graphics"
relevance_score: 10
lineage: a-buffer
cites:
  - title: "The Reyes Image Rendering Architecture"
    url: "https://doi.org/10.1145/37401.37414"
    year: 1987
    arxiv: null
    doi: "10.1145/37401.37414"
  - title: "Compositing Digital Images"
    url: "https://doi.org/10.1145/800031.808606"
    year: 1984
    arxiv: null
    doi: "10.1145/800031.808606"
  - title: "A Hidden-Surface Algorithm with Anti-Aliasing"
    url: "https://doi.org/10.1145/800248.807360"
    year: 1978
    arxiv: null
    doi: "10.1145/800248.807360"
  - title: "A characterization of ten hidden-surface algorithms"
    url: "https://doi.org/10.1145/356625.356626"
    year: 1974
    arxiv: null
    doi: "10.1145/356625.356626"
see:
  - "1010-the-reyes-image-rendering-architecture"
  - "271-the-visibility-buffer-a-cache-friendly-approach-to-deferred-"
  - "338-weighted-blended-order-independent-transparency"
  - "410-depth-peeling-order-independent-transparency"
---

# The A-buffer, an Antialiased Hidden Surface Method

## One-sentence takeaway

Per-pixel fragment lists plus a 4×8 coverage bitmask beat a Z-buffer on edges, transparency, and intersecting surfaces — Reyes' actual visibility mechanism, used on the Genesis Demo.

## Why it matters here

Anoptic is a Vulkan meshlet engine that already has a visibility buffer (271) and OIT recipes (338, 410). The A-buffer is the missing 1984 ancestor: store a *list* of fragments per pixel, not the nearest Z, and resolve coverage with a cheap bitmask. 1010 minted Reyes' architecture last Archive; this is the companion paper that says how visibility and transparency actually worked inside the buckets.

## Key ideas

- Simple fully-covered pixels store a resolved colour in place; complex pixels store a pointer to a front-to-back fragment list (area, Z, colour, 32-bit coverage mask).
- Polygons are clipped to pixel squares; the 4×8 bitmask approximates Catmull's object-precision area sampling at image precision.
- Intersecting fragments split along the intersection, so intersecting transparent surfaces still composite.
- Box-filter (Fourier window) accumulation raises effective resolution many times over a Z-buffer at moderate extra cost.
- Built into Lucasfilm REYES and shipped on Star Trek II: The Wrath of Khan's Genesis sequence.

## Caveats

- Bitmask spacing cannot faithfully sample polygons smaller than one mask bit; several surfaces intersecting in one pixel can fool the intersection approximation.
- Variable-length per-pixel lists blow memory at film sampling rates (Reyes later bucketed to keep a tile of A-buffer in core).
- Modern GPU OIT (depth peeling, weighted blended, visibility buffer) is the hardware descendant; do not remint those.

## Links

- DOI: [10.1145/800031.808585](https://doi.org/10.1145/800031.808585)
- SIGGRAPH History: https://history.siggraph.org/learning/the-a-buffer-an-antialiased-hidden-surface-method-by-carpenter/
