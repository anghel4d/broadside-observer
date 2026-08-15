---
title: "Procedures and Parameters: An Axiomatic Approach"
authors:
  - "C. A. R. Hoare"
year: 1971
venue: "In Symposium on Semantics of Algorithmic Languages (Engeler)"
arxiv: null
doi: "10.1007/BFb0059696"
source: "https://doi.org/10.1007/BFb0059696"
topics:
  - hoare-logic
  - procedures
  - parameters
seed_rank: 594
seed_batch: "foundations-greats-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 8
lineage: foundations-of-computing
cites:
  - title: "An Axiomatic Basis for Computer Programming"
    url: "https://doi.org/10.1145/363235.363259"
    year: 1969
    arxiv: null
    doi: "10.1145/363235.363259"
  - title: "Proof of Correctness of Data Representations"
    url: "https://doi.org/10.1007/BF00289507"
    year: 1972
    arxiv: null
    doi: "10.1007/BF00289507"
see:
  - "592-an-axiomatic-basis-for-computer-programming"
  - "593-proof-of-correctness-of-data-representations"
---

# Procedures and Parameters: An Axiomatic Approach

## One-sentence takeaway

Hoare extends Hoare logic with proof rules for procedure declaration and call, including the aliasing traps of parameter passing.

## Why it matters here

Real ano and engine code is not straight-line: calls, `var` parameters, and shared locations break the assignment axiom unless the rules say how.

## Key ideas

- A procedure has a specification that callers use without opening the body.
- Call-by-value, call-by-name, and call-by-reference need different axioms; aliasing can invalidate the assignment axiom.
- Recursion is handled by assuming the specification while proving the body.
- Printed in Engeler (ed.), *Symposium on Semantics of Algorithmic Languages*, Springer LNCS / Lecture Notes in Mathematics 188, 1971.
- Together with the 1972 data-representation paper, this is how Hoare logic meets ALGOL-scale languages.

## Caveats

## Links

- DOI: [10.1007/BFb0059696](https://doi.org/10.1007/BFb0059696)
- URL: https://doi.org/10.1007/BFb0059696
