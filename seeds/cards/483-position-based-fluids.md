---
title: "Position Based Fluids"
authors:
  - "Miles Macklin"
  - "Matthias Müller"
year: 2013
venue: "ACM TOG (SIGGRAPH)"
arxiv: null
doi: "10.1145/2461912.2461984"
source: "https://doi.org/10.1145/2461912.2461984"
topics:
  - fluids
  - pbd
seed_rank: 483
seed_batch: "lineage-shallow-2026-08-13"
reviewed: "2026-08-13"
pool: "engines"
relevance_score: 8
lineage: particle-fluids
cites:
  - title: "Particle-Based Fluid Simulation for Interactive Applications"
    url: "https://matthias-research.github.io/pages/publications/sca03.pdf"
    year: 2003
  - title: "Position Based Dynamics"
    url: "https://doi.org/10.1016/j.jvcir.2007.01.005"
    year: 2007
    doi: "10.1016/j.jvcir.2007.01.005"
see:
  - "407-particle-based-fluid-simulation-for-interactive-applications"
  - "287-position-based-dynamics"
---

# Position Based Fluids

## One-sentence takeaway

Macklin and Müller enforce incompressibility as a PBD density constraint \(C_i=\rho_i/\rho_0-1=0\), iteratively correcting particle positions so SPH-like fluids stay stable at game-sized timesteps.

## Why it matters here

Successor path from Müller 2003 interactive SPH toward engine-stable liquid FX: density constraints plus artificial pressure beat tiny SPH timesteps in an ECS particle pass.

## Key ideas

- Predict positions under external forces, then solve the SPH density constraint with Jacobi-style \(\lambda_i\) multipliers and position corrections \(\Delta p_i\).
- An artificial/near-pressure term reduces clumping; vorticity confinement and XSPH viscosity restore lost swirling after the constraint projection.
- Neighbor queries remain the performance core; large stable \(\Delta t\) is the point versus classical SPH.
- SIGGRAPH 2013 / TOG 32(4) article 104; later XPBD generalizes the same constraint machinery.

## Caveats

## Links

- DOI: [10.1145/2461912.2461984](https://doi.org/10.1145/2461912.2461984)
- Author page: https://blog.mmacklin.com/project/pbf/
