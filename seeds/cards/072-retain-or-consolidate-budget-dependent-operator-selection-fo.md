---
title: "Retain or Consolidate? Budget-Dependent Operator Selection for Language Agent Memory"
authors:
  - "Qingcan Kang"
  - "Mingyang Liu"
  - "Shixiong Kai"
  - "Kaichao Liang"
  - "Zhentao Tang"
  - "Yuqi Cui"
  - "Tao Zhong"
  - "Mingxuan Yuan"
year: 2026
venue: "arXiv:cs.AI"
arxiv: "2607.17545"
doi: null
source: "https://arxiv.org/abs/2607.17545"
topics:
  - rag
  - retrieval
  - provenance
  - agent-memory
seed_rank: 72
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 9
---

# Retain or Consolidate? Budget-Dependent Operator Selection for Language Agent Memory

## One-sentence takeaway

Language agents depend on memory across interactions.

## Why it matters here

memory hierarchy/paging maps to provenance-first agent memory and ECS state; retrieval+evidence trails matter for Broadside provenance-rich digests (Retain or Consolidate? Budget-Dependent Operator Selection for Language Agent Memory)

## Key ideas

- Language agents depend on memory across interactions.
- However, the limited context windows of large language models (LLMs) and their inference costs constrain how much memory can be used at once.
- Existing systems mainly follow two strategies: memory retention and memory consolidation.
- Retention keeps raw records and preserves exact details, but relevant evidence may not fit under a tight budget; consolidation compresses and combines records, improving coverage per token but risking the loss of query-critical details.
- Neither strategy is universally preferable.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2607.17545](https://arxiv.org/abs/2607.17545)
- URL: https://arxiv.org/abs/2607.17545
