---
title: "Entropy-Aware Speculative Decoding Toward Improved LLM Reasoning"
authors:
  - "Tiancheng Su"
  - "Meicong Zhang"
  - "Guoxiu He"
year: 2025
venue: "arXiv:cs.CL"
arxiv: "2512.23765"
doi: null
source: "https://arxiv.org/abs/2512.23765"
topics:
  - kv-serving
  - inference-systems
seed_rank: 206
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

# Entropy-Aware Speculative Decoding Toward Improved LLM Reasoning

## One-sentence takeaway

Speculative decoding (SD) accelerates large language model (LLM) reasoning by using a small draft model to generate candidate tokens, which the target LLM either accepts directly or regenerates upon rejection.

## Why it matters here

informs agent serving, KV reuse, and long-horizon tool trajectories (Entropy-Aware Speculative Decoding Toward Improved LLM Reasoning)

## Key ideas

- Speculative decoding (SD) accelerates large language model (LLM) reasoning by using a small draft model to generate candidate tokens, which the target LLM either accepts directly or regenerates upon rejection.
- However, excessive alignment between the draft and target models constrains SD to the performance of the target LLM.
- To address this limitation, we propose Entropy-Aware Speculative Decoding (EASD), a training-free enhancement.
- Building on standard SD, EASD incorporates a dynamic entropy-based penalty.
- At each decoding step, we employ the entropy of the sampling distribution to quantify model uncertainty.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2512.23765](https://arxiv.org/abs/2512.23765)
- URL: https://arxiv.org/abs/2512.23765
