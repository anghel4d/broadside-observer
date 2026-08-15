---
title: "A Theory of Type Polymorphism in Programming"
authors:
  - "Robin Milner"
year: 1978
venue: "Journal of Computer and System Sciences"
arxiv: null
doi: "10.1016/0022-0000(78)90014-4"
source: "https://doi.org/10.1016/0022-0000(78)90014-4"
topics:
  - hindley-milner
  - ml
  - polymorphism
  - milner
seed_rank: 629
seed_batch: "foundations-greats-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 9
lineage: foundations-of-computing
cites:
  - title: "The Principal Type-Scheme of an Object in Combinatory Logic"
    url: "https://doi.org/10.1090/S0002-9947-1969-0253905-6"
    year: 1969
    arxiv: null
    doi: "10.1090/S0002-9947-1969-0253905-6"
  - title: "Recursive Functions of Symbolic Expressions and Their Computation by Machine, Part I"
    url: "https://doi.org/10.1145/367177.367199"
    year: 1960
    arxiv: null
    doi: "10.1145/367177.367199"
  - title: "The Next 700 Programming Languages"
    url: "https://doi.org/10.1145/365230.365257"
    year: 1966
    arxiv: null
    doi: "10.1145/365230.365257"
see:
  - "628-the-principal-type-scheme-of-an-object-in-combinatory-logic"
  - "575-recursive-functions-of-symbolic-expressions-and-their-comput"
  - "616-the-next-700-programming-languages"
---

# A Theory of Type Polymorphism in Programming

## One-sentence takeaway

Milner gives ML a polymorphic type discipline — let-bound type schemes, monomorphic λ-bound variables — that a compiler can infer and that is sound for a denotational semantics.

## Why it matters here

Makes principal types a *language feature*. Ancestor of every modern inferred FP language and of any ano type story that wants `id` to have type ∀α. α → α without annotations.

## Key ideas

- Let-polymorphism (prenex / rank-1): a `let`-bound identifier may be used at many types; a λ-bound one may not.
- Soundness is proved against a semantic model; ill-typed programs are excluded, not delayed to runtime.
- The paper is the type *system*; Algorithm W is the 1982 Damas–Milner companion (card 640).
- *JCSS* 17(3), 1978, pp. 348–375.

## Caveats

## Links

- DOI: [10.1016/0022-0000(78)90014-4](https://doi.org/10.1016/0022-0000(78)90014-4)
