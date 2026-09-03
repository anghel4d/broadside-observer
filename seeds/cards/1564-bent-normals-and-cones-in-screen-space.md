---
title: "Bent Normals and Cones in Screen-space"
authors:
  - "Oliver Klehm"
  - "Tobias Ritschel"
  - "Elmar Eisemann"
  - "Hans-Peter Seidel"
year: 2011
venue: "VMV 2011 (Vision, Modeling, and Visualization)"
arxiv: null
doi: "10.2312/PE/VMV/VMV11/177-182"
source: "https://doi.org/10.2312/PE/VMV/VMV11/177-182"
topics:
  - "ssao"
  - "bent-normals"
  - "bent-cones"
seed_rank: 1564
seed_batch: "user-ao-post-2026-09-03"
reviewed: "2026-09-03"
pool: "graphics"
relevance_score: 9
lineage: ssao
cites:
  - title: "Production-Ready Global Illumination"
    url: "https://renderman.pixar.com/resources/RenderMan_20/tutorialProductionGI.html"
    year: 2002
    arxiv: null
    doi: null
  - title: "Approximating Dynamic Global Illumination in Image Space"
    url: "https://doi.org/10.1145/1507149.1507161"
    year: 2009
    arxiv: null
    doi: "10.1145/1507149.1507161"
  - title: "Image-Space Horizon-Based Ambient Occlusion"
    url: "https://developer.download.nvidia.com/presentations/2008/SIGGRAPH/HBAO_SIG08b.pdf"
    year: 2008
    arxiv: null
    doi: "10.1145/1401032.1401061"
  - title: "Finding Next Gen: CryEngine 2"
    url: "https://www.crytek.com/download/Presentations/FindingNextGen-CryEngine2.pdf"
    year: 2007
    arxiv: null
    doi: null
see:
  - "1514-production-ready-global-illumination"
  - "398-approximating-dynamic-global-illumination-in-image-space-ssd"
  - "1387-practical-realtime-strategies-for-accurate-indirect-occlusion"
---

# Bent Normals and Cones in Screen-space

## One-sentence takeaway

Compute Landis bent normals (mean unoccluded direction, AO in the vector length) and a bent cone (variance → spherical-cap angle) from the same screen-space SSAO neighborhood, then shade with a pre-convolved environment map instead of a grey multiply.

## Why it matters here

Landis 1514 is the bake-time origin: average unoccluded direction as a lighting axis. Klehm is the G-buffer paper — bent N + bent cone as a cheap SSAO extra, which GTAO 1387 / XeGTAO later reuse for probe lookup. That is the Anoptic AO output layout: AO scalar + bent N in one compute pass, not a second GI solution.

## Key ideas

- **Screen-space bent normal.** While SSAO already has direction Δᵢⱼ = xⱼ−xᵢ and visibility d(Δ), accumulate Nss(i) = (Σ d·Δ/|Δ|) / (Σ d). Unlike shading normals, bent normals are *not* renormalized: length encodes AO. Drop-in replacement for n in a prefiltered envmap query.
- **Bent cone.** From the von Mises–Fisher mean, cap half-angle C(i) = (1 − max(0, 2|Nss| − 1)) · π/2. Unoccluded points get a full hemisphere. The cone only *restricts gather directions*; average visibility stays the AO scalar, so a wrong cone still darkens plausibly.
- **Pre-convolved lighting.** Store Lc(ωo, α) as a cube-map array, 8 discrete α levels with linear filter. Visibility V̄ is 1 inside the cap. Normalization t = 1/(1−cos α) so constant Li is independent of α. Geometric-term heuristic (ω·n) ≈ (ω·N)(N·n) avoids a 5D convolution.
- **Orthogonal to the SSAO kernel.** Works with Crytek 2D, Crytek 3D (optional ray-march), and HBAO horizon march. Interleaved sampling (Keller–Heidrich) + geometry-aware blur. Blur the *difference* (bent − n) and add back to high-frequency normals so normal-map detail survives.
- **Evidence (GF 560 Ti, 2048×1024).** AO+bent 4.2 ms, geo-aware blur 4.7 ms; overhead vs AO-only is +7% compute / +25% blur, **<11% total**. Bent cones: 8 spp vs SSDO 16–24 spp (plus an extra texture fetch) vs envmap importance sampling 32 spp, at similar low-frequency quality. 60 fps with direct light + DOF in the teaser.

## Caveats

- Screen-space: incomplete geometry, same as SSAO. Cones assume blockers form a simple horizon — complex occlusion can point the cone at blocked directions (Fig. 9); they then degrade to bent-normal lighting. Cannot represent high-frequency illumination (they blur it; SSDO would need hundreds of samples).
- Not a remint of Landis 1514 (production bake), SSDO 398 (directional micro-emitters), or GTAO 1387 (which later ships bent normals as an optional G-buffer extra). GPU Pro 3 recap is later — skip.
- No arXiv. Eurographics PDF + DOI 10.2312/PE/VMV/VMV11/177-182. ISBN 978-3-905673-85-2.

## Links

- DOI: https://doi.org/10.2312/PE/VMV/VMV11/177-182
- HTML: https://diglib.eg.org/items/2cf56bda-f0f2-45a1-9c7f-330f690e58ca
- PDF: https://diglib.eg.org/bitstream/handle/10.2312/PE.VMV.VMV11.177-182/177-182.pdf
