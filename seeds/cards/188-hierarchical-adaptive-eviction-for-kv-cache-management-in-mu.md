---
title: "Hierarchical Adaptive Eviction for KV Cache Management in Multimodal Language Models"
authors:
  - "Xindian Ma"
  - "Yidi Lu"
  - "Peng Zhang"
  - "Jing Zhang"
year: 2026
venue: "arXiv:cs.LG"
arxiv: "2602.02197"
doi: null
source: "https://arxiv.org/abs/2602.02197"
topics:
  - rag
  - retrieval
  - kv-serving
  - inference-systems
  - transformer
  - foundations
seed_rank: 188
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
  - title: "Efficient Memory Management for Large Language Model Serving with PagedAttention"
    url: "https://arxiv.org/abs/2309.06180"
    year: 2023
    arxiv: "2309.06180"
    doi: null
    card: "002-efficient-memory-management-for-large-language-model-serving"
  - title: "FlashAttention-3: Fast and Accurate Attention with Asynchrony and Low-precision"
    url: "https://arxiv.org/abs/2407.08608"
    year: 2024
    arxiv: "2407.08608"
    doi: null
    card: "089-flashattention-3-fast-and-accurate-attention-with-asynchrony"
---

# Hierarchical Adaptive Eviction for KV Cache Management in Multimodal Language Models

## One-sentence takeaway

The integration of visual information into Large Language Models (LLMs) has enabled Multimodal LLMs (MLLMs), but the quadratic memory and computational costs of Transformer architectures remain a bottleneck.

## Why it matters here

informs agent serving, KV reuse, and long-horizon tool trajectories; retrieval+evidence trails matter for Broadside provenance-rich digests (Hierarchical Adaptive Eviction for KV Cache Management in Multimodal Language Models)

## Key ideas

- The integration of visual information into Large Language Models (LLMs) has enabled Multimodal LLMs (MLLMs), but the quadratic memory and computational costs of Transformer architectures remain a bottleneck.
- Existing KV cache eviction strategies fail to address the heterogeneous attention distributions between visual and text tokens, leading to suboptimal efficiency or degraded performance.
- In this paper, we propose Hierarchical Adaptive Eviction (HAE), a KV cache eviction framework that optimizes text-visual token interaction in MLLMs by implementing Dual-Attention Pruning during pre-filling (leveraging visual token sparsity and attention variance) and a Dynamic Decoding Eviction Strategy (inspired by OS Recycle Bins) during decoding.
- HAE minimizes KV cache usage across layers, reduces co

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2602.02197](https://arxiv.org/abs/2602.02197)
- URL: https://arxiv.org/abs/2602.02197
