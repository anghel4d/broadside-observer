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
seed_rank: 186
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

CRAG inserts a lightweight retrieval evaluator that grades the retrieved set and then triggers one of several actions — use, refine, or fall back to web search — before generation.

## Why it matters here

Broadside cannot assume the first retrieval is right. An evaluator-gated corrective step, plus decompose-then-recompose of the documents that survive, is the robustness pattern for provenance-rich digests.

## Key ideas

- Vanilla RAG fails hard when the retrieved documents are irrelevant; the generator then hallucinates with extra confidence.
- A small evaluator returns a confidence that selects among knowledge actions rather than always concatenating the top-k.
- Static corpora are treated as incomplete, so large-scale web search is an explicit fallback action.
- A decompose-then-recompose pass keeps salient spans and drops irrelevant retrieved text.
- CRAG is plug-and-play on other RAG methods and is reported to help on four short- and long-form datasets.

## Caveats

## Links

- arXiv: [2401.15884](https://arxiv.org/abs/2401.15884)
