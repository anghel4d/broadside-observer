---
title: "Comprehensible Rendering of 3-D Shapes"
authors:
  - "Takafumi Saito"
  - "Tokiichiro Takahashi"
year: 1990
venue: "SIGGRAPH"
arxiv: null
doi: "10.1145/97879.97901"
source: "https://doi.org/10.1145/97879.97901"
topics:
  - "g-buffer"
  - "deferred-shading"
  - "npr"
  - "image-space-geometry"
seed_rank: 1067
seed_batch: "archive-2026-08-18"
reviewed: "2026-08-18"
pool: "graphics"
relevance_score: 10
lineage: g-buffer
cites:
  - title: "The Visibility Buffer: A Cache-Friendly Approach to Deferred Shading"
    url: "https://jcgt.org/published/0002/02/04/"
    year: 2013
    arxiv: null
    doi: null
  - title: "Clustered Deferred and Forward Shading"
    url: "https://doi.org/10.1145/2159616.2159619"
    year: 2012
    arxiv: null
    doi: "10.1145/2159616.2159619"
  - title: "Forward+: Bringing Deferred Lighting to the Next Level"
    url: "https://doi.org/10.1145/2407746.2407763"
    year: 2012
    arxiv: null
    doi: null
  - title: "The A-buffer, an Antialiased Hidden Surface Method"
    url: "https://doi.org/10.1145/800031.808585"
    year: 1984
    arxiv: null
    doi: "10.1145/800031.808585"
see:
  - "271-the-visibility-buffer-a-cache-friendly-approach-to-deferred-"
  - "477-clustered-deferred-and-forward-shading"
  - "340-forward-bringing-deferred-lighting-to-the-next-level"
  - "1038-the-a-buffer-an-antialiased-hidden-surface-method"
  - "144-hierarchical-z-buffer-visibility"
---

# Comprehensible Rendering of 3-D Shapes

## One-sentence takeaway

G-buffers: after hidden-surface, keep per-pixel geometric fields (depth, normal, …) and do edges, hatching, and "shading" as image-space post-processes — deferred rendering's missing origin paper.

## Why it matters here

The library has the visibility buffer (271), clustered deferred (477), and Forward+ (340), but not the 1990 paper that named the G-buffer. Anoptic's deferred / visibility-buffer path is exactly Saito–Takahashi's split: geometry pass writes fields, lighting and stylization consume them. GRID COMMAND's readable unit silhouettes, contour enhancement, and hex-map overlays are the original "comprehensible" use, not a later game-engine accident.

## Key ideas

- A G-buffer is one geometric property per pixel (depth, normal, id, …), produced by ordinary projection + hidden-surface.
- Enhancement (discontinuities, ridges, contours, curved hatching) is 2-D image processing on those fields — no 3-D line tracking.
- Geometry / physics (projection, HSR, shading, texturing) is separated from "artificial" enhancement, so you can retune the drawing without re-rendering the scene.
- Applications they actually shipped: edge-enhanced stills, line-drawing illustrations, topographic maps, medical, surface analysis.
- This is NPR and deferred shading in one move; games later kept the G-buffer and dropped the hatching.

## Caveats

- Original paper is illustration-first; the deferred-*lighting* reading is retrospective (Deering 1988 triangle processor is a hardware cousin).
- Fat G-buffers are the bandwidth tax that 271's visibility buffer was invented to dodge.
- No MSAA story; A-buffer (1038) / visibility buffer are the antialiased descendants.

## Links

- DOI: [10.1145/97879.97901](https://doi.org/10.1145/97879.97901)
- Course PDF: https://www.cs.princeton.edu/courses/archive/fall00/cs597b/papers/saito90.pdf
