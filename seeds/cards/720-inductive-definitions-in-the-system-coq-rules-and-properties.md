---
title: "Inductive Definitions in the System Coq: Rules and Properties"
authors:
  - "Christine Paulin-Mohring"
year: 1993
venue: "TLCA / LNCS"
arxiv: null
doi: "10.1007/BFb0037116"
source: "https://doi.org/10.1007/BFb0037116"
topics:
  - coq
  - inductive-types
  - paulin-mohring
  - dependent-types
seed_rank: 720
seed_batch: "perfects-pl-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 10
lineage: programming-language-foundations
cites:
  - title: "The Calculus of Constructions"
    url: "https://doi.org/10.1016/0890-5401(88)90005-3"
    year: 1988
    arxiv: null
    doi: "10.1016/0890-5401(88)90005-3"
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
  - "650-the-calculus-of-constructions"
  - "648-an-intuitionistic-theory-of-types-predicative-part"
  - "647-the-formulae-as-types-notion-of-construction"
---

# Inductive Definitions in the System Coq: Rules and Properties

## One-sentence takeaway

Coq gains datatypes and elimination principles by adding strictly positive inductive families to the Calculus of Constructions, with checked rules that preserve the type theory’s metatheory.

## Why it matters here

CompCert, any future verified ano/SPIR-V pass, and Broadside’s formal notes all program in CIC — inductive types plus dependent elimination. This is the paper that turned Coquand–Huet CoC into a language you can write `Inductive` in.

## Key ideas

- Inductive families are declared by constructors subject to a strict-positivity condition so the recursor is well-founded.
- The paper gives formation, introduction, elimination, and computation rules, plus the metatheoretic properties needed to trust the extension.
- This is the Calculus of Inductive Constructions (CIC) as used in Coq, not a side library of Church-encoded data.
- Martin-Löf type theory and Howard’s formulae-as-types reading are the cited ancestry; CoC is the host calculus.
- TLCA 1993 / LNCS 664.

## Caveats

## Links

- DOI: [10.1007/BFb0037116](https://doi.org/10.1007/BFb0037116)
- Springer: https://link.springer.com/chapter/10.1007/BFb0037116
