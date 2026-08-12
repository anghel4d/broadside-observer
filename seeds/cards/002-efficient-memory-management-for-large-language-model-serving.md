---
title: "Efficient Memory Management for Large Language Model Serving with PagedAttention"
authors:
  - "Woosuk Kwon"
  - "Zhuohan Li"
  - "Siyuan Zhuang"
  - "Ying Sheng"
  - "Lianmin Zheng"
  - "Cody Hao Yu"
  - "Joseph E. Gonzalez"
  - "Hao Zhang"
  - "Ion Stoica"
year: 2023
venue: "SOSP"
arxiv: "2309.06180"
doi: null
source: "https://arxiv.org/abs/2309.06180"
topics:
  - rag
  - retrieval
  - kv-serving
  - inference-systems
  - transformer
  - foundations
  - llm-serving
seed_rank: 2
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 10
---

# Efficient Memory Management for Large Language Model Serving with PagedAttention

## One-sentence takeaway

High throughput serving of large language models (LLMs) requires batching sufficiently many requests at a time.

## Why it matters here

informs agent serving, KV reuse, and long-horizon tool trajectories; retrieval+evidence trails matter for Broadside provenance-rich digests (Efficient Memory Management for Large Language Model Serving with PagedAttention)

## Key ideas

- High throughput serving of large language models (LLMs) requires batching sufficiently many requests at a time.
- However, existing systems struggle because the key-value cache (KV cache) memory for each request is huge and grows and shrinks dynamically.
- When managed inefficiently, this memory can be significantly wasted by fragmentation and redundant duplication, limiting the batch size.
- To address this problem, we propose PagedAttention, an attention algorithm inspired by the classical virtual memory and paging techniques in operating systems.
- On top of it, we build vLLM, an LLM serving system that achieves (1) near-zero waste in KV cache memory and (2) flexible sharing of KV cache within and across requests to further reduce memory usage.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2309.06180](https://arxiv.org/abs/2309.06180)
- URL: https://arxiv.org/abs/2309.06180
