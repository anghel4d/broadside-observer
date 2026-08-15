---
title: "An Image Synthesizer"
authors: ["Ken Perlin"]
year: 1985
venue: "SIGGRAPH"
arxiv: null
doi: "10.1145/325334.325247"
source: "https://doi.org/10.1145/325334.325247"
topics: [perlin-noise, solid-texture, procedural-shading]
seed_rank: 1007
seed_batch: "archive-2026-08-14"
reviewed: "2026-08-14"
pool: "graphics"
relevance_score: 9
lineage: procedural-texture
cites:
  - title: "Improving Noise"
    url: "https://doi.org/10.1145/566570.566636"
    year: 2002
    arxiv: null
    doi: "10.1145/566570.566636"
see:
  - "365-improving-noise-perlin"
---

# An Image Synthesizer

## One-sentence takeaway

A pixel-stream shading language plus a band-limited stochastic primitive (Perlin noise) and solid texturing — clouds, fire, marble, wood — without texture maps or growth models.

## Why it matters here

The library has Perlin's 2002 "Improving Noise" (365) but not the 1985 paper that introduced the noise, the Pixel Stream Editor, and solid texture. That is the procedural-look language Anoptic still runs, and it is also a tiny array-language: the same program at every pixel, asynchronously parallel.

## Key ideas

- A Pixel Stream Editor is a filter that runs one high-level program at every pixel, with C-like operators, vectors, and user functions, and a fast edit/view loop.
- Naturalistic complexity is composition of nonlinear functions, not mapped images or L-system growth.
- The stochastic primitive is a well-behaved noise (controlled randomness, no obvious grid, band-limited) from which turbulence and other looks are built.
- Solid texture: evaluate the function over a 3D domain so objects look carved from a material rather than wallpapered.
- Algorithms are fast and embarrassingly parallel at pixel granularity; the paper already claims clouds, fire, water, stars, marble, wood, rock, soap films, crystal.

## Caveats


## Links

- DOI: [10.1145/325334.325247](https://doi.org/10.1145/325334.325247)
- PDF: https://www.cs.jhu.edu/~misha/Spring25/Readings/Perlin85.pdf
- ACM page: https://dl.acm.org/doi/10.1145/325165.325247
