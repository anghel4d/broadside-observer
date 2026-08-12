---
title: "In-context KV-Cache Eviction for LLMs via Attention-Gate"
authors:
  - "Zihao Zeng"
  - "Bokai Lin"
  - "Tianqi Hou"
  - "Hao Zhang"
  - "Zhijie Deng"
year: 2024
venue: "arXiv:cs.CL"
arxiv: "2410.12876"
doi: null
source: "https://arxiv.org/abs/2410.12876"
topics:
  - kv-serving
  - inference-systems
  - skills
  - continual-agents
  - transformer
  - foundations
seed_rank: 241
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 8
---

# In-context KV-Cache Eviction for LLMs via Attention-Gate

## One-sentence takeaway

The KV-Cache technique has become the standard for the inference of large language models (LLMs).

## Why it matters here

informs agent serving, KV reuse, and long-horizon tool trajectories; skill libraries and continual evolution match standing research loops (In-context KV-Cache Eviction for LLMs via Attention-Gate)

## Key ideas

- The KV-Cache technique has become the standard for the inference of large language models (LLMs).
- Yet, it is widely criticized that KV-Cache can become a bottleneck of the LLM inference system.
- This paper enables a novel dynamic KV-Cache eviction policy by injecting a lightweight module called Attention-Gate to the model.
- It accepts the global context as input and yields eviction flags for each token.
- The self-attention modules in the model proceed according to the flags and cache only a subset of the KV states for next token prediction.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2410.12876](https://arxiv.org/abs/2410.12876)
- URL: https://arxiv.org/abs/2410.12876
