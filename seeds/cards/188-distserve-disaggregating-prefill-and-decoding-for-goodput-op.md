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
seed_rank: 188
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
  - "062-ragged-paged-attention-a-high-performance-and-flexible-llm-i"
---

# DistServe: Disaggregating Prefill and Decoding for Goodput-optimized Large Language Model Serving

## One-sentence takeaway

DistServe puts prefill and decode on different GPUs so TTFT and TPOT can be provisioned independently, then places the two phases to minimize the KV-transfer tax.

## Why it matters here

Agent serving is prefill-heavy (long prompts, tools) and decode-latency-sensitive (interactive observers). Colocating the phases couples those SLOs; disaggregation is the goodput move.

## Key ideas

- Colocated prefill+decode batches interfere: a new prefill stalls in-flight decodes, and the two phases want different parallelism.
- Applications care about TTFT (prefill) and TPOT (decode) separately; one colocated plan cannot hit both without overprovisioning.
- DistServe assigns the phases to different GPUs and co-optimizes resource and parallelism plans per phase against those two SLOs.
- Placement respects cluster bandwidth so the disaggregated KV handoff stays cheap.
- Evaluations report 7.4× more requests or 12.6× tighter SLOs than prior systems while keeping >90% of requests inside latency limits.

## Caveats

## Links

- arXiv: [2401.09670](https://arxiv.org/abs/2401.09670)
