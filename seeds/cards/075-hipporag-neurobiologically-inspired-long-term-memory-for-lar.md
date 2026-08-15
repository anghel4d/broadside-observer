---
title: "HippoRAG: Neurobiologically Inspired Long-Term Memory for Large Language Models"
authors:
  - "Bernal Jiménez Gutiérrez"
  - "Yiheng Shu"
  - "Yu Gu"
  - "Michihiro Yasunaga"
  - "Yu Su"
year: 2024
venue: "NeurIPS"
arxiv: "2405.14831"
doi: null
source: "https://arxiv.org/abs/2405.14831"
topics:
  - rag
  - retrieval
  - agent-memory
  - skills
  - continual-agents
seed_rank: 75
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
  - title: "From Local to Global: A Graph RAG Approach to Query-Focused Summarization"
    url: "https://arxiv.org/abs/2404.16130"
    year: 2024
    arxiv: "2404.16130"
    doi: null
see:
  - "008-retrieval-augmented-generation-for-knowledge-intensive-nlp-t"
  - "074-from-local-to-global-a-graph-rag-approach-to-query-focused-s"
---

# HippoRAG: Neurobiologically Inspired Long-Term Memory for Large Language Models

## One-sentence takeaway

HippoRAG builds a knowledge graph over new experiences and retrieves with Personalized PageRank, mimicking hippocampal indexing so multi-hop integration does not require iterative retrieval.

## Why it matters here

Ano long-term memory and Broadside corpus integration need single-step multi-hop retrieval that stays cheap as the store grows; HippoRAG is that hippocampal-index pattern.

## Key ideas

- Even RAG-equipped LLMs struggle to integrate large amounts of post-pretrain experience without catastrophic forgetting or expensive multi-step retrieval.
- LLMs play the neocortical role (schema/knowledge), the KG plus Personalized PageRank play the hippocampal index.
- On multi-hop QA, HippoRAG beats then-SOTA RAG methods by up to 20%.
- Single-step HippoRAG matches or beats iterative IRCoT while being 10–30× cheaper and 6–13× faster; composing the two still helps.
- Code and data: https://github.com/OSU-NLP-Group/HippoRAG.

## Caveats

## Links

- arXiv: [2405.14831](https://arxiv.org/abs/2405.14831)
- PDF: https://arxiv.org/pdf/2405.14831
- Code: https://github.com/OSU-NLP-Group/HippoRAG
