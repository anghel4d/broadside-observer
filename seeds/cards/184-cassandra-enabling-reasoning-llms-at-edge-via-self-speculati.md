---
title: "Cassandra: Enabling Reasoning LLMs at Edge via Self-Speculative Decoding"
authors:
  - "Soongyu Choi"
  - "Yuntae Kim"
  - "Muyoung Son"
  - "Joo-Young Kim"
year: 2026
venue: "arXiv:cs.AR"
arxiv: "2605.26558"
doi: null
source: "https://arxiv.org/abs/2605.26558"
topics:
  - kv-serving
  - inference-systems
seed_rank: 184
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

# Cassandra: Enabling Reasoning LLMs at Edge via Self-Speculative Decoding

## One-sentence takeaway

Speculative decoding has emerged as a promising lossless approach for accelerating Large Language Models (LLMs).

## Why it matters here

informs agent serving, KV reuse, and long-horizon tool trajectories (Cassandra: Enabling Reasoning LLMs at Edge via Self-Speculative Decoding)

## Key ideas

- Speculative decoding has emerged as a promising lossless approach for accelerating Large Language Models (LLMs).
- As reasoning LLMs increasingly suffer from decode-stage overhead and approximation-based methods degrade accuracy, lossless speculative decoding has become essential for efficient inference.
- However, existing methods still struggle to deliver strong low-batch performance without additional training, limiting practical deployment on consumer devices.
- To address this challenge, we propose Cassandra, an algorithm-hardware co-designed self-speculative decoding framework optimized for low-batch scenarios.
- Cassandra constructs a high-performance, training-free draft model through fine-grained data selection.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2605.26558](https://arxiv.org/abs/2605.26558)
- URL: https://arxiv.org/abs/2605.26558
