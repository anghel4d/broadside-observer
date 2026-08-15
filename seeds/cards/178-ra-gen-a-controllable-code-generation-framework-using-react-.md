---
title: "RA-Gen: A Controllable Code Generation Framework Using ReAct for Multi-Agent Task Execution"
authors:
  - "Aofan Liu"
  - "Haoxuan Li"
  - "Bin Wang"
  - "Ao Yang"
  - "Hui Li"
year: 2025
venue: "arXiv:cs.SE"
arxiv: "2510.08665"
doi: null
source: "https://arxiv.org/abs/2510.08665"
topics:
  - tool-use
  - react
  - rag
  - retrieval
  - multi-agent
  - agent-architecture
seed_rank: 178
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 8
cites:
  - title: "$λ_A$: A Typed Lambda Calculus for LLM Agent Composition"
    url: "https://arxiv.org/abs/2604.11767"
    year: 2026
    arxiv: "2604.11767"
    doi: null
  - title: "UAV-CodeAgents: Scalable UAV Mission Planning via Multi-Agent ReAct and Vision-Language Reasoning"
    url: "https://arxiv.org/abs/2505.07236"
    year: 2025
    arxiv: "2505.07236"
    doi: null
  - title: "Auto-Dreamer: Learning Offline Memory Consolidation for Language Agents"
    url: "https://arxiv.org/abs/2605.20616"
    year: 2026
    arxiv: "2605.20616"
    doi: null
see:
  - "164-a-a-typed-lambda-calculus-for-llm-agent-composition"
---

# RA-Gen: A Controllable Code Generation Framework Using ReAct for Multi-Agent Task Execution

## One-sentence takeaway

RA-Gen splits controllable code generation across Planner, ReAct Searcher, CodeGen, and Extractor agents so tool use, reasoning traces, and safety checks stay inspectable.

## Why it matters here

A Broadside or Anoptic coding agent that emits engine patches needs this kind of split: plan, search with visible ReAct traces, generate, extract — and a measured security rate, not an opaque one-shot completion.

## Key ideas

- Single-model code generation is treated as insufficient for safety, accuracy, and user control on complex tasks.
- Four agents collaborate: Planner decomposes, Searcher runs ReAct with external tools, CodeGen writes code, Extractor pulls structured data.
- The Searcher alternates reasoning traces and actions so internal knowledge and search engines are mixed under user-visible control.
- On SVEN with CodeQL the framework reports a 94.8% security rate, above the compared baselines.
- Transparency of the ReAct trace is offered as the controllability mechanism, not a post-hoc filter alone.

## Caveats

## Links

- arXiv: [2510.08665](https://arxiv.org/abs/2510.08665)
