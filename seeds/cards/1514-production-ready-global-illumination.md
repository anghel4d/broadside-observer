---
title: "Production-Ready Global Illumination"
authors: ["Hayden Landis"]
year: 2002
venue: "SIGGRAPH Courses"
arxiv: null
doi: null
source: "https://renderman.pixar.com/resources/RenderMan_20/tutorialProductionGI.html"
topics: [bent-normals, AO-as-direct, production]
seed_rank: 1514
seed_batch: "di-penumbra-2026-09-02"
reviewed: "2026-09-02"
pool: "graphics"
relevance_score: 8
lineage: direct-illumination
cites:
  - title: "Practical Realtime Strategies for Accurate Indirect Occlusion"
    url: "https://www.activision.com/cdn/research/Practical_Realtime_Strategies_for_Accurate_Indirect_Occlusion_NEW%20VERSION_COLOR.pdf"
    year: 2016
    arxiv: null
    doi: null
  - title: "Approximating Dynamic Global Illumination in Image Space"
    url: "https://www.iryoku.com/downloads/Approximating-Dynamic-Global-Illumination-in-Image-Space.pdf"
    year: 2009
    arxiv: null
    doi: "10.1145/1576246.1531396"
  - title: "Horizon-Based Ambient Occlusion"
    url: "https://developer.download.nvidia.com/presentations/2008/SIGGRAPH/HBAO_SIG08b.pdf"
    year: 2008
    arxiv: null
    doi: null
  - title: "Precomputed Radiance Transfer"
    url: "https://cseweb.ucsd.edu/~ravir/papers/prt/prt.pdf"
    year: 2002
    arxiv: null
    doi: "10.1145/566570.566612"
see:
  - "1387-practical-realtime-strategies-for-accurate-indirect-occlusion"
  - "398-approximating-dynamic-global-illumination-in-image-space-ssd"
  - "401-horizon-based-ambient-occlusion"
  - "366-precomputed-radiance-transfer"
---

# Production-Ready Global Illumination

## One-sentence takeaway

Bent normals as a direct term: bake or trace the average unoccluded direction and shade the BRDF/IBL with it — Pixar production AO that games still ship as DFAO / Lumen contact / specular occlusion.

## Why it matters here

GTAO (1387), SSDO (398), HBAO (401) are *scalar* AO. Landis is the bent-normal paper: the unoccluded cone's axis is a lighting direction, not just a darkening. UE DFAO and Lumen contact still do this. Distinct from PRT (366) which is a full transfer matrix.

## Key ideas

- **Bent normal.** Average unoccluded direction (and optionally cone aperture) stored per point; shade distant lighting / IBL as if the normal were bent toward the gap.
- **AO as a direct factor.** The same pass yields a scalar occupancy used as a shadowing term on the analytic/IBL direct light.
- **Production RenderMan.** SIGGRAPH 2002 course; the recipe ILM/Pixar actually ran, not a later screen-space remix.
- **Evidence.** SIGGRAPH 2002 RenderMan course. https://renderman.pixar.com/resources/RenderMan_20/tutorialProductionGI.html

## Caveats

- Not a remint of GTAO 1387, SSDO 398, HBAO 401, or PRT 366. Screen-space bent cones (Klehm) are the real-time follow-on, not this paper. Baked bent normals lag dynamic occluders.

## Links

- URL: https://renderman.pixar.com/resources/RenderMan_20/tutorialProductionGI.html
