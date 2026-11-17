---
title: "Compositing 3-D Rendered Images"
authors:
  - "Tom Duff"
year: 1985
venue: "SIGGRAPH '85 (Computer Graphics 19(3)), pp. 41-44"
arxiv: null
doi: "10.1145/325165.325174"
source: "https://people.csail.mit.edu/ericchan/bib/pdf/p41-duff.pdf"
version_reviewed: "SIGGRAPH '85 proceedings scan"
topics:
  - "compositing"
  - "z-buffer"
  - "anti-aliasing"
  - "deep-images"
  - "tool-composition"
seed_rank: 2624
seed_batch: "archive-2026-11-18"
reviewed: "2026-11-18"
pool: "graphics"
lineage: porter-duff
relevance_score: 7
see:
  - "1039-compositing-digital-images"
  - "1038-the-a-buffer-an-antialiased-hidden-surface-method"
  - "1010-the-reyes-image-rendering-architecture"
cites:
  - title: "Compositing 3-D Rendered Images"
    url: "https://doi.org/10.1145/325165.325174"
    year: 1985
    doi: "10.1145/325165.325174"
---

# Compositing 3-D Rendered Images

## One-sentence takeaway

Store rgb, α and a z at each pixel corner (rgbαz) and combine images with one operator, comp, which acts like zmin where depth order is clear and splits "confused" pixels by interpolating the z crossing along pixel edges, so separately rendered anti-aliased elements can be merged almost order-free with small UNIX-style tools.

## Why it matters here

This is the step after Porter–Duff (card 1039): over is anti-aliased but needs depth order, zmin is order-free but point-sampled, and comp gets most of both. For Anoptic it is a cheap model for merging independently rendered layers (text, UI, 3D passes, offline-baked elements) with depth and coverage in one pass, and an early example of "a common picture format plus small programs" as an engine architecture.

## Key ideas

- **Two operators it unifies.** zmin keeps the nearer rgb and the min z; commutative and associative, but aliased. over gives rgb_f + (1−α_f)·rgb_b; area-sampled anti-aliasing, but elements must be adjacent in depth when combined.
- **z at corners.** Each pixel stores the z of its upper-left corner and reads the other three from neighbours, so the frame keeps one extra column and row off screen. Uncovered corners get +∞.
- **Confused pixels.** Compare z_f and z_b at four corners (16 cases). If they disagree, interpolate along the edges to find where the depths cross, compute the fraction β where f is in front, and output β(f over b) + (1−β)(b over f), z = min.
- **Algebra.** comp is commutative; it is associative on unconfused pixels, so compositing order barely matters. Intersecting surfaces get a sub-pixel polygonal intersection curve. If errors matter, sort a group's pixels by z and comp adjacent ones.
- **Tool suite.** 3matte (comp), quad, terrain, bg, hrot and fog total 1244 lines of C. A 227-frame animation took about 9 minutes per frame on VAX 11/750s, roughly 80% of it decoding run-length-encoded files.

## Caveats

One z per corner is point sampling: small objects between samples can vanish, edges can look scalloped, and pixels crossed by many correlated edges still go wrong, as with over. Transparent or volumetric content needs more per pixel (the A-buffer, card 1038, or later deep images). A 4-page 1985 paper with a qualitative evaluation only.

## Links

- PDF (proceedings scan): https://people.csail.mit.edu/ericchan/bib/pdf/p41-duff.pdf
- ACM DOI: https://doi.org/10.1145/325165.325174
- SIGGRAPH history entry: https://history.siggraph.org/learning/compositing-3-d-rendered-images-by-duff/
