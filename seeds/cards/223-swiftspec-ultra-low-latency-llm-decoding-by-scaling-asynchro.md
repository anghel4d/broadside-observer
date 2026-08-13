---
title: "SwiftSpec: Ultra-Low Latency LLM Decoding by Scaling Asynchronous Speculative Decoding"
authors:
  - "Ziyi Zhang"
  - "Ziheng Jiang"
  - "Chengquan Jiang"
  - "Menghan Yu"
  - "Size Zheng"
  - "Haibin Lin"
  - "Henry Hoffmann"
  - "Xin Liu"
year: 2025
venue: "arXiv:cs.DC"
arxiv: "2506.11309"
doi: null
source: "https://arxiv.org/abs/2506.11309"
topics:
  - rag
  - retrieval
  - kv-serving
  - inference-systems
seed_rank: 223
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

# SwiftSpec: Ultra-Low Latency LLM Decoding by Scaling Asynchronous Speculative Decoding

## One-sentence takeaway

Low-latency decoding for large language models (LLMs) is crucial for applications like chatbots and code assistants, yet generating long outputs remains slow in single-query settings.

## Why it matters here

informs agent serving, KV reuse, and long-horizon tool trajectories; retrieval+evidence trails matter for Broadside provenance-rich digests (SwiftSpec: Ultra-Low Latency LLM Decoding by Scaling Asynchronous Speculative Decoding)

## Key ideas

- Low-latency decoding for large language models (LLMs) is crucial for applications like chatbots and code assistants, yet generating long outputs remains slow in single-query settings.
- Prior work on speculative decoding (which combines a small draft model with a larger target model) and tensor parallelism has each accelerated decoding.
- However, conventional approaches fail to apply both simultaneously due to imbalanced compute requirements (between draft and target models), KV-cache inconsistencies, and communication overheads under small-batch tensor-parallelism.
- This paper introduces SwiftSpec, a system that targets ultra-low latency for LLM decoding.
- SwiftSpec redesigns the speculative decoding pipeline in an asynchronous and disaggregated manner, so that each component can be scaled fle

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2506.11309](https://arxiv.org/abs/2506.11309)
- URL: https://arxiv.org/abs/2506.11309
