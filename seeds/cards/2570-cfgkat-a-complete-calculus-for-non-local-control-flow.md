---
title: "CFGKAT: A Complete Calculus for Non-Local Control Flow"
authors:
  - "Spencer Van Koevering"
  - "Alexandra Silva"
  - "Cheng Zhang"
  - "Tobias Kappé"
year: 2026
venue: "arXiv preprint (cs.PL)"
arxiv: "2611.14201"
doi: null
source: "https://arxiv.org/abs/2611.14201"
version_reviewed: "v1"
topics:
  - "category-theory-plt"
  - "typed-programming-systems"
seed_rank: 2570
seed_batch: "frontier-2026-11-12"
reviewed: "2026-11-12"
pool: "languages"
relevance_score: 7
cites:
  - title: "CFGKAT: A Complete Calculus for Non-Local Control Flow"
    url: "https://arxiv.org/abs/2611.14201"
    year: 2026
    arxiv: "2611.14201"
    doi: null
---

# CFGKAT: A Complete Calculus for Non-Local Control Flow

## One-sentence takeaway

CFGKAT gives guarded Kleene Algebra with Tests a sound and complete axiomatization for programs with break and goto, keeps an efficient decision procedure, and verifies the loop case of Erosa-Hendren goto elimination in Rocq.

## Why it matters here

Algebraic program equivalence with non-local control is what a rule language with early exits and an optimizer that restructures control flow both need. A complete, decidable calculus is a solid foundation for checking that ano's lowering or rule rewrites preserve meaning.

## Key ideas

- **Extension of GKAT** with non-local control flow (break, goto) while keeping an efficient decision procedure.
- **Barriers.** Contextual goto semantics break compositional reasoning; the paper overcomes them for a complete axiomatization.
- **Case study.** Verifies the loop case of the Erosa-Hendren goto elimination algorithm, which needs fixpoints, control-flow contexts and mutable state.
- **Mechanized** in Rocq.

## Caveats

Theory paper; tooling for using the calculus in a compiler is not part of it.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.14201
- PDF: https://arxiv.org/pdf/2611.14201
