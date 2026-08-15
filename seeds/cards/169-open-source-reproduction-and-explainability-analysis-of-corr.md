---
title: "Open-Source Reproduction and Explainability Analysis of Corrective Retrieval Augmented Generation"
authors:
  - "Surya Vardhan Yalavarthi"
year: 2026
venue: "arXiv:cs.IR"
arxiv: "2603.16169"
doi: null
source: "https://arxiv.org/abs/2603.16169"
topics:
  - rag
  - retrieval
seed_rank: 169
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 8
cites:
  - title: "A Survey on Long-Term Memory Security in LLM Agents: Attacks, Defenses, and Governance Across the Memory Lifecycle"
    url: "https://arxiv.org/abs/2604.16548"
    year: 2026
    arxiv: "2604.16548"
    doi: null
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

# Open-Source Reproduction and Explainability Analysis of Corrective Retrieval Augmented Generation

## One-sentence takeaway

Yalavarthi rebuilds CRAG with Wikipedia search and Phi-3 instead of Google and LLaMA-2, matches the original scores, and uses SHAP to show the T5 retrieval evaluator mostly checks named-entity overlap.

## Why it matters here

Broadside cannot ship a corrective RAG loop that depends on a closed search API, and it should not trust a retrieval evaluator whose “confidence” is entity string match. This paper names both failure modes with an open pipeline.

## Key ideas

- The original CRAG stack uses proprietary web search and closed generator weights; the reproduction swaps in the Wikipedia API and Phi-3-mini-4k-instruct.
- On PopQA and ARC-Challenge the open pipeline is reported as comparable to the original CRAG numbers.
- SHAP analysis of the T5 retrieval evaluator shows it relies primarily on named-entity alignment, not semantic similarity.
- Domain transfer fails on science questions, which the author flags as a key evaluator failure mode.
- Code and results are published at the accompanying GitHub reproduction repository.

## Caveats

## Links

- arXiv: [2603.16169](https://arxiv.org/abs/2603.16169)
- Code: https://github.com/suryayalavarthi/crag-reproduction
