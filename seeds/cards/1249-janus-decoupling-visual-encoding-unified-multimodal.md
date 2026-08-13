---
title: "Janus: Decoupling Visual Encoding for Unified Multimodal Understanding and Generation"
authors:
  - "Chengyue Wu"
  - "Xiaokang Chen"
  - "Zhiyu Wu"
  - "Yiyang Ma"
  - "Xingchao Liu"
  - "Zizheng Pan"
  - "Wen Liu"
  - "Zhenda Xie"
  - "Xingkai Yu"
  - "Chong Ruan"
  - "Ping Luo"
year: 2024
venue: "arXiv:cs.CV"
arxiv: "2410.13848"
doi: null
source: "https://arxiv.org/abs/2410.13848"
topics:
  - "multimodal"
  - "unified-model"
  - "deepseek"
seed_rank: 1249
seed_batch: "deepseek-lab-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 7
lineage: deepseek
cites:
  - title: "Attention Is All You Need"
    url: "https://arxiv.org/abs/1706.03762"
    year: 2017
    arxiv: "1706.03762"
    card: "014-attention-is-all-you-need"
  - title: "DeepSeek-VL: Towards Real-World Vision-Language Understanding"
    url: "https://arxiv.org/abs/2403.05525"
    year: 2024
    arxiv: "2403.05525"
    card: "1242-deepseek-vl-towards-real-world-vision-language"
---

# Janus: Decoupling Visual Encoding for Unified Multimodal Understanding and Generation

## One-sentence takeaway

Unified understand+generate Transformer with decoupled visual encoders — one path for understanding, one for generation — so a single encoder no longer has to serve both granularities.

## Why it matters here

DeepSeek's Chameleon-killer: keep one LLM, split the vision tokenizers. Janus-Pro (1253) is the scale-up.

## Key ideas

- arXiv:2410.13848. Technical report. Autoregressive unified model; separate visual encoding pathways, shared transformer.
- Motivation: understanding wants semantic features, generation wants fine-grained tokens; a single encoder (Chameleon-style) fights itself.
- Claimed above prior unified models and matching task-specific ones on the respective benches.

## Caveats

- Understand/generate still share the LLM; only the visual encoder is decoupled.
- JanusFlow explores rectified-flow generation instead of pure AR image tokens.

## Links

- arXiv: [2410.13848](https://arxiv.org/abs/2410.13848)
- GitHub: https://github.com/deepseek-ai/Janus
