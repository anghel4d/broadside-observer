---
title: "Lyapunov stability of polynomial vector fields is undecidable"
authors:
  - "Milan Korda"
year: 2026
venue: "arXiv:math.DS"
arxiv: "2609.22058"
doi: null
source: "https://arxiv.org/abs/2609.22058"
topics:
  - "curiosity"
  - "dynamical-systems"
  - "undecidability"
  - "lean"
seed_rank: 1848
seed_batch: "curiosity-2026-10-07"
reviewed: "2026-10-07"
pool: "maths-foundations"
relevance_score: 9
lineage: undecidability-in-dynamics
cites:
  - title: "Lyapunov stability of polynomial vector fields is undecidable"
    url: "https://arxiv.org/abs/2609.22058"
    year: 2026
    arxiv: "2609.22058"
    doi: null
see:
  - "506-on-undecidable-propositions-of-formal-mathematical-systems"
  - "1199-rank-stability-in-quadratic-extensions-and-hilbert-s-tenth-pro"
---

# Lyapunov stability of polynomial vector fields is undecidable

## One-sentence takeaway

There is no algorithm that decides, from the rational coefficients of a homogeneous polynomial ODE (already in dimension 5), whether the origin is Lyapunov stable, which proves a conjecture of V. I. Arnold; the proof is formalized in Lean.

## Why it's lovely

Why you might love this: "is this equilibrium stable?" sounds like the most engineering-friendly question in dynamics, the thing every physics step and controller quietly assumes you can answer. Korda shows that in general you cannot, even for polynomial fields with rational coefficients, and backs it with a Lean formalization. There is a matching boundary: in dimension 2 (homogeneous) every common stability notion is decidable. A clean, Gödel-flavoured (506) limit on what a simulation engine or verifier can ever certify automatically.

## Key ideas

- There exist N and odd D such that Lyapunov stability of the origin for dY/dt = F(Y), F homogeneous of degree D in dimension N with rational coefficients, is undecidable.
- Proves Arnold's conjecture; the smallest dimension achieved is N = 5.
- Analogous undecidability for global asymptotic and global exponential stability of non-homogeneous fields.
- Dimension 2, homogeneous: all commonly used stability notions are decidable (building on existing results).
- Lean formalization of the proof accompanies the paper.

## Caveats

Undecidability is about the general class; specific systems are still routinely certified (e.g. by Lyapunov functions or SOS). The gap between N = 2 (decidable) and N = 5 (undecidable) is left open. Revised v2 on 2026-09-25; recent and not yet refereed.

## Links

- arXiv abs: https://arxiv.org/abs/2609.22058
- PDF: https://arxiv.org/pdf/2609.22058
