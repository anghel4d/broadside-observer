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
  - title: "DeepSeekMoE: Towards Ultimate Expert Specialization in Mixture-of-Experts Language Models"
    url: "https://arxiv.org/abs/2401.06066"
    year: 2024
    arxiv: "2401.06066"
    card: "1239-deepseekmoe-towards-ultimate-expert-specialization"
  - title: "DeepSeekMath: Pushing the Limits of Mathematical Reasoning in Open Language Models"
    url: "https://arxiv.org/abs/2402.03300"
    year: 2024
    arxiv: "2402.03300"
    card: "1241-deepseekmath-pushing-limits-of-mathematical-reasoning"
  - title: "DeepSeek-V2: A Strong, Economical, and Efficient Mixture-of-Experts Language Model"
    url: "https://arxiv.org/abs/2405.04434"
    year: 2024
    arxiv: "2405.04434"
    card: "1243-deepseek-v2-economical-efficient-moe-language-model"
  - title: "Auxiliary-Loss-Free Load Balancing Strategy for Mixture-of-Experts"
    url: "https://arxiv.org/abs/2408.15664"
    year: 2024
    arxiv: "2408.15664"
    card: "1248-auxiliary-loss-free-load-balancing-for-moe"
  - title: "DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning"
    url: "https://arxiv.org/abs/2501.12948"
    year: 2025
    arxiv: "2501.12948"
    card: "1252-deepseek-r1-incentivizing-reasoning-via-rl"
  - title: "DeepSeek-V3.2: Pushing the Frontier of Open Large Language Models"
    url: "https://arxiv.org/abs/2512.02556"
    year: 2025
    arxiv: "2512.02556"
    card: "1259-deepseek-v3-2-pushing-the-frontier-of-open-llms"
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
