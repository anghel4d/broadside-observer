---
title: "Forward Modeling for Partial Observation Strategy Games - A StarCraft Defogger"
authors:
  - "Gabriel Synnaeve"
  - "Zeming Lin"
  - "Jonas Gehring"
  - "Dan Gant"
  - "Vegard Mella"
  - "Vasil Khalidov"
  - "Nicolas Carion"
  - "Nicolas Usunier"
year: 2018
venue: "NeurIPS"
arxiv: "1812.00054"
doi: null
source: "https://arxiv.org/abs/1812.00054"
topics:
  - partial-observability
  - rts-bots
  - opponent-modeling
seed_rank: 96
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
  - title: "A Bayesian model for opening prediction in RTS games with application to StarCraft"
    url: "https://doi.org/10.1109/cig.2011.6032018"
    year: 2011
    arxiv: null
    doi: "10.1109/cig.2011.6032018"
  - title: "A Particle Model for State Estimation in Real-Time Strategy Games"
    url: "https://doi.org/10.1609/aiide.v7i1.12424"
    year: 2011
    arxiv: null
    doi: "10.1609/aiide.v7i1.12424"
see:
  - "014-starcraft-ii-a-new-challenge-for-reinforcement-learning"
  - "115-a-bayesian-model-for-opening-prediction-in-rts-games-with-ap"
  - "116-a-particle-model-for-state-estimation-in-real-time-strategy-"
---

# Forward Modeling for Partial Observation Strategy Games - A StarCraft Defogger

## One-sentence takeaway

Defogging is cast as state estimation plus future-state prediction from partial RTS observations, implemented as a conv+recurrent encoder–decoder trained on human StarCraft: Brood War replays.

## Why it matters here

GRID COMMAND and Broadside bots fight in fog; this is neural occupancy/unit prediction that a rule-based bot can actually consume.

## Key ideas

- Proxy tasks and baselines test whether the model learned basic game rules versus high-level dynamics.
- CNNs capture spatial structure; recurrent layers capture sequential correlation across the fog of war.
- Downstream, enemy-unit predictions are plugged into a then-SOTA rule-based StarCraft bot and raise win rates against strong community bots.
- Training data is a large corpus of human Brood War games, not only self-play.
- NeurIPS 2018 (Advances in Neural Information Processing Systems 31, 10759–10770).

## Caveats

## Links

- arXiv: [1812.00054](https://arxiv.org/abs/1812.00054)
- PDF: https://arxiv.org/pdf/1812.00054
