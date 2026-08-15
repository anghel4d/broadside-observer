---
title: "Physically Based Modeling: Principles and Practice"
authors:
  - "Andrew Witkin"
  - "David Baraff"
year: 1997
venue: "SIGGRAPH Courses"
arxiv: null
doi: null
source: "https://www.cs.cmu.edu/~baraff/sigcourse/"
topics:
  - physics
seed_rank: 368
seed_batch: "systems-prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "engines"
relevance_score: 8
cites:
  - title: "Physically Based Modeling: Principles and Practice — Particle Dynamics"
    url: "https://www.cs.cmu.edu/~baraff/sigcourse/notesc.pdf"
    year: 1997
    arxiv: null
    doi: null
  - title: "Physically Based Modeling: Principles and Practice — Rigid Body Dynamics"
    url: "https://www.cs.cmu.edu/~baraff/sigcourse/notesd1.pdf"
    year: 1997
    arxiv: null
    doi: null
---

# Physically Based Modeling: Principles and Practice

## One-sentence takeaway

Witkin and Baraff’s SIGGRAPH course is the still-standard derivation of particle ODEs, implicit integration, constrained dynamics, and rigid-body equations for graphics.

## Why it matters here

Anoptic’s physics tick — particles, ragdolls, Broadside debris — is this course in C. The notes are how you write a semi-implicit Euler / implicit cloth step and a constraint Jacobian without cargo-culting a middleware engine.

## Key ideas

- Start from F = ma as an ODE; choose an integrator (explicit, semi-implicit, implicit) based on stiffness, not fashion.
- Implicit methods (Baraff/Witkin cloth) take a linear solve per step so stiff springs do not explode at game dt.
- Constrained dynamics: Lagrange multipliers / reduced coordinates keep particles on manifolds (rods, contacts) instead of as springs.
- Rigid bodies get a separate pair of notes: unconstrained 6-DoF motion, then contacts and resting constraints.

## Caveats

## Links

- Course index: https://www.cs.cmu.edu/~baraff/sigcourse/
- Particle notes: https://www.cs.cmu.edu/~baraff/sigcourse/notesc.pdf
- Rigid-body I: https://www.cs.cmu.edu/~baraff/sigcourse/notesd1.pdf
- Rigid-body II: https://www.cs.cmu.edu/~baraff/sigcourse/notesd2.pdf
