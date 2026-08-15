---
title: "DeepSeek-VL2: Mixture-of-Experts Vision-Language Models for Advanced Multimodal Understanding"
authors:
  - "Zhiyu Wu"
  - "Xiaokang Chen"
  - "Zizheng Pan"
  - "Xingchao Liu"
  - "Wen Liu"
  - "Damai Dai"
  - "Huazuo Gao"
  - "Yiyang Ma"
  - "Chengyue Wu"
  - "Bingxuan Wang"
  - "Zhenda Xie"
  - "Yu Wu"
  - "Kai Hu"
  - "Jiawei Wang"
  - "Yaofeng Sun"
  - "et al."
year: 2024
venue: "arXiv:cs.CV"
arxiv: "2412.10302"
doi: null
source: "https://arxiv.org/abs/2412.10302"
topics:
  - "vision-language"
  - "moe"
  - "mla"
  - "deepseek"
seed_rank: 987
seed_batch: "deepseek-lab-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 8
lineage: deepseek
cites:
  - title: "DeepSeek-VL: Towards Real-World Vision-Language Understanding"
    url: "https://arxiv.org/abs/2403.05525"
    year: 2024
    arxiv: "2403.05525"
  - title: "DeepSeek-V2: A Strong, Economical, and Efficient Mixture-of-Experts Language Model"
    url: "https://arxiv.org/abs/2405.04434"
    year: 2024
    arxiv: "2405.04434"
  - title: "DeepSeekMoE: Towards Ultimate Expert Specialization in Mixture-of-Experts Language Models"
    url: "https://arxiv.org/abs/2401.06066"
    year: 2024
    arxiv: "2401.06066"
see:
  - "978-deepseek-vl-towards-real-world-vision-language"
  - "979-deepseek-v2-economical-efficient-moe-language-model"
  - "975-deepseekmoe-towards-ultimate-expert-specialization"
---

# DeepSeek-VL2: Mixture-of-Experts Vision-Language Models for Advanced Multimodal Understanding

## One-sentence takeaway

VL1's successor puts a dynamic-tiling high-res vision encoder on a DeepSeekMoE + MLA language backbone, shipping Tiny/Small/VL2 at 1.0 / 2.8 / 4.5B activated parameters for VQA, OCR, documents, tables, charts, and visual grounding.

## Why it matters here

Puts MLA+MoE under a VL model. Document/chart/OCR understanding is the agent-perception slice for GRID COMMAND: odd aspect ratios and high-res pages without a dense 67B tax.

## Key ideas

- arXiv:2412.10302. Dynamic tiling adapts the vision encoder to high resolution and non-square aspect ratios instead of a fixed 1024² crop.
- Language side reuses DeepSeekMoE (fine experts + shared experts) and MLA (latent KV) for cheaper inference.
- Three sizes keep activated counts small: 1.0B / 2.8B / 4.5B. This is not V3-scale vision.
- Understanding-focused; Janus remains the unified understand+generate path.

## Caveats

## Links

- arXiv: [2412.10302](https://arxiv.org/abs/2412.10302)
- GitHub: https://github.com/deepseek-ai/DeepSeek-VL2
