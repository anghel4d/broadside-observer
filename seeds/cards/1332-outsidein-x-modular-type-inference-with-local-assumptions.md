---
title: "OutsideIn(X): Modular Type Inference with Local Assumptions"
authors:
  - "Dimitrios Vytiniotis"
  - "Simon Peyton Jones"
  - "Tom Schrijvers"
  - "Martin Sulzmann"
year: 2011
venue: "Journal of Functional Programming"
arxiv: null
doi: "10.1017/S0956796811000098"
source: "https://doi.org/10.1017/S0956796811000098"
topics:
  - gadts
  - type-inference
  - type-safety
seed_rank: 1332
seed_batch: "to1000-types-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 9
lineage: type-safety
cites:
  - title: "Dependent Types in Haskell: Theory and Practice"
    url: "https://arxiv.org/abs/1610.07978"
    year: 2016
    arxiv: "1610.07978"
    doi: null
    card: "1331-dependent-types-in-haskell-theory-and-practice"
  - title: "Simple Unification-Based Type Inference for GADTs"
    url: "https://doi.org/10.1145/1159803.1159811"
    year: 2006
    arxiv: null
    doi: "10.1145/1159803.1159811"
    card: "1333-simple-unification-based-type-inference-for-gadts"
  - title: "Guarded Recursive Datatype Constructors"
    url: "https://doi.org/10.1145/604131.604150"
    year: 2003
    arxiv: null
    doi: "10.1145/604131.604150"
    card: "1334-guarded-recursive-datatype-constructors"
---

# OutsideIn(X): Modular Type Inference with Local Assumptions

## One-sentence takeaway

OutsideIn(X) is GHC's modular inference engine for GADTs and type-family assumptions.

## Why it matters here

Inference backbone of practical GADTs—essential for modern Haskell types.

## Key ideas

- Local assumptions from matches.
- Parameterized constraint solver X.
- Avoiding guessing in inference.

## Caveats

- Seed card from type-safety shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.
- Verify primary PDF/DOI before citation; some industrial docs lack stable DOIs.

## Links

- DOI: [10.1017/S0956796811000098](https://doi.org/10.1017/S0956796811000098)
- URL: https://doi.org/10.1017/S0956796811000098
