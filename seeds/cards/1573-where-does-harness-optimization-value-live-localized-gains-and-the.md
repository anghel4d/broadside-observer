---
title: "Where Does Harness-Optimization Value Live? Localized Gains and the Budget-Splitting Trap in Self-Evolving LLM Agents"
authors:
  - "Michael Nguyen"
  - "Wei Chen Tan"
  - "Nurul Aisyah Hassan"
  - "Arvind Raman"
  - "Li Hua Lim"
  - "Ahmad Faiz Razak"
year: 2026
venue: "arXiv:cs.CL"
arxiv: "2609.02889"
doi: null
source: "https://arxiv.org/abs/2609.02889"
topics:
  - "agent-failure-localization"
  - "agentic-llm-serving"
  - "model-vs-harness"
seed_rank: 1573
seed_batch: "frontier-2026-09-04"
reviewed: "2026-09-04"
pool: "agents"
relevance_score: 10
lineage: agent-harness-runtime
cites:
  - title: "Where Does Harness-Optimization Value Live? Localized Gains and the Budget-Splitting Trap in Self-Evolving LLM Agents"
    url: "https://arxiv.org/abs/2609.02889"
    year: 2026
    arxiv: "2609.02889"
    doi: null
  - title: "HELIX: Model-Harness Co-evolution for Recursive Self-Improvement"
    url: "https://arxiv.org/abs/2608.13951"
    year: 2026
    arxiv: "2608.13951"
    doi: null
  - title: "WHALE: A Simple Recipe for Joint Harness-Weight Optimization"
    url: "https://arxiv.org/abs/2609.00196"
    year: 2026
    arxiv: "2609.00196"
    doi: null
see:
  - "1536-harness-engineering-anatomy-architecture-and-evolution-of-coding-agent"
  - "1079-helix-model-harness-co-evolution-for-recursive-self-improvement"
  - "1538-whale-a-simple-recipe-for-joint-harness-weight-optimization"
  - "1119-harness-continual-learning-continual-adaptation-beyond-model-par"
  - "1050-deepseek-harness-everything-is-a-plugin"
---
# Where Does Harness-Optimization Value Live? Localized Gains and the Budget-Splitting Trap in Self-Evolving LLM Agents

## One-sentence takeaway

Harness-evolution value is not spread evenly: under iso-budget HARNESSEVO, nearly all useful gain lives in the reflection/control slot; uniform budget splitting across slots is a trap.

## Why it matters here

Broadside's standing model-vs-harness question finally gets a leave-one-in / leave-one-out attribution over harness slots rather than folklore that "the scaffold matters." Cordis/HELIX/WHALE need this map before more flat-string prompt evolution.

## Key ideas

- Decomposes the harness into four evolvable slots: role, task-strategy, tool/format-rules, and reflection/control (HARNESSEVO).
- Iso-budget reflective optimizer with leave-one-in and leave-one-out attribution per slot on ALFWorld with a frozen 7B backbone.
- Overall binary success does not beat stock or flat-string evolution (0.657 vs 0.642), but reflection/control alone shows +0.119 leave-one-in; other slots are individually null.
- Uniform budget splitting across slots is harmful — optimization value is localized, not additive.

## Caveats

- Single frozen 7B + ALFWorld; do not generalize the null slots to coding agents or GRID COMMAND without re-measurement.
- Harness here is textual scaffolding (persona/strategy/rules/control), not a full runtime ABI like DeepSeek Harness plugins.
- Listing date Fri 4 Sep 2026 (house recency); distinct from slogan-adjacent Sep-2 Harness Engineering 1536.

## Links

- arXiv: [2609.02889](https://arxiv.org/abs/2609.02889)
- PDF: https://arxiv.org/pdf/2609.02889
