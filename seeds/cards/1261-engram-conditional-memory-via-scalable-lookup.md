---
title: "Conditional Memory via Scalable Lookup: A New Axis of Sparsity for Large Language Models"
authors:
  - "Xin Cheng"
  - "Rui Tian"
  - "Wangding Zeng"
  - "Damai Dai"
  - "Qinyu Chen"
  - "Bingxuan Wang"
  - "Zhenda Xie"
  - "Kezhao Huang"
  - "Xingkai Yu"
  - "et al."
year: 2026
venue: "arXiv:cs.CL"
arxiv: "2601.07372"
doi: null
source: "https://arxiv.org/abs/2601.07372"
topics:
  - "engram"
  - "conditional-memory"
  - "moe"
  - "deepseek"
seed_rank: 1261
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
  - title: "DeepSeek-V3 Technical Report"
    url: "https://arxiv.org/abs/2412.19437"
    year: 2025
    arxiv: "2412.19437"
  - title: "DeepSeekMoE: Towards Ultimate Expert Specialization in Mixture-of-Experts Language Models"
    url: "https://arxiv.org/abs/2401.06066"
    year: 2024
    arxiv: "2401.06066"
  - title: "mHC: Manifold-Constrained Hyper-Connections"
    url: "https://arxiv.org/abs/2512.24880"
    year: 2025
    arxiv: "2512.24880"
see:
  - "014-attention-is-all-you-need"
  - "1206-deepseek-v3-technical-report"
  - "1239-deepseekmoe-towards-ultimate-expert-specialization"
  - "1260-mhc-manifold-constrained-hyper-connections"
---

# Conditional Memory via Scalable Lookup: A New Axis of Sparsity for Large Language Models

## One-sentence takeaway

O(1) hashed N-gram memory (Engram) as a sparsity axis complementary to MoE: U-shaped allocation law, iso-FLOP wins on knowledge and reasoning, host-RAM offload of 100B tables at <3% throughput hit.

## Why it matters here

Conditional memory vs conditional compute. Agent-relevant as a native lookup primitive so the Transformer stops simulating a dictionary in early layers.

## Key ideas

- arXiv:2601.07372. Engram: tokenizer-compressed suffix N-grams → multi-head hash into huge embedding tables → context-aware gate from hidden state → depthwise conv; residual into selected layers.
- Sparsity allocation ρ (fraction of inactive params kept as MoE experts): U-shape, optimum ~75–80% MoE / 20–25% Engram under iso-param/iso-FLOP.
- Engram-27B (reallocate 72→55 routed experts into 5.7B memory) beats MoE-27B on MMLU +3, BBH +5, HumanEval +3, MATH +2.4; long-context NIAH MQ 97 vs 84.
- Deterministic IDs → prefetch from host DRAM; 100B table offload ~2–3% throughput. Integrates with mHC (M=4). Code: https://github.com/deepseek-ai/Engram

## Caveats

- Research 27B/40B, not yet a V4 product module (V4 report emphasizes CSA/HCA + mHC + Muon).
- Demo code mocks Attention/MoE/mHC; it illustrates dataflow, not a full trainer.

## Links

- arXiv: [2601.07372](https://arxiv.org/abs/2601.07372)
- GitHub: https://github.com/deepseek-ai/Engram
