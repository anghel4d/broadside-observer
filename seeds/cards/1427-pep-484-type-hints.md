---
title: "PEP 484 — Type Hints"
authors:
  - "Guido van Rossum"
  - "Jukka Lehtosalo"
  - "Łukasz Langa"
year: 2014
venue: "Python Enhancement Proposal"
arxiv: null
doi: null
source: "https://peps.python.org/pep-0484/"
topics:
  - python
  - type-hints
  - gradual-typing
  - type-safety
seed_rank: 1427
seed_batch: "to1000-types-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 9
lineage: type-safety
cites:
  - title: "Gradual Typing for Functional Languages"
    url: "https://scheme2006.cs.uchicago.edu/13-siek.pdf"
    year: 2006
    arxiv: null
    doi: null
    card: "1308-gradual-typing-for-functional-languages"
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
---

# PEP 484 — Type Hints

## One-sentence takeaway

PEP 484 standardizes optional type hints for Python gradual/optional checking.

## Why it matters here

The interface contract all Python type checkers share.

## Key ideas

- Annotation syntax.
- Gradual/optional semantics.
- Checker-agnostic hints.

## Caveats

- Seed card from type-safety shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.
- Verify primary PDF/DOI before citation; some industrial docs lack stable DOIs.

## Links

- URL: https://peps.python.org/pep-0484/
