---
title: "Portfolio Greedy Search and Simulation for Large-Scale Combat in StarCraft"
authors:
  - "David Churchill"
  - "Michael Buro"
year: 2013
venue: "CIG"
arxiv: null
doi: "10.1109/CIG.2013.6633643"
source: "https://doi.org/10.1109/CIG.2013.6633643"
topics:
  - rts-bots
  - aiide-cog
  - multi-agent
seed_rank: 113
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "game-ai"
relevance_score: 9
cites:
  - title: "Build Order Optimization in StarCraft"
    url: "https://doi.org/10.1609/aiide.v7i1.12435"
    year: 2011
    arxiv: null
    doi: "10.1609/aiide.v7i1.12435"
  - title: "A Survey of Real-Time Strategy Game AI Research and Competition in StarCraft"
    url: "https://doi.org/10.1109/TCIAIG.2013.2286295"
    year: 2013
    arxiv: null
    doi: "10.1109/TCIAIG.2013.2286295"
see:
  - "118-build-order-optimization-in-starcraft"
  - "017-a-survey-of-real-time-strategy-game-ai-research-and-competit"
---

# Portfolio Greedy Search and Simulation for Large-Scale Combat in StarCraft

## One-sentence takeaway

Portfolio Greedy Search hill-climbs per-unit script assignments from a tiny portfolio and evaluates them with SparCraft playouts, beating Alpha-Beta and UCT on 50 vs 50 StarCraft fights inside a 40 ms budget.

## Why it matters here

GRID COMMAND / Broadside micro cannot enumerate the $L^U$ joint action space; PGS is the pattern for searching script portfolios under a hard frame budget instead of hoping tree search scales.

## Key ideas

- SparCraft is an abstract combat model (attack / move / wait, exact Brood War stats, no collisions or fog) fast enough for tens of thousands of simulated moves per search episode.
- UCT Considering Durations (UCTCD) adapts UCT to simultaneous, durative actions via FIRST/SECOND/SOLO nodes and delayed effect application, the same trick as ABCD.
- PGS seeds every unit with the single best portfolio script, then Improve() tries each script on each unit in turn, keeping the assignment whose playout scores highest; R response passes re-improve the opponent model.
- The portfolio used in the experiments is two scripts (including No-OverKill-Attack-Value); search is linear in units × |P| instead of exponential in legal move combinations.
- On separated (approaching-army) maps, PGS wins nearly all 32+ unit battles vs ABCD and >90% vs UCTCD; ABCD still wins the smallest 8 vs 8 cases, suggesting a size-switched hybrid.

## Caveats

## Links

- DOI: [10.1109/CIG.2013.6633643](https://doi.org/10.1109/CIG.2013.6633643)
- PDF: https://davechurchill.ca/publications/pdf/combat13.pdf
