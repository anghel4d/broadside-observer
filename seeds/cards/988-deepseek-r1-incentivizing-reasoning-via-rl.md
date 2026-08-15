---
title: "DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning"
authors:
  - "DeepSeek-AI"
year: 2025
venue: "arXiv:cs.CL"
arxiv: "2501.12948"
doi: null
source: "https://arxiv.org/abs/2501.12948"
topics:
  - "rl"
  - "grpo"
  - "reasoning"
  - "deepseek"
seed_rank: 988
seed_batch: "deepseek-lab-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 10
lineage: deepseek
cites:
  - title: "Attention Is All You Need"
    url: "https://arxiv.org/abs/1706.03762"
    year: 2017
    arxiv: "1706.03762"
  - title: "DeepSeekMath: Pushing the Limits of Mathematical Reasoning in Open Language Models"
    url: "https://arxiv.org/abs/2402.03300"
    year: 2024
    arxiv: "2402.03300"
  - title: "DeepSeek-V3 Technical Report"
    url: "https://arxiv.org/abs/2412.19437"
    year: 2025
    arxiv: "2412.19437"
see:
  - "013-attention-is-all-you-need"
  - "977-deepseekmath-pushing-limits-of-mathematical-reasoning"
  - "942-deepseek-v3-technical-report"
---

# DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning

## One-sentence takeaway

Pure GRPO on V3 (R1-Zero) incentivizes long chain-of-thought — self-reflection, verification, strategy switching — without human CoT traces; R1 then adds a cold-start SFT and a cleanup pass so the same reasoning is readable and less harmful, and distills into Qwen/Llama-sized models.

## Why it matters here

The reasoning-agent paper. GRPO from Math scaled onto the V3 backbone. Distilled checkpoints are what most local Broadside agents actually run; the recipe is RL-on-verifiable-rewards, not a new architecture.

## Key ideas

- arXiv:2501.12948. R1-Zero: RL on V3 with verifiable rewards (math/code/STEM), no SFT traces; long CoT and self-reflection emerge.
- R1: cold-start SFT then RL, plus rejection-sampling / SFT cleanup, for readability and harmlessness on top of R1-Zero's raw reasoning.
- Distill R1 traces into smaller Qwen/Llama models; claimed that the big model's reasoning patterns transfer.
- Works where you can check answers. Open-ended chat still needs the SFT mix. Safety/censorship of released checkpoints is a separate story from the RL result.

## Caveats

## Links

- arXiv: [2501.12948](https://arxiv.org/abs/2501.12948)
- GitHub: https://github.com/deepseek-ai/DeepSeek-R1
