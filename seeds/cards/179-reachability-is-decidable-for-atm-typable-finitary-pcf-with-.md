---
title: "Reachability is Decidable for ATM-Typable Finitary PCF with Effect Handlers"
authors:
  - "Ryunosuke Endo"
  - "Tachio Terauchi"
year: 2025
venue: "arXiv:cs.LO"
arxiv: "2508.12572"
doi: null
source: "https://arxiv.org/abs/2508.12572"
topics:
  - typed-programming-systems
seed_rank: 179
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 8
cites:
  - title: "Programming with Algebraic Effects and Handlers"
    url: "https://arxiv.org/abs/1203.1539"
    year: 2015
    arxiv: "1203.1539"
    doi: "10.1016/j.jlamp.2014.02.001"
  - title: "Handlers of Algebraic Effects"
    url: "https://doi.org/10.1007/978-3-642-00590-9_7"
    year: 2009
    arxiv: null
    doi: "10.1007/978-3-642-00590-9_7"
  - title: "Typed Memory Management in a Calculus of Capabilities"
    url: "https://doi.org/10.1145/292540.292564"
    year: 1999
    arxiv: null
    doi: "10.1145/292540.292564"
see:
  - "107-programming-with-algebraic-effects-and-handlers"
  - "021-handlers-of-algebraic-effects"
  - "028-typed-memory-management-in-a-calculus-of-capabilities"
---

# Reachability is Decidable for ATM-Typable Finitary PCF with Effect Handlers

## One-sentence takeaway

Adding answer-type modification makes reachability decidable again for finitary PCF with effect handlers, via a CPS translation back to handler-free finitary PCF — even though ATM both admits and rejects programs the ATM-free system treats differently.

## Why it matters here

If ano command handlers are going to be verified rather than just typed, this is the known island of decidability: ATM is not merely more types, it is a restriction that restores a reduction to ordinary finitary PCF.

## Key ideas

- Reachability is decidable for finitary PCF and becomes undecidable once algebraic effect handlers are added (Dal Lago and Ghyselen).
- With answer-type modification, reachability is decidable again; the proof is a CPS translation that eliminates handlers.
- ATM is not a pure enlargement: some programs type only with ATM, and some type only without it.
- Recursive-function-free ATM-typable programs with handlers terminate; without ATM they need not.
- The authors also refute a stronger claim from a contemporaneous weaker decidability result.

## Caveats

## Links

- arXiv: [2508.12572](https://arxiv.org/abs/2508.12572)
