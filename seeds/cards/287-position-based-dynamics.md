---
title: "Position Based Dynamics"
authors:
  - "Matthias Müller"
  - "Bruno Heidelberger"
  - "Marcus Hennix"
  - "John Ratcliff"
year: 2007
venue: "Journal of Visual Languages & Computing / VRIPhys"
arxiv: null
doi: "10.1016/j.jvlc.2007.01.005"
source: "https://doi.org/10.1016/j.jvlc.2007.01.005"
topics:
  - physics
  - pbd
seed_rank: 287
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "engines"
relevance_score: 9
lineage: particle-fluids
cites:
  - title: "Particle-Based Fluid Simulation for Interactive Applications"
    url: "https://matthias-research.github.io/pages/publications/sca03.pdf"
    year: 2003
    arxiv: null
    doi: null
  - title: "Position Based Fluids"
    url: "https://doi.org/10.1145/2461912.2461984"
    year: 2013
    arxiv: null
    doi: "10.1145/2461912.2461984"
  - title: "XPBD: Position-Based Simulation of Compliant Constrained Dynamics"
    url: "https://mmacklin.com/xpbd.pdf"
    year: 2016
    arxiv: null
    doi: "10.1145/2994258.2994272"
see:
  - "407-particle-based-fluid-simulation-for-interactive-applications"
  - "483-position-based-fluids"
  - "264-xpbd-position-based-simulation-of-compliant-constrained-dyna"
---

# Position Based Dynamics

## One-sentence takeaway

PBD integrates with Verlet, then iteratively projects particles onto constraint manifolds with mass-weighted corrections — unconditionally stable cloth, soft bodies, and rigid stacks without solving a force-level implicit system.

## Why it matters here

This is the solver XPBD later regularizes and the mental model for Anoptic's interactive props. When the constraint set is more important than exact stiffness, PBD is still the right first implementation.

## Key ideas

- Predict positions with symplectic Euler / Verlet, then for each constraint C(x) = 0 apply `Δx = −s w ∇C` with `s = C / (∇C M⁻¹ ∇Cᵀ)`, optionally scaled by a stiffness k ∈ [0,1].
- Constraints are geometric (distance, bending, collision, volume) rather than force laws; Gauss-Seidel iteration is trivial to implement and to early-out.
- Unconditionally stable for large timesteps; the cost of that robustness is iteration- and Δt-dependent effective stiffness (the bug XPBD fixes).
- Originally VRIPhys 2006 / JVLC 2007. Author PDF widely mirrored from Matthias Müller's publications page.

## Caveats

## Links

- DOI: [10.1016/j.jvlc.2007.01.005](https://doi.org/10.1016/j.jvlc.2007.01.005)
- Author PDF: https://matthias-research.github.io/pages/publications/posBasedDyn.pdf
