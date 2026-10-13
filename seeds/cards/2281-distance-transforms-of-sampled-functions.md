---
title: "Distance Transforms of Sampled Functions"
authors:
  - "Pedro F. Felzenszwalb"
  - "Daniel P. Huttenlocher"
year: 2012
venue: "Theory of Computing 8(19), 415–428"
arxiv: null
doi: "10.4086/toc.2012.v008a019"
source: "https://theoryofcomputing.org/articles/v008a019/"
topics:
  - distance-transforms
  - signed-distance-fields
  - min-convolution
  - grid-algorithms
seed_rank: 2281
seed_batch: "archive-2026-10-14"
reviewed: "2026-10-14"
pool: "graphics"
relevance_score: 8
lineage: distance-fields
cites:
  - title: "Distance Transforms of Sampled Functions"
    url: "https://doi.org/10.4086/toc.2012.v008a019"
    year: 2012
    arxiv: null
    doi: "10.4086/toc.2012.v008a019"
---

# Distance Transforms of Sampled Functions

## One-sentence takeaway

The exact squared-Euclidean distance transform of any cost function on a grid can be computed in linear time by running a one-dimensional pass per axis, where each 1D pass is the lower envelope of identical parabolas rooted at the samples, and the binary-image EDT falls out as a special case.

## Why it matters here

Distance fields are everywhere in an engine and an RTS: SDF text and decals (125, 286, 1808), fog-of-war falloff, influence and threat maps, clearance maps for unit sizes, and flow fields (279). The library has GPU jump flooding (1633), which is approximate and parallel, but not the exact, simple, linear-time CPU algorithm that is the usual reference implementation. The generalized form, with an arbitrary cost f(q) instead of a binary mask, also turns min-plus dynamic programming steps (Viterbi-like updates over a grid of states) into linear time.

## Key ideas

- **Transform of a function.** D_f(p) = min over q of d(p, q) + f(q). With f = 0 on features and ∞ elsewhere this is the classic distance transform; with real-valued f it trades distance against cost.
- **Lower envelope of parabolas.** For squared Euclidean distance in 1D, each sample q contributes a parabola (p − q)² + f(q); the transform is their lower envelope. Because the parabolas share a shape and arrive sorted, one left-to-right sweep with two arrays (envelope parabola positions v and boundaries z) builds the envelope in O(n), and a second sweep samples it.
- **Separable in any dimension.** Run the 1D transform along every column, then along every row of the result (and so on per axis); this is exact for squared Euclidean distance and stays linear in the number of grid cells.
- **Min-convolution view.** The transform is a min-convolution of f with a parabola (or a cone for L1). The same envelope method works for other convex or concave kernels when shifted copies can be intersected in constant time.
- **Exact EDT.** Transform the indicator of the feature set and take square roots.

## Caveats

It is a sequential sweep per row and column: easy to parallelize across rows, but each 1D pass is serial, so a GPU implementation needs one thread per line or a different method such as jump flooding. It gives unsigned distance; a signed field needs two transforms (inside and outside). Feature points are taken on grid cells, so sub-pixel edge positions need extra handling. The journal version (2012) follows a 2004 Cornell technical report.

## Links

- Paper (Theory of Computing, open access): https://theoryofcomputing.org/articles/v008a019/
- PDF: https://theoryofcomputing.org/articles/v008a019/v008a019.pdf
- Paper (DOI): https://doi.org/10.4086/toc.2012.v008a019
