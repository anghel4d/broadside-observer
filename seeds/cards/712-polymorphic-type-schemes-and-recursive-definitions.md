---
title: "Polymorphic Type Schemes and Recursive Definitions"
authors:
  - "Alan Mycroft"
year: 1984
venue: "International Symposium on Programming / LNCS"
arxiv: null
doi: "10.1007/3-540-12925-1_41"
source: "https://doi.org/10.1007/3-540-12925-1_41"
topics:
  - polymorphic-recursion
  - mycroft
  - type-inference
  - ml
seed_rank: 712
seed_batch: "perfects-pl-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 10
lineage: programming-language-foundations
cites:
  - title: "Principal Type-Schemes for Functional Programs"
    url: "https://doi.org/10.1145/582153.582176"
    year: 1982
    arxiv: null
    doi: "10.1145/582153.582176"
  - title: "A Theory of Type Polymorphism in Programming"
    url: "https://doi.org/10.1016/0022-0000(78)90014-4"
    year: 1978
    arxiv: null
    doi: "10.1016/0022-0000(78)90014-4"
see:
  - "640-principal-type-schemes-for-functional-programs"
  - "629-a-theory-of-type-polymorphism-in-programming"
---

# Polymorphic Type Schemes and Recursive Definitions

## One-sentence takeaway

A recursively defined identifier may be used at many instances of its own type scheme — Mycroft-style polymorphic recursion — which ordinary Hindley–Milner let-polymorphism forbids.

## Why it matters here

Nested or rank-polymorphic array code and certain agent-memory traversals want exactly this: a recursive function whose body instantiates the function at a different type. Mycroft introduces the feature; Henglein later shows inference is equivalent to semi-unification and undecidable in general.

## Key ideas

- Damas–Milner generalizes only after a non-recursive binding; a `fix`/`let rec` identifier is monomorphic in its own body.
- Mycroft allows the recursive occurrence to carry a type scheme, so the body may instantiate it at several types.
- The resulting system is strictly more expressive (nested datatypes, some polytypic traversals) and no longer has complete unification-based inference.
- Companion later result: Henglein 1993 reduces inference to semi-unification.
- LNCS 167, International Symposium on Programming, 1984.

## Caveats

## Links

- DOI: [10.1007/3-540-12925-1_41](https://doi.org/10.1007/3-540-12925-1_41)
- Springer: https://link.springer.com/chapter/10.1007/3-540-12925-1_41
