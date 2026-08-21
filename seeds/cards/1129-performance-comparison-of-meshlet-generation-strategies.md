---
title: "Performance Comparison of Meshlet Generation Strategies"
authors: ["Mark Bo Jensen", "Jeppe Revall Frisvad", "J. Andreas Bærentzen"]
year: 2023
venue: "JCGT"
arxiv: null
doi: null
source: "https://jcgt.org/published/0012/02/01/"
topics: [mesh-shaders-gpu-driven, vulkan-realtime-rendering]
seed_rank: 1129
seed_batch: "craft-2026-08-21"
reviewed: "2026-08-21"
pool: "graphics"
relevance_score: 9
lineage: mesh-shaders-gpu-driven
cites:
  - title: "Introduction to Turing Mesh Shaders"
    url: "https://developer.nvidia.com/blog/introduction-turing-mesh-shaders/"
    year: 2018
    arxiv: null
    doi: null
  - title: "meshoptimizer"
    url: "https://github.com/zeux/meshoptimizer"
    year: 2017
    arxiv: null
    doi: null
  - title: "Towards Practical Meshlet Compression"
    url: "https://doi.org/10.1111/cgf.14607"
    year: 2022
    arxiv: null
    doi: "10.1111/cgf.14607"
see:
  - "097-mesh-shaders-in-the-vulkan-ecosystem"
  - "261-introduction-to-turing-mesh-shaders"
  - "226-towards-practical-meshlet-compression"
  - "1032-real-time-meshlet-extraction-from-scalar-volumes"
  - "1058-real-time-procedural-resurfacing-using-gpu-mesh-shader"
  - "470-vulkan-meshlet-cad-scene-sample"
---

# Performance Comparison of Meshlet Generation Strategies

## One-sentence takeaway

Mesh-shader throughput is dominated by *how you pack* existing triangle meshes into meshlets: minimize meshlet count, fill vertices then primitives, and follow vendor limits — measured, with two simple packers and code.

## Why it matters here

Anoptic already has a forward+ mesh path; "needs a mesh renderer" is not a reason to keep or reject. What we do *this week* is pack GRID COMMAND / Anoptic meshes into meshlets that actually cull and transform well. Extraction from volumes (1032) and task+mesh resurfacing (1058) do not tell you how to cluster an authored triangle soup. Compression (226) is a codec, not a packer. This JCGT paper is the practitioner recipe: render-time-per-triangle over many views on NVIDIA, guidelines, and `meshletmaker` (Kapoulkine meshoptimizer + Kubisch CAD-scene DNA) you can run on Anoptic assets today.

## Key ideas

- Meshlet performance is not "any clustering": spatially coherent, vertex-complete-first then primitive-fill packs beat naive triangle bins.
- Hardware limits (max vertices / max primitives per meshlet) are first-class; oversize meshlets spill, undersize meshlets waste occupancy.
- Two simple generation methods, combined with vendor best practices, match more elaborate packers on measured ms/triangle.
- Code: https://github.com/Senbyo/meshletmaker

## Caveats

- JCGT 2023 vol. 12 no. 2 pp. 1–27; NVIDIA-only measurements. AMD/Intel mesh-shader occupancy can disagree — re-bench on Anoptic's target GPUs.
- No DOI / no arXiv. Canonical URL `https://jcgt.org/published/0012/02/01/`.
- Do not remint 097 / 261 / 1032 / 1058 / 226 / 470.

## Links

- Paper: https://jcgt.org/published/0012/02/01/
- PDF: https://jcgt.org/published/0012/02/01/paper.pdf
- Code: https://github.com/Senbyo/meshletmaker
