---
title: "The Essence of Compiling with Continuations"
authors:
  - "Cormac Flanagan"
  - "Amr Sabry"
  - "Bruce F. Duba"
  - "Matthias Felleisen"
year: 1993
venue: "PLDI"
arxiv: null
doi: "10.1145/155090.155113"
source: "https://doi.org/10.1145/155090.155113"
topics:
  - cps
  - anf
  - compilers
  - felleisen
seed_rank: 924
seed_batch: "perfects-pl-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 10
lineage: programming-language-foundations
cites:
  - title: "Compiling with Continuations"
    url: "https://doi.org/10.1017/CBO9780511609619"
    year: 1992
    arxiv: null
    doi: "10.1017/CBO9780511609619"
    card: "925-compiling-with-continuations"
  - title: "Definitional Interpreters for Higher-Order Programming Languages"
    url: "https://doi.org/10.1145/800194.805852"
    year: 1972
    arxiv: null
    doi: "10.1145/800194.805852"
    card: "895-definitional-interpreters-for-higher-order-programming-langu"
  - title: "Defunctionalization at Work"
    url: "https://doi.org/10.1145/773184.773202"
    year: 2001
    arxiv: null
    doi: "10.1145/773184.773202"
    card: "897-defunctionalization-at-work"
  - title: "Control Operators, the SECD Machine, and the λ-Calculus"
    url: "https://www2.ccs.neu.edu/racket/pubs/fdpc3-ff.pdf"
    year: 1986
    arxiv: null
    doi: null
    card: "923-control-operators-the-secd-machine-and-the-calculus"
---

# The Essence of Compiling with Continuations

## One-sentence takeaway

Shows A-normal form captures the essence of CPS for compilers without administrative CPS noise.

## Why it matters here

ANF/CPS classic for compiler IRs — still the mental model when lowering functional ano code.

## Key ideas

- Administrative redexes clutter classic CPS transforms.
- A-normal form as a practical intermediate style.
- Connects Source→CPS→machine to Source→ANF→machine.
- Pairs with Appel Compiling with Continuations and Danvy defunctionalization.

## Caveats

- Seed card from the wisdom-of-the-perfects PL haul; promote to a full `summaries/` digest before relying on fine-grained claims.
- Verify primary PDF/DOI pagination against your preferred edition before formal citation.

## Links

- DOI: [10.1145/155090.155113](https://doi.org/10.1145/155090.155113)
- URL: https://doi.org/10.1145/155090.155113
