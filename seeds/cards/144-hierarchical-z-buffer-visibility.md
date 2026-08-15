---
title: Hierarchical Z-Buffer Visibility
authors:
  - Ned Greene
  - Michael Kass
  - Gavin Miller
year: 1993
venue: SIGGRAPH
arxiv: null
doi: 10.1145/166117.166147
source: https://www.cs.cmu.edu/afs/cs/academic/class/15869-f11/www/readings/greene93_hierarchicalz.pdf
topics:
  - hiz
  - culling
seed_rank: 144
seed_batch: prefill-2026-08-13
reviewed: "2026-08-13"
pool: engines
relevance_score: 9
lineage: gpu-driven-rendering
cites:
  - title: Efficient synthetic image generation of arbitrary 3-D objects
    url: null
    year: 1982
    arxiv: null
    doi: null
  - title: Visibility preprocessing for interactive walkthroughs
    url: https://doi.org/10.1145/122718.122725
    year: 1991
    arxiv: null
    doi: 10.1145/122718.122725
  - title: Towards image realism with interactive update rates in complex virtual building environments
    url: https://doi.org/10.1145/91394.91416
    year: 1990
    arxiv: null
    doi: 10.1145/91394.91416
  - title: Space subdivision for fast ray tracing
    url: https://doi.org/10.1109/MCG.1984.6429331
    year: 1984
    arxiv: null
    doi: 10.1109/MCG.1984.6429331
see: []
---

# Hierarchical Z-Buffer Visibility

## One-sentence takeaway

An object-space octree, an image-space Z pyramid, and a list of last-frame visible nodes together reject hidden geometry orders of magnitude faster than a plain Z-buffer on high-depth-complexity models.

## Why it matters here

Anoptic's hierarchical occlusion path is this algorithm: conservative HiZ tests plus coarse object-space cube cull, later mapped onto GPU HiZ and clustered occlusion.

## Key ideas

- A cube is hidden wrt the current Z-buffer if every pixel of its faces is farther than the stored Z. Then every primitive inside that octree node is hidden, so the node and its children are skipped. Recurse front-to-back; also frustum-cull. Small primitives that straddle splitting planes are stored in every child they touch and marked once rendered.
- The Z pyramid uses the ordinary Z-buffer as the finest level; each coarser texel is the farthest of its four children. A primitive (or cube face) whose nearest Z is behind the pyramid sample covering its screen bbox is hidden. If that test fails, recurse into quadrants, or fall back to ordinary scan conversion.
- Temporal coherence: render the previous frame's visible cubes first, build the pyramid from that Z-buffer, then run the usual walk. After the frame, drop cubes the pyramid can now prove hidden so the list does not grow without bound.
- On a 33³ replication of a 15K-poly office module (538 million polygons, 59.7 million in frustum) the software path scan-converted 41.2K front-facing polygons in 6.45s on an SGI Crimson; naive hardware Z-buffering of the same view took about 75 minutes. Outdoor terrain+vegetation scenes with tens of millions of polygons behave similarly.
- Then-current GPUs could not answer "would this polygon write a pixel?" in microseconds. The paper's hardware ask is exactly that query, plus a readable Z-buffer, so the octree walk can stay on the device.

## Caveats

## Links

- PDF: https://www.cs.cmu.edu/afs/cs/academic/class/15869-f11/www/readings/greene93_hierarchicalz.pdf
- DOI: [10.1145/166117.166147](https://doi.org/10.1145/166117.166147)
- Adobe Research page: https://research.adobe.com/publication/hierarchical-z-buffer-visibility/
