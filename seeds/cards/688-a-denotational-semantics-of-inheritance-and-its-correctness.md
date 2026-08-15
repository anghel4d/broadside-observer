---
title: "A Denotational Semantics of Inheritance and Its Correctness"
authors:
  - "William R. Cook"
  - "Jens Palsberg"
year: 1989
venue: "OOPSLA"
arxiv: null
doi: "10.1145/74877.74922"
source: "https://doi.org/10.1145/74877.74922"
topics:
  - inheritance
  - denotational-semantics
  - cook
  - objects
seed_rank: 688
seed_batch: "perfects-pl-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 10
lineage: programming-language-foundations
cites:
  - title: "SELF: The Power of Simplicity"
    url: "https://doi.org/10.1145/38765.38828"
    year: 1987
    arxiv: null
    doi: "10.1145/38765.38828"
  - title: "On Understanding Types, Data Abstraction, and Polymorphism"
    url: "https://doi.org/10.1145/6041.6042"
    year: 1985
    arxiv: null
    doi: "10.1145/6041.6042"
see:
  - "687-self-the-power-of-simplicity"
  - "668-on-understanding-types-data-abstraction-and-polymorphism"
---

# A Denotational Semantics of Inheritance and Its Correctness

## One-sentence takeaway

Cook and Palsberg interpret a class as a wrapper (a function from self to a record of methods) and inheritance as composition of wrappers before the self-fixed-point is taken.

## Why it matters here

This is the math of `self`/`super`: why method lookup is a fixed point, and why mixins later compose. The old card DOI was Chambers–Ungar–Lee's SELF *implementation* paper.

## Key ideas

- A class denotes a generator `self ↦ {m1 = …, m2 = …}`; instantiation is the least fixed point of that generator.
- Inheritance wraps the parent generator so `super` sees the parent's methods and `self` still refers to the complete child.
- Correctness is relative to an operational reading of method lookup; the two agree on the resulting objects.
- OOPSLA 1989, DOI 10.1145/74877.74922. Journal version: *Information and Computation* 114 (1994), DOI 10.1006/inco.1994.1090. Bracha–Cook mixins are the next card.

## Caveats

## Links

- DOI: [10.1145/74877.74922](https://doi.org/10.1145/74877.74922)
