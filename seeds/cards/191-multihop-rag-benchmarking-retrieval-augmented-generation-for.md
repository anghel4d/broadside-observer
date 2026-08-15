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
seed_rank: 191
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

MultiHop-RAG is a news-corpus RAG benchmark whose queries need several supporting passages; existing retrievers and GPT-4/PaLM/Llama2-70B all score poorly once the evidence chain is longer than one hop.

## Why it matters here

Broadside digests are multi-hop by construction: a claim, a citation, a contradiction. This dataset is the cheap filter for whether a RAG stack can retrieve and then reason over a chain, not a single snippet.

## Key ideas

- Standard RAG benchmarks do not focus on queries that require multiple pieces of evidence.
- The release includes a knowledge base (English news), multi-hop queries, gold answers, and supporting evidence, plus a documented construction procedure.
- Experiment one compares embedding models as retrievers of that evidence; experiment two gives gold or retrieved evidence to GPT-4, PaLM, and Llama2-70B.
- Both retrieval and answer quality are reported as unsatisfactory for current RAG methods on this distribution.
- Dataset and a reference RAG system are public at the MultiHop-RAG GitHub repository.

## Caveats

## Links

- arXiv: [2401.15391](https://arxiv.org/abs/2401.15391)
- Dataset: https://github.com/yixuantt/MultiHop-RAG/
