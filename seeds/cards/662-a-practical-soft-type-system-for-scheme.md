---
title: "A Practical Soft Type System for Scheme"
authors:
  - "Andrew K. Wright"
  - "Robert Cartwright"
year: 1997
venue: "ACM TOPLAS"
arxiv: null
doi: "10.1145/239912.239917"
source: "https://doi.org/10.1145/239912.239917"
topics:
  - soft-typing
  - scheme
  - wright
  - cartwright
seed_rank: 662
seed_batch: "perfects-pl-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 10
lineage: programming-language-foundations
cites:
  - title: "Soft Typing"
    url: "https://doi.org/10.1145/113445.113469"
    year: 1991
    arxiv: null
    doi: "10.1145/113445.113469"
  - title: "A Syntactic Approach to Type Soundness"
    url: "https://doi.org/10.1006/inco.1994.1093"
    year: 1994
    arxiv: null
    doi: "10.1006/inco.1994.1093"
  - title: "The Revised^5 Report on the Algorithmic Language Scheme"
    url: "https://doi.org/10.1023/A:1010051815785"
    year: 1998
    arxiv: null
    doi: "10.1023/A:1010051815785"
see:
  - "661-soft-typing"
  - "660-a-syntactic-approach-to-type-soundness"
  - "675-the-revised-5-report-on-the-algorithmic-language-scheme"
---

# A Practical Soft Type System for Scheme

## One-sentence takeaway

Soft Scheme infers recursive union types for R4RS Scheme and erases every run-time check the inference can prove unnecessary, including on assignment and first-class continuations.

## Why it matters here

This is the implemented ancestor of "accept the program, inject the residual checks" — the contract you want if ano ever soft-types host Scheme/Lisp or agent scripts instead of rejecting them.

## Key ideas

- Underlying system generalizes Hindley–Milner with recursive types and a limited union type, so Scheme's uncurried, variable-arity procedures still have principal soft types.
- The typechecker *eliminates* provably-redundant primitive checks and *flags* the rest as potential errors; flagged sites stay as dynamic tests.
- Handles the whole of R4RS that matters: `set!`, `call/cc`, and multiple return values are in the formalized fragment.
- TOPLAS 19(1), 1997, DOI 10.1145/239912.239917. Cartwright–Fagan 1991 is the idea; this is the system.

## Caveats

## Links

- DOI: [10.1145/239912.239917](https://doi.org/10.1145/239912.239917)
