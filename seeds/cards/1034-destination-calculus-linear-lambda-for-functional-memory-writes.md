---
title: "Destination Calculus: A Linear λ-Calculus for Purely Functional Memory Writes"
authors: ["Thomas Bagrel", "Arnaud Spiwack"]
year: 2025
venue: "OOPSLA"
arxiv: "2503.07489"
doi: "10.1145/3720423"
source: "https://arxiv.org/abs/2503.07489"
topics: [linear-types, destination-passing, uniqueness-types]
seed_rank: 1034
seed_batch: "craft-2026-08-15"
reviewed: "2026-08-15"
pool: "languages"
relevance_score: 9
lineage: array-languages
cites:
  - title: "Functional Destination-Passing Style"
    url: "https://www.microsoft.com/en-us/research/publication/functional-destination-passing-style/"
    year: 2017
    arxiv: null
    doi: null
  - title: "Tail Modulo Cons"
    url: "https://doi.org/10.1145/3473572"
    year: 2021
    arxiv: null
    doi: "10.1145/3473572"
  - title: "A Functional Representation of Data Structures with a Hole"
    url: "https://doi.org/10.1145/268946.268953"
    year: 1998
    arxiv: null
    doi: "10.1145/268946.268953"
  - title: "Futhark: Purely Functional GPU-Programming with Nested Parallelism and In-Place Array Updates"
    url: "https://doi.org/10.1145/3062341.3062354"
    year: 2017
    arxiv: null
    doi: "10.1145/3062341.3062354"
see:
  - "1002-futhark-purely-functional-gpu-programming"
  - "921-when-lifetimes-liberate-a-type-system-for-arenas"
  - "922-spegion-implicit-and-non-lexical-regions-with-sized-allocatio"
  - "1029-a-rig-of-transformations"
  - "1008-linear-regions-are-all-you-need"
  - "040-linear-logic"
---

# Destination Calculus: A Linear λ-Calculus for Purely Functional Memory Writes

## One-sentence takeaway

λ_d is a Coq-checked linear/modal calculus where destinations (write-once holes) are first-class, so you can build immutable structures root-to-leaf, store holes in queues, and still compile the writes to mutation.

## Why it matters here

ano wants Futhark-style in-place arrays *and* the ability to grow ECS/SoA rows and GRID COMMAND order lists from the tail without two-pass reverse. Destination passing is the typed recipe: uniqueness (Futhark) handles in-place update of existing cells; destinations handle *constructing* cells that do not exist yet. OCaml already ships a fragment as Tail Modulo Cons.

## Key ideas

- A destination `⌊U⌋` is a linear out-parameter. `d ◂ x` fills a complete value; `d ◃ Inl` fills a *hollow* constructor and returns the child hole — structures grow outside-in.
- Ampar `S ⋉ ⌊T⌋` ("asymmetric memory par") is a structure of type S with a hole of type T; `from ⋉` reads S only once every destination is consumed (no uninit reads).
- Destinations as values: they can be stored in other holes. Breadth-first tree relabeling then uses an efficient difference-list queue of (subtree, destination) pairs — previous systems forbade this.
- Linearity is not enough (a stored destination has been "used" but its hole is still open). Ages/modes track scope so a destination cannot escape the structure it points into.
- Implementation strategy: the fills *are* mutations; the type system makes them observationally pure. Coq progress+preservation.

## Caveats

- Core calculus, not a drop-in ano backend. Haskell prototype exists; mapping the mode system onto ano's standing rules is the actual engineering.
- Closely related to Futhark uniqueness and to 921/922 arenas — do not remint those; this is the *construction-order* dual of in-place update.
- First-class destinations stored in holes are the new power *and* the new footgun; ages are mandatory.

## Links

- arXiv: [2503.07489](https://arxiv.org/abs/2503.07489)
- DOI: [10.1145/3720423](https://doi.org/10.1145/3720423)
- Coq/artifact: https://github.com/tweag/destination-calculus
- OOPSLA 2025: https://2025.splashcon.org/details/OOPSLA/11/Destination-calculus-A-linear-calculus-for-purely-functional-memory-writes
