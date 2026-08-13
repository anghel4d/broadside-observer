---
title: "LoongServe: Efficiently Serving Long-Context Large Language Models with Elastic Sequence Parallelism"
authors:
  - "Bingyang Wu"
  - "Shengyu Liu"
  - "Yinmin Zhong"
  - "Peng Sun"
  - "Xuanzhe Liu"
  - "Xin Jin"
year: 2024
venue: "arXiv:cs.DC"
arxiv: "2404.09526"
doi: null
source: "https://arxiv.org/abs/2404.09526"
topics:
  - rag
  - retrieval
  - kv-serving
  - inference-systems
  - llm-serving
seed_rank: 93
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 9
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
  - title: "Ragged Paged Attention: A High-Performance and Flexible LLM Inference Kernel for TPU"
    url: "https://arxiv.org/abs/2604.15464"
    year: 2026
    arxiv: "2604.15464"
    doi: null
    card: "071-ragged-paged-attention-a-high-performance-and-flexible-llm-i"
---

# LoongServe: Efficiently Serving Long-Context Large Language Models with Elastic Sequence Parallelism

## One-sentence takeaway

The context window of large language models (LLMs) is rapidly increasing, leading to a huge variance in resource usage between different requests as well as between different phases of the same request.

## Why it matters here

informs agent serving, KV reuse, and long-horizon tool trajectories; retrieval+evidence trails matter for Broadside provenance-rich digests (LoongServe: Efficiently Serving Long-Context Large Language Models with Elastic Sequence P)

## Key ideas

- The context window of large language models (LLMs) is rapidly increasing, leading to a huge variance in resource usage between different requests as well as between different phases of the same request.
- Restricted by static parallelism strategies, existing LLM serving systems cannot efficiently utilize the underlying resources to serve variable-length requests in different phases.
- To address this problem, we propose a new parallelism paradigm, elastic sequence parallelism (ESP), to elastically adapt to the variance between different requests and phases.
- Based on ESP, we design and build LoongServe, an LLM serving system that (1) improves computation efficiency by elastically adjusting the degree of parallelism in real-time, (2) improves communication efficiency by reducing key-value cache

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2404.09526](https://arxiv.org/abs/2404.09526)
- URL: https://arxiv.org/abs/2404.09526
