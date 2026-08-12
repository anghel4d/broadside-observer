---

title: "Fix Your Timestep!"
authors:
  - "Glenn Fiedler"
year: 2004
venue: "Gaffer on Games"
arxiv: null
doi: null
source: "https://gafferongames.com/post/fix_your_timestep/"
topics:
  - determinism
  - simulation
  - netcode
seed_rank: 702
seed_batch: "lineage-shallow-2026-08-13"
reviewed: "2026-08-13"
pool: "engine"
relevance_score: 10
lineage: rollback-netcode
cites:
  - title: "Deterministic Lockstep"
    url: "https://gafferongames.com/post/deterministic_lockstep/"
    year: 2014
    arxiv: null
    doi: null
    card: "017-deterministic-lockstep"
  - title: "Networked Physics (2004)"
    url: "https://gafferongames.com/post/networked_physics_2004/"
    year: 2004
    arxiv: null
    doi: null
    card: "444-networked-physics-2004"
  - title: "GGPO Rollback Networking"
    url: "https://github.com/pond3r/ggpo"
    year: 2006
    arxiv: null
    doi: null
    card: "254-ggpo-rollback-networking"
---
# Fix Your Timestep!

## One-sentence takeaway

Fixed-dt accumulator + render interpolation is the substrate under lockstep, prediction, and rollback.

## Why it matters here

Without a stable sim tick, GGPO-style rollback and deterministic lockstep both lie.

## Key ideas

- Accumulate real time; drain in fixed dt steps.
- Clamp frame time to avoid spiral-of-death.
- Alpha-blend previous/current state for rendering.
- Decouples display rate from simulation determinism.

## Caveats

- Does not alone give networked determinism.
- Physics engines may need their own substep policy.
- Seed card from shallow lineage pass; promote before relying on fine-grained claims.

## Links

- URL: https://gafferongames.com/post/fix_your_timestep/
