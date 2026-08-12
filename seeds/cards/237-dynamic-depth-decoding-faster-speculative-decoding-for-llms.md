---
title: "Dynamic Depth Decoding: Faster Speculative Decoding for LLMs"
authors:
  - "Oscar Brown"
  - "Zhengjie Wang"
  - "Andrea Do"
  - "Nikhil Mathew"
  - "Cheng Yu"
year: 2024
venue: "arXiv:cs.CL"
arxiv: "2409.00142"
doi: null
source: "https://arxiv.org/abs/2409.00142"
topics:
  - rag
  - retrieval
  - kv-serving
  - inference-systems
seed_rank: 237
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 8
---

# Dynamic Depth Decoding: Faster Speculative Decoding for LLMs

## One-sentence takeaway

The acceleration of Large Language Models (LLMs) with speculative decoding provides a significant runtime improvement without any loss of accuracy.

## Why it matters here

informs agent serving, KV reuse, and long-horizon tool trajectories; retrieval+evidence trails matter for Broadside provenance-rich digests (Dynamic Depth Decoding: Faster Speculative Decoding for LLMs)

## Key ideas

- The acceleration of Large Language Models (LLMs) with speculative decoding provides a significant runtime improvement without any loss of accuracy.
- Currently, EAGLE-2 is the state-of-the-art speculative decoding method, improving on EAGLE with a dynamic draft tree.
- We introduce Dynamic Depth Decoding (DDD), which optimises EAGLE-2's tree drafting method using a dynamic depth.
- This extends the average speedup that EAGLE-2 achieves over EAGLE by $44\%$, giving DDD an average speedup of $3.16$x.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2409.00142](https://arxiv.org/abs/2409.00142)
- URL: https://arxiv.org/abs/2409.00142
