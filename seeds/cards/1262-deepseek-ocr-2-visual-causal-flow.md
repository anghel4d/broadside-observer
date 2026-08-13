---
title: "DeepSeek-OCR 2: Visual Causal Flow"
authors:
  - "Haoran Wei"
  - "Yaofeng Sun"
  - "Yukun Li"
year: 2026
venue: "arXiv:cs.CV"
arxiv: "2601.20552"
doi: null
source: "https://arxiv.org/abs/2601.20552"
topics:
  - "ocr"
  - "causal-flow"
  - "deepseek"
seed_rank: 1262
seed_batch: "deepseek-lab-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 7
lineage: deepseek
cites:
  - title: "DeepSeek-OCR: Contexts Optical Compression"
    url: "https://arxiv.org/abs/2510.18234"
    year: 2025
    arxiv: "2510.18234"
    card: "1257-deepseek-ocr-contexts-optical-compression"
---

# DeepSeek-OCR 2: Visual Causal Flow

## One-sentence takeaway

DeepEncoder V2 reorders visual tokens by semantics before the LLM — two cascaded 1D causal reasoners instead of raster-scan 2D, aiming at layout-aware OCR.

## Why it matters here

Follow-on to optical compression (1257): the encoder itself becomes a causal reorderer. Layout-heavy agent perception (UI, docs, sheets).

## Key ideas

- arXiv:2601.20552. Conventional VLMs feed vision tokens in raster order with fixed PE; humans scan by structure.
- DeepEncoder V2 dynamically reorders visual tokens from image semantics, then the LLM reads that 1D causal stream.
- Thesis: 2D understanding via two cascaded 1D causal structures. Weights: https://github.com/deepseek-ai/DeepSeek-OCR-2

## Caveats

- Exploratory encoder paper; not a general VLM replacement.
- Causal reorder is learned — failure modes on adversarial layouts are open.

## Links

- arXiv: [2601.20552](https://arxiv.org/abs/2601.20552)
- GitHub: https://github.com/deepseek-ai/DeepSeek-OCR-2
