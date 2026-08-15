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
seed_rank: 984
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
  - "013-attention-is-all-you-need"
  - "975-deepseekmoe-towards-ultimate-expert-specialization"
  - "942-deepseek-v3-technical-report"
---

# Auxiliary-Loss-Free Load Balancing Strategy for Mixture-of-Experts

## One-sentence takeaway

Loss-Free Balancing adds an expert-wise bias to routing scores before top-K, then updates that bias from recent load — no auxiliary loss, so load balance no longer injects interference gradients into the LM objective.

## Why it matters here

The MoE load-balancing trick V3 ships at 671B. Small paper, large production consequence: you can keep experts busy without fighting the language-model gradient.

## Key ideas

- arXiv:2408.15664. Before top-K, add a per-expert bias; after the batch, bump the bias up or down from load violation (sign update, rate \(u \approx 0.001\)).
- Bias affects selection only, not the gating weights that mix expert outputs — so no extra LM-interfering gradients.
- Vs aux-loss: better val PPL and far better MaxVio_global (0.04 vs 0.5–0.7) on 1B/3B DeepSeekMoE trained up to 200B tokens. Vs Expert-Choice: no future-token leakage.
- Compatible with expert parallelism: computation-batch MaxVio improves as EP widens. Validated at 1B/3B; V3 is the scale-up report.

## Caveats

## Links

- arXiv: [2408.15664](https://arxiv.org/abs/2408.15664)
