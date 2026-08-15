---
title: "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks"
authors:
  - "Patrick Lewis"
  - "Ethan Perez"
  - "Aleksandra Piktus"
  - "Fabio Petroni"
  - "Vladimir Karpukhin"
  - "Naman Goyal"
  - "Heinrich Küttler"
  - "Mike Lewis"
  - "Wen-tau Yih"
  - "Tim Rocktäschel"
  - "Sebastian Riedel"
  - "Douwe Kiela"
year: 2020
venue: "NeurIPS"
arxiv: "2005.11401"
doi: null
source: "https://arxiv.org/abs/2005.11401"
topics:
  - rag
  - retrieval
  - provenance
seed_rank: 8
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 10
cites:
  - title: "Dense Passage Retrieval for Open-Domain Question Answering"
    url: "https://arxiv.org/abs/2004.04906"
    year: 2020
    arxiv: "2004.04906"
    doi: null
  - title: "REALM: Retrieval-Augmented Language Model Pre-Training"
    url: "https://arxiv.org/abs/2002.08909"
    year: 2020
    arxiv: "2002.08909"
    doi: null
  - title: "BART: Denoising Sequence-to-Sequence Pre-training for Natural Language Generation, Translation, and Comprehension"
    url: "https://arxiv.org/abs/1910.13461"
    year: 2019
    arxiv: "1910.13461"
    doi: null
see:
  - "092-dense-passage-retrieval-for-open-domain-question-answering"
---

# Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks

## One-sentence takeaway

RAG pairs a frozen DPR Wikipedia index with a fine-tuned BART generator and marginalizes over retrieved passages — either one document per sequence or a different document per token — setting SOTA on three open-domain QA sets.

## Why it matters here

Broadside digests are RAG in production: parametric memory is stale, so claims need a non-parametric index you can inspect, swap, and cite. Provenance is the product, not a side effect.

## Key ideas

- Parametric LMs store facts in weights but cannot revise them or show sources; extractive retrieve-and-read models can, but only for span answers.
- RAG-Sequence conditions the whole output on the same top-k passages; RAG-Token may switch documents per generated token, which helps Jeopardy-style questions that fuse two facts.
- The document encoder and FAISS index stay frozen; only the query encoder and BART are fine-tuned, so the memory can be replaced when the world changes.
- On Natural Questions, WebQuestions, and CuratedTrec, unconstrained generation beats extractive DPR-style readers; generations are more specific and factual than a BART-only baseline.
- FEVER fact-check accuracy lands within 4.3% of heavily supervised retrieval pipelines without any evidence-span labels.

## Caveats

## Links

- arXiv: [2005.11401](https://arxiv.org/abs/2005.11401)
- PDF: https://arxiv.org/pdf/2005.11401
- NeurIPS: https://proceedings.neurips.cc/paper/2020/hash/6b493230205f780e1bc26945df7481e5-Abstract.html
