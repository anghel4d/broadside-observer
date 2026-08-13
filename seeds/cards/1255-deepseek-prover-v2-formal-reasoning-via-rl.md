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
seed_rank: 1255
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
    card: "1206-deepseek-v3-technical-report"
  - title: "DeepSeek-Prover-V1.5: Harnessing Proof Assistant Feedback for Reinforcement Learning and Monte-Carlo Tree Search"
    url: "https://arxiv.org/abs/2408.08152"
    year: 2024
    arxiv: "2408.08152"
    card: "1246-deepseek-prover-v1-5-proof-assistant-feedback"
  - title: "DeepSeek-R1: Incentivizing Reasoning Capability in LLMs via Reinforcement Learning"
    url: "https://arxiv.org/abs/2501.12948"
    year: 2025
    arxiv: "2501.12948"
    card: "1252-deepseek-r1-incentivizing-reasoning-via-rl"
---

# DeepSeek-Prover-V2: Advancing Formal Mathematical Reasoning via Reinforcement Learning for Subgoal Decomposition

## One-sentence takeaway

Cold-starts from V3 subgoal decomposition into Lean 4, then RL; Prover-V2-671B hits 88.9% miniF2F and 49/658 PutnamBench — informal and formal math starting to meet.

## Why it matters here

V3 as a formal-math agent: recursive subgoals + RL. Closest lab artifact to an agent that writes a checked plan.

## Key ideas

- arXiv:2504.21801. Pipeline: prompt V3 to decompose → prove subgoals → synthesize CoT + V3 step-by-step as RL cold start.
- Unifies informal (V3-style) and formal (Lean) reasoning in one model. DeepSeek-Prover-V2-671B.
- 88.9% MiniF2F-test; 49/658 PutnamBench; 6/15 formalized AIME 24–25 (V3 majority-vote informal: 8/15).
- New ProverBench (325 formalized problems incl. 15 AIME).

## Caveats

- Still Lean 4. Gap to informal V3 on AIME is small but not gone.
- 671B is the headline; distilled variants exist for actual use.

## Links

- arXiv: [2504.21801](https://arxiv.org/abs/2504.21801)
