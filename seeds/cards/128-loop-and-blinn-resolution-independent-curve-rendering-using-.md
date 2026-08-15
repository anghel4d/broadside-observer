---
title: "Loop and Blinn Resolution Independent Curve Rendering using Programmable Graphics Hardware"
authors:
  - "Charles Loop"
  - "Jim Blinn"
year: 2005
venue: "SIGGRAPH"
arxiv: null
doi: "10.1145/1073204.1073303"
source: "https://doi.org/10.1145/1073204.1073303"
topics:
  - text
  - graphics
seed_rank: 128
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "engines"
relevance_score: 9
cites:
  - title: "A user-programmable vertex engine"
    url: "https://doi.org/10.1145/383259.383274"
    year: 2001
    arxiv: null
    doi: "10.1145/383259.383274"
  - title: "Silhouette maps for improved texture magnification"
    url: "https://doi.org/10.1145/1058129.1058139"
    year: 2004
    arxiv: null
    doi: "10.1145/1058129.1058139"
  - title: "Bixels: Picture Samples with Sharp Embedded Boundaries"
    url: "https://doi.org/10.2312/EGWR/EGSR04/255-264"
    year: 2004
    arxiv: null
    doi: "10.2312/EGWR/EGSR04/255-264"
  - title: "Distance approximations for rasterizing implicit curves"
    url: "https://doi.org/10.1145/174462.174531"
    year: 1994
    arxiv: null
    doi: "10.1145/174462.174531"
  - title: "Reliable two-dimensional graphing methods for mathematical formulae with two free variables"
    url: "https://doi.org/10.1145/383259.383267"
    year: 2001
    arxiv: null
    doi: "10.1145/383259.383267"
  - title: "Feature-Based Textures"
    url: "https://doi.org/10.2312/EGWR/EGSR04/265-274"
    year: 2004
    arxiv: null
    doi: "10.2312/EGWR/EGSR04/265-274"
---

# Loop and Blinn Resolution Independent Curve Rendering using Programmable Graphics Hardware

## One-sentence takeaway

Loop and Blinn render quadratic and cubic Bézier paths by assigning canonical implicit coordinates to the control hull and evaluating `u² − v` (or `k³ − lmn` for cubics) in the pixel shader — a resolution-independent inside test that survives projection.

## Why it matters here

Broadside text and vector HUD should stay curved under camera zoom without tessellating per frame. The cheap quadratic path (`f = u² − v`, sign flip for concave) is the GPU cousin of Green’s SDF atlas, and this is the paper Green cites.

## Key ideas

- Every rational quadratic is a projection of the canonical parabola `f(u, v) = u² − v`. Put texture coordinates `[0,0]`, `[½,0]`, `[1,1]` on Bézier `b0, b1, b2`; the rasterizer interpolates `(u, v)` projectively; the shader tests the sign. A per-triangle `±1` flips convex vs concave without a second shader.
- TrueType pipeline: insert on-curve points between adjacent off-curve points, subdivide overlapping hulls, constrained Delaunay, drop exterior triangles. Interior flats get dummy coords that always pass; curve triangles use the quadratic shader. Tessellation is a one-time CPU preprocess; the GPU then applies any projective transform.
- Cubics classify as serpentine / loop / cusp via the inflection polynomial `I(t)`. All three share the homogeneous implicit `c = k³ − lmn`; `k,l,m,n` are packed as texture coordinates on the four control points and interpolated, so the shader stays a few multiplies.
- Antialiasing uses a screen-space estimate of the implicit’s gradient to put a thin smooth band around the zero set. Degenerate viewpoints (hull folds under projection) are handled as a separate case in §6.
- Representation size tracks design-time curve complexity, not pixel count — a vector image is a mosaic of these hull triangles and can be deformed as a texture on 3D meshes.

## Caveats

## Links

- DOI: [10.1145/1073204.1073303](https://doi.org/10.1145/1073204.1073303)
- PDF (Microsoft Research): https://www.microsoft.com/en-us/research/wp-content/uploads/2005/01/p1000-loop.pdf
- MSR page: https://www.microsoft.com/en-us/research/publication/resolution-independent-curve-rendering-using-programmable-graphics-hardware/
