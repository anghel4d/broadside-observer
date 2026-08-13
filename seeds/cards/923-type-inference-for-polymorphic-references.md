---
title: "Type Inference for Polymorphic References"
authors:
  - "Mads Tofte"
year: 1990
venue: "Information and Computation"
arxiv: null
doi: "10.1016/0890-5401(90)90018-C"
source: "https://doi.org/10.1016/0890-5401(90)90018-C"
topics:
  - references
  - value-restriction
  - tofte
  - ml
  - type-inference
seed_rank: 923
seed_batch: "perfects-pl-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 10
lineage: programming-language-foundations
cites:
  - title: "Principal Type-Schemes for Functional Programs"
    url: "https://doi.org/10.1145/582153.582176"
    year: 1982
    arxiv: null
    doi: "10.1145/582153.582176"
    card: "891-principal-type-schemes-for-functional-programs"
  - title: "A Theory of Type Polymorphism in Programming"
    url: "https://doi.org/10.1016/0022-0000(78)90014-4"
    year: 1978
    arxiv: null
    doi: "10.1016/0022-0000(78)90014-4"
    card: "880-a-theory-of-type-polymorphism-in-programming"
  - title: "The Definition of Standard ML (Revised)"
    url: "https://mitpress.mit.edu/9780262631815/the-definition-of-standard-ml/"
    year: 1997
    arxiv: null
    doi: null
    card: "154-the-definition-of-standard-ml-revised"
  - title: "A Syntactic Approach to Type Soundness"
    url: "https://doi.org/10.1006/inco.1994.1093"
    year: 1994
    arxiv: null
    doi: "10.1006/inco.1994.1093"
    card: "911-a-syntactic-approach-to-type-soundness"
---

# Type Inference for Polymorphic References

## One-sentence takeaway

Settles how polymorphic type inference interacts with mutable references (leading toward the value restriction).

## Why it matters here

The refs+polymorphism classic — why ML's value restriction exists and why ano mutable cells need care.

## Key ideas

- Unsoundness of naive polymorphic generalization over refs.
- Imperative type discipline for ML.
- Leads to value restriction in SML'97 / Definition revised.
- Essential companion to Damas–Milner and SML Definition.

## Caveats

- Seed card from the wisdom-of-the-perfects PL haul; promote to a full `summaries/` digest before relying on fine-grained claims.
- Verify primary PDF/DOI pagination against your preferred edition before formal citation.

## Links

- DOI: [10.1016/0890-5401(90)90018-C](https://doi.org/10.1016/0890-5401(90)90018-C)
- URL: https://doi.org/10.1016/0890-5401(90)90018-C
