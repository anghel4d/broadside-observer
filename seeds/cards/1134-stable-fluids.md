---
title: "Stable Fluids"
authors:
  - "Jos Stam"
year: 1999
venue: "SIGGRAPH"
arxiv: null
doi: "10.1145/311535.311548"
source: "https://doi.org/10.1145/311535.311548"
topics:
  - "stable-fluids"
  - "navier-stokes"
  - "semi-lagrangian-advection"
  - "ecs-data-oriented-simulation"
seed_rank: 1134
seed_batch: "archive-2026-08-22"
reviewed: "2026-08-22"
pool: "engines"
relevance_score: 10
lineage: stable-fluids
cites:
  - title: "Particle-Based Fluid Simulation for Interactive Applications"
    url: "https://doi.org/10.2312/SCA/SCA03/154-159"
    year: 2003
    arxiv: null
    doi: "10.2312/SCA/SCA03/154-159"
  - title: "Position Based Fluids"
    url: "https://doi.org/10.1145/2485895.2485897"
    year: 2013
    arxiv: null
    doi: "10.1145/2485895.2485897"
  - title: "Particle Systems—a Technique for Modeling a Class of Fuzzy Objects"
    url: "https://doi.org/10.1145/357318.357320"
    year: 1983
    arxiv: null
    doi: "10.1145/357318.357320"
  - title: "Physically Based Modeling Course Notes"
    url: "https://www.cs.cmu.edu/~baraff/sigcourse/"
    year: 2001
    arxiv: null
    doi: null
see:
  - "407-particle-based-fluid-simulation-for-interactive-applications"
  - "483-position-based-fluids"
  - "368-physically-based-modeling-course-notes"
  - "287-position-based-dynamics"
---

# Stable Fluids

## One-sentence takeaway

Unconditionally stable Navier–Stokes on a grid: implicit diffusion, Helmholtz–Hodge projection, and *semi-Lagrangian* advection so the time step is no longer a CFL hostage.

## Why it matters here

SPH (407) and PBF (483) are particle fluids. Stam 1999 is the *Eulerian* solver every smoke/ink/wind field still copies — Foster–Metaxas blew up; this one does not. Anoptic weather, volumetric fog, and influence-map advection want a stable grid step, not a particle neighbourhood. Trace particles backward along the velocity, interpolate, then project the field onto divergence-free via a Poisson solve (FFT or Jacobi). The GDC 2003 twenty-line version is the one you paste; the SIGGRAPH paper is why it is allowed to take a 1/30 s step.

## Key ideas

- Split Navier–Stokes: add forces, *implicit* viscous diffusion, advect by tracing the characteristic backward (semi-Lagrangian / method of characteristics), then project with a Helmholtz–Hodge decomposition so \(\nabla\cdot\mathbf{u}=0\).
- Semi-Lagrangian advection has no CFL restriction. Overshoot is interpolation error, not explosion. Unconditional stability is the product, not a side effect.
- FFT Poisson on a periodic box, or a sparse linear solve with solid boundaries. Stam shows both, plus advected solid textures as the look.
- Physical accuracy is secondary; visual swirl under user forces is the spec. That is the graphics CFD contract.

## Caveats

- Numerical dissipation from interpolation kills small vortices — later vorticity confinement (Fedkiw 2001) is the usual patch. Stam is the integrator, not the look.
- Periodic FFT boundaries are the toy; real obstacles need the sparse Poisson + no-stick/no-slip handling.
- Not a replacement for SPH/PBD when you need a free surface or two-way rigid coupling.

## Links

- DOI: [10.1145/311535.311548](https://doi.org/10.1145/311535.311548)
- Author PDF: [https://www.josstam.com/_files/ugd/cf1fd6_898fe9b63df946689101b8d074f8efba.pdf](https://www.josstam.com/_files/ugd/cf1fd6_898fe9b63df946689101b8d074f8efba.pdf)
- GDC 2003 real-time version: [https://www.dgp.toronto.edu/public_user/stam/reality/Research/pdf/GDC03.pdf](https://www.dgp.toronto.edu/public_user/stam/reality/Research/pdf/GDC03.pdf)
