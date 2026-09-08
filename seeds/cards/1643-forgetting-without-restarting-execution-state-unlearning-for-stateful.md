---
title: "Forgetting Without Restarting: Execution-State Unlearning for Stateful LLM Agents"
authors:
  - "Chao Yao"
  - "Yangbo Wei"
  - "Zhen Huang"
  - "Junhong Qian"
  - "Chenle Chen"
  - "Shaoqiang Lu"
  - "Chen Wu"
  - "Lei He"
year: 2026
venue: "arXiv"
arxiv: "2609.04875"
doi: null
source: "https://arxiv.org/abs/2609.04875"
topics:
  - "provenance-first-memory"
  - "kv-caching"
  - "agent-failure-localization"
seed_rank: 1643
seed_batch: "frontier-2026-09-08"
reviewed: "2026-09-08"
pool: "agents"
relevance_score: 10
lineage: execution-state-unlearning
cites:
  - title: "Fresh Memory, Stale Plans: Dependency-Scoped Validation for Distributed LLM-Agent Memory"
    url: "https://arxiv.org/abs/2609.03340"
    year: 2026
    arxiv: "2609.03340"
    doi: null
see:
  - "1541-agent-zero-memory-provenance-aware-long-term-memory-for-llm-agents"
  - "1078-aborted-but-not-forgotten-kv-cache-retention-breaks-rollback-consistency"
  - "1579-fresh-memory-stale-plans-dependency-scoped-validation-for-distributed"
  - "1606-memorylace-memory-lifecycle-aware-consolidation-and-evidence-retrieval"
  - "058-governing-evolving-memory-in-llm-agents-risks-mechanisms-and"
---

# Forgetting Without Restarting: Execution-State Unlearning for Stateful LLM Agents

## One-sentence takeaway

Deleting a plaintext memory record is not forgetting: execution-state unlearning must scrub summaries, pending tool plans, and the KV cache; Provenance-Guided Selective Replay attains the proven lower bound of T−τ+1 recomputed transitions as a cross-layer contract.

## Why it matters here

GDPR-style forget and campaign rollback for GRID COMMAND agents both need this. Today's "forget" APIs stop at the note store while KV and plans stay tainted — the same class of bug as Aborted-but-not-Forgotten (1078). Formal lower bound + cross-layer replay contract is the provenance-first answer MemoryLACE / Agent-Zero were missing.

## Key ideas

- Formalizes execution-state unlearning: after a forget request the agent must behave as if the target was never observed.
- Models the runtime as a deterministic transition system; proves the pre-target prefix is free, the post-target suffix is irreducibly tainted without token-level attribution.
- Exact unlearning requires at least T−τ+1 recomputed transitions (τ = injection step).
- Provenance-Guided Selective Replay hits that bound as a cross-layer contract spanning transcript, summaries, plans, and KV.
- Shows plaintext-only delete leaves every derived artifact intact — a false sense of erasure.

## Caveats

Exact unlearning cost scales with suffix length; approximate / scrubbing heuristics may be needed online. Assumes enough provenance to locate τ. Complementary to CONTINUITY-style security-context contracts (near-keeper this pass).

## Links

- arXiv: [2609.04875](https://arxiv.org/abs/2609.04875)
- PDF: https://arxiv.org/pdf/2609.04875
