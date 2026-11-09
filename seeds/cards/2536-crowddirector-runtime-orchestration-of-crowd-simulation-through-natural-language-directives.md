---
title: "CrowdDirector: Runtime Orchestration of Crowd Simulation through Natural-Language Directives"
authors:
  - "Xiaohan Sun"
  - "Vuk Radovanovic"
  - "Merce Alvarez"
  - "Carol O'Sullivan"
  - "Yiorgos Chrysanthou"
  - "Panayiotis Charalambous"
year: 2026
venue: "arXiv preprint (cs.GR)"
arxiv: "2611.08763"
doi: null
source: "https://arxiv.org/abs/2611.08763"
topics:
  - "nl-game-commands"
  - "partial-observability-multiagent"
seed_rank: 2536
seed_batch: "craft-2026-11-09"
reviewed: "2026-11-09"
pool: "game-ai"
relevance_score: 8
lineage: nl-game-commands
cites:
  - title: "CrowdDirector: Runtime Orchestration of Crowd Simulation through Natural-Language Directives"
    url: "https://arxiv.org/abs/2611.08763"
    year: 2026
    arxiv: "2611.08763"
    doi: null
see: ["1433-crowd-pathfinding-and-steering-using-flow-field-tiles", "201-steering-behaviors-for-autonomous-characters"]
---

# CrowdDirector: Runtime Orchestration of Crowd Simulation through Natural-Language Directives

## One-sentence takeaway

CrowdDirector calls an LLM only when the user adds or changes an instruction, validates the resulting structured instruction against the live scene, stores it as a standing order, and lets a graph neural network pick each agent's action and target every tick.

## Why it matters here

This is the architecture GRID COMMAND needs for spoken orders: the language model is a compiler from words into a checked standing rule, not a per-tick controller. It lines up with ano's する/なる standing rules, where an order is translated once and then holds. The scene validator, which agreed with human judgement more often than the LLM's own feasibility check, is the piece to copy first: reject orders naming units or actions that do not exist before they reach the sim.

## Key ideas

- **LLM on edit only.** Translation happens when an instruction is added or changed, avoiding repeated latency, cost and unsupported actions.
- **Scene validator.** Checks that referenced entities and actions exist in the current Unity scene before accepting an instruction.
- **Standing instructions.** Accepted instructions stay active for the rest of the run.
- **Per-tick GNN policy.** A graph neural network maps scene state plus active instruction to an action and target per agent; Unity handles motion and animation. It is trained offline on simulated scenarios with LLM guidance.
- **Result.** Follows instructions more closely than handwritten rules on their benchmark while avoiding repeated LLM calls.

## Caveats

I read only the abstract. The behavioural benchmark is the authors' own; crowd size, tick rate and GNN cost are not stated there. Unity-based crowds are cooperative, not adversarial RTS squads under fog of war.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.08763
- PDF: https://arxiv.org/pdf/2611.08763
