---
title: "QMIX: Monotonic Value Function Factorisation for Deep Multi-Agent Reinforcement Learning"
authors:
  - "Tabish Rashid"
  - "Mikayel Samvelyan"
  - "Christian Schroeder de Witt"
  - "Gregory Farquhar"
  - "Jakob Foerster"
  - "Shimon Whiteson"
year: 2018
venue: "ICML"
arxiv: "1803.11485"
doi: null
source: "https://arxiv.org/abs/1803.11485"
topics:
  - multi-agent
seed_rank: 98
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "game-ai"
relevance_score: 9
cites:
  - title: "StarCraft II: A New Challenge for Reinforcement Learning"
    url: "https://arxiv.org/abs/1708.04782"
    year: 2017
    arxiv: "1708.04782"
    doi: null
  - title: "The StarCraft Multi-Agent Challenge"
    url: "https://arxiv.org/abs/1902.04043"
    year: 2019
    arxiv: "1902.04043"
    doi: null
  - title: "Human-level control through deep reinforcement learning"
    url: "https://doi.org/10.1038/nature14236"
    year: 2015
    arxiv: null
    doi: "10.1038/nature14236"
see:
  - "014-starcraft-ii-a-new-challenge-for-reinforcement-learning"
  - "010-the-starcraft-multi-agent-challenge"
---

# QMIX: Monotonic Value Function Factorisation for Deep Multi-Agent Reinforcement Learning

## One-sentence takeaway

QMIX mixes per-agent Q-values with a monotonic network so centralised training can use extra state while decentralised policies remain greedy in each agent's local Q.

## Why it matters here

Broadside squad coordination and GRID COMMAND micromanagement inherit this CTDE factorisation: train jointly on StarCraft-style state, execute independently.

## Key ideas

- Teams must act decentrally, but training can be centralised in simulation with global state and free communication.
- A mixing network estimates the joint action-value as a nonlinear combination of per-agent values that condition only on local observations.
- Monotonicity in each per-agent value makes joint argmax tractable off-policy and keeps centralised and decentralised policies consistent.
- Evaluated on challenging StarCraft II micromanagement maps; QMIX significantly outperforms prior value-based MARL methods.
- ICML 2018 camera-ready.

## Caveats

## Links

- arXiv: [1803.11485](https://arxiv.org/abs/1803.11485)
- PDF: https://arxiv.org/pdf/1803.11485
