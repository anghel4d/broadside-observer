---
title: "Janus-Pro: Unified Multimodal Understanding and Generation with Data and Model Scaling"
authors:
  - "Xiaokang Chen"
  - "Zhiyu Wu"
  - "Xingchao Liu"
  - "Zizheng Pan"
  - "Wen Liu"
  - "Zhenda Xie"
  - "Xingkai Yu"
  - "Chong Ruan"
year: 2025
venue: "arXiv:cs.CV"
arxiv: "2501.17811"
doi: null
source: "https://arxiv.org/abs/2501.17811"
topics:
  - "multimodal"
  - "unified-model"
  - "deepseek"
seed_rank: 989
seed_batch: "deepseek-lab-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 7
lineage: deepseek
cites:
  - title: "Janus: Decoupling Visual Encoding for Unified Multimodal Understanding and Generation"
    url: "https://arxiv.org/abs/2410.13848"
    year: 2024
    arxiv: "2410.13848"
see:
  - "985-janus-decoupling-visual-encoding-unified-multimodal"
---

# Janus-Pro: Unified Multimodal Understanding and Generation with Data and Model Scaling

## One-sentence takeaway

Janus scaled: better training recipe, more data, larger models — jumps on multimodal understanding and text-to-image instruction following, plus stabler T2I.

## Why it matters here

The Janus that people actually downloaded. Same decoupled-encoder idea, more compute.

## Key ideas

- arXiv:2501.17811. Three levers: optimized training strategy, expanded data, larger model size.
- Gains on both understanding benches and T2I instruction-following; more stable image generation than Janus.
- Code/models public; overlap note with 2410.13848 (same architecture, scaled).

## Caveats

- Scaling paper, not a new architecture. JanusFlow is the flow-matching cousin.
- Still a unified AR model, not VL2's MoE-MLA understanding stack.

## Links

- arXiv: [2501.17811](https://arxiv.org/abs/2501.17811)
- GitHub: https://github.com/deepseek-ai/Janus
