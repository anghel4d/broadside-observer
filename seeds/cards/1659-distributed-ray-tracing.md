---
title: "Distributed Ray Tracing"
authors:
  - "Robert L. Cook"
  - "Thomas Porter"
  - "Loren Carpenter"
year: 1984
venue: "SIGGRAPH / Computer Graphics 18(3)"
arxiv: null
doi: "10.1145/800031.808590"
source: "https://web.archive.org/web/20201112000000id_/https://graphics.pixar.com/library/DistributedRayTracing/paper.pdf"
topics:
  - distributed-ray-tracing
  - monte-carlo-rendering
  - motion-blur-dof
seed_rank: 1659
seed_batch: "archive-2026-09-10"
reviewed: "2026-09-10"
pool: "graphics"
relevance_score: 10
lineage: cook-distributed-ray-tracing
cites:
  - title: "An Improved Illumination Model for Shaded Display"
    url: "https://doi.org/10.1145/358876.358882"
    year: 1980
    arxiv: null
    doi: "10.1145/358876.358882"
  - title: "The Rendering Equation"
    url: "https://doi.org/10.1145/37401.37419"
    year: 1986
    arxiv: null
    doi: "10.1145/37401.37419"
see:
  - "1634-an-improved-illumination-model-for-shaded-display"
  - "152-the-rendering-equation"
  - "372-metropolis-light-transport"
  - "1010-the-reyes-image-rendering-architecture"
---

# Distributed Ray Tracing

## One-sentence takeaway

Cook, Porter, and Carpenter replace a single recursive ray with a distribution of rays over time, lens, reflection, and shadow domains, so motion blur, depth of field, soft shadows, and glossy reflection fall out as Monte Carlo integrals rather than as special-case shaders.

## Why it matters here

Anoptic and any deferred/realtime path that wants cinematic camera effects without a separate post stack should steal the *distribution* idea: one sampling framework for aperture, shutter, BRDF lobe, and area lights. Complements Whitted 1634 (deterministic specular recursion) and sits under Kajiya 152 / MLT 372 as the operational Monte Carlo ancestor from Lucasfilm/Pixar — not a remint of those live cards.

## Key ideas

- **Rays as samples of continuous domains.** Instead of one eye ray, one shadow ray, one reflection ray, fire many stratified samples across shutter time, lens position, light area, and reflection cone.
- **Unified blur.** Motion blur, depth of field, penumbrae, and glossy highlights share the same integrator; only the sampled domain changes.
- **Variance vs cost.** Image quality scales with sample count; noise is the visible price of under-sampling — the template every modern path tracer still pays.
- **Lucasfilm production context.** Written beside Shade Trees (1660) and REYES (1010); distribution is the lighting half of that 1984 shading/rendering stack.

## Caveats

- 1984 CPU budgets make naive distributions expensive; realtime ports need aggressive denoising, ReSTIR-class reuse, or bake. Do not remint Whitted 1634, Kajiya 152, MLT 372, or Instant Radiosity 450.
- No spectral/participating-media story here — later Veach/Jensen work covers that.
- Wayback/Pixar PDF is the open copy used this pass; ACM DOI is the archival cite.

## Links

- Wayback Pixar PDF: https://web.archive.org/web/20201112000000id_/https://graphics.pixar.com/library/DistributedRayTracing/paper.pdf
- DOI: https://doi.org/10.1145/800031.808590
- Pixar library page: https://graphics.pixar.com/library/DistributedRayTracing/
