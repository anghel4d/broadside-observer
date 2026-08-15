---
title: A Particle Model for State Estimation in Real-Time Strategy Games
authors:
- Ben G. Weber
- Michael Mateas
- Arnav Jhala
year: 2011
venue: AIIDE
arxiv: null
doi: 10.1609/aiide.v7i1.12424
source: https://doi.org/10.1609/aiide.v7i1.12424
topics:
- partial-observability
- opponent-modeling
- rts-bots
seed_rank: 116
seed_batch: prefill-2026-08-13
reviewed: '2026-08-13'
pool: "game-ai"
relevance_score: 9
cites:
  - title: "State Estimation for Game AI Using Particle Filters"
    url: "https://www.aaai.org/Papers/Workshops/2004/WS-04-04/WS04-04-008.pdf"
    year: 2004
    arxiv: null
    doi: null
  - title: "Particle filters in robotics"
    url: "http://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.20.567"
    year: 2002
    arxiv: null
    doi: null
  - title: "An evaluation of models for predicting opponent positions in first-person shooter video games"
    url: "https://doi.org/10.1109/cig.2008.5035619"
    year: 2008
    arxiv: null
    doi: "10.1109/cig.2008.5035619"
  - title: "Partial observability during predictions of the opponent's movements in an RTS game"
    url: "https://doi.org/10.1109/itw.2010.5593374"
    year: 2010
    arxiv: null
    doi: "10.1109/itw.2010.5593374"
  - title: "Terrain Analysis in Real-Time Strategy Games: An Integrated Approach to Choke Point Detection and Region Decomposition"
    url: "https://doi.org/10.1609/aiide.v6i1.12405"
    year: 2010
    arxiv: null
    doi: "10.1609/aiide.v6i1.12405"
  - title: "Reactive planning idioms for multi-scale game AI"
    url: "https://doi.org/10.1109/itw.2010.5593363"
    year: 2010
    arxiv: null
    doi: "10.1109/itw.2010.5593363"
  - title: "A Simplex Method for Function Minimization"
    url: "https://doi.org/10.1093/comjnl/7.4.308"
    year: 1965
    arxiv: null
    doi: "10.1093/comjnl/7.4.308"
  - title: "Human-Level AI's Killer Application: Interactive Computer Games"
    url: "http://ai-cbr.cs.auckland.ac.nz/papers/laird.pdf"
    year: 2000
    arxiv: null
    doi: null
see: []
---

# A Particle Model for State Estimation in Real-Time Strategy Games

## One-sentence takeaway

One particle per previously seen enemy unit, with a class-specific linear decay and a trajectory that mixes last motion, nearest chokepoint, and destination, is fit by Nelder–Mead on expert replays and lifts EISBot win and score ratios by over 10%.

## Why it matters here

Broadside / GRID COMMAND scouting cannot keep a full occupancy grid for hundreds of units; this is the cheap "last seen + drift + forget" tracker that still drives defend-base and attack-target tactics.

## Key ideas

- Occupancy maps need a grid resolution that either costs too much visibility work or is too coarse; RTS units are also indistinguishable across sightings, so a cloud-of-particles filter cannot cull candidates cleanly. One particle per last-seen unit plus decay sidesteps both.
- Four classes (building, worker, ground attacker, air attacker) get their own decay and motion/target weights. Buildings and workers live forever in the PvZ fit; air attackers forget in ~6 s. Trajectory is a weighted sum of unit-normalized movement, chokepoint, and (optional) target vectors.
- Update cycle: apply trajectory, apply decay, cull particles now in vision or at weight ≤ 0, spawn a weight-1 particle at last known position when a unit leaves vision. No renormalization.
- Offline: 10 ICCUP replays per match-up on distinct maps, state dumps every 5 s via BWAPI; error is mean absolute predicted-vs-actual threat per BWTA region. Optimized model accuracy 0.739 vs 0.669 last-known-position default; extra identity or destination features did not help on average.
- Online in EISBot (ABL), particles sit in working memory as tactic conditions. Perfect information *lost* to the learned model because the cheating agent stopped scouting and so stopped distracting rushes.

## Caveats

## Links

- DOI: [10.1609/aiide.v7i1.12424](https://doi.org/10.1609/aiide.v7i1.12424)
- PDF: https://ojs.aaai.org/index.php/AIIDE/article/download/12424/12283
