---
title: "An Intuitionistic Theory of Types: Predicative Part"
authors:
  - "Per Martin-Löf"
year: 1975
venue: "Logic Colloquium '73 (North-Holland)"
arxiv: null
doi: "10.1016/S0049-237X(08)71945-1"
source: "https://doi.org/10.1016/S0049-237X(08)71945-1"
topics:
  - martin-lof
  - type-theory
  - dependent-types
  - intuitionistic
seed_rank: 648
seed_batch: "perfects-pl-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 10
lineage: programming-language-foundations
cites:
  - title: "The Formulae-as-Types Notion of Construction"
    url: "https://www.cs.cmu.edu/~crary/819-f09/Howard80.pdf"
    year: 1980
    arxiv: null
    doi: null
see:
  - "647-the-formulae-as-types-notion-of-construction"
---

# An Intuitionistic Theory of Types: Predicative Part

## One-sentence takeaway

Martin-Löf lays out predicative intuitionistic type theory with dependent types (Π, Σ, identity, universes) as a foundation for constructive mathematics.

## Why it matters here

Root MLTT paper for dependent types — conceptual parent of Agda/Epigram-style thinking and of LF’s dependent Π. The type theory Broadside keeps next to ano starts here, not in Coq’s impredicative Prop.

## Key ideas

- Dependent function (Π) and pair (Σ) types; a type may mention a value.
- Predicative universe hierarchy, in contrast to Girard’s impredicative System F.
- Propositions-as-types is now a full type theory, not just a slogan about implication.
- *Logic Colloquium ’73*, Studies in Logic 80, North-Holland, 1975. Later programming-in-MLTT books and Nuprl/Agda lineages start from this core.

## Caveats

## Links

- DOI: [10.1016/S0049-237X(08)71945-1](https://doi.org/10.1016/S0049-237X(08)71945-1)
