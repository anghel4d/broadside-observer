---
title: Language-Based Information-Flow Security
authors:
- Andrei Sabelfeld
- Andrew C. Myers
year: 2003
venue: IEEE Journal on Selected Areas in Communications
arxiv: null
doi: 10.1109/JSAC.2002.806121
source: "https://doi.org/10.1109/JSAC.2002.806121"
topics:
- information-flow
- noninterference
- type-safety
seed_rank: 881
seed_batch: to1000-db-types-2026-08-13
reviewed: 2026-08-13
pool: languages
relevance_score: 9
lineage: type-safety
cites: []
---

# Language-Based Information-Flow Security

## One-sentence takeaway

This survey fixes noninterference as the semantic goal of confidentiality/integrity and organizes a decade of security type systems that enforce it end-to-end inside the language, not at the perimeter.

## Why it matters here

GRID COMMAND agents and Broadside tools move untrusted input next to privileged actions. Sabelfeld–Myers is the map of type-based IFC (Jif, Flow Caml, and later Flow/Gradual IFC) rather than yet another access-control list.

## Key ideas

- Noninterference: public outputs must be independent of secret inputs (and dually for integrity). Implicit flows through control and timing are in scope, not just assignment.
- Security type systems (and some dynamic monitors) are surveyed as the enforcement mechanism; lattice labels on types replace ad-hoc sanitizer placement.
- End-to-end is the point: a well-typed program should not leak even if the attacker picks the public context.
- Covers declassification, integrity, and the gap between possibilistic and probabilistic noninterference.
- IEEE JSAC 21(1), 2003. Survey, not a mechanized system — follow the citations for Jif / Flow Caml / later Coq developments.

## Caveats

## Links

- DOI: [10.1109/JSAC.2002.806121](https://doi.org/10.1109/JSAC.2002.806121)
