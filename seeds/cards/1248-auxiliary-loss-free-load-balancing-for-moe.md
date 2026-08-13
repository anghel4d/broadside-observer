---
title: "Auxiliary-Loss-Free Load Balancing Strategy for Mixture-of-Experts"
authors:
  - "Lean Wang"
  - "Huazuo Gao"
  - "Chenggang Zhao"
  - "Xu Sun"
  - "Damai Dai"
year: 2024
venue: "arXiv:cs.LG"
arxiv: "2408.15664"
doi: null
source: "https://arxiv.org/abs/2408.15664"
topics:
  - "moe"
  - "load-balancing"
  - "deepseek"
seed_rank: 1248
seed_batch: "deepseek-lab-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 9
lineage: deepseek
cites:
  - title: "Attention Is All You Need"
    url: "https://arxiv.org/abs/1706.03762"
    year: 2017
    arxiv: "1706.03762"
  - title: "DeepSeekMoE: Towards Ultimate Expert Specialization in Mixture-of-Experts Language Models"
    url: "https://arxiv.org/abs/2401.06066"
    year: 2024
    arxiv: "2401.06066"
  - title: "DeepSeek-V3 Technical Report"
    url: "https://arxiv.org/abs/2412.19437"
    year: 2025
    arxiv: "2412.19437"
see:
  - "014-attention-is-all-you-need"
  - "1239-deepseekmoe-towards-ultimate-expert-specialization"
  - "1206-deepseek-v3-technical-report"
---

# Auxiliary-Loss-Free Load Balancing Strategy for Mixture-of-Experts

## One-sentence takeaway

Expert-wise routing bias updated from recent load, no auxiliary loss: breaks the balance-vs-LM-gradient dilemma that V3 then ships at 671B.

## Why it matters here

The MoE load-balancing trick V3 (1206) pioneers at scale. Small paper, large production consequence.

## Key ideas

- arXiv:2408.15664. Before top-K, add an expert-wise bias to routing scores; after the batch, bump bias up/down from load violation (sign update, rate u≈0.001).
- Bias affects selection only, not the gating weights that mix expert outputs — so no extra LM-interfering gradients.
- Vs aux-loss: better val PPL and far better MaxVio_global (0.04 vs 0.5–0.7) on 1B/3B DeepSeekMoE. Vs Expert-Choice: no future-token leakage.
- Compatible with expert parallelism: computation-batch MaxVio improves as EP widens.

## Caveats

- Validated at 1B/3B, not 671B — V3 is the scale-up report.
- Bias is extra-graph; it is a controller, not a learned module.

## Links

- arXiv: [2408.15664](https://arxiv.org/abs/2408.15664)
