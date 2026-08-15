---
title: "Compiling to Categories"
authors:
  - "Conal Elliott"
year: 2017
venue: "Proceedings of the ACM on Programming Languages (ICFP)"
arxiv: null
doi: "10.1145/3110271"
source: "https://doi.org/10.1145/3110271"
topics:
  - category-theory
  - cartesian-closed
  - compilers
  - haskell
  - plt
seed_rank: 99
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "maths-foundations"
relevance_score: 9
cites:
  - title: "General Theory of Natural Equivalences"
    url: "https://doi.org/10.2307/1990284"
    year: 1945
    arxiv: null
    doi: "10.2307/1990284"
  - title: "Seven Sketches in Compositionality: An Invitation to Applied Category Theory"
    url: "https://arxiv.org/abs/1803.05316"
    year: 2018
    arxiv: "1803.05316"
    doi: "10.1017/9781108668804"
see:
  - "050-general-theory-of-natural-equivalences"
  - "094-seven-sketches-in-compositionality-an-invitation-to-applied-"
---

# Compiling to Categories

## One-sentence takeaway

A GHC plugin rewrites Haskell into cartesian-closed-category combinators once, then each target — circuits, automatic differentiation, incremental computation, interval analysis — is just another `Category` instance.

## Why it matters here

Anoptic already thinks in wiring and multiple interpretations of the same term; Elliott's CCC compilation is that idea as a compiler pass rather than a deeply embedded DSL.

## Key ideas

- Simply typed lambda calculus is modeled by any CCC, so a typed program can be given many semantics by changing the category.
- The plugin is independent of the target: new interpretations are ordinary Haskell instances (`Category`, `Cartesian`, `Closed`) outside the compiler.
- Demonstrated targets include hardware circuits, automatic differentiation, incremental computation, and interval analysis.
- The technique is positioned as an alternative to deeply embedded DSLs, which force the host language to be quoted rather than compiled.
- PACMPL 1(ICFP), Article 27; correct DOI is 10.1145/3110271 (not 10.1145/3110275). Author PDF: https://conal.net/papers/compiling-to-categories/compiling-to-categories.pdf.

## Caveats

## Links

- DOI: [10.1145/3110271](https://doi.org/10.1145/3110271)
- Author PDF: https://conal.net/papers/compiling-to-categories/compiling-to-categories.pdf
