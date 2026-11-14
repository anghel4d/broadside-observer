---
title: "Cleaning an Agent's History Hurts When the World Still Holds the Error"
authors:
  - "Egor Pakhomov"
  - "Anurag Koul"
  - "Hongjun Liu"
  - "Bo Pang"
  - "Shafiq Joty"
  - "Erik Nijkamp"
year: 2026
venue: "arXiv preprint (cs.AI)"
arxiv: "2611.14654"
doi: null
source: "https://arxiv.org/abs/2611.14654"
version_reviewed: "v1"
topics:
  - "agent-failure-localization"
  - "provenance-first-agent-memory"
seed_rank: 2584
seed_batch: "frontier-2026-11-14"
reviewed: "2026-11-14"
pool: "agents"
relevance_score: 9
see:
  - 2383-compaction-laundering-provenance-destruction-in-context-compacting-coding
cites:
  - title: "Cleaning an Agent's History Hurts When the World Still Holds the Error"
    url: "https://arxiv.org/abs/2611.14654"
    year: 2026
    arxiv: "2611.14654"
    doi: null
---

# Cleaning an Agent's History Hurts When the World Still Holds the Error

## One-sentence takeaway

Editing an agent's history helps or hurts depending on the world state it describes: a truthful note beside a preserved error raises recovery, while making the history look as if the fix was done, when the world still holds the error, leaves the agent worse off than no edit.

## Why it matters here

Every compaction, handoff and repair step in our harness rewrites what the log says about past mistakes. This is causal evidence, from frozen mid-task states, that the log must stay consistent with the world: annotate, do not launder. It also supports keeping receipts honest, since a success receipt for an effect that is not present cut whole-task success from 45% to 28%.

## Key ideas

- **Method.** Freeze an agent mid-task with its exact world state, edit the history or the world, and let a receiver model continue.
- **Note vs fake action (AgentCE-Bench).** After a wrong committed value, a truthful note beside the error raised recovery from 51% to 66%; inserting the agent's own completed corrective action lowered it from 50% to 44%.
- **Receipts vs effects (AppWorld).** A success receipt lowered success from 45% to 28% when the database effect was absent and raised it from 38% to 49% when present.
- **Robustness.** The interaction differs by 27 points pooled over two receivers and is positive in six of eight receivers at 97.5% (seven at 95%).

## Caveats

Two benchmarks and a small set of edit types. Receivers are fresh models continuing a frozen state, not the original agent with its own context. Abstract-level read.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.14654
- PDF: https://arxiv.org/pdf/2611.14654
