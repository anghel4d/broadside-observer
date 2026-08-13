---
title: "Handling Complexity in the Halo 2 AI"
authors:
  - "Damian Isla"
year: 2005
venue: "GDC"
arxiv: null
doi: null
source: "https://www.gamedeveloper.com/programming/gdc-2005-proceeding-handling-complexity-in-the-i-halo-2-i-ai"
topics:
  - game-ai
  - halo
  - behavior-trees
seed_rank: 1194
seed_batch: "halo-myth-ai-2026-08-13"
reviewed: "2026-08-13"
pool: "game-ai"
relevance_score: 10
lineage: game-ai-planning
cites:
  - title: "The Illusion of Intelligence: The Integration of AI and Level Design in Halo"
    url: "http://halo.bungie.org/misc/gdc.2002.haloai/talk.html"
    year: 2002
  - title: "Behavior Trees for Next-Gen Game AI"
    url: "https://aigamedev.com/"
    year: 2007
  - title: "Building a Better Battle: HALO 3 AI Objectives"
    url: "https://web.cs.wpi.edu/~rich/courses/imgd4000-d09/lectures/halo3.pdf"
    year: 2008
see:
  - "1193-the-illusion-of-intelligence-ai-and-level-design-in-halo"
  - "359-behavior-trees-for-next-gen-game-ai"
  - "1195-building-a-better-battle-halo-3-ai-objectives"
---

# Handling Complexity in the Halo 2 AI

## One-sentence takeaway

Halo 2's brain is a behavior DAG with binary relevancy, prioritized-list parents, impulses, tagging, and stimulus behaviors — complexity paid in coherence and designer transparency, not in float-soup utility.

## Why it matters here

If GRID COMMAND soldiers need many simple, readable rules that still compose, this is the architecture: explicit priorities, event-driven impulses dropped *into* the tree (so higher-priority behaviors still win), and memory pools so you don't allocate a full tree per actor.

## Key ideas

- Quantity of mundane behaviors is how games fake common sense; the cost is dithering, opacity, and designer overload.
- Behavior DAG (~50 core behaviors; custom characters splice extra impulses).
- Binary relevancy + prioritized-list (also sequential, looping, probabilistic, one-off). Analog "desire floats" don't scale to twenty children.
- Impulses: free-floating triggers that retarget or run a referenced behavior (player-in-vehicle beats fight beats enter-vehicle).
- Behavior tagging: bitvector masks lock whole subtrees (driver vs passenger vs infantry).
- Stimulus behaviors: event-driven inserts (leader died → flee impulse for ~1–2s) still compete inside the tree.
- Memory: only running stack is allocated; persistent bits live in named actor fields or per-target "props" (the knowledge model that can be wrong).
- Designer control: firing positions + orders + styles (allow/deny whole behavior classes). Character files inherit parameter blocks to fight 10k-float creep.

## Caveats

- GDC proceeding, not a journal paper. The public text is the Gamasutra write-up of the 2005 talk.
- Flood swarm used an entirely custom DAG — the "start from a working base" rule has limits.

## Links

- Halo 1 proceedings (cited as Greisemer02): http://halo.bungie.org/misc/gdc.2002.haloai/talk.html
- Gamasutra/Game Developer: https://www.gamedeveloper.com/programming/gdc-2005-proceeding-handling-complexity-in-the-i-halo-2-i-ai
- GDC Vault: https://gdcvault.com/play/1020270/Managing-Complexity-in-the-Halo
- Archive video: https://archive.org/details/GDC2005Isla
