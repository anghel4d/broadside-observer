---
title: "Snapshot Interpolation"
authors:
  - "Glenn Fiedler"
year: 2014
venue: "Gaffer On Games"
arxiv: null
doi: null
source: "https://gafferongames.com/post/snapshot_interpolation/"
topics:
  - netcode
  - interpolation
seed_rank: 265
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "realtime"
relevance_score: 9
lineage: game-networking
cites:
  - title: "State Synchronization"
    url: "https://gafferongames.com/post/state_synchronization/"
    year: 2015
    arxiv: null
    doi: null
  - title: "Client-Side Prediction & Server Reconciliation"
    url: "https://www.gabrielgambetta.com/client-side-prediction-server-reconciliation.html"
    year: 2013
    arxiv: null
    doi: null
  - title: "Networked Physics (2004)"
    url: "https://gafferongames.com/post/networked_physics_2004/"
    year: 2004
    arxiv: null
    doi: null
  - title: "Source Multiplayer Networking"
    url: "https://developer.valvesoftware.com/wiki/Source_Multiplayer_Networking"
    year: 2001
    arxiv: null
    doi: null
see:
  - "331-state-synchronization"
  - "269-client-side-prediction-server-reconciliation"
  - "363-networked-physics-2004"
  - "300-source-multiplayer-networking"
---

# Snapshot Interpolation

## One-sentence takeaway

Instead of a second deterministic sim, send sequenced snapshots of renderable state and interpolate (Hermite on position, slerp on orientation) from a jitter/loss buffer so the remote view is smooth without running physics.

## Why it matters here

When Anoptic cannot promise cross-platform float lockstep — or player counts climb past a handful — this is the other netcode: bandwidth for smoothness. GRID COMMAND spectators and remote units live here.

## Key ideas

- A snapshot is the visual state of every relevant body (position, orientation, interacting flag), tagged with a 16-bit sequence; older sequences are dropped.
- Naive 60 Hz snapshots of 900 cubes is ~11.6 Mbit/s; dropping to 10 Hz plus an interpolation buffer trades ~350 ms of delay for smoothness under 5% loss and ±2-frame jitter.
- Linear interpolation shows first-order kinks and katamari "pulsing"; Hermite using linear velocity kills those artifacts; slerp is enough for orientation.
- Lost snapshots are skipped, never resent — UDP only. Extrapolation through the floor/spring/contacts looks worse than eating the buffer delay.
- Raising send rate (30–60 Hz) is how you cut the 350 ms buffer; that demands the next article's compression.

## Caveats

## Links

- Post: https://gafferongames.com/post/snapshot_interpolation/
