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
seed_rank: 977
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
  - "013-attention-is-all-you-need"
  - "976-deepseek-coder-when-the-llm-meets-programming"
---

# DeepSeekMath: Pushing the Limits of Mathematical Reasoning in Open Language Models

## One-sentence takeaway

Continues Coder-Base-v1.5 7B on 120B math-related Common-Crawl tokens (plus NL/code) and introduces GRPO — a PPO variant that drops the critic and uses group-relative advantages — reaching 51.7% on competition MATH without tools or voting.

## Why it matters here

GRPO is the RL primitive behind R1. For Broadside: a verifiable-reward RL loop that coding/math agents can actually run, cheaper in memory than PPO because there is no value model.

## Key ideas

- arXiv:2402.03300. Data-selection pipeline over public web math is half the result; the other half is the RL algorithm.
- 51.7% MATH single-sample; 60.9% with self-consistency @64. Claimed near Gemini-Ultra / GPT-4 on that 2024 bench.
- Group Relative Policy Optimization: sample a group of outputs per prompt, normalize advantages inside the group, skip the critic. Same recipe R1 later scales onto V3.
- This paper is math SFT+RL on a 7B dense model, not the later pure-RL R1-Zero recipe.

## Caveats

## Links

- arXiv: [2402.03300](https://arxiv.org/abs/2402.03300)
