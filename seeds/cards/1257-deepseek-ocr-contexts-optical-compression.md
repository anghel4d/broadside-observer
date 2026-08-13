---
title: "DeepSeek-OCR: Contexts Optical Compression"
authors:
  - "Haoran Wei"
  - "Yaofeng Sun"
  - "Yukun Li"
year: 2025
venue: "arXiv:cs.CV"
arxiv: "2510.18234"
doi: null
source: "https://arxiv.org/abs/2510.18234"
topics:
  - "ocr"
  - "context-compression"
  - "deepseek"
seed_rank: 1257
seed_batch: "deepseek-lab-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 8
lineage: deepseek
cites:
  - title: "DeepSeek-VL2: Mixture-of-Experts Vision-Language Models for Advanced Multimodal Understanding"
    url: "https://arxiv.org/abs/2412.10302"
    year: 2024
    arxiv: "2412.10302"
  - title: "DeepSeek-V3 Technical Report"
    url: "https://arxiv.org/abs/2412.19437"
    year: 2025
    arxiv: "2412.19437"
see:
  - "1251-deepseek-vl2-moe-vision-language-models"
  - "1206-deepseek-v3-technical-report"
---

# DeepSeek-OCR: Contexts Optical Compression

## One-sentence takeaway

Render text as images and decode with a tiny MoE: <10× optical compression at 97% OCR, a serious attempt at 2D long-context memory.

## Why it matters here

Context compression as vision — an agent-memory idea (pages in, tokens out). Production: 200k+ pages/day on one A100-40G.

## Key ideas

- arXiv:2510.18234. DeepEncoder + DeepSeek3B-MoE-A570M decoder. Encoder keeps activations low at high res while emitting few vision tokens.
- <10× compression (text tokens / vision tokens) → ~97% OCR; ~20× still ~60%.
- OmniDocBench: beats GOT-OCR2.0 at 100 vision tokens/page vs 256; beats MinerU2.0 at <800 vs 6000+ tokens/page.
- Framed as a probe of historical long-context compression and LLM memory forgetting.

## Caveats

- OCR accuracy is not general long-context LM quality. Optical compression is a research probe.
- Decoder is 3B-MoE, not V3.

## Links

- arXiv: [2510.18234](https://arxiv.org/abs/2510.18234)
- GitHub: https://github.com/deepseek-ai/DeepSeek-OCR
