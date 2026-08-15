---
title: "Planning as Heuristic Search"
authors:
  - "Blai Bonet"
  - "Héctor Geffner"
year: 2001
venue: "Artificial Intelligence"
arxiv: null
doi: "10.1016/S0004-3702(01)00108-4"
source: "https://doi.org/10.1016/S0004-3702(01)00108-4"
topics:
  - planning
  - heuristic
seed_rank: 369
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "game-ai"
relevance_score: 8
cites:
  - title: "STRIPS: A new approach to the application of theorem proving to problem solving"
    url: "https://doi.org/10.1016/0004-3702(71)90010-5"
    year: 1971
    arxiv: null
    doi: "10.1016/0004-3702(71)90010-5"
  - title: "Fast planning through planning graph analysis"
    url: "https://doi.org/10.1016/S0004-3702(96)00047-1"
    year: 1997
    arxiv: null
    doi: "10.1016/S0004-3702(96)00047-1"
  - title: "Real-time heuristic search"
    url: "https://doi.org/10.1016/0004-3702(90)90054-4"
    year: 1990
    arxiv: null
    doi: "10.1016/0004-3702(90)90054-4"
see:
  - "309-strips-a-new-approach-to-the-application-of-theorem-proving-"
---

# Planning as Heuristic Search

## One-sentence takeaway

Classical planning is just heuristic search in the state space once you extract admissible / informative heuristics from a relaxed STRIPS encoding — HSP’s h_add and h_max.

## Why it matters here

GRID COMMAND squad orders (breach, suppress, plant) are STRIPS-shaped action schemas. This paper is why GOAP-style game planners work at all: ignore delete lists, count remaining subgoals, run a greedy or best-first search, and you get a plan without a full theorem prover.

## Key ideas

- Compile a STRIPS task into a state space and search it with a heuristic derived from a relaxation (ignore deletes).
- h_max is admissible (good for A*); h_add is more informed and drives the original HSP greedy search.
- Planning-graph / Graphplan reachability is the competing way to get heuristics; HSP showed plain search plus a cheap relaxation was enough to beat many specialized planners.
- Sets up later FF / Fast Downward / landmark heuristics that game GOAP implementations quietly borrow.

## Caveats

## Links

- DOI: https://doi.org/10.1016/S0004-3702(01)00108-4
