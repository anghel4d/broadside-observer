---
title: "A Simple Ray Acceleration Structure for Non-LTE Radiative Transfer"
authors:
  - "Christopher M. J. Osborne"
year: 2025
venue: "RAS Techniques and Instruments"
arxiv: "2511.08498"
doi: "10.1093/rasti/rzaf055"
source: "https://arxiv.org/abs/2511.08498"
topics:
  - radiance-cascades
  - gi
  - radiative-transfer
  - sparse-voxels
seed_rank: 1107
seed_batch: "radiance-cascades-3d-2026-08-20"
reviewed: "2026-08-20"
pool: "graphics"
relevance_score: 9
lineage: radiance-cascades
cites:
  - title: "Radiance Cascades: A Novel High-Resolution Formal Solution for Multidimensional Non-LTE Radiative Transfer"
    url: "https://arxiv.org/abs/2408.14425"
    year: 2024
    arxiv: "2408.14425"
    doi: "10.1093/rasti/rzae062"
  - title: "A Fast Voxel Traversal Algorithm for Ray Tracing"
    url: "https://doi.org/10.2312/egtp.19871000"
    year: 1987
    arxiv: null
    doi: "10.2312/egtp.19871000"
  - title: "Hierarchical digital differential analyzer for efficient raymarching in OpenVDB"
    url: "https://doi.org/10.1145/2614106.2614136"
    year: 2014
    arxiv: null
    doi: "10.1145/2614106.2614136"
  - title: "GigaVoxels: Ray-Guided Streaming for Efficient and Detailed Voxel Rendering"
    url: "https://doi.org/10.1145/1507149.1507152"
    year: 2009
    arxiv: null
    doi: "10.1145/1507149.1507152"
  - title: "Interactive Indirect Illumination Using Voxel Cone Tracing"
    url: "https://doi.org/10.1111/j.1467-8659.2011.02063.x"
    year: 2011
    arxiv: null
    doi: "10.1111/j.1467-8659.2011.02063.x"
see:
  - "453-radiance-cascades-a-novel-high-resolution-formal-solution-fo"
  - "005-radiance-cascades-a-novel-approach-to-calculating-global-ill"
  - "208-split-radiance-cascades-real-time-global-illumination-via-sp"
  - "1098-a-fast-voxel-traversal-algorithm-for-ray-tracing"
  - "352-gigavoxels-ray-guided-streaming-for-efficient-and-detailed-v"
  - "272-interactive-indirect-illumination-using-voxel-cone-tracing"
---

# A Simple Ray Acceleration Structure for Non-LTE Radiative Transfer

## One-sentence takeaway

Variance-limited mipmaps + sparse VDB-like bricks + HDDA give DexRT's radiance-cascades formal solver an ~8–10× speedup at <0.5% p99.9 population error by skipping empty space and coarsening far intervals.

## Why it matters here

Anoptic's Vulkan RTGI inherits the same O(n³) wall: a dense cascade-0 voxel/probe grid does not survive unbounded 3D. Osborne's 2025 DexRT paper is the astrophysics twin of Split RC — it keeps the Sannikov cascade merge and refuses to march every empty / smooth cell at full resolution. Transferable pieces for a world-space engine: per-block MIP caps on far cascades, Morton bricks, packed skip-empty state, and HDDA instead of a linear raymarcher.

## Key ideas

- Built *inside* DexRT, the Osborne–Sannikov radiance-cascades non-LTE solver: long-characteristics intervals stay, traversal is what changes.
- Variance-limited mipmapping (VLM): average 2^D neighbourhoods of ln(ηΔs) / ln(χΔs) until the index of dispersion exceeds a threshold (~1), always collapsing optically thin cells (χΔs < 0.25).
- Sparse two-level brick grid (16² in 2D, 8³ in 3D; VDB-inspired) with packed 3-bit-per-block MIP/empty state — a 512³ occupancy map fits in ~5.4 kB.
- Hierarchical DDA (Museth HDDA on Amanatides–Woo) walks bricks and MIP levels without fixed-step oversampling; far cascades are hard-capped to coarser MIPs.
- Anisotropic extension (AVLM): velocity-grid interpolation vs "Core and Voigt" (store direction-independent line weights, evaluate the Voigt profile per ray). Default is Core and Voigt.
- On a 512×768 prominence-thread snapshot, SparseCavMips is 11.8 s/iter vs 95 s DenseClassic (~8×); sparser atmospheres exceed 10×. DexRT v0.5.0 ships 3D support.

## Caveats

- Published timings are a 2D slice with coronal sparsity; 3D brick packing is specified and implemented, but the paper does not report a filled 3D game-world probe grid.
- This accelerates *interval marching* through a voxel atmosphere. It does not, by itself, replace Split RC's sparse hashmap + ray splitting for surface GI in unbounded space.
- Peak level-population error ~12% in a vanishing tail (p99.9 typically <0.5%). Hot empty corona is a friendlier sparsity prior than a cluttered interiors scene.
- Prefiltering of radiance *intervals* (merge averaged blocks) is named as future work, not shipped.

## Links

- arXiv: [2511.08498](https://arxiv.org/abs/2511.08498)
- PDF: https://arxiv.org/pdf/2511.08498
- DOI: [10.1093/rasti/rzaf055](https://doi.org/10.1093/rasti/rzaf055)
- DexRT: https://github.com/Goobley/DexRT
