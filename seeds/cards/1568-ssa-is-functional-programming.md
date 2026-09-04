---
title: "SSA is Functional Programming"
authors:
  - "Andrew W. Appel"
year: 1998
venue: "ACM SIGPLAN Notices 33(4)"
arxiv: null
doi: "10.1145/278283.278285"
source: "https://www.cs.princeton.edu/~appel/papers/ssafun.pdf"
topics:
  - typed-programming-systems
  - static-single-assignment
  - array-programming-apl-bqn-q
seed_rank: 1568
seed_batch: "archive-2026-09-04"
reviewed: "2026-09-04"
pool: "languages"
relevance_score: 9
lineage: programming-language-foundations
cites:
  - title: "Efficiently Computing Static Single Assignment Form and the Control Dependence Graph"
    url: "https://doi.org/10.1145/115372.115320"
    year: 1991
    arxiv: null
    doi: "10.1145/115372.115320"
  - title: "A correspondence between continuation passing style and static single assignment form"
    url: "https://doi.org/10.1145/202529.202532"
    year: 1995
    arxiv: null
    doi: "10.1145/202529.202532"
  - title: "The essence of compiling with continuations"
    url: "https://doi.org/10.1145/155090.155113"
    year: 1993
    arxiv: null
    doi: "10.1145/155090.155113"
  - title: "Compiling with Continuations"
    url: "https://doi.org/10.1017/CBO9780511609619"
    year: 1992
    arxiv: null
    doi: "10.1017/CBO9780511609619"
see:
  - "1566-efficiently-computing-static-single-assignment-form"
  - "1567-a-simple-graph-based-intermediate-representation"
  - "666-the-essence-of-compiling-with-continuations"
  - "667-compiling-with-continuations"
---

# SSA is Functional Programming

## One-sentence takeaway

A φ at a join is the formal parameter of the corresponding nested function; actuals on the incoming edges are the call arguments — Cytron dominance-frontier SSA *is* the algorithm that nests those functions and drops unused parameters.

## Why it matters here

ano leans functional/array: names are immutable, joins are lexical, CPS/ANF is already in the library (666, 667). Appel’s four-page SIGPLAN note is the bridge that says the imperative SSA graph Click 1567 and Cytron 1566 build is the same object as a well-scoped functional program. φ-nodes are not a Fortran wart to lower away before thinking; they are the join of a let-bound continuation.

## Key ideas

- **Crude SSA = mutually recursive functions.** Split every variable at every block boundary, φ in every block: each block `i` becomes `function fᵢ(iᵢ, jᵢ, kᵢ)`, and `j₂ ← φ(j₇, j₁)` is exactly the formal `j₂` of `f₂` with actuals `j₇` and `j₁` at the two call sites.
- **Optimal nesting = Cytron DF.** After dominance-frontier φ placement, inner functions inherit non-local bindings (the definition of `i` dominates block 2, so no φ/`i` parameter). “The algorithm for finding the best way of nesting the functions … is the one for converting programs to SSA form.”
- **Scope encodes the SSA invariant.** A definition dominates every use (and, for a φ operand, dominates that predecessor). Functional nested scope makes that restriction syntax; flowchart SSA often leaves it unstated even though analyses depend on it.
- **CPS / ANF, not λ-calculus decoration.** Kelsey (IR’95) already gave SSA ↔ CPS translations. Appel’s notation is ANF/CPS with every non-trivial value bound (Flanagan 1993; Appel *Compiling with Continuations* 1992). Church / Strachey / Steele are the historical path, not a new calculus here.
- **Arrays are the remaining imperative core.** Scalar SSA is the functional program; arrays still need dependence analysis in parallelizing compilers (Wolfe). That is the honest limit for ano’s in-place array story.

## Caveats

- Column, not a TOPLAS algorithm paper. No new SSA construction; it re-explains Cytron 1566 and advertises *Modern Compiler Implementation* ch. 19. Do not remint Cytron, Click IR, Rabbit 674, or the CPS pair 666/667.
- The “really crude” φ-everywhere example is pedagogical; production compilers use iterated DF.
- Functional programmers are told to steal SSA flowcharts for intuition; SSA users are told to steal lexical scope. Neither community gets a new optimizer from this note alone.

## Links

- Open PDF: https://www.cs.princeton.edu/~appel/papers/ssafun.pdf
- DOI: https://doi.org/10.1145/278283.278285
- ACM DL: https://dl.acm.org/doi/10.1145/278283.278285
