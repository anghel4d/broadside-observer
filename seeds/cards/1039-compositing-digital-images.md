---
title: "Compositing Digital Images"
authors: ["Thomas Porter", "Tom Duff"]
year: 1984
venue: "SIGGRAPH"
arxiv: null
doi: "10.1145/800031.808606"
source: "https://doi.org/10.1145/800031.808606"
topics: [alpha-compositing, premultiplied-alpha, porter-duff]
seed_rank: 1039
seed_batch: "archive-2026-08-16"
reviewed: "2026-08-16"
pool: "graphics"
relevance_score: 10
lineage: porter-duff
cites:
  - title: "The A-buffer, an Antialiased Hidden Surface Method"
    url: "https://doi.org/10.1145/800031.808585"
    year: 1984
    arxiv: null
    doi: "10.1145/800031.808585"
  - title: "A Hidden Surface Algorithm for Computer Generated Halftone Pictures"
    url: "https://apps.dtic.mil/sti/tr/pdf/AD0753671.pdf"
    year: 1969
    arxiv: null
    doi: null
see:
  - "338-weighted-blended-order-independent-transparency"
  - "410-depth-peeling-order-independent-transparency"
  - "1010-the-reyes-image-rendering-architecture"
---

# Compositing Digital Images

## One-sentence takeaway

Pictures are RGBA with colour premultiplied by alpha; twelve binary operators (`over`, `in`, `out`, `atop`, `xor`, …) are the algebra for anti-aliased accumulation of separately rendered elements.

## Why it matters here

Anoptic UI, glyphs, and meshlet overlays all composite. The library had OIT implementations (338, 410) and Reyes (1010) but not the 1984 paper that *defined* the alpha channel and the operators every GPU blend state still names. Porter–Duff is the reason premultiplied alpha is the only algebra that survives coverage-mask A-buffer fragments.

## Key ideas

- Four-channel pictures: a matte (alpha) is computed the same way as colour, not as a 1-bit cookie-cutter.
- Premultiplication: stored RGB is already scaled by α, so `over` is a linear combination `c_a + c_b(1-α_a)` with no extra multiply.
- The 12 operators enumerate every combination of “A in, B in, both, neither” at a pixel and give closed-form RGBA results.
- Elements can be rendered independently (different renderers, different times) and still anti-alias when composited — the production argument for mattes.
- Same SIGGRAPH 1984 session as Carpenter's A-buffer; the two papers are the matte and the fragment-list halves of Lucasfilm compositing.

## Caveats

- The algebra is associative for `over` on premultiplied values but *not* a substitute for order-independent transparency of many overlapping surfaces; that is the A-buffer / peeling problem.
- Non-premultiplied (“straight”) alpha is a frequent engine footgun; the paper's arithmetic assumes premultiplication throughout.
- Hardware blend units implement a subset; `in`/`out`/`atop` are shader work on Vulkan.

## Links

- DOI: [10.1145/800031.808606](https://doi.org/10.1145/800031.808606)
- Author PDF: https://keithp.com/~keithp/porterduff/p253-porter.pdf
