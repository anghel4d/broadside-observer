---
title: 'FlashAttention-3: Fast and Accurate Attention with Asynchrony and Low-precision'
authors:
- Jay Shah
- Ganesh Bikshandi
- Ying Zhang
- Vijay Thakkar
- Pradeep Ramani
- Tri Dao
year: 2024
venue: arXiv:cs.LG
arxiv: '2407.08608'
doi: null
source: https://arxiv.org/abs/2407.08608
topics:
- rag
- retrieval
- kv-serving
- inference-systems
- transformer
- foundations
seed_rank: 73
seed_batch: prefill-2026-08-13
reviewed: '2026-08-13'
pool: agents
relevance_score: 9
cites:
  - title: "FlashAttention-2: Faster Attention with Better Parallelism and Work Partitioning"
    url: "https://arxiv.org/abs/2307.08691"
    year: 2023
    arxiv: "2307.08691"
    doi: null
  - title: "CriticalKV: Optimizing KV Cache Eviction from an Output Perturbation Perspective"
    url: "https://arxiv.org/abs/2502.03805"
    year: 2025
    arxiv: "2502.03805"
    doi: null
  - title: "FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness"
    url: "https://arxiv.org/abs/2205.14135"
    year: 2022
    arxiv: "2205.14135"
    doi: null
see:
  - "080-flashattention-2-faster-attention-with-better-parallelism-an"
  - "089-flashattention-fast-and-memory-efficient-exact-attention-wit"
---

# FlashAttention-3: Fast and Accurate Attention with Asynchrony and Low-precision

## One-sentence takeaway

Attention, as a core layer of the ubiquitous Transformer architecture, is the bottleneck for large language models and long-context applications.

## Why it matters here

informs agent serving, KV reuse, and long-horizon tool trajectories; retrieval+evidence trails matter for Broadside provenance-rich digests (FlashAttention-3: Fast and Accurate Attention with Asynchrony and Low-precision)

## Key ideas

- Attention, as a core layer of the ubiquitous Transformer architecture, is the bottleneck for large language models and long-context applications.
- FlashAttention elaborated an approach to speed up attention on GPUs through minimizing memory reads/writes.
- However, it has yet to take advantage of new capabilities present in recent hardware, with FlashAttention-2 achieving only 35% utilization on the H100 GPU.
- We develop three main techniques to speed up attention on Hopper GPUs: exploiting asynchrony of the Tensor Cores and TMA to (1) overlap overall computation and data movement via warp-specialization and (2) interleave block-wise matmul and softmax operations, and (3) block quantization and incoherent processing that leverages hardware support for FP8 low-precision.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2407.08608](https://arxiv.org/abs/2407.08608)
- URL: https://arxiv.org/abs/2407.08608
