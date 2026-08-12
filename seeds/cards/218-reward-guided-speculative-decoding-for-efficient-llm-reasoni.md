---
title: "Reward-Guided Speculative Decoding for Efficient LLM Reasoning"
authors:
  - "Baohao Liao"
  - "Yuhui Xu"
  - "Hanze Dong"
  - "Junnan Li"
  - "Christof Monz"
  - "Silvio Savarese"
  - "Doyen Sahoo"
  - "Caiming Xiong"
year: 2025
venue: "arXiv:cs.CL"
arxiv: "2501.19324"
doi: null
source: "https://arxiv.org/abs/2501.19324"
topics:
  - rag
  - retrieval
  - kv-serving
  - inference-systems
seed_rank: 218
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 8
---

# Reward-Guided Speculative Decoding for Efficient LLM Reasoning

## One-sentence takeaway

We introduce Reward-Guided Speculative Decoding (RSD), a novel framework aimed at improving the efficiency of inference in large language models (LLMs).

## Why it matters here

informs agent serving, KV reuse, and long-horizon tool trajectories; retrieval+evidence trails matter for Broadside provenance-rich digests (Reward-Guided Speculative Decoding for Efficient LLM Reasoning)

## Key ideas

- We introduce Reward-Guided Speculative Decoding (RSD), a novel framework aimed at improving the efficiency of inference in large language models (LLMs).
- RSD synergistically combines a lightweight draft model with a more powerful target model, incorporating a controlled bias to prioritize high-reward outputs, in contrast to existing speculative decoding methods that enforce strict unbiasedness.
- RSD employs a process reward model to evaluate intermediate decoding steps and dynamically decide whether to invoke the target model, optimizing the trade-off between computational cost and output quality.
- We theoretically demonstrate that a threshold-based mixture strategy achieves an optimal balance between resource utilization and performance.
- Extensive evaluations on challenging reasoning benchma

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2501.19324](https://arxiv.org/abs/2501.19324)
- URL: https://arxiv.org/abs/2501.19324
