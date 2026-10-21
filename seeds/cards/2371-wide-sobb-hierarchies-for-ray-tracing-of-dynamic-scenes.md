---
title: "Wide SOBB Hierarchies for Ray Tracing of Dynamic Scenes"
authors:
  - "Martin Káčerik"
  - "Tereza Hlavová"
  - "Jiří Bittner"
year: 2026
venue: "Computer Graphics Forum 45(7) (Pacific Graphics 2026)"
arxiv: null
doi: "10.1111/cgf.70643"
source: "https://diglib.eg.org/items/eafa8a5d-710e-4844-a9ce-d69ab6d5417f"
topics:
  - "bvh"
  - "ray-tracing"
  - "bounding-volumes"
  - "refit"
  - "gpu"
seed_rank: 2371
seed_batch: "craft-2026-10-21"
reviewed: "2026-10-21"
pool: "graphics"
relevance_score: 8
lineage: ray-tracing
cites:
  - title: "Wide SOBB Hierarchies for Ray Tracing of Dynamic Scenes"
    url: "https://doi.org/10.1111/cgf.70643"
    year: 2026
    arxiv: null
    doi: "10.1111/cgf.70643"
  - title: "SOBB: Skewed Oriented Bounding Boxes for Ray Tracing"
    url: "https://doi.org/10.1111/cgf.70062"
    year: 2025
    arxiv: null
    doi: "10.1111/cgf.70062"
  - title: "DOBB-BVH: Efficient Ray Traversal by Transforming Wide BVHs into Oriented Bounding Box Trees using Discrete Rotations"
    url: "https://doi.org/10.1111/cgf.70220"
    year: 2025
    arxiv: null
    doi: "10.1111/cgf.70220"
  - title: "Efficient Incoherent Ray Traversal on GPUs Through Compressed Wide BVHs"
    url: "https://doi.org/10.1145/3105762.3105773"
    year: 2017
    arxiv: null
    doi: "10.1145/3105762.3105773"
  - title: "Fast, Effective BVH Updates for Animated Scenes"
    url: "https://doi.org/10.1145/2159616.2159649"
    year: 2012
    arxiv: null
    doi: "10.1145/2159616.2159649"
see:
  - "1240-maximizing-parallelism-in-the-construction-of-bvhs-octrees-and-k-d-trees"
---

# Wide SOBB Hierarchies for Ray Tracing of Dynamic Scenes

## One-sentence takeaway

Káčerik, Hlavová and Bittner turn skewed oriented bounding boxes (SOBBs) into a drop-in 8-wide compressed BVH, with one shared skewed basis per node, and add a refit that pushes triangles rather than boxes up the tree, so tight bounding volumes finally work for animated scenes: secondary rays usually trace 1.07–1.6× faster than the compressed wide AABB BVH, at about 1.15× the build time and 1.45× the refit time.

## Why it matters here

Anoptic's ray tracing and GI work all goes through BVH traversal of incoherent secondary rays, and RTS scenes are full of animated units that rule out a rebuild every frame. This paper keeps the standard Ylitie et al. 8-wide quantized node layout and changes only the box: ray setup gets one extra projection per node, and the node gains 7–15 bits. The refit-by-geometry design (one thread per leaf child, a local test before any global atomic min/max, and 8-thread groups using subgroup clustered reductions) is a reusable pattern for any bottom-up GPU tree update, including culling hierarchies.

## Key ideas

- **Build by transformation.** First a binary AABB BVH with PLOC++, then leaf collapsing, then a top-down collapse to BVH8 with quantization. Finally each wide node gets a shared SOBB basis picked from k-DOP candidates. A shared basis keeps quantization simple and means only one ray transform per node.
- **Cheap basis cost.** Summing the child SOBB surface areas is accurate but needs every child's k-DOP, and the area of the union is cheap but ignores the children's shapes. A proxy k-DOP built from the average child slab widths gets the traversal quality of the sum at about the build cost of the union (CB^avg with the k² candidate strategy became the default).
- **Greedy-swaps child ordering.** Children are pre-sorted by octant using a greedy slot assignment and at most four improving swap passes, which gives auction-algorithm traversal quality for less build time. For SOBBs, a runtime "closest two hits" order with the child id packed into the 3 low bits of t is slightly better still.
- **Refit by geometry.** Instead of propagating k-DOPs (the original SOBB refit, about 5× slower than an AABB refit), each leaf child's triangles travel up the tree, and a node is updated with atomics only when the local fit actually grows. About 20% of local tests become atomics, and near the root almost none do. A second pass re-quantizes hybrid and internal nodes.
- **Numbers.** On an RTX 3080 Ti in Vulkan: secondary rays typically 7–60% faster than the AABB BVH8, and about 10× in the Sheep scene. On animated Bistro with up to 19 characters, the refit by geometry costs about 1.45–1.47× a standard AABB BVH8 refit (the standard SOBB refit costs 4.5–4.7×) and keeps about 1.42–1.46× the secondary-ray throughput. Scratch memory is about 15 MB, against about 60 MB for the old SOBB refit. Quality drops by less than 2–5% over 64 refit frames.

## Caveats

Primary rays usually trace slower than in a plain binary AABB BVH, because wide traversal hides less latency when rays are coherent (the authors note that secondary rays take 90–98% of trace time). Leaves are capped at three triangles by the inherited layout, and motion blur isn't handled. There's no comparison against DOBB-BVH on dynamic scenes, and the static-scene comparison uses numbers taken from the DOBB paper. The tests are software traversal on one GPU, so any hardware-RT benefit is speculation. The paper's repository link (github.com/kachnicka/cwsobb) returned 404 when this card was written; the author's earlier `sobb` repository is public.

## Links

- Eurographics Digital Library (open access): https://diglib.eg.org/items/eafa8a5d-710e-4844-a9ce-d69ab6d5417f
- PDF: https://diglib.eg.org/server/api/core/bitstreams/af6a971f-5fb3-4dd5-b1f3-64b915d44216/content
- DOI: https://doi.org/10.1111/cgf.70643
- Predecessor, SOBB (CGF 2025): https://doi.org/10.1111/cgf.70062
- Earlier SOBB code: https://github.com/kachnicka/sobb
