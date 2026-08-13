---

title: "Applying Goal-Oriented Action Planning to Games"
authors:
  - "Jeff Orkin"
year: 2003
venue: "AI Game Programming Wisdom / Orkin pages"
arxiv: null
doi: null
source: "https://alumni.media.mit.edu/~jorkin/goap.html"
topics:
  - goap
  - planning
  - game-ai
seed_rank: 461
seed_batch: "lineage-shallow-2026-08-13"
reviewed: "2026-08-13"
pool: "game-ai"
relevance_score: 9
lineage: game-ai-planning
cites:
  - title: "STRIPS: A New Approach to the Application of Theorem Proving to Problem Solving"
    url: "https://doi.org/10.1016/0004-3702(71)90010-5"
    year: 1971
    arxiv: null
    doi: "10.1016/0004-3702(71)90010-5"
  - title: "Three States and a Plan: The AI of F.E.A.R."
    url: "https://alumni.media.mit.edu/~jorkin/gdc2006_orkin_jeff_fear.pdf"
    year: 2006
    arxiv: null
    doi: null
see:
  - "309-strips-a-new-approach-to-the-application-of-theorem-proving-"
  - "022-three-states-and-a-plan-the-ai-of-f-e-a-r"
---
# Applying Goal-Oriented Action Planning to Games

## One-sentence takeaway

GOAP as practical STRIPS-style planning for NPCs — prelude to the F.E.A.R. GDC talk.

## Why it matters here

Pairs with F.E.A.R. 2006 as the actionable classical planning stack for squad AI.

## Key ideas

- Goals + world state + action preconditions/effects.
- A* over action space rather than hand-authored FSMs.
- Separates goals from action implementations.

## Caveats

- Planning cost grows with action vocabulary.
- Complementary to BTs/utility, not a universal replacement.
- Seed card from shallow lineage pass; promote before relying on fine-grained claims.

## Links

- URL: https://alumni.media.mit.edu/~jorkin/goap.html
