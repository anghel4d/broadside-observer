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
seed_rank: 939
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
  - "013-attention-is-all-you-need"
  - "953-einops-clear-and-reliable-tensor-manipulations"
---

# Named Tensor Notation

## One-sentence takeaway

Give every tensor axis a name so broadcasting, batching, and multi-head lifts do not depend on silent positional order.

## Why it matters here

Directly adjacent to ano and to Weaves' axis-stride category: names, not positions, are the interface. Einops is the library; this is the notation paper compilers and papers both needed.

## Key ideas

- TMLR January 2023; arXiv:2102.13196; OpenReview `hVT7SHlilx`.
- Low-order ops lift to minibatches and multi-head attention without reshape folklore.
- Includes a differential-calculus story in the same named-axis notation.
- Notation proposal, not a semantics — Weaves supplies the category.

## Caveats

## Links

- arXiv: [2102.13196](https://arxiv.org/abs/2102.13196)
- PDF: https://arxiv.org/pdf/2102.13196
- OpenReview: https://openreview.net/forum?id=hVT7SHlilx
