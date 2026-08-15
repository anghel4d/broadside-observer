---
title: "The Principal Type-Scheme of an Object in Combinatory Logic"
authors:
  - "J. Roger Hindley"
year: 1969
venue: "Transactions of the American Mathematical Society"
arxiv: null
doi: "10.1090/S0002-9947-1969-0253905-6"
source: "https://doi.org/10.1090/S0002-9947-1969-0253905-6"
topics:
  - hindley-milner
  - type-inference
  - combinatory-logic
seed_rank: 628
seed_batch: "foundations-greats-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 9
lineage: foundations-of-computing
cites:
  - title: "Functionality in Combinatory Logic"
    url: "https://doi.org/10.1073/pnas.20.11.584"
    year: 1934
    arxiv: null
    doi: "10.1073/pnas.20.11.584"
  - title: "A Formulation of the Simple Theory of Types"
    url: "https://doi.org/10.2307/2266170"
    year: 1940
    arxiv: null
    doi: "10.2307/2266170"
  - title: "Über die Bausteine der mathematischen Logik"
    url: "https://doi.org/10.1007/BF01458017"
    year: 1924
    arxiv: null
    doi: "10.1007/BF01458017"
see:
  - "498-functionality-in-combinatory-logic"
  - "510-a-formulation-of-the-simple-theory-of-types"
  - "496-uber-die-bausteine-der-mathematischen-logik"
---

# The Principal Type-Scheme of an Object in Combinatory Logic

## One-sentence takeaway

Hindley proves that a combinatory term, if typable at all, has a principal type-scheme from which every other type is a substitution instance.

## Why it matters here

Root of Hindley–Milner inference. Ano’s hoped-for inferred polymorphism, and every ML/Haskell compiler, is this theorem plus Milner’s let-generalization.

## Key ideas

- Working in Curry-style combinatory logic (not Church-typed λ), types are assigned after the term is written.
- A principal type-scheme is most general: any other derivable type is a substitution instance of it.
- The existence proof is already algorithmic in spirit (unification / most general unifier).
- *Trans. AMS* 146 (1969). The AMS DOI is 10.1090/S0002-9947-1969-0253909-0 (MR 0253909).

## Caveats

## Links

- DOI: [10.1090/S0002-9947-1969-0253905-6](https://doi.org/10.1090/S0002-9947-1969-0253905-6)
