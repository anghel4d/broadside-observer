---
title: "Adapton: Composable, Demand-Driven Incremental Computation"
authors: ["Matthew A. Hammer", "Khoo Yit Phang", "Michael Hicks", "Jeffrey S. Foster"]
year: 2014
venue: "PLDI"
arxiv: null
doi: "10.1145/2594291.2594324"
source: "https://doi.org/10.1145/2594291.2594324"
topics: [embedded-scripting-dsls, typed-programming-systems, batched-interpreters-ffi]
seed_rank: 1466
seed_batch: "archive-2026-08-30"
reviewed: "2026-08-30"
pool: "languages"
relevance_score: 9
lineage: incremental-computation
cites:
  - title: "Adaptive Functional Programming"
    url: "https://doi.org/10.1145/503272.503296"
    year: 2002
    arxiv: null
    doi: "10.1145/503272.503296"
  - title: "Incremental Computation via Function Caching"
    url: "https://doi.org/10.1145/75277.75305"
    year: 1989
    arxiv: null
    doi: "10.1145/75277.75305"
  - title: "miniAdapton: A Minimal Implementation of Incremental Computation in Scheme"
    url: "https://arxiv.org/abs/1609.05337"
    year: 2016
    arxiv: "1609.05337"
    doi: null
see:
  - "1465-adaptive-functional-programming"
  - "1464-incremental-computation-via-function-caching"
---

# Adapton: Composable, Demand-Driven Incremental Computation

## One-sentence takeaway

Eager self-adjusting computation recomputes every dependent; Adapton records a *demanded* computation graph so only what an observer actually reads is refreshed, and inner incremental results can be reused when reordered.

## Why it matters here

Acar (1465) is the right dependence-graph story for "the whole output still matters." Anoptic dirty-screen, GRID COMMAND partial reparse, and ano query-and-command are *demand-driven*: a camera, a selected unit, a visible rule. Hammer–Khoo–Hicks–Foster separate inner incremental computations from outer observers and only propagate along demanded edges. That is the incrementality contract a 4X/RTS can actually pay for.

## Key ideas

- **Demanded computation graph (DCG).** Hierarchical, demand-driven tracking; change propagation starts from what observers ask for, not from every dirty input.
- **Inner vs outer.** λiccdd (the core calculus) formalizes incremental inner computations versus outer observers, so a result can be reused outside its original context (e.g. after a reorder).
- **Adapton library.** An OCaml implementation of the calculus; benchmarks show reliable speedups and, when demand is sparse, large wins over eager IC.
- **Evidence.** PLDI 2014, UMD. miniAdapton (Scheme, 2016) and Nominal Adapton (names for identity) are descendants, cited not minted.

## Caveats

You still annotate thunks/modrefs; this is not automatic incrementality of arbitrary C. Names (the OOPSLA 2015 sequel) are what make identity stable across structural edits — the 2014 paper is the DCG, not the full naming story. Constants matter: a demanded graph has its own overhead when everything is demanded anyway (then Acar-style eager is simpler). Not a remint of AFP (1465).

## Links

- DOI: https://doi.org/10.1145/2594291.2594324
- Author PDF: http://matthewhammer.org/adapton/adapton-pldi2014.pdf
- Project: http://matthewhammer.org/adapton/
