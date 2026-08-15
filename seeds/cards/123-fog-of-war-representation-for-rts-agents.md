---
title: Fog of War Representation for RTS Agents
authors:
- Johan Hagelbäck
- Stefan J. Johansson
year: 2008
venue: CIG
arxiv: null
doi: 10.1109/CIG.2008.5035621
source: https://doi.org/10.1109/CIG.2008.5035621
topics:
- rts
- fog
seed_rank: 123
seed_batch: prefill-2026-08-13
reviewed: '2026-08-13'
pool: game-ai
relevance_score: 9
cites:
- title: AI in Computer Games
  url: https://doi.org/10.1145/971564.971593
  year: 2004
  arxiv: null
  doi: 10.1145/971564.971593
- title: Using Multi-agent Potential Fields in Real-Time Strategy Games
  url: https://dblp.org/rec/conf/atal/HagelbackJ08.html
  year: 2008
  arxiv: null
  doi: null
- title: The Rise of Potential Fields in Real Time Strategy Bots
  url: https://doi.org/10.1609/aiide.v4i1.18670
  year: 2008
  arxiv: null
  doi: 10.1609/aiide.v4i1.18670
- title: 'Real-time obstacle avoidance for manipulators and mobile robots'
  url: https://doi.org/10.1177/027836498600500106
  year: 1986
  arxiv: null
  doi: 10.1177/027836498600500106
---

# Fog of War Representation for RTS Agents

## One-sentence takeaway

Hagelbäck and Johansson take their cheating multi-agent potential-field ORTS tank bot and give it true fog of war — remembered bases, a 4×4-tile exploration field, and a global map agent — and it still wins >98% against 2007 tournament bots that see everything.

## Why it matters here

GRID COMMAND agents will never get an oracle map. Incomplete information is the default: persist what you saw, attract toward unknown tiles, and do not spend a frame recomputing fields for units you cannot see.

## Key ideas

- The PIbot already summed navigation (static cliffs), strategic (sit at max shooting distance), and tactical (own-unit / sheep repulsion) fields. FoW adds a field of exploration: every 4×4 block with ≥10 unknown tiles is an attractor `p_unknown(md) = 0.25 − md/8000` out to Manhattan 2000.
- A global map agent remembers spotted enemy bases until they die, and only broadcasts currently visible tanks. Terrain knowledge is no longer a static precomputed field — cliffs stay once seen, even after the spotting unit dies.
- Attack coordination is unchanged: an i×k possibility matrix, three-level range check (Manhattan → Euclidean → line of sight), fire concentrated on the lowest-HP target that can die this frame.
- In 100 games vs NUS, WarsawB, UBC, and Uofa06, FoWbot wins 98.5% on average and uses no more CPU than PIbot (PIbot pays for every enemy on the map; FoWbot pays for dynamic terrain). Head-to-head, FoWbot even beat PIbot 66–34 until PIbot’s detection range was cut.
- The exploration field raises map coverage but does not move win rate much against an omniscient opponent — the opponent finds you anyway. The win comes from not cheating, not from scouting better.

## Caveats

## Links

- DOI: [10.1109/CIG.2008.5035621](https://doi.org/10.1109/CIG.2008.5035621)
- PDF (Linnaeus DiVA): https://lnu.diva-portal.org/smash/get/diva2:805256/FULLTEXT01.pdf
