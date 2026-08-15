---
title: "Dense Passage Retrieval for Open-Domain Question Answering"
authors:
  - "Vladimir Karpukhin"
  - "Barlas Oğuz"
  - "Sewon Min"
  - "Patrick Lewis"
  - "Ledell Wu"
  - "Sergey Edunov"
  - "Danqi Chen"
  - "Wen-tau Yih"
year: 2020
venue: "EMNLP"
arxiv: "2004.04906"
doi: null
source: "https://arxiv.org/abs/2004.04906"
topics:
  - rag
  - retrieval
seed_rank: 92
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 9
cites:
  - title: "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks"
    url: "https://arxiv.org/abs/2005.11401"
    year: 2020
    arxiv: "2005.11401"
    doi: null
  - title: "REALM: Retrieval-Augmented Language Model Pre-Training"
    url: "https://arxiv.org/abs/2002.08909"
    year: 2020
    arxiv: "2002.08909"
    doi: null
see:
  - "008-retrieval-augmented-generation-for-knowledge-intensive-nlp-t"
---

# Dense Passage Retrieval for Open-Domain Question Answering

## One-sentence takeaway

A dual-encoder trained on question–passage pairs retrieves with dense embeddings alone and beats Lucene-BM25 by 9–19 points of top-20 accuracy on open-domain QA.

## Why it matters here

Broadside and ano RAG still rest on this dual-encoder retrieval primitive: embed the query, embed the passages, MIPS the rest.

## Key ideas

- Open-domain QA had treated sparse TF-IDF/BM25 as the default first-stage retriever.
- Question and passage encoders are trained from a relatively small number of pairs; no sparse fallback is required at inference.
- Top-20 dense retrieval gains of 9%–19% absolute over a strong Lucene-BM25 baseline transfer into new end-to-end QA state of the art on multiple benchmarks.
- The method is a simple dual-encoder rather than a late-interaction or term-matching hybrid.
- EMNLP 2020.

## Caveats

## Links

- arXiv: [2004.04906](https://arxiv.org/abs/2004.04906)
- PDF: https://arxiv.org/pdf/2004.04906
