---
title: "Triangle Scan Conversion using 2D Homogeneous Coordinates"
authors:
  - "Marc Olano"
  - "Trey Greer"
year: 1997
venue: "SIGGRAPH/Eurographics Workshop on Graphics Hardware (HWWS '97), 89–95"
arxiv: null
doi: "10.1145/258694.258723"
source: "https://www.cs.cmu.edu/afs/cs/academic/class/15869-f11/www/readings/olano97_homogeneous.pdf"
topics:
  - rasterization
  - homogeneous-coordinates
  - clipping
  - software-rasterizer
seed_rank: 2279
seed_batch: "archive-2026-10-14"
reviewed: "2026-10-14"
pool: "graphics"
relevance_score: 8
lineage: rasterization
see:
  - 1071-a-parallel-algorithm-for-polygon-rasterization
cites:
  - title: "Triangle Scan Conversion using 2D Homogeneous Coordinates"
    url: "https://doi.org/10.1145/258694.258723"
    year: 1997
    arxiv: null
    doi: "10.1145/258694.258723"
  - title: "A Parallel Algorithm for Polygon Rasterization"
    url: "https://doi.org/10.1145/378456.378457"
    year: 1988
    arxiv: null
    doi: "10.1145/378456.378457"
---

# Triangle Scan Conversion using 2D Homogeneous Coordinates

## One-sentence takeaway

Olano and Greer rasterize triangles without ever dividing vertices by w: the edge functions and all interpolants come from inverting the 3×3 matrix of the vertices' (x, y, w), clipping becomes extra edge functions instead of polygon splitting, and the only per-pixel division is one reciprocal of the interpolated 1/w.

## Why it matters here

This is the standard reference for clipless rasterization in homogeneous space. The library has Pineda's edge functions (1071), the visibility buffer (271) and big compute-shader rasterizers (1488, 1786, 1558), but not the paper that explains how to do edge-function rasterization straight from clip space so near-plane-crossing triangles need no clipping. That is exactly what an Anoptic compute rasterizer for small triangles, shadows or occlusion culling needs.

## Key ideas

- **Edge functions from a matrix inverse.** Put the three 2D homogeneous vertices (x, y, w) in a 3×3 matrix and invert it; the inverse gives the three edge functions, already linear in screen x and y.
- **Interpolation for free.** The interpolation function for 1/w is the sum of the rows of the inverse, and any vertex parameter interpolates as its parameter vector times the inverse; multiplying by w = 1/(1/w) per pixel gives perspective-correct values.
- **No near-plane split.** Clipping against the near plane or other planes adds a clip edge, another linear function tested per pixel, so a triangle is never cut into new polygons with recomputed vertex attributes.
- **External triangles.** When the vertices' w signs differ, the same test rasterizes the "external" triangle that passes through infinity and shows up as two visible pieces, which is the correct projection of a triangle crossing the eye plane.
- **One reciprocal in setup.** Setup needs only one reciprocal, which is undefined only when the triangle should not be drawn anyway; the earlier method needed four, three of them perspective divides that can be undefined for visible triangles, which is what forced near-plane clipping. On Pixel-Planes 5 the new algorithm ran about 33% faster than a similar implementation of the previous one.

## Caveats

The 33% figure is for 1997 Pixel-Planes 5 hardware, where per-pixel work was cheap relative to setup. Every parameter needs perspective-correct interpolation, which costs more per pixel than screen-space linear interpolation. Depth precision and guard-band behaviour on a real GPU are not discussed. The CMU copy is a course-reading scan.

## Links

- Paper (PDF, CMU 15-869 readings): https://www.cs.cmu.edu/afs/cs/academic/class/15869-f11/www/readings/olano97_homogeneous.pdf
- Paper (DOI): https://doi.org/10.1145/258694.258723
