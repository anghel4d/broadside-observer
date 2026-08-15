---
title: "A Hidden Surface Algorithm for Computer Generated Halftone Pictures"
authors: ["John Edward Warnock"]
year: 1969
venue: "PhD thesis, University of Utah"
arxiv: null
doi: null
source: "https://collections.lib.utah.edu/ark:/87278/s6vj1cn7"
topics: [warnock-algorithm, area-subdivision, hidden-surface]
seed_rank: 1040
seed_batch: "archive-2026-08-16"
reviewed: "2026-08-16"
pool: "graphics"
relevance_score: 10
lineage: warnock-subdivision
cites:
  - title: "Warnock: Harnessing GPU Geometry Amplification for Vector Graphics"
    url: "https://doi.org/10.1145/3820012"
    year: 2026
    arxiv: null
    doi: "10.1145/3820012"
  - title: "A characterization of ten hidden-surface algorithms"
    url: "https://doi.org/10.1145/356625.356626"
    year: 1974
    arxiv: null
    doi: "10.1145/356625.356626"
  - title: "Hierarchical Z-Buffer Visibility"
    url: "https://doi.org/10.1145/166117.166147"
    year: 1993
    arxiv: null
    doi: "10.1145/166117.166147"
see:
  - "1030-warnock-gpu-geometry-amplification-for-vector-graphics"
  - "144-hierarchical-z-buffer-visibility"
  - "090-nanite-a-deep-dive"
---

# A Hidden Surface Algorithm for Computer Generated Halftone Pictures

## One-sentence takeaway

Recursively subdivide the image until a square is simple enough to shade — one polygon, empty, or too small to split — the original Warnock algorithm.

## Why it matters here

Craft 1030 minted *GPU* Warnock (mesh-shader vector fill). The 1969 Utah thesis is the actual area-subdivision hidden-surface paper that name comes from, and it was not on the shelf. Anoptic's meshlet / Nanite path (090) and hierarchical Z (144) are later answers to the same question: don't shade what you can prove is trivial at a coarse scale.

## Key ideas

- The window is a square in image space. If it contains no polygons, fill background; if it is simple (one visible polygon, or a polygon covering the square), shade; otherwise split into four and recurse.
- Complexity is spent only at silhouette edges and intersections; large interiors terminate immediately.
- The method converts 3-D polygonal data into a 2-D halftone (and colour) raster, including shading, not just hidden-line drawings.
- Issued as University of Utah PhD and as RADC-TR-69-249 / UTEC TR-4-15 (DTIC AD0753671).
- Sutherland, Sproull & Schumacker (1974) later classify it as the canonical area-subdivision algorithm among the ten classical hidden-surface methods.

## Caveats

- A thesis, not a conference paper; the widely-cited exposition is the 1974 Computing Surveys taxonomy.
- Quadtree image subdivision is not a GPU mesh-shader algorithm — 1030 reuses the *name* and the “split until simple” idea for path filling, not this raster procedure.
- Anoptic's real-time path is hierarchical Z + meshlets, not CPU Warnock recursion.

## Links

- Utah archive: https://collections.lib.utah.edu/ark:/87278/s6vj1cn7
- DTIC PDF: https://apps.dtic.mil/sti/tr/pdf/AD0753671.pdf
- ACM: https://dl.acm.org/doi/book/10.5555/905316
