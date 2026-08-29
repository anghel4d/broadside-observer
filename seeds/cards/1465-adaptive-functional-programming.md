---
title: "Adaptive Functional Programming"
authors: ["Umut A. Acar", "Guy E. Blelloch", "Robert Harper"]
year: 2002
venue: "POPL"
arxiv: null
doi: "10.1145/503272.503296"
source: "https://doi.org/10.1145/503272.503296"
topics: [embedded-scripting-dsls, typed-programming-systems, batched-interpreters-ffi]
seed_rank: 1465
seed_batch: "archive-2026-08-30"
reviewed: "2026-08-30"
pool: "languages"
relevance_score: 10
lineage: incremental-computation
cites:
  - title: "Incremental Computation via Function Caching"
    url: "https://doi.org/10.1145/75277.75305"
    year: 1989
    arxiv: null
    doi: "10.1145/75277.75305"
  - title: "Adaptive Functional Programming"
    url: "https://doi.org/10.1145/1186632.1186634"
    year: 2006
    arxiv: null
    doi: "10.1145/1186632.1186634"
  - title: "Selective Memoization"
    url: "https://doi.org/10.1145/604131.604133"
    year: 2003
    arxiv: null
    doi: "10.1145/604131.604133"
see:
  - "1464-incremental-computation-via-function-caching"
  - "1461-making-data-structures-persistent"
---

# Adaptive Functional Programming

## One-sentence takeaway

Record a dynamic dependence graph while a purely functional program runs, then on input change *propagate* through that graph and re-execute only the affected thunks — incrementality as a library, not a second algorithm.

## Why it matters here

Pugh (1464) reuses a cache; Acar–Blelloch–Harper *maintain the dependence structure* so a small edit (one more key, one dirtied ECS column) has a proven bound, not a hope. ano rule re-fire, GRID COMMAND order reparse, and Anoptic dirty-region rebuilds are exactly "the input changed a little; adapt the output." The ML library is three primitives to make a program adaptive plus two to change the input and propagate. Journal version is TOPLAS 2006; mint the POPL origin.

## Key ideas

- **Dynamic dependence graph.** As the program executes, the runtime records data and control dependences. Change propagation walks the graph and re-runs only dirty nodes, updating the graph as it goes.
- **AFL.** A call-by-value functional language with adaptivity primitives and a modal type system that (unlike the ML library) enforces correct use statically.
- **Bound, not just a cache.** Adaptive Quicksort re-sorts in logarithmic time when the input is extended by one key — a theorem, not a benchmark anecdote.
- **Evidence.** POPL 2002; TOPLAS 28(6) 2006 journal expansion. Spawned CEAL (C), Delta ML, and the self-adjusting-computation line; Adapton (1466) is the demand-driven sequel.

## Caveats

Eager change propagation recomputes *all* dependents even if nobody will read them — that is Adapton's complaint. The ML library checks the modal discipline at run time. Writing the program in the adaptive subset is still a craft; you do not sprinkle `modref` on an arbitrary C sim and win. Not a remint of splay trees (766), which share only the English "self-adjusting."

## Links

- DOI (POPL 2002): https://doi.org/10.1145/503272.503296
- TOPLAS 2006: https://doi.org/10.1145/1186632.1186634
- Author PDF: https://www.cs.cmu.edu/~guyb/papers/ABH06.pdf
