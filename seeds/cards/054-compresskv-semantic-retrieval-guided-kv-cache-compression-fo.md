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
seed_rank: 54
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
  - title: "FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness"
    url: "https://arxiv.org/abs/2205.14135"
    year: 2022
    arxiv: "2205.14135"
    doi: null
  - title: "CriticalKV: Optimizing KV Cache Eviction from an Output Perturbation Perspective"
    url: "https://arxiv.org/abs/2502.03805"
    year: 2025
    arxiv: "2502.03805"
    doi: null
see:
  - "002-efficient-memory-management-for-large-language-model-serving"
  - "089-flashattention-fast-and-memory-efficient-exact-attention-wit"
---

# CompressKV: Semantic-Retrieval-Guided KV-Cache Compression for Resource-Efficient Long-Context LLM Inference

## One-sentence takeaway

CompressKV evicts KV pairs using Semantic Retrieval Heads rather than aggregated GQA attention scores, and allocates per-layer cache budgets from offline eviction-error estimates.

## Why it matters here

Long-horizon Broadside/ano agents keep growing KV; CompressKV is a serving-side way to keep mid-context evidence without paying full-cache HBM on every decode.

## Key ideas

- Heuristic token scoring over all GQA heads ignores head specialization and drops critical mid-context tokens.
- Semantic Retrieval Heads capture prompt-boundary tokens plus semantically important mid-context evidence and decide which KV pairs to keep.
- Layer budgets come from offline estimates of layer-wise eviction error rather than a uniform cache fraction.
- On LongBench QA, CompressKV keeps over 97% of full-cache performance with 3% of the KV cache; Needle-in-a-Haystack hits 90% accuracy at 0.7% KV storage.
- Code is at https://github.com/TUDa-HWAI/CompressKV.

## Caveats

## Links

- arXiv: [2606.24467](https://arxiv.org/abs/2606.24467)
- PDF: https://arxiv.org/pdf/2606.24467
- Code: https://github.com/TUDa-HWAI/CompressKV
