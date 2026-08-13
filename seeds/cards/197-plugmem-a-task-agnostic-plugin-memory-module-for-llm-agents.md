---
title: "PlugMem: A Task-Agnostic Plugin Memory Module for LLM Agents"
authors:
  - "Ke Yang"
  - "Zixi Chen"
  - "Xuan He"
  - "Jize Jiang"
  - "Michel Galley"
  - "Chenglong Wang"
  - "Jianfeng Gao"
  - "Jiawei Han"
  - "ChengXiang Zhai"
year: 2026
venue: "arXiv:cs.CL"
arxiv: "2603.03296"
doi: null
source: "https://arxiv.org/abs/2603.03296"
topics:
  - rag
  - retrieval
  - agent-memory
  - computer-use-agents
seed_rank: 197
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 8
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

# PlugMem: A Task-Agnostic Plugin Memory Module for LLM Agents

## One-sentence takeaway

Long-term memory is essential for large language model (LLM) agents operating in complex environments, yet existing memory designs are either task-specific and non-transferable, or task-agnostic but less effective due to low task-relevance and context explosion from raw memory retrieval.

## Why it matters here

memory hierarchy/paging maps to provenance-first agent memory and ECS state; retrieval+evidence trails matter for Broadside provenance-rich digests (PlugMem: A Task-Agnostic Plugin Memory Module for LLM Agents)

## Key ideas

- Long-term memory is essential for large language model (LLM) agents operating in complex environments, yet existing memory designs are either task-specific and non-transferable, or task-agnostic but less effective due to low task-relevance and context explosion from raw memory retrieval.
- We propose PlugMem, a task-agnostic plugin memory module that can be attached to arbitrary LLM agents without task-specific redesign.
- Motivated by the fact that decision-relevant information is concentrated as abstract knowledge rather than raw experience, we draw on cognitive science to structure episodic memories into a compact, extensible knowledge-centric memory graph that explicitly represents propositional and prescriptive knowledge.
- This representation enables efficient memory retrieval and reasonin

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2603.03296](https://arxiv.org/abs/2603.03296)
- URL: https://arxiv.org/abs/2603.03296
