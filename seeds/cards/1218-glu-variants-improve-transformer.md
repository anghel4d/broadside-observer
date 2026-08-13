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
seed_rank: 1218
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
    card: "014-attention-is-all-you-need"
---

# GLU Variants Improve Transformer

## One-sentence takeaway

Replace Transformer FFN activations with GLU variants (including SwiGLU): a small gated product that became the default FFN in later LLMs.

## Why it matters here

An op Weaves has to broadcast elementwise. Also the FFN that DeepSeek-class models still sit on.

## Key ideas

- arXiv:2002.05202, 2020.
- GLU = componentwise product of two linear maps, one gated (sigmoid or variant).
- Empirically beats ReLU/GELU FFNs in Transformer seq2seq.

## Caveats

- Short empirical note, not a theory paper. No diagrams.

## Links

- arXiv: [2002.05202](https://arxiv.org/abs/2002.05202)
