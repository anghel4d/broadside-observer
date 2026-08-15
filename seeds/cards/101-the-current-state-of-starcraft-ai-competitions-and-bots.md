---
title: "The Current State of StarCraft AI Competitions and Bots"
authors:
  - "Michal Čertický"
  - "David Churchill"
year: 2017
venue: "AIIDE Workshops"
arxiv: null
doi: "10.1609/aiide.v13i2.12961"
source: "https://doi.org/10.1609/aiide.v13i2.12961"
topics:
  - rts-bots
  - aiide-cog
seed_rank: 101
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "game-ai"
relevance_score: 9
cites:
  - title: "A Survey of Real-Time Strategy Game AI Research and Competition in StarCraft"
    url: "https://doi.org/10.1109/tciaig.2013.2286295"
    year: 2013
    arxiv: null
    doi: "10.1109/tciaig.2013.2286295"
  - title: "Call for AI Research in RTS Games"
    url: "http://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.120.1337"
    year: 2004
    arxiv: null
    doi: null
  - title: "The rating of chessplayers, past and present"
    url: "https://openalex.org/W1597864774"
    year: 1978
    arxiv: null
    doi: null
  - title: "TorchCraft: a Library for Machine Learning Research on Real-Time Strategy Games"
    url: "https://arxiv.org/abs/1611.00625"
    year: 2016
    arxiv: "1611.00625"
    doi: null
  - title: "Rock, Paper, StarCraft: Strategy Selection in Real-Time Strategy Games"
    url: "https://doi.org/10.1609/aiide.v12i1.12857"
    year: 2016
    arxiv: null
    doi: "10.1609/aiide.v12i1.12857"
  - title: "StarCraft Bots and Competitions"
    url: "https://doi.org/10.1007/978-3-319-08234-9_18-1"
    year: 2016
    arxiv: null
    doi: "10.1007/978-3-319-08234-9_18-1"
  - title: "What Google’s winning Go algorithm will do next"
    url: "https://doi.org/10.1038/531284a"
    year: 2016
    arxiv: null
    doi: "10.1038/531284a"
  - title: "Real‐Time Strategy Game Competitions"
    url: "https://doi.org/10.1609/aimag.v33i3.2419"
    year: 2012
    arxiv: null
    doi: "10.1609/aimag.v33i3.2419"
  - title: "Towards automatic StarCraft strategy generation using genetic programming"
    url: "https://doi.org/10.1109/cig.2015.7317940"
    year: 2015
    arxiv: null
    doi: "10.1109/cig.2015.7317940"
  - title: "High-Level Representations for Game-Tree Search in RTS Games"
    url: "https://doi.org/10.1609/aiide.v10i2.12734"
    year: 2014
    arxiv: null
    doi: "10.1609/aiide.v10i2.12734"
  - title: "RTS AI Problems and Techniques"
    url: "https://doi.org/10.1007/978-3-319-08234-9_17-1"
    year: 2015
    arxiv: null
    doi: "10.1007/978-3-319-08234-9_17-1"
  - title: "Automatic Observer Script for StarCraft: Brood War Bot Games (technical report)"
    url: "https://arxiv.org/abs/1505.00278"
    year: 2015
    arxiv: "1505.00278"
    doi: null
see:
  - "017-a-survey-of-real-time-strategy-game-ai-research-and-competit"
  - "023-call-for-ai-research-in-rts-games"
---

# The Current State of StarCraft AI Competitions and Bots

## One-sentence takeaway

SSCAIT, AIIDE, and CIG are the three annual Brood War ladders, and by 2016–17 the strongest BWAPI bots are hybrids of scripts, combat search, and light ML that still play at amateur human level.

## Why it matters here

This is the public scoring loop Broadside / GRID COMMAND RTS agents will be compared against: incomplete information, hundreds of simultaneous unit orders, and a frame clock that does not wait for the player.

## Key ideas

- All three competitions play full 1v1 StarCraft: Brood War through BWAPI (2009); DeepMind / Facebook / Microsoft interest is noted but the paper is about the academic ladders, not SC2.
- SSCAIT is year-round and streamed one game at a time (Twitch + SmashCast), with a short tournament phase plus an ~11-month ladder, viewer voting, ELO, and an ICCUP-style rank; ~70 active ladder bots in 2016–17.
- AIIDE is the oldest (since 2010), forces open source, and runs a two-week round-robin at super-human speed (2016: 21 bots, 90 cycles, 1800 games each). CIG hides the map pool, dropped the open-source rule, and uses a qualifier then an 8-bot final.
- Representative mechanisms: LetaBot MCTS over squad movement plus Liquipedia-mined build orders; MegaBot as a multi-armed bandit over three specialist bots; Steamhammer combat sim with alpha-beta / portfolio search; tscmoo self-written sim, threat-aware pathing, and RNN experiments for strategy.
- Participation and game counts have risen since 2010; the authors' claim is amateur-human competence, with expert-human play still ahead.

## Caveats

## Links

- DOI: [10.1609/aiide.v13i2.12961](https://doi.org/10.1609/aiide.v13i2.12961)
- PDF: https://certicky.github.io/files/publications/aiide17-certicky-churchill.pdf
- URL: https://doi.org/10.1609/aiide.v13i2.12961
