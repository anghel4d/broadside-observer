---
title: "SMAA: Enhanced Subpixel Morphological Antialiasing"
authors:
  - "Jorge Jimenez"
  - "Jose I. Echevarria"
  - "Tiago Sousa"
  - "Diego Gutierrez"
year: 2012
venue: "Computer Graphics Forum (Eurographics)"
arxiv: null
doi: "10.1111/j.1467-8659.2012.03025.x"
source: "http://www.iryoku.com/smaa/downloads/SMAA-Enhanced-Subpixel-Morphological-Antialiasing.pdf"
topics:
  - antialiasing
  - post-process
  - realtime-graphics
  - morphological-aa
seed_rank: 1797
seed_batch: "archive-2026-09-12"
reviewed: "2026-09-12"
pool: "graphics"
relevance_score: 9
lineage: smaa
cites:
  - title: "Morphological Antialiasing"
    url: "https://doi.org/10.1145/1572769.1572787"
    year: 2009
    arxiv: null
    doi: "10.1145/1572769.1572787"
  - title: "Illumination for Computer Generated Pictures"
    url: "http://www.cs.northwestern.edu/~ago820/cs395/Papers/Phong_1975.pdf"
    year: 1975
    arxiv: null
    doi: "10.1145/360825.360839"
see:
  - "1791-illumination-for-computer-generated-pictures"
  - "1784-adaptive-dynamic-global-illumination"
  - "1787-higher-quality-2d-text-rendering"
---

# SMAA: Enhanced Subpixel Morphological Antialiasing

## One-sentence takeaway

SMAA hardens morphological AA for production: reliable edges, sharp diagonals, optional MSAA/SSAA coupling, and temporal reprojection — filter AA converging toward MSAA quality at millisecond cost.

## Why it matters here

Anoptic needs practical post-process AA for deferred and forward paths without full MSAA storage. Slightly late for archive bias but an open, durable realtime classic; MLAA stays a near-keeper (Intel 403 this pass). Complements Phong 1791 (shading root, not an AA method), Adaptive Dynamic GI 1784, and higher-quality 2D text 1787.

## Key ideas

- **Local contrast edge detection.** Find edges from neighborhood contrast rather than a global luma threshold that misses or over-blurs.
- **Pattern classification.** Crossing, L, and diagonal patterns drive a morphological reconstruction that keeps sharp diagonals.
- **MSAA/SSAA + temporal coupling.** Optional hardware/temporal samples feed the same filter; presets include T2x and 4x.
- **Crytek production context.** Written as a drop-in that production engines could ship, not a lab-only filter.

## Caveats

Image-based: cannot invent missing subpixel geometry. MLAA Reshetov remains a near-keeper (Intel follow-up PDF 403). iryoku author PDF verified ~7MB open this pass. Do not remint Phong 1791, Adaptive Dynamic GI 1784, or Higher Quality 2D Text 1787.

## Links

- Author PDF: http://www.iryoku.com/smaa/downloads/SMAA-Enhanced-Subpixel-Morphological-Antialiasing.pdf
- Project page: https://www.iryoku.com/smaa/
- DOI: https://doi.org/10.1111/j.1467-8659.2012.03025.x
