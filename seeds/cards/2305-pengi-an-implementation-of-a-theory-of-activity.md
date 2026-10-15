---
title: "Pengi: An Implementation of a Theory of Activity"
authors:
  - "Philip E. Agre"
  - "David Chapman"
year: 1987
venue: "AAAI-87 (Sixth National Conference on Artificial Intelligence), 268–272"
arxiv: null
doi: null
source: "https://cdn.aaai.org/AAAI/1987/AAAI87-048.pdf"
topics:
  - game-ai
  - reactive-agents
  - deictic-representation
  - action-selection
seed_rank: 2305
seed_batch: "archive-2026-10-16"
reviewed: "2026-10-16"
pool: "game-ai"
relevance_score: 8
lineage: reactive-action-selection
see:
  - 022-three-states-and-a-plan-the-ai-of-f-e-a-r
  - 201-steering-behaviors-for-autonomous-characters
  - 042-rete-a-fast-algorithm-for-the-many-pattern-many-object-patte
cites:
  - title: "Pengi: An Implementation of a Theory of Activity"
    url: "https://cdn.aaai.org/AAAI/1987/AAAI87-048.pdf"
    year: 1987
    arxiv: null
    doi: null
  - title: "Three States and a Plan: The AI of F.E.A.R."
    url: "https://alumni.media.mit.edu/~jorkin/gdc2006_orkin_jeff_fear.pdf"
    year: 2006
    arxiv: null
    doi: null
---

# Pengi: An Implementation of a Theory of Activity

## One-sentence takeaway

Agre and Chapman build an agent that plays the arcade game Pengo with no world model and no planner: a stateless combinational network registers "indexical-functional aspects" of the current situation (the-bee-on-the-other-side-of-this-block-next-to-me) via visual routines, proposes locally plausible actions, and resolves conflicts by layered arbitration.

## Why it matters here

GRID COMMAND units face exactly Pengi's three conditions — many objects, unpredictable opponents, real-time response — and the library's game-AI shelf has planners (F.E.A.R. GOAP, 022) and steering (201) but not the deictic-representation idea that sits between them. Naming entities by their role relative to the agent instead of by global id makes behaviours generalize for free and keeps per-unit perception cheap enough to run for thousands of units; "visual routines" map naturally onto grid queries (ray-march, flood fill, drop a marker) over the ECS world.

## Key ideas

- **Planning vs. improvisation.** Capital-P Planning (plan, then execute) is argued to be combinatorially explosive and brittle under uncertainty; most activity is deciding what to do now from how the world is now, with plans used more like recipes.
- **Indexical-functional entities and aspects.** Instead of gensyms for every object, the agent tracks entities such as the-block-I'm-pushing or the-corridor-I'm-running-along; their extension changes with circumstances, so a lesson learned about one bee applies to whichever bee next fills the role.
- **Visual routines processor.** Following Ullman, a peripheral processor runs operations on images — tracing rays, colouring regions, dropping visual markers — under the network's direction; e.g. finding the block a kicked block will hit by tracing forward and marking where it stops.
- **Stateless central network plus arbitration.** Boolean combinations of perceptual inputs register aspects and suggest actions; conflicting suggestions are overruled by other aspects in levels (run from the bee, unless a block is between you, unless the bee is closer to it…), giving planful-looking sequencing without searching future states.
- **Status as reported.** Several hundred gates and about thirty visual-routine operators; it played Pengo "badly, in near real time", could use blocks as projectiles and flee chasing bees.

## Caveats

This is an implementation-in-progress paper with no quantitative evaluation; the authors themselves say it played badly. All arbitration is hand-designed by someone who understands the game's dynamics, so it does not learn or scale design effort. Stateless operation is a provocation (the authors concede humans have state), and the domain is a toy with no real perception. Read it for the representation idea, then combine it with planners or learned policies.

## Links

- Paper (PDF, AAAI): https://cdn.aaai.org/AAAI/1987/AAAI87-048.pdf
