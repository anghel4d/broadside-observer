---
title: "AIM: A Privacy-Aware Interoperable Memory Framework for Multi-Agent Multi-User LLM Systems"
authors:
  - "Zachary Johnson"
  - "Nigel Boachie Kumankumah"
  - "Somya Chatterjee"
  - "Tejas Sathyamurthi"
  - "Min Chen"
  - "Xinyi Alice Li"
  - "Xiao Wang"
  - "Emily Morgan Gelchie"
  - "Jessica Lin"
  - "Sadid A. Hasan"
  - "Sulaiman Vesal"
year: 2026
venue: "arXiv"
arxiv: "2609.12320"
doi: null
source: "https://arxiv.org/abs/2609.12320"
topics:
  - "provenance-first-agent-memory"
  - "agentic-llm-serving"
seed_rank: 1823
seed_batch: "frontier-2026-09-14"
reviewed: "2026-09-14"
pool: "agents"
relevance_score: 10
lineage: agent-memory-provenance
cites:
  - title: "AIM: A Privacy-Aware Interoperable Memory Framework for Multi-Agent Multi-User LLM Systems"
    url: "https://arxiv.org/abs/2609.12320"
    year: 2026
    arxiv: "2609.12320"
    doi: null
see:
  - "1802-grounding-agent-memory-environment-probing-curation-for-enterprise"
  - "1541-agent-zero-memory-provenance-aware-long-term-memory-for-llm-agents"
  - "1606-memorylace-memory-lifecycle-aware-consolidation-and-evidence-retrieval"
  - "1642-does-your-agents-memory-survive-a-model-upgrade-a-controlled-study"
---

# AIM: A Privacy-Aware Interoperable Memory Framework for Multi-Agent Multi-User LLM Systems

## One-sentence takeaway

AIM is a privacy-aware interoperable memory layer for multi-agent multi-user LLM systems that shares public knowledge across users without collapsing private scopes.

## Why it matters here

Broadside’s provenance-first memory shelf (1541 / 1606 / 1802) is still mostly single-user. AIM attacks the multi-user / multi-agent sharing problem with privacy boundaries — the shape Anoptic session memory and GRID COMMAND squad memory need when many operators and agents share a world.

## Key ideas

- Critiques session-scoped LLMs and individual-user agent memories that cannot share public knowledge across users.
- Introduces AIM (Agentic Interoperable Memory) with privacy-aware scopes for multi-agent multi-user deployments.
- Separates shareable public knowledge from private user state so downstream responses improve without leaking.
- Targets interoperability across agents — complementary to Grounding Agent Memory’s environment-probing curation.

## Caveats

Abstract-level design; verify threat model, consent, and cross-agent write policies before adopting. Do not remint 1541 / 1606 / 1802 / 1642.

## Links

- arXiv: [2609.12320](https://arxiv.org/abs/2609.12320)
- PDF: https://arxiv.org/pdf/2609.12320
