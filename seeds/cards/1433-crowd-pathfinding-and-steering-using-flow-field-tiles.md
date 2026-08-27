---
title: "Crowd Pathfinding and Steering Using Flow Field Tiles"
authors: ["Elijah Emerson"]
year: 2013
venue: "Game AI Pro"
arxiv: null
doi: null
source: "https://www.gameaipro.com/GameAIPro/GameAIPro_Chapter23_Crowd_Pathfinding_and_Steering_Using_Flow_Field_Tiles.pdf"
topics: [strategy-rts-agents]
seed_rank: 1433
seed_batch: "craft-2026-08-27"
reviewed: "2026-08-27"
pool: "game-ai"
relevance_score: 10
lineage: flow-fields
cites:
  - title: "Continuum Crowds"
    url: "https://doi.org/10.1145/1141911.1141978"
    year: 2006
    arxiv: null
    doi: "10.1145/1141911.1141978"
  - title: "A Fast Iterative Method for Eikonal Equations"
    url: "https://doi.org/10.1137/060666482"
    year: 2008
    arxiv: null
    doi: "10.1137/060666482"
  - title: "Understanding Goal-Based Vector Field / Flow Field Pathfinding"
    url: "https://gamedevelopment.tutsplus.com/tutorials/understanding-goal-based-vector-field-pathfinding--gamedev-9007"
    year: 2013
    arxiv: null
    doi: null
see:
  - "279-understanding-goal-based-vector-field-flow-field-pathfinding"
  - "357-continuum-crowds"
  - "299-influence-mapping"
  - "1064-hierarchical-rl-in-starcraft-micromanagement-with-influence-maps"
  - "201-steering-behaviors-for-autonomous-characters"
---

# Crowd Pathfinding and Steering Using Flow Field Tiles

## One-sentence takeaway

One field per *goal*, tiled across sectors, built with an Eikonal integrator and a LOS pass — Supreme Commander 2's production leftover of the Durant tutorial 279 and Continuum Crowds 357.

## Why it matters here

GRID COMMAND will move hundreds of units under click-spam on a changing map. 279 is a Tuts+ tutorial; 357 is Treuille's academic continuum; 299 is influence maps for *threat*, not paths. Emerson is the RTS recipe: portal-graph A* between 10×10 m sectors, then cost / integration / flow tiles you can cache, dirty, and share across orders. Units steer with physics and still follow the field — the thing Anoptic's lock-free sim can actually ship this week. GPU leftover (Jeong–Whitaker FIM, Shopf Froblins course notes) is cited, not minted (course notes / GDC class, same reject as work graphs).

## Key ideas

- **Three fields per sector.** Cost (8-bit, 255=wall, static "clear" tile shared), integration (Eikonal wavefront + LOS pass so agents inside LOS ignore the field and steer at the point), flow (4-bit direction + flags).
- **Portal graph, not per-unit A*.** Merging A* on portal nodes so multiple sources share tiles. Flow-field cache keyed by portal window — hallways get reused across orders.
- **Dirty, don't rebuild the world.** Stamp buildings into cost, mark sectors dirty, time-slice the integrator. Moving goals rebuild the goal tile; most of the path stays cached.
- **LOS pass kills diamond artifacts.** Bresenham from LOS corners marks "wave front blocked"; cost integration only runs *outside* LOS. Inside LOS, steer at the goal.
- **Evidence.** Game AI Pro 2013 ch. 23. Shipped Supreme Commander 2. PDF on gameaipro.com.

## Caveats

CPU integrator; GPU FIM is future work in the chapter (Jeong–Whitaker 2007/2008) — cite, don't mint this week. 10×10 m sectors are SupCom-scale; Anoptic's unbounded map needs the hierarchical-sector leftover they list as future work. Island-ID field is optional but is how the cursor turns into a stop sign. Not a remint of Continuum Crowds 357 (no density-dependent speed) and not influence-map HRL 1064.

## Links

- PDF: https://www.gameaipro.com/GameAIPro/GameAIPro_Chapter23_Crowd_Pathfinding_and_Steering_Using_Flow_Field_Tiles.pdf
- Book: Game AI Pro (CRC Press / A K Peters, 2013), chapter 23
