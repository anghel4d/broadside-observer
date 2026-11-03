---
title: "The Display of Characters Using Gray Level Sample Arrays"
authors:
  - "John E. Warnock"
year: 1980
venue: "SIGGRAPH 1980, Computer Graphics 14(3):302–307 (also Xerox PARC CSL-80-6)"
arxiv: null
doi: "10.1145/965105.807508"
source: "http://bitsavers.trailing-edge.com/pdf/xerox/parc/techReports/CSL-80-6_The_Display_of_Characters_Using_Gray_Level_Sample_Arrays.pdf"
topics:
  - "font-rendering"
  - "antialiasing"
  - "subpixel-positioning"
  - "glyph-cache"
  - "text-rendering"
seed_rank: 2506
seed_batch: "archive-2026-11-04"
reviewed: "2026-11-04"
pool: "graphics"
lineage: text-layout
relevance_score: 9
cites:
  - title: "The Display of Characters Using Gray Level Sample Arrays (Xerox PARC CSL-80-6)"
    url: "http://bitsavers.trailing-edge.com/pdf/xerox/parc/techReports/CSL-80-6_The_Display_of_Characters_Using_Gray_Level_Sample_Arrays.pdf"
    year: 1980
    arxiv: null
    doi: "10.1145/965105.807508"
see: ["2488-structural-regular-expressions", "2303-breaking-paragraphs-into-lines"]
---

# The Display of Characters Using Gray Level Sample Arrays

## One-sentence takeaway

Warnock filters high-resolution binary glyph masters down to small gray-level arrays, precomputing several sub-pixel phases per glyph, and shows that 3–4 bits per pixel with a well-chosen filter gives legible antialiased text at about 7-pixel x-height. This is the original glyph-atlas-with-subpixel-variants design.

## Why it matters here

Anoptic's scanline text path has to decide what to cache (coverage per glyph per phase), how many phases to keep, and how many coverage bits are enough. Warnock answered all three in 1980, with measurements. The paper also covers compositing overlapping glyphs with a saturating add, which is the same choice a coverage-accumulating scanline rasterizer makes.

## Key ideas

- Start from roughly 100×100 binary master glyphs. Convolve them with a low-pass filter (Hamming, cosine or bilinear, parameterised by width and shape), then sample onto the display grid at a chosen phase (Px, Py).
- Sub-pixel positioning: store several phase-shifted versions of each glyph (e.g. 4 for quarter-pixel placement) and pick one using the low bits of the x position.
- Measured results: filter width of about 1.5–2 output pixels works best. 3 bits per pixel is adequate and 4 is slightly better, while 2 bits is too few.
- Overlapping characters combine by saturating addition of gray values. The same pipeline handles rotated fonts.

## Caveats

- This is pre-hinting. There is no grid-fitting of stems, so small sizes look soft. Later work (e.g. Hersch's grid-constrained character generation, TrueType hinting) adds that.
- It is linear-filter coverage only, with no gamma or LCD sub-pixel (RGB) rendering. The quality judgments were made on 1980 displays.

## Links

- [PDF (Xerox PARC CSL-80-6, bitsavers)](http://bitsavers.trailing-edge.com/pdf/xerox/parc/techReports/CSL-80-6_The_Display_of_Characters_Using_Gray_Level_Sample_Arrays.pdf)
- [ACM DOI](https://doi.org/10.1145/965105.807508)
- [ACM SIGGRAPH History Archive entry](https://history.siggraph.org/learning/the-display-of-characters-using-gray-level-sample-arrays-by-warnock/)
