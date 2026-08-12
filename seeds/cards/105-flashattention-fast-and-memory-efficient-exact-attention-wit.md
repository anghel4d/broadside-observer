---
title: 'FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness'
authors:
- Tri Dao
- Daniel Y. Fu
- Stefano Ermon
- Atri Rudra
- Christopher Ré
year: 2022
venue: arXiv:cs.LG
arxiv: '2205.14135'
doi: null
source: https://arxiv.org/abs/2205.14135
topics:
- kv-serving
- inference-systems
- transformer
- foundations
seed_rank: 105
seed_batch: prefill-2026-08-13
reviewed: '2026-08-13'
pool: agents
relevance_score: 9
cites:
- title: Attention Is All You Need
  url: https://arxiv.org/abs/1706.03762
  year: 2017
  arxiv: '1706.03762'
  doi: null
  card: 014-attention-is-all-you-need
- title: 'FlashAttention-2: Faster Attention with Better Parallelism and Work Partitioning'
  url: https://arxiv.org/abs/2307.08691
  year: 2023
  arxiv: '2307.08691'
  doi: null
  card: 096-flashattention-2-faster-attention-with-better-parallelism-an
- title: 'FlashAttention-3: Fast and Accurate Attention with Asynchrony and Low-precision'
  url: https://arxiv.org/abs/2407.08608
  year: 2024
  arxiv: '2407.08608'
  doi: null
  card: 089-flashattention-3-fast-and-accurate-attention-with-asynchrony
---

# FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness

## One-sentence takeaway

Transformers are slow and memory-hungry on long sequences, since the time and memory complexity of self-attention are quadratic in sequence length.

## Why it matters here

informs agent serving, KV reuse, and long-horizon tool trajectories; foundational substrate for every LLM agent stack (FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness)

## Key ideas

- Transformers are slow and memory-hungry on long sequences, since the time and memory complexity of self-attention are quadratic in sequence length.
- Approximate attention methods have attempted to address this problem by trading off model quality to reduce the compute complexity, but often do not achieve wall-clock speedup.
- We argue that a missing principle is making attention algorithms IO-aware -- accounting for reads and writes between levels of GPU memory.
- We propose FlashAttention, an IO-aware exact attention algorithm that uses tiling to reduce the number of memory reads/writes between GPU high bandwidth memory (HBM) and GPU on-chip SRAM.
- We analyze the IO complexity of FlashAttention, showing that it requires fewer HBM accesses than standard attention, and is optimal for a range of S

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2205.14135](https://arxiv.org/abs/2205.14135)
- URL: https://arxiv.org/abs/2205.14135
