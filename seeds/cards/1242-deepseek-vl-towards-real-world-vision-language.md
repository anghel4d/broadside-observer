---
title: "DeepSeek-VL: Towards Real-World Vision-Language Understanding"
authors:
  - "Haoyu Lu"
  - "Wen Liu"
  - "Bo Zhang"
  - "Bingxuan Wang"
  - "Kai Dong"
  - "Bo Liu"
  - "Jingxiang Sun"
  - "Tongzheng Ren"
  - "Zhuoshu Li"
  - "Hao Yang"
  - "Yaofeng Sun"
  - "Chengqi Deng"
  - "Hanwei Xu"
  - "Zhenda Xie"
  - "Chong Ruan"
year: 2024
venue: "arXiv:cs.AI"
arxiv: "2403.05525"
doi: null
source: "https://arxiv.org/abs/2403.05525"
topics:
  - "vision-language"
  - "multimodal"
  - "deepseek"
seed_rank: 1242
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
  - title: "DeepSeek LLM: Scaling Open-Source Language Models with Longtermism"
    url: "https://arxiv.org/abs/2401.02954"
    year: 2024
    arxiv: "2401.02954"
    card: "1238-deepseek-llm-scaling-open-source-language-models"
---

# DeepSeek-VL: Towards Real-World Vision-Language Understanding

## One-sentence takeaway

1.3B/7B VL models with a hybrid high-res vision encoder (1024²) and a pretrain recipe that tries not to wreck the LLM while adding vision.

## Why it matters here

First DeepSeek multimodal. OCR/screenshots/PDFs matter for agent perception; VL2 and Janus supersede the architecture.

## Key ideas

- arXiv:2403.05525. Hybrid vision encoder for 1024×1024 with relatively low overhead.
- Data: web screenshots, PDFs, OCR, charts, knowledge content; instruction-tuning taxonomy from real user scenarios.
- They start LLM training from the beginning of VL pretrain to keep language ability from collapsing.
- 1.3B and 7B released; claimed competitive VL benches at size while holding language benches.

## Caveats

- Understanding-only; Janus (1249) is the unified understand+generate fork.
- Dense LLM backbone; VL2 switches to DeepSeekMoE + MLA.

## Links

- arXiv: [2403.05525](https://arxiv.org/abs/2403.05525)
- GitHub: https://github.com/deepseek-ai/DeepSeek-VL
