---
title: "The Formulae-as-Types Notion of Construction"
authors:
  - "William A. Howard"
year: 1980
venue: "To H.B. Curry: Essays on Combinatory Logic, Lambda Calculus and Formalism (written 1969)"
arxiv: null
doi: null
source: "https://www.cs.cmu.edu/~crary/819-f09/Howard80.pdf"
topics:
  - curry-howard
  - howard
  - propositions-as-types
  - type-theory
seed_rank: 647
seed_batch: "perfects-pl-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 10
lineage: programming-language-foundations
cites:
  - title: "Investigations into Logical Deduction"
    url: "https://doi.org/10.1007/BF01201353"
    year: 1935
    arxiv: null
    doi: "10.1007/BF01201353"
see:
  - "632-investigations-into-logical-deduction"
---

# The Formulae-as-Types Notion of Construction

## One-sentence takeaway

Howard makes explicit that a natural-deduction proof *is* a typed λ-term: formulae are types, and constructions (proofs) are programs.

## Why it matters here

The Howard half of Curry–Howard — required reading for dependent types, proof assistants, and any typed IR that wants extraction. Ano-as-proofs and GRID COMMAND specs-as-types sit on this correspondence.

## Key ideas

- Implication introduction/elimination = λ-abstraction/application; conjunction = pairing; etc.
- Written 1969, circulated privately, published 1980 in the Curry festschrift (*To H. B. Curry*, Seldin & Hindley, Academic Press).
- Directly licenses Martin-Löf’s identification of propositions with types in the 1970s papers.
- CMU hosts the usual scan of the 1980 text.

## Caveats

## Links

- PDF: https://www.cs.cmu.edu/~crary/819-f09/Howard80.pdf
