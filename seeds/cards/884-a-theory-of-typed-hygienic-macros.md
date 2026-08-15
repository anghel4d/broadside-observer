---
title: A Theory of Typed Hygienic Macros
authors:
- David Herman
year: 2010
venue: PhD dissertation, Northeastern University
arxiv: null
doi: null
source: "https://citeseerx.ist.psu.edu/document?doi=439f13adca9c8785d5cf32d1b01ed05a176bfbc5"
topics:
- macros
- hygiene
- typed-racket
- type-safety
seed_rank: 884
seed_batch: to1000-db-types-2026-08-13
reviewed: 2026-08-13
pool: languages
relevance_score: 9
lineage: type-safety
cites:
  - title: "A Theory of Hygienic Macros"
    url: "https://www.khoury.northeastern.edu/home/wand/papers/herman-wand-07.pdf"
    year: 2008
    arxiv: null
    doi: "10.1007/978-3-540-78739-6_4"
---

# A Theory of Typed Hygienic Macros

## One-sentence takeaway

Herman's dissertation introduces the λₘ-calculus: hygienic expansion that preserves α-equivalence, plus binding-signature types that describe the scopes a macro's arguments introduce.

## Why it matters here

Connects type safety to metaprogramming — the formal story behind Typed Racket / modern hygienic macros. Anoptic DSLs that expand to C or shaders need this hygiene-plus-shapes account, not `cpp`.

## Key ideas

- Hygiene is expansion-independent α-equivalence: two programs that differ only in binder names stay equivalent after expansion.
- Binding-signature types tell the type checker how a macro argument is bound (and in which scope) without expanding it first.
- Shape types constrain the syntactic category of a macro argument (expression vs binding vs definition).
- The 2008 Herman–Wand ESOP paper ("A Theory of Hygienic Macros") is the shorter untyped precursor; this 2010 Northeastern PhD is the typed development. Not an ICFP paper; previous DOI `10.1145/1411204.1411214` does not resolve to this work.
- Formal model ≠ the full Racket macro tower (phases, syntax-local, etc.).

## Caveats

## Links

- CiteSeerX PDF: https://citeseerx.ist.psu.edu/document?doi=439f13adca9c8785d5cf32d1b01ed05a176bfbc5
- ESOP 2008 precursor: https://www.khoury.northeastern.edu/home/wand/papers/herman-wand-07.pdf
