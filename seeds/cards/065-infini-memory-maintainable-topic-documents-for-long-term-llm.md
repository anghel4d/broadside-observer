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
