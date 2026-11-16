---
title: "User-Schedulable Approximations for Quantized Tensor Programs"
authors:
  - "Alex Reinking"
year: 2026
venue: "arXiv preprint (cs.PL)"
arxiv: "2611.17526"
doi: null
source: "https://arxiv.org/abs/2611.17526"
version_reviewed: "v1"
topics:
  - "array-programming-apl-bqn-q"
  - "batched-interpreters-ffi"
seed_rank: 2610
seed_batch: "frontier-2026-11-16"
reviewed: "2026-11-16"
pool: "languages"
relevance_score: 7
cites:
  - title: "User-Schedulable Approximations for Quantized Tensor Programs"
    url: "https://arxiv.org/abs/2611.17526"
    year: 2026
    arxiv: "2611.17526"
    doi: null
---

# User-Schedulable Approximations for Quantized Tensor Programs

## One-sentence takeaway

Halide's algorithm/schedule split is extended to value representations: a new approximate_by directive applies a composable codec (quantizer, integer representation, bit packer, layout) to a stage and returns encoder and decoder as schedulable stages, so one algorithm plus one schedule library generates 347 quantized kernels for 31 GGML/KleidiAI formats in 3.7x less code, reaching at least 95% of GGML's hand-written speed in 91% of comparable cases.

## Why it matters here

This is array-language engineering at its best: representation becomes a scheduling choice rather than a hand-written kernel per format pair, which is the combinatorial explosion an ano or Anoptic SoA backend would hit with packed component formats. Round-trip laws checked by property tests, which found a real inconsistency in GGML's q8_1, are a cheap correctness lever worth copying for any codec layer.

## Key ideas

- **Explosion.** Every weight format times every activation format times every ISA needs a kernel; on the authors' Arm CPU only 8 of GGML's 54 pairs had a tiled matmul.
- **Codecs.** Encoder-decoder pairs composed from reusable quantizers, integer representations, bit packers and layouts.
- **approximate_by.** Applies a codec to one stage and returns ordinary Halide stages, so both decoders fuse into the register tiles of a matrix product.
- **Contracts.** Optional laws such as round-trip are checked by property tests; this exposed an inconsistent block sum in GGML's q8_1.
- **Evidence.** 347 kernels for 31 formats on Arm CPUs and Apple GPUs, covering 38 pairs GGML lacks; on M3 Max, median 1.13x over GGML's format-specific kernels; x86 AMX port adds 793 lines and matches GGML in 83.5% of cases.

## Caveats

Abstract-level read of the v1 preprint (Monday 16 Nov 2026 arXiv listing); numbers are the authors' and unreplicated. Evaluated on CPU and Apple GPU kernels; large f32 products are often still faster in Apple BLAS, and discrete-GPU backends are not covered.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.17526
- PDF: https://arxiv.org/pdf/2611.17526
