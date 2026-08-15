---
title: "Safe & Efficient Gradual Typing for TypeScript"
authors:
- Aseem Rastogi
- Nikhil Swamy
- Cédric Fournet
- Gavin Bierman
- Panagiotis Vekris
year: 2015
venue: POPL
arxiv: null
doi: 10.1145/2676726.2676971
source: "https://doi.org/10.1145/2676726.2676971"
topics:
- typescript
- gradual-typing
- soundness
- type-safety
seed_rank: 898
seed_batch: to1000-db-types-2026-08-13
reviewed: 2026-08-13
pool: languages
relevance_score: 9
lineage: type-safety
cites:
  - title: "Understanding TypeScript"
    url: "https://doi.org/10.1007/978-3-662-44202-9_11"
    year: 2014
    arxiv: null
    doi: "10.1007/978-3-662-44202-9_11"
see:
  - "899-understanding-typescript"
  - "900-typescript-design-goals"
---

# Safe & Efficient Gradual Typing for TypeScript

## One-sentence takeaway

Safe TypeScript is a sound gradual dialect of early TypeScript: a stricter static checker plus residual runtime evidence compiled to ordinary JavaScript, with ~15% overhead when bootstrapping its own ~90 kLOC compiler.

## Why it matters here

Concrete soundness retrofit for the language Anoptic/Broadside front-ends actually speak — a foil to production TypeScript's documented unsoundness (cards 899–900).

## Key ideas

- Differential subtyping computes the *minimum* runtime type information an object must carry when it crosses a typed/untyped boundary.
- Erasure modality marks type structure that is needed only statically and can be dropped at run time.
- Supports a large TypeScript 0.9.5 fragment: classes, inheritance, overloading, generics, arrays, maps.
- Integrated into the TS 0.9.5 compiler; evaluation on >100 kLOC found real type-safety bugs in existing code.
- POPL 2015, DOI 10.1145/2676726.2676971. Also MSR-TR-2014-99. No arXiv posting.

## Caveats

## Links

- DOI: [10.1145/2676726.2676971](https://doi.org/10.1145/2676726.2676971)
- Author PDF: https://goto.ucsd.edu/~pvekris/docs/safets.pdf
- MSR page: https://www.microsoft.com/en-us/research/publication/safe-efficient-gradual-typing-typescript/
