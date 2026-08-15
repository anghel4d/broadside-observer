---
title: "Implementing Mathematics with the Nuprl Proof Development System"
authors:
  - "Robert L. Constable"
  - "Stuart F. Allen"
  - "H. M. Bromley"
  - "Rance Cleaveland"
  - "J. F. Cremer"
  - "Robert Harper"
  - "Douglas J. Howe"
  - "Todd B. Knoblock"
  - "Nax P. Mendler"
  - "Prakash Panangaden"
  - "James T. Sasaki"
  - "Scott F. Smith"
year: 1986
venue: "Prentice-Hall"
arxiv: null
doi: null
source: "https://nuprl-web.cs.cornell.edu/book/"
topics:
  - nuprl
  - proof-assistants
  - type-theory
  - constable
seed_rank: 654
seed_batch: "perfects-pl-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 10
lineage: programming-language-foundations
cites:
  - title: "An Intuitionistic Theory of Types: Predicative Part"
    url: "https://doi.org/10.1016/S0049-237X(08)71945-1"
    year: 1975
    arxiv: null
    doi: "10.1016/S0049-237X(08)71945-1"
  - title: "Constructive Mathematics and Computer Programming"
    url: "https://doi.org/10.1016/S0049-237X(09)70189-2"
    year: 1982
    arxiv: null
    doi: "10.1016/S0049-237X(09)70189-2"
  - title: "The Formulae-as-Types Notion of Construction"
    url: "https://www.cs.cmu.edu/~crary/819-f09/Howard80.pdf"
    year: 1980
    arxiv: null
    doi: null
  - title: "The Mathematical Language AUTOMATH, Its Usage, and Some of Its Extensions"
    url: "https://doi.org/10.1007/BFb0060623"
    year: 1970
    arxiv: null
    doi: "10.1007/BFb0060623"
see:
  - "648-an-intuitionistic-theory-of-types-predicative-part"
  - "649-constructive-mathematics-and-computer-programming"
  - "647-the-formulae-as-types-notion-of-construction"
  - "655-the-mathematical-language-automath-its-usage-and-some-of-its"
---

# Implementing Mathematics with the Nuprl Proof Development System

## One-sentence takeaway

The PRL group's 1986 monograph is the implemented computational type theory: refinement proofs in a structured editor, tactics in ML, and programs extracted from constructive derivations.

## Why it matters here

If Anoptic ever checks an ano kernel or a GRID COMMAND planner against a type theory, Nuprl is the US twin of early Coq — extraction and tactic metalanguage, not just a paper calculus.

## Key ideas

- Computational type theory extending Martin-Löf with a refinement editor, a definitional vernacular, and a library of formal mathematics.
- Proofs are trees of refinement steps; ML tactics (including an auto-tactic) manipulate terms, sequents, and rules.
- Evaluation extracts computational content from a finished proof; integers, lists, quotients, sets, and universes are primitive.
- Written 1985, published Prentice-Hall 1986; Cornell still hosts the full text. The live Nuprl library has moved on — use the book for method, not today's lemmas.

## Caveats

## Links

- Cornell book: https://nuprl-web.cs.cornell.edu/book/
