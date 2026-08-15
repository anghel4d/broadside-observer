---
title: "CacheBlend: Fast Large Language Model Serving for RAG with Cached Knowledge Fusion"
authors:
  - "Jiayi Yao"
  - "Hanchen Li"
  - "Yuhan Liu"
  - "Siddhant Ray"
  - "Yihua Cheng"
  - "Qizheng Zhang"
  - "Kuntai Du"
  - "Shan Lu"
  - "Junchen Jiang"
year: 2024
venue: "arXiv:cs.LG"
arxiv: "2405.16444"
doi: null
source: "https://arxiv.org/abs/2405.16444"
topics:
  - rag
  - retrieval
  - kv-serving
  - inference-systems
seed_rank: 185
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

# CacheBlend: Fast Large Language Model Serving for RAG with Cached Knowledge Fusion

## One-sentence takeaway

CacheBlend reuses precomputed KV caches of retrieved chunks even when they are not a prefix, then selectively recomputes a small token subset so cross-attention is approximately restored.

## Why it matters here

Broadside RAG never has the luxury of a single static prefix: citations arrive as unordered chunks. Fusing their KV caches, and pipelining the recompute with cache fetch, is the serving trick that keeps TTFT honest.

## Key ideas

- Prefix-only KV reuse fails for RAG because retrieved texts are not the prompt prefix and their cached keys ignore cross-attention with preceding tokens.
- CacheBlend reuses each chunk's KV anyway and recomputes KV for a small selected subset of tokens to patch the cross-attention error.
- That recompute is pipelined with fetching caches from slower storage, so large KV can live off-GPU without adding delay.
- On three open models and four task datasets the authors report 2.2–3.3× lower TTFT and 2.8–5× higher throughput versus full prefill, without measured quality loss.
- Implementation lives in the LMCache project.

## Caveats

## Links

- arXiv: [2405.16444](https://arxiv.org/abs/2405.16444)
- Code: https://github.com/LMCache/LMCache
