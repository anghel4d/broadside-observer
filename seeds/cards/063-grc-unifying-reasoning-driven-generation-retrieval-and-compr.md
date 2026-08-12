---
title: "GRC: Unifying Reasoning-Driven Generation, Retrieval and Compression"
authors:
  - "Zhongtao Miao"
  - "Qiyu Wu"
  - "Yoshimasa Tsuruoka"
year: 2026
venue: "arXiv:cs.CL"
arxiv: "2605.09100"
doi: null
source: "https://arxiv.org/abs/2605.09100"
topics:
  - rag
  - retrieval
  - kv-serving
  - inference-systems
  - skills
  - continual-agents
seed_rank: 63
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 9
---

# GRC: Unifying Reasoning-Driven Generation, Retrieval and Compression

## One-sentence takeaway

Text embedding and generative tasks are usually trained separately based on large language models (LLMs) nowadays.

## Why it matters here

informs agent serving, KV reuse, and long-horizon tool trajectories; retrieval+evidence trails matter for Broadside provenance-rich digests (GRC: Unifying Reasoning-Driven Generation, Retrieval and Compression)

## Key ideas

- Text embedding and generative tasks are usually trained separately based on large language models (LLMs) nowadays.
- This causes a large amount of training cost and deployment effort.
- Context compression is also a challenging and pressing task, which is vital to reasoning-driven generation, and agentic tasks requiring long context and continual learning.
- In this paper, we explore how to unify reasoning-driven generation, reasoning-enhanced text representation and context compression tasks in one forward pass for LLMs.
- Through meta latent tokens and a unified generative, representative and compressive tuning approach, we propose a training framework named GRC that bridges the three tasks.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2605.09100](https://arxiv.org/abs/2605.09100)
- URL: https://arxiv.org/abs/2605.09100
