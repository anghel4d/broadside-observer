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
seed_rank: 232
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 8
---

# CacheBlend: Fast Large Language Model Serving for RAG with Cached Knowledge Fusion

## One-sentence takeaway

Large language models (LLMs) often incorporate multiple text chunks in their inputs to provide the necessary contexts.

## Why it matters here

informs agent serving, KV reuse, and long-horizon tool trajectories; retrieval+evidence trails matter for Broadside provenance-rich digests (CacheBlend: Fast Large Language Model Serving for RAG with Cached Knowledge Fusion)

## Key ideas

- Large language models (LLMs) often incorporate multiple text chunks in their inputs to provide the necessary contexts.
- To speed up the prefill of the long LLM inputs, one can pre-compute the KV cache of a text and re-use the KV cache when the context is reused as the prefix of another LLM input.
- However, the reused text chunks are not always the input prefix, which makes precomputed KV caches not directly usable since they ignore the text's cross-attention with the preceding texts.
- Thus, the benefits of reusing KV caches remain largely unrealized.
- This paper tackles just one challenge: when an LLM input contains multiple text chunks, how to quickly combine their precomputed KV caches in order to achieve the same generation quality as the expensive full prefill (i.e., without reusing KV cac

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2405.16444](https://arxiv.org/abs/2405.16444)
- URL: https://arxiv.org/abs/2405.16444
