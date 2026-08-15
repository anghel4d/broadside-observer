---
title: "Mixin-Based Inheritance"
authors:
  - "Gilad Bracha"
  - "William Cook"
year: 1990
venue: "OOPSLA/ECOOP"
arxiv: null
doi: "10.1145/97945.97982"
source: "https://doi.org/10.1145/97945.97982"
topics:
  - mixins
  - inheritance
  - bracha
  - cook
  - objects
seed_rank: 689
seed_batch: "perfects-pl-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 10
lineage: programming-language-foundations
cites:
  - title: "A Denotational Semantics of Inheritance and Its Correctness"
    url: "https://doi.org/10.1145/74877.74922"
    year: 1989
    arxiv: null
    doi: "10.1145/74877.74922"
  - title: "On Understanding Types, Data Abstraction, and Polymorphism"
    url: "https://doi.org/10.1145/6041.6042"
    year: 1985
    arxiv: null
    doi: "10.1145/6041.6042"
see:
  - "688-a-denotational-semantics-of-inheritance-and-its-correctness"
  - "668-on-understanding-types-data-abstraction-and-polymorphism"
---

# Mixin-Based Inheritance

## One-sentence takeaway

Bracha and Cook separate mixins from classes: a mixin is a composable inheritance modifier, a function from superclass to subclass, not a node in a single linear hierarchy.

## Why it matters here

Still the vocabulary for trait/mixin composition in Scala, Dart, and any ano "add this behaviour to that entity type" feature — compositionality versus the class tree.

## Key ideas

- Inheritance as wrapper composition (Cook 1989) lets you name the wrapper; that name is the mixin.
- Mixins compose independently of any particular superclass; a class is what you get after applying a sequence of mixins to a base.
- Linear class hierarchies are the special case where each mixin is applied once and forgotten; multiple inheritance problems become mixin-order problems.
- OOPSLA/ECOOP 1990, DOI 10.1145/97945.97982. Later "traits" work is a refinement, not this paper.

## Caveats

## Links

- DOI: [10.1145/97945.97982](https://doi.org/10.1145/97945.97982)
