---
title: "Automatic Task Detection and Heterogeneous LLM Speculative Decoding"
authors:
  - "Danying Ge"
  - "Jianhua Gao"
  - "Qizhi Jiang"
  - "Yifei Feng"
  - "Weixing Ji"
year: 2025
venue: "arXiv:cs.CL"
arxiv: "2505.08600"
doi: null
source: "https://arxiv.org/abs/2505.08600"
topics:
  - kv-serving
  - inference-systems
seed_rank: 204
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 8
---

# Automatic Task Detection and Heterogeneous LLM Speculative Decoding

## One-sentence takeaway

Speculative decoding, which combines a draft model with a target model, has emerged as an effective approach to accelerate large language model (LLM) inference.

## Why it matters here

informs agent serving, KV reuse, and long-horizon tool trajectories (Automatic Task Detection and Heterogeneous LLM Speculative Decoding)

## Key ideas

- Speculative decoding, which combines a draft model with a target model, has emerged as an effective approach to accelerate large language model (LLM) inference.
- However, existing methods often face a trade-off between the acceptance rate and decoding speed in downstream tasks due to the limited capacity of the draft model, making it difficult to ensure efficiency across diverse tasks.
- To address this problem, we propose a speculative decoding algorithm tailored for downstream task optimization.
- It includes an automatic task partitioning and assigning method, which automatically categorizes downstream tasks into different sub-tasks and assigns them to a set of heterogeneous draft models.
- Each draft model is aligned with the target model using task-specific data, thereby enhancing the consis

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2505.08600](https://arxiv.org/abs/2505.08600)
- URL: https://arxiv.org/abs/2505.08600
