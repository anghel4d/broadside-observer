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
seed_rank: 985
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
  - title: "DeepSeek-VL: Towards Real-World Vision-Language Understanding"
    url: "https://arxiv.org/abs/2403.05525"
    year: 2024
    arxiv: "2403.05525"
see:
  - "013-attention-is-all-you-need"
  - "978-deepseek-vl-towards-real-world-vision-language"
---

# Janus: Decoupling Visual Encoding for Unified Multimodal Understanding and Generation

## One-sentence takeaway

Janus is an autoregressive unified understand+generate Transformer that splits visual encoding into two pathways — semantic features for understanding, fine-grained tokens for generation — so a single encoder (Chameleon-style) no longer has to serve both granularities.

## Why it matters here

DeepSeek's answer to unified multimodal models: keep one LLM, split the vision tokenizers. Anoptic agent perception that both reads a UI and emits an image wants this decoupling, not one encoder fighting itself.

## Key ideas

- arXiv:2410.13848. Technical report. Separate visual encoding pathways, shared transformer.
- Motivation: understanding wants semantic features, generation wants fine-grained tokens; a single encoder degrades understanding in particular.
- Each path can pick its own encoder; the LLM still sees one token stream.
- Claimed above prior unified models and matching task-specific ones on the respective benches. Janus-Pro is the scale-up; JanusFlow swaps AR image tokens for rectified flow.

## Caveats

## Links

- arXiv: [2410.13848](https://arxiv.org/abs/2410.13848)
- GitHub: https://github.com/deepseek-ai/Janus
