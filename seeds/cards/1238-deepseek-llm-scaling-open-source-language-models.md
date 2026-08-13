---
title: "DeepSeek LLM: Scaling Open-Source Language Models with Longtermism"
authors:
  - "DeepSeek-AI"
year: 2024
venue: "arXiv:cs.CL"
arxiv: "2401.02954"
doi: null
source: "https://arxiv.org/abs/2401.02954"
topics:
  - "llm"
  - "scaling-laws"
  - "deepseek"
seed_rank: 1238
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
  - title: "GLU Variants Improve Transformer"
    url: "https://arxiv.org/abs/2002.05202"
    year: 2020
    arxiv: "2002.05202"
see:
  - "014-attention-is-all-you-need"
  - "1218-glu-variants-improve-transformer"
---

# DeepSeek LLM: Scaling Open-Source Language Models with Longtermism

## One-sentence takeaway

First DeepSeek dense stack: 7B/67B models trained on 2T tokens under in-house scaling laws, with SFT+DPO chat variants that beat Llama-2 70B on code/math.

## Why it matters here

The origin of the DeepSeek lab line Broadside already holds as V3 (1206). Scaling-law + alignment recipe that later MoE/MLA reports assume.

## Key ideas

- arXiv:2401.02954; 7B and 67B dense Transformers; 2T-token pretrain corpus described as continuously expanding.
- In-house scaling-law study for the two open-source sizes; they argue published scaling curves disagree and re-fit for their setup.
- Chat models via SFT then DPO; 67B claimed above Llama-2 70B on code, math, and reasoning, and above GPT-3.5 on open-ended evals.
- Dense ancestor of DeepSeekMoE / V2 / V3 — later papers reuse tokenizer, data pipeline, and alignment stack.

## Caveats

- Dense, not MoE; no MLA. Subsequent reports supersede the architecture.
- Benchmarks are 2023–24 vintage; treat numbers as historical, not current SOTA.

## Links

- arXiv: [2401.02954](https://arxiv.org/abs/2401.02954)
- GitHub: https://github.com/deepseek-ai/DeepSeek-LLM
