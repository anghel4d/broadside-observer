---
title: "Behavior Trees for Next-Gen Game AI"
authors:
  - "Alex J. Champandard"
year: 2008
venue: "AiGameDev / GDC"
arxiv: null
doi: null
source: "https://web.archive.org/web/20190719084901/http://aigamedev.com/insider/presentations/behavior-trees/"
topics:
  - behavior-trees
seed_rank: 283
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "game-ai"
relevance_score: 9
lineage: game-ai-planning
cites:
  - title: "Managing Complexity in the Halo 2 AI System"
    url: "https://www.gdcvault.com/play/1020359/Managing-Complexity-in-the-Halo"
    year: 2005
    arxiv: null
    doi: null
  - title: "Behavior Trees in Robotics and AI: An Introduction"
    url: "https://arxiv.org/abs/1709.00084"
    year: 2017
    arxiv: "1709.00084"
    doi: null
  - title: "Improving AI Decision Modeling Through Utility Theory"
    url: "https://media.gdcvault.com/gdc10/slides/MarkDill_ImprovingAIUtilityTheory.pdf"
    year: 2010
    arxiv: null
    doi: null
see:
  - "360-managing-complexity-in-the-halo-2-ai-system"
  - "460-behavior-trees-in-robotics-and-ai-an-introduction"
  - "275-building-a-better-battle-damn-and-utility-theory-for-games"
---

# Behavior Trees for Next-Gen Game AI

## One-sentence takeaway

Champandard's AiGameDev / GDC materials turned Halo-style hierarchical FSMs into the now-standard behavior-tree toolkit: selector, sequence, decorator, and parallel nodes ticking leaves that return Success / Failure / Running.

## Why it matters here

GRID COMMAND tactical AI will grow a tree whether we like it or not. This is the popularization that made BTs the default over a 200-state FSM; pair it with utility scoring at the leaves rather than nesting more selectors.

## Key ideas

- A BT is a directed tree ticked from the root; control nodes (selector / sequence / parallel) compose leaf actions and conditions.
- Running is a first-class status, so long actions (reload, path-follow) do not have to finish in one tick or be re-issued.
- Decorators invert, repeat, or gate children without growing a new class per combination — the reuse story versus FSM edges.
- Designers can author trees as data; programmers own the leaf vocabulary.
- Live aigamedev.com URL is dead. Canonical citation is the 2008 AiGameDev presentation (often dated 2007 from GDC Europe). Closest surviving slide deck is the 2010 GDC "Three Ways of Cultivating Game AI" PDF.

## Caveats

## Links

- Archived talk page: https://web.archive.org/web/20190719084901/http://aigamedev.com/insider/presentations/behavior-trees/
- 2010 GDC slides: https://media.gdcvault.com/gdc10/slides/ChampandardDaweHernandezCerpa_BehaviorTrees.pdf
