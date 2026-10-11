---
title: "Real-time Rendering of Pre-integrated Neural Emitters"
authors:
  - "Arno Coomans"
  - "Floor Verhoeven"
  - "Edoardo A. Dominici"
  - "Markus Steinberger"
year: 2026
venue: "arXiv"
arxiv: "2610.06762"
doi: null
source: "https://arxiv.org/abs/2610.06762"
topics:
  - "vulkan-realtime-rendering"
  - "many-lights"
seed_rank: 2264
seed_batch: "craft-2026-10-11"
reviewed: "2026-10-11"
pool: "graphics"
relevance_score: 7
lineage: many-lights
cites:
  - title: "Real-time Rendering of Pre-integrated Neural Emitters"
    url: "https://arxiv.org/abs/2610.06762"
    year: 2026
    arxiv: "2610.06762"
    doi: null
see:
  - "1382-importance-sampling-of-many-lights-with-adaptive-tree-splitting"
  - "1375-restir-gi-path-resampling-for-real-time-path-tracing"
  - "2253-neural-caching-of-prefiltered-radiance-for-specular-lighting"
---

# Real-time Rendering of Pre-integrated Neural Emitters

## One-sentence takeaway

Neural Emission Fields precompute the direct illumination around a complex emitter (housing, emissive meshes, deformation) in the emitter's local frame, so shading needs one network evaluation instead of runtime light sampling.

## Why it matters here

Complex light fixtures are a classic noise source in a hybrid real-time renderer like Anoptic. Treating a lamp as a portable, pretrained lighting asset reusable under rigid transforms fits an asset pipeline better than per-scene caches.

## Key ideas

- **Representation.** Neural field over position, normal, view direction and material parameters around the emitter.
- **Two heads.** Separate diffuse and glossy outputs give noise-free unoccluded direct light per shading point.
- **Local frame.** Training in emitter space makes the field a reusable asset under rigid transforms.
- **Free extras.** Self-occlusion, interreflection inside the housing, spatially varying emission and deformation are baked in at no runtime cost.

## Caveats

Unoccluded direct light only: scene shadowing must still come from elsewhere. Per-emitter training cost and network evaluation cost on mid-range GPUs need checking. Preprint, 2026-10-05.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.06762
- PDF: https://arxiv.org/pdf/2610.06762
