---
title: "Separation Logic: A Logic for Shared Mutable Data Structures"
authors:
  - "John C. Reynolds"
year: 2002
venue: "LICS"
arxiv: null
doi: "10.1109/LICS.2002.1029817"
source: "https://www.cs.cmu.edu/~jcr/seplogic.pdf"
topics:
  - plt
  - memory
seed_rank: 134
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 9
cites:
  - title: "Local Reasoning about Programs that Alter Data Structures"
    url: "https://doi.org/10.1007/3-540-44802-0_1"
    year: 2001
    arxiv: null
    doi: "10.1007/3-540-44802-0_1"
  - title: "BI as an assertion language for mutable data structures"
    url: "https://doi.org/10.1145/360204.375719"
    year: 2001
    arxiv: null
    doi: "10.1145/360204.375719"
  - title: "The Logic of Bunched Implications"
    url: "https://doi.org/10.2307/421090"
    year: 1999
    arxiv: null
    doi: "10.2307/421090"
  - title: "An axiomatic basis for computer programming"
    url: "https://doi.org/10.1145/363235.363259"
    year: 1969
    arxiv: null
    doi: "10.1145/363235.363259"
  - title: "Implementation of the typed call-by-value λ-calculus using a stack of regions"
    url: "https://doi.org/10.1145/174675.177855"
    year: 1994
    arxiv: null
    doi: "10.1145/174675.177855"
  - title: "Dynamic Logic"
    url: "https://doi.org/10.7551/mitpress/2516.001.0001"
    year: 2000
    arxiv: null
    doi: "10.7551/mitpress/2516.001.0001"
  - title: "Alias Types for Recursive Data Structures"
    url: "https://doi.org/10.1007/3-540-45332-6_7"
    year: 2001
    arxiv: null
    doi: "10.1007/3-540-45332-6_7"
see:
  - "032-implementation-of-the-typed-call-by-value-calculus-using-a-s"
---

# Separation Logic: A Logic for Shared Mutable Data Structures

## One-sentence takeaway

Separating conjunction `P * Q` says `P` and `Q` hold of disjoint heaps, so an in-place list reversal’s invariant is `list α i * list β j` instead of a reachability side-condition that forbids sharing.

## Why it matters here

This is the logic behind “this arena does not alias that one.” Anoptic component buffers, GRID COMMAND agent heaps, and engine frame arenas are exactly the resources the frame rule lets you ignore while mutating one of them.

## Key ideas

- Commands, not expressions, touch the heap: `cons`, `[e]`, `[e] := e′`, `dispose e`. A dereference of an inactive address aborts.
- `emp` / `e ↦ e′` / `P * Q` / `P -∗ Q` are the new assertions; `*` splits the heap, `-∗` is the adjoint (“if you adjoin a heap satisfying `P`, you get `Q`”).
- O’Hearn’s frame rule: from `{P} C {Q}` infer `{P * R} C {Q * R}` when `C` does not modify variables free in `R` — local specs stay local.
- Classical (not intuitionistic) BI is required for `dispose`: intuitionistic SL is monotone in heap extension and cannot talk about deallocation.
- Address arithmetic is in scope: values are integers, heaps map addresses to single cells, so `e ↦ e₁,…,eₙ` is a consecutive record.

## Caveats

## Links

- Author PDF: [cs.cmu.edu/~jcr/seplogic.pdf](https://www.cs.cmu.edu/~jcr/seplogic.pdf)
- DOI: [10.1109/LICS.2002.1029817](https://doi.org/10.1109/LICS.2002.1029817)
