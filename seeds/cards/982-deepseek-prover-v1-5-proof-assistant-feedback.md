---
title: "DeepSeek-Prover-V1.5: Harnessing Proof Assistant Feedback for Reinforcement Learning and Monte-Carlo Tree Search"
authors:
  - "Huajian Xin"
  - "Z. Z. Ren"
  - "Junxiao Song"
  - "Zhihong Shao"
  - "Wanjia Zhao"
  - "Haocheng Wang"
  - "Bo Liu"
  - "Liyue Zhang"
  - "Xuan Lu"
  - "Qiushi Du"
  - "Wenjun Gao"
  - "Qihao Zhu"
  - "Dejian Yang"
  - "Zhibin Gou"
  - "Z. F. Wu"
  - "et al."
year: 2024
venue: "arXiv:cs.LO"
arxiv: "2408.08152"
doi: null
source: "https://arxiv.org/abs/2408.08152"
topics:
  - "theorem-proving"
  - "mcts"
  - "rl"
  - "lean"
  - "deepseek"
seed_rank: 982
seed_batch: "deepseek-lab-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 8
lineage: deepseek
cites:
  - title: "DeepSeek-Prover: Advancing Theorem Proving in LLMs through Large-Scale Synthetic Data"
    url: "https://arxiv.org/abs/2405.14333"
    year: 2024
    arxiv: "2405.14333"
  - title: "DeepSeekMath: Pushing the Limits of Mathematical Reasoning in Open Language Models"
    url: "https://arxiv.org/abs/2402.03300"
    year: 2024
    arxiv: "2402.03300"
see:
  - "980-deepseek-prover-advancing-theorem-proving"
  - "977-deepseekmath-pushing-limits-of-mathematical-reasoning"
---

# DeepSeek-Prover-V1.5: Harnessing Proof Assistant Feedback for Reinforcement Learning and Monte-Carlo Tree Search

## One-sentence takeaway

Adds RL from Lean feedback (RLPAF) and RMaxTS — intrinsic-reward MCTS for diverse proof paths — on top of Prover-V1, reaching 63.5% miniF2F and 25.3% ProofNet.

## Why it matters here

Search plus RL over a proof assistant is the agent loop GRID COMMAND-style planners actually look like, just in Lean: propose a step, check it, explore alternatives, train on the verified traces.

## Key ideas

- arXiv:2408.08152. Pretrained on DeepSeekMath-Base with formal-language specialization; SFT on an enhanced V1 dataset, then RLPAF.
- RMaxTS is MCTS with an intrinsic reward that prefers unexplored proof states, beyond V1's single-pass whole proofs.
- High-school miniF2F 63.5%; undergraduate ProofNet 25.3%.
- Still Math-base scale; V2 later cold-starts from V3-671B subgoal decomposition.

## Caveats

## Links

- arXiv: [2408.08152](https://arxiv.org/abs/2408.08152)
