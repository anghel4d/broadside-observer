---
title: "MultiHop-RAG: Benchmarking Retrieval-Augmented Generation for Multi-Hop Queries"
authors:
  - "Yixuan Tang"
  - "Yi Yang"
year: 2024
venue: "arXiv:cs.CL"
arxiv: "2401.15391"
doi: null
source: "https://arxiv.org/abs/2401.15391"
topics:
  - rag
  - retrieval
  - provenance
seed_rank: 247
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
  - title: "Auto-Dreamer: Learning Offline Memory Consolidation for Language Agents"
    url: "https://arxiv.org/abs/2605.20616"
    year: 2026
    arxiv: "2605.20616"
    doi: null
  - title: "Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks"
    url: "https://arxiv.org/abs/2005.11401"
    year: 2020
    arxiv: "2005.11401"
    doi: null
see:
  - "008-retrieval-augmented-generation-for-knowledge-intensive-nlp-t"
---

# MultiHop-RAG: Benchmarking Retrieval-Augmented Generation for Multi-Hop Queries

## One-sentence takeaway

Retrieval-augmented generation (RAG) augments large language models (LLM) by retrieving relevant knowledge, showing promising potential in mitigating LLM hallucinations and enhancing response quality, thereby facilitating the great adoption of LLMs in practice.

## Why it matters here

retrieval+evidence trails matter for Broadside provenance-rich digests (MultiHop-RAG: Benchmarking Retrieval-Augmented Generation for Multi-Hop Queries)

## Key ideas

- Retrieval-augmented generation (RAG) augments large language models (LLM) by retrieving relevant knowledge, showing promising potential in mitigating LLM hallucinations and enhancing response quality, thereby facilitating the great adoption of LLMs in practice.
- However, we find that existing RAG systems are inadequate in answering multi-hop queries, which require retrieving and reasoning over multiple pieces of supporting evidence.
- Furthermore, to our knowledge, no existing RAG benchmarking dataset focuses on multi-hop queries.
- In this paper, we develop a novel dataset, MultiHop-RAG, which consists of a knowledge base, a large collection of multi-hop queries, their ground-truth answers, and the associated supporting evidence.
- We detail the procedure of building the dataset, utilizing an En

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2401.15391](https://arxiv.org/abs/2401.15391)
- URL: https://arxiv.org/abs/2401.15391
