---
title: "TEPA: Revoking Stale Memories for Conflict-Robust Language Agents"
authors:
  - "Yan Zhou"
  - "Yue Ouyang"
  - "Kaiyang Zheng"
  - "Suncheng Xiang"
year: 2026
venue: "arXiv:cs.AI"
arxiv: "2608.07429"
doi: null
source: "https://arxiv.org/abs/2608.07429"
topics:
  - provenance
  - rag
  - agent-memory
  - agent-eval
  - harness
seed_rank: 199
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 8
cites:
  - title: "Auto-Dreamer: Learning Offline Memory Consolidation for Language Agents"
    url: "https://arxiv.org/abs/2605.20616"
    year: 2026
    arxiv: "2605.20616"
    doi: null
    card: "054-auto-dreamer-learning-offline-memory-consolidation-for-langu"
  - title: "Infini Memory: Maintainable Topic Documents for Long-Term LLM Agent Memory"
    url: "https://arxiv.org/abs/2606.10677"
    year: 2026
    arxiv: "2606.10677"
    doi: null
    card: "065-infini-memory-maintainable-topic-documents-for-long-term-llm"
  - title: "TRUSTMEM: Learning Trustworthy Memory Consolidation for LLM Agents with Long-Term Memory"
    url: "https://arxiv.org/abs/2606.25161"
    year: 2026
    arxiv: "2606.25161"
    doi: null
    card: "077-trustmem-learning-trustworthy-memory-consolidation-for-llm-a"
---

# TEPA: Revoking Stale Memories for Conflict-Robust Language Agents

## One-sentence takeaway

Long-term memory enables language agents to reuse past facts, preferences, and task experience.

## Why it matters here

memory hierarchy/paging maps to provenance-first agent memory and ECS state; retrieval+evidence trails matter for Broadside provenance-rich digests (TEPA: Revoking Stale Memories for Conflict-Robust Language Agents)

## Key ideas

- Long-term memory enables language agents to reuse past facts, preferences, and task experience.
- Persistence also creates a central falsifiability problem: when the world changes, stale memories can remain retrievable and pollute the prompt.
- We characterize this failure mode as memory pollution: degradation caused by active memories that newer conflicting evidence has superseded.
- We introduce TEPA, a revocable evidence-memory mechanism that makes validity an explicit state of memory.
- TEPA represents observations as keyed precedents and revokes active precedents when fresh evidence contradicts them under the same key, allowing retrieval to draw from current evidence while preserving revoked history for audit.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2608.07429](https://arxiv.org/abs/2608.07429)
- URL: https://arxiv.org/abs/2608.07429
