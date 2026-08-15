---
title: "Simple Imperative Polymorphism"
authors:
  - "Andrew K. Wright"
year: 1995
venue: "Lisp and Symbolic Computation"
arxiv: null
doi: "10.1007/BF01019944"
source: "https://doi.org/10.1007/BF01019944"
topics:
  - value-restriction
  - polymorphism
  - ml
  - wright
seed_rank: 710
seed_batch: "perfects-pl-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 10
lineage: programming-language-foundations
cites:
  - title: "Type Inference for Polymorphic References"
    url: "https://doi.org/10.1016/0890-5401(90)90018-C"
    year: 1990
    arxiv: null
    doi: "10.1016/0890-5401(90)90018-C"
  - title: "Principal Type-Schemes for Functional Programs"
    url: "https://doi.org/10.1145/582153.582176"
    year: 1982
    arxiv: null
    doi: "10.1145/582153.582176"
  - title: "A Syntactic Approach to Type Soundness"
    url: "https://doi.org/10.1006/inco.1994.1093"
    year: 1994
    arxiv: null
    doi: "10.1006/inco.1994.1093"
see:
  - "672-type-inference-for-polymorphic-references"
  - "640-principal-type-schemes-for-functional-programs"
  - "660-a-syntactic-approach-to-type-soundness"
---

# Simple Imperative Polymorphism

## One-sentence takeaway

Generalize a let-bound expression only when it is a syntactic value; the value restriction restores soundness for ML polymorphism in the presence of `ref` without a full effect system.

## Why it matters here

Ano and any ML-family DSL Anoptic grows will hit Tofte’s polymorphic-reference hole the first time someone writes `let r = ref []`. Wright’s rule is the one-line fix SML’97 and OCaml adopted; implement that before inventing a region/effect discipline.

## Key ideas

- Damas–Milner let-polymorphism plus ML references is unsound if non-values are generalized (`let r = ref [] in …`).
- Restricting generalization to syntactic values (λ, constructors, already-bound identifiers) is sound and cheap to implement.
- The rule is coarser than Tofte’s effect-based analysis but needs no effect variables in the type checker.
- Wright–Felleisen syntactic type soundness is the metatheoretic setting; SML’97 ships the restriction.
- Some later systems weaken the restriction (OCaml’s relaxed value restriction) without abandoning the idea.

## Caveats

## Links

- DOI: [10.1007/BF01019944](https://doi.org/10.1007/BF01019944)
- Springer: https://link.springer.com/article/10.1007/BF01019944
