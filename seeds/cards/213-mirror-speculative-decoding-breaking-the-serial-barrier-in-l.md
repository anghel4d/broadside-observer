---
title: "Mirror Speculative Decoding: Breaking the Serial Barrier in LLM Inference"
authors:
  - "Nikhil Bhendawade"
  - "Kumari Nishu"
  - "Arnav Kundu"
  - "Chris Bartels"
  - "Minsik Cho"
  - "Irina Belousova"
year: 2025
venue: "arXiv:cs.CL"
arxiv: "2510.13161"
doi: null
source: "https://arxiv.org/abs/2510.13161"
topics:
  - rag
  - retrieval
  - kv-serving
  - inference-systems
seed_rank: 213
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

# Mirror Speculative Decoding: Breaking the Serial Barrier in LLM Inference

## One-sentence takeaway

Speculative decoding accelerates LLM inference by using a draft model to look ahead, but gains are capped by the cost of autoregressive draft generation: increasing draft size elevates acceptance rates but introduces additional latency overhead exacerbating the speed-accuracy tradeoff.

## Why it matters here

informs agent serving, KV reuse, and long-horizon tool trajectories; retrieval+evidence trails matter for Broadside provenance-rich digests (Mirror Speculative Decoding: Breaking the Serial Barrier in LLM Inference)

## Key ideas

- Speculative decoding accelerates LLM inference by using a draft model to look ahead, but gains are capped by the cost of autoregressive draft generation: increasing draft size elevates acceptance rates but introduces additional latency overhead exacerbating the speed-accuracy tradeoff.
- Prior methods (Medusa, Hydra, EAGLE) partially reduce draft cost but either degrade acceptance or introduce overheads that limit scaling.
- We present Mirror Speculative Decoding (Mirror-SD), an inference algorithm that breaks the latency-acceptance tradeoff.
- Mirror-SD launches branch-complete rollouts from early-exit signals in parallel with the target model's suffix and explicitly maps computation across heterogeneous accelerators (GPU and NPU) to exploit cross-device parallelism.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2510.13161](https://arxiv.org/abs/2510.13161)
- URL: https://arxiv.org/abs/2510.13161
