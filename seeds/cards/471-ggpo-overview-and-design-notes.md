---
title: "GGPO Overview and Design Notes"
authors:
  - "Tony Cannon"
year: 2019
venue: "GGPO README"
arxiv: null
doi: null
source: "https://github.com/pond3r/ggpo/blob/master/README.md"
topics:
  - rollback
  - netcode
seed_rank: 471
seed_batch: "lineage-shallow-2026-08-13"
reviewed: "2026-08-13"
pool: "realtime"
relevance_score: 8
lineage: game-networking
cites:
  - title: "Virtual Time"
    url: "https://doi.org/10.1145/3916.3988"
    year: 1985
    doi: "10.1145/3916.3988"
see:
  - "465-virtual-time-time-warp-optimistic-distributed-simulation"
---

# GGPO Overview and Design Notes

## One-sentence takeaway

GGPO hides network delay by predicting remote inputs, executing the local simulation immediately, and rolling back plus resimulating when a later packet proves the prediction wrong.

## Why it matters here

Living integration notes for Anoptic/GRID COMMAND netcode: the SDK contract is deterministic sim + input confirmation, not lockstep wait or client-side interpolation.

## Key ideas

- Traditional delay-based netcode adds input lag so packets arrive before they are consumed; rollback spends that time speculatively so offline muscle memory survives online.
- Session, spectator, and frame-delay knobs live in the SDK; the game must be able to save/load state and advance a frame from a confirmed input pair.
- Vector War is the bundled sample that shows 2–4 player sessions on the same API.
- MIT-licensed 2019 open-source drop of Cannon's original GGPO; forks still ship this design. History lives at ggpo.net.

## Caveats

## Links

- README: https://github.com/pond3r/ggpo/blob/master/README.md
- History: http://ggpo.net/
