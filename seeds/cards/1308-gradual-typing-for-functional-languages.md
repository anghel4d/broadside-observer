---
title: "Gradual Typing for Functional Languages"
authors:
  - "Jeremy G. Siek"
  - "Walid Taha"
year: 2006
venue: "Scheme and Functional Programming Workshop"
arxiv: null
doi: null
source: "https://scheme2006.cs.uchicago.edu/13-siek.pdf"
topics:
  - gradual-typing
  - siek-taha
  - type-safety
seed_rank: 1308
seed_batch: "to1000-types-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 9
lineage: type-safety
cites:
  - title: "Gradual Typing for Objects"
    url: "https://doi.org/10.1007/978-3-540-73589-2_2"
    year: 2007
    arxiv: null
    doi: "10.1007/978-3-540-73589-2_2"
    card: "1309-gradual-typing-for-objects"
  - title: "Refined Criteria for Gradual Typing"
    url: "https://doi.org/10.4230/LIPIcs.SNAPL.2015.274"
    year: 2015
    arxiv: null
    doi: "10.4230/LIPIcs.SNAPL.2015.274"
    card: "1312-refined-criteria-for-gradual-typing"
  - title: "Abstracting Gradual Typing"
    url: "https://doi.org/10.1145/2837614.2837670"
    year: 2016
    arxiv: null
    doi: "10.1145/2837614.2837670"
    card: "1313-abstracting-gradual-typing"
---

# Gradual Typing for Functional Languages

## One-sentence takeaway

Defines gradual typing: mix static and dynamic checking via consistent types and casts.

## Why it matters here

Root paper for gradual typing—parent of Typed Racket, Flow, and sound optional-typing designs.

## Key ideas

- Partial types with consistency rather than classical subtyping.
- Implicit cast insertion at boundaries.
- Foundation for the gradual guarantee.

## Caveats

- Seed card from type-safety shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.
- Verify primary PDF/DOI before citation; some industrial docs lack stable DOIs.

## Links

- URL: https://scheme2006.cs.uchicago.edu/13-siek.pdf
