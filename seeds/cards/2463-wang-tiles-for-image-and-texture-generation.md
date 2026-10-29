---
title: "Wang Tiles for Image and Texture Generation"
authors:
  - "Michael F. Cohen"
  - "Jonathan Shade"
  - "Stefan Hiller"
  - "Oliver Deussen"
year: 2003
venue: "ACM Transactions on Graphics 22(3), SIGGRAPH 2003, pp. 287–294"
arxiv: null
doi: "10.1145/882262.882265"
source: "https://ics.uci.edu/~majumder/vispercep/wangtile_texsyn.pdf"
topics:
  - wang-tiles
  - texture-synthesis
  - poisson-disk
  - non-periodic-tiling
  - procedural-generation
seed_rank: 2463
seed_batch: "archive-2026-10-30"
reviewed: "2026-10-30"
pool: "graphics"
relevance_score: 8
lineage: procedural-generation
see:
  - 1023-an-aperiodic-monotile
  - 2380-fast-poisson-disk-sampling-in-arbitrary-dimensions
  - 2278-the-void-and-cluster-method-for-dither-array-generation
cites:
  - title: "Wang Tiles for Image and Texture Generation"
    url: "https://doi.org/10.1145/882262.882265"
    year: 2003
    doi: "10.1145/882262.882265"
---

# Wang Tiles for Image and Texture Generation

## One-sentence takeaway

Cohen, Shade, Hiller and Deussen show that as few as eight edge-coloured square tiles, laid out by a simple random scan that always has at least two matching choices, cover the plane non-periodically, so a small precomputed set of texture, Poisson-point or pre-lit geometry tiles can generate unlimited non-repeating content at runtime.

## Why it matters here

This is the cheap, deterministic-cost answer to visible repetition in terrain, vegetation scatter and ground textures, and it fits Anoptic's data-oriented style: content is a tiny table plus an index grid. The corner-coded extension and the tileable Poisson distributions matter for scattering objects without seams, next to the Poisson-disk and blue-noise cards already in the library.

## Key ideas

- **Stochastic, not aperiodic.** The sets can tile periodically in principle, but because every north-west edge combination is present, each step has at least two valid tiles; choosing uniformly makes the tiling a random process and therefore non-periodic. The paper contrasts this with a deterministic 16-tile aperiodic set that still shows visible repetition.
- **Scan-line layout.** Pick any tile for the corner, fill rows left to right matching the west edge, and start each new row matching the north edge; two colours per direction give 8 tiles, three horizontal give 12, three each way give 18.
- **Texture filling.** Each edge colour gets a diamond-shaped sample from the source image; four diamonds are combined and the tile is cut along their diagonals, with seams between overlapping samples found in the spirit of Efros and Freeman's image quilting. Eight tiles need four sample images.
- **Tileable Poisson disks.** Plain dart throwing fails at tile edges because a dart's disc reaches into every tile that could border it, leaving gaps; instead Lloyd relaxation runs on a Voronoi diagram over a 3×3 neighbourhood of tiles, repeated until all tiles stabilize.
- **Geometry and corners.** Tiles can hold plants or other instances, pre-lit per tile for fast rendering of large fields; corner colour coding lets objects overlap more than one edge.

## Caveats

Diamond-shaped artifacts can show in textures with strong structure, and quality depends on the source image and seam search. Poisson statistics across tile edges come from iterative relaxation, not a guarantee, and the scan-line layout described generates tiles in order, so on-demand random access to an arbitrary tile needs extra machinery the paper doesn't focus on.

## Links

- Paper (PDF, UCI mirror): https://ics.uci.edu/~majumder/vispercep/wangtile_texsyn.pdf
- Paper (DOI, SIGGRAPH 2003): https://doi.org/10.1145/882262.882265
