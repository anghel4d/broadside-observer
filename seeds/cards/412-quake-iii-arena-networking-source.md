---
title: "Quake III Arena Networking Source"
authors:
  - "id Software"
year: 1999
venue: "GPL source"
arxiv: null
doi: null
source: "https://github.com/id-Software/Quake-III-Arena"
topics:
  - netcode
seed_rank: 412
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "realtime"
relevance_score: 7
lineage: game-networking
cites:
  - title: "Unreal Engine Networking Architecture"
    url: "https://docs.unrealengine.com/udk/Three/NetworkingOverview.html"
    year: 1999
    arxiv: null
    doi: null
  - title: "Source Multiplayer Networking"
    url: "https://developer.valvesoftware.com/wiki/Source_Multiplayer_Networking"
    year: 2001
    arxiv: null
    doi: null
  - title: "1500 Archers on a 28.8: Network Programming in Age of Empires and Beyond"
    url: "https://www.gamedeveloper.com/programming/1500-archers-on-a-28-8-network-programming-in-age-of-empires-and-beyond"
    year: 2001
    arxiv: null
    doi: null
see:
  - "371-unreal-engine-networking-architecture"
  - "300-source-multiplayer-networking"
  - "027-1500-archers-on-a-28-8-network-programming-in-age-of-empires"
---

# Quake III Arena Networking Source

## One-sentence takeaway

Authoritative server snapshots, delta-compressed against a per-client acknowledged frame, with a sliding `PACKET_BACKUP` window and a client that interpolates between two received snaps.

## Why it matters here

This is still the default FPS netcode shape: server owns truth, client predicts locally, snapshots carry only what changed since the last acked state. Anoptic/GRID COMMAND multiplayer should steal `sv_snapshot.c` / `cl_parse.c` before inventing a new protocol.

## Key ideas

- `SV_WriteSnapshotToClient` emits a frame relative to the last snapshot the client acknowledged; entities are bit-packed deltas, not full state blobs.
- `CL_ParseSnapshot` reconstructs against a stored `cl.snapshots[]` slot; if the delta base is too old or missing, the snap is discarded rather than applied corrupt.
- Playerstate and packet entities are separate streams; areamasks cull what the client is allowed to see.
- Reliable commands ride a sequenced channel beside the unreliable snapshot stream so chat / userinfo do not stall the 20 Hz world updates.

## Caveats

## Links

- Source: https://github.com/id-Software/Quake-III-Arena
- Server snapshots: https://github.com/id-Software/Quake-III-Arena/blob/master/code/server/sv_snapshot.c
- Client parse: https://github.com/id-Software/Quake-III-Arena/blob/master/code/client/cl_parse.c
