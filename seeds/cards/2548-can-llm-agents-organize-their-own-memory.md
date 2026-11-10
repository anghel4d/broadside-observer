---
title: "Can LLM Agents Organize Their Own Memory?"
authors:
  - "Zichuan Fu"
  - "Junjia Qi"
  - "Wenlin Zhang"
  - "Yimin Deng"
  - "Shirong Wang"
  - "Jinyang Li"
  - "Xian Wu"
  - "Xiangyu Zhao"
year: 2026
venue: "arXiv preprint (cs.AI)"
arxiv: "2611.11929"
doi: null
source: "https://arxiv.org/abs/2611.11929"
version_reviewed: "v1"
topics:
  - "provenance-first-agent-memory"
seed_rank: 2548
seed_batch: "frontier-2026-11-10"
reviewed: "2026-11-10"
pool: "agents"
relevance_score: 8
cites:
  - title: "Can LLM Agents Organize Their Own Memory?"
    url: "https://arxiv.org/abs/2611.11929"
    year: 2026
    arxiv: "2611.11929"
    doi: null
---

# Can LLM Agents Organize Their Own Memory?

## One-sentence takeaway

SoMem lets an agent organize its own memory as linked ordinary documents, with every summary linked back to the original interactions as evidence and runtime-validated updates, and it beats strong baselines on LoCoMo, BEAM-100K and LongMemEval-S.

## Why it matters here

This is close to how our repos already hold memory: markdown documents, links, and source traces. It argues the agent can own the organization if the runtime validates updates and keeps evidence links, which is the provenance-first stance with a working implementation and code.

## Key ideas

- **Linked documents.** The agent decides what to summarize, how to group and when to revise topics.
- **Evidence links.** Every summary stays linked to the raw interactions it came from.
- **Derived views.** The runtime validates updates and derives temporal, relational and recent-memory views.
- **Read path.** At query time the agent searches, follows links and inspects original evidence as needed.
- **Results.** +2.66, +3.10 and +2.00 points over the strongest baseline on LoCoMo, BEAM-100K and LongMemEval-S; memory reuses across models.

## Caveats

Gains are a few points on conversational memory benchmarks; cost of agent-driven reorganization and behavior under long-lived drift are not the focus.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.11929
- PDF: https://arxiv.org/pdf/2611.11929
