---
title: "Massively-Parallel Vector Graphics"
authors: ["Francisco Ganacim", "Rodolfo S. Lima", "Luiz Henrique de Figueiredo", "Diego Nehab"]
year: 2014
venue: "ACM TOG (SIGGRAPH Asia 2014)"
arxiv: null
doi: "10.1145/2661229.2661274"
source: "https://w3.impa.br/~diego/projects/GanEtAl14/"
topics: [unicode-text-shaping, vulkan-realtime-rendering]
seed_rank: 1478
seed_batch: "craft-2026-08-31"
reviewed: "2026-08-31"
pool: "graphics"
relevance_score: 10
lineage: gpu-text
cites:
  - title: "Random-Access Rendering of General Vector Graphics"
    url: "https://hhoppe.com/proj/ravg/"
    year: 2008
    arxiv: null
    doi: "10.1145/1457515.1409088"
  - title: "GPU-accelerated Path Rendering"
    url: "https://doi.org/10.1145/2366145.2366191"
    year: 2012
    arxiv: null
    doi: "10.1145/2366145.2366191"
  - title: "Resolution Independent Curve Rendering using Programmable Graphics Hardware"
    url: "https://doi.org/10.1145/1073204.1073303"
    year: 2005
    arxiv: null
    doi: "10.1145/1073204.1073303"
see:
  - "1460-random-access-rendering-of-general-vector-graphics"
  - "128-loop-and-blinn-resolution-independent-curve-rendering-using-"
---

# Massively-Parallel Vector Graphics

## One-sentence takeaway

Replace Nehab–Hoppe’s offline cell lattice with a *shortcut tree* built in parallel per segment, then shade every sample in parallel — random-access GPU vectors that can be rebuilt when the illustration moves.

## Why it matters here

Last Craft minted RAVG (1460): cell streams encoded *offline*. Anoptic UI, CJK, and GRID COMMAND HUDs change every frame (orders, selection, debug overlays). MPVG is Nehab’s own sequel: tree construction is segment-parallel, so dynamic vector graphics are in scope, and a sample can still be colored under a perspective warp. Slug (1128) is per-glyph outlines; Warnock (1030) is mesh-amplified paths; Kilgard StC is stencil-then-cover (seen, not minted). This is the *live* random-access leftover. Source code shipped with the paper.

## Key ideas

- **Shortcut tree.** An adaptive spatial index over path segments (linear, rational quadratic, integral cubic Bézier). Shortcuts skip empty space so a sample walks a short path to the overlapping primitives. Built bottom-up in parallel at segment granularity — not a CPU tessellation, not an offline lattice.
- **Random-access color.** The tree answers “what is the color at this sample?” independently, so the same representation maps onto warped/projected surfaces. Layers, clips, gradients, textures, and stacked semitransparent fills are in the model.
- **Sample scheduler.** Pixels with overlapping antialiasing filters share samples. Samples that execute the same vector ops are packed together to keep SIMD coherent and bandwidth low. Tuned for *wide* filters and many samples per pixel (noise-free, not 1× MSAA).
- **Feature complete vs NVPR/MuPDF.** Their comparisons include NV_path_rendering and MuPDF; the pipeline is a full illustration renderer, not a glyph-only shader.

## Caveats

Preprocess is parallel but still a rebuild — budget it, don’t assume it is free inside the Anoptic forward+ mesh pass. High sample counts are the quality story; a 1-sample HUD may not need the scheduler. Not a shaper (HarfBuzz still owns GSUB/GPOS). GPU-friendly Stroke Expansion / Polar Stroking / Li 2016 scanline path rendering stay leftovers. Kilgard 2012 is in `seen.json` titles — cite, do not mint. Do not remint 1460 / 1128 / 128 / 1030.

## Links

- Project: https://w3.impa.br/~diego/projects/GanEtAl14/
- DOI: [10.1145/2661229.2661274](https://doi.org/10.1145/2661229.2661274)
- Samples: https://w3.impa.br/~diego/projects/GanEtAl14/sample.html
