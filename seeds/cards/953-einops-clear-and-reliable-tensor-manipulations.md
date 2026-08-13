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

A tiny notation/library (`rearrange`/`reduce`/`repeat`) that makes tensor axis manipulation explicit and less bug-prone than `view`/`permute`.

## Why it matters here

The working programmer's named-axis layer. Weaves' Einstein operations are the categorical version of this.

## Key ideas

- ICLR 2022; OpenReview `oapKSVM2bcj`.
- Einstein-like patterns instead of silent dimension order.
- Widely adopted in research code; cited by Weaves as the practical einsum surface.

## Caveats

- Library paper. Named Tensor Notation is the corresponding writing system; Weaves is the category.

## Links

- OpenReview: https://openreview.net/forum?id=oapKSVM2bcj
