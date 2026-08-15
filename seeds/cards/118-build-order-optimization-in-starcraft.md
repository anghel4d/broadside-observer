---
title: "Build Order Optimization in StarCraft"
authors:
  - "David Churchill"
  - "Michael Buro"
year: 2011
venue: "AIIDE"
arxiv: null
doi: "10.1609/aiide.v7i1.12435"
source: "https://doi.org/10.1609/aiide.v7i1.12435"
topics:
  - rts
seed_rank: 118
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "game-ai"
relevance_score: 9
cites:
  - title: "A first look at build-order optimization in real-time strategy games"
    year: 2006
    arxiv: null
    doi: null
  - title: "Online Planning for Resource Production in Real-Time Strategy Games"
    year: 2007
    arxiv: null
    doi: null
  - title: "Concurrent Action Selection with Shared Fluents"
    year: 2007
    arxiv: null
    doi: null
  - title: "Planning for resource production in real-time strategy games based on partial order planning, search and learning"
    year: 2010
    arxiv: null
    doi: null
see: []
---

# Build Order Optimization in StarCraft

## One-sentence takeaway

Makespan-minimal StarCraft build orders are found by depth-first branch-and-bound over a fast-forward simulator that issues every action at the earliest legal frame, with landmark and resource-goal lower bounds and $K$-repeat macro actions to keep the search online.

## Why it matters here

GRID COMMAND / Broadside economy is the same concurrent resource-allocation problem: workers, buildings, and tech as Require / Borrow / Consume / Produce resources, planned under a real-time bound rather than hardcoded openings.

## Key ideas

- State $S=(t,R,P,I)$ tracks frame time, per-resource availability/borrow-until, in-progress actions, and worker income. Actions are $a=(\delta,r,b,c,p)$; e.g. a Dragoon is 600 frames, requires Cybernetics Core, borrows a Gateway, consumes 125/50/2, produces one Dragoon.
- Abstractions that make search real-time: minerals and gas accrue at empirical rates (0.045 / 0.07 per worker per frame) instead of being gather actions; a fixed 3 workers go to gas; +4 s per building for travel. "Optimal" means optimal inside these abstractions.
- Fast-forward: $S'=\mathrm{Do}(\mathrm{Sim}(S,\mathrm{When}(S,a)),a)$ eliminates null actions. Concurrent StarCraft actions are independent, so one canonical order of simultaneously legal actions is enough.
- Admissible max of LandmarkLowerBound (sum remaining tech-tree durations) and ResourceGoalBound (makespan of gathering only the consumed resources); TrivialPlan gives the initial upper bound. Macro actions force $K$ identical productions in a row (workers, fighters), cutting depth while staying near-optimal.
- Compared to 520 opening prefixes extracted from 100 pro Protoss replays (Bisu, Stork, Kal, White-Ra, WCG). Incremental DFBB (15–30 s windows, 60–120 s budgets) produces plans whose CPU time is a small fraction of the makespan, so an agent can execute increment $n$ while searching $n+1$.

## Caveats

## Links

- DOI: [10.1609/aiide.v7i1.12435](https://doi.org/10.1609/aiide.v7i1.12435)
- PDF: https://davechurchill.ca/publications/pdf/aiide11-bo.pdf
