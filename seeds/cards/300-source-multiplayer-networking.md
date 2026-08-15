---
title: "Source Multiplayer Networking"
authors:
  - "Valve"
year: 2001
venue: "Valve Developer Wiki"
arxiv: null
doi: null
source: "https://developer.valvesoftware.com/wiki/Source_Multiplayer_Networking"
topics:
  - netcode
  - lag-compensation
seed_rank: 300
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "realtime"
relevance_score: 9
lineage: game-networking
cites:
  - title: "Client-Side Prediction & Server Reconciliation"
    url: "https://www.gabrielgambetta.com/client-side-prediction-server-reconciliation.html"
    year: 2013
    arxiv: null
    doi: null
  - title: "Snapshot Interpolation"
    url: "https://gafferongames.com/post/snapshot_interpolation/"
    year: 2014
    arxiv: null
    doi: null
  - title: "Quake III Arena Networking Source"
    url: "https://github.com/id-Software/Quake-III-Arena"
    year: 1999
    arxiv: null
    doi: null
see:
  - "269-client-side-prediction-server-reconciliation"
  - "265-snapshot-interpolation"
  - "412-quake-iii-arena-networking-source"
---

# Source Multiplayer Networking

## One-sentence takeaway

Source ticks an authoritative server at a fixed rate, clients predict locally and interpolate other entities between snapshots, and the server rewinds hit detection by each attacker's lerp+latency so a crosshair that looked correct still counts.

## Why it matters here

This is the FPS netcode Broadside inherits: tick, snapshot, prediction, interpolation, lag compensation. Gambetta and Fiedler are the tutorials; this wiki page is the shipped Valve design.

## Key ideas

- `sv_tickrate` (historically 33 or 66 Hz) is the sim clock. Clients send usercmds; the server simulates and broadcasts entity snapshots.
- Client-side prediction runs the local player immediately; server reconciliation corrects with the last-acked command number (same pattern Gambetta later taught).
- Other players are interpolated between two snapshots (`cl_interp`, default 100 ms) so jitter does not pop models.
- Lag compensation: on each shot the server rewinds every other player to where the shooter *saw* them (latency + lerp), traces, then restores. This is why "I was already around the corner" videos exist.
- Derived from Quake-family netcode; documented on the Valve Developer Wiki. The wiki is bot-walled from some scrapers; the URL is still the canonical artifact.

## Caveats

## Links

- Wiki: https://developer.valvesoftware.com/wiki/Source_Multiplayer_Networking
