---
title: "On the Expressive Power of Programming Languages"
authors:
  - "Matthias Felleisen"
year: 1991
venue: "Science of Computer Programming"
arxiv: null
doi: "10.1016/0167-6423(91)90036-W"
source: "https://doi.org/10.1016/0167-6423(91)90036-W"
topics:
  - expressiveness
  - felleisen
  - continuations
  - language-design
seed_rank: 663
seed_batch: "perfects-pl-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 10
lineage: programming-language-foundations
cites:
  - title: "Control Operators, the SECD Machine, and the λ-Calculus"
    url: "https://scholarworks.iu.edu/dspace/items/d85303cb-faee-4396-bf56-b03b35758a47"
    year: 1987
    arxiv: null
    doi: null
  - title: "A Syntactic Theory of Sequential Control"
    url: "https://doi.org/10.1016/0304-3975(87)90109-5"
    year: 1987
    arxiv: null
    doi: "10.1016/0304-3975(87)90109-5"
  - title: "Definitional Interpreters for Higher-Order Programming Languages"
    url: "https://doi.org/10.1145/800194.805852"
    year: 1972
    arxiv: null
    doi: "10.1145/800194.805852"
see:
  - "665-control-operators-the-secd-machine-and-the-calculus"
  - "630-definitional-interpreters-for-higher-order-programming-langu"
---

# On the Expressive Power of Programming Languages

## One-sentence takeaway

A construct is *macro-expressible* in a language if a local, hygiene-respecting rewriting can eliminate it; otherwise it is a real extension, not syntactic sugar.

## Why it matters here

This is the test for whether an ano effect, a GRID COMMAND control operator, or a "just a macro" ECS combinator actually changes the language — call/cc fails it; `let` usually does not.

## Key ideas

- Macro-expressibility: there is a polynomial, compositional translation that replaces each use of the feature by a phrase of the core language, uniformly in every context.
- If no such translation exists, the feature increases expressive power; Felleisen uses this to classify control operators against the pure λ-calculus.
- Separates "we can encode it in CPS" (a global transform) from "we can macro-eliminate it" (a local one).
- *Science of Computer Programming* 17, 1991, DOI 10.1016/0167-6423(91)90036-W.

## Caveats

## Links

- DOI: [10.1016/0167-6423(91)90036-W](https://doi.org/10.1016/0167-6423(91)90036-W)
