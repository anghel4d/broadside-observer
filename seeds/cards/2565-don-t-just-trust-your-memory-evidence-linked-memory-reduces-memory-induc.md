---
title: "Don't Just Trust Your Memory: Evidence-Linked Memory Reduces Memory-Induced Degradation in LLM Agents"
authors:
  - "Yukyeong Lee"
  - "Yumin Choi"
  - "Jinheon Baek"
  - "Sung Ju Hwang"
year: 2026
venue: "arXiv preprint (cs.AI)"
arxiv: "2611.14320"
doi: null
source: "https://arxiv.org/abs/2611.14320"
version_reviewed: "v1"
topics:
  - "provenance-first-agent-memory"
  - "continual-agent-skills"
seed_rank: 2565
seed_batch: "frontier-2026-11-12"
reviewed: "2026-11-12"
pool: "agents"
relevance_score: 8
see:
  - 2548-can-llm-agents-organize-their-own-memory
cites:
  - title: "Don't Just Trust Your Memory: Evidence-Linked Memory Reduces Memory-Induced Degradation in LLM Agents"
    url: "https://arxiv.org/abs/2611.14320"
    year: 2026
    arxiv: "2611.14320"
    doi: null
---

# Don't Just Trust Your Memory: Evidence-Linked Memory Reduces Memory-Induced Degradation in LLM Agents

## One-sentence takeaway

Distilled lessons hurt agents when they are wrong or misread, and WikiTrace fixes this by linking each lesson to a summary of why its run succeeded or failed and to the raw trajectory, so the agent can descend and check before acting.

## Why it matters here

This is provenance-first memory with a measured failure mode it prevents: memory-induced degradation, where an agent fails tasks it would solve without memory. Keeping the evidence one hop away, and descending only when a lesson is thin, conflicting or from a failed run, matches how our repo notes link back to sources, and gives a cheap check our skills could adopt.

## Key ideas

- **Memory-induced degradation.** Lessons inferred from success/failure labels are served without their trajectories, so wrong or misapplied lessons cannot be checked.
- **Evidence links.** Each insight links to a why-it-succeeded-or-failed summary and to the raw trajectory.
- **Descend on doubt.** The agent starts from all insights and follows links with terminal tools when an insight lacks detail, conflicts with another, or comes from a failed task.
- **Results.** Outperforms existing memory approaches and a same-insights-only baseline on five agentic benchmarks while reducing degradation; code is public.

## Caveats

Abstract gives no headline numbers; storage and read cost of keeping raw trajectories over a long lifetime is not the focus.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.14320
- PDF: https://arxiv.org/pdf/2611.14320
