---
title: "MicroRTS: A Tool for Research on Automated RTS Game AI"
authors:
  - "Santiago Ontañón"
year: 2013
venue: "AIIDE / GitHub"
arxiv: null
doi: "10.1609/aiide.v9i1.12681"
source: "https://github.com/santiontanon/microrts"
topics:
  - rts
seed_rank: 336
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "game-ai"
relevance_score: 8
cites:
  - title: "The Combinatorial Multi-Armed Bandit Problem and Its Application to Real-Time Strategy Games"
    url: "https://doi.org/10.1609/aiide.v9i1.12681"
    year: 2013
    arxiv: null
    doi: "10.1609/aiide.v9i1.12681"
  - title: "Grandmaster level in StarCraft II using multi-agent reinforcement learning"
    url: "https://doi.org/10.1038/s41586-019-1724-z"
    year: 2019
    arxiv: null
    doi: "10.1038/s41586-019-1724-z"
  - title: "Build Order Optimization in StarCraft"
    url: "https://www.aaai.org/ocs/index.php/AIIDE/AIIDE11/paper/view/4078"
    year: 2011
    arxiv: null
    doi: null
see:
  - "009-grandmaster-level-in-starcraft-ii-using-multi-agent-reinforc"
  - "118-build-order-optimization-in-starcraft"
---

# MicroRTS: A Tool for Research on Automated RTS Game AI

## One-sentence takeaway

µRTS is a tiny grid RTS with a forward model, simultaneous durative actions, and optional fog of war, built so search and bandit algorithms can run thousands of playouts without a StarCraft binary.

## Why it matters here

GRID COMMAND research agents need a cheap deterministic RTS sandbox before they touch the real engine; µRTS is the classical one, and Ontañón’s AIIDE 2013 CMAB paper is the paper the repo tells you to cite.

## Key ideas

- The environment was introduced alongside *The Combinatorial Multi-Armed Bandit Problem and Its Application to Real-Time Strategy Games* (AIIDE 2013, DOI 10.1609/aiide.v9i1.12681).
- Units act simultaneously with durations; the joint action space is a CMAB (each unit an arm dimension), which is why naïve MCTS explodes and NaïveMCTS / Naïve Sampling exist.
- Built-in AIs: scripted rushers, minimax variants, Monte Carlo, UCT, NaïveMCTS. Configurable full vs. partial observability.
- Deterministic forward model makes tree search reproducible — the property commercial StarCraft APIs historically lacked.
- Later AI Magazine 2018 paper runs the first µRTS competition; Farama now mirrors the code, but santiontanon/microrts is the original.

## Caveats

## Links

- Repo: https://github.com/santiontanon/microrts
- AIIDE 2013: https://doi.org/10.1609/aiide.v9i1.12681
