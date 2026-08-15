---
title: "State Synchronization"
authors:
  - "Glenn Fiedler"
year: 2015
venue: "Gaffer on Games"
arxiv: null
doi: null
source: "https://gafferongames.com/post/state_synchronization/"
topics:
  - netcode
seed_rank: 331
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "realtime"
relevance_score: 8
lineage: game-networking
cites:
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
  - title: "GGPO Rollback Networking"
    url: "https://github.com/pond3r/ggpo"
    year: 2006
    arxiv: null
    doi: null
see:
  - "265-snapshot-interpolation"
  - "016-deterministic-lockstep"
  - "197-ggpo-rollback-networking"
---

# State Synchronization

## One-sentence takeaway

Fiedler’s 2015 article argues that most multiplayer games should stream compressed world-state snapshots from a trusted server, not lockstep inputs, once the simulation is too big or too non-deterministic to replay.

## Why it matters here

GRID COMMAND / Broadside have to pick lockstep vs. state-sync; this is the practical write-up of when snapshots, deltas, and jitter buffers beat deterministic lockstep.

## Key ideas

- Lockstep sends inputs and requires identical sims; one desync or a late joiner breaks it. State sync sends the result of the sim.
- The server is authoritative. Clients render interpolated snapshots and predict local avatars, then correct when the next snapshot arrives.
- Snapshots are delta-compressed against an ACK’d baseline and prioritized so important objects fill the packet first.
- Jitter buffer + interpolation delay hide packet-time variance; extrapolation is a last resort.
- Complements his earlier snapshot-interpolation and deterministic-lockstep posts on gafferongames.com.

## Caveats

## Links

- URL: https://gafferongames.com/post/state_synchronization/
