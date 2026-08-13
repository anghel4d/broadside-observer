---
title: "When Types Intersect and Effects Get Handled"
authors:
  - "Stefano Catozi"
  - "Ugo Dal Lago"
  - "Taro Sekiyama"
year: 2026
venue: "arXiv:cs.LO"
arxiv: "2606.09526"
doi: null
source: "https://arxiv.org/abs/2606.09526"
topics:
  - typed-programming-systems
seed_rank: 10
seed_batch: "curiosity-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 9
lineage: algebraic-effects
cites:
  - title: "Handlers of Algebraic Effects"
    url: "https://doi.org/10.1007/978-3-642-00590-9_7"
    year: 2009
    arxiv: null
    doi: "10.1007/978-3-642-00590-9_7"
  - title: "Programming with Algebraic Effects and Handlers"
    url: "https://arxiv.org/abs/1203.1539"
    year: 2015
    arxiv: "1203.1539"
    doi: null
  - title: "Handling Algebraic Effects"
    url: "https://doi.org/10.2168/LMCS-9(4:23)2013"
    year: 2013
    arxiv: null
    doi: null
  - title: "Algebraic Operations and Generic Effects"
    url: "https://doi.org/10.1023/A:1023064908962"
    year: 2003
    arxiv: null
    doi: null
  - title: "Notions of Computation and Monads"
    url: "https://doi.org/10.1016/0890-5401(91)90052-4"
    year: 1991
    arxiv: null
    doi: "10.1016/0890-5401(91)90052-4"
see:
  - "022-handlers-of-algebraic-effects"
  - "123-programming-with-algebraic-effects-and-handlers"
  - "128-handling-algebraic-effects"
  - "147-algebraic-operations-and-generic-effects"
  - "036-notions-of-computation-and-monads"
---

# When Types Intersect and Effects Get Handled

## One-sentence takeaway

The first intersection-type system for λ-calculus with algebraic effect handlers: subject reduction *and* expansion, so it characterises terminating evaluations and turns handler reachability into type inference.

## Why it matters here

Why you might love this: Dal Lago + Sekiyama putting intersection types on handlers. Termination of effectful programs becomes a typing fact, and "does this handler path fire?" becomes inference. That is a precision tool for ano's standing rules / command interpreters — handlers are already the planned reading of bulk effects, and intersection types are how you talk about *sets of behaviours* without jumping to dependent types. Also drops to a simple-type fragment with a decidable HOMC problem, unlike HEPCF.

## Key ideas

- Intersection types for λ plus algebraic effects and handlers; behavioural, with subject reduction and expansion.
- Characterises the terms whose evaluation terminates.
- Reachability reduces to type inference.
- First system with these properties for a calculus with handlers.
- Induces a simple-type system that is type-sound (not terminating) with a decidable HOMC problem, unlike Dal Lago & Ghyselen's HEPCF.

## Caveats

- This is a logical characterisation, not an ano typechecker design.
- Intersection-type inference is famously expensive in general; "reduces to type inference" is not "cheap."
- 2026 preprint; compare carefully to HEPCF before repeating the decidability contrast.

## Links

- arXiv: [2606.09526](https://arxiv.org/abs/2606.09526)
- PDF: https://arxiv.org/pdf/2606.09526
