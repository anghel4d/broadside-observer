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
