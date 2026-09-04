---
title: "Fresh Memory, Stale Plans: Dependency-Scoped Validation for Distributed LLM-Agent Memory"
authors:
  - "Evan Chen"
  - "Shiqiang Wang"
  - "Christopher G. Brinton"
year: 2026
venue: "arXiv:cs.AI"
arxiv: "2609.03340"
doi: null
source: "https://arxiv.org/abs/2609.03340"
topics:
  - "provenance-first-agent-memory"
  - "agentic-llm-serving"
seed_rank: 1579
seed_batch: "frontier-2026-09-04"
reviewed: "2026-09-04"
pool: "agents"
relevance_score: 10
lineage: agent-memory
cites:
  - title: "Fresh Memory, Stale Plans: Dependency-Scoped Validation for Distributed LLM-Agent Memory"
    url: "https://arxiv.org/abs/2609.03340"
    year: 2026
    arxiv: "2609.03340"
    doi: null
  - title: "Agent Zero Memory: Provenance-Aware Long-Term Memory for LLM Agents"
    url: "https://arxiv.org/abs/2608.29606"
    year: 2026
    arxiv: "2608.29606"
    doi: null
  - title: "Runtime-Independent Persistent Agents: Preserving Identity, Memory, and Code Across Models, Harnesses, and Servers"
    url: "https://arxiv.org/abs/2609.00546"
    year: 2026
    arxiv: "2609.00546"
    doi: null
see:
  - "1541-agent-zero-memory-provenance-aware-long-term-memory-for-llm-agents"
  - "1543-runtime-independent-persistent-agents-preserving-identity-memory-and-c"
  - "1144-outcome-monitors-recovery-affordances-for-silent-tool-failure"
---
# Fresh Memory, Stale Plans: Dependency-Scoped Validation for Distributed LLM-Agent Memory

## One-sentence takeaway

Fresh shared memory is not enough: distributed agents can read r4 and still execute a plan derived from r3. PlanFence makes plans cite the exact public records they used and validates only the dependency-scoped slice before external action.

## Why it matters here

Provenance-first memory (1541) stored facts with lineage; PlanFence closes the next hole — stale-plan execution under fresh state — which multi-agent radar and GRID COMMAND order pipelines will hit the moment planners and executors diverge.

## Key ideas

- Names the failure: stale-plan execution — state freshness ≠ plan validity.
- PlanFence: plans cite exact public records; executor validates only records that can affect the pending external action; replan once or block if incomplete.
- 30 controlled live workflows with post-plan revision: freshness-only executor acts on the obsolete plan every time; PlanFence completes all without an invalid action.
- Cost geometry: proactive sync better at low churn; PlanFence wins as churn and shared keyspace grow.

## Caveats

- Controlled safety / systems-cost results, not general task-accuracy gains — authors are explicit.
- Assumes a shared public record store with citeable IDs; ad-hoc chat memory does not get this for free.
- Memory Trust Gap / RuleMem / MutMem-V2 held as same-shelf leftovers.

## Links

- arXiv: [2609.03340](https://arxiv.org/abs/2609.03340)
- PDF: https://arxiv.org/pdf/2609.03340
