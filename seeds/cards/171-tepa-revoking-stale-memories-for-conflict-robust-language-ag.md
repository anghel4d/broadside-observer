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
seed_rank: 171
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
  - title: "Infini Memory: Maintainable Topic Documents for Long-Term LLM Agent Memory"
    url: "https://arxiv.org/abs/2606.10677"
    year: 2026
    arxiv: "2606.10677"
    doi: null
  - title: "TRUSTMEM: Learning Trustworthy Memory Consolidation for LLM Agents with Long-Term Memory"
    url: "https://arxiv.org/abs/2606.25161"
    year: 2026
    arxiv: "2606.25161"
    doi: null
---

# TEPA: Revoking Stale Memories for Conflict-Robust Language Agents

## One-sentence takeaway

TEPA makes memory validity an explicit state: keyed precedents are revoked when newer evidence contradicts them, so retrieval cannot keep serving superseded facts.

## Why it matters here

Broadside digests and GRID COMMAND observer memory must be able to retract. Append-only and last-write-wins both fail under reversal; a revoked-but-auditable precedent is the provenance primitive.

## Key ideas

- Memory pollution is defined as active, still-retrievable memories that newer conflicting evidence has superseded.
- Observations are stored as keyed precedents; a contradiction under the same key revokes the old precedent without deleting the audit history.
- Retrieval reads only currently valid evidence; revoked items remain inspectable and can later be re-promoted.
- In controlled hidden-regime drift and file-backed executable drift, append-only and last-write-wins fall below a no-memory baseline on full reversal, while TEPA stays near 0.95.
- On clean single-hop MemoryAgentBench, TEPA matches last-write-wins; multi-hop and very long context still fail for retrieval-chain reasons beyond fact-level validity.

## Caveats

## Links

- arXiv: [2608.07429](https://arxiv.org/abs/2608.07429)
