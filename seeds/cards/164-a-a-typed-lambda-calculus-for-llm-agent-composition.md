---
title: "$λ_A$: A Typed Lambda Calculus for LLM Agent Composition"
authors:
  - "Qin Liu"
year: 2026
venue: "arXiv:cs.PL"
arxiv: "2604.11767"
doi: null
source: "https://arxiv.org/abs/2604.11767"
topics:
  - tool-use
  - react
  - rag
  - retrieval
  - multi-agent
  - agent-architecture
seed_rank: 164
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 8
cites:
  - title: "UAV-CodeAgents: Scalable UAV Mission Planning via Multi-Agent ReAct and Vision-Language Reasoning"
    url: "https://arxiv.org/abs/2505.07236"
    year: 2025
    arxiv: "2505.07236"
    doi: null
  - title: "RA-Gen: A Controllable Code Generation Framework Using ReAct for Multi-Agent Task Execution"
    url: "https://arxiv.org/abs/2510.08665"
    year: 2025
    arxiv: "2510.08665"
    doi: null
  - title: "Auto-Dreamer: Learning Offline Memory Consolidation for Language Agents"
    url: "https://arxiv.org/abs/2605.20616"
    year: 2026
    arxiv: "2605.20616"
    doi: null
see:
  - "178-ra-gen-a-controllable-code-generation-framework-using-react-"
---

# $λ_A$: A Typed Lambda Calculus for LLM Agent Composition

## One-sentence takeaway

Liu gives LLM agent frameworks a simply-typed calculus with oracle calls, bounded ReAct fixpoints, probabilistic choice, and mutable environments, then proves type safety and termination in Coq.

## Why it matters here

Broadside and GRID COMMAND agent configs should be λ_A-checkable: a standing observer loop is a bounded fixpoint, tools are oracles, and a YAML graph that does not type should fail closed before it is allowed to run.

## Key ideas

- \(λ_A\) extends the simply-typed λ-calculus with oracle calls, a bounded fixpoint that models the ReAct loop, probabilistic choice, and a mutable environment.
- Type safety, termination of bounded fixpoints, and soundness of derived lint rules are mechanized in Coq (1,519 lines, 42 theorems, 0 Admitted).
- A lint tool is extracted from the operational semantics and used on 835 real GitHub agent configurations; 94.1% are structurally incomplete under \(λ_A\).
- YAML-only lint precision is 54%, rising to 96–100% when YAML is jointly analyzed with Python ASTs on 175 samples — quantifying config/code entanglement.
- LangGraph, CrewAI, AutoGen, the OpenAI SDK, and Dify embed as typed \(λ_A\) fragments, so the calculus is proposed as a common core.

## Caveats

## Links

- arXiv: [2604.11767](https://arxiv.org/abs/2604.11767)
