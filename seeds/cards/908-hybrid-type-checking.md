---
title: Hybrid Type Checking
authors:
- Cormac Flanagan
year: 2006
venue: POPL
arxiv: null
doi: 10.1145/1111037.1111059
source: "https://doi.org/10.1145/1111037.1111059"
topics:
- hybrid-types
- refinement-types
- type-safety
seed_rank: 908
seed_batch: to1000-db-types-2026-08-13
reviewed: 2026-08-13
pool: languages
relevance_score: 9
lineage: type-safety
cites:
  - title: "Refinement Types for ML"
    url: "https://doi.org/10.1145/113445.113468"
    year: 1991
    doi: "10.1145/113445.113468"
see:
  - "903-refinement-types-for-ml"
---

# Hybrid Type Checking

## One-sentence takeaway

When a refinement obligation is undecidable, do not reject: insert a cast that checks the residual predicate at run time, so static and dynamic checking share one specification language.

## Why it matters here

Ano and GRID COMMAND will have specs the SMT cannot close (open-world unit state, network facts). Hybrid checking is the contract: prove what you can, cast the rest, and treat the cast as the gradual/dynamic residue rather than a second ad-hoc assert language.

## Key ideas

- Object language is the simply typed λ-calculus with arbitrary refinements of base types — checking is therefore undecidable in general.
- The compiler attempts static discharge; leftover implications become cast insertions rather than hard errors.
- Casts are given a semantics so well-typed programs do not go wrong: they either compute or raise a cast failure at a specified blame site.
- Unifies “soft typing” and later gradual-typing intuitions for *refinement* specs, not just simple types.
- POPL 2006, pp. 245–256; author preprint via UC eScholarship.

## Caveats

## Links

- DOI: [10.1145/1111037.1111059](https://doi.org/10.1145/1111037.1111059)
- eScholarship: https://escholarship.org/uc/item/0j63v3dn
