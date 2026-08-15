---
title: "Categorical Foundations for CuTe Layouts"
authors:
  - "Jack Carlisle"
  - "Jay Shah"
  - "Reuben Stern"
  - "Paul VanKoughnett"
year: 2026
venue: "arXiv:cs.PL"
arxiv: "2601.05972"
doi: null
source: "https://arxiv.org/abs/2601.05972"
topics:
  - "cute"
  - "layouts"
  - "gpu"
  - "category-theory"
seed_rank: 952
seed_batch: "user-add-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 8
lineage: categorical-deep-learning
cites:
  - title: "FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness"
    url: "https://arxiv.org/abs/2205.14135"
    year: 2022
    arxiv: "2205.14135"
  - title: "FlashAttention-3: Fast and Accurate Attention with Asynchrony and Low-Precision"
    url: "https://arxiv.org/abs/2407.08691"
    year: 2024
    arxiv: "2407.08691"
see:
  - "089-flashattention-fast-and-memory-efficient-exact-attention-wit"
  - "073-flashattention-3-fast-and-accurate-attention-with-asynchrony"
---

# Categorical Foundations for CuTe Layouts

## One-sentence takeaway

Carlisle, Shah, Stern, and VanKoughnett interpret NVIDIA CuTe/CUTLASS layouts as morphisms in two categories, `Tuple` and `Nest`, and prove that coalesce, complement, composition, logical product, and logical division on those morphisms recover the GPU layout algebra.

## Why it matters here

This is the hardware-layout counterpart of Weaves' axis-stride story: the same shape/stride object FlashAttention kernels actually speak, now with a composition theorem GRID-level GPU work can cite instead of treating CuTe as a C++ API.

## Key ideas

- Restricts attention to *tractable* layouts (row/column-major, compact, projections, broadcasts, dilations, pads) and represents each as a morphism whose realization is the index-to-offset function.
- `Tuple` handles flat shape/stride pairs; `Nest` keeps hierarchical CuTe nesting so layouts that are not directly composable as flats become composable after mutual refinement, pullback, and pushforward.
- Compatibility theorems: \(L_{g\circ f}=L_g\circ L_f\), and likewise for coalesce, complement, logical division, and logical product.
- Characterizes exactly which CuTe layouts arise this way; ships a Python implementation with tests against CUTLASS (`ColfaxResearch/layout-categories`).
- Colfax note (2025-09-21) is the lab write-up; arXiv:2601.05972 is the 174-page paper.

## Caveats

## Links

- arXiv: [2601.05972](https://arxiv.org/abs/2601.05972)
- Colfax: https://research.colfax-intl.com/categorical-foundations-for-cute-layouts/
- Code: https://github.com/ColfaxResearch/layout-categories
