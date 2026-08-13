---
title: "FlashAttention on a Napkin: A Diagrammatic Approach to Deep Learning IO-Awareness"
authors:
  - "Vincent Abbott"
  - "Gioele Zardini"
year: 2025
venue: "TMLR"
arxiv: null
doi: null
source: "https://openreview.net/forum?id=pF2ukh7HxA"
topics:
  - "flashattention"
  - "neural-circuit-diagrams"
  - "io-awareness"
seed_rank: 1199
seed_batch: "user-add-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 9
lineage: categorical-deep-learning
cites:
  - title: "FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness"
    url: "https://arxiv.org/abs/2205.14135"
    year: 2022
    arxiv: "2205.14135"
  - title: "FlashAttention-2: Faster Attention with Better Parallelism and Work Partitioning"
    url: "https://arxiv.org/abs/2307.08691"
    year: 2024
    arxiv: "2307.08691"
  - title: "Neural Circuit Diagrams: Robust Diagrams for the Communication, Implementation, and Analysis of Deep Learning Architectures"
    url: "https://openreview.net/forum?id=RyZB4qXEgt"
    year: 2024
see:
  - "105-flashattention-fast-and-memory-efficient-exact-attention-wit"
  - "096-flashattention-2-faster-attention-with-better-parallelism-an"
  - "1198-neural-circuit-diagrams"
---

# FlashAttention on a Napkin: A Diagrammatic Approach to Deep Learning IO-Awareness

## One-sentence takeaway

Derives FlashAttention-style IO-aware tiling from neural circuit diagrams rather than from kernel folklore — diagrams as a calculus for memory traffic.

## Why it matters here

Connects the FA lineage already on main (105/096/089) to categorical diagrams. If GRID COMMAND ever reasons about tiled attention, this is the napkin proof.

## Key ideas

- TMLR 2025; OpenReview `pF2ukh7HxA`.
- Shows NCDs are not just pedagogy: they recover the tiling/IO argument of FlashAttention.
- Bridge paper between Dao et al. kernels and the 2026 weaves algebra.

## Caveats

- Diagrammatic re-derivation, not a new kernel. FA-3/FA-4 remain the hardware papers.

## Links

- OpenReview: https://openreview.net/forum?id=pF2ukh7HxA
