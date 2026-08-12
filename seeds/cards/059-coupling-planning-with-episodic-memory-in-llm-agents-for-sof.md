---
title: "Coupling Planning with Episodic Memory in LLM Agents for Software Issue Resolution"
authors:
  - "Jiahao Zhang"
  - "Yifan Zhang"
  - "Yu Huang"
year: 2026
venue: "arXiv:cs.SE"
arxiv: "2608.06811"
doi: null
source: "https://arxiv.org/abs/2608.06811"
topics:
  - rag
  - retrieval
  - provenance
  - agent-memory
  - coding-agents
  - harness
seed_rank: 59
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 9
---

# Coupling Planning with Episodic Memory in LLM Agents for Software Issue Resolution

## One-sentence takeaway

Resolving a real software issue with a large language model (LLM) agent is a long repair episode, often tens to hundreds of steps spanning exploration, hypothesis, implementation, and verification.

## Why it matters here

memory hierarchy/paging maps to provenance-first agent memory and ECS state; retrieval+evidence trails matter for Broadside provenance-rich digests (Coupling Planning with Episodic Memory in LLM Agents for Software Issue Resolution)

## Key ideas

- Resolving a real software issue with a large language model (LLM) agent is a long repair episode, often tens to hundreds of steps spanning exploration, hypothesis, implementation, and verification.
- Success depends on both the base model's local reasoning and the agent's ability to maintain an evolving plan and remember observations across phases.
- Existing repository-level agents typically strengthen planning or memory in isolation, leaving long trajectories vulnerable to stale evidence, repeated failed edits, and verification inferred from the agent's own claims instead of execution evidence.
- We present PMCoder, an issue-resolution agent that couples a hierarchical phase planner with episodic memory.
- The coupling is bidirectional: the current plan phase conditions memory retrieval, while m

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2608.06811](https://arxiv.org/abs/2608.06811)
- URL: https://arxiv.org/abs/2608.06811
