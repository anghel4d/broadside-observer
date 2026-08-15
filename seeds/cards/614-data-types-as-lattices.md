---
title: "Data Types as Lattices"
authors:
  - "Dana Scott"
year: 1976
venue: "SIAM Journal on Computing"
arxiv: null
doi: "10.1137/0205040"
source: "https://doi.org/10.1137/0205040"
topics:
  - domain-theory
  - scott
  - data-types
seed_rank: 614
seed_batch: "foundations-greats-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 9
lineage: foundations-of-computing
cites:
  - title: "Outline of a Mathematical Theory of Computation"
    url: "https://www.cs.ox.ac.uk/files/3229/PRG02.pdf"
    year: 1970
    arxiv: null
    doi: null
  - title: "Toward a Mathematical Semantics for Computer Languages"
    url: "https://www.cs.ox.ac.uk/files/3228/PRG06.pdf"
    year: 1971
    arxiv: null
    doi: null
  - title: "The Calculi of Lambda-Conversion"
    url: "https://press.princeton.edu/books/paperback/9780691083940/the-calculi-of-lambda-conversion"
    year: 1941
    arxiv: null
    doi: null
see:
  - "613-outline-of-a-mathematical-theory-of-computation"
  - "612-toward-a-mathematical-semantics-for-computer-languages"
  - "511-the-calculi-of-lambda-conversion"
---

# Data Types as Lattices

## One-sentence takeaway

Scott solves domain equations D ≅ [D → D] (and richer type constructors) so recursive and function types exist as lattices, giving a model of the untyped λ-calculus.

## Why it matters here

Mathematical home of recursive types. When ano talks about arrays-of-arrays, closures, or a type that mentions itself, this is the existence proof that the equation has a solution.

## Key ideas

- Inverse-limit construction of a domain D with D ≅ [D → D], Scott's D_∞ model.
- Lattice / continuous-lattice structure on data types; function space is itself a lattice.
- Recursive type specifications are domain equations, not just syntactic fold/unfold.
- Retracts and projections let one carve smaller types out of a universal domain.

## Caveats

## Links

- DOI: [10.1137/0205040](https://doi.org/10.1137/0205040)
