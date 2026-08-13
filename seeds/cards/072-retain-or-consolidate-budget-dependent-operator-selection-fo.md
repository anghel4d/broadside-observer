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
cites:
  - title: "A Survey on Long-Term Memory Security in LLM Agents: Attacks, Defenses, and Governance Across the Memory Lifecycle"
    url: "https://arxiv.org/abs/2604.16548"
    year: 2026
    arxiv: "2604.16548"
    doi: null
    card: "052-a-survey-on-long-term-memory-security-in-llm-agents-attacks-"
  - title: "Auto-Dreamer: Learning Offline Memory Consolidation for Language Agents"
    url: "https://arxiv.org/abs/2605.20616"
    year: 2026
    arxiv: "2605.20616"
    doi: null
    card: "054-auto-dreamer-learning-offline-memory-consolidation-for-langu"
  - title: "Coupling Planning with Episodic Memory in LLM Agents for Software Issue Resolution"
    url: "https://arxiv.org/abs/2608.06811"
    year: 2026
    arxiv: "2608.06811"
    doi: null
    card: "059-coupling-planning-with-episodic-memory-in-llm-agents-for-sof"
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
