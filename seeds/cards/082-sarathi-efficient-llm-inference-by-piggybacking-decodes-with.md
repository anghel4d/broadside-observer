---
title: "SARATHI: Efficient LLM Inference by Piggybacking Decodes with Chunked Prefills"
authors:
  - "Amey Agrawal"
  - "Ashish Panwar"
  - "Jayashree Mohan"
  - "Nipun Kwatra"
  - "Bhargav S. Gulavani"
  - "Ramachandran Ramjee"
year: 2023
venue: "arXiv:cs.LG"
arxiv: "2308.16369"
doi: null
source: "https://arxiv.org/abs/2308.16369"
topics:
  - rag
  - retrieval
  - kv-serving
  - inference-systems
  - llm-serving
seed_rank: 82
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
  - title: "Taming Throughput-Latency Tradeoff in LLM Inference with Sarathi-Serve"
    url: "https://arxiv.org/abs/2403.02310"
    year: 2024
    arxiv: "2403.02310"
    doi: null
see:
  - "002-efficient-memory-management-for-large-language-model-serving"
  - "078-taming-throughput-latency-tradeoff-in-llm-inference-with-sar"
---

# SARATHI: Efficient LLM Inference by Piggybacking Decodes with Chunked Prefills

## One-sentence takeaway

SARATHI builds decode-maximal batches from one prefill chunk plus as many decodes as will fit, so decode tokens piggyback on compute already spent saturating the GPU.

## Why it matters here

This is the kernel-level idea behind Sarathi-Serve and every later chunked-prefill scheduler ano serving would inherit.

## Key ideas

- Prefill saturates compute even at small batch; decode emits one token per request and leaves the GPU idle unless mixed into a larger batch.
- Uneven prefill vs decode times also create pipeline-parallel bubbles across micro-batches.
- Chunked prefills split a prompt into equal pieces so many decode-maximal batches can be built from one request.
- On LLaMA-13B/A6000, decode throughput rises up to 10× and end-to-end up to 1.33×; LLaMA-33B/A100 sees 4.25× decode and 1.25× end-to-end.
- Pipeline-parallel GPT-3 bubbles drop 6.29×, for 1.91× end-to-end throughput.

## Caveats

## Links

- arXiv: [2308.16369](https://arxiv.org/abs/2308.16369)
- PDF: https://arxiv.org/pdf/2308.16369
