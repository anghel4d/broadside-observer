---
title: "CriticalKV: Optimizing KV Cache Eviction from an Output Perturbation Perspective"
authors:
  - "Yuan Feng"
  - "Junlin Lv"
  - "Haoyu Guo"
  - "Yukun Cao"
  - "S Kevin Zhou"
  - "Xike Xie"
year: 2025
venue: "ICML"
arxiv: "2502.03805"
doi: null
source: "https://arxiv.org/abs/2502.03805"
topics:
  - rag
  - retrieval
  - provenance
  - kv-serving
  - inference-systems
  - transformer
  - foundations
seed_rank: 83
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 9
cites:
  - title: "CompressKV: Semantic-Retrieval-Guided KV-Cache Compression for Resource-Efficient Long-Context LLM Inference"
    url: "https://arxiv.org/abs/2606.24467"
    year: 2026
    arxiv: "2606.24467"
    doi: null
    card: "058-compresskv-semantic-retrieval-guided-kv-cache-compression-fo"
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

# CriticalKV: Optimizing KV Cache Eviction from an Output Perturbation Perspective

## One-sentence takeaway

Large language models have revolutionized natural language processing but face significant challenges of high storage and runtime costs, due to the transformer architecture's reliance on self-attention, particularly the large KV cache for long-sequence inference.

## Why it matters here

informs agent serving, KV reuse, and long-horizon tool trajectories; retrieval+evidence trails matter for Broadside provenance-rich digests (CriticalKV: Optimizing KV Cache Eviction from an Output Perturbation Perspective)

## Key ideas

- Large language models have revolutionized natural language processing but face significant challenges of high storage and runtime costs, due to the transformer architecture's reliance on self-attention, particularly the large KV cache for long-sequence inference.
- Recent efforts to reduce KV cache size by pruning less critical entries based on attention weights remain empirical and lack formal grounding.
- This paper presents a formal study on identifying critical KV cache entries by analyzing attention output perturbation.
- Our analysis reveals that, beyond attention weights, the value states within KV entries and pretrained parameter matrices are also crucial.
- Based on this, we propose a perturbation-constrained selection algorithm that optimizes the worst-case output perturbation to identif

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2502.03805](https://arxiv.org/abs/2502.03805)
- URL: https://arxiv.org/abs/2502.03805
