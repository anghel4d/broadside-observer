---
title: "Taming Throughput-Latency Tradeoff in LLM Inference with Sarathi-Serve"
authors:
  - "Amey Agrawal"
  - "Nitin Kedia"
  - "Ashish Panwar"
  - "Jayashree Mohan"
  - "Nipun Kwatra"
  - "Bhargav S. Gulavani"
  - "Alexey Tumanov"
  - "Ramachandran Ramjee"
year: 2024
venue: "arXiv:cs.LG"
arxiv: "2403.02310"
doi: null
source: "https://arxiv.org/abs/2403.02310"
topics:
  - kv-serving
  - inference-systems
  - llm-serving
seed_rank: 78
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 9
cites:
  - title: "SARATHI: Efficient LLM Inference by Piggybacking Decodes with Chunked Prefills"
    url: "https://arxiv.org/abs/2308.16369"
    year: 2023
    arxiv: "2308.16369"
    doi: null
  - title: "Efficient Memory Management for Large Language Model Serving with PagedAttention"
    url: "https://arxiv.org/abs/2309.06180"
    year: 2023
    arxiv: "2309.06180"
    doi: null
see:
  - "082-sarathi-efficient-llm-inference-by-piggybacking-decodes-with"
  - "002-efficient-memory-management-for-large-language-model-serving"
---

# Taming Throughput-Latency Tradeoff in LLM Inference with Sarathi-Serve

## One-sentence takeaway

Sarathi-Serve schedules stall-free batches by splitting prefills into near-equal chunks so new requests join without pausing in-flight decodes.

## Why it matters here

Interactive ano agents need decode tokens to keep flowing while a new long prompt arrives; stall-free chunked prefills are the scheduler that makes that possible.

## Key ideas

- Prefill is compute-heavy and high-latency; decode is cheap per token but under-utilizes the GPU unless batched.
- Interleaving whole prefills with decodes creates pipeline bubbles and a brutal throughput–latency tradeoff.
- Chunked prefills plus stall-free admission keep batches uniform, so pipeline-parallel stages stay balanced.
- Versus vLLM: 2.6× serving capacity for Mistral-7B on one A100, up to 3.7× for Yi-34B on two A100s, and up to 5.6× end-to-end on pipeline-parallel Falcon-180B.
- Source: https://github.com/microsoft/sarathi-serve.

## Caveats

## Links

- arXiv: [2403.02310](https://arxiv.org/abs/2403.02310)
- PDF: https://arxiv.org/pdf/2403.02310
- Code: https://github.com/microsoft/sarathi-serve
