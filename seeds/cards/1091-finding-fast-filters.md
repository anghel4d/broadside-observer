---
title: "Finding Fast Filters"
authors: ["Karima Ma", "Andrew Adams", "Jonathan Ragan-Kelley"]
year: 2026
venue: "ACM TOG / SIGGRAPH 2026"
arxiv: "2607.20634"
doi: null
source: "https://arxiv.org/abs/2607.20634"
topics: [vulkan-realtime-rendering]
seed_rank: 1091
seed_batch: "craft-2026-08-19"
reviewed: "2026-08-19"
pool: "graphics"
relevance_score: 9
lineage: vulkan-realtime-rendering
cites:
  - title: "Convolution Pyramids"
    url: "https://doi.org/10.1145/2024156.2024209"
    year: 2011
    arxiv: null
    doi: "10.1145/2024156.2024209"
  - title: "Halide: A Language and Compiler for Optimizing Parallelism, Locality, and Recomputation in Image Processing Pipelines"
    url: "https://people.csail.mit.edu/jrk/halide-pldi13.pdf"
    year: 2013
    arxiv: null
    doi: "10.1145/2491956.2462176"
  - title: "The Design of Linear-Phase FIR Filters with Recursive Algorithms"
    url: "https://doi.org/10.1109/ICASSP.1991.150708"
    year: 1991
    arxiv: null
    doi: null
see:
  - "1065-gpu-friendly-laplacian-texture-blending"
  - "1070-the-clipmap-a-virtual-mipmap"
  - "341-ispc-a-spmd-compiler-for-high-performance-cpu-programming"
---

# Finding Fast Filters

## One-sentence takeaway

Unify FIR / TIIR / multi-rate / cascade / sum as a searchable DSL, fit parameters with a γ-rescaled pole trick so TIIRs don't explode, then lower the Pareto winners to fused vectorized C++ — Gaussian-401 at 70× separable, 4–8× faster than Convolution Pyramids / FRM at equal PSNR.

## Why it matters here

Anoptic and GRID COMMAND need cheap large-support blurs (GI screenspace, bloom, audio/HRIR, hex splat prefilters) *this week*, not a Halide rewrite. Last Craft kept Laplacian blending (1065) for material splat; this is the filter-kernel companion: TIIR is the box/summed-area trick generalized, and the compiler emits C++ you can paste next to an arena, not a CUDA graph. Different slice from mesh-amp terrain.

## Key ideas

- Primitives: FIR, order-2 TIIR (truncated IIR = Crow box as a special case), Stride/FRM interpolators, DownUpsample I/II, Cascade, Sum, 2D Pipe.
- TIIR training: reparameterize poles with time-step γ so useful slow-decay filters occupy the whole unit disk; project unstable poles; sigmoid-mask the truncation window.
- Cost model (r≈0.98) ranks during search; only top Pareto tiers get compiled. Scattered look-ahead vectorizes horizontal IIRs; AVX-512 C++ with circular-buffer wrap via extra mapped page.
- Gaussians/Gabors/Lanczos/HRIR/telephone: 3.9–8× vs prior approximate methods; 2D Gaussian-401 70× vs separable.

## Caveats

- CPU AVX-512 lowering in the paper; GPU kernels are sketched (IIRs via existing parallel-scan recipes) but not the artifact.
- Not spatially-varying (no per-pixel kernel). Don't replace a material splat with this.
- Search samples thousands of designs; you want the published Pareto programs, not to re-run the enumerator on day one.

## Links

- arXiv: [2607.20634](https://arxiv.org/abs/2607.20634)
