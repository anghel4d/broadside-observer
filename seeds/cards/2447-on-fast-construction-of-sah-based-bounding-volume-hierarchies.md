---
title: "On fast Construction of SAH-based Bounding Volume Hierarchies"
authors:
  - "Ingo Wald"
year: 2007
venue: "2007 IEEE Symposium on Interactive Ray Tracing"
arxiv: null
doi: "10.1109/RT.2007.4342588"
source: "https://www.sci.utah.edu/~wald/Publications/2007/ParallelBVHBuild/fastbuild.pdf"
topics:
  - bvh
  - surface-area-heuristic
  - ray-tracing
  - parallel-construction
seed_rank: 2447
seed_batch: "archive-2026-10-28"
reviewed: "2026-10-28"
pool: "engines"
relevance_score: 8
lineage: gpu-tree-construction
see:
  - 1840-heuristics-for-ray-tracing-using-space-subdivision
  - 1240-maximizing-parallelism-in-the-construction-of-bvhs-octrees-and-k-d-trees
  - 1063-memory-efficient-bounding-volume-hierarchies-with-merged-nodes
  - 2372-refit-always-precomputed-ensembles-of-bvhs-for-parametric-animations
cites:
  - title: "On fast Construction of SAH-based Bounding Volume Hierarchies"
    url: "https://doi.org/10.1109/RT.2007.4342588"
    year: 2007
    doi: "10.1109/RT.2007.4342588"
---

# On fast Construction of SAH-based Bounding Volume Hierarchies

## One-sentence takeaway

Wald carries the binned surface-area-heuristic (SAH) build from kd-trees over to BVHs, binning primitives by centroid into about 16 equal-width bins per axis and evaluating only the bin boundaries, and shows that for BVHs this approximation loses almost no quality while rebuilding from scratch up to 10× faster than comparable kd-tree builds, fast enough for per-frame rebuilds of animated scenes.

## Why it matters here

Anoptic needs acceleration structures for ray-traced visibility and radiance-cascade probes over geometry that moves every frame. Binned SAH is still the standard CPU baseline that hardware builders and LBVH-style GPU builds are measured against, and it's the cleanest statement of the rebuild-versus-refit trade-off: a fast full rebuild avoids the quality decay of refitting (see the refit card) at a bounded, distribution-independent cost.

## Key ideas

- **Why BVHs bin better than kd-trees.** A BVH node's children bound their own primitives, so binning by centroid introduces no approximation in the area or count terms; the only loss is that not every partition is considered. Kd-tree binning additionally misses perfect splits.
- **Bin setup.** K equal-width bins spanning the centroid bounds, placed only along the axis where the centroid bounds are widest; each bin tracks a triangle count and its own exact bounds, and one linear pass bins all primitives.
- **SAH evaluation.** Sweep the K−1 candidate boundaries from both sides accumulating counts and bounds, pick the minimum-cost split, partition in place.
- **Number of bins.** Even 4 bins give reasonable trees, 16 are close to optimal, and more hardly help; an adaptive K tested gave no appreciable gain, so binning is used all the way down without switching to a full sweep near the leaves.
- **Parallel build.** "Horizontal" parallelism (all threads cooperate on binning and partitioning one large node) near the top of the tree, switching to "vertical" parallelism (threads take separate subtrees) lower down; both schemes hit the memory wall at around 3–4 threads, for up to about a 4× speedup.
- **Results.** Several million triangles per second of from-scratch rebuild; the exploding dragon (252K triangles) rebuilds in under 20 ms on 8 cores, and the paper reports the full ray tracer at about 13–21 fps in its Figure 1 caption and about 5–10 fps in its conclusion, which presumably reflect different configurations.

## Caveats

CPU-only, 2007 multicore hardware, and scaling stops at the memory wall; GPU builders (LBVH, HLBVH, PLOC) and hardware builders now dominate for dynamic scenes. It builds binary BVHs from triangles only, with no spatial splits, so long thin or overlapping triangles still produce poor trees. Rendering numbers depend on Wald's packet ray tracer.

## Links

- Paper (PDF): https://www.sci.utah.edu/~wald/Publications/2007/ParallelBVHBuild/fastbuild.pdf
- Paper (DOI, IEEE RT 2007): https://doi.org/10.1109/RT.2007.4342588
