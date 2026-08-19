---
title: "Radiance Cascades Guided NEE Pathtracer"
authors:
  - "entropylost"
year: 2025
venue: "WIP"
arxiv: null
doi: null
source: "https://github.com/entropylost/vlam"
topics:
  - radiance-cascades
  - gi
  - nee
  - path-tracing
seed_rank: 1114
seed_batch: "radiance-cascades-wip-2026-08-20"
reviewed: "2026-08-20"
pool: "graphics"
relevance_score: 7
lineage: radiance-cascades
cites:
  - title: "Radiance Cascades: A Novel Approach to Calculating Global Illumination"
    url: "https://github.com/Raikiri/RadianceCascadesPaper"
    year: 2023
    arxiv: null
    doi: null
  - title: "Holographic Radiance Cascades for 2D Global Illumination"
    url: "https://arxiv.org/abs/2505.02041"
    year: 2025
    arxiv: "2505.02041"
    doi: null
see:
  - "005-radiance-cascades-a-novel-approach-to-calculating-global-ill"
  - "211-holographic-radiance-cascades-for-2d-global-illumination"
  - "1109-radiance-cascades-shadertoy"
---

# Radiance Cascades Guided NEE Pathtracer

## One-sentence takeaway

entropylost's `vlam` (2025-04) uses a 2D radiance-cascade field as a hierarchical directional PDF for next-event estimation — RC *guiding* a path tracer rather than replacing it.

## Why it matters here

Every other community RC is a raster GI cache. This one is the hybrid with hardware / analytic RT: walk the cascade tree, sample an angle proportional to stored luminance, trace, then splat fluence back into the cascade (bilinear atomic add, MIS-style 4× bias). That is the GI-1.0-adjacent idea on the lineage watch-list. Tiny repo (no README, ~3 stars, Keter GPU kernels), but it is the actual primary source radiance.wiki cites for "RC-guided NEE."

## Key ideas

- `CascadeStorage`: 6 cascades, base 4 angles, angular_scale 2 (×4 directions per level), bilinear gather/scatter.
- Per pixel, walk cascade 0→N: read 4 child weights, normalize, pick a child with PCG, accumulate 4×weight bias (unbiased-ish hierarchical sample).
- Trace the chosen direction through analytic (or voxel) intervals matching cascade ranges; merge fluence far-to-near; write luma/bias back into `next_storage`.
- Same author as `amida` (2D RC lighting) and `amitabha` (Holographic RC reference).

## Caveats

- Uncommented research prototype, not a refereed paper. No writeup beyond the repo description and wiki stub. 2D only.
- Created 2025-04-23, last push 2025-04-25 — snapshot, not a maintained product.
- Do not confuse with pbrt-style NEE on explicit lights; the "light" here is the cascade luminance field.

## Links

- Repo: https://github.com/entropylost/vlam
- Wiki: https://radiance.wiki/variants/rc-guided-nee
- Related: https://github.com/entropylost/amida · https://github.com/entropylost/amitabha
