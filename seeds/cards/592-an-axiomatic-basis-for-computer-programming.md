---
title: "An Axiomatic Basis for Computer Programming"
authors:
  - "C. A. R. Hoare"
year: 1969
venue: "Communications of the ACM"
arxiv: null
doi: "10.1145/363235.363259"
source: "https://doi.org/10.1145/363235.363259"
topics:
  - hoare-logic
  - axiomatic-semantics
  - verification
seed_rank: 592
seed_batch: "foundations-greats-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 10
lineage: foundations-of-computing
cites:
  - title: "Assigning Meanings to Programs"
    url: "https://people.eecs.berkeley.edu/~necula/Papers/FloydMeaning.pdf"
    year: 1967
    arxiv: null
    doi: null
  - title: "Proof of Correctness of Data Representations"
    url: "https://doi.org/10.1007/BF00289507"
    year: 1972
    arxiv: null
    doi: "10.1007/BF00289507"
  - title: "Procedures and Parameters: An Axiomatic Approach"
    url: "https://doi.org/10.1007/BFb0059696"
    year: 1971
    arxiv: null
    doi: "10.1007/BFb0059696"
see:
  - "626-assigning-meanings-to-programs"
  - "593-proof-of-correctness-of-data-representations"
  - "594-procedures-and-parameters-an-axiomatic-approach"
---

# An Axiomatic Basis for Computer Programming

## One-sentence takeaway

Hoare gives programming an axiom system: `{P} S {Q}` means if `P` holds and `S` terminates, then `Q` holds, with rules for assignment, sequence, and `while`.

## Why it matters here

Verification of engine invariants and agent protocols is still Hoare logic (or a descendant such as separation logic). This 1969 CACM paper is the root.

## Key ideas

- The axiom of assignment: `{P[e/x]} x := e {P}`.
- Consequence, composition, and iteration rules let proofs follow program structure.
- The framing is partial correctness; termination is a separate argument.
- Floyd's 1967 flowchart assertions are the acknowledged predecessor; Hoare axiomatizes an Algol-like text.
- Later papers add procedures (1971) and data representations (1972); Reynolds 2002 lifts the same triples to the heap.

## Caveats

## Links

- DOI: [10.1145/363235.363259](https://doi.org/10.1145/363235.363259)
- URL: https://doi.org/10.1145/363235.363259
