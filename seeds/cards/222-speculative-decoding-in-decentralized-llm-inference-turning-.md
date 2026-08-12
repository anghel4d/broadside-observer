---
title: "Speculative Decoding in Decentralized LLM Inference: Turning Communication Latency into Computation Throughput"
authors:
  - "Jingwei Song"
  - "Wanyi Chen"
  - "Xinyuan Song"
  - " Max"
  - "Chris Tong"
  - "Gufeng Chen"
  - "Tianyi Zhao"
  - "Eric Yang"
  - "Bill Shi"
  - "Lynn Ai"
year: 2025
venue: "ICML"
arxiv: "2511.11733"
doi: null
source: "https://arxiv.org/abs/2511.11733"
topics:
  - rag
  - retrieval
  - kv-serving
  - inference-systems
seed_rank: 222
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 8
---

# Speculative Decoding in Decentralized LLM Inference: Turning Communication Latency into Computation Throughput

## One-sentence takeaway

Speculative decoding accelerates large language model (LLM) inference by using a lightweight draft model to propose tokens that are later verified by a stronger target model.

## Why it matters here

informs agent serving, KV reuse, and long-horizon tool trajectories; retrieval+evidence trails matter for Broadside provenance-rich digests (Speculative Decoding in Decentralized LLM Inference: Turning Communication Latency into Co)

## Key ideas

- Speculative decoding accelerates large language model (LLM) inference by using a lightweight draft model to propose tokens that are later verified by a stronger target model.
- While effective in centralized systems, its behavior in decentralized settings, where network latency often dominates compute, remains under-characterized.
- We present Decentralized Speculative Decoding (DSD), a plug-and-play framework for decentralized inference that turns communication delay into useful computation by verifying multiple candidate tokens in parallel across distributed nodes.
- We further introduce an adaptive speculative verification strategy that adjusts acceptance thresholds by token-level semantic importance, delivering an additional 15% to 20% end-to-end speedup without retraining.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2511.11733](https://arxiv.org/abs/2511.11733)
- URL: https://arxiv.org/abs/2511.11733
