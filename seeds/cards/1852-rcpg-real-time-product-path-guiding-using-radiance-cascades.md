---
title: "RCPG: Real-Time Product Path Guiding Using Radiance Cascades"
authors: ["Julius Ikkala", "Pekka Jääskeläinen", "Markku Mäkitalo"]
year: 2026
venue: "ACM Transactions on Graphics (Just Accepted, online 2026-08-12)"
arxiv: null
doi: "10.1145/3840291"
source: "https://doi.org/10.1145/3840291"
topics: [radiance-cascades, path-guiding, product-sampling, realtime-path-tracing]
seed_rank: 1852
seed_batch: "craft-2026-10-07"
reviewed: "2026-10-07"
pool: "realtime"
relevance_score: 10
lineage: radiance-cascades
cites:
  - title: "Radiance Cascades: A Novel High-Resolution Formal Solution for Multidimensional Non-LTE Radiative Transfer"
    url: "https://arxiv.org/abs/2408.14425"
    year: 2024
    arxiv: "2408.14425"
    doi: "10.1093/rasti/rzae062"
  - title: "Radiance Cascades: A Novel Approach to Calculating Global Illumination"
    url: "https://github.com/Raikiri/RadianceCascadesPaper"
    year: 2023
    arxiv: null
    doi: null
  - title: "Spatiotemporal Reservoir Resampling for Real-Time Ray Tracing with Dynamic Direct Lighting"
    url: "https://doi.org/10.1145/3386569.3392481"
    year: 2020
    arxiv: null
    doi: "10.1145/3386569.3392481"
  - title: "On-line Learning of Parametric Mixture Models for Light Transport Simulation"
    url: "https://doi.org/10.1145/2601097.2601203"
    year: 2014
    arxiv: null
    doi: "10.1145/2601097.2601203"
see:
  - "453-radiance-cascades-a-novel-high-resolution-formal-solution-fo"
  - "005-radiance-cascades-a-novel-approach-to-calculating-global-ill"
  - "1374-spatiotemporal-reservoir-resampling-for-real-time-ray-tracing-wi"
  - "1379-on-line-learning-of-parametric-mixture-models-for-light-transpor"
---

# RCPG: Real-Time Product Path Guiding Using Radiance Cascades

## One-sentence takeaway

Ikkala–Jääskeläinen–Mäkitalo turn a world-space radiance-cascade hierarchy into a product (incoming radiance × BSDF) sampling distribution with a computable PDF, so one sampler replaces separate light/BSDF importance sampling and roughly doubles paths per pixel against multi-sample-MIS real-time guiding.

## Why it matters here

Anoptic's GI bet is radiance cascades (Sannikov 453/005, Split RC 208, Surfel RC 1113). Until now the library's only "RC as a sampler" entry was the 2D community prototype 1114 (RC-guided NEE). RCPG is the refereed, 3D, world-space version: the same cascades that feed diffuse GI can also guide the specular/glossy path-traced bounces, and they work from off-screen path vertices. That makes the cascade a shared asset across the raster GI path and any HW-RT reference/quality mode, not a second cache to build.

## Key ideas

- **Interval bounds.** Derives bounds on radiance intervals so a cascade's merged directional data does not misrepresent where light actually arrives — the precondition for using RC as a PDF at all.
- **Hierarchical product sampling.** Walks the cascade hierarchy choosing directions proportional to incoming radiance times the material BSDF, instead of sampling light and BSDF separately and combining with MIS.
- **Evaluable PDF.** The sampling PDF can be computed for any direction, so RCPG composes with MIS and with unbiased ReSTIR rather than replacing them.
- **Single sampler, more paths.** Because one product sampler suffices, it traces about twice as many paths per pixel as prior real-time guiding that relies on multi-sample MIS, at better quality.
- **World-space structure.** Off-screen vertices can sample it, which is what multi-bounce guiding needs (screen-space caches cannot).

## Caveats

TOG Just Accepted (accepted 2026-07-19); read via the ACM abstract and the Tampere VGA project page — the full PDF is behind ACM DL here, so implementation details (cascade layout, memory, update cost per frame) still need the paper. No arXiv preprint found. It is a path-guiding method for path tracers, not a replacement for Anoptic's raster RC gather; adopt only where we already trace. Do not remint RC 005 / 453 / 208 / 1113 / 1114 or ReSTIR 1374 / 1375.

## Links

- DOI: https://doi.org/10.1145/3840291
- ACM DL: https://dl.acm.org/doi/10.1145/3840291
- Project page (Tampere University VGA): https://webpages.tuni.fi/vga/publications/RCPG.html
