---
title: "ComFree-Sim: A GPU-Parallelized Analytical Contact Physics Engine for Scalable Contact-Rich Robotics Simulation and Control"
authors:
  - "Chetan Borse"
  - "Zhixian Xie"
  - "Wei-Cheng Huang"
  - "Wanxin Jin"
year: 2026
venue: "arXiv:cs.RO"
arxiv: "2603.12185"
doi: null
source: "https://arxiv.org/abs/2603.12185"
topics:
  - physics
seed_rank: 311
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "realtime"
relevance_score: 8
cites:
  - title: "MGPBD: A Multigrid Accelerated Global XPBD Solver"
    url: "https://arxiv.org/abs/2505.13390"
    year: 2025
    arxiv: "2505.13390"
    doi: "10.1145/3721238.3730720"
  - title: "KM3NeT/ORCA: status and perspectives for neutrino oscillation and mass hierarchy measurements"
    url: "https://arxiv.org/abs/2107.10593"
    year: 2021
    arxiv: "2107.10593"
    doi: "10.22323/1.390.0149"
  - title: "Physics, Topology, Logic and Computation: A Rosetta Stone"
    url: "https://arxiv.org/abs/0903.0340"
    year: 2011
    arxiv: "0903.0340"
    doi: "10.1007/978-3-642-12821-9_2"
see:
  - "215-mgpbd-a-multigrid-accelerated-global-xpbd-solver"
  - "018-physics-topology-logic-and-computation-a-rosetta-stone"
---

# ComFree-Sim: A GPU-Parallelized Analytical Contact Physics Engine for Scalable Contact-Rich Robotics Simulation and Control

## One-sentence takeaway

Physics simulation for contact-rich robotics is often bottlenecked by contact resolution: mainstream engines enforce non-penetration and Coulomb friction via complementarity constraints or constrained optimization, requiring per-step iterative solves whose cost grows superlinearly with contact density.

## Why it matters here

Realtime/sim/netcode discipline for deterministic or low-latency games (ComFree-Sim: A GPU-Parallelized Analytical Contact Physics Engine for Scalable C).

## Key ideas

- Physics simulation for contact-rich robotics is often bottlenecked by contact resolution: mainstream engines enforce non-penetration and Coulomb friction via complementarity constraints or constrained optimization, requiring per-step iterative solves whose cost grows superlinearly with contact density.
- We present ComFree-Sim, a GPU-parallelized analytical contact physics engine built on complementarity-free contact modeling.
- ComFree-Sim computes contact impulses in closed form via an impedance-style prediction--correction update in the dual cone of Coulomb friction.
- Contact computation decouples across contact pairs and becomes separable across cone facets, mapping naturally to GPU kernels and yielding near-linear runtime scaling with the number of contacts.
- We further extend the formulation to a unified 6D contact model capturing tangential, torsional, and rolling friction, and introduce a practical dual-cone impedance heuristic.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2603.12185](https://arxiv.org/abs/2603.12185)
- URL: https://arxiv.org/abs/2603.12185
