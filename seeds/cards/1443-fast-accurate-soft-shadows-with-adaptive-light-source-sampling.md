---
title: "Fast Accurate Soft Shadows with Adaptive Light Source Sampling"
authors: ["Michael Schwärzler", "Oliver Mattausch", "Daniel Scherzer", "Michael Wimmer"]
year: 2012
venue: "Vision, Modeling and Visualization (VMV) 2012, Eurographics Association"
arxiv: null
doi: "10.2312/PE/VMV/VMV12/039-046"
source: "https://diglib.eg.org/items/c9af3161-02fa-45a0-be39-28ec3005e487"
topics: [vulkan-realtime-rendering, soft-shadows, shadow-maps]
seed_rank: 1443
seed_batch: "user-jcgt-vmv-2026-08-28"
reviewed: "2026-08-28"
pool: "graphics"
relevance_score: 9
lineage: soft-shadows
cites:
  - title: "Percentage-Closer Soft Shadows"
    url: "https://developer.download.nvidia.com/shaderlibrary/docs/shadow_PCSS.pdf"
    year: 2005
    arxiv: null
    doi: null
  - title: "Variance Shadow Maps"
    url: "https://doi.org/10.1145/1111411.1111440"
    year: 2006
    arxiv: null
    doi: "10.1145/1111411.1111440"
  - title: "Casting Curved Shadows on Curved Surfaces"
    url: "https://doi.org/10.1145/965139.807360"
    year: 1978
    arxiv: null
    doi: "10.1145/965139.807360"
see:
  - "1415-real-time-soft-shadows-in-dynamic-scenes-using-spherical-harmoni"
  - "359-variance-shadow-maps"
  - "356-cascaded-shadow-maps"
  - "1042-lightcuts-a-scalable-approach-to-illumination"
  - "1374-spatiotemporal-reservoir-resampling-for-real-time-ray-tracing-wi"
  - "1432-visibility-culling-using-hierarchical-occlusion-maps"
---

# Fast Accurate Soft Shadows with Adaptive Light Source Sampling

## One-sentence takeaway

Quadtree-subdivide an area light, compare the four corner shadow maps in camera space with an occlusion query, and only mint more samples where the penumbra would band — physically based soft shadows at a fraction of a 289-map brute-force grid.

## Why it matters here

Anoptic's many-light path is ReSTIR (1374) and Lightcuts (1042); the raster leftover is still shadow maps (VSM 359, CSM 356, SHExp 1415). PCSS (Fernando 2005) is *seen* but never minted — a single-map penumbra heuristic, not multi-sample visibility. This VMV 2012 paper is the adaptive *area-light sampling* cell: start with four corner maps, reproject, HOQ-test whether neighboring hard-shadow borders are too far apart, and refine. Same "pay only where the integral is hard" shape as Meister–Hachisuka 1442, but for raster soft shadows rather than GPU path-space sampling.

## Key ideas

- **Multi-sample ground truth.** Approximate area-light visibility by n point lights, each with a shadow map; ψ̂ = (1/n) Σ τi. Dense enough → physically correct umbra/penumbra; too sparse → visible banding (several hard shadows).
- **View-dependent quadtree.** Always rasterize the four corners of a rectangular area light. Reproject those maps into camera space. Accumulate 0–4 shadow bits per pixel; a penumbra texel (1–3) whose 8-ring is uniform means the hard borders are too far apart → HOQ counts failing fragments → split the quad, add mid-edge/center samples, recurse to a cap (289 maps = depth 4).
- **Weights and evaluation.** Sample i at subdivision depth d gets ωi = 1/(2d+1)², then renormalize so Σω = 1. Accumulate via deferred + ping-pong buffer, or sample a texture array (up to 512) in one pass (~10% faster). Optional 2×2/3×3 PCF hides leftover bands if the comparison target is downsized.
- **Evidence.** VMV 2012, DOI `10.2312/PE/VMV/VMV12/039-046`, GTX 580. Far view: 25 maps / 67 FPS vs 289 / 10 FPS. Close view: 105 / 18 FPS vs 289 / 10 FPS. Sponza: 163 maps / 5 FPS ≈ 289 / 2.5 FPS; half-res comparison + 3×3 PCF → 14 maps / 40 FPS. PCSS (64/64) is much faster (370 FPS) but the difference image vs ground truth is large.

## Caveats

HOQ + CPU/GPU sync costs ~30% of frame time; when the penumbra fills the screen you fall back to the 289-map cap and *lose* to a fixed grid. Sample count jumps with camera/geometry, so this is a lighting-design preview, not a locked-FPS game feature (authors say so). Square-light quadtree as written; volumetric lights are future work. Relaxing the comparison resolution trades physical accuracy for speed. Not PCSS, not VSM/CSM, not SHExp 1415, not ReSTIR.

## Links

- EG Digital Library: https://diglib.eg.org/items/c9af3161-02fa-45a0-be39-28ec3005e487
- PDF: https://diglib.eg.org/bitstreams/a8e8080f-fc96-417d-9f8e-693c391c68dd/download
- DOI: [10.2312/PE/VMV/VMV12/039-046](https://doi.org/10.2312/PE/VMV/VMV12/039-046)
- BibTeX: `@inproceedings{10.2312:PE/VMV/VMV12/039-046}`
