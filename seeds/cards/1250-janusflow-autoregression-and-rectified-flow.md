---
title: "JanusFlow: Harmonizing Autoregression and Rectified Flow for Unified Multimodal Understanding and Generation"
authors:
  - "Yiyang Ma"
  - "Xingchao Liu"
  - "Xiaokang Chen"
  - "Wen Liu"
  - "Chengyue Wu"
  - "Zhiyu Wu"
  - "Zizheng Pan"
  - "Zhenda Xie"
  - "Haowei Zhang"
  - "Xingkai Yu"
  - "Liang Zhao"
  - "Yisong Wang"
  - "Jiaying Liu"
  - "Chong Ruan"
year: 2024
venue: "CVPR 2025"
arxiv: "2411.07975"
doi: null
source: "https://arxiv.org/abs/2411.07975"
topics:
  - "rectified-flow"
  - "multimodal"
  - "deepseek"
seed_rank: 1250
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
  - "1249-janus-decoupling-visual-encoding-unified-multimodal"
---

# JanusFlow: Harmonizing Autoregression and Rectified Flow for Unified Multimodal Understanding and Generation

## One-sentence takeaway

Puts rectified flow inside the LLM for image generation, still with decoupled encoders and representation alignment; CVPR 2025.

## Why it matters here

Shows the Janus LLM can host a flow matching head without a UNet-shaped fork. Useful if Anoptic ever wants AR+flow in one term.

## Key ideas

- arXiv:2411.07975, accepted CVPR 2025. Minimalist: train rectified flow in the LLM framework, no heavy architectural add-ons.
- Keeps Janus's decoupled understanding/generation encoders and adds representation alignment during unified training.
- Claimed comparable to specialists and above other unified models.

## Caveats

- Parallel to Janus-Pro (data/model scale of AR Janus), not a replacement of the AR image-token path.
- Flow matching is the generation story; understanding is still AR.

## Links

- arXiv: [2411.07975](https://arxiv.org/abs/2411.07975)
