---
title: "Type Inference with Polymorphic Recursion"
authors:
  - "Fritz Henglein"
year: 1993
venue: "ACM TOPLAS"
arxiv: null
doi: "10.1145/169701.169692"
source: "https://doi.org/10.1145/169701.169692"
topics:
  - polymorphic-recursion
  - type-inference
  - semi-unification
seed_rank: 671
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

# Type Inference with Polymorphic Recursion

## One-sentence takeaway

Henglein shows that inferring principal types once a recursive function may be used at many types is semi-unification — and that is why ML and Haskell make polymorphic recursion opt-in.

## Why it matters here

Ano will want recursive kernels at several element types; this TOPLAS paper is the reason you demand an annotation instead of hoping Hindley–Milner still decides.

## Key ideas

- Ordinary let-polymorphism (Damas–Milner / Damas–Hindley) keeps principal types and a unification algorithm; allowing a recursive binding to be instantiated at different types inside its own body does not.
- The constraint problem is semi-unification (given pairs of types, find a substitution making each left a substitution-instance of the corresponding right).
- Semi-unification was already known to be undecidable in general; Henglein analyses the fragment that polymorphic recursion actually generates and discusses practical incomplete algorithms.
- TOPLAS 15(2):253–289, April 1993, DOI 10.1145/169701.169692. Mycroft (1984) introduced the feature; this is the inference-complexity paper.

## Caveats

## Links

- DOI: [10.1145/169701.169692](https://doi.org/10.1145/169701.169692)
