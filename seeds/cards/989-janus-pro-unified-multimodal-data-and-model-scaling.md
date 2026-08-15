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

Janus-Pro keeps the decoupled-encoder unified AR architecture and scales three levers — training recipe, data, and model size — producing jumps on multimodal understanding and text-to-image instruction following plus stabler T2I than Janus.

## Why it matters here

The Janus people actually downloaded. Same understand/generate split, more compute. If Anoptic wants one checkpoint that both reads a screenshot and emits an image, this is the scaled artifact, not a new architecture.

## Key ideas

- arXiv:2501.17811. Optimized training strategy, expanded data, larger models — no new visual-encoder split.
- Gains on understanding benches and T2I instruction-following; image generation is reported more stable than Janus.
- Code and models public on the Janus repo; overlap with 2410.13848 is intentional (same architecture, scaled).
- Still a unified AR model, not VL2's MoE-MLA understanding stack; JanusFlow is the flow-matching cousin.

## Caveats

## Links

- arXiv: [2501.17811](https://arxiv.org/abs/2501.17811)
- GitHub: https://github.com/deepseek-ai/Janus
