---
title: 'FlashAttention-2: Faster Attention with Better Parallelism and Work Partitioning'
authors:
- Tri Dao
year: 2023
venue: arXiv:cs.LG
arxiv: '2307.08691'
doi: null
source: https://arxiv.org/abs/2307.08691
topics:
- kv-serving
- inference-systems
- transformer
- foundations
seed_rank: 96
seed_batch: prefill-2026-08-13
reviewed: '2026-08-13'
pool: agents
relevance_score: 9
cites:
- title: 'FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness'
  url: https://arxiv.org/abs/2205.14135
  year: 2022
  arxiv: '2205.14135'
  doi: null
  card: 105-flashattention-fast-and-memory-efficient-exact-attention-wit
- title: 'FlashAttention-3: Fast and Accurate Attention with Asynchrony and Low-precision'
  url: https://arxiv.org/abs/2407.08608
  year: 2024
  arxiv: '2407.08608'
  doi: null
  card: 089-flashattention-3-fast-and-accurate-attention-with-asynchrony
---

# FlashAttention-2: Faster Attention with Better Parallelism and Work Partitioning

## One-sentence takeaway

Scaling Transformers to longer sequence lengths has been a major problem in the last several years, promising to improve performance in language modeling and high-resolution image understanding, as well as to unlock new applications in code, audio, and video generation.

## Why it matters here

informs agent serving, KV reuse, and long-horizon tool trajectories; foundational substrate for every LLM agent stack (FlashAttention-2: Faster Attention with Better Parallelism and Work Partitioning)

## Key ideas

- Scaling Transformers to longer sequence lengths has been a major problem in the last several years, promising to improve performance in language modeling and high-resolution image understanding, as well as to unlock new applications in code, audio, and video generation.
- The attention layer is the main bottleneck in scaling to longer sequences, as its runtime and memory increase quadratically in the sequence length.
- FlashAttention exploits the asymmetric GPU memory hierarchy to bring significant memory saving (linear instead of quadratic) and runtime speedup (2-4$\times$ compared to optimized baselines), with no approximation.
- However, FlashAttention is still not nearly as fast as optimized matrix-multiply (GEMM) operations, reaching only 25-40\% of the theoretical maximum FLOPs/s.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2307.08691](https://arxiv.org/abs/2307.08691)
- URL: https://arxiv.org/abs/2307.08691
