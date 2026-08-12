---
title: Virtual Time / Time Warp Optimistic Distributed Simulation
authors:
- David R. Jefferson
year: 1985
venue: TOPLAS
arxiv: null
doi: 10.1145/3916.3988
source: https://doi.org/10.1145/3916.3988
topics:
- rollback
- simulation
seed_rank: 714
seed_batch: lineage-shallow-2026-08-13
reviewed: '2026-08-13'
pool: realtime
relevance_score: 8
lineage: rollback-netcode
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
---

# Virtual Time / Time Warp Optimistic Distributed Simulation

## One-sentence takeaway

Time Warp is the classic optimistic rollback substrate that game rollback netcode rhymes with.

## Why it matters here

Intellectual ancestor for GGPO-style speculate-and-rollback (analogy across domains).

## Key ideas

- Optimistic execution with antimessages/rollback on causality faults.
- Global Virtual Time for fossil collection.
- Decades before fighting-game rollback libraries.
- Useful vocabulary for systems engineers.

## Caveats

- DES Time Warp is not fighting-game netcode — analogy, not identity.
- Do not cite as a GGPO design doc.

## Links

- DOI: [10.1145/3916.3988](https://doi.org/10.1145/3916.3988)
- URL: https://doi.org/10.1145/3916.3988
