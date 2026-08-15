---
title: "FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness"
authors:
  - "Tri Dao"
  - "Daniel Y. Fu"
  - "Stefano Ermon"
  - "Atri Rudra"
  - "Christopher Ré"
year: 2022
venue: "arXiv:cs.LG"
arxiv: "2205.14135"
doi: null
source: "https://arxiv.org/abs/2205.14135"
topics:
  - kv-serving
  - inference-systems
  - transformer
  - foundations
seed_rank: 89
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 9
cites:
  - title: "Attention Is All You Need"
    url: "https://arxiv.org/abs/1706.03762"
    year: 2017
    arxiv: "1706.03762"
    doi: null
  - title: "FlashAttention-2: Faster Attention with Better Parallelism and Work Partitioning"
    url: "https://arxiv.org/abs/2307.08691"
    year: 2023
    arxiv: "2307.08691"
    doi: null
  - title: "FlashAttention-3: Fast and Accurate Attention with Asynchrony and Low-precision"
    url: "https://arxiv.org/abs/2407.08608"
    year: 2024
    arxiv: "2407.08608"
    doi: null
see:
  - "013-attention-is-all-you-need"
  - "080-flashattention-2-faster-attention-with-better-parallelism-an"
  - "073-flashattention-3-fast-and-accurate-attention-with-asynchrony"
---

# FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness

## One-sentence takeaway

FlashAttention tiles the attention softmax so the N×N matrix never materializes in HBM, yielding exact attention with linear memory and fewer HBM trips.

## Why it matters here

This is the IO-aware kernel every later serving stack (vLLM, SGLang, FA2/FA3) sits on; without it, ano long-context agents would still pay quadratic HBM.

## Key ideas

- Approximate attention often fails to win wall-clock because it ignores the GPU memory hierarchy; the missing principle is IO-awareness.
- Tiling keeps blocks of Q, K, V in on-chip SRAM, incrementally computing softmax statistics without writing the full attention matrix.
- IO-complexity analysis shows fewer HBM accesses than standard attention, optimal for a range of SRAM sizes.
- Wall-clock: 15% end-to-end over the MLPerf 1.1 BERT-large record, 3× on GPT-2 (1K), 2.4× on Long-Range Arena.
- Enables Path-X (16K, 61.4%) and Path-256 (64K, 63.1%) — first Transformers above chance on those long-range tasks. Block-sparse FA is the approximate sibling.

## Caveats

## Links

- arXiv: [2205.14135](https://arxiv.org/abs/2205.14135)
- PDF: https://arxiv.org/pdf/2205.14135
