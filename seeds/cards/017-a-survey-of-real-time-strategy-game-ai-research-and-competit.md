---
title: "A Survey of Real-Time Strategy Game AI Research and Competition in StarCraft"
authors:
  - "Santiago Ontañón"
  - "Gabriel Synnaeve"
  - "Alberto Uriarte"
  - "Florian Richoux"
  - "David Churchill"
  - "Mike Preuss"
year: 2013
venue: "IEEE TCIAIG"
arxiv: null
doi: "10.1109/TCIAIG.2013.2286295"
source: "https://doi.org/10.1109/TCIAIG.2013.2286295"
topics:
  - rts-bots
  - aiide-cog
  - opponent-modeling
  - partial-observability
seed_rank: 17
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "game-ai"
relevance_score: 10
cites:
  - title: "Build-Order Optimization in StarCraft"
    url: "https://skatgame.net/mburo/ps/build.pdf"
    year: 2011
    arxiv: null
    doi: null
  - title: "Call for AI Research in RTS Games"
    url: "https://cdn.aaai.org/Workshops/2004/WS-04-04/WS04-04-028.pdf"
    year: 2004
    arxiv: null
    doi: null
  - title: "Real-Time Strategy Games: A New AI Research Challenge"
    url: "https://www.ijcai.org/Proceedings/03/Papers/265.pdf"
    year: 2003
    arxiv: null
    doi: null
see:
  - "118-build-order-optimization-in-starcraft"
  - "023-call-for-ai-research-in-rts-games"
  - "025-real-time-strategy-games-a-new-ai-research-challenge"
---

# A Survey of Real-Time Strategy Game AI Research and Competition in StarCraft

## One-sentence takeaway

The 2013 TCIAIG survey is the map of pre-AlphaStar StarCraft AI: Brood War as the unified testbed, a taxonomy of strategy / tactics / micro, and a scorecard of AIIDE, CIG, and SSCAIT bots.

## Why it matters here

Broadside’s RTS reading list still starts here — what was actually solved (pathfinding, build-order search) versus still open (opponent modeling under fog, integrated strategy). GRID COMMAND inherits that split.

## Key ideas

- StarCraft: Brood War, via BWAPI, became the de facto research RTS because it is closed-source, partially observable, and has a large human ladder plus three annual competitions.
- The survey decomposes the problem into strategy (build orders, tech, scouting), tactics (army positioning, drops), and reactive control (micro, targeting), plus the integration problem of stitching them.
- Dominant 2013 techniques: potential fields, case-based reasoning, Monte-Carlo planning, build-order search (Churchill), and hand-authored finite-state managers — not end-to-end RL.
- Competitions (AIIDE, CIG, SSCAIT) are treated as the evaluation protocol; the paper catalogs bot architectures and which subproblems they actually attempt.
- Stated open problems — fog-of-war inference, robust strategy adaptation, and a single agent that does both macro and micro — are exactly what SC2LE and AlphaStar later attack.

## Caveats

## Links

- DOI: [10.1109/TCIAIG.2013.2286295](https://doi.org/10.1109/TCIAIG.2013.2286295)
- Author PDF: https://www.cs.mun.ca/~dchurchill/publications/pdf/starcraft_survey.pdf
