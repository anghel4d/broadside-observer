---
title: "From Local to Global: A Graph RAG Approach to Query-Focused Summarization"
authors:
  - "Darren Edge"
  - "Ha Trinh"
  - "Newman Cheng"
  - "Joshua Bradley"
  - "Alex Chao"
  - "Apurva Mody"
  - "Steven Truitt"
  - "Dasha Metropolitansky"
  - "Robert Osazuwa Ness"
  - "Jonathan Larson"
year: 2024
venue: "arXiv:cs.CL"
arxiv: "2404.16130"
doi: null
source: "https://arxiv.org/abs/2404.16130"
topics:
  - rag
  - retrieval
seed_rank: 74
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
  - title: "Dense Passage Retrieval for Open-Domain Question Answering"
    url: "https://arxiv.org/abs/2004.04906"
    year: 2020
    arxiv: "2004.04906"
    doi: null
see:
  - "008-retrieval-augmented-generation-for-knowledge-intensive-nlp-t"
  - "092-dense-passage-retrieval-for-open-domain-question-answering"
---

# From Local to Global: A Graph RAG Approach to Query-Focused Summarization

## One-sentence takeaway

GraphRAG answers corpus-level questions by building an entity graph, pregenerating community summaries, then reducing those partial answers into a final response.

## Why it matters here

Broadside digest queries are often "what are the themes in this corpus?", which vanilla RAG cannot retrieve; GraphRAG is the query-focused summarization path over a private text store.

## Key ideas

- Standard RAG fails on global questions because they are QFS, not top-k retrieval; prior QFS methods do not scale to RAG-sized corpora.
- Stage one extracts an entity knowledge graph from source documents; stage two pregenerates summaries for communities of related entities.
- At query time each community summary produces a partial answer; those partials are summarized again for the user.
- On global sensemaking questions over ~1M-token datasets, GraphRAG beats conventional RAG on comprehensiveness and diversity.
- The method is aimed at private or previously unseen collections, not only public QA benchmarks.

## Caveats

## Links

- arXiv: [2404.16130](https://arxiv.org/abs/2404.16130)
- PDF: https://arxiv.org/pdf/2404.16130
