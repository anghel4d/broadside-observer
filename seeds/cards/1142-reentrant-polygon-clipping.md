---
title: "Reentrant Polygon Clipping"
authors:
  - "Ivan E. Sutherland"
  - "Gary W. Hodgman"
year: 1974
venue: "Communications of the ACM"
arxiv: null
doi: "10.1145/360767.360802"
source: "https://doi.org/10.1145/360767.360802"
topics:
  - graphics
  - clipping
  - sutherland-hodgman
  - cohen-sutherland
seed_rank: 1142
seed_batch: "perfects-systems-2026-08-13"
reviewed: "2026-08-13"
pool: "graphics"
relevance_score: 8
lineage: gpu-driven-rendering
cites:
  - title: "Computer Graphics: Principles and Practice"
    url: "https://www.worldcat.org/title/computer-graphics-principles-and-practice/oclc/21227003"
    year: 1990
    arxiv: null
    doi: null
    card: "1140-computer-graphics-principles-and-practice"
  - title: "Algorithm for Computer Control of a Digital Plotter"
    url: "https://doi.org/10.1147/sj.41.0025"
    year: 1965
    arxiv: null
    doi: "10.1147/sj.41.0025"
    card: "1141-algorithm-for-computer-control-of-a-digital-plotter"
  - title: "Sketchpad: A Man-Machine Graphical Communication System"
    url: "https://doi.org/10.1145/1461551.1461591"
    year: 1963
    arxiv: null
    doi: "10.1145/1461551.1461591"
    card: "1137-sketchpad-a-man-machine-graphical-communication-system"
---

# Reentrant Polygon Clipping

## One-sentence takeaway

Sutherland–Hodgman reentrant polygon clipping (taught beside Cohen–Sutherland line outcodes) made view-frustum clipping practical.

## Why it matters here

Clipping is still a pipeline stage—useful foil to modern GPU guardbands and meshlet culling.

## Key ideas

- Clip against one infinite half-plane at a time.
- Reentrant algorithm structure for polygons.
- Cohen–Sutherland outcodes as the classic line-clip companion technique.
- Textbook pipeline staple with Foley–van Dam.

## Caveats

- Card cites the 1974 Sutherland–Hodgman CACM paper; Cohen–Sutherland line outcodes are the earlier companion algorithm taught beside it.

## Links

- DOI: [10.1145/360767.360802](https://doi.org/10.1145/360767.360802)
- URL: https://doi.org/10.1145/360767.360802
