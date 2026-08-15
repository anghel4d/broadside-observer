---
title: "Smart Terrain Object Affordance AI (The Sims lineage)"
authors:
  - "Will Wright"
  - "Maxis"
year: 2000
venue: "GDC / Game Developer"
arxiv: null
doi: null
source: "https://media.gdcvault.com/GD_Mag_Archives/GDM_August_2000.pdf"
topics:
  - smart-terrain
seed_rank: 411
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "game-ai"
relevance_score: 7
lineage: game-ai-planning
cites:
  - title: "Managing Complexity in the Halo 2 AI System"
    url: "https://www.gdcvault.com/play/1020359/Managing-Complexity-in-the-Halo"
    year: 2005
    arxiv: null
    doi: null
  - title: "Building a Better Battle: DAMN and Utility Theory for Games"
    url: "https://www.gdcvault.com/play/1012411/Building-a-Better-Battle-DAMN"
    year: 2010
    arxiv: null
    doi: null
  - title: "Steering Behaviors for Autonomous Characters"
    url: "https://www.red3d.com/cwr/papers/1999/gdc99steer.html"
    year: 1999
    arxiv: null
    doi: null
see:
  - "360-managing-complexity-in-the-halo-2-ai-system"
  - "275-building-a-better-battle-damn-and-utility-theory-for-games"
  - "201-steering-behaviors-for-autonomous-characters"
---

# Smart Terrain Object Affordance AI (The Sims lineage)

## One-sentence takeaway

Objects advertise what they can do (a fridge offers food, a stove offers cooking); Sims pick among those advertisements from a small need vector instead of owning a script per object type.

## Why it matters here

GRID COMMAND / ano agents should not hard-code “how to use a radio.” Smart terrain is the affordance bus: the world publishes actions, the agent scores them. That is the same inversion as ECS — behavior lives with the data that knows how to do it.

## Key ideas

- GDC 2000 AI roundtables (reported in *Game Developer*, August 2000) record Wright’s “smart terrain”: objects broadcast capabilities to nearby Sims.
- Need motives (hunger, energy, fun, bladder, social, hygiene, comfort) are the agent’s only planner; the environment supplies the action vocabulary.
- Interaction knowledge — anims, preconditions, motive deltas — lives on the object, so new furniture does not rewrite Sim AI.
- Chains emerge: fridge → raw food “needs cooking” → microwave “can cook” → plated meal “satisfies hunger,” without a master script.

## Caveats

## Links

- *Game Developer* August 2000 (GDC AI report): https://media.gdcvault.com/GD_Mag_Archives/GDM_August_2000.pdf
- Wright, “Design Plunder,” GDC 2001 (pattern-language / environment talk in the same lineage)
