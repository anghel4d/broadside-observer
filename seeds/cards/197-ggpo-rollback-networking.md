---
title: GGPO Rollback Networking
authors:
- Tony Cannon
year: 2006
venue: GGPO
arxiv: null
doi: null
source: https://github.com/pond3r/ggpo
topics:
- rollback
- netcode
seed_rank: 197
seed_batch: systems-prefill-2026-08-13
reviewed: '2026-08-13'
pool: realtime
relevance_score: 10
lineage: game-networking
cites:
- title: '1500 Archers on a 28.8: Network Programming in Age of Empires and Beyond'
  url: https://www.gamedeveloper.com/programming/1500-archers-on-a-28-8-network-programming-in-age-of-empires-and-beyond
  year: 2001
  arxiv: null
  doi: null
- title: Deterministic Lockstep
  url: https://gafferongames.com/post/deterministic_lockstep/
  year: 2014
  arxiv: null
  doi: null
- title: Fix Your Timestep!
  url: https://gafferongames.com/post/fix_your_timestep/
  year: 2004
  arxiv: null
  doi: null
- title: Client-Side Prediction & Server Reconciliation
  url: https://www.gabrielgambetta.com/client-side-prediction-server-reconciliation.html
  year: 2013
  arxiv: null
  doi: null
- title: Virtual Time / Time Warp
  url: https://doi.org/10.1145/3916.3988
  year: 1985
  arxiv: null
  doi: 10.1145/3916.3988
- title: GGPO Overview and Design Notes
  url: https://github.com/pond3r/ggpo/blob/master/README.md
  year: 2019
  arxiv: null
  doi: null
see:
  - "027-1500-archers-on-a-28-8-network-programming-in-age-of-empires"
  - "016-deterministic-lockstep"
  - "198-fix-your-timestep"
  - "269-client-side-prediction-server-reconciliation"
  - "465-virtual-time-time-warp-optimistic-distributed-simulation"
  - "471-ggpo-overview-and-design-notes"
---

# GGPO Rollback Networking

## One-sentence takeaway

GGPO is the canonical rollback netcode library: each peer predicts remote inputs, and on a mismatch it rolls the sim back and resimulates forward with the corrected input stream.

## Why it matters here

GRID COMMAND lockstep without rollback feels like 2001. Rollback is how you hide RTT, and it demands a deterministic fixed-timestep sim — the same contract as cards 016 and 198.

## Key ideas

- Peers exchange input, not state; each side speculatively advances using predicted remote input.
- On a confirmed mismatch the session rewinds to the last agreed frame and resimulates with the real inputs.
- A small input delay trades responsiveness against rollback frequency.
- The sim must be deterministic: same inputs from the same frame produce the same world, or resimulation diverges.
- The public library (pond3r/ggpo) is the reference implementation fighting games and other rollback titles fork.

## Caveats

## Links

- Source: https://github.com/pond3r/ggpo
- Design notes: https://github.com/pond3r/ggpo/blob/master/README.md
