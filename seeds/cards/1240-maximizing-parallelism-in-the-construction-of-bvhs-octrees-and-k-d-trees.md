---
title: "Maximizing Parallelism in the Construction of BVHs, Octrees, and k-d Trees"
authors: ["Tero Karras"]
year: 2012
venue: "High Performance Graphics 2012"
arxiv: null
doi: "10.2312/eggh/hpg12/033-037"
source: "https://doi.org/10.2312/eggh/hpg12/033-037"
topics: [gpu-tree-construction]
seed_rank: 1240
seed_batch: "craft-2026-08-25"
reviewed: "2026-08-25"
pool: "engines"
relevance_score: 10
lineage: gpu-tree-construction
cites:
  - title: "HLBVH: Hierarchical LBVH Construction for Real-Time Ray Tracing of Dynamic Geometry"
    url: "https://doi.org/10.2312/EGGH/HPG10/087-095"
    year: 2010
    arxiv: null
    doi: "10.2312/EGGH/HPG10/087-095"
  - title: "Fast BVH Construction on GPUs"
    url: "https://doi.org/10.1111/j.1467-8659.2009.01377.x"
    year: 2009
    arxiv: null
    doi: "10.1111/j.1467-8659.2009.01377.x"
  - title: "Fast Parallel Construction of High-Quality Bounding Volume Hierarchies"
    url: "https://doi.org/10.1145/2492045.2492047"
    year: 2013
    arxiv: null
    doi: "10.1145/2492045.2492047"
see:
  - "1063-memory-efficient-bounding-volume-hierarchies-with-merged-nodes"
  - "928-a-stack-free-traversal-algorithm-for-left-balanced-k-d-trees"
  - "1184-fast-multipole-methods-on-graphics-processors"
  - "015-gpu-driven-rendering-pipelines"
---

# Maximizing Parallelism in the Construction of BVHs, Octrees, and k-d Trees

## One-sentence takeaway

Build the entire binary radix tree in place, in parallel, then derive BVHs, point octrees, and k-d trees — no sequential level-by-level bottleneck.

## Problem

Morton-sorted GPU tree builders (LBVH / HLBVH) construct one level at a time. Wide GPUs idle on the top levels; adaptive FMM+RC occupancy trees re-build every frame as probes and geometry move. Anoptic already has a forward+ mesh path; the missing recipe is a fully parallel *construction* of the adaptive octree the 3D GI bet walks.

## Design

Sort primitives by Morton code. For each internal node i ∈ [0, n−2] in parallel: determine the range direction from the highest differing bit, binary-search the split, write left/right children. The binary radix tree is then a building block: collapse 3 consecutive bits for an octree, or emit AABBs along the same parent pointers for a BVH. Atomic flags terminate bottom-up AABB / occupancy reduction. Result is always in strict depth-first order. Cite Lauterbach 2009 / Pantaleoni HLBVH 2010 as sequential-level predecessors — do not mint. Cite Karras–Aila 2013 SAH quality leftover — do not mint.

## Evidence

HPG 2012, DOI `10.2312/eggh/hpg12/033-037`. NVIDIA PDF: `HPG2012_Papers_Karras.pdf`. GTX 480 / 30-bit Morton codes; compared against Garanzha et al. 2011 on an identical tree. Not GPU FMM 1184 (evaluation), not merged-node BVH 1063 (layout), not stack-free k-d walk 928 (traversal).

## Limitations

LBVH-quality, not SAH. 30-bit Morton codes clip large worlds; 64-bit is the obvious extension. Empty-space octree nodes still need a compaction pass (Hu 2013 interaction-list leftover). Binary radix tree is not itself an FMM interaction stencil.

## Implications for Broadside

This week's FMM+RC 3D GI bet needs an adaptive octree *builder* on the GPU, not another kernel-evaluation paper. Pair with SVO ray-cast (1241) for occupancy probes and with Hu interaction lists (1243) for the far-field stencil. Anoptic C: the algorithm is scans + atomics + Morton codes, the same primitives as decoupled look-back 1154.

## Bottom line

Mint the in-place parallel radix tree. Cite HLBVH / Lauterbach / Karras–Aila 2013; do not remint 1184 or 1063.

## Links

- DOI: [10.2312/eggh/hpg12/033-037](https://doi.org/10.2312/eggh/hpg12/033-037)
- NVIDIA: https://research.nvidia.com/publication/2012-06_maximizing-parallelism-construction-bvhs-octrees-and-k-d-trees
- PDF: https://www.highperformancegraphics.org/previous/www_2012/media/Papers/HPG2012_Papers_Karras.pdf
