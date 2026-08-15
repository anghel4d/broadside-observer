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
venue: "USENIX ATC"
arxiv: "2403.19708"
doi: null
source: "https://arxiv.org/abs/2403.19708"
topics:
  - rag
  - retrieval
  - kv-serving
  - inference-systems
seed_rank: 187
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
  - title: "CacheWeaver: Cache-Aware Evidence Ordering for Efficient Grounded RAG Inference"
    url: "https://arxiv.org/abs/2606.19667"
    year: 2026
    arxiv: "2606.19667"
    doi: null
  - title: "CompressKV: Semantic-Retrieval-Guided KV-Cache Compression for Resource-Efficient Long-Context LLM Inference"
    url: "https://arxiv.org/abs/2606.24467"
    year: 2026
    arxiv: "2606.24467"
    doi: null
see:
  - "002-efficient-memory-management-for-large-language-model-serving"
  - "054-compresskv-semantic-retrieval-guided-kv-cache-compression-fo"
---

# Cost-Efficient Large Language Model Serving for Multi-turn Conversations with CachedAttention

## One-sentence takeaway

CachedAttention keeps per-conversation KV in a hierarchical cache across turns, overlaps fetch/save with compute, and decouples positional encoding so truncated histories do not invalidate saved caches.

## Why it matters here

Observer chats and multi-turn GRID COMMAND sessions re-prefill the same history every turn if the engine is stateless. Hierarchical KV plus scheduler-aware placement is how that cost comes down without dropping the conversation.

## Key ideas

- Multi-turn serving recomputes KV for historical tokens on every turn unless those tensors are stored and reused.
- A hierarchical KV system parks caches on cheaper memory and storage tiers, not only in GPU HBM.
- Layer-wise pre-load and asynchronous save overlap slow I/O with GPU compute.
- Scheduler-aware fetch/eviction places soon-needed KV in the fastest tier using job-scheduler hints.
- Positional encoding is decoupled and caches are truncated so a sliding context window does not invalidate saved KV; reported gains include up to 87% lower TTFT, 7.8× prefill throughput, and 70% lower end-to-end cost.

## Caveats

## Links

- arXiv: [2403.19708](https://arxiv.org/abs/2403.19708)
