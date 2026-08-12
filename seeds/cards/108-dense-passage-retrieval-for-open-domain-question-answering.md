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
seed_rank: 108
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 9
---

# Dense Passage Retrieval for Open-Domain Question Answering

## One-sentence takeaway

Open-domain question answering relies on efficient passage retrieval to select candidate contexts, where traditional sparse vector space models, such as TF-IDF or BM25, are the de facto method.

## Why it matters here

retrieval+evidence trails matter for Broadside provenance-rich digests (Dense Passage Retrieval for Open-Domain Question Answering)

## Key ideas

- Open-domain question answering relies on efficient passage retrieval to select candidate contexts, where traditional sparse vector space models, such as TF-IDF or BM25, are the de facto method.
- In this work, we show that retrieval can be practically implemented using dense representations alone, where embeddings are learned from a small number of questions and passages by a simple dual-encoder framework.
- When evaluated on a wide range of open-domain QA datasets, our dense retriever outperforms a strong Lucene-BM25 system largely by 9%-19% absolute in terms of top-20 passage retrieval accuracy, and helps our end-to-end QA system establish new state-of-the-art on multiple open-domain QA benchmarks.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2004.04906](https://arxiv.org/abs/2004.04906)
- URL: https://arxiv.org/abs/2004.04906
