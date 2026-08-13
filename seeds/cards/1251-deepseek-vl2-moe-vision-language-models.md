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
seed_rank: 1251
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
  - "1242-deepseek-vl-towards-real-world-vision-language"
  - "1243-deepseek-v2-economical-efficient-moe-language-model"
  - "1239-deepseekmoe-towards-ultimate-expert-specialization"
---

# DeepSeek-VL2: Mixture-of-Experts Vision-Language Models for Advanced Multimodal Understanding

## One-sentence takeaway

VL1's successor: dynamic-tiling high-res vision + DeepSeekMoE/MLA language backbone; Tiny/Small/VL2 at 1.0/2.8/4.5B activated.

## Why it matters here

Puts MLA+MoE under a VL model. Document/chart/OCR understanding is the agent-perception slice.

## Key ideas

- arXiv:2412.10302. Dynamic tiling vision encoder for high-res / odd aspect ratios.
- Language side: DeepSeekMoE + MLA (KV latent) for efficient inference.
- Three sizes: VL2-Tiny 1.0B act, Small 2.8B, VL2 4.5B. VQA, OCR, document/table/chart, visual grounding.
- Repo: https://github.com/deepseek-ai/DeepSeek-VL2

## Caveats

- Understanding-focused MoE VL, not the unified Janus generate path.
- Activated counts are small; this is not V3-scale vision.

## Links

- arXiv: [2412.10302](https://arxiv.org/abs/2412.10302)
- GitHub: https://github.com/deepseek-ai/DeepSeek-VL2
