---
title: "Soft Typing"
authors:
  - "Robert Cartwright"
  - "Mike Fagan"
year: 1991
venue: "PLDI"
arxiv: null
doi: "10.1145/113445.113469"
source: "https://doi.org/10.1145/113445.113469"
topics:
  - soft-typing
  - gradual-types-precursor
  - type-inference
  - cartwright
seed_rank: 661
seed_batch: "perfects-pl-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 10
lineage: programming-language-foundations
cites:
  - title: "A Theory of Type Polymorphism in Programming"
    url: "https://doi.org/10.1016/0022-0000(78)90014-4"
    year: 1978
    arxiv: null
    doi: "10.1016/0022-0000(78)90014-4"
  - title: "The Revised^5 Report on the Algorithmic Language Scheme"
    url: "https://doi.org/10.1023/A:1010051815785"
    year: 1998
    arxiv: null
    doi: "10.1023/A:1010051815785"
see:
  - "629-a-theory-of-type-polymorphism-in-programming"
  - "675-the-revised-5-report-on-the-algorithmic-language-scheme"
---

# Soft Typing

## One-sentence takeaway

Cartwright and Fagan's PLDI 1991 soft type system infers types for untyped programs and inserts the *minimum* run-time checks that restore soundness, instead of rejecting the program.

## Why it matters here

Ano sitting on untyped or gradually-checked host code (C, shader text, agent scripts) wants this contract: static types as an optimizer and debugger, not a hard gate that refuses to run.

## Key ideas

- A soft type is a static approximation; mismatch is a *check*, not a type error that aborts compilation.
- The checker proves some primitive operations safe and leaves the rest flagged; those flags are exactly the residual dynamic tests.
- Aimed at Scheme-like untyped functional languages; Hindley–Milner is the starting inference engine, relaxed so almost every program still types.
- PLDI 1991, DOI 10.1145/113445.113469. Wright–Cartwright 1997 is the later implemented Soft Scheme, not this paper.

## Caveats

## Links

- DOI: [10.1145/113445.113469](https://doi.org/10.1145/113445.113469)
