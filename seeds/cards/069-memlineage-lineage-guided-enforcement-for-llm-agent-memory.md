---
title: "MemLineage: Lineage-Guided Enforcement for LLM Agent Memory"
authors:
  - "Ciyan Ouyang"
  - "Rui Hou"
year: 2026
venue: "arXiv:cs.CR"
arxiv: "2605.14421"
doi: null
source: "https://arxiv.org/abs/2605.14421"
topics:
  - provenance
  - rag
  - agent-memory
  - harness
seed_rank: 69
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
  - title: "Coupling Planning with Episodic Memory in LLM Agents for Software Issue Resolution"
    url: "https://arxiv.org/abs/2608.06811"
    year: 2026
    arxiv: "2608.06811"
    doi: null
    card: "059-coupling-planning-with-episodic-memory-in-llm-agents-for-sof"
  - title: "Infini Memory: Maintainable Topic Documents for Long-Term LLM Agent Memory"
    url: "https://arxiv.org/abs/2606.10677"
    year: 2026
    arxiv: "2606.10677"
    doi: null
    card: "065-infini-memory-maintainable-topic-documents-for-long-term-llm"
---

# MemLineage: Lineage-Guided Enforcement for LLM Agent Memory

## One-sentence takeaway

We introduce MemLineage, a defense for LLM agent memory that attaches both cryptographic provenance and LLM-mediated derivation lineage to every entry.

## Why it matters here

memory hierarchy/paging maps to provenance-first agent memory and ECS state; retrieval+evidence trails matter for Broadside provenance-rich digests (MemLineage: Lineage-Guided Enforcement for LLM Agent Memory)

## Key ideas

- We introduce MemLineage, a defense for LLM agent memory that attaches both cryptographic provenance and LLM-mediated derivation lineage to every entry.
- Recent and concurrent work shows that untrusted content can be written into persistent agent state and re-enter later sessions as an instruction; the remaining systems question is how to preserve useful memory recall while preventing such state from justifying sensitive actions.
- MemLineage treats this as a chain-of-custody problem rather than a filtering problem.
- It is a six-module design around an RFC-6962 Merkle log over per-principal Ed25519-signed entries: a weighted derivation DAG records which retrieved entries influenced each new memory, and a max-of-strong-edges propagation rule makes Untrusted-Path Persistence hold for any chain wh

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2605.14421](https://arxiv.org/abs/2605.14421)
- URL: https://arxiv.org/abs/2605.14421
