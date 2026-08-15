---
title: "Client-Side Prediction & Server Reconciliation"
authors:
  - "Gabriel Gambetta"
year: 2013
venue: "gabrielgambetta.com"
arxiv: null
doi: null
source: "https://www.gabrielgambetta.com/client-side-prediction-server-reconciliation.html"
topics:
  - netcode
  - prediction
seed_rank: 269
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "realtime"
relevance_score: 9
lineage: game-networking
cites:
  - title: "Source Multiplayer Networking"
    url: "https://developer.valvesoftware.com/wiki/Source_Multiplayer_Networking"
    year: 2001
    arxiv: null
    doi: null
  - title: "GGPO Rollback Networking"
    url: "https://github.com/pond3r/ggpo"
    year: 2006
    arxiv: null
    doi: null
  - title: "Snapshot Interpolation"
    url: "https://gafferongames.com/post/snapshot_interpolation/"
    year: 2014
    arxiv: null
    doi: null
  - title: "Deterministic Lockstep"
    url: "https://gafferongames.com/post/deterministic_lockstep/"
    year: 2014
    arxiv: null
    doi: null
see:
  - "300-source-multiplayer-networking"
  - "197-ggpo-rollback-networking"
  - "265-snapshot-interpolation"
  - "016-deterministic-lockstep"
---

# Client-Side Prediction & Server Reconciliation

## One-sentence takeaway

Apply your own input immediately, then when the authoritative state arrives tagged with the last processed input seq, replay every still-unacked input on top of that state so the local present stays aligned.

## Why it matters here

This is the minimum viable feel layer for GRID COMMAND and Broadside on an authoritative server. Prediction without reconciliation produces the classic 250 ms rubber-band; reconciliation is the whole trick.

## Key ideas

- Dumb client-server has one RTT of delay between keypress and motion; prediction runs the same deterministic step locally the instant the input is sent.
- Server replies carry "last processed input #N". The client rewinds to that authoritative pose and replays inputs N+1…current.
- Without the seq + replay, a second keypress in flight looks like a snap backward then forward.
- Works for movement; do not locally kill or mutate irreversible state the server has not confirmed.
- Part II of Gambetta's Fast-Paced Multiplayer series (after client-server architecture, before entity interpolation).

## Caveats

## Links

- Article: https://www.gabrielgambetta.com/client-side-prediction-server-reconciliation.html
