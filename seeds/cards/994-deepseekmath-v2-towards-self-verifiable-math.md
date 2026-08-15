---
title: "DeepSeekMath-V2: Towards Self-Verifiable Mathematical Reasoning"
authors:
  - "Zhihong Shao"
  - "Yuxiang Luo"
  - "Chengda Lu"
  - "Z. Z. Ren"
  - "Jiewen Hu"
  - "Tian Ye"
  - "Zhibin Gou"
  - "Shirong Ma"
  - "Xiaokang Zhang"
year: 2025
venue: "arXiv:cs.AI"
arxiv: "2511.22570"
doi: null
source: "https://arxiv.org/abs/2511.22570"
topics:
  - "math-llm"
  - "self-verification"
  - "theorem-proving"
  - "deepseek"
seed_rank: 994
seed_batch: "deepseek-lab-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 9
lineage: deepseek
cites:
  - title: "DeepSeekMath: Pushing the Limits of Mathematical Reasoning in Open Language Models"
    url: "https://arxiv.org/abs/2402.03300"
    year: 2024
    arxiv: "2402.03300"
  - title: "DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning"
    url: "https://arxiv.org/abs/2501.12948"
    year: 2025
    arxiv: "2501.12948"
  - title: "DeepSeek-Prover-V2: Advancing Formal Mathematical Reasoning via Reinforcement Learning for Subgoal Decomposition"
    url: "https://arxiv.org/abs/2504.21801"
    year: 2025
    arxiv: "2504.21801"
see:
  - "977-deepseekmath-pushing-limits-of-mathematical-reasoning"
  - "988-deepseek-r1-incentivizing-reasoning-via-rl"
  - "991-deepseek-prover-v2-formal-reasoning-via-rl"
---

# DeepSeekMath-V2: Towards Self-Verifiable Mathematical Reasoning

## One-sentence takeaway

Answer-correct RL saturates AIME; Math-V2 trains a faithful verifier and a generator that repairs its own proofs, reporting IMO 2025 gold / CMO 2024 gold / Putnam 2024 118/120 with scaled test-time compute.

## Why it matters here

Closes the 'right answer, wrong proof' hole in R1-style RL. Self-verification is the missing loop for agents on open problems: generate, check, repair, and keep the verifier ahead of the generator.

## Key ideas

- arXiv:2511.22570. Thesis: final-answer RL does not certify reasoning, and many math tasks have no numeric answer.
- Train an LLM verifier for theorem proving; train a generator with the verifier as reward; incentivize the generator to find and fix issues before finalizing.
- Scale verification compute to label new hard proofs so the verifier stays ahead of the generator (they discuss the collusion risk if that gap closes).
- Headline scores use scaled test-time compute, not single-pass.

## Caveats

## Links

- arXiv: [2511.22570](https://arxiv.org/abs/2511.22570)
