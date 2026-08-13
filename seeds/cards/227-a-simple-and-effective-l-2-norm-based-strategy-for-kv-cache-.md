---
title: "A Simple and Effective $L_2$ Norm-Based Strategy for KV Cache Compression"
authors:
  - "Alessio Devoto"
  - "Yu Zhao"
  - "Simone Scardapane"
  - "Pasquale Minervini"
year: 2024
venue: "NeurIPS"
arxiv: "2406.11430"
doi: null
source: "https://arxiv.org/abs/2406.11430"
topics:
  - rag
  - retrieval
  - kv-serving
  - inference-systems
  - transformer
  - foundations
seed_rank: 227
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 8
cites:
  - title: "Efficient Memory Management for Large Language Model Serving with PagedAttention"
    url: "https://arxiv.org/abs/2309.06180"
    year: 2023
    arxiv: "2309.06180"
    doi: null
    card: "002-efficient-memory-management-for-large-language-model-serving"
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
---

# A Simple and Effective $L_2$ Norm-Based Strategy for KV Cache Compression

## One-sentence takeaway

The deployment of large language models (LLMs) is often hindered by the extensive memory requirements of the Key-Value (KV) cache, especially as context lengths increase.

## Why it matters here

informs agent serving, KV reuse, and long-horizon tool trajectories; retrieval+evidence trails matter for Broadside provenance-rich digests (A Simple and Effective $L_2$ Norm-Based Strategy for KV Cache Compression)

## Key ideas

- The deployment of large language models (LLMs) is often hindered by the extensive memory requirements of the Key-Value (KV) cache, especially as context lengths increase.
- Existing approaches to reduce the KV cache size involve either fine-tuning the model to learn a compression strategy or leveraging attention scores to reduce the sequence length.
- We analyse the attention distributions in decoder-only Transformers-based models and observe that attention allocation patterns stay consistent across most layers.
- Surprisingly, we find a clear correlation between the $L_2$ and the attention scores over cached KV pairs, where a low $L_2$ of a key embedding usually leads to a high attention score during decoding.
- This finding indicates that the influence of a KV pair is potentially determined by t

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2406.11430](https://arxiv.org/abs/2406.11430)
- URL: https://arxiv.org/abs/2406.11430
