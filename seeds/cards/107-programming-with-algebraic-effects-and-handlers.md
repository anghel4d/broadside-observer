---
title: Programming with Algebraic Effects and Handlers
authors:
- Andrej Bauer
- Matija Pretnar
year: 2015
venue: JLAMP
arxiv: '1203.1539'
doi: 10.1016/j.jlamp.2014.02.001
source: https://arxiv.org/abs/1203.1539
topics:
- typed-programming-systems
- embedded-scripting-dsls
seed_rank: 107
seed_batch: prefill-2026-08-13
reviewed: '2026-08-13'
pool: languages
relevance_score: 9
cites:
- title: Handlers of Algebraic Effects
  url: https://doi.org/10.1007/978-3-642-00590-9_7
  year: 2009
  arxiv: null
  doi: 10.1007/978-3-642-00590-9_7
- title: Handling Algebraic Effects
  url: https://arxiv.org/abs/1312.1399
  year: 2013
  arxiv: '1312.1399'
  doi: 10.2168/LMCS-9(4:23)2013
- title: Monads for functional programming
  url: https://homepages.inf.ed.ac.uk/wadler/papers/marktoberdorf/baastad.pdf
  year: 1995
  arxiv: null
  doi: 10.1007/3-540-59451-5_2
- title: 'Koka: Programming with Row Polymorphic Effect Types'
  url: https://www.microsoft.com/en-us/research/publication/koka-programming-with-row-polymorphic-effect-types/
  year: 2014
  arxiv: null
  doi: null
see:
- "021-handlers-of-algebraic-effects"
- "112-handling-algebraic-effects"
- "463-koka-programming-with-row-polymorphic-effect-types"
lineage: algebraic-effects
---

# Programming with Algebraic Effects and Handlers

## One-sentence takeaway

Eff treats effects as algebraic operations and handlers as homomorphisms from the free algebra, so new effects, their combinations, and delimited-control idioms are ordinary first-class values.

## Why it matters here

This is the programming model closest to composing ano's effectful commands: declare an operation, handle it at a boundary, and reuse the same handler algebra for exceptions, state, backtracking, or cooperative threads.

## Key ideas

- Core distinction: expressions are inert; computations may perform operations. `new E` allocates a fresh effect instance; `e # op` is the generic effect; `with h handle c` interprets operations that fire inside `c`.
- A handler clause `e # op x k ↦ c` binds the payload and the captured continuation `k`. `val` handles a pure result; `finally` runs on the way out. Default behaviour can be attached as a resource on the instance.
- Standard effects — exceptions, state, I/O, nondeterminism — are libraries, not primitives. Continuations are not algebraic but fall out of the handler's captured `k`.
- Delimited-control examples in the paper: backtracking, BFS, selection functionals, and cooperative multithreading (the last written with Chris Stone).
- Denotational semantics plus a prototype (OCaml-like surface, type inference). Implementation lived at http://math.andrej.com/eff/. Journal version: JLAMP 84(1):108–123, 2015.

## Caveats

## Links

- arXiv: [1203.1539](https://arxiv.org/abs/1203.1539)
- DOI: [10.1016/j.jlamp.2014.02.001](https://doi.org/10.1016/j.jlamp.2014.02.001)
- PDF: https://arxiv.org/pdf/1203.1539
- URL: https://arxiv.org/abs/1203.1539
