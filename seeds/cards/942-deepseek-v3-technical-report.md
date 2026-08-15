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
seed_rank: 942
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
  - title: "FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness"
    url: "https://arxiv.org/abs/2205.14135"
    year: 2022
    arxiv: "2205.14135"
  - title: "DeepSeekMoE: Towards Ultimate Expert Specialization in Mixture-of-Experts Language Models"
    url: "https://arxiv.org/abs/2401.06066"
    year: 2024
    arxiv: "2401.06066"
  - title: "DeepSeekMath: Pushing the Limits of Mathematical Reasoning in Open Language Models"
    url: "https://arxiv.org/abs/2402.03300"
    year: 2024
    arxiv: "2402.03300"
  - title: "DeepSeek-V2: A Strong, Economical, and Efficient Mixture-of-Experts Language Model"
    url: "https://arxiv.org/abs/2405.04434"
    year: 2024
    arxiv: "2405.04434"
  - title: "Auxiliary-Loss-Free Load Balancing Strategy for Mixture-of-Experts"
    url: "https://arxiv.org/abs/2408.15664"
    year: 2024
    arxiv: "2408.15664"
  - title: "DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning"
    url: "https://arxiv.org/abs/2501.12948"
    year: 2025
    arxiv: "2501.12948"
  - title: "DeepSeek-V3.2: Pushing the Frontier of Open Large Language Models"
    url: "https://arxiv.org/abs/2512.02556"
    year: 2025
    arxiv: "2512.02556"
see:
  - "013-attention-is-all-you-need"
  - "089-flashattention-fast-and-memory-efficient-exact-attention-wit"
  - "975-deepseekmoe-towards-ultimate-expert-specialization"
  - "977-deepseekmath-pushing-limits-of-mathematical-reasoning"
  - "979-deepseek-v2-economical-efficient-moe-language-model"
  - "984-auxiliary-loss-free-load-balancing-for-moe"
  - "988-deepseek-r1-incentivizing-reasoning-via-rl"
  - "995-deepseek-v3-2-pushing-the-frontier-of-open-llms"
---

# DeepSeek-V3 Technical Report

## One-sentence takeaway

DeepSeek-V3 is a 671B-parameter MoE (37B active) trained on 14.8T tokens with Multi-head Latent Attention, DeepSeekMoE, auxiliary-loss-free load balancing, and multi-token prediction.

## Why it matters here

The concrete model whose MLA/MoE wiring Weaves 2026 encodes as a worked example. Agent-stack relevant on its own: cheap active-parameter inference with a compressed KV story.

## Key ideas

- arXiv:2412.19437; 2.788M H800 GPU-hours; authors report stable training with no irrecoverable loss spikes.
- MLA + DeepSeekMoE inherited from V2; auxiliary-loss-free balancing (and multi-token prediction) are the V3 increments.
- 37B active of 671B total is the serving number that makes the architecture interesting as a term, not just as a scoreboard.
- Checkpoints: https://github.com/deepseek-ai/DeepSeek-V3
- Industrial tech report, not a categorical paper; Weaves cites it as the architecture to express.

## Caveats

## Links

- arXiv: [2412.19437](https://arxiv.org/abs/2412.19437)
- PDF: https://arxiv.org/pdf/2412.19437
- Code: https://github.com/deepseek-ai/DeepSeek-V3
