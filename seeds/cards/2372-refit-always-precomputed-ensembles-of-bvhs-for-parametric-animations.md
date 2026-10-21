---
title: "Refit Always—Precomputed Ensembles of Bounding Volume Hierarchies for Parametric Animations"
authors:
  - "Reiner Dolp"
  - "Jean-Marc Thiery"
  - "Carsten Dachsbacher"
year: 2026
venue: "Computer Graphics Forum 45(7) (Pacific Graphics 2026)"
arxiv: null
doi: "10.1111/cgf.70645"
source: "https://diglib.eg.org/items/5c893805-4443-4e13-8810-6de5d3fcc6c3"
topics:
  - "bvh"
  - "skeletal-animation"
  - "refit"
  - "ray-tracing"
  - "collision-detection"
seed_rank: 2372
seed_batch: "craft-2026-10-21"
reviewed: "2026-10-21"
pool: "graphics"
relevance_score: 8
lineage: ray-tracing
cites:
  - title: "Refit Always—Precomputed Ensembles of Bounding Volume Hierarchies for Parametric Animations"
    url: "https://doi.org/10.1111/cgf.70645"
    year: 2026
    arxiv: null
    doi: "10.1111/cgf.70645"
  - title: "H-PLOC: Hierarchical Parallel Locally-Ordered Clustering for Bounding Volume Hierarchy Construction"
    url: "https://doi.org/10.1145/3675377"
    year: 2024
    arxiv: null
    doi: "10.1145/3675377"
  - title: "Parallel Reinsertion for Bounding Volume Hierarchy Optimization"
    url: "https://doi.org/10.1111/cgf.13376"
    year: 2018
    arxiv: null
    doi: "10.1111/cgf.13376"
  - title: "Fast Parallel Construction of High-Quality Bounding Volume Hierarchies"
    url: "https://doi.org/10.1145/2492045.2492055"
    year: 2013
    arxiv: null
    doi: "10.1145/2492045.2492055"
  - title: "Fast, Effective BVH Updates for Animated Scenes"
    url: "https://doi.org/10.1145/2159616.2159649"
    year: 2012
    arxiv: null
    doi: "10.1145/2159616.2159649"
---

# Refit Always—Precomputed Ensembles of Bounding Volume Hierarchies for Parametric Animations

## One-sentence takeaway

For skinned characters, Dolp, Thiery and Dachsbacher build a small set of BVH topologies offline that together cover the animation pose space, then use a tiny MLP at runtime to pick one from the skeleton pose and only refit it, which gives roughly H-PLOC rebuild quality (1.01× its SAH) at refit cost: 1.25× lower SAH than rebuilding with LBVH every frame, while running 2.4× faster.

## Why it matters here

An RTS draws hundreds of skinned units that share a few rigs and animation sets, which is exactly the "parametric animation" case. Anoptic's options for unit BLASes today are to rebuild every frame with a fast low-quality builder, or to refit one topology and watch it degrade (an unlucky reference frame can be an order of magnitude worse than a rebuild). This paper moves the quality work offline and per rig, keyed on joint positions, so it suits shared character assets. The same idea (select a precomputed topology, then refit) also fits collision and culling hierarchies.

## Key ideas

- **Pose sampling.** Each animation is sampled at 30 fps. A pose is kept only if some joint is more than ε away from every pose kept so far (positions taken relative to the root, so the BVH is translation-invariant), and rejected poses add to the weight of their nearest kept pose. ε ≈ 20 cm was enough for Mixamo, because triangle size and Morton resolution are far smaller than the bone-scale motion that actually changes topology.
- **Cost matrix.** c_ij is the SAH of the BVH built for pose i and then refit to pose j. Choosing M topologies is a weighted facility-location MILP (solved with HiGHS), with a greedy approximation for larger sample sets. A tolerance κ discards assignments worse than (1+κ) times a rebuild, which traces the trade-off between M and κ.
- **Tiny selector.** An MLP with 2 hidden layers of 64 units, deliberately trained to overfit, maps root-normalized joint positions to a topology index in about 13 µs. Joint positions classified slightly better than raw bone rotations.
- **Results.** On Mixamo (105 characters, 2,328 animations; RTX 3070), with 25 topologies built using PRBVH: SAH is 2.57× lower than OIBVH, 1.25× lower than LBVH, and 1.01× H-PLOC. A refit is 2.0–2.7× faster than an LBVH rebuild and 4.5–5.9× faster than an H-PLOC rebuild. A single topology already stays within 20% of a rebuild for every frame if the right reference pose is chosen. The learned clusters are readable (for example, "hands near the head" or "holding a gun at any heading").
- **Memory.** Storing only topologies (16 B per node, with boxes left out) takes about 14 MiB for 10 topologies of the 32k-triangle Abe, plus about 3.9 MiB for the instantiated BVH, so the refit is out-of-place.

## Caveats

It covers skeletal animation only: poses outside the sampled distribution have no confidence signal and no fallback to a rebuild yet, and procedural or physics deformation isn't parametric in this sense. Memory grows with the number of topologies per character, and the authors propose topology deltas or streaming as future work. Quality is measured in SAH, not in end-to-end trace time inside a renderer, and the test characters are humanoids of 4k–59k triangles. Offline preprocessing (the PRBVH build, the cost matrix and the MILP) has to be repeated per rig and per animation set.

## Links

- Eurographics Digital Library: https://diglib.eg.org/items/5c893805-4443-4e13-8810-6de5d3fcc6c3
- PDF: https://diglib.eg.org/server/api/core/bitstreams/84d93a91-670d-4110-bf9a-493c20ce0876/content
- DOI: https://doi.org/10.1111/cgf.70645
- H-PLOC (baseline builder): https://doi.org/10.1145/3675377
