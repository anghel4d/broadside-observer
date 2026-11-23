---
title: "DevLog #10 - A replay is just orders and a seed. Then a soldier takes a step"
authors:
  - "JimmYABV (Byzen developers)"
year: 2026
venue: "IndieDB devlog, 13 Nov 2026"
arxiv: null
doi: null
source: "https://www.indiedb.com/news/devlog-10-a-replay-is-just-orders-and-a-seed-then-a-soldier-takes-a-step"
version_reviewed: "web 2026-11-13"
topics:
  - "rts"
  - "deterministic-simulation"
  - "replays"
  - "lockstep"
  - "fixed-timestep"
  - "seeded-rng"
  - "state-hashing"
  - "unit-movement"
seed_rank: 2695
seed_batch: "craft-2026-11-23"
reviewed: "2026-11-23"
pool: "game-ai"
relevance_score: 8
lineage: game-networking
cites:
  - title: "DevLog #10 - A replay is just orders and a seed. Then a soldier takes a step"
    url: "https://www.indiedb.com/news/devlog-10-a-replay-is-just-orders-and-a-seed-then-a-soldier-takes-a-step"
    year: 2026
    arxiv: null
    doi: null
---

# DevLog #10 - A replay is just orders and a seed. Then a soldier takes a step

## One-sentence takeaway

A Unity RTS team made skirmish replays exact (a 7-minute, 119-order match replays with 420 of 420 per-second state hashes matching, from a 23 KB file) by moving everything onto a 1/30 s tick, giving each system its own seeded random stream, replacing NavMeshAgent with a tick-driven unit mover, and hunting down state that leaked in from outside the match.

## Why it matters here

GRID COMMAND needs the same thing for replays, lockstep multiplayer and AI regression tests, and this devlog is a recent, concrete list of what actually broke. The useful parts are the bugs: a global RNG where one extra roll shifts everything after it, engine pathing and avoidance that run per rendered frame, runtime NavMesh carving outside the tick, ambient systems (weather making mud that slows units) on the frame clock, start order of objects created in the same frame, and a `static` field that survived into the second match of a session. It is a checklist to design against rather than debug into.

## Key ideas

- **Fixed tick.** The simulation advances in 1/30 s ticks; orders take effect on a tick; rendering only interpolates between the previous and current pose.
- **One RNG stream per system** (combat, AI planner, wildlife, weather...), each seeded from the match seed; 180 random calls in 54 files were moved, and each file names its stream. The AI issues orders like a player, so it is recorded too.
- **State hashing.** Every 30 ticks a 64-bit FNV-1a hash walks all entities in a fixed order (faction, then id), with positions rounded to millimetres and hit points to hundredths so harmless float noise does not change it; playback compares hashes and reports the first divergent tick.
- **Own movement (UnitMotor).** Same interface as NavMeshAgent, but path requests are solved inside the tick, at most 48 per tick in request order; fixed-delta steps; a deterministic separation pass on a 4 m grid that splits overlap by priority; an "arrived if within 4 m and not closer for 1 s" rule to stop crowds pushing forever.
- **Obstacles baked, not carved.** Buildings and trees register as blockers and the NavMesh is rebaked synchronously in the tick (about 40 ms), with tree and ore removals batched every 10 s; after a rebake, walking units re-request paths in creation order.
- **Whole world on the tick.** Clock, weather, water, fire, herds and wildlife step in one `SimWorld` step in an order derived from type and spawn order; wildlife now simulates map-wide, not only on screen.

## Caveats

A practitioner devlog for one Unity game, measured on a single machine: cross-machine floating-point determinism is explicitly not yet tested, ships still use Unity's agent, and networked play is not covered. The fixes cost gameplay feel (new crowd behaviour) and a roughly 40 ms hitch when placing buildings. Nothing here is new in principle (see the Age of Empires lockstep lineage); its value is the recent, specific failure list.

## Links

- Devlog (IndieDB): https://www.indiedb.com/news/devlog-10-a-replay-is-just-orders-and-a-seed-then-a-soldier-takes-a-step
