---
title: "BVH Encoding for Neural-Assisted Ray Tracing"
authors:
  - "Daniel Meister"
  - "Takahiro Harada"
year: 2026
venue: "Journal of Computer Graphics Techniques (JCGT) 15(2)"
arxiv: null
doi: null
source: "https://jcgt.org/published/0015/02/03/"
topics:
  - "neural-radiance-cache"
  - "input-encoding"
  - "bvh"
  - "ray-tracing"
  - "global-illumination"
seed_rank: 2349
seed_batch: "craft-2026-10-19"
reviewed: "2026-10-19"
pool: "graphics"
relevance_score: 8
lineage: realtime-gi
cites:
  - title: "BVH Encoding for Neural-Assisted Ray Tracing"
    url: "https://jcgt.org/published/0015/02/03/"
    year: 2026
    arxiv: null
    doi: null
  - title: "Real-time Neural Radiance Caching for Path Tracing"
    url: "https://arxiv.org/abs/2106.12372"
    year: 2021
    arxiv: "2106.12372"
    doi: "10.1145/3450626.3459812"
  - title: "Instant Neural Graphics Primitives with a Multiresolution Hash Encoding"
    url: "https://arxiv.org/abs/2201.05989"
    year: 2022
    arxiv: "2201.05989"
    doi: "10.1145/3528223.3530127"
  - title: "GATE: Geometry-aware Trained Encoding"
    url: "https://doi.org/10.2312/hpg.20251175"
    year: 2025
    arxiv: null
    doi: "10.2312/hpg.20251175"
see:
  - "1378-real-time-neural-radiance-caching-for-path-tracing"
  - "1240-maximizing-parallelism-in-the-construction-of-bvhs-octrees-and-k-d-trees"
  - "231-gi-1-0-a-fast-and-scalable-two-level-radiance-caching-scheme"
---

# BVH Encoding for Neural-Assisted Ray Tracing

## One-sentence takeaway

Instead of a separate hash grid, AMD's Meister and Harada store a neural radiance cache's learnable feature vectors at the eight corners of the boxes in a fixed-size cut through the BVH the ray tracer already has, so the encoding follows the scene's geometry, works for any primitive type, and has a memory cost set by the cut size rather than the scene.

## Why it matters here

Anoptic's GI path already leans on radiance caching, and the usual neural cache input (a multiresolution hash grid) has a known failure mode: big open scenes where a whole cave or a "teapot in a stadium" falls into a few grid cells. This reuses the acceleration structure as the spatial index, needs only two extra indices in the hit record, and keeps the feature budget flat. It's a small, practical design to try if a neural cache lands next to the existing caches, and a nice example of one data structure serving two jobs.

## Key ideas

- **The BVH cut.** A cut is a set of nodes that separates the root from the leaves, so every primitive belongs to exactly one cut node. It's built by opening the node with the largest surface area first (a priority queue, as in Hendrich et al. 2017) until a maximum cut size is reached, and each primitive gets a mapping to its cut node.
- **Encoding.** The hit record returns the cut node index and a sequential index into a feature buffer. The hit point is normalized inside that node's box and the eight corner feature vectors are blended trilinearly, with a guard for flat boxes such as axis-aligned triangles. A coarser parent level gives a second resolution, like levels in a grid encoding.
- **Two-level BVHs.** Cuts live in the bottom-level structures, so they cost nothing per frame (only the top level is rebuilt). Each bottom-level structure's budget is split by world-space surface area, and instances share the cut but keep their own features through prefix-summed offsets.
- **Hardware details.** Hardware BVH formats keep child boxes inside the parent, so a cut node is packed as a parent index plus a child slot in one 32-bit word, and the minimum cut is the branching factor (4 or 8). In HIPRT this needed only a build parameter, two hit fields and a point-normalizing function.
- **Training-sample rebalancing.** Uniform sampling crowds large nodes and causes atomic contention during gradient accumulation. Visible nodes are counted, and each one's samples are stochastically reused or dropped toward an equal share, with a fraction r of samples drawn this way and the rest uniform. Reused samples get different path suffixes.
- **Results.** On a Radeon AI PRO R9700 the method is roughly level with the hash grid in FLIP error across five scenes. It wins in the Cave scene when the budget suits the scene (0.373 versus 0.388), runs 46–49 ms per frame against the grid's 61.6 ms there, and depends much less on the normal, albedo and roughness guide inputs (Hangar Ship without them scores 0.226 against 0.411).

## Caveats

It can't refine below a leaf, so large triangles get coarse features, and spatial splits would put hit points outside their node. The cut is static and its budget follows surface area, not visibility, so off-screen teapots still take a share. Each feature belongs to one box instead of being shared with neighbours, so there are fewer samples per feature and training is harder. Training is usually a bit slower than the grid's tuned kernels, the r ratio trades quality against time per scene, and hit points must lie inside their node, which rules out volumes. It's one vendor's in-house renderer, and results are averaged over 16 runs because of nondeterministic atomics.

## Links

- JCGT paper page: https://jcgt.org/published/0015/02/03/
- PDF: https://jcgt.org/published/0015/02/03/paper.pdf
- HIPRT (AMD ray tracing framework used): https://gpuopen.com/hiprt/
- Neural Radiance Caching (Müller et al. 2021): https://arxiv.org/abs/2106.12372
