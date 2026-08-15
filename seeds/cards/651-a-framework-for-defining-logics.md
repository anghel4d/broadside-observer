---
title: "A Framework for Defining Logics"
authors:
  - "Robert Harper"
  - "Furio Honsell"
  - "Gordon Plotkin"
year: 1993
venue: "Journal of the ACM"
arxiv: null
doi: "10.1145/138027.138060"
source: "https://doi.org/10.1145/138027.138060"
topics:
  - logical-framework
  - lf
  - dependent-types
  - harper
  - plotkin
seed_rank: 651
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
  - title: "The Calculus of Constructions"
    url: "https://doi.org/10.1016/0890-5401(88)90005-3"
    year: 1988
    arxiv: null
    doi: "10.1016/0890-5401(88)90005-3"
see:
  - "648-an-intuitionistic-theory-of-types-predicative-part"
  - "647-the-formulae-as-types-notion-of-construction"
  - "655-the-mathematical-language-automath-its-usage-and-some-of-its"
  - "650-the-calculus-of-constructions"
---

# A Framework for Defining Logics

## One-sentence takeaway

Edinburgh LF is a dependently typed λ-calculus whose judgments-as-types principle turns an object logic's syntax, rules, and proofs into a signature, so proof checking is ordinary LF type checking.

## Why it matters here

Ano and any GRID COMMAND planner that wants a machine-checked IR need a metalanguage for judgments, not another ad-hoc AST validator; LF is the citation for encoding object logics the way Harper later teaches in PFPL.

## Key ideas

- Three levels: kinds classify families, families classify objects; the dependent function type `Πx:A.B` is the only binder, with `A → B` when `x` is unused.
- Judgments-as-types: a judgment becomes a type family, a derivation becomes a canonical object of that type, and hypothetical/schematic judgments are ordinary LF functions.
- Higher-order abstract syntax: object binding and substitution are inherited from LF, so encodings do not reimplement α-conversion.
- Adequacy: canonical LF terms in a signature must be in bijection with object-logic derivations; the 1993 JACM paper is the journal form of the 1987 LICS announcement.

## Caveats

## Links

- DOI: [10.1145/138027.138060](https://doi.org/10.1145/138027.138060)
