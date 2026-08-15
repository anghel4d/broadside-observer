---
title: "FlashAttention-3: Fast and Accurate Attention with Asynchrony and Low-precision"
authors:
  - "Jay Shah"
  - "Ganesh Bikshandi"
  - "Ying Zhang"
  - "Vijay Thakkar"
  - "Pradeep Ramani"
  - "Tri Dao"
year: 2024
venue: "arXiv:cs.LG"
arxiv: "2407.08608"
doi: null
source: "https://arxiv.org/abs/2407.08608"
topics:
  - rag
  - retrieval
  - kv-serving
  - inference-systems
  - transformer
  - foundations
seed_rank: 73
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 9
cites:
  - title: "FlashAttention-2: Faster Attention with Better Parallelism and Work Partitioning"
    url: "https://arxiv.org/abs/2307.08691"
    year: 2023
    arxiv: "2307.08691"
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

FlashAttention-3 uses Hopper asynchrony (warp-specialized TMA/Tensor Core overlap, interleaved matmul/softmax) and FP8 block quantization to push H100 attention to 75% FP16 utilization and near 1.2 PFLOPs/s FP8.

## Why it matters here

Every ano/Broadside long-context decode is attention-bound on Hopper-class GPUs; FA3 is the kernel that actually uses the TMA and FP8 units FA2 left idle.

## Key ideas

- FlashAttention-2 reaches only about 35% utilization on H100 because it does not exploit Hopper's async copy and low-precision hardware.
- Warp specialization overlaps bulk data movement (TMA) with Tensor Core math; block-wise matmul and softmax are interleaved rather than fully staged.
- Incoherent processing plus block quantization makes FP8 attention numerically stabler: 2.6× lower error than a baseline FP8 attention.
- FP16 hits up to 740 TFLOPs/s (75% utilization) and 1.5–2.0× over prior FlashAttention on H100.
- The algorithm remains exact attention in FP16; FP8 is the low-precision path.

## Caveats

## Links

- arXiv: [2407.08608](https://arxiv.org/abs/2407.08608)
- PDF: https://arxiv.org/pdf/2407.08608
