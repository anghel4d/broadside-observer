---
title: "Efficient Sparse Voxel Octrees"
authors: ["Samuli Laine", "Tero Karras"]
year: 2010
venue: "I3D 2010"
arxiv: null
doi: "10.1145/1730804.1730814"
source: "https://doi.org/10.1145/1730804.1730814"
topics: [sparse-voxel-octrees]
seed_rank: 1241
seed_batch: "craft-2026-08-25"
reviewed: "2026-08-25"
pool: "graphics"
relevance_score: 10
lineage: sparse-voxel-octrees
cites:
  - title: "Efficient Sparse Voxel Octrees – Analysis, Extensions, and Implementation"
    url: "https://research.nvidia.com/publication/2010-02_efficient-sparse-voxel-octrees"
    year: 2010
    arxiv: null
    doi: null
  - title: "High-Resolution Sparse Voxel DAGs"
    url: "https://doi.org/10.1145/2461912.2462024"
    year: 2013
    arxiv: null
    doi: "10.1145/2461912.2462024"
  - title: "Gigavoxels: Ray-Guided Streaming for Efficient and Detailed Voxel Rendering"
    url: "https://doi.org/10.1145/1507149.1507171"
    year: 2009
    arxiv: null
    doi: "10.1145/1507149.1507171"
see:
  - "352-gigavoxels-ray-guided-streaming-for-efficient-and-detailed-v"
  - "1151-common-subtree-merging-compressed-opacity-micromaps"
  - "005-radiance-cascades-a-novel-approach-to-calculating-global-ill"
  - "1240-maximizing-parallelism-in-the-construction-of-bvhs-octrees-and-k-d-trees"
---

# Efficient Sparse Voxel Octrees

## One-sentence takeaway

A compact GPU octree plus a contour bit per node lets you ray-cast unique-per-voxel geometry at triangle-tracer speed — occupancy for RC probes without a dense 3D texture.

## Problem

3D radiance cascades and FMM near-field need an occupancy / blocker query: is this octree cell empty, a surface, or unknown. GigaVoxels 352 streams bricks; it does not give a pointer-chasing compact SVO you can walk from a compute shader. Anoptic's forward+ mesh path already shades triangles; the GI leftover is a GPU octree the probe can hit.

## Design

Store a sparse octree of voxels with child-mask + far-pointer packing. Attach a bilinear contour per node so a coarse cell still encodes a smooth surface without exploding depth. Object-space normals use a compact encoding; a variable-radius post-filter hides voxel faceting. Ray-cast is a DDA walk with early-exit on empty child masks. Cite GigaVoxels 352 as the streaming sibling — already minted. Cite SVDAG (Kämpe 2013, `10.1145/2461912.2462024`) as the common-subtree DAG leftover of this tree — do not mint; last Craft already kept OMM DAG 1151 for alpha, not occupancy. TVCG journal version `10.1109/tvcg.2010.240` is the same work; mint the I3D paper.

## Evidence

I3D 2010, DOI `10.1145/1730804.1730814`. Authors open-sourced the CUDA walker. NVIDIA TR NVR-2010-001 is the implementation companion — cite, do not mint. Competitive with triangle GPU ray tracing on unique-shaded voxels.

## Limitations

Surface voxels, not participating media. Contours help smooth surfaces, not foliage cards (that's OMM 1151). Construction is offline-ish; pair with Karras 1240 for a dynamic rebuild. SVDAG compresses better at 64k³ but loses unique per-voxel attributes.

## Implications for Broadside

FMM+RC 3D GI this week: each cascade interval is an occupancy query against an SVO, not a hardware any-hit. GRID COMMAND hex terrain / Anoptic blockers become a brick of voxels. Not a remint of GigaVoxels streaming, not a remint of OMM DAG.

## Bottom line

Mint the I3D SVO walker. Cite SVDAG and GigaVoxels; do not remint 352 or 1151.

## Links

- DOI: [10.1145/1730804.1730814](https://doi.org/10.1145/1730804.1730814)
- NVIDIA: https://research.nvidia.com/publication/2010-02_efficient-sparse-voxel-octrees
- PDF: https://www.nvidia.com/docs/IO/88889/laine2010i3d_paper.pdf
- TR: https://users.aalto.fi/~laines9/publications/laine2010tr1_paper.pdf
