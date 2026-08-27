---
title: "Deferred Attribute Interpolation for Memory-Efficient Deferred Shading"
authors: ["Christoph Schied", "Carsten Dachsbacher"]
year: 2015
venue: "High Performance Graphics 2015"
arxiv: null
doi: "10.1145/2790060.2790066"
source: "https://doi.org/10.1145/2790060.2790066"
topics: [vulkan-realtime-rendering, mesh-shaders-gpu-driven]
seed_rank: 1431
seed_batch: "craft-2026-08-27"
reviewed: "2026-08-27"
pool: "graphics"
relevance_score: 9
lineage: visibility-buffer
cites:
  - title: "The Visibility Buffer: A Cache-Friendly Approach to Deferred Shading"
    url: "https://jcgt.org/published/0002/02/04/"
    year: 2013
    arxiv: null
    doi: null
  - title: "Forward+: Bringing Deferred Lighting to the Next Level"
    url: "https://takahiroharada.github.io/downloads/eg2012_notes.pdf"
    year: 2012
    arxiv: null
    doi: null
  - title: "Clustered Deferred and Forward Shading"
    url: "https://doi.org/10.2312/EGGH/HPG12/087-096"
    year: 2012
    arxiv: null
    doi: "10.2312/EGGH/HPG12/087-096"
see:
  - "271-the-visibility-buffer-a-cache-friendly-approach-to-deferred-"
  - "340-forward-bringing-deferred-lighting-to-the-next-level"
  - "477-clustered-deferred-and-forward-shading"
  - "015-gpu-driven-rendering-pipelines"
  - "462-optimizing-the-graphics-pipeline-with-compute-gpu-drive"
---

# Deferred Attribute Interpolation for Memory-Efficient Deferred Shading

## One-sentence takeaway

Don't store a g-buffer: store triangle references, then interpolate attributes from a compact triangle buffer with analytic screen-space derivatives — the visbuffer *shading* leftover of Burns–Hunt 271.

## Why it matters here

Anoptic already has forward+ (340). Last Craft built occupancy trees; this cycle's draw leftover is visbuffer occupancy of *materials*, not voxels (that's Aokana 1430). Burns–Hunt 271 stores triangle+instance IDs; DAIS is the next occupancy: a dynamically compacted triangle buffer (tessellation-friendly) plus analytic ddx/ddy so the shading pass has derivatives without a fat g-buffer. That is how Nanite-class visbuffer shading actually samples mips. Not a remint of 271, not clustered lighting 477, not GPU-driven 015.

## Key ideas

- **Triangle buffer, not g-buffer.** Visibility pass writes references. A compact pass dumps unique visible triangles as a sample point plus screen-space partials. Shading interpolates any vertex attribute from that.
- **Analytic derivatives.** Shaders learn ∂attr/∂x, ∂attr/∂y of every attribute — mip selection and filtering without hardware interpolators on a compute shading path.
- **Per-pixel visibility lists.** Optional linked-list of samples per pixel collapses duplicate vis samples so you don't shade the same triangle twice under MSAA / high vis rates.
- **Decouple vis rate from shade rate.** Low-frequency signals (indirect, FMM+RC probes) can shade below vis resolution. HPG 2015, DOI `10.1145/2790060.2790066`. KIT PDF.

## Caveats

2015-era; mesh shaders / Nanite 90 already live a visbuffer path in production. Compaction pass is extra occupancy vs 271's "just barycentrics from the original VB." Analytic derivatives assume the triangle is the interpolator — displacement / visbuffer-meshlet decode needs the laced-wire leftover (1130), not this paper. Do not remint 271.

## Links

- DOI: [10.1145/2790060.2790066](https://doi.org/10.1145/2790060.2790066)
- PDF: https://cg.ivd.kit.edu/publications/2015/dais/DAIS.pdf
- ACM: https://dl.acm.org/doi/10.1145/2790060.2790066
