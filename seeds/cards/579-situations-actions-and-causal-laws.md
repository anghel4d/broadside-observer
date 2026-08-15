---
title: "Situations, Actions, and Causal Laws"
authors:
  - "John McCarthy"
year: 1963
venue: "Stanford AI Memo AIM-2"
arxiv: null
doi: "10.21236/AD0785031"
source: "https://doi.org/10.21236/AD0785031"
topics:
  - situation-calculus
  - ai
  - mccarthy
  - reasoning
seed_rank: 579
seed_batch: "foundations-greats-2026-08-13"
reviewed: "2026-08-13"
pool: "agents"
relevance_score: 8
lineage: foundations-of-computing
cites:
  - title: "Programs with Common Sense"
    url: "https://www-formal.stanford.edu/jmc/mcc59.pdf"
    year: 1959
    arxiv: null
    doi: null
see:
  - "576-programs-with-common-sense"
---

# Situations, Actions, and Causal Laws

## One-sentence takeaway

McCarthy's AIM-2 memo introduces situation calculus: situations as objects, fluents that hold in them, and causal laws for the effects of actions.

## Why it matters here

Planning agents in GRID COMMAND still reason "if I do A in s, fluent F holds in result(A,s)." This July 1963 memo is that ontology.

## Key ideas

- A situation is a complete state of affairs at an instant; `result(a,s)` names the situation after action `a`.
- Fluents are functions of situations (location, holding, …); causal laws relate fluents across `result`.
- Possibility of actions is itself a fluent, so preconditions are logic, not a separate planner DSL.
- Written for the Advice Taker; DTIC accession AD0785031, 11 pages, 3 July 1963.
- Reprinted in Minsky's *Semantic Information Processing* (1968); later frame-problem papers refine the same calculus.

## Caveats

## Links

- DOI: [10.21236/AD0785031](https://doi.org/10.21236/AD0785031)
- URL: https://doi.org/10.21236/AD0785031
