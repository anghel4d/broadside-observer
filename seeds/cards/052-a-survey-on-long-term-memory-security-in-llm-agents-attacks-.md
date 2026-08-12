---
title: "A Survey on Long-Term Memory Security in LLM Agents: Attacks, Defenses, and Governance Across the Memory Lifecycle"
authors:
  - "Zehao Lin"
  - "Xixuan Hao"
  - "Renyu Fu"
  - "Shaobo Cui"
  - "Kai Chen"
  - "Chunyu Li"
  - "Zhiyu Li"
  - "Feiyu Xiong"
year: 2026
venue: "arXiv:cs.CR"
arxiv: "2604.16548"
doi: null
source: "https://arxiv.org/abs/2604.16548"
topics:
  - rag
  - retrieval
  - provenance
  - agent-memory
seed_rank: 52
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 9
---

# A Survey on Long-Term Memory Security in LLM Agents: Attacks, Defenses, and Governance Across the Memory Lifecycle

## One-sentence takeaway

The emergence of writable, cross-session persistent memory in LLM agents introduces a qualitatively different threat landscape from conventional input-centric security concerns, characterized by three properties: persistence, statefulness, and propagation.

## Why it matters here

memory hierarchy/paging maps to provenance-first agent memory and ECS state; retrieval+evidence trails matter for Broadside provenance-rich digests (A Survey on Long-Term Memory Security in LLM Agents: Attacks, Defenses, and Governance Acr)

## Key ideas

- The emergence of writable, cross-session persistent memory in LLM agents introduces a qualitatively different threat landscape from conventional input-centric security concerns, characterized by three properties: persistence, statefulness, and propagation.
- To systematically characterize this landscape, we propose a Memory Lifecycle Framework that organizes attacks, defenses, and their cross-phase dependencies along two axes: six lifecycle phases (Write, Store, Retrieve, Execute, Share & Propagate, Forget & Rollback) and four security objectives (Integrity, Confidentiality, Availability, Governance).
- This analysis in turn exposes the need for formal security guarantees at the system level, motivating Verifiable Memory Governance(VMG), a framework of five architectural primitives that specif

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2604.16548](https://arxiv.org/abs/2604.16548)
- URL: https://arxiv.org/abs/2604.16548
