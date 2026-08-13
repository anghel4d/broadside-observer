---
title: "DeepSeek-V3 Technical Report"
authors:
  - "DeepSeek-AI"
year: 2025
venue: "arXiv:cs.CL"
arxiv: "2412.19437"
doi: null
source: "https://arxiv.org/abs/2412.19437"
topics:
  - "moe"
  - "mla"
  - "llm"
  - "deepseek"
seed_rank: 1206
seed_batch: "user-add-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 9
lineage: categorical-deep-learning
cites:
  - title: "Attention Is All You Need"
    url: "https://arxiv.org/abs/1706.03762"
    year: 2017
    arxiv: "1706.03762"
    card: "014-attention-is-all-you-need"
  - title: "FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness"
    url: "https://arxiv.org/abs/2205.14135"
    year: 2022
    arxiv: "2205.14135"
    card: "105-flashattention-fast-and-memory-efficient-exact-attention-wit"
---

# DeepSeek-V3 Technical Report

## One-sentence takeaway

671B MoE (37B active) with Multi-head Latent Attention, auxiliary-loss-free load balancing, and multi-token prediction — the architecture Weaves encodes as a worked example.

## Why it matters here

The concrete model whose MLA/MoE wiring the 2026 weaves paper turns into terms. Agent-stack relevant on its own.

## Key ideas

- arXiv:2412.19437; 14.8T tokens; 2.788M H800 GPU-hours; claimed stable training (no irrecoverable loss spikes).
- MLA + DeepSeekMoE inherited from V2; auxiliary-loss-free balancing is the new trick.
- Checkpoints: https://github.com/deepseek-ai/DeepSeek-V3

## Caveats

- Industrial tech report, not a categorical paper. Weaves cites it as the architecture to express, not as a semantics.

## Links

- arXiv: [2412.19437](https://arxiv.org/abs/2412.19437)
