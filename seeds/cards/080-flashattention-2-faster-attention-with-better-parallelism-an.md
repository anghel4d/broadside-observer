---
title: "FlashAttention-2: Faster Attention with Better Parallelism and Work Partitioning"
authors:
  - "Tri Dao"
year: 2023
venue: "arXiv:cs.LG"
arxiv: "2307.08691"
doi: null
source: "https://arxiv.org/abs/2307.08691"
topics:
  - kv-serving
  - inference-systems
  - transformer
  - foundations
seed_rank: 80
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 9
cites:
  - title: "FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness"
    url: "https://arxiv.org/abs/2205.14135"
    year: 2022
    arxiv: "2205.14135"
    doi: null
  - title: "FlashAttention-3: Fast and Accurate Attention with Asynchrony and Low-precision"
    url: "https://arxiv.org/abs/2407.08608"
    year: 2024
    arxiv: "2407.08608"
    doi: null
see:
  - "089-flashattention-fast-and-memory-efficient-exact-attention-wit"
  - "073-flashattention-3-fast-and-accurate-attention-with-asynchrony"
---

# FlashAttention-2: Faster Attention with Better Parallelism and Work Partitioning

## One-sentence takeaway

FlashAttention-2 roughly doubles FA1 by cutting non-matmul FLOPs, parallelizing even a single head across thread blocks, and reducing shared-memory traffic inside a block.

## Why it matters here

Long-context ano agents were leaving 60–75% of A100 FLOPs on the table with FA1; FA2 is the work-partitioning fix that made exact attention approach GEMM efficiency.

## Key ideas

- FA1 already made attention IO-aware and linear in memory, but hit only 25–40% of peak FLOPs/s because of poor occupancy and extra shared-memory traffic.
- Algorithm tweaks drop non-matmul FLOPs so more of the work sits on Tensor Cores.
- Parallelism across sequence for a single head raises occupancy; warp-level work split cuts communication through shared memory.
- Result is about 2× over FlashAttention, 50–73% of peak on A100, close to GEMM.
- End-to-end GPT-style training reaches 225 TFLOPs/s per A100 (72% MFU).

## Caveats

## Links

- arXiv: [2307.08691](https://arxiv.org/abs/2307.08691)
- PDF: https://arxiv.org/pdf/2307.08691
