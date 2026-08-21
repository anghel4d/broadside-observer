---
title: "A Cellular Texture Basis Function"
authors:
  - "Steven Worley"
year: 1996
venue: "SIGGRAPH"
arxiv: null
doi: "10.1145/237170.237267"
source: "https://doi.org/10.1145/237170.237267"
topics:
  - "worley-noise"
  - "cellular-texture"
  - "procedural-texturing"
  - "solid-texturing"
seed_rank: 1135
seed_batch: "archive-2026-08-22"
reviewed: "2026-08-22"
pool: "graphics"
relevance_score: 10
lineage: worley-noise
cites:
  - title: "An Image Synthesizer"
    url: "https://doi.org/10.1145/325334.325247"
    year: 1985
    arxiv: null
    doi: "10.1145/325334.325247"
  - title: "Solid Texturing of Complex Surfaces"
    url: "https://doi.org/10.1145/325334.325246"
    year: 1985
    arxiv: null
    doi: "10.1145/325334.325246"
  - title: "Algorithms for Solid Noise Synthesis"
    url: "https://doi.org/10.1145/74333.74360"
    year: 1989
    arxiv: null
    doi: "10.1145/74333.74360"
  - title: "Improving Noise"
    url: "https://doi.org/10.1145/566570.566636"
    year: 2002
    arxiv: null
    doi: "10.1145/566570.566636"
see:
  - "1007-an-image-synthesizer"
  - "365-improving-noise-perlin"
  - "415-the-algorithmic-beauty-of-plants-l-systems"
---

# A Cellular Texture Basis Function

## One-sentence takeaway

Scatter feature points in \(\mathbb{R}^3\) and return the distance to the \(n\)th-nearest: a Perlin-class *basis* that makes cells, flagstone, craters, and cracked earth without a table.

## Why it matters here

Perlin (1007 / 365) is the smooth fractal basis. Worley 1996 is the other one every terrain/rock/camo shader still evaluates — \(F_1\), \(F_2\), \(F_2-F_1\). Anoptic procedural ground and influence-map "territory" cells want a scalar defined everywhere, no precompute, substitutable wherever noise is used. The implementation is a 3×3×3 (or 5×5×5) integer-lattice walk with a hashed point per cube; that is the whole algorithm. Peachey 1985 is the solid-texturing *frame*; this is the cellular *primitive*.

## Key ideas

- Feature points Poisson-scattered via one hashed point per unit cube (density 1). \(F_n(\mathbf{x})\) = distance to the \(n\)th-closest point. Combinations (\(F_1\), \(F_2-F_1\), \(\sum F_i\)) are different looks from one walk.
- No table, no precomputation. Neighbour cubes are enough because a point outside the 3-cube neighbourhood cannot be closer than a candidate already found.
- Drop-in for noise: scalar over \(\mathbb{R}^3\), derivatives for bump, fractal sum if you want. Complements Perlin rather than replacing it.
- Hash the cube id to a point in the cube; keep a small sorted list of nearest distances while scanning neighbours.

## Caveats

- Cube-hash with one point per cell is a cheap Poisson approximation, not a true Poisson disk. Density variations need jitter or multiple points.
- Anisotropic / organic cells want a different metric (Manhattan, Minkowski) or warped space; Euclidean \(F_n\) is the crystalline look.
- GPU eval is a neighbour-loop, not a texture fetch — cheaper than it reads, still more ALU than Perlin.

## Links

- DOI: [10.1145/237170.237267](https://doi.org/10.1145/237170.237267)
- Author PDF (course scan): [https://itn-web.it.liu.se/~stegu76/TNM084-2019/worley-originalpaper.pdf](https://itn-web.it.liu.se/~stegu76/TNM084-2019/worley-originalpaper.pdf)
