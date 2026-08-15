---
title: "Handling the Selection Monad (Full Version)"
authors:
  - "Gordon Plotkin"
  - "Ningning Xie"
year: 2025
venue: "arXiv:cs.PL"
arxiv: "2504.03890"
doi: null
source: "https://arxiv.org/abs/2504.03890"
topics:
  - typed-programming-systems
seed_rank: 175
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 8
cites:
  - title: "Programming with Algebraic Effects and Handlers"
    url: "https://arxiv.org/abs/1203.1539"
    year: 2015
    arxiv: "1203.1539"
    doi: "10.1016/j.jlamp.2014.02.001"
  - title: "Handlers of Algebraic Effects"
    url: "https://doi.org/10.1007/978-3-642-00590-9_7"
    year: 2009
    arxiv: null
    doi: "10.1007/978-3-642-00590-9_7"
  - title: "Typed Memory Management in a Calculus of Capabilities"
    url: "https://doi.org/10.1145/292540.292564"
    year: 1999
    arxiv: null
    doi: "10.1145/292540.292564"
see:
  - "107-programming-with-algebraic-effects-and-handlers"
  - "021-handlers-of-algebraic-effects"
  - "028-typed-memory-management-in-a-calculus-of-capabilities"
---

# Handling the Selection Monad (Full Version)

## One-sentence takeaway

Plotkin and Xie give programmers algebraic handlers that see a choice continuation of future losses, so selection-monad operations can run user-written optimizers instead of only oracle-optimal choices.

## Why it matters here

Ano command selection — pick a unit, a target, a plan — is a selection-monad problem. Handlers that can inspect the loss of alternative continuations are how a planner effect should be implemented, not a hidden argmin.

## Key ideas

- A selection function picks an element of a set given a loss (or reward) function; Abadi and Plotkin used the monad for optimal choice and asked for programmer-supplied strategies.
- Handlers are enriched with choice continuations in addition to ordinary delimited continuations, exposing future losses to the handler.
- A higher-order language \(λC\) is given an operational semantics with progress, type soundness, and termination under a mild hierarchical constraint on operation types.
- That subset also has a selection-monad denotational semantics with soundness and adequacy.
- A Haskell implementation and a range of programming examples show the design is usable, not only semantic.

## Caveats

## Links

- arXiv: [2504.03890](https://arxiv.org/abs/2504.03890)
