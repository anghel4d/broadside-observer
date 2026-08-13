---
title: "Named Tensor Notation"
authors:
  - "David Chiang"
  - "Alexander M. Rush"
  - "Boaz Barak"
year: 2023
venue: "TMLR"
arxiv: "2102.13196"
doi: null
source: "https://arxiv.org/abs/2102.13196"
topics:
  - "named-tensors"
  - "notation"
  - "transformers"
seed_rank: 1203
seed_batch: "user-add-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 9
lineage: categorical-deep-learning
cites:
  - title: "Attention Is All You Need"
    url: "https://arxiv.org/abs/1706.03762"
    year: 2017
    arxiv: "1706.03762"
  - title: "Einops: Clear and Reliable Tensor Manipulations with Einstein-Like Notation"
    url: "https://openreview.net/forum?id=oapKSVM2bcj"
    year: 2022
see:
  - "014-attention-is-all-you-need"
  - "1217-einops-clear-and-reliable-tensor-manipulations"
---

# Named Tensor Notation

## One-sentence takeaway

Tensors with named axes, so broadcasting and lifts (batch, heads) do not depend on silent axis order — a notation paper that papers and compilers both needed.

## Why it matters here

Directly adjacent to ano and to Weaves' axis-stride category: names, not positions, are the interface.

## Key ideas

- TMLR 2023; arXiv:2102.13196.
- Lifts low-order ops to minibatches / multi-head attention without reshaping folklore.
- Includes a differential-calculus story in the same notation.

## Caveats

- Notation proposal, not a semantics. Weaves supplies the category; einops supplies the library.

## Links

- arXiv: [2102.13196](https://arxiv.org/abs/2102.13196)
- OpenReview: https://openreview.net/forum?id=hVT7SHlilx
