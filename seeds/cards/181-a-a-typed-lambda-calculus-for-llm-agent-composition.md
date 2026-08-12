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
seed_rank: 181
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 8
---

# $λ_A$: A Typed Lambda Calculus for LLM Agent Composition

## One-sentence takeaway

Existing LLM agent frameworks lack formal semantics: there is no principled way to determine whether an agent configuration is well-formed or will terminate.

## Why it matters here

retrieval+evidence trails matter for Broadside provenance-rich digests; shapes harness/ACI design and model-vs-harness failure localization ($λ_A$: A Typed Lambda Calculus for LLM Agent Composition)

## Key ideas

- Existing LLM agent frameworks lack formal semantics: there is no principled way to determine whether an agent configuration is well-formed or will terminate.
- We present $λ_A$, a typed lambda calculus for agent composition that extends the simply-typed lambda calculus with oracle calls, bounded fixpoints (the ReAct loop), probabilistic choice, and mutable environments.
- We prove type safety, termination of bounded fixpoints, and soundness of derived lint rules, with full Coq mechanization (1,519 lines, 42 theorems, 0 Admitted).
- As a practical application, we derive a lint tool that detects structural configuration errors directly from the operational semantics.
- An evaluation on 835 real-world GitHub agent configurations shows that 94.1% are structurally incomplete under $λ_A$, with YAML-only

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2604.11767](https://arxiv.org/abs/2604.11767)
- URL: https://arxiv.org/abs/2604.11767
