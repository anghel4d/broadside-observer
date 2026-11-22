---
title: "Scalable Iterative Multi-Agent Path Finding under Turn Constraints"
authors:
  - "Zheyu Tao"
  - "Chunlong Yu"
  - "Yicheng Hu"
year: 2026
venue: "arXiv preprint (cs.RO)"
arxiv: "2611.23911"
doi: null
source: "https://arxiv.org/abs/2611.23911"
version_reviewed: "v1"
topics:
  - "pathfinding"
  - "strategy-rts-agents"
  - "game-ai"
seed_rank: 2684
seed_batch: "frontier-2026-11-22"
reviewed: "2026-11-22"
pool: "game-ai"
relevance_score: 7
cites:
  - title: "Scalable Iterative Multi-Agent Path Finding under Turn Constraints"
    url: "https://arxiv.org/abs/2611.23911"
    year: 2026
    arxiv: "2611.23911"
    doi: null
  - title: "Multi-Agent Pathfinding: Definitions, Variants, and Benchmarks"
    url: "https://arxiv.org/abs/1906.08291"
    year: 2019
    arxiv: "1906.08291"
    doi: null
---

# Scalable Iterative Multi-Agent Path Finding under Turn Constraints

## One-sentence takeaway

PIBT*_T extends Priority Inheritance with Backtracking, the one-timestep-at-a-time MAPF solver, to agents that must rotate before moving. It decouples "my request for the next cell was accepted" from "I vacated my cell" and adds fixes for turn-induced deadlock, livelock and repeated pushing. It solves instances with up to 1,000 agents in seconds.

## Why it matters here

Units with facing and turn rates are the normal case in an RTS like GRID COMMAND. Classical grid MAPF ignores orientation and produces staircase paths that look wrong and execute slowly. PIBT's per-tick joint step fits a fixed-tick deterministic simulation better than whole-plan search, and this paper shows how to keep that property once turning costs time. The ADG-based execution check (does the plan's makespan survive realistic execution?) is the right test harness for unit movement too.

## Key ideas

- **Why naive PIBT breaks.** PIBT assumes that when an agent's move into a neighbour is accepted, it frees its current vertex in the same step. With turns, it may first rotate in place, so the two events separate in time.
- **Mechanisms.** Explicit handling of turn-induced dependencies, local-deadlock and livelock resolution, and suppression of inefficient repeated pushing, while keeping PIBT's lightweight single-step planning.
- **Scale.** High success rates on standard MAPF benchmarks, with up to 1,000 agents solved within seconds.
- **Realism.** Action-dependency-graph execution simulation and a flexible-manufacturing case study show that turn-aware plans reduce actual makespan compared with classical MAPF plans. TurtleBot4 robots validate feasibility.

## Caveats

Read from the abstract and introduction of v1 (29 pages); results are the authors' own. This is a robotics paper on 4-connected grids with unit rotations, so continuous RTS movement, formations and dynamic obstacles are out of scope. PIBT-family solvers are incomplete on their own (LaCAM-style wrappers usually supply completeness). Builds on the authors' 2025 conference version. Submitted 18 Nov (Thursday 19 Nov listing, cs.RO), which the 11-20 frontier did not poll, so this is gap-fill.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.23911
- PDF: https://arxiv.org/pdf/2611.23911
- HTML: https://arxiv.org/html/2611.23911v1
- Code: https://github.com/tzy82065/PIBTT2
