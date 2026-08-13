---
title: "CacheWeaver: Cache-Aware Evidence Ordering for Efficient Grounded RAG Inference"
authors:
  - "Kaizhen Tan"
  - "Rong Gu"
  - "Mingyuan Li"
year: 2026
venue: "arXiv:cs.CL"
arxiv: "2606.19667"
doi: null
source: "https://arxiv.org/abs/2606.19667"
topics:
  - rag
  - retrieval
  - provenance
  - kv-serving
  - inference-systems
  - llm-serving
seed_rank: 55
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 9
cites:
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
  - title: "SARATHI: Efficient LLM Inference by Piggybacking Decodes with Chunked Prefills"
    url: "https://arxiv.org/abs/2308.16369"
    year: 2023
    arxiv: "2308.16369"
    doi: null
    card: "098-sarathi-efficient-llm-inference-by-piggybacking-decodes-with"
---

# CacheWeaver: Cache-Aware Evidence Ordering for Efficient Grounded RAG Inference

## One-sentence takeaway

Retrieval-Augmented Generation (RAG) improves factual grounding, but it also lengthens prompts and raises prefill cost.

## Why it matters here

informs agent serving, KV reuse, and long-horizon tool trajectories; retrieval+evidence trails matter for Broadside provenance-rich digests (CacheWeaver: Cache-Aware Evidence Ordering for Efficient Grounded RAG Inference)

## Key ideas

- Retrieval-Augmented Generation (RAG) improves factual grounding, but it also lengthens prompts and raises prefill cost.
- Prefix caching in serving engines such as vLLM reduces this cost only when requests share the same token prefix.
- In grounded generation, however, adjacent queries may retrieve overlapping evidence in different orders, so set overlap does not become reusable prefix overlap.
- We present CacheWeaver, a lightweight prompt-layer method for cache-aware evidence ordering.
- The method keeps a prefix tree over recently served evidence sequences and uses a greedy walk to place the most reusable prefix first, while leaving the serving engine and retrieved evidence set unchanged.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2606.19667](https://arxiv.org/abs/2606.19667)
- URL: https://arxiv.org/abs/2606.19667
