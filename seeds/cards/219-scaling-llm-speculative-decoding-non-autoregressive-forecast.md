---
title: "Scaling LLM Speculative Decoding: Non-Autoregressive Forecasting in Large-Batch Scenarios"
authors:
  - "Luohe Shi"
  - "Zuchao Li"
  - "Lefei Zhang"
  - "Baoyuan Qi"
  - "Guoming Liu"
  - "Hai Zhao"
year: 2025
venue: "AAAI"
arxiv: "2511.20340"
doi: null
source: "https://arxiv.org/abs/2511.20340"
topics:
  - kv-serving
  - inference-systems
seed_rank: 219
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 8
---

# Scaling LLM Speculative Decoding: Non-Autoregressive Forecasting in Large-Batch Scenarios

## One-sentence takeaway

Speculative decoding accelerates LLM inference by utilizing otherwise idle computational resources during memory-to-chip data transfer.

## Why it matters here

informs agent serving, KV reuse, and long-horizon tool trajectories (Scaling LLM Speculative Decoding: Non-Autoregressive Forecasting in Large-Batch Scenarios)

## Key ideas

- Speculative decoding accelerates LLM inference by utilizing otherwise idle computational resources during memory-to-chip data transfer.
- Current speculative decoding methods typically assume a considerable amount of available computing power, then generate a complex and massive draft tree using a small autoregressive language model to improve overall prediction accuracy.
- However, methods like batching have been widely applied in mainstream model inference systems as a superior alternative to speculative decoding, as they compress the available idle computing power.
- Therefore, performing speculative decoding with low verification resources and low scheduling costs has become an important research problem.
- We believe that more capable models that allow for parallel generation on draft sequenc

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2511.20340](https://arxiv.org/abs/2511.20340)
- URL: https://arxiv.org/abs/2511.20340
