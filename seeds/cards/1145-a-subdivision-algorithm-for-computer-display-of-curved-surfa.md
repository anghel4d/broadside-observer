---
title: "A Subdivision Algorithm for Computer Display of Curved Surfaces"
authors:
  - "Edwin Catmull"
year: 1974
venue: "University of Utah PhD thesis"
arxiv: null
doi: null
source: "https://collections.lib.utah.edu/details?id=709785"
topics:
  - graphics
  - subdivision
  - catmull
  - z-buffer
  - texture
seed_rank: 1145
seed_batch: "perfects-systems-2026-08-13"
reviewed: "2026-08-13"
pool: "graphics"
relevance_score: 10
lineage: gpu-driven-rendering
cites:
  - title: "Recursively Generated B-Spline Surfaces on Arbitrary Topological Meshes"
    url: "https://doi.org/10.1016/0010-4485(78)90110-0"
    year: 1978
    arxiv: null
    doi: "10.1016/0010-4485(78)90110-0"
    card: "1146-recursively-generated-b-spline-surfaces-on-arbitrary-topolog"
  - title: "Smooth Subdivision Surfaces Based on Triangles"
    url: "https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/thesis-10.pdf"
    year: 1987
    arxiv: null
    doi: null
    card: "1147-smooth-subdivision-surfaces-based-on-triangles"
  - title: "An Improved Illumination Model for Shaded Display"
    url: "https://doi.org/10.1145/358876.358882"
    year: 1980
    arxiv: null
    doi: "10.1145/358876.358882"
    card: "1153-an-improved-illumination-model-for-shaded-display"
  - title: "Hierarchical Z-Buffer Visibility"
    url: "https://doi.org/10.1145/166117.166147"
    year: 1993
    arxiv: null
    doi: "10.1145/166117.166147"
    card: "161-hierarchical-z-buffer-visibility"
---

# A Subdivision Algorithm for Computer Display of Curved Surfaces

## One-sentence takeaway

Catmull's thesis: recursive subdivision for curved surfaces plus early Z-buffer and texture-mapping ideas that remade rendering.

## Why it matters here

Subdivision + Z-buffer roots under every modern mesh/tessellation path and hierarchical-Z (161).

## Key ideas

- Recursive surface subdivision for display.
- Per-pixel depth buffer hidden-surface elimination.
- Texture mapping seeds.
- Utah → Pixar founding technical lineage.

## Caveats

- Classic; verify claims against the primary text before engineering decisions.

## Links

- URL: https://collections.lib.utah.edu/details?id=709785
