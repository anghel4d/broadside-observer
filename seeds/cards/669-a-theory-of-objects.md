---
title: "A Theory of Objects"
authors:
  - "Martín Abadi"
  - "Luca Cardelli"
year: 1996
venue: "Springer (Monographs in Computer Science)"
arxiv: null
doi: "10.1007/978-1-4419-8598-9"
source: "https://doi.org/10.1007/978-1-4419-8598-9"
topics:
  - object-calculi
  - abadi
  - cardelli
  - type-systems
seed_rank: 669
seed_batch: "perfects-pl-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 10
lineage: programming-language-foundations
cites:
  - title: "On Understanding Types, Data Abstraction, and Polymorphism"
    url: "https://doi.org/10.1145/6041.6042"
    year: 1985
    arxiv: null
    doi: "10.1145/6041.6042"
  - title: "A Denotational Semantics of Inheritance and Its Correctness"
    url: "https://doi.org/10.1145/74877.74922"
    year: 1989
    arxiv: null
    doi: "10.1145/74877.74922"
  - title: "SELF: The Power of Simplicity"
    url: "https://doi.org/10.1145/38765.38828"
    year: 1987
    arxiv: null
    doi: "10.1145/38765.38828"
see:
  - "668-on-understanding-types-data-abstraction-and-polymorphism"
  - "688-a-denotational-semantics-of-inheritance-and-its-correctness"
  - "687-self-the-power-of-simplicity"
---

# A Theory of Objects

## One-sentence takeaway

Abadi and Cardelli give objects their own calculus — records of methods with update, typed and untyped — instead of encoding OO as a thin layer over λ.

## Why it matters here

If Anoptic ever types an entity/component "object" or ano grows first-class method update, this is the λ-calculus analogue for OO, sitting beside Smalltalk/SELF history rather than replacing it.

## Key ideas

- An object is a collection of named methods; method invocation and method update are primitive, not sugar for records-of-functions plus a fixpoint.
- Untyped object calculus first, then first-order and higher-order typed variants; subtyping and variance are developed for method types.
- Inheritance is explained via the same wrappers/fixed-points Cook used, now inside a typed object calculus rather than a denotational encoding of classes.
- Springer MCS, 1996, DOI 10.1007/978-1-4419-8598-9. The Blue Book and SELF remain the systems; this is the theory.

## Caveats

## Links

- DOI: [10.1007/978-1-4419-8598-9](https://doi.org/10.1007/978-1-4419-8598-9)
