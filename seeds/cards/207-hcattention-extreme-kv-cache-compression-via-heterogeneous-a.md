---
title: "HCAttention: Extreme KV Cache Compression via Heterogeneous Attention Computing for LLMs"
authors:
  - "Dongquan Yang"
  - "Yifan Yang"
  - "Xiaotian Yu"
  - "Xianbiao Qi"
  - "Rong Xiao"
year: 2025
venue: "arXiv:cs.CL"
arxiv: "2507.19823"
doi: null
source: "https://arxiv.org/abs/2507.19823"
topics:
  - rag
  - retrieval
  - kv-serving
  - inference-systems
  - transformer
  - foundations
seed_rank: 207
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 8
cites:
  - title: "CriticalKV: Optimizing KV Cache Eviction from an Output Perturbation Perspective"
    url: "https://arxiv.org/abs/2502.03805"
    year: 2025
    arxiv: "2502.03805"
    doi: null
    card: "083-criticalkv-optimizing-kv-cache-eviction-from-an-output-pertu"
  - title: "FlashAttention-3: Fast and Accurate Attention with Asynchrony and Low-precision"
    url: "https://arxiv.org/abs/2407.08608"
    year: 2024
    arxiv: "2407.08608"
    doi: null
    card: "089-flashattention-3-fast-and-accurate-attention-with-asynchrony"
  - title: "Efficient Memory Management for Large Language Model Serving with PagedAttention"
    url: "https://arxiv.org/abs/2309.06180"
    year: 2023
    arxiv: "2309.06180"
    doi: null
    card: "002-efficient-memory-management-for-large-language-model-serving"
---

# HCAttention: Extreme KV Cache Compression via Heterogeneous Attention Computing for LLMs

## One-sentence takeaway

Processing long-context inputs with large language models presents a significant challenge due to the enormous memory requirements of the Key-Value (KV) cache during inference.

## Why it matters here

informs agent serving, KV reuse, and long-horizon tool trajectories; retrieval+evidence trails matter for Broadside provenance-rich digests (HCAttention: Extreme KV Cache Compression via Heterogeneous Attention Computing for LLMs)

## Key ideas

- Processing long-context inputs with large language models presents a significant challenge due to the enormous memory requirements of the Key-Value (KV) cache during inference.
- Existing KV cache compression methods exhibit noticeable performance degradation when memory is reduced by more than 85%.
- Additionally, strategies that leverage GPU-CPU collaboration for approximate attention remain underexplored in this setting.
- We propose HCAttention, a heterogeneous attention computation framework that integrates key quantization, value offloading, and dynamic KV eviction to enable efficient inference under extreme memory constraints.
- The method is compatible with existing transformer architectures and does not require model fine-tuning.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2507.19823](https://arxiv.org/abs/2507.19823)
- URL: https://arxiv.org/abs/2507.19823
