---
title: "Marching Cubes: A High Resolution 3D Surface Construction Algorithm"
authors: ["William E. Lorensen", "Harvey E. Cline"]
year: 1987
venue: "SIGGRAPH"
arxiv: null
doi: "10.1145/37401.37422"
source: "https://www.cs.jhu.edu/~misha/ReadingSeminar/Papers/Lorensen87.pdf"
topics: [voxels, meshing]
seed_rank: 1498
seed_batch: "archive-2026-09-02"
reviewed: "2026-09-02"
pool: "graphics"
relevance_score: 10
lineage: procedural-generation
cites:
  - title: "Dual Contouring of Hermite Data"
    url: "https://doi.org/10.1145/566570.566586"
    year: 2002
    arxiv: null
    doi: "10.1145/566570.566586"
  - title: "Display of Surfaces from Volume Data"
    url: "https://doi.org/10.1109/38.511"
    year: 1988
    arxiv: null
    doi: "10.1109/38.511"
  - title: "Progressive Meshes"
    url: "https://doi.org/10.1145/237170.237216"
    year: 1996
    arxiv: null
    doi: "10.1145/237170.237216"
  - title: "Surface Simplification Using Quadric Error Metrics"
    url: "https://doi.org/10.1145/258734.258849"
    year: 1997
    arxiv: null
    doi: "10.1145/258734.258849"
see:
  - "408-dual-contouring-of-hermite-data"
  - "375-progressive-meshes"
  - "373-surface-simplification-using-quadric-error-metrics"
---

# Marching Cubes: A High Resolution 3D Surface Construction Algorithm

## One-sentence takeaway

Walk a scalar grid cube by cube, interpolate the isosurface on sign-changing edges, and emit triangles from a 256-entry (15 unique) lookup table — the classic contouring boundary dual contouring and voxel terrains sit on.

## Why it matters here

GRID COMMAND procedural worlds are scalar fields (height, caves, CSG density). Dual Contouring (408) places a QEF vertex per cell for sharp features; it still *classifies* cubes by the same inside/outside corners Lorensen–Cline tabulated. Progressive meshes (375) and QEM (373) simplify the mesh after extraction. Archive 08-14 deferred this paper because 408 existed; that was the leftover. Anoptic voxel terrains need the lookup-table contract even when the production extractor is DC or Transvoxel.

## Key ideas

- **Cube cases.** Eight corner signs give 256 configurations, reduced by rotation/reflection to 15. Each case lists which edges hold vertices and how they triangulate.
- **Edge interpolation.** Vertex placement is linear interpolation of the scalar along a sign-changing edge — C¹ along the grid, not feature-aware.
- **Disambiguation hole.** Complementary face configurations can leave a hole; later asymptotic-decider / consistent-tiling work (Nielson, Chernyaev, expanded tables) patches it. The 1987 table is the original, not the patched one.
- **Evidence.** SIGGRAPH 1987 / *Computer Graphics* 21(4), doi `10.1145/37401.37422`. GE medical-imaging origin. Author-hosted copies circulate; this pass uses the JHU reading-seminar PDF.

## Caveats

Rounded edges and the ambiguous-face hole are why Dual Contouring and manifold DC exist — do not ship 1987 MC as the GRID COMMAND production extractor. Historical GE patent friction does not change the algorithm. Levoy 1069 *renders* volumes by compositing; this paper *polygonises*. Not a remint of 408, 375, 373, or 1069.

## Links

- PDF: https://www.cs.jhu.edu/~misha/ReadingSeminar/Papers/Lorensen87.pdf
- DOI: https://doi.org/10.1145/37401.37422
