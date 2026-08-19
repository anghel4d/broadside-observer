---
title: "Radiance Cascades 3D (UV-Space Shadertoy)"
authors:
  - "Alexander Sannikov"
year: 2024
venue: "Shadertoy"
arxiv: null
doi: null
source: "https://www.shadertoy.com/view/X3XfRM"
topics:
  - radiance-cascades
  - gi
  - uv-space
  - shadertoy
seed_rank: 1110
seed_batch: "radiance-cascades-wip-2026-08-20"
reviewed: "2026-08-20"
pool: "graphics"
relevance_score: 8
lineage: radiance-cascades
cites:
  - title: "Radiance Cascades: A Novel Approach to Calculating Global Illumination"
    url: "https://github.com/Raikiri/RadianceCascadesPaper"
    year: 2023
    arxiv: null
    doi: null
see:
  - "005-radiance-cascades-a-novel-approach-to-calculating-global-ill"
  - "1109-radiance-cascades-shadertoy"
  - "1113-surfel-radiance-cascades-diffuse-global-illumination"
  - "208-split-radiance-cascades-real-time-global-illumination-via-sp"
---

# Radiance Cascades 3D (UV-Space Shadertoy)

## One-sentence takeaway

Suslik's Nov 2024 Shadertoy (`X3XfRM`) stores 3D radiance on surface UV charts instead of a world-space probe grid — multi-bounce, BRDF-aware, and the only public UV-space RC primary.

## Why it matters here

Sannikov's founding paper already notes that 3D radiance encoded on a 2D surface has *constant memory per cascade* (P_i ~ 1/4^i probes × Q_i ~ 4^i angular texels ⇒ M_i = M_0, total linear in cascade count). That is exactly the UV-space escape from dense O(n³) cascade-0 voxels. This Shadertoy is the author's own PoC of that paragraph. For Anoptic, it is a surface-cache alternative to Split RC's hashmap and to Surfel RC's spawned discs.

## Key ideas

- Cascades live in texture-coordinate space of surfaces, not screenspace and not a 3D brick grid.
- Multi-bounce lighting and BRDF integration in the demo.
- Temporal merge because Shadertoy has too few buffers — lag/flicker is a platform limit; a proper engine pass could merge in one frame.
- Shadertoy handle **Suslik** is the original RC author (Alexander Sannikov); radiance.wiki flags this as notable for that reason.

## Caveats

- Shadertoy proof-of-concept, not a refereed paper. No published timings, no comparison vs Split RC / surfels, no UV-seam analysis.
- Chart packing, overlapping UVs, and unseen backfaces are unsolved in the demo.
- Do not treat this as "3D RC is solved."

## Links

- Shadertoy: https://www.shadertoy.com/view/X3XfRM
- Wiki: https://radiance.wiki/variants/uv-space-3d
- Founding paper (UV-space memory argument): https://github.com/Raikiri/RadianceCascadesPaper
