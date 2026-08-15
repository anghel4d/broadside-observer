---
title: Logical Types for Untyped Languages
authors:
- Sam Tobin-Hochstadt
- Matthias Felleisen
year: 2010
venue: ICFP
arxiv: null
doi: 10.1145/1863543.1863561
source: "https://doi.org/10.1145/1863543.1863561"
topics:
- occurrence-typing
- typed-racket
- type-safety
seed_rank: 889
seed_batch: to1000-db-types-2026-08-13
reviewed: 2026-08-13
pool: languages
relevance_score: 9
lineage: type-safety
cites:
  - title: "The Design and Implementation of Typed Scheme"
    url: "https://doi.org/10.1145/1328438.1328486"
    year: 2008
    arxiv: null
    doi: "10.1145/1328438.1328486"
see:
  - "888-the-design-and-implementation-of-typed-scheme"
---

# Logical Types for Untyped Languages

## One-sentence takeaway

Occurrence typing is recast as a logic: predicates produce propositions about identifiers, functions carry latent propositions, and control-flow narrows types without dependent types.

## Why it matters here

This is why Typed Racket and later TypeScript can type-check idiomatic `if (x)` / `typeof` / `number?` code. If Anoptic scripts grow a checker, this is the narrowing engine, not full dependent types.

## Key ideas

- Each expression elaborates to a type plus a pair of propositions (if true / if false) plus an object (which identifier it is).
- Latent propositions on functions (`number?` has latent proposition `Number` on its argument) fire at call sites.
- Sound narrowing for idiomatic dynamic code: unions, recursive data, and aliasing of identifiers through objects.
- ICFP 2010 formalization of the informal occurrence typing in the 2008 Typed Scheme paper.
- Directly informs TypeScript control-flow analysis, though TS does not prove the same soundness theorem.

## Caveats

## Links

- DOI: [10.1145/1863543.1863561](https://doi.org/10.1145/1863543.1863561)
