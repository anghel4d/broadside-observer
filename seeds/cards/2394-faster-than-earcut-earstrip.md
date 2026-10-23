---
title: "Faster than earcut: triangulating 3.7M map polygons in 489 ms"
authors:
  - "Evgen Bodunov"
year: 2026
venue: "Globus Software blog"
arxiv: null
doi: null
source: "https://globus.software/blog/2026/10/16/cutting-map-polygons/"
topics:
  - "polygon-triangulation"
  - "ear-clipping"
  - "triangle-strips"
  - "branchless-simd"
  - "map-rendering"
seed_rank: 2394
seed_batch: "craft-2026-10-23"
reviewed: "2026-10-23"
pool: "graphics"
relevance_score: 8
lineage: real-time-rendering
cites:
  - title: "Faster than earcut: triangulating 3.7M map polygons in 489 ms"
    url: "https://globus.software/blog/2026/10/16/cutting-map-polygons/"
    year: 2026
    arxiv: null
    doi: null
  - title: "earstrip (C++ header + WebAssembly polygon triangulator)"
    url: "https://github.com/GLMap/earstrip"
    year: 2026
    arxiv: null
    doi: null
  - title: "earcut (Mapbox)"
    url: "https://github.com/mapbox/earcut"
    year: null
    arxiv: null
    doi: null
  - title: "Triangulation by Ear Clipping (David Eberly)"
    url: "https://www.geometrictools.com/Documentation/TriangulationByEarClipping.pdf"
    year: null
    arxiv: null
    doi: null
see:
  - "128-loop-and-blinn-resolution-independent-curve-rendering-using-"
  - "1092-exact-predicates-exact-constructions-combinatorics-mesh-csg"
---

# Faster than earcut: triangulating 3.7M map polygons in 489 ms

## One-sentence takeaway

Bodunov rebuilds an ear-clipping triangulator one idea per commit, timing each on the 3,740,425 polygons of one offline map zoom level. Testing only reflex vertices ("dents"), a convex-polygon shortcut, triangle-strip output, bucketed dents, a branchless count pass and bitmask-marked hits take it from 2,931 ms (constrained Delaunay) to 489 ms on one M4 Pro core. The result ships as `earstrip`, about 14% faster than earcut.hpp natively and 1.4–2.1× faster than earcut.js in the browser.

## Why it matters here

GRID COMMAND maps are full of flat-filled 2D polygons (territory, terrain zones, fog-of-war masks, UI shapes), and Anoptic's 2D and scanline paths need a triangulator that is fast on millions of small, slightly broken, integer-snapped outlines. The post is a ready-made performance ladder showing which ideas pay off and by how much. It also models the "measure every commit" engineering style we want.

## Key ideas

- **Only dents can block an ear.** The vertex inside an ear triangle that lies closest to the corner must be reflex. So the ear test scans a shrinking list of reflex vertices instead of the whole ring: 353M→185M points scanned, 1,119→882 ms.
- **Convexity check that rejects stars.** Requiring every turn to go left and the x direction to change exactly twice catches self-winding stars. Convex rings then skip all ear tests and become single zig-zag strips.
- **Strip output.** Alternating between the two neighbours of the last cut ear makes the output a strip. 21.5M triangles need 35.8M indices instead of 64.5M, and the total drops to 762 ms.
- **Buckets plus branchless counting.** Polygons with more than 32 dents get dent buckets along the long axis of their bounding box. A first pass counts inside-triangle hits with `min` of the three determinants and no branches, and the exact test runs only if the count is nonzero (697→519 ms). For short lists the hits are recorded as a bitmask, and the exact test runs only on the marked dents (→489 ms).
- **Degenerate fallbacks.** Grid rounding can leave a polygon with no ears. The clipper then drops zero-area corners, retries, and finally falls back to CDT. Polygons with 128 or more holes go straight to CDT because bridging each hole costs a full scan (11,675 holes: ear clipping 606 ms vs CDT 17 ms). The map generator now snap-rounds polygons with GEOS so ear clipping can cut every one.

## Caveats

These are vendor blog benchmarks on one map dataset, one CPU, single-threaded. Native C++ gains over earcut.hpp are modest (14%), and most of the browser win comes from the WebAssembly codegen of earcut.hpp. Triangle quality is ignored on purpose (flat fill only), so the output is unsuitable for interpolation or simulation meshes. The 128-hole threshold and the bucket sizes are tuned for OSM-style data.

## Links

- Post: https://globus.software/blog/2026/10/16/cutting-map-polygons/
- earstrip repo: https://github.com/GLMap/earstrip
- npm package: https://www.npmjs.com/package/earstrip
- earcut: https://github.com/mapbox/earcut
- Eberly, Triangulation by Ear Clipping (PDF): https://www.geometrictools.com/Documentation/TriangulationByEarClipping.pdf
