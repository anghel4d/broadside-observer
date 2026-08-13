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

Adds RL from Lean feedback (RLPAF) and RMaxTS (intrinsic-reward MCTS) on top of Prover-V1; 63.5% miniF2F, 25.3% ProofNet.

## Why it matters here

Search+RL over a proof assistant — the agent loop GRID COMMAND-style planners actually look like, just in Lean.

## Key ideas

- arXiv:2408.08152. Pretrained on DeepSeekMath-Base with formal-language specialization; SFT on an enhanced V1 dataset.
- RLPAF: reinforcement learning from proof-assistant feedback.
- RMaxTS: MCTS with intrinsic-reward exploration for diverse proof paths, beyond V1's single-pass whole proofs.
- miniF2F 63.5%, undergraduate ProofNet 25.3%.

## Caveats

- Still Math-base scale; V2 (1255) jumps to V3-671B initialization.
- Lean 4 specific; not a general reasoning model.

## Links

- arXiv: [2408.08152](https://arxiv.org/abs/2408.08152)
