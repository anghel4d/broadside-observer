---
title: Refinement Types for Haskell
authors:
- Niki Vazou
- Eric L. Seidel
- Ranjit Jhala
- Dimitrios Vytiniotis
- Simon Peyton Jones
year: 2014
venue: ICFP
arxiv: null
doi: 10.1145/2628136.2628161
source: "https://doi.org/10.1145/2628136.2628161"
topics:
- liquidhaskell
- refinement-types
- type-safety
seed_rank: 906
seed_batch: to1000-db-types-2026-08-13
reviewed: 2026-08-13
pool: languages
relevance_score: 9
lineage: type-safety
cites:
  - title: "Liquid Types"
    url: "https://doi.org/10.1145/1375581.1375602"
    year: 2008
    doi: "10.1145/1375581.1375602"
  - title: "OutsideIn(X): Modular Type Inference with Local Assumptions"
    url: "https://doi.org/10.1017/S0956796811000098"
    year: 2011
    doi: "10.1017/S0956796811000098"
see:
  - "905-liquid-types"
  - "913-outsidein-x-modular-type-inference-with-local-assumptions"
---

# Refinement Types for Haskell

## One-sentence takeaway

Classical refinement VCs assume every free variable is already a value; that is unsound under laziness, so LiquidHaskell stratifies binders as Div / WHNF / finite and uses refinements themselves to prove termination.

## Why it matters here

Ano is lazy in spirit (standing rules fire when demanded) but most kernels are total. This paper is the warning label: you cannot paste DML/Liquid VCs onto a non-strict evaluator. The stratified labels plus sized-type termination are the portable fix, implemented as LiquidHaskell.

## Key ideas

- Standard VC generation drops the “x is a value” guard; under lazy evaluation a diverging binder makes `false` assumptions and unsoundly proves `div` safe (the `explode`/`diverge` example).
- Stratified types: default Div (may diverge), Wnf (reduces to WHNF — pattern-match scrutinees), Fin (reduces to a finite value). Only non-Div binders contribute their refinements to the VC.
- Termination is recovered by checking recursive functions in a weakened environment that only allows strictly smaller arguments on a well-founded metric (sized types).
- Measures encode algebraic-datatype metrics so the same SMT logic talks about list lengths and tree heights.
- Evaluation on >10k lines of Haskell libraries: 96% of recursive functions proved terminating at about 1.7 termination-annotation lines per 100 LOC.

## Caveats

## Links

- DOI: [10.1145/2628136.2628161](https://doi.org/10.1145/2628136.2628161)
- PDF: https://eric.seidel.io/pub/haskellrefinements-icfp14.pdf
- Authors' page: https://goto.ucsd.edu/~rjhala/papers/refinement_types_for_haskell.html
