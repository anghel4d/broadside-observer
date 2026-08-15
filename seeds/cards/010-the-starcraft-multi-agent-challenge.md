---
title: "The StarCraft Multi-Agent Challenge"
authors:
  - "Mikayel Samvelyan"
  - "Tabish Rashid"
  - "Christian Schroeder de Witt"
  - "Gregory Farquhar"
  - "Nantas Nardelli"
  - "Tim G. J. Rudner"
  - "Chia-Man Hung"
  - "Philip H. S. Torr"
  - "Jakob Foerster"
  - "Shimon Whiteson"
year: 2019
venue: "AAMAS"
arxiv: "1902.04043"
doi: null
source: "https://arxiv.org/abs/1902.04043"
topics:
  - multi-agent
  - partial-observability
  - rts-bots
seed_rank: 10
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "game-ai"
relevance_score: 10
cites:
  - title: "QMIX: Monotonic Value Function Factorisation for Deep Multi-Agent Reinforcement Learning"
    url: "https://arxiv.org/abs/1803.11485"
    year: 2018
    arxiv: "1803.11485"
    doi: null
  - title: "StarCraft II: A New Challenge for Reinforcement Learning"
    url: "https://arxiv.org/abs/1708.04782"
    year: 2017
    arxiv: "1708.04782"
    doi: null
see:
  - "098-qmix-monotonic-value-function-factorisation-for-deep-multi-a"
  - "014-starcraft-ii-a-new-challenge-for-reinforcement-learning"
---

# The StarCraft Multi-Agent Challenge

## One-sentence takeaway

SMAC is a cooperative micromanagement benchmark on StarCraft II where each unit is an independent agent that must coordinate from local observations, filling the ALE/MuJoCo-shaped hole in multi-agent RL.

## Why it matters here

GRID COMMAND squads are SMAC: partial observability, no central god-view at act time, and credit that only makes sense at the team level. This is the testbed for ano-driven unit AI, not the full-economy SC2LE game.

## Key ideas

- Cooperative MARL under partial observability lacked a standardized environment; papers were stuck on one-off grid worlds that could not measure real progress.
- Each SMAC scenario is a combat encounter: one agent per allied unit, local sight range, and a shared win/loss reward — macro economy is stripped out so micromanagement is isolated.
- The suite spans symmetric, asymmetric, and heterogeneous unit-type maps with published evaluation protocols so algorithms can be compared fairly.
- The authors ship a learning framework with then-SOTA methods (including QMIX-style value factorization) and recommended best practices.
- Videos of strong agents show focus-fire, kiting, and terrain use emerging from independent policies rather than scripted micro.

## Caveats

## Links

- arXiv: [1902.04043](https://arxiv.org/abs/1902.04043)
- PDF: https://arxiv.org/pdf/1902.04043
- Videos: https://youtu.be/VZ7zmQ_obZ0
