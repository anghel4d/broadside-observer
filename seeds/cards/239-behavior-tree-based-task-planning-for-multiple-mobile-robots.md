---
title: "Behavior Tree-Based Task Planning for Multiple Mobile Robots using a Data Distribution Service"
authors:
  - "Seungwoo Jeong"
  - "Taekwon Ga"
  - "Inhwan Jeong"
  - "Jongeun Choi"
year: 2022
venue: "arXiv:cs.RO"
arxiv: "2201.10918"
doi: null
source: "https://arxiv.org/abs/2201.10918"
topics:
  - gameai
seed_rank: 239
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "game-ai"
relevance_score: 9
cites:
  - title: "Behavior Trees in Robotics and AI: An Introduction"
    url: "https://arxiv.org/abs/1709.00084"
    year: 2017
    arxiv: "1709.00084"
    doi: null
  - title: "Topology-Guided ORCA: Smooth Multi-Agent Motion Planning in Constrained Environments"
    url: "https://arxiv.org/abs/2407.16771"
    year: 2024
    arxiv: "2407.16771"
    doi: null
see:
  - "460-behavior-trees-in-robotics-and-ai-an-introduction"
  - "225-topology-guided-orca-smooth-multi-agent-motion-planning-in-c"
---

# Behavior Tree-Based Task Planning for Multiple Mobile Robots using a Data Distribution Service

## One-sentence takeaway

A single coalesced behavior tree assigns tasks to many robots over DDS, with per-robot recovery BTs and shared action variables, demonstrated on three mobiles cycling four goals.

## Why it matters here

GRID COMMAND squad AI is already behavior-tree shaped; this paper is the multi-agent, async-tick version — one planner tree, many bodies, a comms bus instead of a single-root tick.

## Key ideas

- A classic single-root, single-tick BT cannot drive multiple robots asynchronously.
- New action types and node variants talk to a Data Distribution Service so ticks and results move without a shared clock.
- One task-planning unit owns a coalesced BT and assigns work to every robot at once.
- If a robot faults, a second BT on the robot enters recovery; the action is a DDS-shared variable the planner can rewrite.
- Hardware demo: three mobile robots alternating among four goal poses under that single planner.

## Caveats

## Links

- arXiv: [2201.10918](https://arxiv.org/abs/2201.10918)
- PDF: https://arxiv.org/pdf/2201.10918
