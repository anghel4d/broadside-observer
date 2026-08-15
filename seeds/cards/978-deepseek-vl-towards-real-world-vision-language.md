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
seed_rank: 978
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
  - title: "DeepSeek LLM: Scaling Open-Source Language Models with Longtermism"
    url: "https://arxiv.org/abs/2401.02954"
    year: 2024
    arxiv: "2401.02954"
see:
  - "013-attention-is-all-you-need"
  - "974-deepseek-llm-scaling-open-source-language-models"
---

# DeepSeek-VL: Towards Real-World Vision-Language Understanding

## One-sentence takeaway

Open 1.3B/7B vision-language models with a hybrid high-res encoder (1024×1024 at modest overhead), a real-user instruction-tuning taxonomy, and a pretrain recipe that keeps training the LLM from the start so language ability does not collapse when vision is added.

## Why it matters here

First DeepSeek multimodal. OCR, screenshots, PDFs, and charts are the agent-perception slice; VL2 and Janus later supersede the architecture, but the 'don't wreck the LLM' pretrain rule stays.

## Key ideas

- arXiv:2403.05525. Three design axes: diverse real-world data, a use-case taxonomy for instruction tuning, and a hybrid vision encoder that takes 1024² without a huge compute tax.
- Data includes web screenshots, PDFs, OCR, charts, and knowledge content — the documents an agent actually sees.
- They start LLM training from the beginning of VL pretrain and manage vision/language competition so language benches do not crater.
- Understanding-only; Janus is the unified understand+generate fork, VL2 switches the language backbone to DeepSeekMoE + MLA.

## Caveats

## Links

- arXiv: [2403.05525](https://arxiv.org/abs/2403.05525)
- GitHub: https://github.com/deepseek-ai/DeepSeek-VL
