---
title: "1500 Archers on a 28.8: Network Programming in Age of Empires and Beyond"
authors:
  - "Mark Terrano"
  - "Paul Bettner"
year: 2001
venue: "GDC"
arxiv: null
doi: null
source: "https://www.gamedeveloper.com/programming/1500-archers-on-a-28-8-network-programming-in-age-of-empires-and-beyond"
topics:
  - networking
  - lockstep
seed_rank: 27
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "engines"
relevance_score: 10
lineage: game-networking
cites:
  - title: "Deterministic Lockstep"
    url: "https://gafferongames.com/post/deterministic_lockstep/"
    year: 2014
    arxiv: null
    doi: null
  - title: "Fix Your Timestep!"
    url: "https://gafferongames.com/post/fix_your_timestep/"
    year: 2004
    arxiv: null
    doi: null
see:
  - "016-deterministic-lockstep"
  - "198-fix-your-timestep"
---

# 1500 Archers on a 28.8: Network Programming in Age of Empires and Beyond

## One-sentence takeaway

Age of Empires shipped lockstep on a 28.8 modem by sending only player commands, running one simulation on every machine, and inserting a command-turn delay so 1500 units never crossed the wire.

## Why it matters here

This is the RTS networking postmortem GRID COMMAND inherits: command queue, turn delay, checksum desync detection. Fiedler’s later article is the modern explanation; this is the shipped system.

## Key ideas

- Bandwidth math: serializing 1500 units is impossible on 28.8; serializing a handful of commands per turn is cheap and independent of unit count.
- Each machine runs the identical simulation; the network carries tagged command batches for a future turn, not positions or velocities.
- A two-turn command delay (tunable) hides latency so the sim never stalls waiting on the current frame’s input — the RTS cousin of a playout buffer.
- Desyncs are detected with periodic state checksums; the postmortem is honest about floating-point, RNG, and “someone walked a different path” bugs.
- The authors (Ensemble / Zone) describe host migration, catch-up for late joiners, and why peer-to-peer lockstep beat a client-server world-state model for this genre.

## Caveats

## Links

- URL: https://www.gamedeveloper.com/programming/1500-archers-on-a-28-8-network-programming-in-age-of-empires-and-beyond
