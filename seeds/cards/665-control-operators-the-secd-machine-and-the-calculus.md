---
title: "Control Operators, the SECD Machine, and the λ-Calculus"
authors:
  - "Matthias Felleisen"
  - "Daniel P. Friedman"
year: 1986
venue: "Formal Description of Programming Concepts III (IFIP)"
arxiv: null
doi: null
source: "https://scholarworks.iu.edu/dspace/items/d85303cb-faee-4396-bf56-b03b35758a47"
topics:
  - cek
  - secd
  - abstract-machines
  - felleisen
  - continuations
seed_rank: 665
seed_batch: "perfects-pl-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 10
lineage: programming-language-foundations
cites:
  - title: "The Mechanical Evaluation of Expressions"
    url: "https://doi.org/10.1093/comjnl/6.4.308"
    year: 1964
    arxiv: null
    doi: "10.1093/comjnl/6.4.308"
  - title: "A Syntactic Theory of Sequential Control"
    url: "https://doi.org/10.1016/0304-3975(87)90109-5"
    year: 1987
    arxiv: null
    doi: "10.1016/0304-3975(87)90109-5"
  - title: "Definitional Interpreters for Higher-Order Programming Languages"
    url: "https://doi.org/10.1145/800194.805852"
    year: 1972
    arxiv: null
    doi: "10.1145/800194.805852"
see:
  - "617-the-mechanical-evaluation-of-expressions"
  - "630-definitional-interpreters-for-higher-order-programming-langu"
---

# Control Operators, the SECD Machine, and the λ-Calculus

## One-sentence takeaway

Felleisen and Friedman derive the CEK machine — Control, Environment, Kontinuation — from Landin's SECD by making the continuation an explicit state component that control operators can capture.

## Why it matters here

CEK is the abstract machine you actually teach and implement for ano interpreters; SECD is the ancestor, CESK/AAM the descendants. The old Northeastern PDF 404s; Indiana TR197 is the stable copy.

## Key ideas

- SECD's dump is refactored into a first-class continuation register; the resulting CEK transitions are small-step and close under `call/cc`-style operators.
- Control operators become ordinary machine instructions that reify or replace the K component, instead of informal jumps out of the evaluator.
- The paper is the 1986 Indiana TR197, published in IFIP FDPC III (1987), pp. 193–217.
- Direct ancestor of Felleisen's reduction semantics and of Van Horn–Might abstracting abstract machines.

## Caveats

## Links

- Indiana TR197: https://scholarworks.iu.edu/dspace/items/d85303cb-faee-4396-bf56-b03b35758a47
