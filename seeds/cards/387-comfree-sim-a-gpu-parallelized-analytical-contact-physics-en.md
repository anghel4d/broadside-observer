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
seed_rank: 387
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "realtime"
relevance_score: 8
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
