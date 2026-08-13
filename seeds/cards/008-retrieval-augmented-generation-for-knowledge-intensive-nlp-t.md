---
title: Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks
authors:
- Patrick Lewis
- Ethan Perez
- Aleksandra Piktus
- Fabio Petroni
- Vladimir Karpukhin
- Naman Goyal
- Heinrich Küttler
- Mike Lewis
- Wen-tau Yih
- Tim Rocktäschel
- Sebastian Riedel
- Douwe Kiela
year: 2020
venue: NeurIPS
arxiv: '2005.11401'
doi: null
source: https://arxiv.org/abs/2005.11401
topics:
- rag
- retrieval
- provenance
seed_rank: 8
seed_batch: prefill-2026-08-13
reviewed: '2026-08-13'
pool: agents
relevance_score: 10
cites:
- title: Dense Passage Retrieval for Open-Domain Question Answering
  url: https://arxiv.org/abs/2004.04906
  year: 2020
  arxiv: '2004.04906'
  doi: null
- title: 'Self-RAG: Learning to Retrieve, Generate, and Critique through Self-Reflection'
  url: https://arxiv.org/abs/2310.11511
  year: 2023
  arxiv: '2310.11511'
  doi: null
see:
- "092-dense-passage-retrieval-for-open-domain-question-answering"
- "085-self-rag-learning-to-retrieve-generate-and-critique-through-"
---

# Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks

## One-sentence takeaway

Large pre-trained language models have been shown to store factual knowledge in their parameters, and achieve state-of-the-art results when fine-tuned on downstream NLP tasks.

## Why it matters here

retrieval+evidence trails matter for Broadside provenance-rich digests (Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks)

## Key ideas

- Large pre-trained language models have been shown to store factual knowledge in their parameters, and achieve state-of-the-art results when fine-tuned on downstream NLP tasks.
- However, their ability to access and precisely manipulate knowledge is still limited, and hence on knowledge-intensive tasks, their performance lags behind task-specific architectures.
- Additionally, providing provenance for their decisions and updating their world knowledge remain open research problems.
- Pre-trained models with a differentiable access mechanism to explicit non-parametric memory can overcome this issue, but have so far been only investigated for extractive downstream tasks.
- We explore a general-purpose fine-tuning recipe for retrieval-augmented generation (RAG) -- models which combine pre-trained para

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2005.11401](https://arxiv.org/abs/2005.11401)
- URL: https://arxiv.org/abs/2005.11401
