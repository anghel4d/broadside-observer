---
title: "Retain or Consolidate? Budget-Dependent Operator Selection for Language Agent Memory"
authors:
  - "Qingcan Kang"
  - "Mingyang Liu"
  - "Shixiong Kai"
  - "Kaichao Liang"
  - "Zhentao Tang"
  - "Yuqi Cui"
  - "Tao Zhong"
  - "Mingxuan Yuan"
year: 2026
venue: "arXiv:cs.AI"
arxiv: "2607.17545"
doi: null
source: "https://arxiv.org/abs/2607.17545"
topics:
  - rag
  - retrieval
  - provenance
  - agent-memory
seed_rank: 63
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 9
cites:
  - title: "MemGPT: Towards LLMs as Operating Systems"
    url: "https://arxiv.org/abs/2310.08560"
    year: 2023
    arxiv: "2310.08560"
    doi: null
  - title: "A-MEM: Agentic Memory for LLM Agents"
    url: "https://arxiv.org/abs/2502.12110"
    year: 2025
    arxiv: "2502.12110"
    doi: null
see:
  - "004-memgpt-towards-llms-as-operating-systems"
  - "069-a-mem-agentic-memory-for-llm-agents"
---

# Retain or Consolidate? Budget-Dependent Operator Selection for Language Agent Memory

## One-sentence takeaway

Whether to retain raw memory or apply Merge, Abstract, or Rewrite is a budget-pressure decision: consolidation wins when evidence will not fit, retention wins when it will.

## Why it matters here

Broadside digest memory and ano episodic stores face the same retain-vs-compress fork every time the context budget tightens; OAS is an explicit policy for that fork.

## Key ideas

- Retention preserves exact details but may omit evidence under a tight token budget; consolidation covers more per token but can erase query-critical detail.
- Each operator's utility splits into a coverage effect on omitted evidence and a signed replacement effect on raw evidence that already fits.
- Offline Abstraction-Safety (OAS) estimates those utilities from pre-generation features with held-out harm calibration.
- On LongMemEval, consolidation lifts absolute accuracy by up to 48% under tight budgets, while retention is better when the budget is loose; LoCoMo shows the same crossover at a smaller budget.
- When compression is required, cross-note abstraction and merging beat local rewriting on both datasets.

## Caveats

## Links

- arXiv: [2607.17545](https://arxiv.org/abs/2607.17545)
- PDF: https://arxiv.org/pdf/2607.17545
