---
title: "SHOP2: An HTN Planning System"
authors:
  - "Dana S. Nau"
  - "Tsz-Chiu Au"
  - "Okhtay Ilghami"
  - "Ugur Kuter"
  - "J. William Murdock"
  - "Dan Wu"
  - "Fusun Yaman"
year: 2003
venue: "JAIR"
arxiv: null
doi: "10.1613/jair.1141"
source: "https://doi.org/10.1613/jair.1141"
topics:
  - planning
  - htn
seed_rank: 296
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "game-ai"
relevance_score: 9
lineage: game-ai-planning
cites:
  - title: "STRIPS: A New Approach to the Application of Theorem Proving to Problem Solving"
    url: "https://doi.org/10.1016/0004-3702(71)90010-5"
    year: 1971
    arxiv: null
    doi: "10.1016/0004-3702(71)90010-5"
  - title: "A Survey of Planning Techniques for Agents in Games"
    url: "https://www.researchgate.net/publication/228624254"
    year: 2006
    arxiv: null
    doi: null
  - title: "Three States and a Plan: The AI of F.E.A.R."
    url: "https://alumni.media.mit.edu/~jorkin/gdc2006_orkin_jeff_fear.pdf"
    year: 2006
    arxiv: null
    doi: null
see:
  - "309-strips-a-new-approach-to-the-application-of-theorem-proving-"
  - "126-a-survey-of-planning-techniques-for-agents-in-games"
  - "022-three-states-and-a-plan-the-ai-of-f-e-a-r"
---

# SHOP2: An HTN Planning System

## One-sentence takeaway

SHOP2 plans by recursively decomposing tasks with methods whose preconditions are evaluated in the current world state, so the planner always knows what is true "now" and can interleave planning with execution-style reasoning.

## Why it matters here

GRID COMMAND officers issuing multi-step orders (secure LZ, then extract, then exfil) are HTN problems. SHOP2 is the academic system game HTNs (F.E.A.R.'s GOAP is the other pole) actually descend from.

## Key ideas

- Hierarchical Task Network: a method rewrites a compound task into a partially ordered network of subtasks; primitive tasks map to STRIPS-like operators.
- Ordered task decomposition: SHOP2 expands tasks in the order they will be executed, so precondition tests see a fully known current state — no open-world guessing.
- Supports typed terms, axioms, and (in SHOP2 vs SHOP) partial order among subtasks plus extra domain axioms.
- Won the 2002 International Planning Competition's distinguished-performance award; JAIR 20:379–404, 2003.
- Full author list restored (was "Dana Nau et al."). Muñoz-Avila / Cao / Lotem / Mitchell are earlier SHOP authors, not this paper.

## Caveats

## Links

- DOI: [10.1613/jair.1141](https://doi.org/10.1613/jair.1141)
- IBM Research record: https://research.ibm.com/publications/shop2-an-htn-planning-system
