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
  - title: "A Structural Approach to Operational Semantics"
    url: "https://doi.org/10.1016/j.jlap.2004.05.001"
    year: 1981
    arxiv: null
    doi: "10.1016/j.jlap.2004.05.001"
  - title: "Inductive Definitions in the System Coq: Rules and Properties"
    url: "https://doi.org/10.1007/BFb0037116"
    year: 1993
    arxiv: null
    doi: "10.1007/BFb0037116"
  - title: "An Axiomatic Basis for Computer Programming"
    url: "https://doi.org/10.1145/363235.363259"
    year: 1969
    arxiv: null
    doi: "10.1145/363235.363259"
see:
  - "650-the-calculus-of-constructions"
  - "658-a-structural-approach-to-operational-semantics"
  - "720-inductive-definitions-in-the-system-coq-rules-and-properties"
  - "592-an-axiomatic-basis-for-computer-programming"
---

# Formal Certification of a Compiler Back-end, or: Programming a Compiler with a Proof Assistant

## One-sentence takeaway

A realistic compiler from Cminor to PowerPC assembly is programmed in Coq so each pass is proved to preserve observable behavior of the source.

## Why it matters here

Anoptic’s C + Vulkan stack and any future ano-to-SPIR-V or ano-to-C backend live or die on “the compiler did not invent a race.” CompCert is the existence proof that a production-shaped back-end can carry a machine-checked semantic-preservation theorem.

## Key ideas

- The compiler is a Coq function; extraction yields the executable. Correctness is a theorem, not a test suite.
- Four intermediate languages sit between Cminor and PowerPC; each pass has a simulation or refinement argument.
- The theorem is semantic preservation of observable I/O, not full source-level equivalence of every internal state.
- Inductive types and the Calculus of Constructions (via Coq) are the proof language; SOS-style operational semantics are the specification language.
- POPL 2006, pp. 42–54, is the paper that launched CompCert as a research program rather than a toy compiler.

## Caveats

## Links

- DOI: [10.1145/1111037.1111042](https://doi.org/10.1145/1111037.1111042)
- Author PDF: https://xavierleroy.org/publi/compiler-certif.pdf
- Author page: https://xavierleroy.org/bibrefs/Leroy-compcert-06.html
