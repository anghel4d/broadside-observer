---
title: "DeepSeek-Prover-V2: Advancing Formal Mathematical Reasoning via Reinforcement Learning for Subgoal Decomposition"
authors:
  - "Z. Z. Ren"
  - "Zhihong Shao"
  - "Junxiao Song"
  - "Huajian Xin"
  - "Haocheng Wang"
  - "Wanjia Zhao"
  - "Liyue Zhang"
  - "Zhe Fu"
  - "Qihao Zhu"
  - "Dejian Yang"
  - "Z. F. Wu"
  - "Zhibin Gou"
  - "Shirong Ma"
  - "Hongxuan Tang"
  - "Yuxuan Liu"
  - "et al."
year: 2025
venue: "arXiv:cs.CL"
arxiv: "2504.21801"
doi: null
source: "https://arxiv.org/abs/2504.21801"
topics:
  - "theorem-proving"
  - "rl"
  - "lean"
  - "deepseek"
seed_rank: 991
seed_batch: "deepseek-lab-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 8
lineage: deepseek
cites:
  - title: "DeepSeek-V3 Technical Report"
    url: "https://arxiv.org/abs/2412.19437"
    year: 2025
    arxiv: "2412.19437"
  - title: "DeepSeek-Prover-V1.5: Harnessing Proof Assistant Feedback for Reinforcement Learning and Monte-Carlo Tree Search"
    url: "https://arxiv.org/abs/2408.08152"
    year: 2024
    arxiv: "2408.08152"
  - title: "DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning"
    url: "https://arxiv.org/abs/2501.12948"
    year: 2025
    arxiv: "2501.12948"
see:
  - "942-deepseek-v3-technical-report"
  - "982-deepseek-prover-v1-5-proof-assistant-feedback"
  - "988-deepseek-r1-incentivizing-reasoning-via-rl"
---

# DeepSeek-Prover-V2: Advancing Formal Mathematical Reasoning via Reinforcement Learning for Subgoal Decomposition

## One-sentence takeaway

Prover-V2 cold-starts from V3 subgoal decomposition into Lean 4, then RL: prompt V3 to split a theorem, prove the subgoals, synthesize a CoT, and use that as the RL start — Prover-V2-671B hits 88.9% miniF2F and 49/658 PutnamBench.

## Why it matters here

V3 as a formal-math agent: recursive subgoals plus RL. Closest lab artifact to an agent that writes a checked plan, which is the GRID COMMAND-shaped loop (decompose, act, verify) in Lean.

## Key ideas

- arXiv:2504.21801. Unifies informal (V3-style) and formal (Lean) reasoning in one 671B model.
- Pipeline: V3 decomposes → subgoals are proved → CoT + V3 step-by-step become the RL cold start, then Lean feedback trains the policy.
- 88.9% MiniF2F-test; 49/658 PutnamBench; 6/15 formalized AIME 24–25 (V3 majority-vote informal: 8/15).
- New ProverBench: 325 formalized problems including 15 AIME. Distilled variants exist for actual use; 671B is the headline.

## Caveats

## Links

- arXiv: [2504.21801](https://arxiv.org/abs/2504.21801)
