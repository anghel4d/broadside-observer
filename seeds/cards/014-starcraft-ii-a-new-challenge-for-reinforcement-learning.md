---
title: "StarCraft II: A New Challenge for Reinforcement Learning"
authors:
  - "Oriol Vinyals"
  - "Timo Ewalds"
  - "Sergey Bartunov"
  - "Petko Georgiev"
  - "Alexander Sasha Vezhnevets"
  - "Michelle Yeo"
  - "Alireza Makhzani"
  - "Heinrich Küttler"
  - "John Agapiou"
  - "Julian Schrittwieser"
  - "John Quan"
  - "Stephen Gaffney"
  - "Stig Petersen"
  - "Karen Simonyan"
  - "Tom Schaul"
  - "Hado van Hasselt"
  - "David Silver"
  - "Timothy Lillicrap"
  - "Kevin Calderone"
  - "Paul Keet"
  - "Anthony Brunasso"
  - "David Lawrence"
  - "Anders Ekermo"
  - "Jacob Repp"
  - "Rodney Tsing"
year: 2017
venue: "arXiv:cs.LG"
arxiv: "1708.04782"
doi: null
source: "https://arxiv.org/abs/1708.04782"
topics:
  - rts-bots
  - partial-observability
  - multi-agent
seed_rank: 14
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "game-ai"
relevance_score: 10
cites:
  - title: "A Survey of Real-Time Strategy Game AI Research and Competition in StarCraft"
    url: "https://doi.org/10.1109/TCIAIG.2013.2286295"
    year: 2013
    arxiv: null
    doi: "10.1109/TCIAIG.2013.2286295"
see:
  - "017-a-survey-of-real-time-strategy-game-ai-research-and-competit"
---

# StarCraft II: A New Challenge for Reinforcement Learning

## One-sentence takeaway

SC2LE / PySC2 exposes StarCraft II as an RL environment with feature-plane observations, a huge combinatorial action space, fog of war, and delayed credit over thousands of steps — plus minigames and a human replay set.

## Why it matters here

This is the official door into modern RTS RL for Broadside: the observation/action spec GRID COMMAND agents will resemble, and the reason “just run A3C on the full game” was already shown not to work in 2017.

## Key ideas

- The domain is multi-player, partially observed, multi-agent at the unit level, with hundreds of selectable entities and credit assignment stretched over full matches.
- Observations are raw feature planes (not the rendered pixels); actions select a function and its arguments through an open Python API talking to the game engine.
- Beside ladder maps, a minigame suite isolates skills (collect minerals, defeat zerglings, build marines) so algorithms can score partial competence.
- A large human-replay dataset supports supervised baselines for outcome and action prediction.
- Canonical deep RL agents reach novice play on minigames and make essentially no progress on the full game — the paper’s point is the challenge, not a solved agent.

## Caveats

## Links

- arXiv: [1708.04782](https://arxiv.org/abs/1708.04782)
- PDF: https://arxiv.org/pdf/1708.04782
