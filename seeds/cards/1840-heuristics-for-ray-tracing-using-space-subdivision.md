---
title: "Heuristics for Ray Tracing Using Space Subdivision"
authors:
  - "J. David MacDonald"
  - "Kellogg S. Booth"
year: 1990
venue: "The Visual Computer 6(3)"
arxiv: null
doi: "10.1007/BF01911006"
source: "https://www.rose-hulman.edu/class/cs/csse451/Papers-hierarchy/MacDonald-Heuristics%20for%20ray%20tracing%20using%20space%20subdivision.pdf"
topics:
  - ray-tracing
  - surface-area-heuristic
  - acceleration-structures
  - kd-trees
  - bvh
seed_rank: 1840
seed_batch: "archive-2026-10-06"
reviewed: "2026-10-06"
pool: "graphics"
relevance_score: 9
lineage: ray-tracing
cites:
  - title: "Automatic Creation of Object Hierarchies for Ray Tracing"
    url: "https://doi.org/10.1109/MCG.1987.276983"
    year: 1987
    arxiv: null
    doi: "10.1109/MCG.1987.276983"
  - title: "Ray Tracing Complex Scenes"
    url: "https://doi.org/10.1145/15886.15916"
    year: 1986
    arxiv: null
    doi: "10.1145/15886.15916"
  - title: "Space Subdivision for Fast Ray Tracing"
    url: "https://doi.org/10.1109/MCG.1984.6429331"
    year: 1984
    arxiv: null
    doi: "10.1109/MCG.1984.6429331"
  - title: "A Fast Voxel Traversal Algorithm for Ray Tracing"
    url: "https://doi.org/10.2312/egtp.19871000"
    year: 1987
    arxiv: null
    doi: "10.2312/egtp.19871000"
  - title: "Distributed Ray Tracing"
    url: "https://doi.org/10.1145/964965.808590"
    year: 1984
    arxiv: null
    doi: "10.1145/964965.808590"
see:
  - "1098-a-fast-voxel-traversal-algorithm-for-ray-tracing"
  - "1659-distributed-ray-tracing"
---

# Heuristics for Ray Tracing Using Space Subdivision

## One-sentence takeaway

The surface area heuristic: the chance a ray hits a node is roughly its surface area over the root's, so choose split planes that minimize expected traversal plus intersection cost — and the optimal plane lies between the spatial median and the object median.

## Why it matters here

Every modern BVH/k-d builder Anoptic might use — CPU SAH sweeps, binned GPU builders, LBVH-then-refine — optimizes the SAH cost model introduced here for space subdivision (building on Goldsmith–Salmon's use for bounding hierarchies). The library has BVH layout/compression and parallel-build cards but not the cost model they all optimize; this is the root to cite when tuning meshlet/cluster BVHs for shadow, GI or visibility rays.

## Key ideas

- **Surface-area probability.** For uniformly distributed rays from far away, the number of rays hitting a convex volume is proportional to its surface area (Stone 1975); the paper assumes P(hit node) = SA(node)/SA(root).
- **Validated estimates.** 529 random scenes × 10,000 random rays: rays hitting a box = 27.5 × surface area (SD 5.2%, r = 0.995); interior-node and leaf hits come out at 0.75× and 0.83× the estimate (so the estimates behave as upper bounds); object tests 1.03× the estimate (SD 9.5%).
- **Optimal split location.** Analysis of the cost as a function of split position shows the optimum lies between the spatial median and object median; they sample nine positions per node, or use the midpoint as a cheap heuristic.
- **Greedy build by gain.** The "arbitrary acyclic" builder (any axis, any position, expand the node with highest estimated gain) cut object tests by up to three orders of magnitude on small non-overlapping objects; Kaplan-style spatial median won on dense interpenetrating triangles, and a hybrid did best overall.
- **Fewer duplicated references.** SAH-driven splits produced only ~10–20% more object instances than objects, versus up to 10× for spatial-median schemes.
- **Neighbour links.** Traversal via cross links between leaves (generalized octree "ropes") removes most upward/downward hierarchy traversal at the cost of extra pointers per leaf.

## Caveats

1990 bintree (k-d) space subdivision with simulated cost counts, not wall-clock GPU traversal; the uniform-ray, far-origin assumption is wrong for coherent primary rays and for short GI/shadow rays, and the build is greedy one-step lookahead. Objects straddling split planes are deferred to MacDonald's thesis. Distinct from voxel traversal 1098 and from live BVH-layout/build cards (e.g. 1240, 1063, 1036). Kay–Kajiya 1986 slabs and Goldsmith–Salmon 1987 remain cites, not cards.

## Links

- PDF (Rose-Hulman course copy): https://www.rose-hulman.edu/class/cs/csse451/Papers-hierarchy/MacDonald-Heuristics%20for%20ray%20tracing%20using%20space%20subdivision.pdf
- DOI: https://doi.org/10.1007/BF01911006
