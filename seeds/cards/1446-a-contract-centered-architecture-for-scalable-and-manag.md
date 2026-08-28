---
title: "A Contract-Centered Architecture for Scalable and Manageable Agentic Runtimes"
authors:
  - "Yaxiao Liu"
  - "Pengbo Liu"
  - "Yiwen Liu"
  - "Yihua Guan"
  - "Zhenghe Hou"
  - "Jiaxing Song"
year: 2026
venue: "arXiv:cs.AI"
arxiv: "2608.27086"
doi: null
source: "https://arxiv.org/abs/2608.27086"
topics:
  - "agentic-llm-serving"
  - "agent-failure-localization"
seed_rank: 1446
seed_batch: "frontier-2026-08-28"
reviewed: "2026-08-28"
pool: "agents"
relevance_score: 10
lineage: agent-harness-runtime
cites:
  - title: "DeepSeek Harness: Everything is a Plugin"
    url: "https://deepseek.com/harness/en/"
    year: 2026
    arxiv: null
    doi: null
  - title: "LoopsBench: From Harness Engineering to Loop Engineering in Coding Agent Evaluation"
    url: "https://arxiv.org/abs/2608.00267"
    year: 2026
    arxiv: "2608.00267"
    doi: null
  - title: "HELIX: Model-Harness Co-evolution for Recursive Self-Improvement"
    url: "https://arxiv.org/abs/2608.13951"
    year: 2026
    arxiv: "2608.13951"
    doi: null
see:
  - "1050-deepseek-harness-everything-is-a-plugin"
  - "060-loopsbench-from-harness-engineering-to-loop-engineering-in-c"
  - "1079-helix-model-harness-co-evolution-for-recursive-self-improvement"
  - "1081-from-llm-inference-to-agentic-workloads"
  - "1232-benchmarking-llm-serving-systems-for-agentic-ai-workloads-with"
---

# A Contract-Centered Architecture for Scalable and Manageable Agentic Runtimes

## One-sentence takeaway

Enterprise agent deploy is a coordination problem: Skill, Harness, and Scaffold are shared contracts, with the data substrate kept outside the stack.

## Problem

Use-case benchmarks say whether one agent finishes one task. They do not say who owns a capability change, which runtime may admit a new model, how capacity and enterprise data are evidenced together, or how Broadside/Anoptic should version a skill without silently rewriting the harness. DeepSeek Harness (1050) already treats plugins as the unit of extension; LoopsBench (060) already separates harness from loop. Neither gives the organizational contracts that keep those pieces from colliding when multiple teams ship into one runtime.

## Design

- Four responsibility objects: **Skill** (versioned capability/workflow asset), **Harness** (runtime compiler and governor), **Scaffold** (execution/control boundary and NFR owner), and a stack-external **data substrate** under independent CIO-governed semantics and telemetry.
- Runtime core is the triple A = ⟨S, H, X⟩; the data substrate is deliberately outside that stack so telemetry and enterprise semantics are not smuggled into the agent loop.
- Central claim P1 is a bounded, falsifiable cost-aware capability–capacity coupling: changing a skill/model/runtime knob must be attributable to a contract owner with an evidence surface, not a silent config edit.
- Framed as shared organizational contracts rather than another agent framework.

## Evidence

Architectural argument plus a falsifiable hypothesis (P1). Not a drop-in Broadside runtime; the value is the ownership cut that makes Skill/Harness/Scaffold independently changeable and auditable.

## Limitations

- Enterprise framing (CIO substrate, multi-team ownership) is heavier than GRID COMMAND's single-operator loop; strip the org chart, keep the three contracts.
- Does not replace 1050's plugin protocol or 1079's model–harness co-evolution — it says who may change which object.
- Empirical validation of P1 is not a production merge into Cordis/dsh.

## Implications for Broadside

Broadside should name Skill / Harness / Scaffold as first-class versioned objects before adding more session verbs. GRID COMMAND NL-order skills and Anoptic tool plugins then change under the Skill contract; Cordis/dsh stay under Harness; process/NFR envelopes under Scaffold. Do not let the data substrate (replay logs, provenance stores) leak into the agent-visible stack.

## Links

- arXiv: [2608.27086](https://arxiv.org/abs/2608.27086)
- PDF: https://arxiv.org/pdf/2608.27086
