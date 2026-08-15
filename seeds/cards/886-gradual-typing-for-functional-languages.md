---
title: Gradual Typing for Functional Languages
authors:
- Jeremy G. Siek
- Walid Taha
year: 2006
venue: Scheme and Functional Programming Workshop
arxiv: null
doi: null
source: "https://scheme2006.cs.uchicago.edu/13-siek.pdf"
topics:
- gradual-typing
- siek-taha
- type-safety
seed_rank: 886
seed_batch: to1000-db-types-2026-08-13
reviewed: 2026-08-13
pool: languages
relevance_score: 9
lineage: type-safety
cites: []
---

# Gradual Typing for Functional Languages

## One-sentence takeaway

Siek and Taha introduce gradual typing: the unknown type `?` and a consistency relation (not subtyping) so statically and dynamically typed code mix, with casts inserted at the boundaries.

## Why it matters here

Root paper for the entire gradual/migratory shelf (Typed Racket, Reticulated, Safe TypeScript, Flow). If Anoptic ever grows optional types on a dynamic config/script layer, this is the calculus, not "just add annotations."

## Key ideas

- Partial types: every type is consistent with `?`; consistency is symmetric and not transitive, unlike classical subtyping.
- Implicit cast insertion at statically/dynamically typed boundaries; the dynamic semantics is a cast calculus.
- Typed code that never meets `?` stays fully static; untyped code is the all-`?` program.
- Foundation later refined into the gradual guarantee (SNAPL 2015) and AGT (POPL 2016).
- Scheme Workshop 2006; the canonical PDF is the workshop proceedings copy, no DOI.

## Caveats

## Links

- PDF: https://scheme2006.cs.uchicago.edu/13-siek.pdf
