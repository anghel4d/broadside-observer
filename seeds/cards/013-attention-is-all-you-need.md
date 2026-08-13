---
title: Attention Is All You Need
authors:
- Ashish Vaswani
- Noam Shazeer
- Niki Parmar
- Jakob Uszkoreit
- Llion Jones
- Aidan N. Gomez
- Lukasz Kaiser
- Illia Polosukhin
year: 2017
venue: arXiv:cs.CL
arxiv: '1706.03762'
doi: null
source: https://arxiv.org/abs/1706.03762
topics:
- transformer
- foundations
seed_rank: 13
seed_batch: prefill-2026-08-13
reviewed: '2026-08-13'
pool: agents
relevance_score: 10
cites:
- title: 'FlashAttention: Fast and Memory-Efficient Exact Attention with IO-Awareness'
  url: https://arxiv.org/abs/2205.14135
  year: 2022
  arxiv: '2205.14135'
  doi: null
- title: Language Models are Few-Shot Learners
  url: https://arxiv.org/abs/2005.14165
  year: 2020
  arxiv: '2005.14165'
  doi: null
see:
- "089-flashattention-fast-and-memory-efficient-exact-attention-wit"
- "093-language-models-are-few-shot-learners"
---

# Attention Is All You Need

## One-sentence takeaway

The dominant sequence transduction models are based on complex recurrent or convolutional neural networks in an encoder-decoder configuration.

## Why it matters here

foundational substrate for every LLM agent stack (Attention Is All You Need)

## Key ideas

- The dominant sequence transduction models are based on complex recurrent or convolutional neural networks in an encoder-decoder configuration.
- The best performing models also connect the encoder and decoder through an attention mechanism.
- We propose a new simple network architecture, the Transformer, based solely on attention mechanisms, dispensing with recurrence and convolutions entirely.
- Experiments on two machine translation tasks show these models to be superior in quality while being more parallelizable and requiring significantly less time to train.
- Our model achieves 28.4 BLEU on the WMT 2014 English-to-German translation task, improving over the existing best results, including ensembles by over 2 BLEU.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [1706.03762](https://arxiv.org/abs/1706.03762)
- URL: https://arxiv.org/abs/1706.03762
