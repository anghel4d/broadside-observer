---
title: "Multi-Paradigm Agent Interaction in Practice:A Systematic Analysis of Generator-Evaluator, ReAct Loop,and Adversarial Evaluation in the buddyMe Framework"
authors:
  - "Xiaohua Wang"
  - "Chao Han"
  - "Kai Yu"
  - "XiaoLiang Xu"
  - "Liang Wang"
year: 2026
venue: "arXiv:cs.AI"
arxiv: "2605.16821"
doi: null
source: "https://arxiv.org/abs/2605.16821"
topics:
  - tool-use
  - react
  - agent-memory
  - multi-agent
  - agent-architecture
seed_rank: 166
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 8
cites:
  - title: "Meta-Policy Reflexion: Reusable Reflective Memory and Rule Admissibility for Resource-Efficient LLM Agent"
    url: "https://arxiv.org/abs/2509.03990"
    year: 2025
    arxiv: "2509.03990"
    doi: null
  - title: "UAV-CodeAgents: Scalable UAV Mission Planning via Multi-Agent ReAct and Vision-Language Reasoning"
    url: "https://arxiv.org/abs/2505.07236"
    year: 2025
    arxiv: "2505.07236"
    doi: null
  - title: "$λ_A$: A Typed Lambda Calculus for LLM Agent Composition"
    url: "https://arxiv.org/abs/2604.11767"
    year: 2026
    arxiv: "2604.11767"
    doi: null
see:
  - "071-meta-policy-reflexion-reusable-reflective-memory-and-rule-ad"
  - "164-a-a-typed-lambda-calculus-for-llm-agent-composition"
---

# Multi-Paradigm Agent Interaction in Practice:A Systematic Analysis of Generator-Evaluator, ReAct Loop,and Adversarial Evaluation in the buddyMe Framework

## One-sentence takeaway

The buddyMe authors run generator–evaluator orchestration, ReAct tool loops, and memory-augmented interaction in one production framework and measure where each paradigm actually helps or wastes work.

## Why it matters here

Anoptic observers need the same composition: a cheap pre-review, a ReAct tool loop against the world, and an adversarial check before a digest is published — with numbers on redundant tool calls, not just architecture diagrams.

## Key ideas

- Three paradigms share one pipeline: requirement pre-review → task decomposition → ReAct execution → real-execution verification → adversarial evaluation.
- A six-dimensional weighted evaluation schema is used on four live deployment logs (museum guide, scheduled weather, tour planning, and related tasks).
- Generator–evaluator pre-review catches requirement omissions in 20% of complex tasks; 80% pass first inspection.
- The ReAct loop is stable but produces about 30% redundant tool invocations.
- Adversarial evaluator–defender discussion reaches consensus in 2–3 rounds for nearly 70% of cases and mostly refines content rather than reversing logic; the paper also compares buddyMe to CrewAI, AutoGen, LangGraph, MemGPT, and A-Mem.

## Caveats

## Links

- arXiv: [2605.16821](https://arxiv.org/abs/2605.16821)
