---
title: "FlashAttention-4: Algorithm and Kernel Pipelining Co-Design for Asymmetric Hardware Scaling"
authors:
  - "Ted Zadouri"
  - "Markus Hoehnerbach"
  - "Jay Shah"
  - "Timmy Liu"
  - "Vijay Thakkar"
  - "Tri Dao"
year: 2026
venue: "arXiv:cs.CL"
arxiv: "2603.05451"
doi: null
source: "https://arxiv.org/abs/2603.05451"
topics:
  - "flashattention"
  - "kernels"
  - "pipelining"
seed_rank: 958
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
    year: 2023
    arxiv: "2307.08691"
  - title: "FlashAttention-3: Fast and Accurate Attention with Asynchrony and Low-Precision"
    url: "https://arxiv.org/abs/2407.08691"
    year: 2024
    arxiv: "2407.08691"
see:
  - "089-flashattention-fast-and-memory-efficient-exact-attention-wit"
  - "080-flashattention-2-faster-attention-with-better-parallelism-an"
  - "073-flashattention-3-fast-and-accurate-attention-with-asynchrony"
---

# FlashAttention-4: Algorithm and Kernel Pipelining Co-Design for Asymmetric Hardware Scaling

## One-sentence takeaway

Zadouri, Hoehnerbach, Shah, Liu, Thakkar, and Dao retarget exact attention at Blackwell: tensor cores doubled while shared-memory bandwidth and exp units did not, so FA-4 pipelines larger async MMA tiles, software-emulates exponentials, and uses tensor memory / 2-CTA MMA in the backward pass.

## Why it matters here

Completes the FlashAttention spine Weaves cites (1–4). GRID-level GPU work should treat softmax and data movement as first-class bottlenecks, not just GEMM occupancy — the same IO story as FA-1, now on asymmetric hardware.

## Key ideas

- FA-3 was Hopper/H100 (async + warp specialization). Blackwell B200/GB200 shifts the bottleneck: matmul is relatively cheaper; softmax exp and smem traffic dominate.
- Forward: redesigned fully-async MMA pipelines, larger tiles, FMA-polynomial exp, and conditional online-softmax rescaling to skip work.
- Backward: tensor memory plus 2-CTA MMA cuts smem traffic and atomic adds on \(dQ\); a deterministic backward mode is included for reproducible training.
- Implemented in Python-embedded CuTe-DSL rather than C++ templates: 20–30× faster compile (≈2.5s vs 55s forward) at full expressivity.
- Reported on B200 BF16: up to 1.3× vs cuDNN 9.13, 2.7× vs Triton, 1613 TFLOPs/s (71% peak).

## Caveats

## Links

- arXiv: [2603.05451](https://arxiv.org/abs/2603.05451)
