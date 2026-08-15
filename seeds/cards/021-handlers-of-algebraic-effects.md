---
title: "Handlers of Algebraic Effects"
authors:
  - "Gordon Plotkin"
  - "Matija Pretnar"
year: 2009
venue: "ESOP"
arxiv: null
doi: "10.1007/978-3-642-00590-9_7"
source: "https://homepages.inf.ed.ac.uk/gdp/publications/Effect_Handlers.pdf"
topics:
  - typed-programming-systems
seed_rank: 21
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 10
lineage: algebraic-effects
cites:
  - title: "Algebraic Operations and Generic Effects"
    url: "https://doi.org/10.1023/A:1023064908962"
    year: 2003
    arxiv: null
    doi: "10.1023/A:1023064908962"
  - title: "Notions of Computation and Monads"
    url: "https://doi.org/10.1016/0890-5401(91)90052-4"
    year: 1991
    arxiv: null
    doi: "10.1016/0890-5401(91)90052-4"
  - title: "Handling Algebraic Effects"
    url: "https://doi.org/10.2168/LMCS-9(4:23)2013"
    year: 2013
    arxiv: "1312.1399"
    doi: "10.2168/LMCS-9(4:23)2013"
see:
  - "130-algebraic-operations-and-generic-effects"
  - "035-notions-of-computation-and-monads"
  - "112-handling-algebraic-effects"
---

# Handlers of Algebraic Effects

## One-sentence takeaway

Plotkin and Pretnar generalize exception handlers to arbitrary algebraic operations: a handler is a model of an equational theory, so `get`/`put`, `raise`, and nondeterminism all get the same typing and operational story.

## Why it matters here

ano commands over a selection are effect operations; the Sky/engine boundary is a handler. This paper is why those commands can be given equations and swapped (simulate, log, commit) without rewriting the program.

## Key ideas

- Algebraic effects (Plotkin–Power) describe *what* an operation does via equations; this paper adds *how* a computation using those operations is interpreted — the handler.
- Exception handlers are the special case where the operation does not resume; general handlers receive a resumption and may call it zero, one, or many times (state, ambiguity, async).
- A handler denotes an algebra for the theory; composing handlers is composing models, which is why effect rows later type-check in Koka and Eff.
- The calculus gives a small-step semantics and a type-and-effect system so ill-handled operations are static errors.
- This is the 2009 ESOP introduction; the longer LMCS journal version (“Handling Algebraic Effects”, 2013) is the expanded reference.

## Caveats

## Links

- PDF: https://homepages.inf.ed.ac.uk/gdp/publications/Effect_Handlers.pdf
- DOI: [10.1007/978-3-642-00590-9_7](https://doi.org/10.1007/978-3-642-00590-9_7)
