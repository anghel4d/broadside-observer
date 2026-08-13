---
title: "Building a Better Battle: HALO 3 AI Objectives"
authors:
  - "Damian Isla"
year: 2008
venue: "GDC"
arxiv: null
doi: null
source: "https://web.cs.wpi.edu/~rich/courses/imgd4000-d09/lectures/halo3.pdf"
topics:
  - game-ai
  - halo
  - squad-ai
seed_rank: 1195
seed_batch: "halo-myth-ai-2026-08-13"
reviewed: "2026-08-13"
pool: "game-ai"
relevance_score: 10
lineage: game-ai-planning
cites:
  - title: "Handling Complexity in the Halo 2 AI"
    url: "https://www.gamedeveloper.com/programming/gdc-2005-proceeding-handling-complexity-in-the-i-halo-2-i-ai"
    year: 2005
    card: "1194-handling-complexity-in-the-halo-2-ai"
  - title: "The Illusion of Intelligence: The Integration of AI and Level Design in Halo"
    url: "http://halo.bungie.org/misc/gdc.2002.haloai/talk.html"
    year: 2002
    card: "1193-the-illusion-of-intelligence-ai-and-level-design-in-halo"
  - title: "Behavior Trees for Next-Gen Game AI"
    url: "https://aigamedev.com/"
    year: 2007
    card: "359-behavior-trees-for-next-gen-game-ai"
---

# Building a Better Battle: HALO 3 AI Objectives

## One-sentence takeaway

Halo 3 lifts strategy out of per-actor trees into a **declarative objectives tree**: prioritized, self-describing tasks that *distribute squads* rather than scripting every body.

## Why it matters here

GRID COMMAND's "talk to a fireteam" problem is Halo 3's encounter problem: designers want relative priorities ("guard the door, and if you can, the hallway") and capacities, not a thousand GOAP actions. Squad bucketing + task trees is the shipped answer.

## Key ideas

- Halo 2 was imperative (behavior trees, prioritized lists, self-describing behaviors).
- Halo 3 objectives: a tree of prioritized tasks; each task has priority, activation script-fragments, capacities.
- Algorithm: assign squads to children in the current priority group, then iterate groups.
- Declarative > micromanagement; hierarchies for modularity; self-describing tasks keep matching O(n) not O(n²).
- Production: UI-outward encounter construction; great for prototyping, denser as ship neared.
- Caveats they name: designer training, awkward script/objectives coupling, allied vs enemy fronts, squad not always the right bucket (sniper rifle should change the task you're allowed to occupy).

## Caveats

- Slide deck / GDC talk, not a long paper. Distinct from Dave Mark & Kevin Dill's *Building a Better Battle* utility/DAMN talk (card 351).

## Links

- Slides (WPI copy): https://web.cs.wpi.edu/~rich/courses/imgd4000-d09/lectures/halo3.pdf
- Archive video: https://archive.org/details/GDC2008Isla
