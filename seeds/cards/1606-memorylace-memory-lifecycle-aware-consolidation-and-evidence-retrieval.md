---
title: "MemoryLACE: Memory Lifecycle-Aware Consolidation and Evidence Retrieval"
authors:
  - "Meriem Yacoubi"
  - "Pia Schmidt"
  - "Nenad Petrovic"
  - "Ahmed Frikha"
  - "Martin Kirchhoff"
  - "Alois Knoll"
year: 2026
venue: "arXiv:cs.CL"
arxiv: "2609.03201"
doi: null
source: "https://arxiv.org/abs/2609.03201"
topics:
  - "provenance-first-agent-memory"
  - "agentic-llm-serving"
  - "continual-skills"
seed_rank: 1606
seed_batch: "frontier-2026-09-06"
reviewed: "2026-09-06"
pool: "agents"
relevance_score: 10
lineage: agent-memory
cites:
  - title: "MemoryLACE: Memory Lifecycle-Aware Consolidation and Evidence Retrieval"
    url: "https://arxiv.org/abs/2609.03201"
    year: 2026
    arxiv: "2609.03201"
    doi: null
  - title: "Fresh Memory, Stale Plans: Dependency-Scoped Validation for Distributed LLM-Agent Memory"
    url: "https://arxiv.org/abs/2609.03340"
    year: 2026
    arxiv: "2609.03340"
    doi: null
see:
  - "1579-fresh-memory-stale-plans-dependency-scoped-validation-for-distributed"
  - "1541-agent-zero-memory-provenance-aware-long-term-memory-for-llm-agents"
  - "1018-correct-is-not-governed-provenance-integrity-in-agentic-workflows"
  - "108-memory-networks"
---
# MemoryLACE: Memory Lifecycle-Aware Consolidation and Evidence Retrieval

## One-sentence takeaway

MemoryLACE keeps atomic natural-language memories with explicit sparse merge/supersession/contradiction lifecycle edges and provenance — lighter than global memory graphs, richer than flat RAG stores.

## Why it matters here

Standing Broadside memory shelf needs provenance without OPS5-scale graph tax. MemoryLACE sits between Agent Zero Memory (1541) and Fresh Memory/Stale Plans (1579): lifecycle relations on atomic notes.

## Key ideas

- Problem: semantic retrieval alone leaves update/contradiction/history implicit; full graphs/reflection are heavy.
- Design: sparse lifecycle relations (merge, supersession, contradiction) over atomic NL memories with preserved provenance.
- Retrieval: evidence-aware consolidation rather than opaque summarization; unresolved contradictions stay visible.
- Positioning: textual-memory simplicity with structured lifecycle — aimed at long-term LLM agents.

## Caveats

- Framework paper; consolidation quality depends on relation-extraction reliability.
- Not a distributed stale-plan fence (that is 1579); complementary.
- LOCOMO-CONV (1607) benchmarks the conversational retrieval gap this design must still clear.

## Links

- arXiv: [2609.03201](https://arxiv.org/abs/2609.03201)
- PDF: https://arxiv.org/pdf/2609.03201
