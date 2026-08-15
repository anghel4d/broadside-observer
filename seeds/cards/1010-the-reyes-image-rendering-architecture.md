---
title: "The Reyes Image Rendering Architecture"
authors: ["Robert L. Cook", "Loren Carpenter", "Edwin Catmull"]
year: 1987
venue: "SIGGRAPH"
arxiv: null
doi: "10.1145/37401.37414"
source: "https://doi.org/10.1145/37401.37414"
topics: [micropolygons, production-rendering, stochastic-sampling]
seed_rank: 1010
seed_batch: "archive-2026-08-14"
reviewed: "2026-08-14"
pool: "engines"
relevance_score: 9
lineage: production-rendering
cites:
  - title: "The Rendering Equation"
    url: "https://doi.org/10.1145/15922.15902"
    year: 1986
    arxiv: null
    doi: "10.1145/15922.15902"
  - title: "Distributed Ray Tracing"
    url: "https://doi.org/10.1145/800031.808601"
    year: 1984
    arxiv: null
    doi: "10.1145/800031.808601"
see:
  - "152-the-rendering-equation"
  - "090-nanite-a-deep-dive"
---

# The Reyes Image Rendering Architecture

## One-sentence takeaway

Dice every primitive into micropolygons, shade in object space, hide with jittered Z in screen space, bucket so the working set stays in memory — Pixar's architecture for "arbitrarily many primitives" at film quality.

## Why it matters here

Anoptic is a real-time Vulkan ECS, not prman, but Reyes is the production-engine paper that invented the "one common shaded point type, shade before visibility, process a bucket at a time" pipeline. Nanite (090) is the real-time descendant of "dice to the pixel"; reading Reyes is how you see what GPU-driven pipelines still owe the 1987 design.

## Key ideas

- All geometry becomes world-space micropolygons (subpixel quads). Shading and texturing run in the object's local space, which makes texture filtering natural.
- Visibility is stochastic point sampling (jittered subpixels) into a Z-buffer; no clipping, no inverse perspective.
- Geometric and texture locality plus screen-space buckets keep paging down and let the model contain arbitrarily many primitives.
- The Z-buffer is also a back door: ray-traced or radiosity samples can composite in 3D before filtering.
- Design principles (shade before hide, bound the working set, vectorize shading over grids) are the paper's real artifact, not a single kernel.

## Caveats


## Links

- DOI: [10.1145/37401.37414](https://doi.org/10.1145/37401.37414)
- PDF: https://www.cs.cmu.edu/afs/cs/academic/class/15869-f11/www/readings/cook87_reyes.pdf
- SIGGRAPH History: https://history.siggraph.org/learning/the-reyes-image-rendering-architecture-by-cook-carpenter-and-catmull/
