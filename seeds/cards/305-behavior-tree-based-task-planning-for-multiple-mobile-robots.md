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
cites:
  - title: "Do Orcas Have Semantic Language? Machine Learning to Predict Orca Behaviors Using Partially Labeled Vocalization Data"
    url: "https://arxiv.org/abs/2302.10983"
    year: 2023
    arxiv: "2302.10983"
    doi: null
    card: "291-do-orcas-have-semantic-language-machine-learning-to-predict-"
  - title: "Benchmarking ORCA PT-1 Boson Sampler in Simulation"
    url: "https://arxiv.org/abs/2505.23217"
    year: 2025
    arxiv: "2505.23217"
    doi: null
    card: "267-benchmarking-orca-pt-1-boson-sampler-in-simulation"
  - title: "Topology-Guided ORCA: Smooth Multi-Agent Motion Planning in Constrained Environments"
    url: "https://arxiv.org/abs/2407.16771"
    year: 2024
    arxiv: "2407.16771"
    doi: null
    card: "287-topology-guided-orca-smooth-multi-agent-motion-planning-in-c"
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
