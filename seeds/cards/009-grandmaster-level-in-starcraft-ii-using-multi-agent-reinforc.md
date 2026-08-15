---
title: "Grandmaster level in StarCraft II using multi-agent reinforcement learning"
authors:
  - "Oriol Vinyals"
  - "Igor Babuschkin"
  - "Wojciech M. Czarnecki"
  - "Michaël Mathieu"
  - "Andrew Dudzik"
  - "Junyoung Chung"
  - "David H. Choi"
  - "Richard Powell"
  - "Timo Ewalds"
  - "Petko Georgiev"
  - "Junhyuk Oh"
  - "Dan Horgan"
  - "Manuel Kroiss"
  - "Ivo Danihelka"
  - "Aja Huang"
  - "Laurent Sifre"
  - "Trevor Cai"
  - "John P. Agapiou"
  - "Max Jaderberg"
  - "Alexander S. Vezhnevets"
  - "Rémi Leblond"
  - "Tobias Pohlen"
  - "Valentin Dalibard"
  - "David Budden"
  - "Yury Sulsky"
  - "James Molloy"
  - "Tom L. Paine"
  - "Caglar Gulcehre"
  - "Ziyu Wang"
  - "Tobias Pfaff"
  - "Yuhuai Wu"
  - "Roman Ring"
  - "Dani Yogatama"
  - "Dario Wünsch"
  - "Katrina McKinney"
  - "Oliver Smith"
  - "Tom Schaul"
  - "Timothy Lillicrap"
  - "Koray Kavukcuoglu"
  - "Demis Hassabis"
  - "Chris Apps"
  - "David Silver"
year: 2019
venue: "Nature"
arxiv: null
doi: "10.1038/s41586-019-1724-z"
source: "https://www.nature.com/articles/s41586-019-1724-z"
topics:
  - rts
  - marl
seed_rank: 9
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "game-ai"
relevance_score: 10
cites:
  - title: "StarCraft II: A New Challenge for Reinforcement Learning"
    url: "https://arxiv.org/abs/1708.04782"
    year: 2017
    arxiv: "1708.04782"
    doi: null
  - title: "Attention Is All You Need"
    url: "https://arxiv.org/abs/1706.03762"
    year: 2017
    arxiv: "1706.03762"
    doi: null
see:
  - "014-starcraft-ii-a-new-challenge-for-reinforcement-learning"
  - "013-attention-is-all-you-need"
---

# Grandmaster level in StarCraft II using multi-agent reinforcement learning

## One-sentence takeaway

AlphaStar reaches Grandmaster on all three StarCraft II races and ranks above 99.8% of official Battle.net players by training a league of continually adapting neural strategies, not a single self-play agent.

## Why it matters here

GRID COMMAND needs the same lesson: RTS strategy is non-transitive, so one policy collapses. A league of main agents plus exploiters is the training shape for fog-of-war commanders, not vanilla self-play.

## Key ideas

- Prior bots simplified the game, used superhuman APM, or shipped hand-crafted subsystems; AlphaStar plays the full game through a camera-limited interface with general-purpose learning.
- Training starts from human-replay imitation, then a multi-agent league: main agents chase overall strength, exploiters hunt their weaknesses, and historical snapshots freeze forgotten strategies.
- Each agent is a deep network (Transformer + LSTM + pointer heads) that selects both what to do and which units to act on under partial observability.
- Evaluation is live Battle.net play, not a scripted AI: Grandmaster for Protoss, Terran, and Zerg.
- Ablations in the paper isolate the league, imitation prior, and architecture as jointly necessary for that rating.

## Caveats

## Links

- DOI: [10.1038/s41586-019-1724-z](https://doi.org/10.1038/s41586-019-1724-z)
- Nature: https://www.nature.com/articles/s41586-019-1724-z
- DeepMind: https://deepmind.google/blog/alphastar-grandmaster-level-in-starcraft-ii-using-multi-agent-reinforcement-learning/
