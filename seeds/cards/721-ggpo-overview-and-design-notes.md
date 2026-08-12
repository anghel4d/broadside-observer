---
title: GGPO Overview and Design Notes
authors:
- Tony Cannon
year: 2019
venue: GGPO README
arxiv: null
doi: null
source: https://github.com/pond3r/ggpo/blob/master/README.md
topics:
- rollback
- netcode
seed_rank: 721
seed_batch: lineage-shallow-2026-08-13
reviewed: '2026-08-13'
pool: realtime
relevance_score: 8
lineage: game-networking
cites:
- title: GGPO Rollback Networking
  url: https://github.com/pond3r/ggpo
  year: 2006
  arxiv: null
  doi: null
  card: 254-ggpo-rollback-networking
- title: Deterministic Lockstep
  url: https://gafferongames.com/post/deterministic_lockstep/
  year: 2014
  arxiv: null
  doi: null
  card: 017-deterministic-lockstep
- title: Client-Side Prediction & Server Reconciliation
  url: https://www.gabrielgambetta.com/client-side-prediction-server-reconciliation.html
  year: 2013
  arxiv: null
  doi: null
  card: 345-client-side-prediction-server-reconciliation
---

# GGPO Overview and Design Notes

## One-sentence takeaway

Canonical README/design notes for modern GGPO forks used by fighting games.

## Why it matters here

Companion craft card to the 2006 GGPO seed for integration details.

## Key ideas

- Predict remote inputs; rollback mispredictions; resimulate.
- Requires deterministic simulation.
- Session/spectator/frame-delay knobs.
- Living forks still ship on this design.

## Caveats

- README is not an academic paper.
- RTS lockstep (AoE) is a sibling architecture, not the same algorithm.

## Links

- URL: https://github.com/pond3r/ggpo/blob/master/README.md
