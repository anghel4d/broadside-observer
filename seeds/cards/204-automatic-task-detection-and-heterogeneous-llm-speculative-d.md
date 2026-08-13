---
title: "Automatic Task Detection and Heterogeneous LLM Speculative Decoding"
authors:
  - "Danying Ge"
  - "Jianhua Gao"
  - "Qizhi Jiang"
  - "Yifei Feng"
  - "Weixing Ji"
year: 2025
venue: "arXiv:cs.CL"
arxiv: "2505.08600"
doi: null
source: "https://arxiv.org/abs/2505.08600"
topics:
  - kv-serving
  - inference-systems
seed_rank: 204
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 8
cites:
  - title: "CacheWeaver: Cache-Aware Evidence Ordering for Efficient Grounded RAG Inference"
    url: "https://arxiv.org/abs/2606.19667"
    year: 2026
    arxiv: "2606.19667"
    doi: null
    card: "055-cacheweaver-cache-aware-evidence-ordering-for-efficient-grou"
  - title: "CompressKV: Semantic-Retrieval-Guided KV-Cache Compression for Resource-Efficient Long-Context LLM Inference"
    url: "https://arxiv.org/abs/2606.24467"
    year: 2026
    arxiv: "2606.24467"
    doi: null
    card: "058-compresskv-semantic-retrieval-guided-kv-cache-compression-fo"
  - title: "Efficient Memory Management for Large Language Model Serving with PagedAttention"
    url: "https://arxiv.org/abs/2309.06180"
    year: 2023
    arxiv: "2309.06180"
    doi: null
    card: "002-efficient-memory-management-for-large-language-model-serving"
---

# Automatic Task Detection and Heterogeneous LLM Speculative Decoding

## One-sentence takeaway

Speculative decoding, which combines a draft model with a target model, has emerged as an effective approach to accelerate large language model (LLM) inference.

## Why it matters here

informs agent serving, KV reuse, and long-horizon tool trajectories (Automatic Task Detection and Heterogeneous LLM Speculative Decoding)

## Key ideas

- Speculative decoding, which combines a draft model with a target model, has emerged as an effective approach to accelerate large language model (LLM) inference.
- However, existing methods often face a trade-off between the acceptance rate and decoding speed in downstream tasks due to the limited capacity of the draft model, making it difficult to ensure efficiency across diverse tasks.
- To address this problem, we propose a speculative decoding algorithm tailored for downstream task optimization.
- It includes an automatic task partitioning and assigning method, which automatically categorizes downstream tasks into different sub-tasks and assigns them to a set of heterogeneous draft models.
- Each draft model is aligned with the target model using task-specific data, thereby enhancing the consis

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2505.08600](https://arxiv.org/abs/2505.08600)
- URL: https://arxiv.org/abs/2505.08600
