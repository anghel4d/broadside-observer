---
title: Understanding TypeScript
authors:
- Gavin Bierman
- Martín Abadi
- Mads Torgersen
year: 2014
venue: ECOOP
arxiv: null
doi: 10.1007/978-3-662-44202-9_11
source: "https://doi.org/10.1007/978-3-662-44202-9_11"
topics:
- typescript
- type-systems
- type-safety
seed_rank: 899
seed_batch: to1000-db-types-2026-08-13
reviewed: 2026-08-13
pool: languages
relevance_score: 9
lineage: type-safety
cites:
  - title: "TypeScript Design Goals"
    url: "https://github.com/microsoft/TypeScript/wiki/TypeScript-Design-Goals"
    year: 2014
    arxiv: null
    doi: null
see:
  - "900-typescript-design-goals"
---

# Understanding TypeScript

## One-sentence takeaway

A formal core of TypeScript's structural type system, written with a TypeScript designer, that documents which unsound features (covariant methods, unchecked indexers, `any`) are intentional.

## Why it matters here

Primary academic reading of the type system Broadside's own TS/JS tooling sits on. Use this when arguing that production TypeScript is optional typing, not gradual typing.

## Key ideas

- Structural typing with assignment compatibility, not classical width/depth subtyping; the paper writes down the actual rules.
- Intentional unsoundnesses are enumerated rather than papered over — downcasts, method parameter covariance, and `any` as both top and bottom.
- Connects the formal core to the erasure compilation model (types do not exist at run time).
- ECOOP 2014, LNCS 8586. Authors span MSR and the TypeScript team (Torgersen).
- Safe TypeScript (card 898) is the soundness retrofit this formalization makes possible to state.

## Caveats

## Links

- DOI: [10.1007/978-3-662-44202-9_11](https://doi.org/10.1007/978-3-662-44202-9_11)
