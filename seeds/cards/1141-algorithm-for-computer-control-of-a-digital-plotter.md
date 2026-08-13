---
title: "Algorithm for Computer Control of a Digital Plotter"
authors:
  - "J. E. Bresenham"
year: 1965
venue: "IBM Systems Journal"
arxiv: null
doi: "10.1147/sj.41.0025"
source: "https://doi.org/10.1147/sj.41.0025"
topics:
  - graphics
  - rasterization
  - bresenham
seed_rank: 1141
seed_batch: "perfects-systems-2026-08-13"
reviewed: "2026-08-13"
pool: "graphics"
relevance_score: 9
lineage: gpu-driven-rendering
cites:
  - title: "Computer Graphics: Principles and Practice"
    url: "https://www.worldcat.org/title/computer-graphics-principles-and-practice/oclc/21227003"
    year: 1990
    arxiv: null
    doi: null
    card: "1140-computer-graphics-principles-and-practice"
  - title: "Reentrant Polygon Clipping"
    url: "https://doi.org/10.1145/360767.360802"
    year: 1974
    arxiv: null
    doi: "10.1145/360767.360802"
    card: "1142-reentrant-polygon-clipping"
---

# Algorithm for Computer Control of a Digital Plotter

## One-sentence takeaway

Bresenham's line algorithm: integer-only incremental rasterization that still lives in every GPU mental model.

## Why it matters here

Canonical raster fundamental before fragments and mesh shaders.

## Key ideas

- Decision-variable incremental line drawing.
- Avoids floating-point in the inner loop.
- Extends to circles and other primitives later.
- Foundation for scan-conversion thinking.

## Caveats

- Classic; verify claims against the primary text before engineering decisions.

## Links

- DOI: [10.1147/sj.41.0025](https://doi.org/10.1147/sj.41.0025)
- URL: https://doi.org/10.1147/sj.41.0025
