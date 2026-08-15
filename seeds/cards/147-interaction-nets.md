---
title: "Interaction Nets"
authors:
  - "Yves Lafont"
year: 1990
venue: "POPL 1990"
arxiv: null
doi: "10.1145/96709.96718"
source: "https://doi.org/10.1145/96709.96718"
topics:
  - interaction-nets
  - graph-rewriting
  - linear-logic
  - implementation
seed_rank: 147
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "maths-foundations"
relevance_score: 9
cites:
  - title: "Linear logic"
    url: "https://doi.org/10.1016/0304-3975(87)90045-4"
    year: 1987
    arxiv: null
    doi: "10.1016/0304-3975(87)90045-4"
  - title: "Proofs and types"
    url: "https://www.paultaylor.eu/stable/Proofs+Types.html"
    year: 1989
    arxiv: null
    doi: null
  - title: "The linear abstract machine"
    url: "https://doi.org/10.1016/0304-3975(88)90100-4"
    year: 1988
    arxiv: null
    doi: "10.1016/0304-3975(88)90100-4"
  - title: "Linear logic and lazy computation"
    url: "https://doi.org/10.1007/BFb0014972"
    year: 1987
    arxiv: null
    doi: "10.1007/BFb0014972"
  - title: "Geometry of Interaction 1: Interpretation of System F"
    url: "https://doi.org/10.1016/s0049-237x(08)70271-4"
    year: 1989
    arxiv: null
    doi: "10.1016/s0049-237x(08)70271-4"
see:
  - "040-linear-logic"
---

# Interaction Nets

## One-sentence takeaway

A graph-rewriting model of computation in which every cell has one principal port, an interaction rule fires only when two principal ports meet, and at most one rule exists per symbol pair — so rewriting is local, asynchronous, and strongly confluent.

## Why it matters here

Interaction nets are the visual dataflow machine sitting under linear logic: agents as cells, wires as channels, no global clock. That is the same shape as a lock-free engine graph.

## Key ideas

- Cells carry a symbol and a fixed arity; one distinguished principal port, the rest auxiliary. A net is a graph of cells wired port-to-port, possibly with free ports.
- An interaction rule rewrites a pair of cells connected by their principal ports. Because there is at most one rule per pair of symbols, two applicable redexes are always on disjoint subgraphs and may fire in either order or in parallel. No global temporality.
- Strong confluence follows immediately: if two rules apply, both can be executed, and the net never needs a choice of which conflict to resolve. Reduction is deterministic up to permutation of independent steps.
- The model comes out of linear logic / proof nets and Lafont's linear abstract machine: wires behave like linear resources (a port is used once). Honda later cites the paper as a typed-interaction precursor.
- Concrete programming is shown on arithmetic (and, in later notes, on interaction combinators): you draw the cells and the principal-port rules; evaluation is graph reduction, not a term-rewriting search.

## Caveats

## Links

- DOI: [10.1145/96709.96718](https://doi.org/10.1145/96709.96718)
- Author page: https://www.i2m.univ-amu.fr/perso/yves.lafont/publications.html
- Later introductory notes (not the POPL paper): https://www.i2m.univ-amu.fr/perso/yves.lafont/pub/nets.ps
