---
title: "A Practical Investigation of Training-free Relaxed Speculative Decoding"
authors:
  - "Guoxuan Xia"
  - "Luka Ribar"
  - "Paul Balanca"
year: 2026
venue: "arXiv:cs.LG"
arxiv: "2607.08690"
doi: null
source: "https://arxiv.org/abs/2607.08690"
topics:
  - kv-serving
  - inference-systems
seed_rank: 183
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

# A Practical Investigation of Training-free Relaxed Speculative Decoding

## One-sentence takeaway

Speculative decoding accelerates sampling from an autoregressive LLM by using a faster auxiliary model to draft tokens which are then verified in parallel by the LLM.

## Why it matters here

informs agent serving, KV reuse, and long-horizon tool trajectories (A Practical Investigation of Training-free Relaxed Speculative Decoding)

## Key ideas

- Speculative decoding accelerates sampling from an autoregressive LLM by using a faster auxiliary model to draft tokens which are then verified in parallel by the LLM.
- Standard speculative decoding is lossless: its rejection and resampling steps exactly preserve the LLM's sampling distribution.
- Recent work argues that relaxing this strict guarantee can yield further speed-ups, controlled capability-speed trade-offs, or even capability gains.
- We practically investigate training-free relaxed speculative decoding techniques, unify existing approaches within a shared framework, benchmark them on contemporary settings, and distil takeaways and empirical findings for practitioners.
- Important takeaways include: relaxation can require considerable capability evaluation unlike lossless speculative d

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2607.08690](https://arxiv.org/abs/2607.08690)
- URL: https://arxiv.org/abs/2607.08690
