---
title: "DeepSeek-Prover: Advancing Theorem Proving in LLMs through Large-Scale Synthetic Data"
authors:
  - "Huajian Xin"
  - "Daya Guo"
  - "Zhihong Shao"
  - "Zhizhou Ren"
  - "Qihao Zhu"
  - "Bo Liu"
  - "Chong Ruan"
  - "Wenda Li"
  - "Xiaodan Liang"
year: 2024
venue: "arXiv:cs.AI"
arxiv: "2405.14333"
doi: null
source: "https://arxiv.org/abs/2405.14333"
topics:
  - "theorem-proving"
  - "lean"
  - "synthetic-data"
  - "deepseek"
seed_rank: 980
seed_batch: "deepseek-lab-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 8
lineage: deepseek
cites:
  - title: "DeepSeekMath: Pushing the Limits of Mathematical Reasoning in Open Language Models"
    url: "https://arxiv.org/abs/2402.03300"
    year: 2024
    arxiv: "2402.03300"
see:
  - "977-deepseekmath-pushing-limits-of-mathematical-reasoning"
---

# DeepSeek-Prover: Advancing Theorem Proving in LLMs through Large-Scale Synthetic Data

## One-sentence takeaway

Fine-tunes DeepSeekMath 7B on 8M synthetic Lean 4 (statement, proof) pairs generated from contest problems, reaching 46.3% @64 / 52% cumulative on Lean 4 miniF2F and 5/148 FIMO — above GPT-4's whole-proof baseline (23% @64, 0 FIMO).

## Why it matters here

Formal-math side of the GRPO/R1 line. Relevant if Broadside wants machine-checked agent plans rather than vibes: translate, filter, prove, then train on the checked pairs.

## Key ideas

- arXiv:2405.14333. Pipeline: NL contest problems → formal statements → quality filter → generate Lean 4 proofs → 8M pairs.
- Whole-proof generation only (no search in v1). Model and synthetic data released.
- 46.3% @64 and 52% cumulative on miniF2F vs GPT-4 23% @64 and a tree-search RL baseline at 41%.
- V1.5 later adds RL from Lean feedback and MCTS; V2 jumps to a V3-671B initialization.

## Caveats

## Links

- arXiv: [2405.14333](https://arxiv.org/abs/2405.14333)
