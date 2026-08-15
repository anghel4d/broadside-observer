---
title: "Three States and a Plan: The AI of F.E.A.R."
authors:
  - "Jeff Orkin"
year: 2006
venue: "GDC"
arxiv: null
doi: null
source: "https://alumni.media.mit.edu/~jorkin/gdc2006_orkin_jeff_fear.pdf"
topics:
  - planning
  - game-ai
seed_rank: 22
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "game-ai"
relevance_score: 10
lineage: game-ai-planning
cites:
  - title: "Applying Goal-Oriented Action Planning to Games"
    url: "https://alumni.media.mit.edu/~jorkin/goap.html"
    year: 2003
    arxiv: null
    doi: null
  - title: "STRIPS: A New Approach to the Application of Theorem Proving to Problem Solving"
    url: "https://doi.org/10.1016/0004-3702(71)90010-5"
    year: 1971
    arxiv: null
    doi: "10.1016/0004-3702(71)90010-5"
  - title: "Rete: A Fast Algorithm for the Many Pattern/Many Object Pattern Match Problem"
    url: "https://doi.org/10.1016/0004-3702(82)90020-0"
    year: 1982
    arxiv: null
    doi: "10.1016/0004-3702(82)90020-0"
see:
  - "461-applying-goal-oriented-action-planning-to-games"
  - "309-strips-a-new-approach-to-the-application-of-theorem-proving-"
  - "042-rete-a-fast-algorithm-for-the-many-pattern-many-object-patte"
---

# Three States and a Plan: The AI of F.E.A.R.

## One-sentence takeaway

F.E.A.R.’s squad AI is a STRIPS planner in a shipped FPS: A* over goal-oriented actions, a working-memory fact blackboard, and only a handful of animation states — so designers add verbs, not new FSMs.

## Why it matters here

GRID COMMAND squads should plan, not animate a 200-state chart. GOAP is the shipped proof that a planner plus a Rete/blackboard fact base can look “smart” under fire without per-NPC scripts.

## Key ideas

- The talk’s joke is the title: the animation FSM has three states (goto, animate, use-smart-object); all the apparent variety is a plan composed at runtime.
- Actions are STRIPS operators with preconditions and effects over a working memory of world facts; A* searches for a sequence that satisfies the current goal.
- Goals compete (kill enemy, take cover, patrol); the highest-priority unsatisfied goal is planned for, so behavior switches without an explicit transition table.
- Shared working memory plus barks (“I’m hitting him from the left”) make independently planned agents look coordinated.
- Designers author new actions and smart objects; they do not grow the FSM. That is why the system survived production.

## Caveats

## Links

- PDF: https://alumni.media.mit.edu/~jorkin/gdc2006_orkin_jeff_fear.pdf
- GOAP notes: https://alumni.media.mit.edu/~jorkin/goap.html
