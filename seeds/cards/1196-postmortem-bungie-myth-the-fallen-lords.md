---
title: "Postmortem: Bungie's Myth: The Fallen Lords"
authors:
  - "Jason Regier"
year: 1998
venue: "Game Developer"
arxiv: null
doi: null
source: "https://www.gamedeveloper.com/design/postmortem-bungie-s-i-myth-the-fallen-lords-i-"
topics:
  - game-ai
  - myth
  - pathfinding
  - formations
seed_rank: 1196
seed_batch: "halo-myth-ai-2026-08-13"
reviewed: "2026-08-13"
pool: "game-ai"
relevance_score: 9
lineage: game-ai-planning
cites:
  - title: "The Illusion of Intelligence: The Integration of AI and Level Design in Halo"
    url: "http://halo.bungie.org/misc/gdc.2002.haloai/talk.html"
    year: 2002
    card: "1193-the-illusion-of-intelligence-ai-and-level-design-in-halo"
  - title: "A Formal Basis for the Heuristic Determination of Minimum Cost Paths"
    url: "https://ieeexplore.ieee.org/document/4082128"
    year: 1968
    card: "262-a-formal-basis-for-the-heuristic-determination-of-minimum-cost"
---

# Postmortem: Bungie's Myth: The Fallen Lords

## One-sentence takeaway

Myth never got an academic AI paper: the published record is this postmortem — hybrid A* on a 3D mesh plus vector deviation around off-grid obstacles, gesture-click formations, and a cut Java AI-scripting dream.

## Why it matters here

This is closer to GRID COMMAND than F.E.A.R. GOAP: tactics are about facing, formation, and weaving through a messy 3D field, not planning a cover-to-cover action sequence. The Java "extensible AI / custom formations / net rules" feature that shipped in demos and died in production is the cautionary twin of ano-as-orders-language.

## Key ideas

- Terrain is a 3D polygonal mesh of square cells (two triangles each) with terrain-type impassability plus arbitrary solid objects (trees, units) *not* cell-aligned.
- Pure A* on cells makes units walk up to a tree, stop, and turn. They wanted forest-weaving: precompute A* on static terrain, then recursively deviate left/right with a vector scheme when the planned path would hit a moving/off-grid obstacle.
- "Good enough for 90% of cases" by ship; remaining bugs frozen.
- Formations (short/long/loose/staggered line, box, rabble, encirclements, vanguard, circle) plus scatter/retreat; gesture-click sets facing at the destination.
- Planned Java user scripts for extensible AI, custom formations, net-game rules, map behaviors — programmer left; feature cut. Demo scripts existed (collect enemy heads into a pile).

## Caveats

- Magazine postmortem, not a refereed pathfinding paper. No public source for the exact deviation algorithm.
- Do not confuse with later Bungie Halo AI (Butcher/Griesemer/Isla), which is a different architecture on a different genre.

## Links

- Game Developer: https://www.gamedeveloper.com/design/postmortem-bungie-s-i-myth-the-fallen-lords-i-
- Design doc (The Tain): https://tain.totalcodex.net/items/show/myth-1-the-design-doc
- Manual (formations): https://lparchive.org/Myth-The-Fallen-Lords/Docs/Myth%20TFL%20Manual.pdf
