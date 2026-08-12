---
title: "SpecMemo: Speculative Decoding is in Your Pocket"
authors:
  - "Selin Yildirim"
  - "Deming Chen"
year: 2025
venue: "arXiv:cs.LG"
arxiv: "2506.01986"
doi: null
source: "https://arxiv.org/abs/2506.01986"
topics:
  - kv-serving
  - inference-systems
seed_rank: 221
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 8
---

# SpecMemo: Speculative Decoding is in Your Pocket

## One-sentence takeaway

Recent advancements in speculative decoding have demonstrated considerable speedup across a wide array of large language model (LLM) tasks.

## Why it matters here

informs agent serving, KV reuse, and long-horizon tool trajectories (SpecMemo: Speculative Decoding is in Your Pocket)

## Key ideas

- Recent advancements in speculative decoding have demonstrated considerable speedup across a wide array of large language model (LLM) tasks.
- Speculative decoding inherently relies on sacrificing extra memory allocations to generate several candidate tokens, of which acceptance rate drives the speedup.
- However, deploying speculative decoding on memory-constrained devices, such as mobile GPUs, remains as a significant challenge in real-world scenarios.
- In this work, we present a device-aware inference engine named SpecMemo that can smartly control memory allocations at finer levels to enable multi-turn chatbots with speculative decoding on such limited memory devices.
- Our methodology stems from theoretically modeling memory footprint of speculative decoding to determine a lower bound on the r

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2506.01986](https://arxiv.org/abs/2506.01986)
- URL: https://arxiv.org/abs/2506.01986
