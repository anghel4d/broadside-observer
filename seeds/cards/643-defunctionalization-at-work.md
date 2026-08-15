---
title: "Defunctionalization at Work"
authors:
  - "Olivier Danvy"
  - "Lasse R. Nielsen"
year: 2001
venue: "PPDP"
arxiv: null
doi: "10.1145/773184.773202"
source: "https://doi.org/10.1145/773184.773202"
topics:
  - defunctionalization
  - cps
  - interpreters
  - danvy
seed_rank: 643
seed_batch: "perfects-pl-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 10
lineage: programming-language-foundations
cites:
  - title: "Definitional Interpreters for Higher-Order Programming Languages"
    url: "https://doi.org/10.1145/800194.805852"
    year: 1972
    arxiv: null
    doi: "10.1145/800194.805852"
  - title: "Definitional Interpreters Revisited"
    url: "https://doi.org/10.1023/A:1010075320953"
    year: 1998
    arxiv: null
    doi: "10.1023/A:1010075320953"
see:
  - "630-definitional-interpreters-for-higher-order-programming-langu"
  - "642-definitional-interpreters-revisited"
---

# Defunctionalization at Work

## One-sentence takeaway

Danvy and Nielsen turn Reynolds’ defunctionalization into a reversible, pair-with-CPS methodology: higher-order evaluators become first-order abstract machines and back.

## Why it matters here

Operationalizes Reynolds for modern interpreter/compiler pipelines. The recipe for deriving a CEK-style machine (or an ano bytecode loop) from a high-level evaluator is this paper, not folklore.

## Key ideas

- Defunctionalize the continuations of a CPS interpreter to obtain an apply function whose constructors *are* the machine’s frames.
- Refunctionalization is the inverse: recover the higher-order evaluator from the first-order apply.
- The same pair of transforms connects definitional interpreters to A-normal form and to Landin/Felleisen machines.
- PPDP 2001, pp. 162–174.

## Caveats

## Links

- DOI: [10.1145/773184.773202](https://doi.org/10.1145/773184.773202)
