---
title: Refined Criteria for Gradual Typing
authors:
- Jeremy G. Siek
- Michael M. Vitousek
- Matteo Cimini
- John Tang Boyland
year: 2015
venue: SNAPL
arxiv: null
doi: 10.4230/LIPIcs.SNAPL.2015.274
source: "https://doi.org/10.4230/LIPIcs.SNAPL.2015.274"
topics:
- gradual-typing
- gradual-guarantee
- type-safety
seed_rank: 890
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

# Refined Criteria for Gradual Typing

## One-sentence takeaway

The gradual guarantee: erasing type annotations from a program must preserve its behavior up to blame — the formal line between sound gradual typing and TypeScript-style optional checking.

## Why it matters here

Yardstick for any optional-type layer on Anoptic scripts or agent configs. If dropping an annotation changes values (not just raises blame), you do not have gradual typing.

## Key ideas

- Four criteria: (1) a fully static fragment that is a real typed language, (2) a fully dynamic fragment that is a real untyped language, (3) the gradual guarantee, (4) blame for cast failures.
- Optional typing (TypeScript, mypy by default) fails the guarantee because the compiler erases types and does not insert checks.
- Interplay with blame theorems: when a cast fails, the party that wrote the wrong annotation (or the untyped context) is named.
- SNAPL 2015, LIPIcs; DOI 10.4230/LIPIcs.SNAPL.2015.274.
- AGT (POPL 2016) later gives a recipe that produces systems satisfying these criteria from a static type system.

## Caveats

## Links

- DOI: [10.4230/LIPIcs.SNAPL.2015.274](https://doi.org/10.4230/LIPIcs.SNAPL.2015.274)
- PDF: https://drops.dagstuhl.de/entities/document/10.4230/LIPIcs.SNAPL.2015.274
