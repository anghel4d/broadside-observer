---
title: "Proof of Correctness of Data Representations"
authors:
  - "C. A. R. Hoare"
year: 1972
venue: "Acta Informatica"
arxiv: null
doi: "10.1007/BF00289507"
source: "https://doi.org/10.1007/BF00289507"
topics:
  - data-refinement
  - hoare
  - abstraction
seed_rank: 593
seed_batch: "foundations-greats-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 9
lineage: foundations-of-computing
cites:
  - title: "An Axiomatic Basis for Computer Programming"
    url: "https://doi.org/10.1145/363235.363259"
    year: 1969
    arxiv: null
    doi: "10.1145/363235.363259"
  - title: "Procedures and Parameters: An Axiomatic Approach"
    url: "https://doi.org/10.1007/BFb0059696"
    year: 1971
    arxiv: null
    doi: "10.1007/BFb0059696"
see:
  - "592-an-axiomatic-basis-for-computer-programming"
  - "594-procedures-and-parameters-an-axiomatic-approach"
---

# Proof of Correctness of Data Representations

## One-sentence takeaway

Hoare shows how to prove a concrete representation correct against an abstract specification via an abstraction function and a representation invariant.

## Why it matters here

ECS components, spatial indexes, and ano values are representations of abstract objects. This 1972 *Acta Informatica* paper is the refinement method.

## Key ideas

- An abstraction function maps a concrete state (that satisfies the invariant) to the abstract value it represents.
- Each concrete operation must simulate the corresponding abstract operation under that function.
- The representation invariant is preserved by every operation and is assumed by every proof obligation.
- Clients reason only in the abstract theory; the representation can change without touching their proofs.
- Founding paper of data refinement / ADT correctness, sitting between 1969 Hoare logic and later module systems.

## Caveats

## Links

- DOI: [10.1007/BF00289507](https://doi.org/10.1007/BF00289507)
- URL: https://doi.org/10.1007/BF00289507
