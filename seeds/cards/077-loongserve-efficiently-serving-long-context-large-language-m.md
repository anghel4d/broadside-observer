---
title: "LoongServe: Efficiently Serving Long-Context Large Language Models with Elastic Sequence Parallelism"
authors:
  - "Bingyang Wu"
  - "Shengyu Liu"
  - "Yinmin Zhong"
  - "Peng Sun"
  - "Xuanzhe Liu"
  - "Xin Jin"
year: 2024
venue: "arXiv:cs.DC"
arxiv: "2404.09526"
doi: null
source: "https://arxiv.org/abs/2404.09526"
topics:
  - rag
  - retrieval
  - kv-serving
  - inference-systems
  - llm-serving
seed_rank: 77
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
  - title: "SARATHI: Efficient LLM Inference by Piggybacking Decodes with Chunked Prefills"
    url: "https://arxiv.org/abs/2308.16369"
    year: 2023
    arxiv: "2308.16369"
    doi: null
see:
  - "002-efficient-memory-management-for-large-language-model-serving"
  - "082-sarathi-efficient-llm-inference-by-piggybacking-decodes-with"
---

# LoongServe: Efficiently Serving Long-Context Large Language Models with Elastic Sequence Parallelism

## One-sentence takeaway

Elastic sequence parallelism lets LoongServe change the degree of sequence parallelism in real time so long-context prefill and decode no longer share a static layout.

## Why it matters here

Ano long-context agents and Broadside RAG prefills have huge per-request and per-phase resource variance; ESP is the serving analog of not pinning one parallelism forever.

## Key ideas

- Static parallelism cannot efficiently serve variable-length requests whose prefill and decode phases need different amounts of compute and memory.
- ESP elastically adjusts parallelism live, reduces KV-cache migration, overlaps partial decode communication with compute, and cuts KV fragmentation across instances.
- Against chunked prefill, peak throughput rises up to 3.85×; against prefill–decode disaggregation, up to 5.81× on diverse real-world traces.
- Communication efficiency comes from cheaper KV migration plus compute/comms overlap on partial decodes.
- GPU memory efficiency comes from less cross-instance KV fragmentation.

## Caveats

## Links

- arXiv: [2404.09526](https://arxiv.org/abs/2404.09526)
- PDF: https://arxiv.org/pdf/2404.09526
