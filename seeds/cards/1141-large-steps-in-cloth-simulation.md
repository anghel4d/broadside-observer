---
title: "Large Steps in Cloth Simulation"
authors:
  - "David Baraff"
  - "Andrew Witkin"
year: 1998
venue: "SIGGRAPH"
arxiv: null
doi: "10.1145/280814.280821"
source: "https://doi.org/10.1145/280814.280821"
topics:
  - "cloth-simulation"
  - "implicit-integration"
  - "constrained-dynamics"
  - "ecs-data-oriented-simulation"
seed_rank: 1141
seed_batch: "archive-2026-08-22"
reviewed: "2026-08-22"
pool: "engines"
relevance_score: 9
lineage: implicit-cloth
cites:
  - title: "Position Based Dynamics"
    url: "https://doi.org/10.1016/j.gvc.2007.01.007"
    year: 2007
    arxiv: null
    doi: "10.1016/j.gvc.2007.01.007"
  - title: "XPBD: Position-Based Simulation of Compliant Constrained Dynamics"
    url: "https://doi.org/10.1145/2994258.2994272"
    year: 2016
    arxiv: null
    doi: "10.1145/2994258.2994272"
  - title: "Physically Based Modeling Course Notes"
    url: "https://www.cs.cmu.edu/~baraff/sigcourse/"
    year: 2001
    arxiv: null
    doi: null
  - title: "Sequential Impulses for Constraint Solving (Box2D)"
    url: "https://box2d.org/files/ErinCatto_SequentialImpulses_GDC2006.pdf"
    year: 2006
    arxiv: null
    doi: null
see:
  - "287-position-based-dynamics"
  - "264-xpbd-position-based-simulation-of-compliant-constrained-dyna"
  - "368-physically-based-modeling-course-notes"
  - "290-sequential-impulses-for-constraint-solving-box2d"
  - "1134-stable-fluids"
---

# Large Steps in Cloth Simulation

## One-sentence takeaway

Cloth is a stiff ODE (stretch ≫ bend): implicit Euler plus a modified conjugate gradient that *exactly* maintains particle constraints, so clothing-resolution meshes take large steps instead of exploding.

## Why it matters here

PBD (287) and XPBD (264) are the game-cloth answers. Baraff–Witkin 1998 is the paper they replaced — and the one you still steal from when the energy is actually a force Jacobian, not a constraint residual. Anoptic banners, flags, capes, and cable nets that need anisotropic stretch with a real Young's modulus want this implicit system, not a PBD iteration count. Stam (1134) made fluids unconditionally stable by changing the integrator; this paper does the same for *stiff cloth*, with a CG that never violates pinned vertices even if you stop early. The 2001 course notes (368) teach the surrounding rigid-body machinery; this is the cloth step.

## Key ideas

- Stretch resistance makes the ODE stiff. Explicit Euler/RK force tiny steps. Implicit Euler yields a sparse \(O(n)\times O(n)\) linear system per frame.
- Internal energy is quadratic in positions (not quartic metric-tensor), which plays nicely with the implicit Jacobian. Unified damping is in the same linearisation.
- Modified CG: filter the residual and the search direction so constraint rows (pinned particles, collision attachments) stay satisfied *exactly*, independent of iteration count. Typical CG iteration count is small.
- Triangle meshes, not regular grids — clothing topology is the point. Anisotropic stretch/compression are first-class.

## Caveats

- A large sparse solve per frame is the cost. PBD/XPBD exist because games would rather iterate constraints than factor a Hessian. Pick on purpose.
- Contact and self-collision are not the paper (Bridson 2002 is the usual follow-on). This is the integrator + constraint filter.
- Quadratic energy is a modelling choice; real fabrics with strongly nonlinear stretch need a different force, same integrator.

## Links

- DOI: [10.1145/280814.280821](https://doi.org/10.1145/280814.280821)
- Author PDF: [https://www.cs.cmu.edu/~baraff/papers/sig98.pdf](https://www.cs.cmu.edu/~baraff/papers/sig98.pdf)
- Seminal Graphics reprint: [https://doi.org/10.1145/3596711.3596792](https://doi.org/10.1145/3596711.3596792)
