---
title: "FlashAttention on a Napkin: A Diagrammatic Approach to Deep Learning IO-Awareness"
authors:
  - "Vincent Abbott"
  - "Gioele Zardini"
year: 2025
venue: "TMLR"
arxiv: "2412.03317"
doi: null
source: "https://arxiv.org/abs/2412.03317"
topics:
  - "flashattention"
  - "neural-circuit-diagrams"
  - "io-awareness"
seed_rank: 935
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
    url: "https://arxiv.org/abs/2402.05424"
    year: 2024
    arxiv: "2402.05424"
see:
  - "089-flashattention-fast-and-memory-efficient-exact-attention-wit"
  - "080-flashattention-2-faster-attention-with-better-parallelism-an"
  - "934-neural-circuit-diagrams"
---

# FlashAttention on a Napkin: A Diagrammatic Approach to Deep Learning IO-Awareness

## One-sentence takeaway

Extends neural circuit diagrams with GPU hierarchy and resource labels so FlashAttention-style tiling, streaming, and IO models are derived by diagram rewrite rather than by kernel folklore.

## Why it matters here

Connects the FA lineage already on the shelf to categorical diagrams. If GRID COMMAND or an ano agent ever reasons about tiled attention or other HBM-bound kernels, this is the napkin calculus for memory traffic.

## Key ideas

- TMLR 2025 (March); arXiv:2412.03317; OpenReview `pF2ukh7HxA`.
- Relabellings of a diagram yield high-level streaming and tiling strategies plus a performance model that can absorb quantization and multi-level GPU hierarchies.
- Intermediate-level pseudocode is itself drawn, so a hardware-aware algorithm can be derived step by step.
- Recovers why FlashAttention never materializes the full $QK^\top$ matrix in HBM: the SoftMax contraction is streamable.
- Framework paper, not a new kernel: FA-2/FA-3 remain the hardware implementations; this is the derivation method.

## Caveats

## Links

- arXiv: [2412.03317](https://arxiv.org/abs/2412.03317)
- PDF: https://arxiv.org/pdf/2412.03317
- OpenReview: https://openreview.net/forum?id=pF2ukh7HxA
