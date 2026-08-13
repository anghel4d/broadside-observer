---
title: Retrofitting Effect Handlers onto OCaml
authors:
- KC Sivaramakrishnan
- Stephen Dolan
- Leo White
- Tom Kelly
- Sadiq Jaffer
- Anil Madhavapeddy
year: 2021
venue: PLDI
arxiv: '2104.02882'
doi: null
source: https://arxiv.org/abs/2104.02882
topics:
- effects
- handlers
seed_rank: 729
seed_batch: lineage-shallow-2026-08-13
reviewed: '2026-08-13'
pool: languages
relevance_score: 8
lineage: algebraic-effects
cites:
- title: Handlers of Algebraic Effects
  url: https://homepages.inf.ed.ac.uk/gdp/publications/Effect_Handlers.pdf
  year: 2009
  arxiv: null
  doi: null
- title: 'Koka: Programming with Row Polymorphic Effect Types'
  url: https://www.microsoft.com/en-us/research/publication/koka-programming-with-row-polymorphic-effect-types/
  year: 2014
  arxiv: null
  doi: null
- title: Programming with Algebraic Effects and Handlers
  url: https://arxiv.org/abs/1203.1539
  year: 2012
  arxiv: '1203.1539'
  doi: null
see:
- "022-handlers-of-algebraic-effects"
- "711-koka-programming-with-row-polymorphic-effect-types"
- "123-programming-with-algebraic-effects-and-handlers"
---

# Retrofitting Effect Handlers onto OCaml

## One-sentence takeaway

OCaml 5 brings delimited effect handlers to an industrial compiler — living PL successor.

## Why it matters here

Shows algebraic-effect ideas graduating into production runtimes.

## Key ideas

- Effect handlers for concurrency and resources.
- Retrofitting a mature language.
- Connects Plotkin/Pretnar theory to systems programming.
- Parallel runtime interactions matter.

## Caveats

- Follow OCaml manual for shipped semantics.
- Not identical to Koka row-effect design.

## Links

- arXiv: [2104.02882](https://arxiv.org/abs/2104.02882)
- URL: https://arxiv.org/abs/2104.02882
