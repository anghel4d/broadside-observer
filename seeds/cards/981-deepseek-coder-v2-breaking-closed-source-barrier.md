---
title: "DeepSeek-Coder-V2: Breaking the Barrier of Closed-Source Models in Code Intelligence"
authors:
  - "DeepSeek-AI"
year: 2024
venue: "arXiv:cs.SE"
arxiv: "2406.11931"
doi: null
source: "https://arxiv.org/abs/2406.11931"
topics:
  - "code-llm"
  - "moe"
  - "deepseek"
seed_rank: 981
seed_batch: "deepseek-lab-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 8
lineage: deepseek
cites:
  - title: "Attention Is All You Need"
    url: "https://arxiv.org/abs/1706.03762"
    year: 2017
    arxiv: "1706.03762"
  - title: "DeepSeek-V2: A Strong, Economical, and Efficient Mixture-of-Experts Language Model"
    url: "https://arxiv.org/abs/2405.04434"
    year: 2024
    arxiv: "2405.04434"
  - title: "DeepSeek-Coder: When the Large Language Model Meets Programming — The Rise of Code Intelligence"
    url: "https://arxiv.org/abs/2401.14196"
    year: 2024
    arxiv: "2401.14196"
see:
  - "013-attention-is-all-you-need"
  - "979-deepseek-v2-economical-efficient-moe-language-model"
  - "976-deepseek-coder-when-the-llm-meets-programming"
---

# DeepSeek-Coder-V2: Breaking the Barrier of Closed-Source Models in Code Intelligence

## One-sentence takeaway

Continue-pretrains an intermediate DeepSeek-V2 checkpoint on +6T tokens into an MoE code model claimed comparable to GPT-4-Turbo on code, expanding language coverage 86→338 and context 16K→128K while holding general-language performance.

## Why it matters here

The code specialist sitting on V2 MLA/MoE. Coding-agent relevant for ano/GRID COMMAND; later V3/V3.2 absorb the capability rather than keeping a separate coder brand.

## Key ideas

- arXiv:2406.11931. Not a new architecture — MLA and DeepSeekMoE are inherited from V2.
- Continued pretrain jumps coding and math vs Coder-33B and vs the V2 generalist, without dropping general-language benches.
- 338 programming languages and 128K context are the product-facing deltas vs the dense Coder v1 line.
- Mid-2024 closed-source comparisons (GPT-4-Turbo, Claude 3 Opus, Gemini 1.5 Pro) are snapshots, not a standing ranking.

## Caveats

## Links

- arXiv: [2406.11931](https://arxiv.org/abs/2406.11931)
- GitHub: https://github.com/deepseek-ai/DeepSeek-Coder-V2
