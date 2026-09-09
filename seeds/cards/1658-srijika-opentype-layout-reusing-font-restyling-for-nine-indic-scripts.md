---
title: "Srijika: OpenType-Layout-Reusing Font Restyling for Nine Indic Scripts"
authors: ["Anil Pai"]
year: 2026
venue: "arXiv (cs.GR)"
arxiv: "2609.05661"
doi: null
source: "https://arxiv.org/abs/2609.05661"
topics: [unicode-text-shaping]
seed_rank: 1658
seed_batch: "craft-2026-09-09"
reviewed: "2026-09-09"
pool: "graphics"
relevance_score: 9
lineage: unicode-text-shaping
cites:
  - title: "GPU-Centered Font Rendering Directly from Glyph Outlines"
    url: "https://jcgt.org/published/0006/02/02/"
    year: 2017
    arxiv: null
    doi: null
  - title: "Unicode Bidirectional Algorithm (UAX #9)"
    url: "https://www.unicode.org/reports/tr9/"
    year: 2000
    arxiv: null
    doi: null
  - title: "OpenType Specification"
    url: "https://learn.microsoft.com/en-us/typography/opentype/spec/"
    year: 2024
    arxiv: null
    doi: null
see:
  - "1128-gpu-centered-font-rendering-directly-from-glyph-outlines"
  - "1599-unicode-bidirectional-algorithm-uax-9"
---

# Srijika: OpenType-Layout-Reusing Font Restyling for Nine Indic Scripts

## One-sentence takeaway

Srijika restyles glyph *outlines* from shaping-complete OpenType template fonts while preserving cmap/GSUB closure and GPOS under a documented metric policy — so complex-script shaping keeps working after a visual restyle.

## Why it matters here

Slug 1128 taught GPU outline rasterization; UAX #9 1599 covers bidi. The leftover for GRID COMMAND / Anoptic UI is *OpenType layout reuse*: Indic and other complex scripts die when you regenerate glyphs without the GSUB/GPOS graph. Srijika is the practical recipe — restyle outlines, keep the shaping tables — not another neural font GAN.

## Key ideas

- **Templates are shaping-complete.** Start from fonts that already shape nine Brahmic scripts (Devanagari, Tamil, Bengali, Telugu, Kannada, Malayalam, Gujarati, Gurmukhi, Odia).
- **Preserve layout, replace paint.** Keep cmap and GSUB closure; carry GPOS under an explicit metric policy so kerning/mark attachment survive restyling.
- **Installable OpenType output.** Result is a real font, not a raster atlas — composable with HarfBuzz / system shapers and with Slug-style GPU outline paths.
- **Why not remint Slug.** Slug is rasterization; Srijika is shaping-preserving restyle — orthogonal leftover of the Unicode/text shelf.

## Caveats

arXiv `2609.05661` (cs.CV/cs.GR, Sep 2026); no DOI at harvest. Focused on Indic Brahmic scripts — validate for CJK/Arabic before treating as universal. Do not remint Slug 1128 or UAX #9 1599. Skip GlyphAnchor / neural font priors (cite-not-mint).

## Links

- arXiv abs: https://arxiv.org/abs/2609.05661
- PDF: https://arxiv.org/pdf/2609.05661
