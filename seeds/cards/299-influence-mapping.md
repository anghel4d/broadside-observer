---
title: "Influence Mapping"
authors:
  - "Paul Tozour"
year: 2001
venue: "Game Programming Gems 2"
arxiv: null
doi: null
source: "https://www.gamedeveloper.com/business/gamedevslikeyou-interview-with-paul-tozour"
topics:
  - influence-maps
seed_rank: 299
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "game-ai"
relevance_score: 9
cites:
  - title: "A Survey of Real-Time Strategy Game AI Research and Competition in StarCraft"
    url: "https://doi.org/10.1109/tciaig.2013.2286295"
    year: 2013
    arxiv: null
    doi: "10.1109/tciaig.2013.2286295"
  - title: "Steering Behaviors For Autonomous Characters"
    url: "https://www.red3d.com/cwr/steer/"
    year: 1999
    arxiv: null
    doi: null
  - title: "Real-Time Strategy Games: A New AI Research Challenge"
    url: "https://www.ijcai.org/Proceedings/03/Papers/284.pdf"
    year: 2003
    arxiv: null
    doi: null
  - title: "Grandmaster level in StarCraft II using multi-agent reinforcement learning"
    url: "https://arxiv.org/abs/1912.06680"
    year: 2019
    arxiv: "1912.06680"
    doi: "10.1038/s41586-019-1724-z"
  - title: "Modular Tactical Influence Maps"
    url: "https://www.gameaipro.com/GameAIPro2/GameAIPro2_Chapter30_Modular_Tactical_Influence_Maps.pdf"
    year: 2015
    arxiv: null
    doi: null
see:
  - "017-a-survey-of-real-time-strategy-game-ai-research-and-competit"
  - "201-steering-behaviors-for-autonomous-characters"
  - "025-real-time-strategy-games-a-new-ai-research-challenge"
  - "009-grandmaster-level-in-starcraft-ii-using-multi-agent-reinforc"
---

# Influence Mapping

## One-sentence takeaway

Tozour's *Game Programming Gems 2* chapter (3.6, pp. 287–297) puts a decaying numeric field on the map for every unit, building, and terrain feature so AI can read threat, control, and attack/retreat gradients off a grid.

## Why it matters here

GRID COMMAND's strategic layer is an influence map whether we name it or not. Enemy strength, friendly support, and front line are three layers; utility AI and flow fields both consume them.

## Key ideas

- Each object writes a weighted falloff `I(x,y) += w_i f(d_i)` onto a 2D grid (or a nav-graph). Sum competing layers for danger, support, visibility, resources.
- Queries: highest/lowest cell for attack or retreat, zero-crossings as front lines, gradient as a cheap steering field.
- Propagation can be a blur / Dijkstra-from-sources rather than a naïve radius stamp, so terrain blocks influence.
- Not a chapter in *AI Game Programming Wisdom* — that later Tozour piece is "Using a Spatial Database for Runtime Spatial Analysis" (AIGPW2, 2004). Dave Mark's *Game AI Pro 2* "Modular Tactical Influence Maps" is the modern free follow-up.
- The previous "gamedeveloper.com/programming/gaming-ai-influence-maps" URL and the fabricated `arxiv: 2011.XXXX` AlphaStar cite have been replaced.

## Caveats

## Links

- Author interview confirming the chapter: https://www.gamedeveloper.com/business/gamedevslikeyou-interview-with-paul-tozour
- Modern free follow-up (Mark): https://www.gameaipro.com/GameAIPro2/GameAIPro2_Chapter30_Modular_Tactical_Influence_Maps.pdf
