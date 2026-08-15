---
title: "Building a Better Battle: DAMN and Utility Theory for Games"
authors:
  - "Dave Mark"
  - "Kevin Dill"
year: 2010
venue: "GDC 2010 AI Summit"
arxiv: null
doi: null
source: "https://media.gdcvault.com/gdc10/slides/MarkDill_ImprovingAIUtilityTheory.pdf"
topics:
  - utility-ai
seed_rank: 275
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "game-ai"
relevance_score: 9
lineage: game-ai-planning
cites:
  - title: "Behavior Trees for Next-Gen Game AI"
    url: "https://web.archive.org/web/20190719084901/http://aigamedev.com/insider/presentations/behavior-trees/"
    year: 2008
    arxiv: null
    doi: null
  - title: "Three States and a Plan: The AI of F.E.A.R."
    url: "https://alumni.media.mit.edu/~jorkin/gdc2006_orkin_jeff_fear.pdf"
    year: 2006
    arxiv: null
    doi: null
see:
  - "283-behavior-trees-for-next-gen-game-ai"
  - "022-three-states-and-a-plan-the-ai-of-f-e-a-r"
---

# Building a Better Battle: DAMN and Utility Theory for Games

## One-sentence takeaway

Mark and Dill's GDC 2010 AI Summit talk scores every candidate action through response curves and weighted considerations, then picks (or weighted-randoms) the highest utility — the production recipe for utility AI.

## Why it matters here

GRID COMMAND officers should not be a behavior-tree soup of ifs. A utility layer — considerations in, action out — is how you rank "flank / hold / withdraw" from the same facts the influence map already computed.

## Key ideas

- List actions; for each action evaluate considerations (distance, ammo, threat, health) through artist-authored response curves into `[0,1]`.
- Combine with weights (often a product or dual-utility architecture in later Dill talks); select max or a weighted random among the top.
- Population distributions and edge-case handling (what if every score is ~0) are first-class, not afterthoughts.
- The card title mixes two talks: Damian Isla's 2008 "Building a Better Battle" (Halo 3 objectives) and this 2010 utility session. Canonical artifact is *Improving AI Decision Modeling Through Utility Theory*.
- Rosenblatt's 1990s DAMN (Distributed Architecture for Mobile Navigation) is a related vote-and-arbitrate robotics architecture, not Mark/Dill's acronym.

## Caveats

## Links

- Slides: https://media.gdcvault.com/gdc10/slides/MarkDill_ImprovingAIUtilityTheory.pdf
- GDC Vault: https://www.gdcvault.com/play/1012747/Improving-AI-Decision-Modeling-Through
