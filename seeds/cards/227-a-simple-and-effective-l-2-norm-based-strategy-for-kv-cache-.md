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
