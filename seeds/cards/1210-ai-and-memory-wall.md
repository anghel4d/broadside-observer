---
title: "AI and Memory Wall"
authors:
  - "Amir Gholami"
  - "Zhewei Yao"
  - "Sehoon Kim"
  - "Coleman Hooper"
  - "Michael W. Mahoney"
  - "Kurt Keutzer"
year: 2024
venue: "IEEE Micro"
arxiv: "2403.14123"
doi: null
source: "https://arxiv.org/abs/2403.14123"
topics:
  - "memory-wall"
  - "llm-serving"
  - "bandwidth"
seed_rank: 1210
seed_batch: "user-add-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 8
lineage: categorical-deep-learning
cites:
  - title: "Attention Is All You Need"
    url: "https://arxiv.org/abs/1706.03762"
    year: 2017
    arxiv: "1706.03762"
  - title: "FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness"
    url: "https://arxiv.org/abs/2205.14135"
    year: 2022
    arxiv: "2205.14135"
see:
  - "014-attention-is-all-you-need"
  - "105-flashattention-fast-and-memory-efficient-exact-attention-wit"
---

# AI and Memory Wall

## One-sentence takeaway

FLOPS have scaled ~3.0×/2yr vs DRAM ~1.6× and interconnect ~1.4× — decoder Transformers are memory-bandwidth bound, so architecture/training/serving have to change.

## Why it matters here

Why FlashAttention-style IO-awareness (and Weaves' weaves/tiling) exists: the wall is memory, not matmuls. Agent serving cares.

## Key ideas

- IEEE Micro; arXiv:2403.14123 (RiseLab line, earlier 2021 essay).
- Encoder vs decoder: decoders especially hit the bandwidth wall.
- Prescription: redesign models, training, and deployment around memory, not peak FLOPS.

## Caveats

- Systems/architecture essay, not categorical. Weaves cites it as motivation for IO-aware algebra.

## Links

- arXiv: [2403.14123](https://arxiv.org/abs/2403.14123)
