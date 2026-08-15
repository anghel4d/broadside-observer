---
title: "Attention Is All You Need"
authors:
  - "Ashish Vaswani"
  - "Noam Shazeer"
  - "Niki Parmar"
  - "Jakob Uszkoreit"
  - "Llion Jones"
  - "Aidan N. Gomez"
  - "Lukasz Kaiser"
  - "Illia Polosukhin"
year: 2017
venue: "NeurIPS"
arxiv: "1706.03762"
doi: null
source: "https://arxiv.org/abs/1706.03762"
topics:
  - transformer
  - foundations
seed_rank: 13
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 10
cites:
  - title: "Neural Machine Translation by Jointly Learning to Align and Translate"
    url: "https://arxiv.org/abs/1409.0473"
    year: 2015
    arxiv: "1409.0473"
    doi: null
  - title: "Language Models are Few-Shot Learners"
    url: "https://arxiv.org/abs/2005.14165"
    year: 2020
    arxiv: "2005.14165"
    doi: null
see:
  - "093-language-models-are-few-shot-learners"
---

# Attention Is All You Need

## One-sentence takeaway

The Transformer drops recurrence and convolution entirely: stacked multi-head self-attention plus position encodings trains WMT En–De to 28.4 BLEU in a fraction of the GPU-days of the previous SOTA.

## Why it matters here

Every Broadside agent, every AlphaStar policy head, and every later FlashAttention paper sits on this block. Understanding QKV, masking, and why recurrence died is prerequisite, not trivia.

## Key ideas

- Encoder–decoder RNNs and convs were sequential in depth or time; attention was only a bridge. Here attention is the layer.
- Multi-head self-attention lets each position mix information from the whole sequence in O(1) sequential steps, with heads specializing (syntax vs long-range).
- Positional encodings (sinusoids in the paper) inject order because the model has no recurrence.
- WMT 2014 En–De 28.4 BLEU (>+2 over prior ensembles); En–Fr 41.8 BLEU after 3.5 days on eight GPUs.
- The same architecture transfers to English constituency parsing with both large and limited data, which is why it escaped MT.

## Caveats

## Links

- arXiv: [1706.03762](https://arxiv.org/abs/1706.03762)
- PDF: https://arxiv.org/pdf/1706.03762
