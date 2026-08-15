---
title: "STRIPS: A New Approach to the Application of Theorem Proving to Problem Solving"
authors:
  - "Richard E. Fikes"
  - "Nils J. Nilsson"
year: 1971
venue: "Artificial Intelligence"
arxiv: null
doi: "10.1016/0004-3702(71)90010-5"
source: "https://doi.org/10.1016/0004-3702(71)90010-5"
topics:
  - planning
  - strips
seed_rank: 309
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "game-ai"
relevance_score: 9
lineage: game-ai-planning
cites:
  - title: "Applying Goal-Oriented Action Planning to Games"
    url: "https://alumni.media.mit.edu/~jorkin/goap.html"
    year: 2003
    arxiv: null
    doi: null
  - title: "Three States and a Plan: The AI of F.E.A.R."
    url: "https://alumni.media.mit.edu/~jorkin/gdc2006_orkin_jeff_fear.pdf"
    year: 2006
    arxiv: null
    doi: null
  - title: "SHOP2: An HTN Planning System"
    url: "https://doi.org/10.1613/jair.1141"
    year: 2003
    arxiv: null
    doi: "10.1613/jair.1141"
see:
  - "022-three-states-and-a-plan-the-ai-of-f-e-a-r"
  - "296-shop2-an-htn-planning-system"
---

# STRIPS: A New Approach to the Application of Theorem Proving to Problem Solving

## One-sentence takeaway

STRIPS represents actions as precondition / add / delete lists and searches a space of world models, so a theorem prover only has to prove the preconditions rather than the entire next-state theory.

## Why it matters here

GOAP in F.E.A.R. and any Broadside unit planner that says “if I have ammo and line of sight, Fire” is this representation with a cheaper search; the add/delete lists are still how game AIs describe operators.

## Key ideas

- A world model is a set of first-order ground literals. An operator has a precondition formula plus add and delete lists that rewrite the model.
- The planner works backwards from the goal, picking an operator whose add list mentions an unsatisfied goal literal and pushing the operator’s preconditions onto the goal stack.
- GPS-style means-ends analysis plus a resolution theorem prover for precondition tests let Shakey plan in rooms-and-boxes domains without encoding the whole frame problem in logic.
- The frame problem is handled implicitly: anything not deleted or added stays true.
- Fikes and Nilsson published this in *Artificial Intelligence* 2 (1971); every later GOAP/HTN discussion treats it as the classical baseline.

## Caveats

## Links

- DOI: [10.1016/0004-3702(71)90010-5](https://doi.org/10.1016/0004-3702(71)90010-5)
