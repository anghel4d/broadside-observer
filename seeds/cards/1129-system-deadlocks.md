---
title: "System Deadlocks"
authors:
  - "E. G. Coffman"
  - "M. J. Elphick"
  - "A. Shoshani"
year: 1971
venue: "ACM Computing Surveys"
arxiv: null
doi: "10.1145/356586.356588"
source: "https://doi.org/10.1145/356586.356588"
topics:
  - operating-systems
  - deadlock
seed_rank: 1129
seed_batch: "perfects-systems-2026-08-13"
reviewed: "2026-08-13"
pool: "systems"
relevance_score: 8
lineage: systems-classics
cites:
  - title: "Introduction and Overview of the Multics System"
    url: "https://multicians.org/fjcc1.html"
    year: 1965
    arxiv: null
    doi: null
    card: "1105-introduction-and-overview-of-the-multics-system"
  - title: "Monitors: An Operating System Structuring Concept"
    url: "https://doi.org/10.1145/355620.361161"
    year: 1974
    arxiv: null
    doi: "10.1145/355620.361161"
    card: "1106-monitors-an-operating-system-structuring-concept"
---

# System Deadlocks

## One-sentence takeaway

Coffman conditions: mutual exclusion, hold-and-wait, no preemption, circular wait—the deadlock taxonomy.

## Why it matters here

Quick checklist when engine resource graphs (locks, GPU queues, IO) wedge.

## Key ideas

- Four necessary conditions for deadlock.
- Prevention / avoidance / detection framework.
- Survey clarity that became textbook canon.
- Resource-allocation graph thinking.

## Caveats

- Classic; verify claims against the primary text before engineering decisions.

## Links

- DOI: [10.1145/356586.356588](https://doi.org/10.1145/356586.356588)
- URL: https://doi.org/10.1145/356586.356588
