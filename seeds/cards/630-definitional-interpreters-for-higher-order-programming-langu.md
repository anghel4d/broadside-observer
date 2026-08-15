---
title: "Definitional Interpreters for Higher-Order Programming Languages"
authors:
  - "John C. Reynolds"
year: 1972
venue: "Proceedings of the ACM Annual Conference"
arxiv: null
doi: "10.1145/800194.805852"
source: "https://doi.org/10.1145/800194.805852"
topics:
  - interpreters
  - continuations
  - reynolds
  - semantics
seed_rank: 630
seed_batch: "foundations-greats-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 9
lineage: foundations-of-computing
cites:
  - title: "The Mechanical Evaluation of Expressions"
    url: "https://doi.org/10.1093/comjnl/6.4.308"
    year: 1964
    arxiv: null
    doi: "10.1093/comjnl/6.4.308"
  - title: "Toward a Mathematical Semantics for Computer Languages"
    url: "https://www.cs.ox.ac.uk/files/3228/PRG06.pdf"
    year: 1971
    arxiv: null
    doi: null
  - title: "Fundamental Concepts in Programming Languages"
    url: "https://doi.org/10.1023/A:1010000313106"
    year: 1967
    arxiv: null
    doi: "10.1023/A:1010000313106"
see:
  - "617-the-mechanical-evaluation-of-expressions"
  - "612-toward-a-mathematical-semantics-for-computer-languages"
  - "615-fundamental-concepts-in-programming-languages"
---

# Definitional Interpreters for Higher-Order Programming Languages

## One-sentence takeaway

Reynolds shows that a language can be defined by an interpreter written in a simpler metalanguage, and that continuation-passing and defunctionalization are systematic transforms of that interpreter.

## Why it matters here

Bridge among Landin, Scott–Strachey, and CPS compilers. The “definitional interpreter” move — write the semantics as a runnable program, then transform it — is how one would pin down ano evaluation without waiting for a denotational model.

## Key ideas

- A definitional interpreter is an executable semantics; meta-circularity is optional and often harmful.
- Order of evaluation in the *defining* language leaks into the defined language unless the interpreter is written in continuation-passing style.
- Defunctionalization replaces higher-order function values by a first-order datatype of closures plus an apply function.
- ACM Annual Conference 1972; HOSC later reprints it. Reynolds revisits the essay in 1998 (card 642).

## Caveats

## Links

- DOI: [10.1145/800194.805852](https://doi.org/10.1145/800194.805852)
