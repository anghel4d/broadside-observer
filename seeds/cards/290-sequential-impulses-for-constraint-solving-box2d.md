---
title: "Sequential Impulses for Constraint Solving (Box2D)"
authors:
  - "Erin Catto"
year: 2006
venue: "GDC 2006"
arxiv: null
doi: null
source: "https://box2d.org/files/ErinCatto_SequentialImpulses_GDC2006.pdf"
topics:
  - physics
  - constraints
seed_rank: 290
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "engines"
relevance_score: 9
cites:
  - title: "Position Based Dynamics"
    url: "https://doi.org/10.1016/j.jvlc.2007.01.005"
    year: 2007
    arxiv: null
    doi: "10.1016/j.jvlc.2007.01.005"
  - title: "XPBD: Position-Based Simulation of Compliant Constrained Dynamics"
    url: "https://mmacklin.com/xpbd.pdf"
    year: 2016
    arxiv: null
    doi: "10.1145/2994258.2994272"
see:
  - "287-position-based-dynamics"
  - "264-xpbd-position-based-simulation-of-compliant-constrained-dyna"
---

# Sequential Impulses for Constraint Solving (Box2D)

## One-sentence takeaway

Catto's GDC 2006 talk solves contacts and joints by applying one scalar impulse at a time, clamping accumulated λ ≥ 0 for contacts, which is projected Gauss-Seidel and the solver inside Box2D.

## Why it matters here

Anoptic's 2D/3D rigid solver should start here, not at a full MLCP. Sequential impulses are the reason Box2D (and a generation of 3D clones) feel stable enough for gameplay without an LCP library.

## Key ideas

- Each constraint is a scalar: relative velocity along the constraint axis should be zero (or bounce). The impulse that does that is `λ = −Ċ / (J M⁻¹ Jᵀ)`.
- Iterate constraints in sequence (projected Gauss-Seidel). Store the accumulated impulse and clamp contacts to the friction pyramid / non-penetration cone.
- Warm-starting from last frame's λ is what makes stacks stop jittering after a few ticks.
- Equivalent to an iterative LCP; cheaper and more hackable than a direct pivoting solver.
- Previous cites (Rosetta Stone, KM3NeT/ORCA, MGPBD) were bibliographic noise and have been dropped.

## Caveats

## Links

- GDC PDF: https://box2d.org/files/ErinCatto_SequentialImpulses_GDC2006.pdf
