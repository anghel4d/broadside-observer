---
title: "Fixing Incremental Computation: Derivatives of Fixpoints, and the Recursive Semantics of Datalog"
authors:
  - "Mario Alvarez-Picallo"
  - "Alex Eyers-Taylor"
  - "Michael Peyton Jones"
  - "C.-H. Luke Ong"
year: 2018
venue: "arXiv preprint (cs.PL)"
arxiv: "1811.06069"
doi: null
source: "https://arxiv.org/abs/1811.06069"
topics:
  - "incremental-computation"
  - "change-actions"
  - "fixpoints"
  - "datalog"
  - "semi-naive-evaluation"
seed_rank: 2598
seed_batch: "craft-2026-11-15"
reviewed: "2026-11-15"
pool: "languages"
relevance_score: 8
lineage: incremental-computation
cites: []
see:
  - "1856-fixing-the-fixpoint-convergence-detection-incremental-recursion"
  - "1489-dbsp-automatic-incremental-view-maintenance-for-rich-query-languages"
  - "1466-adapton-composable-demand-driven-incremental-computation"
  - "1841-maintaining-views-incrementally"
---

# Fixing Incremental Computation: Derivatives of Fixpoints, and the Recursive Semantics of Datalog

## One-sentence takeaway

The paper generalises change structures to "change actions", shows how to take the derivative of a fixpoint, and gets incremental maintenance of recursively defined functions, including generalised Datalog programs, in a modular way that also applies to other languages.

## Why it matters here

ano's standing rules (する / なる) are recursive definitions over columnar tables that must stay up to date as the world changes every tick. Semi-naive evaluation and DBSP (card 1489) give practical answers; this paper gives the algebra underneath them: what a "change" to a value is, what the derivative of a function is, and why the derivative of a least fixpoint can be computed without starting over. That is the theory to check ano's incremental semantics against before committing to an engine, and card 1856 (convergence detection for incremental recursion) is a 2026 follow-on in the same vein.

## Key ideas

- **Change actions.** A generalisation of change structures; the derivative of a function updates its output from a change to its input.
- **Algebraic properties.** The authors study how change actions compose and give them for common structures: directed-complete partial orders and Boolean algebras.
- **Derivatives of fixpoints.** The central result: how to compute the derivative of a fixpoint, which enables incremental evaluation and maintenance of recursive definitions.
- **Datalog.** Applied to generalised Datalog; unlike earlier results, the technique is modular and carries to Datalog variants and other languages.

## Caveats

Theory paper (34 pages); this card is from the abstract only. It tells you what is sound, not how to make it fast: data layout, indexing and scheduling are left to engines such as DBSP or differential dataflow. Mapping ano's effectful rules (masked array writes, commands) onto change actions is my extrapolation, not something the paper claims.

## Links

- arXiv abstract: https://arxiv.org/abs/1811.06069
- PDF: https://arxiv.org/pdf/1811.06069
