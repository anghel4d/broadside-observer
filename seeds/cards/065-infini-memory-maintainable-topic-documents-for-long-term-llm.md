---
title: "Infini Memory: Maintainable Topic Documents for Long-Term LLM Agent Memory"
authors:
  - "Suozhao Ji"
  - "Baodong Wu"
  - "Zehao Wang"
  - "Lei Xia"
  - "Qingping Li"
  - "Ruisong Wang"
  - "Wenbo Ding"
  - "Zhenhua Zhu"
  - "Boxun Li"
  - "Guohao Dai"
  - "Yu Wang"
year: 2026
venue: "arXiv:cs.AI"
arxiv: "2606.10677"
doi: null
source: "https://arxiv.org/abs/2606.10677"
topics:
  - rag
  - retrieval
  - provenance
  - agent-memory
  - agent-eval
  - harness
seed_rank: 65
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 9
cites:
  - title: "Auto-Dreamer: Learning Offline Memory Consolidation for Language Agents"
    url: "https://arxiv.org/abs/2605.20616"
    year: 2026
    arxiv: "2605.20616"
    doi: null
    card: "054-auto-dreamer-learning-offline-memory-consolidation-for-langu"
  - title: "TRUSTMEM: Learning Trustworthy Memory Consolidation for LLM Agents with Long-Term Memory"
    url: "https://arxiv.org/abs/2606.25161"
    year: 2026
    arxiv: "2606.25161"
    doi: null
    card: "077-trustmem-learning-trustworthy-memory-consolidation-for-llm-a"
  - title: "Coupling Planning with Episodic Memory in LLM Agents for Software Issue Resolution"
    url: "https://arxiv.org/abs/2608.06811"
    year: 2026
    arxiv: "2608.06811"
    doi: null
    card: "059-coupling-planning-with-episodic-memory-in-llm-agents-for-sof"
---

# Infini Memory: Maintainable Topic Documents for Long-Term LLM Agent Memory

## One-sentence takeaway

Long-term LLM agents need persistent memory that can track changing facts and provide relevant evidence across sessions.

## Why it matters here

memory hierarchy/paging maps to provenance-first agent memory and ECS state; retrieval+evidence trails matter for Broadside provenance-rich digests (Infini Memory: Maintainable Topic Documents for Long-Term LLM Agent Memory)

## Key ideas

- Long-term LLM agents need persistent memory that can track changing facts and provide relevant evidence across sessions.
- Existing memory systems often store observations as isolated records, summaries, or indexed fragments, which makes evidence aggregation, fact revision, and memory maintenance difficult.
- We propose Infini Memory, a maintainable text-based persistent memory architecture that treats agent memory as topic-structured documents.
- Each topic document serves as a semantic unit for collecting related evidence, preserving metadata, and revising facts over time.
- New observations are first staged in a buffer and periodically consolidated into coherent textual contexts.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2606.10677](https://arxiv.org/abs/2606.10677)
- URL: https://arxiv.org/abs/2606.10677
