---
title: "Random-Access Rendering of General Vector Graphics"
authors: ["Diego Nehab", "Hugues Hoppe"]
year: 2008
venue: "ACM TOG (SIGGRAPH Asia 2008)"
arxiv: null
doi: "10.1145/1457515.1409088"
source: "https://hhoppe.com/proj/ravg/"
topics: [unicode-text-shaping, vulkan-realtime-rendering]
seed_rank: 1460
seed_batch: "craft-2026-08-29"
reviewed: "2026-08-29"
pool: "graphics"
relevance_score: 9
lineage: gpu-text
cites:
  - title: "Resolution Independent Curve Rendering using Programmable Graphics Hardware"
    url: "https://doi.org/10.1145/1073204.1073303"
    year: 2005
    arxiv: null
    doi: "10.1145/1073204.1073303"
  - title: "Improved Alpha-Tested Magnification for Vector Textures and Special Effects"
    url: "https://steamcdn-a.akamaihd.net/apps/valve/2007/SIGGRAPH2007_AlphaTestedMagnification.pdf"
    year: 2007
    arxiv: null
    doi: null
  - title: "The A-buffer, an Antialiased Hidden Surface Method"
    url: "https://doi.org/10.1145/800031.808585"
    year: 1984
    arxiv: null
    doi: "10.1145/800031.808585"
see:
  - "1128-gpu-centered-font-rendering-directly-from-glyph-outlines"
  - "128-loop-and-blinn-resolution-independent-curve-rendering-using-"
  - "286-improved-alpha-tested-magnification-for-vector-textures-and-"
  - "1030-warnock-gpu-geometry-amplification-for-vector-graphics"
  - "1038-the-a-buffer-an-antialiased-hidden-surface-method"
---

# Random-Access Rendering of General Vector Graphics

## One-sentence takeaway

Partition vector art into a coarse lattice of cell-specialized streams; a pixel shader interprets the local primitive list and does prefilter plus supersample in one invocation — random-access GPU vectors, including thin strokes and layered fills.

## Why it matters here

Last Crafts left Unicode empty (Slug 1128 / Loop-Blinn 128 / Green 286 already minted; Pathfinder and Vello are blogs, not papers). This is the crème *paper* leftover: cell streams you can map onto UI quads or deformed surfaces. CJK engine UI that is not a baked atlas. Warnock 1030 is geometry amplification; this is the texel-program cousin. Anoptic text can evaluate coverage from the cell stream instead of a distance-field mip.

## Key ideas

- **Cell-specialized streams.** A coarse lattice; each cell stores a variable-length encoding of the primitives it overlaps (filled shapes, strokes, quadratic outlines, color gradients, stacked semitransparent layers).
- **One shader invocation.** The pixel shader interprets the stream. Memory access stays local to the cell. Same representation maps onto arbitrary surfaces or deformations — not just a screen-aligned blit.
- **Prefilter + adaptive supersample.** Both happen inside the shader, so inter-primitive antialiasing costs no extra bandwidth (no A-buffer 1038 list). Supersample density falls back to one sample in smooth regions.
- **Winding numbers, not just SDF.** Paths recover signed distance by ray-testing segments; winding handles self-intersecting fills. Corners stay exact without a special case. Thin strokes are first-class, not fattened fills.

## Caveats

The lattice is encoded offline (their own hindsight: real-time conversion was the next step). Corner and hairline AA is a known follow-up. This is not a shaper — HarfBuzz still does GSUB/GPOS; this rasterizes already-shaped outlines. Do not confuse with MSDF (Green 286) or per-glyph outline eval (Slug 1128). GPU-friendly Stroke Expansion / Polar Stroking are later leftovers, not remints.

## Links

- Project: https://hhoppe.com/proj/ravg/
- PDF: https://hhoppe.com/ravg.pdf
- DOI: [10.1145/1457515.1409088](https://doi.org/10.1145/1457515.1409088)
- Earlier TR (texel programs): https://hhoppe.com/ravg_tr.pdf
