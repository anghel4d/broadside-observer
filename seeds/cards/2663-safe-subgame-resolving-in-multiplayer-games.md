---
title: "Safe Subgame Resolving in Multiplayer Games"
authors:
  - "Boning Li"
  - "Longbo Huang"
year: 2026
venue: "arXiv preprint (cs.GT)"
arxiv: "2611.25981"
doi: null
source: "https://arxiv.org/abs/2611.25981"
version_reviewed: "v1"
topics:
  - "partial-observability-multiagent"
  - "strategy-rts-agents"
seed_rank: 2663
seed_batch: "frontier-2026-11-20"
reviewed: "2026-11-20"
pool: "game-ai"
relevance_score: 7
see:
  - 551-theory-of-games-and-economic-behavior
cites:
  - title: "Safe Subgame Resolving in Multiplayer Games"
    url: "https://arxiv.org/abs/2611.25981"
    year: 2026
    arxiv: "2611.25981"
    doi: null
---

# Safe Subgame Resolving in Multiplayer Games

## One-sentence takeaway

This paper proves the first conditional safety theorem for subgame resolving with three or more independent players: the resolved profile's best-response gap exceeds the blueprint's by at most four computable terms, giving a post-hoc certificate that flags every harmful update on three-player Leduc and up-to-six-player Kuhn poker.

## Why it matters here

Real-time refinement of an offline blueprint is how strong imperfect-information agents work, and fog-of-war strategy games with several factions are multiplayer, not two-player zero-sum. A cheap certificate (one best-response pass per opponent inside the subgame) that says when to keep the blueprint is a practical safety check for multiplayer opponent AI.

## Key ideas

- **Gap bound.** Four terms: the subgame value the blueprint promised but did not realize, the resolver's solve error, opponents' best-response gains inside the subgame over promised values, and a structural tax measuring how much total utility can change.
- **Tightness.** Constructions attain each term with equality; the tax is zero in constant-sum games, including every rake-free poker variant.
- **Empirics.** Uncertified resolving raises the gap beyond a small tolerance in 12-100% of updates; the certificate flags every such update and accepts 41% (Kuhn) and 86% (Leduc) of standard resolving updates.
- **Safe resolver.** Keeping the blueprint whenever the certificate exceeds tolerance delivers no harmful update.

## Caveats

Abstract-level read of the v1 preprint (Friday 20 Nov 2026 arXiv listing); numbers are the authors' and unreplicated. Applies to uncorrelated multiplayer resolving and small poker benchmarks; large non-constant-sum games pay the structural tax, and the abstract does not show scale beyond Leduc and Kuhn.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.25981
- PDF: https://arxiv.org/pdf/2611.25981
- HTML: https://arxiv.org/html/2611.25981v1
- Code: https://github.com/lbn187/MultiPlayerSolver
