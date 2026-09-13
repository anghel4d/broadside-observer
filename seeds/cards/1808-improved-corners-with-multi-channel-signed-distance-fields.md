---
title: "Improved Corners with Multi-Channel Signed Distance Fields"
authors: ["Viktor Chlumský", "Jan Sloup", "Ivan Šimeček"]
year: 2018
venue: "Computer Graphics Forum"
arxiv: null
doi: "10.1111/cgf.13265"
source: "https://doi.org/10.1111/cgf.13265"
topics: [msdf, gpu-fonts, text]
seed_rank: 1808
seed_batch: "craft-2026-09-13"
reviewed: "2026-09-13"
pool: "graphics"
relevance_score: 10
lineage: gpu-text
cites:
  - title: "Improved Alpha-Tested Magnification for Vector Textures and Special Effects (SDF)"
    url: "https://steamcdn-a.akamaihd.net/apps/valve/2007/SIGGRAPH2007_AlphaTestedMagnification.pdf"
    year: 2007
    arxiv: null
    doi: "10.1145/1281500.1281665"
  - title: "GPU-Centered Font Rendering Directly from Glyph Outlines"
    url: "https://jcgt.org/published/0006/02/02/"
    year: 2017
    arxiv: null
    doi: null
  - title: "Higher Quality 2D Text Rendering"
    url: "http://jcgt.org/published/0002/01/04/"
    year: 2013
    arxiv: null
    doi: null
see:
  - "286-improved-alpha-tested-magnification-for-vector-textures-and-"
  - "1128-gpu-centered-font-rendering-directly-from-glyph-outlines"
  - "1787-higher-quality-2d-text-rendering"
  - "125-signed-distance-fields-for-text"
  - "1658-srijika-opentype-layout-reusing-font-restyling-for-nine-indic-scripts"
---

# Improved Corners with Multi-Channel Signed Distance Fields

## One-sentence takeaway

Chlumský–Sloup–Šimeček fix Valve Green’s soft SDF corners by packing three edge-coloured distance channels and reconstructing with a median-of-three — sharp convex *and* concave corners at atlas resolutions that still look soft in mono SDF.

## Why it matters here

Anoptic / GRID COMMAND HUD text this week sits on Slug 1128 (outline coverage), Higher Quality 2D Text 1787 (LCD), Srijika 1658 (OpenType reuse), and Green 286 (mono SDF). The leftover that still hurts at small atlas sizes is *corner fidelity* without jumping to full analytic outlines. MSDF is that craft: keep the SDF atlas path for labels/icons, sharpen corners with `median(r,g,b)`, ship via msdfgen. Shape with HarfBuzz; rasterize MSDF or Slug depending on zoom budget.

## Key ideas

- **Multi-channel encoding.** Contour edges are coloured into RGB channels so each texel stores three complementary distances instead of one.
- **Median-of-three reconstruct.** Shader takes `median(r,g,b)` — implements both AND (convex) and OR (concave) corner cases Green sketched but did not ship.
- **Compatible path.** Still a single texture sample + cheap ALU; falls back to mono SDF when only one channel is meaningful.
- **Error drop.** Measured reconstruction error down by orders of magnitude vs mono SDF at equal resolution — the reason msdfgen became the indie HUD default.

## Caveats

CGF 2018 vol. 37 no. 1 pp. 273–287, DOI `10.1111/cgf.13265`; no arXiv. Needs vector outlines at atlas bake time (TrueType/CFF), not bitmaps. Not a shaper — HarfBuzz / Srijika still own GSUB/GPOS. Do not remint Green 286, Slug 1128, Higher Quality 2D Text 1787, SDF-for-text 125, or Srijika 1658.

## Links

- DOI: https://doi.org/10.1111/cgf.13265
- Author PDF: https://dcgi.fel.cvut.cz/wp-content/wpallimport-dist/publications/pdf/publications-2018-sloup-cgf-msdf-paper.pdf
- msdfgen: https://github.com/Chlumsky/msdfgen
