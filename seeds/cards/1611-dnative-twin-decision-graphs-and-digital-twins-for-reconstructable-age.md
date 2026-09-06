---
title: "DNative-Twin: Decision Graphs and Digital Twins for Reconstructable Agentic Decisions"
authors:
  - "Junjie Pang"
  - "Zhenzhen Xie"
  - "Haoke Han"
  - "Ying He"
  - "Jing Wang"
  - "Gang Liu"
year: 2026
venue: "arXiv:cs.AI"
arxiv: "2609.03787"
doi: null
source: "https://arxiv.org/abs/2609.03787"
topics:
  - "provenance-first-agent-memory"
  - "agentic-llm-serving"
  - "model-vs-harness"
seed_rank: 1611
seed_batch: "frontier-2026-09-06"
reviewed: "2026-09-06"
pool: "agents"
relevance_score: 9
lineage: agent-provenance
cites:
  - title: "DNative-Twin: Decision Graphs and Digital Twins for Reconstructable Agentic Decisions"
    url: "https://arxiv.org/abs/2609.03787"
    year: 2026
    arxiv: "2609.03787"
    doi: null
  - title: "Fresh Memory, Stale Plans: Dependency-Scoped Validation for Distributed LLM-Agent Memory"
    url: "https://arxiv.org/abs/2609.03340"
    year: 2026
    arxiv: "2609.03340"
    doi: null
see:
  - "1018-correct-is-not-governed-provenance-integrity-in-agentic-workflows"
  - "1541-agent-zero-memory-provenance-aware-long-term-memory-for-llm-agents"
  - "1579-fresh-memory-stale-plans-dependency-scoped-validation-for-distributed"
---
# DNative-Twin: Decision Graphs and Digital Twins for Reconstructable Agentic Decisions

## One-sentence takeaway

DNative-Twin records each committed agentic decision as a typed graph trajectory (state, path, authority) and can re-execute the decision mechanism under declared counterfactuals — provenance as a digital twin.

## Why it matters here

Correct ≠ governed (1018). For Broadside agents that commit tool actions, reconstructable decision graphs are the audit substrate beside memory provenance (1541/1606).

## Key ideas

- Problem: final outputs hide which evidence, tool state, rule, and authorization produced the commit.
- Design: graph-native twin linking observed state, followed path, and authority; isolated replay under controlled changes.
- Use: audit, debugging, and counterfactual what-if on agent decisions.
- Instantiation: framework demonstrated on agentic decision workloads (see paper).

## Caveats

- Graph twin cost and instrumentation burden on hot agent loops.
- Replay fidelity limited by what was logged — silent host hooks (1608) still sit outside the twin unless hooked.
- Complementary to MemoryLACE lifecycle edges, not a memory store.

## Links

- arXiv: [2609.03787](https://arxiv.org/abs/2609.03787)
- PDF: https://arxiv.org/pdf/2609.03787
