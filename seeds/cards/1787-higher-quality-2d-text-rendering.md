---
title: "Higher Quality 2D Text Rendering"
authors: ["Nicolas P. Rougier"]
year: 2013
venue: "JCGT vol. 2, no. 1"
arxiv: null
doi: null
source: "http://jcgt.org/published/0002/01/04/"
topics: [unicode-text-shaping]
seed_rank: 1787
seed_batch: "craft-2026-09-11"
reviewed: "2026-09-11"
pool: "graphics"
relevance_score: 9
lineage: unicode-text-shaping
cites:
  - title: "GPU-Centered Font Rendering Directly from Glyph Outlines"
    url: "https://jcgt.org/published/0006/02/02/"
    year: 2017
    arxiv: null
    doi: null
  - title: "Srijika: OpenType-Layout-Reusing Font Restyling for Nine Indic Scripts"
    url: "https://arxiv.org/abs/2609.05661"
    year: 2026
    arxiv: "2609.05661"
    doi: null
  - title: "Unicode Bidirectional Algorithm (UAX #9)"
    url: "https://www.unicode.org/reports/tr9/"
    year: 2000
    arxiv: null
    doi: null
see:
  - "1128-gpu-centered-font-rendering-directly-from-glyph-outlines"
  - "1658-srijika-opentype-layout-reusing-font-restyling-for-nine-indic-scripts"
  - "1599-unicode-bidirectional-algorithm-uax-9"
  - "125-signed-distance-fields-for-text"
---

# Higher Quality 2D Text Rendering

## One-sentence takeaway

Rougier shows how to get LCD-subpixel, vertically-hinted, subpixel-positioned OpenGL text from texture fonts without the usual atlas pixelation at large sizes or the illegible unhinted mush at small sizes.

## Why it matters here

Slug 1128 is GPU outline raster; Srijika 1658 is OpenType layout reuse. The leftover for ano Japanese UI and GRID COMMAND HUD text is *screen-space LCD craft*: vertical-only hinting, accurate advances, kerning, and subpixel RGB filtering so HUD/console glyphs stay sharp in orthographic pixels. Different angle from baking every size into an atlas or evaluating Béziers every frame.

## Key ideas

- **Vertical hinting only.** Horizontal hints fight subpixel placement; trick FreeType with oversized horizontal DPI plus a compensating matrix so stems snap on Y and stay free on X.
- **LCD subpixel filtering.** Render RGB (or BGR) filtered coverage into a 3-channel atlas and decode in the fragment shader — ClearType-class sharpness on orthographic HUDs.
- **Accurate advances and kerning.** Unhinted advances plus kerning at subpixel positions stop the "every glyph on a pixel grid" crawl that atlas fonts show when you animate or scale UI.
- **Shaping-compatible, not shaping.** The method can host complex layout (the paper flags Arabic) but does not implement a shaper — compose with HarfBuzz / Srijika tables, then rasterize with this path.

## Caveats

JCGT vol. 2, no. 1, pp. 50–64, 2013; no DOI. URL path `0002/01/04` is the volume of record (not vol. 3). Texture-font technique, not Slug-style outline GPU. LCD assumes known display order and does not help VR/rotated 3D text. Do not remint Slug 1128, Srijika 1658, UAX #9 1599, or SDF text 125.

## Links

- JCGT page: http://jcgt.org/published/0002/01/04/
- PDF: https://jcgt.org/published/0002/01/04/paper.pdf
