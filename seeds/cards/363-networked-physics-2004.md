---
title: "Networked Physics (2004)"
authors:
  - "Glenn Fiedler"
year: 2004
venue: "Gaffer on Games"
arxiv: null
doi: null
source: "https://gafferongames.com/post/networked_physics_2004/"
topics:
  - netcode
  - physics
seed_rank: 363
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "realtime"
relevance_score: 8
lineage: game-networking
cites:
  - title: "Fix Your Timestep!"
    url: "https://gafferongames.com/post/fix_your_timestep/"
    year: 2004
    arxiv: null
    doi: null
  - title: "State Synchronization"
    url: "https://gafferongames.com/post/state_synchronization/"
    year: 2015
    arxiv: null
    doi: null
  - title: "Snapshot Interpolation"
    url: "https://gafferongames.com/post/snapshot_interpolation/"
    year: 2015
    arxiv: null
    doi: null
  - title: "Deterministic Lockstep"
    url: "https://gafferongames.com/post/deterministic_lockstep/"
    year: 2014
    arxiv: null
    doi: null
see:
  - "331-state-synchronization"
  - "265-snapshot-interpolation"
  - "016-deterministic-lockstep"
---

# Networked Physics (2004)

## One-sentence takeaway

Fiedler’s 2004 note lays out the practical menu for networked rigid bodies — lockstep, state sync, and client-side prediction — and why a physics engine that is not deterministic will not lockstep.

## Why it matters here

Broadside / GRID COMMAND will eventually ship colliding bodies over a wire. This is the primer that says: pick lockstep only if every machine integrates the same fixed dt; otherwise send state (or inputs) and correct, and never let a variable render dt drive the sim.

## Key ideas

- Physics and networking fight: one wants a stable integrator, the other wants to hide RTT and packet loss.
- Deterministic lockstep sends only inputs and is cheapest on bandwidth, but any float divergence desyncs the world.
- State synchronization / snapshot interpolation send poses and let the client blend; prediction plus server reconciliation hide the RTT for the local player.
- Later Gaffer posts (timestep, snapshots, lockstep) are the expanded versions of the same argument.

## Caveats

## Links

- Article: https://gafferongames.com/post/networked_physics_2004/
