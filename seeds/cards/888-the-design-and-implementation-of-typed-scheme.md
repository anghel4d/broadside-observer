---
title: The Design and Implementation of Typed Scheme
authors:
- Sam Tobin-Hochstadt
- Matthias Felleisen
year: 2008
venue: POPL
arxiv: null
doi: 10.1145/1328438.1328486
source: "https://doi.org/10.1145/1328438.1328486"
topics:
- typed-racket
- migratory-typing
- type-safety
seed_rank: 888
seed_batch: to1000-db-types-2026-08-13
reviewed: 2026-08-13
pool: languages
relevance_score: 9
lineage: type-safety
cites:
  - title: "Gradual Typing for Functional Languages"
    url: "https://scheme2006.cs.uchicago.edu/13-siek.pdf"
    year: 2006
    arxiv: null
    doi: null
see:
  - "886-gradual-typing-for-functional-languages"
---

# The Design and Implementation of Typed Scheme

## One-sentence takeaway

Typed Scheme (now Typed Racket) is a sound migratory type system for an existing untyped language: occurrence typing plus contract-protected typed/untyped boundaries.

## Why it matters here

Canonical "add types to a living dynamic codebase" system. Template for migrating Anoptic scripts / agent tools toward types without a rewrite, and the origin of the migratory-typing research program.

## Key ideas

- Occurrence typing: a predicate in a test refines the type of a binding in each branch (`number?` narrows to `Number`).
- Modules are the migration unit; a typed module talking to an untyped one is wrapped in contracts that assign blame.
- Designed as software engineering (port existing Scheme) rather than a green-field gradual calculus — hence "migratory" rather than only "gradual."
- POPL 2008. Followed by Logical Types (ICFP 2010) for the propositional refinement, and SNAPL 2017 for the ten-year retrospective.
- Contracts at the boundary are the runtime half of soundness; they are also the source of the later performance crisis (card 895).

## Caveats

## Links

- DOI: [10.1145/1328438.1328486](https://doi.org/10.1145/1328438.1328486)
