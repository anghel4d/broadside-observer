---
title: "GRC: Unifying Reasoning-Driven Generation, Retrieval and Compression"
authors:
  - "Zhongtao Miao"
  - "Qiyu Wu"
  - "Yoshimasa Tsuruoka"
year: 2026
venue: "arXiv:cs.CL"
arxiv: "2605.09100"
doi: null
source: "https://arxiv.org/abs/2605.09100"
topics:
  - rag
  - retrieval
  - kv-serving
  - inference-systems
  - skills
  - continual-agents
seed_rank: 57
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 9
cites:
  - title: "Efficient Memory Management for Large Language Model Serving with PagedAttention"
    url: "https://arxiv.org/abs/2309.06180"
    year: 2023
    arxiv: "2309.06180"
    doi: null
  - title: "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks"
    url: "https://arxiv.org/abs/2005.11401"
    year: 2020
    arxiv: "2005.11401"
    doi: null
see:
  - "002-efficient-memory-management-for-large-language-model-serving"
  - "008-retrieval-augmented-generation-for-knowledge-intensive-nlp-t"
---

# GRC: Unifying Reasoning-Driven Generation, Retrieval and Compression

## One-sentence takeaway

GRC trains generation, reasoning-enhanced embedding, and context compression into one forward pass via meta latent tokens, then serves them with hybrid paged attention.

## Why it matters here

Ano RAG and Broadside digest pipelines currently train and deploy embedders, generators, and compressors separately; GRC is a single-pass alternative with O(1)-length latent memory as updatable KV.

## Key ideas

- Separate embedding and generative training wastes data and multiplies deployment surfaces; context compression is the missing third task for long-horizon agents.
- Trained models keep LEGO-style modularity at inference while accomplishing all three objectives in one pass, tripling data utilization during training.
- Self-reason-latent embeds are a new embedding style; latent memory-augmented generation uses compressed, internalized KV of O(1) length as writable memory.
- Hybrid paged attention speeds the resulting mixed generation/retrieval/compression traffic.
- Experiments cover reasoning-intensive retrieval, generative tasks, document compression, latency, and RAG settings.

## Caveats

## Links

- arXiv: [2605.09100](https://arxiv.org/abs/2605.09100)
- PDF: https://arxiv.org/pdf/2605.09100
