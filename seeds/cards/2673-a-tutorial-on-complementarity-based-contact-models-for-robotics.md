---
title: "A Tutorial on Complementarity-Based Contact Models for Robotics"
authors:
  - "Onur Beker"
  - "A. René Geist"
  - "Michael Posa"
  - "Marc Toussaint"
  - "Justin Carpentier"
  - "Georg Martius"
year: 2026
venue: "arXiv preprint (cs.RO, cs.GR, math.OC)"
arxiv: "2611.26600"
doi: null
source: "https://arxiv.org/abs/2611.26600"
version_reviewed: "v1"
topics:
  - "rigid-body-dynamics"
  - "frictional-contact"
  - "complementarity"
  - "conic-optimization"
  - "physics-engines"
  - "tutorial"
seed_rank: 2673
seed_batch: "craft-2026-11-21"
reviewed: "2026-11-21"
pool: "engines"
relevance_score: 7
see:
  - "311-comfree-sim-a-gpu-parallelized-analytical-contact-physics-en"
  - "313-dojo-a-differentiable-physics-engine-for-robotics"
  - "368-physically-based-modeling-course-notes"
cites:
  - title: "A Tutorial on Complementarity-Based Contact Models for Robotics"
    url: "https://arxiv.org/abs/2611.26600"
    year: 2026
    arxiv: "2611.26600"
    doi: null
---

# A Tutorial on Complementarity-Based Contact Models for Robotics

## One-sentence takeaway

A self-contained 32-page tutorial that derives rigid-body contact with friction as complementarity and cone-complementarity problems in one notation, separates exact formulations from convex relaxations (and the lift-off and creep they cause), and compares first-order and Newton solvers.

## Why it matters here

Anoptic will need a contact solver for unit and debris physics, and most engines pick one (PGS, convex relaxation, soft contacts) without saying what artifacts it trades for speed. This tutorial gives the derivations and the cost, robustness and fidelity trade-offs in one place, so we can choose a formulation knowingly and write our own contact routine instead of copying one simulator's.

## Key ideas

- **Complementarity encodes contact modes.** Non-penetration and frictional dissipation are written as complementarity conditions, which decide separation, sticking and sliding without fixing contact modes in advance.
- **Exact vs relaxed.** Distinguishes equivalent transcriptions from convex relaxations and shows how relaxations introduce artifacts such as lift-off and creep.
- **Existence and uniqueness.** Covers when motions and contact forces exist and are unique, and how the solver ends up choosing among multiple solutions.
- **Solvers.** Compares first-order and Newton-based methods, plus regularization and proximal strategies, on cost, robustness and physical fidelity.
- **Practice.** Links the formulations to widely used simulators, optimal control and differentiable simulation; 14 algorithms in the paper.

## Caveats

Abstract-level read of v1 (19 Nov 2026). It is a robotics tutorial, not a game-physics paper: no stated focus on large stacks, GPU batching or fixed-timestep determinism, which RTS lockstep needs. It surveys known methods rather than proposing a new one.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.26600
- PDF: https://arxiv.org/pdf/2611.26600
