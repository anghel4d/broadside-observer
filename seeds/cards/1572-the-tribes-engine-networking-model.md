---
title: "The TRIBES Engine Networking Model"
authors:
  - "Mark Frohnmayer"
  - "Tim Gift"
year: 2001
venue: "Dynamix whitepaper (model shipped in Starsiege TRIBES, Dec 1998)"
arxiv: null
doi: null
source: "https://www.gamedevs.org/uploads/tribes-networking-model.pdf"
topics:
  - networking
  - game-networking-determinism
seed_rank: 1572
seed_batch: "archive-2026-09-04"
reviewed: "2026-09-04"
pool: "engines"
relevance_score: 9
lineage: game-networking
cites:
  - title: "1500 Archers on a 28.8: Network Programming in Age of Empires and Beyond"
    url: "https://www.gamedeveloper.com/programming/1500-archers-on-a-28-8-network-programming-in-age-of-empires-and-beyond"
    year: 2001
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
  - "027-1500-archers-on-a-28-8-network-programming-in-age-of-empires"
  - "016-deterministic-lockstep"
  - "197-ggpo-rollback-networking"
---

# The TRIBES Engine Networking Model

## One-sentence takeaway

Classify every byte as non-guaranteed, ordered-guaranteed, most-recent-state, or guaranteed-quickest; ghost in-scope objects with a per-state bit mask and net priority; let a notify-only UDP sliding window (never retransmission at the packet layer) drive the rest — 128-player Internet FPS/vehicle sim on a 28.8 modem.

## Why it matters here

GRID COMMAND / Anoptic large sims cannot serialize 1500 units (027 lockstep) and cannot rollback a 128-player vehicle sandbox (197 GGPO). TRIBES is the other classical answer: server-authoritative ghosting, scoped relevance, partial state, and delivery classes. The 2001 whitepaper documents the model that shipped in Starsiege TRIBES (Dec 1998) and was being extended for TRIBES II.

## Key ideas

- **Four delivery classes, not TCP-or-UDP.** (1) Non-guaranteed: never retransmit. (2) Guaranteed: retransmit and deliver in send order. (3) Most Recent State: only the latest version matters (positions). (4) Guaranteed Quickest: latency-sensitive but must arrive. Packet-layer TCP would stall (3) behind (2); a binary reliable/unreliable socket cannot express (3) or (4).
- **Connection manager = notify, not repair.** UDP plus a 3-byte-overhead sliding window. The Stream layer is told *in send order* whether each packet arrived or was dropped/reordered-dropped. Dropped packets are never resent as packets; Event/Ghost managers repair using Transmission Records. Bitstream packs bools, k-bit ints, normalized floats, Huffman strings.
- **Five stream managers, fixed fill order.** Move, Event, Ghost, Datablock, String. Client advertises rate×size (28.8 example: 10 Hz × 200 B ≈ 2 KB/s) and may retune; server caps per-client bandwidth. Fill order *is* priority: moves and events eat the packet before ghosts.
- **Ghosting + scope + state mask.** One ghost per (object, remote host). Simulation scoping pulls objects in/out; “ghost always” is the escape. Ghost Record = Ghost ID + State Mask (TRIBES objects ~20 flags: pose, rotation, anim, …). On fill: build an update list (status-change first, then sim-assigned net priority), write Ghost ID + partial state until the packet is full, clear the written bits. On drop notify: OR the lost bits back unless a later packet already covered them — that is Most Recent State.
- **Events vs moves vs datablocks.** Events are persistent objects with a 1-bit guaranteed flag; lost guaranteed events go to the head of the queue (3 bits/packet + 1 bit/event typical). Moves are input samples. Datablocks are static dictionary data. Polymorphic ClassRep IDs hide payload types from the net code.

## Caveats

- Client-server in the shipped game; the authors note only some managers are asymmetric and the model *could* be peer or multi-server — it is not a lockstep protocol. Do not remint 027, 016, or 197.
- Simulation-layer prediction, interpolation, and the exact scoping heuristic are declared out of scope. Net priority is an input from that layer, not computed here.
- Whitepaper, no DOI/arXiv. Bit counts and the 128-player / modem claims are architectural, not a benchmark table.

## Links

- Open PDF: https://www.gamedevs.org/uploads/tribes-networking-model.pdf
- GarageGames / Torque lineage notes: https://www.garagegames.com/
