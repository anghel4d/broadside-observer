---
title: "Corrective Retrieval Augmented Generation"
authors:
  - "Shi-Qi Yan"
  - "Jia-Chen Gu"
  - "Yun Zhu"
  - "Zhen-Hua Ling"
year: 2024
venue: "arXiv:cs.CL"
arxiv: "2401.15884"
doi: null
source: "https://arxiv.org/abs/2401.15884"
topics:
  - rag
  - retrieval
seed_rank: 233
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 8
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

# Corrective Retrieval Augmented Generation

## One-sentence takeaway

Large language models (LLMs) inevitably exhibit hallucinations since the accuracy of generated texts cannot be secured solely by the parametric knowledge they encapsulate.

## Why it matters here

retrieval+evidence trails matter for Broadside provenance-rich digests (Corrective Retrieval Augmented Generation)

## Key ideas

- Large language models (LLMs) inevitably exhibit hallucinations since the accuracy of generated texts cannot be secured solely by the parametric knowledge they encapsulate.
- Although retrieval-augmented generation (RAG) is a practicable complement to LLMs, it relies heavily on the relevance of retrieved documents, raising concerns about how the model behaves if retrieval goes wrong.
- To this end, we propose the Corrective Retrieval Augmented Generation (CRAG) to improve the robustness of generation.
- Specifically, a lightweight retrieval evaluator is designed to assess the overall quality of retrieved documents for a query, returning a confidence degree based on which different knowledge retrieval actions can be triggered.
- Since retrieval from static and limited corpora can only return sub-opt

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2401.15884](https://arxiv.org/abs/2401.15884)
- URL: https://arxiv.org/abs/2401.15884
