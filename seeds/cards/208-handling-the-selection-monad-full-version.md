---
title: "Handling the Selection Monad (Full Version)"
authors:
  - "Gordon Plotkin"
  - "Ningning Xie"
year: 2025
venue: "arXiv"
arxiv: "2504.03890"
doi: null
source: "https://arxiv.org/abs/2504.03890"
topics:
  - typed-programming-systems
seed_rank: 208
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
    card: "123-programming-with-algebraic-effects-and-handlers"
  - title: "Handlers of Algebraic Effects"
    url: "https://doi.org/10.1007/978-3-642-00590-9_7"
    year: 2009
    arxiv: null
    doi: "10.1007/978-3-642-00590-9_7"
    card: "022-handlers-of-algebraic-effects"
  - title: "Typed Memory Management in a Calculus of Capabilities"
    url: "https://doi.org/10.1145/292540.292564"
    year: 1999
    arxiv: null
    doi: "10.1145/292540.292564"
    card: "029-typed-memory-management-in-a-calculus-of-capabilities"
---

# Handling the Selection Monad (Full Version)

## One-sentence takeaway

The selection monad on a set consists of selection functions.

## Why it matters here

Effect systems/handlers inform ano masked command effects and handlers; Relational/query foundations for selection-as-reference.

## Key ideas

- The selection monad on a set consists of selection functions.
- These select an element from the set, based on a loss (dually, reward) function giving the loss resulting from a choice of an element.
- Abadi and Plotkin used the monad to model a language with operations making choices of computations taking account of the loss that would arise from each choice.
- However, their choices were optimal, and they asked if they could instead be programmer provided.
- In this work, we present a novel design enabling programmers to do so.

## Caveats

- Seed card from bibliographic shortlist; promote to a full `summaries/` digest before relying on fine-grained claims.

## Links

- arXiv: [2504.03890](https://arxiv.org/abs/2504.03890)
- URL: https://arxiv.org/abs/2504.03890
