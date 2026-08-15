---
title: "Deterministic Lockstep"
authors:
  - "Glenn Fiedler"
year: 2014
venue: "Gaffer on Games"
arxiv: null
doi: null
source: "https://gafferongames.com/post/deterministic_lockstep/"
topics:
  - networking
  - determinism
seed_rank: 16
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "engines"
relevance_score: 10
lineage: game-networking
cites:
  - title: "1500 Archers on a 28.8: Network Programming in Age of Empires and Beyond"
    url: "https://www.gamedeveloper.com/programming/1500-archers-on-a-28-8-network-programming-in-age-of-empires-and-beyond"
    year: 2001
    arxiv: null
    doi: null
  - title: "Fix Your Timestep!"
    url: "https://gafferongames.com/post/fix_your_timestep/"
    year: 2004
    arxiv: null
    doi: null
  - title: "Snapshot Interpolation"
    url: "https://gafferongames.com/post/snapshot_interpolation/"
    year: 2015
    arxiv: null
    doi: null
see:
  - "027-1500-archers-on-a-28-8-network-programming-in-age-of-empires"
  - "198-fix-your-timestep"
  - "265-snapshot-interpolation"
---

# Deterministic Lockstep

## One-sentence takeaway

Lockstep networks a simulation by sending only per-frame inputs, not object state — bandwidth stays constant as object count grows, but only if every peer is bit-exact and frame n cannot advance without input n.

## Why it matters here

GRID COMMAND’s default netcode is this article: input structs, a playout-delay buffer, and redundant UDP instead of TCP. Anoptic physics will desync the same way ODE did until the RNG and timestep are pinned.

## Key ideas

- Determinism means a checksum of the whole physics state matches bit-for-bit; “close enough” diverges exponentially (shown with ODE’s randomized constraint order).
- Sample a small input struct each frame (not key events, not the whole keyboard) and tag it with a frame index; the receiver may not step frame n until that input arrives.
- A playout-delay buffer (Netflix-style) absorbs jitter so 60 Hz inputs appear evenly spaced; too small a buffer hitches, too large adds latency.
- TCP is the wrong reliable-ordered transport here: one lost packet stalls the sim for ~2×RTT. Fiedler’s UDP protocol redundantly includes all un-acked inputs (they are tiny) so there is never a retransmission wait.
- Inputs rarely change every frame, so delta-coding them (1 bit if unchanged) keeps even a 2-second worst-case window under 100 bytes.

## Caveats

## Links

- URL: https://gafferongames.com/post/deterministic_lockstep/
- Series: https://gafferongames.com/categories/networked-physics/
