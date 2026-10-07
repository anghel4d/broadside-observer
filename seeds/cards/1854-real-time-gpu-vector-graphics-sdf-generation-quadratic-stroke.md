---
title: "Real-Time GPU Vector Graphics SDF Generation Based on Quadratic Stroke Rendering"
authors: ["Xuhai Chen", "Guangze Zhang", "Juan Cao", "Zhonggui Chen"]
year: 2026
venue: "SIGGRAPH 2026 Conference Papers, Article 121"
arxiv: null
doi: "10.1145/3799902.3811177"
source: "https://doi.org/10.1145/3799902.3811177"
topics: [sdf, msdf, gpu-fonts, vector-graphics, text]
seed_rank: 1854
seed_batch: "craft-2026-10-07"
reviewed: "2026-10-07"
pool: "graphics"
relevance_score: 10
lineage: gpu-text
cites:
  - title: "Improved Corners with Multi-Channel Signed Distance Fields"
    url: "https://doi.org/10.1111/cgf.13265"
    year: 2018
    arxiv: null
    doi: "10.1111/cgf.13265"
  - title: "Improved Alpha-Tested Magnification for Vector Textures and Special Effects (SDF)"
    url: "https://steamcdn-a.akamaihd.net/apps/valve/2007/SIGGRAPH2007_AlphaTestedMagnification.pdf"
    year: 2007
    arxiv: null
    doi: "10.1145/1281500.1281665"
  - title: "GPU-accelerated rendering of vector strokes with piecewise quadratic approximation"
    url: "https://doi.org/10.1016/j.gmod.2025.101295"
    year: 2025
    arxiv: null
    doi: "10.1016/j.gmod.2025.101295"
see:
  - "1808-improved-corners-with-multi-channel-signed-distance-fields"
  - "286-improved-alpha-tested-magnification-for-vector-textures-and-"
  - "125-signed-distance-fields-for-text"
  - "1128-gpu-centered-font-rendering-directly-from-glyph-outlines"
---

# Real-Time GPU Vector Graphics SDF Generation Based on Quadratic Stroke Rendering

## One-sentence takeaway

Chen–Zhang–Cao–Chen move SDF/MSDF *generation* onto the GPU by treating every outline curve as a thick quadratic stroke: the raster pipeline visits only pixels inside each curve's influence band, computes per-curve distance, resolves the sign locally, and merges with atomics — fast enough to build glyph and icon distance fields at runtime instead of baking atlases offline.

## Why it matters here

Last Craft minted MSDF corners (1808) on top of Green's SDF (286/125) and Slug-style outline rendering (1128) — all of which assume the distance atlas already exists, normally built on the CPU with msdfgen. For ano's Japanese UI and GRID COMMAND's HUD, CJK coverage means thousands of glyphs, user-scaled UI, and dynamic icons; CPU generation is the bottleneck that forces pre-baked atlases. This paper removes that step: generate the (M)SDF tile on the GPU the first time a glyph or vector icon is needed, then keep the cheap SDF sampling path we already have.

## Key ideas

- **Generation as stroke rendering.** Each quadratic Bézier segment is treated as a thick stroke whose width is the SDF spread; rasterizing it enumerates exactly the texels whose nearest-curve distance could come from that segment — no CPU closest-edge queries.
- **Three GPU passes.** (1) *Stroke pass*: the tessellation shader subdivides curves into flatter subcurves (curvature-guided, from the authors' earlier stroke renderer), rasterizes conservative bounding polygons, and the fragment shader solves point-to-quadratic distance; (2) *joint pass*: rasterizes non-smooth joints so the sign stays right where adjacent normals disagree; (3) *format pass*: unpacks to a normalized 8-bit SDF.
- **Local sign resolution.** The sign is decided while searching for the closest primitive — the candidate with the smallest absolute distance carries its own inside/outside — so there is no global winding/scanline pass.
- **Atomic merge.** Candidates are packed into a 32-bit unsigned integer texture and merged with atomic min; the same pipeline emits single-channel SDF or MSDF.
- **Speed vs CPU libraries.** Reported as a substantial speedup over msdfgen and Skia at comparable accuracy (a secondary summary quotes roughly 10× vs Skia and 50× vs msdfgen); open C++ research prototype.

## Caveats

Read from the ACM abstract, the author homepage and the public repository; the ACM PDF was not fetchable from the box, so check the exact speedups, the MSDF edge-colouring step and any quality loss at sharp corners against 1808 before swapping out msdfgen. Input must be closed, positively oriented, piecewise-quadratic paths without self-intersections — TrueType glyf outlines are already quadratic, but CFF/CFF2 cubics need conversion and overlapping contours (common in variable fonts) need removal first. Builds on the authors' 2025 Graphical Models stroke renderer. Needs tessellation (or an equivalent compute expansion) — confirm the path on WebGPU before relying on it for the browser build. Do not remint 286 / 125 / 1808 / 1128 / 1787 / 1460.

## Links

- DOI: https://doi.org/10.1145/3799902.3811177
- ACM DL: https://dl.acm.org/doi/10.1145/3799902.3811177
- Code: https://github.com/tuzhong007/quadratic-stroke-sdf
- Author homepage (Zhonggui Chen, Xiamen University): https://graphics.xmu.edu.cn/~zgchen/
