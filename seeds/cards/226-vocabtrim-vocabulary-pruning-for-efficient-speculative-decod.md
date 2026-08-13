---
title: "VOCABTRIM: Vocabulary Pruning for Efficient Speculative Decoding in LLMs"
authors:
  - "Raghavv Goel"
  - "Sudhanshu Agrawal"
  - "Mukul Gagrani"
  - "Junyoung Park"
  - "Yifan Zao"
  - "He Zhang"
  - "Tian Liu"
  - "Yiping Yang"
  - "Xin Yuan"
  - "Jiuyan Lu"
  - "Chris Lott"
  - "Mingu Lee"
year: 2025
venue: "ICML"
arxiv: "2506.22694"
doi: null
source: "https://arxiv.org/abs/2506.22694"
topics:
  - rag
  - retrieval
  - kv-serving
  - inference-systems
seed_rank: 226
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

# VOCABTRIM: Vocabulary Pruning for Efficient Speculative Decoding in LLMs

## One-sentence takeaway

In this paper, we introduce a simple training-free technique to improve the performance of drafter-based speculative decoding (SpD) methods that incorporates language modeling head (LM head) during drafting process.

## Why it matters here

informs agent serving, KV reuse, and long-horizon tool trajectories; retrieval+evidence trails matter for Broadside provenance-rich digests (VOCABTRIM: Vocabulary Pruning for Efficient Speculative Decoding in LLMs)

## Key ideas

- In this paper, we introduce a simple training-free technique to improve the performance of drafter-based speculative decoding (SpD) methods that incorporates language modeling head (LM head) during drafting process.
- A drafter-based speculative decoding leverages one or more smaller language models, a.k.a.
- drafters or draft models, to sample a draft sequence or tree consisting of multiple tokens, followed by verification by a base LLM, a target model, accepting a subset as its valid generation.
- As it is usually considered that the speculative decoding requires one-to-one mapping between vocabularies of the target model and the draft model, it has been natural to share the vocabulary between them, or even share the LM head as in EAGLE or Medusa.
- We first identify that this draft token sampli

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2506.22694](https://arxiv.org/abs/2506.22694)
- URL: https://arxiv.org/abs/2506.22694
