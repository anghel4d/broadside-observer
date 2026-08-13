---
title: "CompressKV: Semantic-Retrieval-Guided KV-Cache Compression for Resource-Efficient Long-Context LLM Inference"
authors:
  - "Xiaolin Lin"
  - "Jingcun Wang"
  - "Olga Kondrateva"
  - "Yiyu Shi"
  - "Bing Li"
  - "Grace Li Zhang"
year: 2026
venue: "arXiv:cs.AI"
arxiv: "2606.24467"
doi: null
source: "https://arxiv.org/abs/2606.24467"
topics:
  - rag
  - retrieval
  - provenance
  - kv-serving
  - inference-systems
seed_rank: 58
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 9
cites:
  - title: "CacheWeaver: Cache-Aware Evidence Ordering for Efficient Grounded RAG Inference"
    url: "https://arxiv.org/abs/2606.19667"
    year: 2026
    arxiv: "2606.19667"
    doi: null
  - title: "A Survey of LLM $	imes$ DATA"
    url: "https://arxiv.org/abs/2505.18458"
    year: 2025
    arxiv: "2505.18458"
    doi: null
  - title: "CriticalKV: Optimizing KV Cache Eviction from an Output Perturbation Perspective"
    url: "https://arxiv.org/abs/2502.03805"
    year: 2025
    arxiv: "2502.03805"
    doi: null
---

# CompressKV: Semantic-Retrieval-Guided KV-Cache Compression for Resource-Efficient Long-Context LLM Inference

## One-sentence takeaway

Long-context large language model (LLM) inference is increasingly constrained by the memory footprint and decoding cost of key-value (KV) caches, limiting sustainable deployment on resource-constrained hardware.

## Why it matters here

informs agent serving, KV reuse, and long-horizon tool trajectories; retrieval+evidence trails matter for Broadside provenance-rich digests (CompressKV: Semantic-Retrieval-Guided KV-Cache Compression for Resource-Efficient Long-Con)

## Key ideas

- Long-context large language model (LLM) inference is increasingly constrained by the memory footprint and decoding cost of key-value (KV) caches, limiting sustainable deployment on resource-constrained hardware.
- Existing KV cache eviction methods typically apply heuristic token scoring over all heads in GQA-based LLMs.
- These methods ignore the different functionalities of attention heads, leading to the eviction of critical tokens and thus degrading the performance of LLMs.
- To address this issue, we propose CompressKV, a resource-efficient KV-cache compression framework for GQA-based LLMs.
- Instead of aggregating attention scores from all heads, CompressKV identifies Semantic Retrieval Heads (SRHs) that capture both the initial and final tokens of a prompt and semantically important mid-con

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2606.24467](https://arxiv.org/abs/2606.24467)
- URL: https://arxiv.org/abs/2606.24467
