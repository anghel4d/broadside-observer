---
title: "Cost-Efficient Large Language Model Serving for Multi-turn Conversations with CachedAttention"
authors:
  - "Bin Gao"
  - "Zhuomin He"
  - "Puru Sharma"
  - "Qingxuan Kang"
  - "Djordje Jevdjic"
  - "Junbo Deng"
  - "Xingkun Yang"
  - "Zhou Yu"
  - "Pengfei Zuo"
year: 2024
venue: "arXiv:cs.CL"
arxiv: "2403.19708"
doi: null
source: "https://arxiv.org/abs/2403.19708"
topics:
  - rag
  - retrieval
  - kv-serving
  - inference-systems
seed_rank: 234
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
---

# Cost-Efficient Large Language Model Serving for Multi-turn Conversations with CachedAttention

## One-sentence takeaway

Interacting with humans through multi-turn conversations is a fundamental feature of large language models (LLMs).

## Why it matters here

informs agent serving, KV reuse, and long-horizon tool trajectories; retrieval+evidence trails matter for Broadside provenance-rich digests (Cost-Efficient Large Language Model Serving for Multi-turn Conversations with CachedAttent)

## Key ideas

- Interacting with humans through multi-turn conversations is a fundamental feature of large language models (LLMs).
- However, existing LLM serving engines executing multi-turn conversations are inefficient due to the need to repeatedly compute the key-value (KV) caches of historical tokens, incurring high serving costs.
- To address the problem, this paper proposes CachedAttention, a new attention mechanism that enables reuse of KV caches across multi-turn conversations, significantly reducing the repetitive computation overheads.
- CachedAttention maintains a hierarchical KV caching system that leverages cost-effective memory/storage mediums to save KV caches for all requests.
- To reduce KV cache access overheads from slow mediums, CachedAttention employs layer-wise pre-loading and asynchronous

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2403.19708](https://arxiv.org/abs/2403.19708)
- URL: https://arxiv.org/abs/2403.19708
