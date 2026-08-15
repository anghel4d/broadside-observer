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
seed_rank: 986
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

# JanusFlow: Harmonizing Autoregression and Rectified Flow for Unified Multimodal Understanding and Generation

## One-sentence takeaway

JanusFlow trains a rectified-flow image generator inside the LLM — still with Janus's decoupled encoders and an added representation-alignment loss — rather than emitting AR image tokens or bolting on a UNet.

## Why it matters here

Shows the Janus LLM can host a flow-matching head without a UNet-shaped fork. Useful if Anoptic ever wants AR understanding and flow generation in one term.

## Key ideas

- arXiv:2411.07975, accepted CVPR 2025. Minimalist: rectified flow lives in the LLM framework, no heavy architectural add-ons.
- Keeps decoupled understanding/generation encoders; representation alignment during unified training keeps the two paths from drifting.
- Claimed comparable to specialist generators and above other unified models.
- Parallel to Janus-Pro (data/model scale of AR Janus), not a replacement of the AR image-token path. Understanding remains autoregressive.

## Caveats

## Links

- arXiv: [2411.07975](https://arxiv.org/abs/2411.07975)
