---
title: "On Complete Categorical Semantics for Effect Handlers"
authors:
  - "Satoshi Kura"
year: 2026
venue: "arXiv:cs.LO"
arxiv: "2602.03275"
doi: null
source: "https://arxiv.org/abs/2602.03275"
topics:
  - typed-programming-systems
seed_rank: 168
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

# On Complete Categorical Semantics for Effect Handlers

## One-sentence takeaway

Kura gives sound-and-complete categorical models of effect handlers that include not only free-algebra monads but also CPS interpretations, so free models are not the only legitimate semantics.

## Why it matters here

Ano masked command effects and handlers should not be married to “the free monad is the meaning.” Completeness relative to an equational theory of handling is what lets a CPS or continuation-passing backend be a real model, not a hack.

## Key ideas

- Completeness for languages with algebraic effects and handlers had been missing, leaving open whether free-model monads were the only valid models.
- The paper isolates the exact categorical structure needed for soundness and completeness against an equational theory of handling constructs.
- That structure admits both the usual free-algebra monad models and the CPS semantics of handlers.
- Equational theory, not a particular construction of the monad, is the specification of what handlers mean.
- The result is a completeness theorem, not a new surface language.

## Caveats

## Links

- arXiv: [2602.03275](https://arxiv.org/abs/2602.03275)
