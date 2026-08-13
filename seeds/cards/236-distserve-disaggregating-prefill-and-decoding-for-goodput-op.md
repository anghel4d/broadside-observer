---
title: "DistServe: Disaggregating Prefill and Decoding for Goodput-optimized Large Language Model Serving"
authors:
  - "Yinmin Zhong"
  - "Shengyu Liu"
  - "Junda Chen"
  - "Jianbo Hu"
  - "Yibo Zhu"
  - "Xuanzhe Liu"
  - "Xin Jin"
  - "Hao Zhang"
year: 2024
venue: "OSDI"
arxiv: "2401.09670"
doi: null
source: "https://arxiv.org/abs/2401.09670"
topics:
  - kv-serving
  - inference-systems
  - llm-serving
seed_rank: 236
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 8
cites:
  - title: "Efficient Memory Management for Large Language Model Serving with PagedAttention"
    url: "https://arxiv.org/abs/2309.06180"
    year: 2023
    arxiv: "2309.06180"
    doi: null
  - title: "CacheWeaver: Cache-Aware Evidence Ordering for Efficient Grounded RAG Inference"
    url: "https://arxiv.org/abs/2606.19667"
    year: 2026
    arxiv: "2606.19667"
    doi: null
  - title: "Ragged Paged Attention: A High-Performance and Flexible LLM Inference Kernel for TPU"
    url: "https://arxiv.org/abs/2604.15464"
    year: 2026
    arxiv: "2604.15464"
    doi: null
see:
  - "002-efficient-memory-management-for-large-language-model-serving"
  - "071-ragged-paged-attention-a-high-performance-and-flexible-llm-i"
---

# DistServe: Disaggregating Prefill and Decoding for Goodput-optimized Large Language Model Serving

## One-sentence takeaway

DistServe improves the performance of large language models (LLMs) serving by disaggregating the prefill and decoding computation.

## Why it matters here

informs agent serving, KV reuse, and long-horizon tool trajectories (DistServe: Disaggregating Prefill and Decoding for Goodput-optimized Large Language Model )

## Key ideas

- DistServe improves the performance of large language models (LLMs) serving by disaggregating the prefill and decoding computation.
- Existing LLM serving systems colocate the two phases and batch the computation of prefill and decoding across all users and requests.
- We find that this strategy not only leads to strong prefill-decoding interferences but also couples the resource allocation and parallelism plans for both phases.
- LLM applications often emphasize individual latency for each phase: time to first token (TTFT) for the prefill phase and time per output token (TPOT) of each request for the decoding phase.
- In the presence of stringent latency requirements, existing systems have to prioritize one latency over the other, or over-provision compute resources to meet both.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2401.09670](https://arxiv.org/abs/2401.09670)
- URL: https://arxiv.org/abs/2401.09670
