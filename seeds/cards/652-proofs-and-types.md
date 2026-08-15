---
title: "Proofs and Types"
authors:
  - "Jean-Yves Girard"
  - "Yves Lafont"
  - "Paul Taylor"
year: 1989
venue: "Cambridge University Press (Cambridge Tracts in Theoretical Computer Science 7)"
arxiv: null
doi: null
source: "https://www.paultaylor.eu/stable/Proofs%2BTypes.html"
topics:
  - proofs-and-types
  - girard
  - system-f
  - linear-logic
  - textbook
seed_rank: 652
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
  - title: "Une extension de l'interprétation de Gödel à l'analyse, et son application à l'élimination des coupures dans l'analyse et la théorie des types"
    url: "https://doi.org/10.1016/S0049-237X(08)70843-7"
    year: 1971
    arxiv: null
    doi: "10.1016/S0049-237X(08)70843-7"
  - title: "The Formulae-as-Types Notion of Construction"
    url: "https://www.cs.cmu.edu/~crary/819-f09/Howard80.pdf"
    year: 1980
    arxiv: null
    doi: null
  - title: "Linear Logic"
    url: "https://doi.org/10.1016/0304-3975(87)90045-4"
    year: 1987
    arxiv: null
    doi: "10.1016/0304-3975(87)90045-4"
see:
  - "639-the-system-f-of-variable-types-fifteen-years-later"
  - "638-girard-system-f-une-extension-de-linterpretation-de-godel"
  - "647-the-formulae-as-types-notion-of-construction"
  - "040-linear-logic"
---

# Proofs and Types

## One-sentence takeaway

Girard's 1986–87 Paris VII course, translated by Taylor with Lafont, is the short English book that treats natural deduction, sequent calculus, System F, and coherence-space semantics as one subject.

## Why it matters here

When ano wants parametric polymorphism or a linear resource story for GPU buffers, this is the readable source for System F and the first linear-logic appendix rather than another TAPL chapter.

## Key ideas

- Natural deduction and sequent calculus are developed side by side; cut-elimination and strong normalisation are proved, not assumed.
- Curry–Howard is the organising principle: a proof is a program, normalisation is computation, and System F is both a logic and a typed language.
- Gödel's T and Girard's F get denotational chapters in coherence spaces; sums are the hard case.
- Lafont's appendix is a first-pass "what is linear logic?"; Taylor adds a semantics-of-F appendix. CUP CTTCS 7, 1989, reprinted 1990; now free from Taylor's site.

## Caveats

## Links

- Author page / PDF: https://www.paultaylor.eu/stable/Proofs%2BTypes.html
