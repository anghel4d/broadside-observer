---
title: "OutsideIn(X): Modular Type Inference with Local Assumptions"
authors:
- Dimitrios Vytiniotis
- Simon Peyton Jones
- Tom Schrijvers
- Martin Sulzmann
year: 2011
venue: Journal of Functional Programming
arxiv: null
doi: 10.1017/S0956796811000098
source: "https://doi.org/10.1017/S0956796811000098"
topics:
- gadts
- type-inference
- type-safety
seed_rank: 913
seed_batch: to1000-db-types-2026-08-13
reviewed: 2026-08-13
pool: languages
relevance_score: 9
lineage: type-safety
cites:
  - title: "Simple Unification-Based Type Inference for GADTs"
    url: "https://doi.org/10.1145/1159803.1159811"
    year: 2006
    doi: "10.1145/1159803.1159811"
  - title: "Guarded Recursive Datatype Constructors"
    url: "https://doi.org/10.1145/604131.604150"
    year: 2003
    doi: "10.1145/604131.604150"
see:
  - "914-simple-unification-based-type-inference-for-gadts"
  - "915-guarded-recursive-datatype-constructors"
---

# OutsideIn(X): Modular Type Inference with Local Assumptions

## One-sentence takeaway

OutsideIn(X) is GHC’s modular inference engine: generate constraints everywhere, then solve them *outside-in* so local GADT/class/family assumptions never leak, and reject programs that lack a unique principal type.

## Why it matters here

Any typed surface for ano that adds GADT-like indices or associated type families will hit the same wall as Haskell: local equalities destroy principal types. The engineering answer is this paper — parameterize the solver by X, do not generalize local `let`, and demand a signature when two incomparable types exist.

## Key ideas

- Like HM(X), the framework is parameterized by a constraint domain X; the instantiation used in GHC is type classes + GADTs + type families.
- Data constructors may bind existentials and introduce local constraints; those assumptions are available only in the corresponding branch.
- Controversial design: drop implicit generalization of local `let`. Almost no real code needed it, and with local assumptions it wrecks modular principality.
- The algorithm is stratified: an X-independent generator plus an X-solver. Accepted programs have a principal type in the natural constraint system, not only in an ad-hoc specialized one.
- Equality constraints involving type families are the delicate solver case; the paper’s simplifier subsumes earlier GHC work and shipped in the compiler.

## Caveats

## Links

- DOI: [10.1017/S0956796811000098](https://doi.org/10.1017/S0956796811000098)
- PDF: https://simon.peytonjones.org/assets/pdfs/outsideinx.pdf
