---
title: "Cassandra: Enabling Reasoning LLMs at Edge via Self-Speculative Decoding"
authors:
  - "Soongyu Choi"
  - "Yuntae Kim"
  - "Muyoung Son"
  - "Joo-Young Kim"
year: 2026
venue: "arXiv:cs.AR"
arxiv: "2605.26558"
doi: null
source: "https://arxiv.org/abs/2605.26558"
topics:
  - kv-serving
  - inference-systems
seed_rank: 184
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 8
---

# Cassandra: Enabling Reasoning LLMs at Edge via Self-Speculative Decoding

## One-sentence takeaway

Speculative decoding has emerged as a promising lossless approach for accelerating Large Language Models (LLMs).

## Why it matters here

informs agent serving, KV reuse, and long-horizon tool trajectories (Cassandra: Enabling Reasoning LLMs at Edge via Self-Speculative Decoding)

## Key ideas

- Speculative decoding has emerged as a promising lossless approach for accelerating Large Language Models (LLMs).
- As reasoning LLMs increasingly suffer from decode-stage overhead and approximation-based methods degrade accuracy, lossless speculative decoding has become essential for efficient inference.
- However, existing methods still struggle to deliver strong low-batch performance without additional training, limiting practical deployment on consumer devices.
- To address this challenge, we propose Cassandra, an algorithm-hardware co-designed self-speculative decoding framework optimized for low-batch scenarios.
- Cassandra constructs a high-performance, training-free draft model through fine-grained data selection.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2605.26558](https://arxiv.org/abs/2605.26558)
- URL: https://arxiv.org/abs/2605.26558
