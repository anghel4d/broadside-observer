---
title: "DeepSeekMath: Pushing the Limits of Mathematical Reasoning in Open Language Models"
authors:
  - "Zhihong Shao"
  - "Peiyi Wang"
  - "Qihao Zhu"
  - "Runxin Xu"
  - "Junxiao Song"
  - "Xiao Bi"
  - "Haowei Zhang"
  - "Mingchuan Zhang"
  - "Y. K. Li"
  - "Y. Wu"
  - "Daya Guo"
year: 2024
venue: "arXiv:cs.CL"
arxiv: "2402.03300"
doi: null
source: "https://arxiv.org/abs/2402.03300"
topics:
  - "grpo"
  - "math-llm"
  - "rl"
  - "deepseek"
seed_rank: 1241
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
  - title: "DeepSeek-Coder: When the Large Language Model Meets Programming — The Rise of Code Intelligence"
    url: "https://arxiv.org/abs/2401.14196"
    year: 2024
    arxiv: "2401.14196"
see:
  - "014-attention-is-all-you-need"
  - "1240-deepseek-coder-when-the-llm-meets-programming"
---

# DeepSeekMath: Pushing the Limits of Mathematical Reasoning in Open Language Models

## One-sentence takeaway

Continues Coder-Base-v1.5 7B on 120B math tokens and introduces GRPO — the PPO variant R1 later scales into a reasoning recipe.

## Why it matters here

GRPO is the RL primitive behind R1 (1252). For Broadside: a verifiable-reward RL loop that coding/math agents can actually run.

## Key ideas

- arXiv:2402.03300. DeepSeekMath 7B: continue-pretrain Coder-Base-v1.5 7B with 120B math-related Common-Crawl tokens plus NL/code.
- 51.7% on competition MATH without tools or voting; 60.9% with self-consistency @64. Claimed near Gemini-Ultra / GPT-4 on that bench.
- Group Relative Policy Optimization (GRPO): PPO variant that drops the critic and uses group-relative advantages — much cheaper memory than PPO.
- Data-selection pipeline over public web math is the other half of the result.

## Caveats

- 7B dense, not the later 671B R1. GRPO here is math-SFT+RL, not the pure-RL R1-Zero recipe.
- MATH numbers are 2024; treat as the origin of GRPO, not current math SOTA.

## Links

- arXiv: [2402.03300](https://arxiv.org/abs/2402.03300)
