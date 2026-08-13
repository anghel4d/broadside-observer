---
title: "Formal Certification of a Compiler Back-end, or: Programming a Compiler with a Proof Assistant"
authors:
  - "Xavier Leroy"
year: 2006
venue: "POPL"
arxiv: null
doi: "10.1145/1111037.1111042"
source: "https://doi.org/10.1145/1111037.1111042"
topics:
  - compcert
  - verified-compilation
  - coq
  - leroy
seed_rank: 707
seed_batch: "perfects-pl-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 10
lineage: programming-language-foundations
cites:
  - title: "The Calculus of Constructions"
    url: "https://doi.org/10.1016/0890-5401(88)90005-3"
    year: 1988
    arxiv: null
    doi: "10.1016/0890-5401(88)90005-3"
  - title: "The ZINC Experiment: An Economical Implementation of the ML Language"
    url: "https://xavierleroy.org/publi/ZINC.pdf"
    year: 1990
    arxiv: null
    doi: null
  - title: "A Structural Approach to Operational Semantics"
    url: "https://doi.org/10.1016/j.jlap.2004.05.001"
    year: 1981
    arxiv: null
    doi: "10.1016/j.jlap.2004.05.001"
  - title: "An Axiomatic Basis for Computer Programming"
    url: "https://doi.org/10.1145/363235.363259"
    year: 1969
    arxiv: null
    doi: "10.1145/363235.363259"
see:
  - "650-the-calculus-of-constructions"
  - "706-the-zinc-experiment-an-economical-implementation-of-the-ml-l"
  - "658-a-structural-approach-to-operational-semantics"
  - "592-an-axiomatic-basis-for-computer-programming"
---

# Formal Certification of a Compiler Back-end, or: Programming a Compiler with a Proof Assistant

## One-sentence takeaway

Shows a realistic compiler back-end can be proved correct in Coq — the CompCert program.

## Why it matters here

CompCert is the verified-compilation classic — proof assistants meeting industrial compiler aspiration.

## Key ideas

- Semantic preservation theorems for compilation passes.
- Coq as a vehicle for compiler correctness.
- Realistic subset of C as source language.
- Sets the bar for verified systems software.

## Caveats

- Seed card from the wisdom-of-the-perfects PL haul; promote to a full `summaries/` digest before relying on fine-grained claims.
- Verify primary PDF/DOI pagination against your preferred edition before formal citation.

## Links

- DOI: [10.1145/1111037.1111042](https://doi.org/10.1145/1111037.1111042)
- URL: https://doi.org/10.1145/1111037.1111042
