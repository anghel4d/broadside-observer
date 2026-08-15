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
seed_rank: 974
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
  - "013-attention-is-all-you-need"
  - "954-glu-variants-improve-transformer"
---

# DeepSeek LLM: Scaling Open-Source Language Models with Longtermism

## One-sentence takeaway

DeepSeek's first dense stack: 7B and 67B Transformers trained on a continuously expanding 2T-token corpus under in-house scaling laws, then SFT+DPO chat variants that they report above Llama-2 70B on code/math/reasoning and above GPT-3.5 on open-ended evals.

## Why it matters here

Origin of the DeepSeek line Broadside already holds as V3. The scaling-law fit, tokenizer, data pipeline, and alignment stack are what later MoE/MLA reports assume rather than re-derive.

## Key ideas

- arXiv:2401.02954. Published scaling curves disagreed; they re-fit laws for the two open-source sizes (7B, 67B) and used those fits to set the training budget.
- Pretrain corpus described as 2T tokens and still growing; architecture is a dense Transformer (SwiGLU-class FFN), not MoE and not MLA.
- Chat models: SFT then DPO on the Base checkpoints. 67B claimed above Llama-2 70B especially on code, math, and reasoning.
- Dense ancestor of DeepSeekMoE / V2 / V3 — later papers reuse tokenizer, data pipeline, and alignment rather than starting over.

## Caveats

## Links

- arXiv: [2401.02954](https://arxiv.org/abs/2401.02954)
- GitHub: https://github.com/deepseek-ai/DeepSeek-LLM
