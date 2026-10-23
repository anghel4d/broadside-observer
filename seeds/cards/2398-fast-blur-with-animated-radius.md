---
title: "Fast blur with animated radius"
authors:
  - "Aras Pranckevičius"
year: 2026
venue: "aras-p.info (blog)"
arxiv: null
doi: null
source: "https://aras-p.info/blog/2026/10/01/Fast-blur-with-animated-radius/"
topics:
  - "gaussian-blur"
  - "image-pyramids"
  - "hdr-post-processing"
  - "webgpu"
  - "dual-kawase"
seed_rank: 2398
seed_batch: "craft-2026-10-23"
reviewed: "2026-10-23"
pool: "graphics"
relevance_score: 7
lineage: real-time-rendering
cites:
  - title: "Fast blur with animated radius"
    url: "https://aras-p.info/blog/2026/10/01/Fast-blur-with-animated-radius/"
    year: 2026
    arxiv: null
    doi: null
  - title: "blur-playground (source)"
    url: "https://github.com/aras-p/blur-playground"
    year: 2026
    arxiv: null
    doi: null
  - title: "Bandwidth-Efficient Rendering (Marius Bjørge, SIGGRAPH 2015 notes)"
    url: "https://community.arm.com/cfs-file/__key/communityserver-blogs-components-weblogfiles/00-00-00-20-66/siggraph2015_2D00_mmg_2D00_marius_2D00_notes.pdf"
    year: 2015
    arxiv: null
    doi: null
  - title: "Fast blurs 1 (Fabian Giesen)"
    url: "https://fgiesen.wordpress.com/2012/07/30/fast-blurs-1/"
    year: 2012
    arxiv: null
    doi: null
  - title: "GPU Gems 2, Chapter 20: Fast Third-Order Texture Filtering"
    url: "https://developer.nvidia.com/gpugems/gpugems2/part-iii-high-quality-rendering/chapter-20-fast-third-order-texture-filtering"
    year: 2005
    arxiv: null
    doi: null
see:
  - "1351-frame-buffer-postprocessing-effects-in-double-s"
---

# Fast blur with animated radius

## One-sentence takeaway

Aras's "Smol Gaussian" blur works in three steps: downsample by ceil-halving per axis whenever the working sigma reaches 6, run a small separable Gaussian whose variance is reduced by the blur that downsampling and reconstruction will add, then reconstruct with bilinear up to 2× and cubic B-spline beyond. It supports smoothly animated and anisotropic radii on HDR content without the stepping of Dual Kawase or the ringing of recursive (Deriche/Van Vliet) filters. It runs at Skia-blur speed, gets cheaper as the radius grows, and is 2–3× faster than his extended Dual Kawase.

## Why it matters here

Anoptic's UI (frosted panels, popups), bloom and depth-of-field-style effects all need a large-radius blur whose radius animates. HDR highlights are exactly where the usual tricks wobble, flicker or ring. This is a small, well-reasoned recipe with a WebGPU playground and a benchmark harness, and the code is easy to port to a Vulkan compute pass.

## Key ideas

- **Variance budgeting.** The residual sigma is √(σ² − down_var − up_var), where box downsampling adds (s²−1)/12 and reconstruction adds s²·{1/6, 3/16, 1/3}, depending on the scale.
- **Artifact control.** Odd-sized levels use exact pixel-area integration, so isolated bright pixels don't flicker as the sampling phase shifts. A one-pixel border preserves edges so bright interiors don't over-brighten. The kernel extends to 4σ, with a taper over 3σ–4σ, to avoid an abrupt cutoff on HDR highlights.
- **Bilinear tricks.** Adjacent weights are paired into single bilinear taps. Cubic B-spline reconstruction uses the GPU Gems 2 trick of building it from bilinear samples. Two consecutive exact halvings merge into one 4× reduction.
- **A rejected idea.** Crossfading neighbouring working resolutions near level switches cost performance and gave no visible gain.
- **Comparison set.** The playground compares six modes: Smol, Skia, extended Dual Kawase, Blender 5.2 "Fast Gaussian" (recursive), repeated-box "Ryg blur", and plain separable Gaussian. A WIP Blender compositor PR (164496) includes a CPU path.

## Caveats

The author says it is "not particularly novel", calling it a handful of quality tweaks over Skia's GPU blur. Timings come from Chrome/WebGPU and measure CPU+GPU latency on three machines, with no controlled GPU-only profiling. The playground's JavaScript/WebGPU code was written with AI assistance, by the author's own account. It requires `float32-filterable` and `float32-blendable`. Whether it lands in Blender is undecided.

## Links

- Post: https://aras-p.info/blog/2026/10/01/Fast-blur-with-animated-radius/
- Interactive WebGPU playground: https://aras-p.info/files/webgpu/2026-blur-playground/
- Source: https://github.com/aras-p/blur-playground
- Blender PR 164496: https://projects.blender.org/blender/blender/pulls/164496
- Bjørge, Bandwidth-Efficient Rendering (PDF): https://community.arm.com/cfs-file/__key/communityserver-blogs-components-weblogfiles/00-00-00-20-66/siggraph2015_2D00_mmg_2D00_marius_2D00_notes.pdf
