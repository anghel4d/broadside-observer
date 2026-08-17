---
title: "An APL Machine"
authors:
  - "Philip S. Abrams"
year: 1970
venue: "Stanford / SLAC (Diss.)"
arxiv: null
doi: "10.2172/1453880"
source: "https://doi.org/10.2172/1453880"
topics:
  - "apl"
  - "beating"
  - "drag-along"
  - "array-compilation"
seed_rank: 1072
seed_batch: "archive-2026-08-18"
reviewed: "2026-08-18"
pool: "languages"
relevance_score: 10
lineage: apl-machine
cites:
  - title: "A Programming Language"
    url: "https://dl.acm.org/doi/book/10.5555/1102024"
    year: 1962
    arxiv: null
    doi: null
  - title: "Notation as a Tool of Thought"
    url: "https://doi.org/10.1145/358896.358899"
    year: 1980
    arxiv: null
    doi: "10.1145/358896.358899"
  - title: "The Design of APL"
    url: "https://doi.org/10.1145/359327.359332"
    year: 1978
    arxiv: null
    doi: "10.1145/359327.359332"
  - title: "Single Assignment C: Efficient Support for High-Level Array Operations in a Functional Setting"
    url: "https://doi.org/10.1017/S0956796802004458"
    year: 2003
    arxiv: null
    doi: "10.1017/S0956796802004458"
  - title: "Rank and Uniformity"
    url: "https://doi.org/10.1145/206944.206968"
    year: 1995
    arxiv: null
    doi: "10.1145/206944.206968"
see:
  - "049-a-programming-language"
  - "045-notation-as-a-tool-of-thought"
  - "159-the-design-of-apl"
  - "1044-single-assignment-c-efficient-support-for-high-level-array-operations"
  - "1045-rank-and-uniformity"
  - "1046-apl-question-hui-iverson-mcdonnell-whitney"
  - "1002-futhark-purely-functional-gpu-programming"
  - "141-nesl-a-nested-data-parallel-language-version-3-1"
---

# An APL Machine

## One-sentence takeaway

Don't execute array expressions element-by-element: *beat* selection into the access function so take/drop/transpose allocate nothing, and *drag-along* the rest of the expression until a fused evaluation.

## Why it matters here

The library has Iverson's language (049), notation (045), Design of APL (159), APL/? (1046), Hui rank (1045), SAC (1044), Futhark (1002), NESL (141) — and zero implementation papers on *how* you compile APL. Abrams 1970 is the lost one: beating + drag-along are the 1970 names for view/reshape fusion and loop fusion. ano's array backend (and k/q's "don't materialize the take") is this machine, not another Iverson notation card.

## Key ideas

- Select expressions (take, drop, reverse, transpose, indexing) have a compact standard form; a complete set of rewrites puts any composition into it.
- Beating: apply that standard form to the *storage access function*, so selection never touches values.
- Drag-along: defer inner array ops so beating can see a whole expression, then the E-machine evaluates the simplified program.
- D-machine (defer/simplify) and E-machine (evaluate) share stacks and segmented code.
- Analytic comparison to a naive interpreter: fewer memory accesses, arithmetic ops, and temps — sometimes by a factor of the operand length.

## Caveats

- Dissertation / SLAC-114, not a POPL paper; the vocabulary (beating, drag-along) is period APL and did not become the compiler-literature names.
- No nested arrays yet (APL2); rank/uniformity (1045) is the later J/k model.
- "An Implementation of J" and "A Dictionary of APL" were last-cycle rejects as books; this is the machine-structure gem under them.

## Links

- DOI: [10.2172/1453880](https://doi.org/10.2172/1453880)
- SLAC-114 PDF: https://slac.stanford.edu/pubs/slacreports/reports07/slac-r-114.pdf
- CHM: https://softwarepreservation.computerhistory.org/apl/
