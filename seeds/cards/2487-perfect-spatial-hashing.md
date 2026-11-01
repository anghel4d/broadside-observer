---
title: "Perfect Spatial Hashing"
authors:
  - "Sylvain Lefebvre"
  - "Hugues Hoppe"
year: 2006
venue: "ACM Transactions on Graphics 25(3) (SIGGRAPH 2006), 579–588"
arxiv: null
doi: "10.1145/1141911.1141926"
source: "https://hhoppe.com/proj/perfecthash/"
topics:
  - "perfect-hashing"
  - "sparse-data"
  - "gpu"
  - "spatial-data-structures"
seed_rank: 2487
seed_batch: "archive-2026-11-02"
reviewed: "2026-11-02"
pool: "engines"
lineage: spatial-hashing
relevance_score: 9
cites:
  - title: "Perfect Spatial Hashing"
    url: "https://doi.org/10.1145/1141911.1141926"
    year: 2006
    arxiv: null
    doi: "10.1145/1141911.1141926"
see: ["1136-optimized-spatial-hashing-for-collision-detection-of-deforma", "2299-phastr-faster-minimal-perfect-hashing-with-rotated-layouts", "352-gigavoxels-ray-guided-streaming-for-efficient-and-detailed-v"]
---

# Perfect Spatial Hashing

## One-sentence takeaway

Pack sparse 2D or 3D data into a dense table with a precomputed collision-free hash h(p) = h0(p) + Φ[h1(p)], where a small offset table Φ "jitters" positions so every lookup costs exactly two memory reads and no probing, which is ideal for SIMD/GPU shaders.

## Why it matters here

Radiance cascades in 3D and the occupied-geometry octree ideas both want sparse spatial storage with branch-free random access from a shader. This gives a fixed two-fetch lookup with no pointer chasing and no divergent probe loops, plus a construction that deliberately keeps neighbours near each other in memory. It is a strong default for static or rarely-rebuilt sparse grids in Anoptic (baked probes, voxelized surfaces, masks).

## Key ideas

- h0 and h1 are simple modular maps of position (no pseudorandom mixing); all the collision avoidance lives in the offset table.
- The offset table is typically only about 15–25% as many entries as the data, with 8 bits per coordinate per entry.
- Greedy construction fills Φ heaviest-bucket-first (after Fox et al. 1992), retrying with different table sizes, and picks offsets that maximize spatial coherence of the result.
- Defined/undefined cells can be told apart with a position tag or a domain bit; filtering and mipmapping are handled in the shader.
- Demos: vector images, texture sprites, alpha compression, 3D-parameterized textures, 3D painting, and a fluid simulation on a 256^3 sparse surface grid at 103 frames/s.

## Caveats

Read the abstract, sections 1–4 and the applications section; benchmarks are on 2006 GPUs. The hash is built for static data: inserting new cells means rebuilding, so fully dynamic sparse sets need another structure. Construction is an offline preprocessing step, not something to run per frame.

## Links

- [Project page](https://hhoppe.com/proj/perfecthash/)
- [PDF](https://hhoppe.com/perfecthash.pdf)
- [DOI](https://doi.org/10.1145/1141911.1141926)
