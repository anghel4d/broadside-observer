---
title: "Floating Point Determinism"
authors:
  - "Glenn Fiedler"
year: 2010
venue: "Gaffer On Games"
arxiv: null
doi: null
source: "https://gafferongames.com/post/floating_point_determinism/"
topics:
  - determinism
seed_rank: 276
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "realtime"
relevance_score: 9
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

# Floating Point Determinism

## One-sentence takeaway

IEEE floats are deterministic *on the same compiler, ISA, and FP-control state* — not across x87 vs SSE, debug vs release, or AMD vs Intel transcendentals — so lockstep netcode has to pin all three.

## Why it matters here

If Broadside ever locksteps the sim instead of snapshotting it, this post is the threat model. One DLL that flips the x87 precision word desyncs every client.

## Key ideas

- Same binary + same CPU family + explicit rounding/precision control can replay bit-exact (Gas Powered Games / Supreme Commander: `_controlfp(_PC_24)` + `_RC_NEAR`, asserted every tick).
- Transcendentals (`fsin`/`fcos`), fused multiply-add, and compiler reassociation are the usual desync sources; wrap or avoid them.
- External libraries (D3D, audio, printers) mutate the FP control word and must be followed by a restore.
- Cross-compiler, cross-arch, or mixed debug/release replays are not a reasonable goal without `/fp:strict` and a large performance tax.
- Survey of industry war stories (MotoGP, Battlezone 2, FSW) rather than a new algorithm. 24 February 2010.

## Caveats

## Links

- Post: https://gafferongames.com/post/floating_point_determinism/
