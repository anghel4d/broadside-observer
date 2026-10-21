---
title: "Robust Inside-Outside Segmentation using Generalized Winding Numbers"
authors:
  - "Alec Jacobson"
  - "Ladislav Kavan"
  - "Olga Sorkine-Hornung"
year: 2013
venue: "ACM Transactions on Graphics 32(4), Article 33 (SIGGRAPH 2013)"
arxiv: null
doi: "10.1145/2461912.2461916"
source: "https://igl.ethz.ch/projects/winding-number/robust-inside-outside-segmentation-using-generalized-winding-numbers-siggraph-2013-jacobson-et-al.pdf"
topics:
  - winding-number
  - inside-outside
  - mesh-repair
  - tetrahedral-meshing
seed_rank: 2381
seed_batch: "archive-2026-10-22"
reviewed: "2026-10-22"
pool: "graphics"
relevance_score: 8
lineage: geometry-processing
see:
  - 1460-random-access-rendering-of-general-vector-graphics
  - 1128-gpu-centered-font-rendering-directly-from-glyph-outlines
  - 1498-marching-cubes-a-high-resolution-3d-surface-construction-algorithm
  - 1092-exact-predicates-exact-constructions-combinatorics-mesh-csg
  - 2338-geodesics-in-heat
cites:
  - title: "Robust Inside-Outside Segmentation using Generalized Winding Numbers"
    url: "https://doi.org/10.1145/2461912.2461916"
    year: 2013
    arxiv: null
    doi: "10.1145/2461912.2461916"
---

# Robust Inside-Outside Segmentation using Generalized Winding Numbers

## One-sentence takeaway

Jacobson, Kavan and Sorkine-Hornung define the winding number of an arbitrary oriented triangle mesh at a point as the sum of each triangle's signed solid angle over 4π (van Oosterom–Strackee closed form), which is exactly 0/1 inside and outside watertight meshes and, for meshes with holes, self-intersections and non-manifold parts, stays a harmonic, well-behaved confidence that jumps across the surface — then use it, accelerated hierarchically, to drive a graph-cut segmentation of a constrained Delaunay tessellation into a tetrahedral mesh of the inner volume.

## Why it matters here

Real art assets are never watertight: kitbashed props, character meshes with intersecting parts, CAD imports with open boundaries. Anything in Anoptic that needs "is this point inside?" — voxelising for GI or destruction, baking SDFs (cards 125, 1808), building collision volumes, spawning particles inside a mesh — either fails on such input or needs a slow repair step. The generalised winding number is a one-formula, orientation-only answer that degrades gracefully, and it is the same quantity our 2D vector and font renderers (1460, 1128) already compute for fill rules.

## Key ideas

- **2D to 3D.** In 2D the winding number is the sum of signed angles subtended by polyline segments over 2π; in 3D replace angle with solid angle: w(p) = Σ_f Ω_f(p) / 4π, with tan(Ω/2) = det[a b c] / (abc + (a·b)c + (b·c)a + (c·a)b) for a, b, c the triangle corners relative to p.
- **Properties.** Exactly an indicator function for closed, consistently oriented surfaces; harmonic away from the surface; a sharp jump across it (unlike a signed distance, which passes smoothly through zero and encodes no confidence). With holes it varies smoothly between 0 and 1, so thresholding at 0.5 is a reasonable first guess.
- **Hierarchical evaluation.** A bounding-box tree over facets: when p lies outside a node's box, the node's open patch is replaced by its closure over the patch boundary (exterior edges), with the sign flipped, so only the small closing cap is summed. Measured cost grew roughly as m^0.43–0.55 versus about linear for the naive sum.
- **Segmentation.** Build a CDT of the convex hull containing all input vertices and facets (resolving self-intersections), integrate w per tetrahedron, and solve a graph cut that balances winding-number data terms against coherence between neighbouring tets, optionally enforcing manifold output; post-process with standard refiners for element quality.
- **Uses shown.** PDE solving, volumetric texturing, elastic simulation and volumetric skinning weights on previously unmeshable models such as one with 3442 intersecting triangle pairs, 1020 open-boundary edges and 67 components.

## Caveats

Everything depends on facet orientation: triangle soups with inconsistent or unknown normals need re-orientation first. The naive sum is O(m) per query and even the hierarchical version is slow for dense volumetric queries compared to the later Fast Winding Numbers for Soups and Clouds (Barill et al. 2018), which uses multipole expansions and also handles point clouds. The CDT step needs robust handling of self-intersections and can be the bottleneck; the number of connected components in the output is not controlled.

## Links

- Paper (author PDF): https://igl.ethz.ch/projects/winding-number/robust-inside-outside-segmentation-using-generalized-winding-numbers-siggraph-2013-jacobson-et-al.pdf
- Paper (DOI, ACM TOG): https://doi.org/10.1145/2461912.2461916
- Project page: https://igl.ethz.ch/projects/winding-number/
