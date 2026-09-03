---
title: "XeGTAO"
authors:
  - "Filip Strugar"
  - "Steve McCalla"
year: 2021
venue: "Intel GameTechDev (GitHub README is the spec; v1.00 2021-08-09)"
arxiv: null
doi: null
source: "https://github.com/GameTechDev/XeGTAO"
topics:
  - "ssao"
  - "gtao"
  - "xegtao"
  - "bent-normals"
seed_rank: 1563
seed_batch: "user-ao-post-2026-09-03"
reviewed: "2026-09-03"
pool: "graphics"
relevance_score: 9
lineage: ssao
cites:
  - title: "Practical Realtime Strategies for Accurate Indirect Occlusion"
    url: "https://www.activision.com/cdn/research/Practical_Real_Time_Strategies_for_Accurate_Indirect_Occlusion_NEW%20VERSION_COLOR.pdf"
    year: 2016
    arxiv: null
    doi: null
  - title: "Adaptive Screen Space Ambient Occlusion"
    url: "https://github.com/GameTechDev/ASSAO"
    year: 2016
    arxiv: null
    doi: null
  - title: "Scalable Ambient Obscurance"
    url: "https://research.nvidia.com/sites/default/files/publications/McGuire12SAO.pdf"
    year: 2012
    arxiv: null
    doi: "10.2312/EGGH/HPG12/097-103"
  - title: "Production-Ready Global Illumination"
    url: "https://renderman.pixar.com/resources/RenderMan_20/tutorialProductionGI.html"
    year: 2002
    arxiv: null
    doi: null
see:
  - "1387-practical-realtime-strategies-for-accurate-indirect-occlusion"
  - "1514-production-ready-global-illumination"
---

# XeGTAO

## One-sentence takeaway

XeGTAO is a portable MIT HLSL of Jimenez GTAO: view-space depth MIP prefilter, Hilbert-curve + R2 samples, a 5×5 spatial denoiser that leans on TAA, and optional bent normals at about +25% cost.

## Why it matters here

This is the code Anoptic ports to Vulkan compute, sitting next to theory card 1387 rather than reminting it. Radiometrically-correct horizon AO with a measured budget (0.56 ms 1080p High on RTX 2060, 1.4 ms 4K on RTX 3070) and a bent-normal output packed RGB+AO-in-A — the same AO-scalar + bent-N layout Klehm argued for in screen space.

## Key ideas

- **Three compute passes.** PrefilterDepths: hardware depth → view-space R16F + MIP chain (weighted average; distant-sample bias; `mipLevel = max(0, log2(offset) − 3.15)`). MainPass: GTAO integral, optional bent normals (Jimenez 2016 Algorithm 2). Denoise: 5×5 depth-aware spatial filter; temporal is TAA's job when present.
- **Sampling vs the 2016 paper.** Paper: half-res, 1 slice × 12 samples. XeGTAO default High: full-res, 3 slices × 6 samples (3 per side) = 18 spp; Medium/Low drop to 2×4 = 8 spp. Sample distance along the slice is `pow(x, 2)` (auto-tune wanted ~2.1). Near-field falloff interpolates toward the *hemisphere horizon* `cos(n ± π/2)`, not toward −1, which keeps window/curtain detail.
- **Thin occluders.** Skip the paper's expensive thickness heuristic; more slices + fewer samples per slice does similar work. Optional 'thin occluder compensation' biases falloff along the view vector (off by default; small win at 3+3 spp).
- **Noise.** 6-level Hilbert index (64×64 tile) drives Martin Roberts' R2 sequence for slice angle + step offset; temporal `+ 288*(frameIndex%64)`. Optional Hilbert LUT (~7% cheaper than ALU). Authors rejected Bavoil 2014 deinterleaved texturing because GTAO's collinear slice pattern does not subset cleanly.
- **Ground truth + cost.** Auto-tune vs a cosine-weighted hemisphere ray tracer (near-field bounded). High vs ASSAO Medium at 1080p RTX 2060: 0.56 ms vs ~0.72 ms, more radiometric. Bent normals (v1.30) add ~25%. Intel archived the repo; no in-tree Vulkan. Header-only XeGTAO.h + XeGTAO.hlsli.

## Caveats

- DirectX 12 / Shader Model 6_3 sample; authors explicitly deferred a Vulkan port. Intel discontinued the project — fork if you ship it. fp16 path is optional (5–20% on some GPUs, regressions on others).
- No separate Intel HTML article; the README *is* the spec (v1.00 2021-08-09). Not a remint of GTAO 1387 or Landis 1514 (bake-time bent normals). HBAO+ and ASSAO are cited as slower/less correct foils, not cards to remint.
- Spatial-only denoise without TAA must keep temporal variance low; authors flag a future combined spatio-temporal filter. Screen-space; does not replace probes/cascades.

## Links

- GitHub (README is the spec): https://github.com/GameTechDev/XeGTAO
- XeGTAO.hlsli: https://github.com/GameTechDev/XeGTAO/blob/master/Source/Rendering/Shaders/XeGTAO.hlsli
- License (MIT): https://github.com/GameTechDev/XeGTAO/blob/master/LICENSE
