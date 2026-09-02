---
title: "Dynamic Ambient Occlusion and Indirect Lighting"
authors: ["Michael Bunnell"]
year: 2005
venue: "GPU Gems 2"
arxiv: null
doi: null
source: "https://developer.nvidia.com/gpugems/gpugems2/part-ii-shading-lighting-and-shadows/chapter-14-dynamic-ambient-occlusion-and"
topics: [AO, indirect, disk-occluders]
seed_rank: 1533
seed_batch: "di-penumbra-2026-09-02"
reviewed: "2026-09-02"
pool: "graphics"
relevance_score: 7
lineage: direct-illumination
cites:
  - title: "Production-Ready Global Illumination"
    url: "https://renderman.pixar.com/resources/RenderMan_20/tutorialProductionGI.html"
    year: 2002
    arxiv: null
    doi: null
  - title: "Approximating Dynamic Global Illumination in Image Space"
    url: "https://www.iryoku.com/downloads/Approximating-Dynamic-Global-Illumination-in-Image-Space.pdf"
    year: 2009
    arxiv: null
    doi: null
  - title: "Horizon-Based Ambient Occlusion"
    url: "https://developer.download.nvidia.com/presentations/2008/SIGGRAPH/HBAO_SIG08b.pdf"
    year: 2008
    arxiv: null
    doi: null
  - title: "Instant Radiosity"
    url: "https://doi.org/10.1145/258734.258769"
    year: 1997
    arxiv: null
    doi: "10.1145/258734.258769"
see:
  - "398-approximating-dynamic-global-illumination-in-image-space-ssd"
  - "401-horizon-based-ambient-occlusion"
  - "450-instant-radiosity"
---

# Dynamic Ambient Occlusion and Indirect Lighting

## One-sentence takeaway

Bunnell GPU Gems 2: represent the mesh as disks, compute dynamic AO plus a 1-bounce — the game GI-as-occlusion paper that DFAO still resembles.

## Why it matters here

Landis (this batch) is baked bent normals. SSDO 398 / HBAO 401 are screen-space. Bunnell is *object-space* dynamic AO from disk occluders, plus a cheap bounce. UE DFAO's spiritual parent. Instant Radiosity 450 is the VPL GI cousin, not this disk AO.

## Key ideas

- **Disk occluders.** Each mesh element is a disk with area and normal; AO at a receiver is a sum of form-factor-like disk vis.
- **Dynamic.** No bake: deforming characters update disk positions and the AO follows.
- **One bounce.** The same disks emit a 1-bounce indirect that is AO's lighting twin.
- **Evidence.** GPU Gems 2, Chapter 14, 2005. https://developer.nvidia.com/gpugems/gpugems2/part-ii-shading-lighting-and-shadows/chapter-14-dynamic-ambient-occlusion-and

## Caveats

- Disk approximation misses cavities and thin features; tessellation cost. Not a remint of SSDO 398, HBAO 401, or Instant Radiosity 450.

## Links

- URL: https://developer.nvidia.com/gpugems/gpugems2/part-ii-shading-lighting-and-shadows/chapter-14-dynamic-ambient-occlusion-and
