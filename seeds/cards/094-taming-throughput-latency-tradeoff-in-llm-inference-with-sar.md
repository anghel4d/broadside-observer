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
seed_rank: 94
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 9
---

# Taming Throughput-Latency Tradeoff in LLM Inference with Sarathi-Serve

## One-sentence takeaway

Each LLM serving request goes through two phases.

## Why it matters here

informs agent serving, KV reuse, and long-horizon tool trajectories (Taming Throughput-Latency Tradeoff in LLM Inference with Sarathi-Serve)

## Key ideas

- Each LLM serving request goes through two phases.
- The first is prefill which processes the entire input prompt and produces the first output token and the second is decode which generates the rest of output tokens, one-at-a-time.
- Prefill iterations have high latency but saturate GPU compute due to parallel processing of the input prompt.
- In contrast, decode iterations have low latency but also low compute utilization because a decode iteration processes only a single token per request.
- This makes batching highly effective for decodes and consequently for overall throughput.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2403.02310](https://arxiv.org/abs/2403.02310)
- URL: https://arxiv.org/abs/2403.02310
