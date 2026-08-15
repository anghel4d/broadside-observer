---
title: "GLU Variants Improve Transformer"
authors:
  - "Noam Shazeer"
year: 2020
venue: "arXiv:cs.LG"
arxiv: "2002.05202"
doi: null
source: "https://arxiv.org/abs/2002.05202"
topics:
  - "glu"
  - "swiglu"
  - "transformer-ffn"
seed_rank: 954
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
see:
  - "013-attention-is-all-you-need"
---

# GLU Variants Improve Transformer

## One-sentence takeaway

Shazeer replaces the Transformer FFN's single activation with a gated product of two linear maps (GLU / ReGLU / GEGLU / SwiGLU / bilinear) and, at matched parameter count, gets better T5 span-filling perplexity than ReLU, GELU, or Swish.

## Why it matters here

SwiGLU/GEGLU became the default FFN in later LLMs, including the DeepSeek stack Broadside tracks. It is also an elementwise gated product Weaves has to broadcast honestly: two projections, a pointwise nonlinearity, a Hadamard product, then the output map.

## Key ideas

- Classic GLU (Dauphin et al.) is \(\sigma(xW)\otimes xV\); variants swap \(\sigma\) for ReLU, GELU, Swish, or no gate (bilinear).
- Three weight matrices instead of two, so \(d_{ff}\) is cut by \(2/3\) (3072 → 2048 in the T5-base replica) to hold FLOPs and params fixed.
- On C4 span-filling, GEGLU and SwiGLU win held-out log-perplexity at 65k and 524k steps; bilinear and ReGLU also beat ReLU/GELU/Swish.
- Fine-tuning on a GLUE/SuperGLUE/SQuAD mix is noisier but generally favors the GLU family; the note is empirical, not a theory of gating.

## Caveats

## Links

- arXiv: [2002.05202](https://arxiv.org/abs/2002.05202)
