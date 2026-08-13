---
title: "Local Type Inference"
authors:
  - "Benjamin C. Pierce"
  - "David N. Turner"
year: 2000
venue: "ACM TOPLAS"
arxiv: null
doi: "10.1145/345099.345100"
source: "https://doi.org/10.1145/345099.345100"
topics:
  - local-type-inference
  - bidirectional
  - type-safety
seed_rank: 1335
seed_batch: "to1000-types-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 9
lineage: type-safety
cites:
  - title: "The Local Type Inference Engine of Scala"
    url: "https://scala-lang.org/files/archive/spec/2.13/06-expressions.html"
    year: 2006
    arxiv: null
    doi: null
    card: "1422-the-local-type-inference-engine-of-scala"
---

# Local Type Inference

## One-sentence takeaway

Local type inference synthesizes and checks types without whole-program HM unification.

## Why it matters here

Basis for Scala/C#/many OO inference designs and bidirectional checking styles.

## Key ideas

- Synthesis vs checking modes.
- Partial type information propagation.
- Predictable inference without global solving.

## Caveats

- Seed card from type-safety shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.
- Verify primary PDF/DOI before citation; some industrial docs lack stable DOIs.

## Links

- DOI: [10.1145/345099.345100](https://doi.org/10.1145/345099.345100)
- URL: https://doi.org/10.1145/345099.345100
