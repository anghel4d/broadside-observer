---
title: "When Users Don't Ask: Benchmarking Context-Driven Memory Retrieval in Conversational Agents"
authors:
  - "Wen-Yu Chang"
  - "Yun-Nung Chen"
year: 2026
venue: "arXiv:cs.CL"
arxiv: "2609.03467"
doi: null
source: "https://arxiv.org/abs/2609.03467"
topics:
  - "provenance-first-agent-memory"
  - "agentic-llm-serving"
seed_rank: 1607
seed_batch: "frontier-2026-09-06"
reviewed: "2026-09-06"
pool: "agents"
relevance_score: 10
lineage: agent-memory
cites:
  - title: "When Users Don't Ask: Benchmarking Context-Driven Memory Retrieval in Conversational Agents"
    url: "https://arxiv.org/abs/2609.03467"
    year: 2026
    arxiv: "2609.03467"
    doi: null
  - title: "MemoryLACE: Memory Lifecycle-Aware Consolidation and Evidence Retrieval"
    url: "https://arxiv.org/abs/2609.03201"
    year: 2026
    arxiv: "2609.03201"
    doi: null
see:
  - "1606-memorylace-memory-lifecycle-aware-consolidation-and-evidence-retrieval"
  - "1579-fresh-memory-stale-plans-dependency-scoped-validation-for-distributed"
  - "1541-agent-zero-memory-provenance-aware-long-term-memory-for-llm-agents"
---
# When Users Don't Ask: Benchmarking Context-Driven Memory Retrieval in Conversational Agents

## One-sentence takeaway

LOCOMO-CONV shows conversational memory benchmarks (dialog/implicit/counterfactual/composed) expose retrieval gaps that QA-style memory probes miss — especially implicit and composed queries.

## Why it matters here

You cannot improve agent memory without measuring in-situ use. This is the evaluation counterpart to MemoryLACE/Agent Zero Memory for Broadside rehearsal loops.

## Key ideas

- Problem: memory papers report QA recall; agents actually need memory mid-dialogue without explicit probes.
- Design: LOCOMO-CONV derives four query styles from LoCoMo — dialog, implicit, counterfactual, composed.
- Evidence: five representative memory systems; conversational framing reveals large gaps vs QA, worst on implicit/composed.
- Implication: train and select memory stacks on conversational retrieval, not only needle QA.

## Caveats

- Benchmark paper; does not propose a new memory architecture.
- Derived from LoCoMo — coverage inherits that corpus's domain limits.
- Pair with systems cards (1606/1579/1541), not a substitute.

## Links

- arXiv: [2609.03467](https://arxiv.org/abs/2609.03467)
- PDF: https://arxiv.org/pdf/2609.03467
