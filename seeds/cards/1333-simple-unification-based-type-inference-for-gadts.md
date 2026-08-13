---
title: "Simple Unification-Based Type Inference for GADTs"
authors:
  - "Simon Peyton Jones"
  - "Dimitrios Vytiniotis"
  - "Stephanie Weirich"
  - "Geoffrey Washburn"
year: 2006
venue: "ICFP"
arxiv: null
doi: "10.1145/1159803.1159811"
source: "https://doi.org/10.1145/1159803.1159811"
topics:
  - gadts
  - type-inference
  - type-safety
seed_rank: 1333
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
  - title: "OutsideIn(X): Modular Type Inference with Local Assumptions"
    url: "https://doi.org/10.1017/S0956796811000098"
    year: 2011
    arxiv: null
    doi: "10.1017/S0956796811000098"
    card: "1332-outsidein-x-modular-type-inference-with-local-assumptions"
  - title: "Guarded Recursive Datatype Constructors"
    url: "https://doi.org/10.1145/604131.604150"
    year: 2003
    arxiv: null
    doi: "10.1145/604131.604150"
    card: "1334-guarded-recursive-datatype-constructors"
---

# Simple Unification-Based Type Inference for GADTs

## One-sentence takeaway

Practical GADT inference via wobbly types for GHC.

## Why it matters here

Made GADTs usable in Haskell—gateway to dependent-ish programming.

## Key ideas

- Wobbly types.
- Unification with local equalities.
- Engineering GADTs into production.

## Caveats

- Seed card from type-safety shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.
- Verify primary PDF/DOI before citation; some industrial docs lack stable DOIs.

## Links

- DOI: [10.1145/1159803.1159811](https://doi.org/10.1145/1159803.1159811)
- URL: https://doi.org/10.1145/1159803.1159811
