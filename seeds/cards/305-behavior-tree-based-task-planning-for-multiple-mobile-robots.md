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
seed_rank: 305
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "game-ai"
relevance_score: 9
---

# Behavior Tree-Based Task Planning for Multiple Mobile Robots using a Data Distribution Service

## One-sentence takeaway

In this study, we propose task planning framework for multiple robots that builds on a behavior tree (BT).

## Why it matters here

Classical game/RTS AI technique (non-LLM) for GRID COMMAND lineage (Behavior Tree-Based Task Planning for Multiple Mobile Robots using a Data Distri).

## Key ideas

- In this study, we propose task planning framework for multiple robots that builds on a behavior tree (BT).
- BTs communicate with a data distribution service (DDS) to send and receive data.
- Since the standard BT derived from one root node with a single tick is unsuitable for multiple robots, a novel type of BT action and improved nodes are proposed to control multiple robots through a DDS asynchronously.
- To plan tasks for robots efficiently, a single task planning unit is implemented with the proposed task types.
- The task planning unit assigns tasks to each robot simultaneously through a single coalesced BT.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2201.10918](https://arxiv.org/abs/2201.10918)
- URL: https://arxiv.org/abs/2201.10918
