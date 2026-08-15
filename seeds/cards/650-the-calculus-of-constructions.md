---
title: "The Calculus of Constructions"
authors:
  - "Thierry Coquand"
  - "Gérard Huet"
year: 1988
venue: "Information and Computation"
arxiv: null
doi: "10.1016/0890-5401(88)90005-3"
source: "https://doi.org/10.1016/0890-5401(88)90005-3"
topics:
  - coc
  - coquand
  - huet
  - dependent-types
  - coq
seed_rank: 650
seed_batch: "perfects-pl-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 10
lineage: programming-language-foundations
cites:
  - title: "The System F of Variable Types, Fifteen Years Later"
    url: "https://doi.org/10.1016/0304-3975(86)90044-7"
    year: 1986
    arxiv: null
    doi: "10.1016/0304-3975(86)90044-7"
  - title: "An Intuitionistic Theory of Types: Predicative Part"
    url: "https://doi.org/10.1016/S0049-237X(08)71945-1"
    year: 1975
    arxiv: null
    doi: "10.1016/S0049-237X(08)71945-1"
  - title: "The Formulae-as-Types Notion of Construction"
    url: "https://www.cs.cmu.edu/~crary/819-f09/Howard80.pdf"
    year: 1980
    arxiv: null
    doi: null
see:
  - "639-the-system-f-of-variable-types-fifteen-years-later"
  - "648-an-intuitionistic-theory-of-types-predicative-part"
  - "647-the-formulae-as-types-notion-of-construction"
---

# The Calculus of Constructions

## One-sentence takeaway

Coquand and Huet define the Calculus of Constructions: a higher-order dependent type theory with impredicative Prop that became the core of Coq.

## Why it matters here

CoC is the classic dependent-type calculus bridging System F and Martin-Löf — essential proof-assistant literacy, and the system one means when saying “Coq’s kernel is a PTS / λC”.

## Key ideas

- Dependent function spaces plus an impredicative universe of propositions (Prop).
- Higher-order logic is embedded in a typed λ-calculus; proofs are terms.
- Strong normalization is proved, so type-checking is decidable and the logic is consistent (relative to the usual caveats).
- *Information and Computation* 76 (1988), pp. 95–120; implementation substrate for early Coq. Sits at the λC corner of Barendregt’s lambda cube.

## Caveats

## Links

- DOI: [10.1016/0890-5401(88)90005-3](https://doi.org/10.1016/0890-5401(88)90005-3)
- Open PDF: https://www.asc.ohio-state.edu/pollard.4/type/readings/coc88.pdf
