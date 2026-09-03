---
title: "AMD FidelityFX Combined Adaptive Compute Ambient Occlusion"
authors:
  - "AMD GPUOpen"
year: 2020
venue: "GPUOpen / FidelityFX SDK (announced 11 May 2020)"
arxiv: null
doi: null
source: "https://gpuopen.com/fidelityfx-cacao/"
topics:
  - "ssao"
  - "cacao"
  - "fidelityfx"
  - "vulkan"
seed_rank: 1562
seed_batch: "user-ao-post-2026-09-03"
reviewed: "2026-09-03"
pool: "graphics"
relevance_score: 9
lineage: ssao
cites:
  - title: "Adaptive Screen Space Ambient Occlusion"
    url: "https://github.com/GameTechDev/ASSAO"
    year: 2016
    arxiv: null
    doi: null
  - title: "Image-Space Horizon-Based Ambient Occlusion"
    url: "https://developer.download.nvidia.com/presentations/2008/SIGGRAPH/HBAO_SIG08b.pdf"
    year: 2008
    arxiv: null
    doi: "10.1145/1401032.1401061"
  - title: "Practical Realtime Strategies for Accurate Indirect Occlusion"
    url: "https://www.activision.com/cdn/research/Practical_Real_Time_Strategies_for_Accurate_Indirect_Occlusion_NEW%20VERSION_COLOR.pdf"
    year: 2016
    arxiv: null
    doi: null
  - title: "FidelityFX Single Pass Downsampler"
    url: "https://gpuopen.com/fidelityfx-spd/"
    year: 2020
    arxiv: null
    doi: null
see:
  - "401-horizon-based-ambient-occlusion"
  - "1387-practical-realtime-strategies-for-accurate-indirect-occlusion"
---

# AMD FidelityFX Combined Adaptive Compute Ambient Occlusion

## One-sentence takeaway

CACAO is AMD's MIT, compute-queue port of Intel ASSAO: five quality presets, 2×2 deinterleaved depths, an adaptive importance map at Highest, and an optional downsample plus bilateral upsample.

## Why it matters here

Open Vulkan SSAO with quality knobs and a compute dispatch — the drop-in Anoptic can vendor without rewriting ASSAO. Distinct from GTAO 1387 (radiometric horizon integral) and HBAO 401 (heuristic horizon): this is the scalable deinterleaved/adaptive *implementation* card, not a new occlusion equation.

## Key ideas

- **Announced 11 May 2020** with SSSR, LPM, and SPD. Entire ASSAO pipeline moved to compute so it can run on a compute or graphics queue; data transforms rewritten; downsample path added for budget SSAO. Vulkan since v1.1 (August 2020). CS 6.0 / GLSL needs `GL_EXT_samplerless_texture_functions`.
- **Prepare.** Split each 2×2 of depth (and optional normals) into four quarter-res textures to improve cache locality. LOWEST discards the top-right and bottom-left of each 2×2 (50% of input). MEDIUM+ also builds a deinterleaved depth MIP chain via FidelityFX SPD. Downsampled mode works at quarter-res per tile instead of half.
- **Generate SSAO.** Rotationally symmetric samples around each pixel, MIP-scaled by depth. Obscurance for sample q at p with normal n is cos(angle(q−p, n)) times a falloff that grows with |q−p|². Output packs obscurance in R and 2-bit edge flags (N/E/S/W depth discontinuities) in G.
- **Adaptive (QUALITY_HIGHEST).** Base pass writes untransformed obscurance and skips edges. Importance map: per 8×8 tile, (max−min) obscurance, then blur. A load-counter average drives extra samples so busy regions spend the AdaptiveSampleCountLimit. Then edge-aware 3×3 blur (default 4 passes; 2 on LOWEST; 0–8 allowed) and a reinterleave + high-res neighborhood blur. Downsampled qualities finish with a 5×5 bilateral upsample.
- **Shipped.** DIRT 5 and World of Warcraft: Shadowlands (Radeon RX 6000 partner showcases). Five presets LOWEST…HIGHEST. MIT. Sponza curtain-bottom bright AO in the sample is a mesh-normal bug, not the effect.

## Caveats

- Adaptation of Intel ASSAO (GitHub GameTechDev/ASSAO) — do not also mint ASSAO. Still screen-space; does not replace GTAO 1387 as a radiometric term.
- No arXiv. Canonical sources are the GPUOpen landing page, the 11 May 2020 announce, the FidelityFX SDK technique manual (v1.4), and https://github.com/GPUOpen-Effects/FidelityFX-CACAO.
- LOWEST's 50% discard is a real quality drop. DetailAO-style high-frequency residual (DetailAOStrength) is less temporally stable.

## Links

- Landing: https://gpuopen.com/fidelityfx-cacao/
- Announce (11 May 2020): https://gpuopen.com/news/introducing-our-new-fidelityfx-effects/
- Technique docs: https://gpuopen.com/manuals/fidelityfx_sdk/techniques/combined-adaptive-compute-ambient-occlusion/
- Source: https://github.com/GPUOpen-Effects/FidelityFX-CACAO
