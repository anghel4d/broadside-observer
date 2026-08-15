---
title: "Einops: Clear and Reliable Tensor Manipulations with Einstein-Like Notation"
authors:
  - "Alex Rogozhnikov"
year: 2022
venue: "ICLR"
arxiv: null
doi: null
source: "https://openreview.net/forum?id=oapKSVM2bcj"
topics:
  - "einops"
  - "einsum"
  - "named-axes"
seed_rank: 953
seed_batch: "user-add-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 8
lineage: categorical-deep-learning
cites:
  - title: "Named Tensor Notation"
    url: "https://arxiv.org/abs/2102.13196"
    year: 2023
    arxiv: "2102.13196"
see:
  - "939-named-tensor-notation"
---

# Einops: Clear and Reliable Tensor Manipulations with Einstein-Like Notation

## One-sentence takeaway

Rogozhnikov replaces silent `reshape`/`permute`/`view` chains with a declarative Einstein-like pattern language (`rearrange` / `reduce` / `repeat`) that names axes, checks ranks, and ports across NumPy, PyTorch, JAX, and TensorFlow.

## Why it matters here

This is the working programmer's named-axis layer. Weaves' Einstein operations are the categorical reading of the same surface: if ano/GRID tensors are going to broadcast safely, they need this kind of explicit axis algebra, not implicit dimension order.

## Key ideas

- ICLR 2022 oral (OpenReview `oapKSVM2bcj`). Patterns such as `'b c h w -> b (c h w)'` or patch splits `'b c (h ph) (w pw) -> b h w (c ph pw)'` make intended structure visible.
- Three primitives cover rearrangement, reduction (`mean`/`sum`/…), and repetition; the same string is the documentation, the type check, and the kernel schedule hint.
- Dimension consistency is checked at the pattern, so a rank or size mismatch fails at the call rather than as a later `view` crash.
- One notation across frameworks; widely adopted in research code and cited by Weaves as the practical einsum surface.

## Caveats

## Links

- OpenReview: https://openreview.net/forum?id=oapKSVM2bcj
- PDF: https://openreview.net/pdf?id=oapKSVM2bcj
- Library: https://github.com/arogozhnikov/einops
