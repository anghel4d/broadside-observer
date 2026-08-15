---
title: "A Functional Correspondence between Evaluators and Abstract Machines"
authors:
  - "Mads Sig Ager"
  - "Dariusz Biernacki"
  - "Olivier Danvy"
  - "Jan Midtgaard"
year: 2003
venue: "PPDP"
arxiv: null
doi: "10.1145/888251.888254"
source: "https://doi.org/10.1145/888251.888254"
topics:
  - abstract-machines
  - defunctionalization
  - cps
  - danvy
  - evaluators
seed_rank: 690
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
  - title: "Defunctionalization at Work"
    url: "https://doi.org/10.1145/773184.773202"
    year: 2001
    arxiv: null
    doi: "10.1145/773184.773202"
  - title: "Control Operators, the SECD Machine, and the λ-Calculus"
    url: "https://scholarworks.iu.edu/dspace/items/d85303cb-faee-4396-bf56-b03b35758a47"
    year: 1987
    arxiv: null
    doi: null
  - title: "The Mechanical Evaluation of Expressions"
    url: "https://doi.org/10.1093/comjnl/6.4.308"
    year: 1964
    arxiv: null
    doi: "10.1093/comjnl/6.4.308"
see:
  - "630-definitional-interpreters-for-higher-order-programming-langu"
  - "643-defunctionalization-at-work"
  - "665-control-operators-the-secd-machine-and-the-calculus"
  - "617-the-mechanical-evaluation-of-expressions"
---

# A Functional Correspondence between Evaluators and Abstract Machines

## One-sentence takeaway

Ager, Biernacki, Danvy, and Midtgaard extract Landin/CEK/Krivine-style machines from high-level evaluators by CPS-transforming and then defunctionalizing the continuation.

## Why it matters here

This is the repeatable recipe for an ano interpreter: write the evaluator, CPS it, defunctionalize, and you *have* the abstract machine — instead of inventing CEK by hand.

## Key ideas

- Reynolds's definitional interpreters plus Danvy's defunctionalization become a correspondence: each evaluation-order choice yields a known machine.
- Call-by-value evaluators produce CEK-like machines; call-by-name produces Krivine-like ones; the continuation's data type *is* the stack.
- The derivation goes both ways in spirit: machines can be refunctionalized back into evaluators.
- PPDP 2003, DOI 10.1145/888251.888254.

## Caveats

## Links

- DOI: [10.1145/888251.888254](https://doi.org/10.1145/888251.888254)
