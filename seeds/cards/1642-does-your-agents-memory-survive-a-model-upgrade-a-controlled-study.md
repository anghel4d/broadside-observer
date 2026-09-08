---
title: "Does Your Agent's Memory Survive a Model Upgrade? A Controlled Study of Memory Portability"
authors:
  - "Ankit Goyal"
  - "Jaideep Ray"
year: 2026
venue: "arXiv"
arxiv: "2609.05339"
doi: null
source: "https://arxiv.org/abs/2609.05339"
topics:
  - "provenance-first-memory"
  - "continual-skills"
  - "agent-failure-localization"
seed_rank: 1642
seed_batch: "frontier-2026-09-08"
reviewed: "2026-09-08"
pool: "agents"
relevance_score: 10
lineage: memory-portability-across-models
cites:
  - title: "MemoryLACE: Memory Lifecycle-Aware Consolidation and Evidence Retrieval"
    url: "https://arxiv.org/abs/2609.03201"
    year: 2026
    arxiv: "2609.03201"
    doi: null
see:
  - "1541-agent-zero-memory-provenance-aware-long-term-memory-for-llm-agents"
  - "1543-runtime-independent-persistent-agents-preserving-identity-memory-and-c"
  - "1606-memorylace-memory-lifecycle-aware-consolidation-and-evidence-retrieval"
  - "1579-fresh-memory-stale-plans-dependency-scoped-validation-for-distributed"
  - "069-a-mem-agentic-memory-for-llm-agents"
---

# Does Your Agent's Memory Survive a Model Upgrade? A Controlled Study of Memory Portability

## One-sentence takeaway

Keeping the same memory store across a model upgrade is not enough: fixed-schema knowledge graphs transfer reliably (Δacc ≈ 0), while model-compressed NOTES are tightly coupled to the writer — agents can "forget" without deleting a byte.

## Why it matters here

Broadside and long-lived Anoptic agents will swap models under persistent memory. This controlled study (48 synthetic histories, exact scoring, two <10B open-weight models) shows which memory shapes survive writer swaps — KG-fixed wins, NOTES lose — a concrete design rule for Agent-Zero-Memory (1541) / Runtime-Independent Persistent Agents (1543) / MemoryLACE (1606).

## Key ideas

- Compares LC-RAW, RAG chunks, model-compressed NOTES, and fixed-schema KG under identical histories when the writer/reader model changes.
- 48 synthetic histories with randomized answer codes and exact scoring; two open-weight models under 10B params.
- KG-fixed accuracy changes by only +0.0004 ± 0.0020 after a writer swap — structure ports.
- Compressed NOTES show high model coupling; mixed embedding versions break retrieval; repair fails without original evidence.
- Separates "memory store identity" from "memory interpretability under a new model" as distinct failure modes.

## Caveats

Synthetic histories and small models; production RAG stacks may differ. LC-RAW needs long context headroom. Prefer structured/provenance-bearing stores over free-form notes when upgrades are expected.

## Links

- arXiv: [2609.05339](https://arxiv.org/abs/2609.05339)
- PDF: https://arxiv.org/pdf/2609.05339
