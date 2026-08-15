---
title: "Applying Goal-Oriented Action Planning to Games"
authors:
  - "Jeff Orkin"
year: 2003
venue: "AI Game Programming Wisdom 2"
arxiv: null
doi: null
source: "https://web.archive.org/web/20230912173044/https://alumni.media.mit.edu/~jorkin/GOAP_draft_AIWisdom2_2003.pdf"
topics:
  - goap
  - planning
  - game-ai
seed_rank: 461
seed_batch: "lineage-shallow-2026-08-13"
reviewed: "2026-08-13"
pool: "game-ai"
relevance_score: 9
lineage: game-ai-planning
cites:
  - title: "STRIPS: A New Approach to the Application of Theorem Proving to Problem Solving"
    url: "https://doi.org/10.1016/0004-3702(71)90010-5"
    year: 1971
    doi: "10.1016/0004-3702(71)90010-5"
see:
  - "309-strips-a-new-approach-to-the-application-of-theorem-proving-"
---

# Applying Goal-Oriented Action Planning to Games

## One-sentence takeaway

Orkin recasts STRIPS-style planning for real-time NPCs: goals pick a desired world-state fragment, actions carry preconditions/effects/costs, and A* searches backward from the goal to assemble a plan.

## Why it matters here

This is the written GOAP architecture later shipped in F.E.A.R.; GRID COMMAND squad AI should cite this chapter for the planner, then the 2006 GDC talk for the production FSM-plus-plan split.

## Key ideas

- World state is a compact set of facts; a goal is a target assignment (KillEnemy ⇒ EnemyDead).
- Each action lists preconditions, effects, a numeric cost, and optional context checks that prune infeasible operators at search time.
- The planner regresses from the unsatisfied goal through action effects, using A* so cheaper tactics win without hard-coded sequences.
- Motivated by *No One Lives Forever 2* and later applied to *F.E.A.R.*: adding one new action (kick door, dive window) makes it available to every goal that can use it.

## Caveats

## Links

- Archived draft PDF: https://web.archive.org/web/20230912173044/https://alumni.media.mit.edu/~jorkin/GOAP_draft_AIWisdom2_2003.pdf
