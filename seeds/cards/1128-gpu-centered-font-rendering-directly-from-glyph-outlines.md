---
title: "GPU-Centered Font Rendering Directly from Glyph Outlines"
authors: ["Eric Lengyel"]
year: 2017
venue: "JCGT"
arxiv: null
doi: null
source: "https://jcgt.org/published/0006/02/02/"
topics: [unicode-text-shaping, vulkan-realtime-rendering]
seed_rank: 1128
seed_batch: "craft-2026-08-21"
reviewed: "2026-08-21"
pool: "graphics"
relevance_score: 10
lineage: unicode-text-shaping
cites:
  - title: "Loop and Blinn Resolution Independent Curve Rendering using Programmable Graphics Hardware"
    url: "https://doi.org/10.1145/1073204.1073303"
    year: 2005
    arxiv: null
    doi: "10.1145/1073204.1073303"
  - title: "Improved Alpha-Tested Magnification for Vector Textures and Special Effects"
    url: "https://doi.org/10.1145/1281500.1281665"
    year: 2007
    arxiv: null
    doi: "10.1145/1281500.1281665"
  - title: "A Decade of Slug"
    url: "https://terathon.com/blog/decade-slug.html"
    year: 2026
    arxiv: null
    doi: null
see:
  - "128-loop-and-blinn-resolution-independent-curve-rendering-using-"
  - "125-signed-distance-fields-for-text"
  - "286-improved-alpha-tested-magnification-for-vector-textures-and-"
  - "1030-warnock-gpu-geometry-amplification-for-vector-graphics"
---

# GPU-Centered Font Rendering Directly from Glyph Outlines

## One-sentence takeaway

Rasterize antialiased glyphs on the GPU from quadratic Bézier outlines — no atlas, no SDF — by evaluating a robust winding number in the fragment shader, accelerated by horizontal/vertical curve bands.

## Why it matters here

Anoptic and GRID COMMAND still need world+UI text this week; unicode-text-shaping is a standing topic that never got a Craft keeper. Loop-Blinn (128) is GPU *curves*, Green (286) and card 125 are *SDF atlases*, Warnock (1030) is mesh-amplified *vector paths*. Slug is the missing outline-coverage recipe: one quad per glyph, analytic coverage at any zoom/projective transform, no bitmap cache to invalidate when the camera moves. April 2026 made it shippable — Lengyel dedicated the patent to the public domain and posted MIT reference shaders, and HarfBuzz 14.0 shipped `libharfbuzz-gpu` (GLSL/WGSL/MSL/HLSL) implementing the same algorithm. Shape with HarfBuzz, encode outlines once, draw in the Anoptic mesh/forward+ pass and in the GRID COMMAND WebGPU HUD.

## Key ideas

- Store quadratic control points plus a banded acceleration structure in GPU textures; the fragment shader classifies each pixel against a compact 16-bit winding LUT (`0x2E74`) instead of a divergent per-curve loop.
- Analytic coverage replaces MSAA/SDF filtering; dynamic dilation (post-paper, now in the public shaders) restores stem weight under minification.
- Avoids the two failure modes of prior GPU outline text: numerical cracks at shared endpoints, and warp divergence from long contour lists.
- 2026 practice: CPU encode (HarfBuzz `hb_gpu_draw_encode`) → RGBA16I blob → fragment coverage; COLRv0/v1 paint layers reuse the same clip outlines.

## Caveats

- JCGT 2017 (vol. 6 no. 2, pp. 31–47); no DOI, no arXiv. Canonical URL `https://jcgt.org/published/0006/02/02/`.
- You still need a shaper (HarfBuzz) for complex scripts; this paper is rasterization, not OpenType layout.
- Do not remint Green 286 / SDF-text 125 / Loop-Blinn 128 / Warnock 1030 — cite them.

## Links

- Paper: https://jcgt.org/published/0006/02/02/
- PDF: https://jcgt.org/published/0006/02/02/paper.pdf
- Reference shaders (MIT, 2026): https://github.com/EricLengyel/Slug
- Decade writeup + public-domain patent: https://terathon.com/blog/decade-slug.html
- HarfBuzz 14.0 hb-gpu: https://github.com/harfbuzz/harfbuzz/releases/tag/14.0.0
