---
title: "From Walks to Skeletons: A Reusable Transport Architecture for Interactive Monte Carlo PDE Solvers"
authors:
  - "Yunfeng Liao"
  - "Yucheng Wu"
  - "Xiucheng Li"
year: 2026
venue: "arXiv preprint (cs.GR)"
arxiv: "2610.36931"
doi: null
source: "https://arxiv.org/abs/2610.36931"
topics:
  - "walk-on-spheres"
  - "monte-carlo-pde"
  - "radiance-cascades-gi"
seed_rank: 2455
seed_batch: "craft-2026-10-29"
reviewed: "2026-10-29"
pool: "graphics"
lineage: monte-carlo-rendering
relevance_score: 8
cites:
  - title: "From Walks to Skeletons: A Reusable Transport Architecture for Interactive Monte Carlo PDE Solvers"
    url: "https://arxiv.org/abs/2610.36931"
    year: 2026
    arxiv: "2610.36931"
    doi: null
see: ["1827-grid-free-monte-carlo-for-time-dependent-diffusion", "1196-an-adaptive-fast-multipole-accelerated-hybrid-boundary-integral", "1068-a-rapid-hierarchical-radiosity-algorithm"]
---

# From Walks to Skeletons: A Reusable Transport Architecture for Interactive Monte Carlo PDE Solvers

## One-sentence takeaway

Instead of throwing away every Walk-on-Spheres trajectory after one query, this work stores the walks as a persistent "transport skeleton", a shared graph that can be reused across query points and boundary conditions, refined progressively, compressed, and locally patched when geometry moves.

## Why it matters here

Walk-on-Spheres is grid-free like radiance cascades and the FMM-for-RC idea, and its weak spot is the same one: Monte Carlo work that gets discarded every frame. A skeleton that caches transport between regions and only re-walks where geometry changed is the caching move the M2L+RC sketch relies on, done here for elliptic PDEs. Interactive editing of transport "between selected regions" is close to hierarchical-radiosity links. Useful as a design reference for diffusion-style GI, heat or influence maps in GRID COMMAND, and any grid-free field solve in Anoptic.

## Key ideas

- **Persistent walks.** Stochastic trajectories are organized into a shared computational graph rather than consumed and dropped.
- **Reuse across queries and boundary values.** One skeleton answers many evaluation points and changing Dirichlet data.
- **Progressive refinement and structure-preserving compression** keep the graph bounded while accuracy improves.
- **Local adaptation to dynamic geometry.** Only the parts of the skeleton touched by an edit are rebuilt.
- **Editable transport between regions**, which turns a solver internal into an artistic or gameplay control.

## Caveats

Abstract-level read; the paper reports "substantial savings" without numbers in the abstract. Elliptic PDEs only; time-dependent and scattering problems (and real GI with visibility) are not claimed. Memory cost of the skeleton for large scenes is the obvious thing to check.

## Links

- arXiv abstract: https://arxiv.org/abs/2610.36931
- PDF: https://arxiv.org/pdf/2610.36931
