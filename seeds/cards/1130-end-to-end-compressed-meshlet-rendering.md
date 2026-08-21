---
title: "End-to-End Compressed Meshlet Rendering"
authors: ["Daniel Mlakar", "Markus Steinberger", "Dieter Schmalstieg"]
year: 2024
venue: "Computer Graphics Forum"
arxiv: null
doi: "10.1111/cgf.15002"
source: "https://doi.org/10.1111/cgf.15002"
topics: [mesh-shaders-gpu-driven, vulkan-realtime-rendering]
seed_rank: 1130
seed_batch: "craft-2026-08-21"
reviewed: "2026-08-21"
pool: "graphics"
relevance_score: 9
lineage: mesh-shaders-gpu-driven
cites:
  - title: "Towards Practical Meshlet Compression"
    url: "https://doi.org/10.1111/cgf.14607"
    year: 2022
    arxiv: null
    doi: "10.1111/cgf.14607"
  - title: "Performance Comparison of Meshlet Generation Strategies"
    url: "https://jcgt.org/published/0012/02/01/"
    year: 2023
    arxiv: null
    doi: null
  - title: "Mesh Shaders in the Vulkan Ecosystem"
    url: "https://www.khronos.org/blog/mesh-shading-for-vulkan"
    year: 2022
    arxiv: null
    doi: null
see:
  - "226-towards-practical-meshlet-compression"
  - "097-mesh-shaders-in-the-vulkan-ecosystem"
  - "1129-performance-comparison-of-meshlet-generation-strategies"
  - "1058-real-time-procedural-resurfacing-using-gpu-mesh-shader"
  - "1032-real-time-meshlet-extraction-from-scalar-volumes"
---

# End-to-End Compressed Meshlet Rendering

## One-sentence takeaway

Keep the *same* compressed meshlet bytes in storage and in GPU memory; decompress inside the mesh shader just-in-time, with laced-wire connectivity that admits primitive-level random access.

## Why it matters here

226 is a meshlet *codec*. This CGF paper is the engine contract: one representation, no CPU decompress-then-upload, no dual resident copies. Anoptic's mesh path can stream GRID COMMAND world chunks as compressed meshlets and decode in the mesh shader on the draw that needs them — which is the bandwidth recipe 226 does not give you. Laced wires avoid vertex duplication while staying parallel-decodeable; task shaders can cull at meshlet granularity without inflating the uncompressed working set.

## Key ideas

- Identical compressed format on disk and in VRAM; mesh-shader decode is the geometry stage.
- Laced-wire connectivity: disjoint primitive groups, no vertex redundancy, random access at primitive grain for selective streaming and visibility.
- Bandwidth win is CPU–GPU *and* in-memory footprint; scenes that did not fit uncompressed now stay resident.
- Compare against common compressed-meshlet layouts on memory and render time.

## Caveats

- CGF 2024 vol. 43 no. 1 e15002. No arXiv. Cite 226, do not remint it.
- Decode occupancy is mesh-shader-limit bound; pair with 1129's packing guidelines rather than treating compression as a packer.
- Not Nanite virtualized geometry and not volume extraction (1032).

## Links

- DOI: [10.1111/cgf.15002](https://doi.org/10.1111/cgf.15002)
- EG DL PDF: https://diglib.eg.org/server/api/core/bitstreams/eabce3df-023a-40a5-beeb-4c1743606691/content
