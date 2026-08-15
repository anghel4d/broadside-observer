---
title: "XPBD: Position-Based Simulation of Compliant Constrained Dynamics"
authors:
  - "Miles Macklin"
  - "Matthias Müller"
  - "Nuttapong Chentanez"
year: 2016
venue: "MIG 2016"
arxiv: null
doi: "10.1145/2994258.2994272"
source: "https://mmacklin.com/xpbd.pdf"
topics:
  - physics
  - xpbd
seed_rank: 264
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "engines"
relevance_score: 9
lineage: particle-fluids
cites:
  - title: "Position Based Dynamics"
    url: "https://doi.org/10.1016/j.jvlc.2007.01.005"
    year: 2007
    arxiv: null
    doi: "10.1016/j.jvlc.2007.01.005"
  - title: "Position Based Fluids"
    url: "https://doi.org/10.1145/2461912.2461984"
    year: 2013
    arxiv: null
    doi: "10.1145/2461912.2461984"
  - title: "Particle-Based Fluid Simulation for Interactive Applications"
    url: "https://matthias-research.github.io/pages/publications/sca03.pdf"
    year: 2003
    arxiv: null
    doi: null
see:
  - "287-position-based-dynamics"
  - "407-particle-based-fluid-simulation-for-interactive-applications"
  - "483-position-based-fluids"
---

# XPBD: Position-Based Simulation of Compliant Constrained Dynamics

## One-sentence takeaway

XPBD adds a total Lagrange multiplier and a compliance term to PBD so constraint stiffness stops depending on timestep and iteration count, and so each constraint reports a force.

## Why it matters here

Anoptic cloth, soft props, and character colliders want PBD's robustness without retuning every asset when the solver iteration budget changes. XPBD is the drop-in that makes those assets reusable.

## Key ideas

- Classic PBD scales the position correction by a stiffness `k`; more iterations or a smaller `Δt` silently stiffens every constraint.
- Compliance `α` is inverse stiffness. The Gauss-Seidel update is `Δλ = (−C − α̃λ) / (∇C M⁻¹ ∇Cᵀ + α̃)` with `α̃ = α / Δt²`.
- Storing the accumulated multiplier `λ` gives a constraint-force estimate for haptics and breakable joints.
- Damping folds in as a Rayleigh potential along the same constraint gradient.
- Validated against a full implicit Newton solve; looks similar at a fraction of the cost. MIG 2016, DOI 10.1145/2994258.2994272. The previously listed arXiv id 1609.09792 is a different paper.

## Caveats

## Links

- Author PDF: https://mmacklin.com/xpbd.pdf
- DOI: [10.1145/2994258.2994272](https://doi.org/10.1145/2994258.2994272)
- Alternate PDF: https://matthias-research.github.io/pages/publications/XPBD.pdf
