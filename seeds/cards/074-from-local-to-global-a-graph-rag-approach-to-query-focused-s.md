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
  - title: "Efficient Memory Management for Large Language Model Serving with PagedAttention"
    url: "https://arxiv.org/abs/2309.06180"
    year: 2023
    arxiv: "2309.06180"
    doi: null
  - title: "A Survey on Long-Term Memory Security in LLM Agents: Attacks, Defenses, and Governance Across the Memory Lifecycle"
    url: "https://arxiv.org/abs/2604.16548"
    year: 2026
    arxiv: "2604.16548"
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

# From Local to Global: A Graph RAG Approach to Query-Focused Summarization

## One-sentence takeaway

The use of retrieval-augmented generation (RAG) to retrieve relevant information from an external knowledge source enables large language models (LLMs) to answer questions over private and/or previously unseen document collections.

## Why it matters here

retrieval+evidence trails matter for Broadside provenance-rich digests (From Local to Global: A Graph RAG Approach to Query-Focused Summarization)

## Key ideas

- The use of retrieval-augmented generation (RAG) to retrieve relevant information from an external knowledge source enables large language models (LLMs) to answer questions over private and/or previously unseen document collections.
- However, RAG fails on global questions directed at an entire text corpus, such as "What are the main themes in the dataset?", since this is inherently a query-focused summarization (QFS) task, rather than an explicit retrieval task.
- Prior QFS methods, meanwhile, do not scale to the quantities of text indexed by typical RAG systems.
- To combine the strengths of these contrasting methods, we propose GraphRAG, a graph-based approach to question answering over private text corpora that scales with both the generality of user questions and the quantity of source text.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2404.16130](https://arxiv.org/abs/2404.16130)
- URL: https://arxiv.org/abs/2404.16130
