---
title: "Category Theory for Computing Science"
authors:
  - "Michael Barr"
  - "Charles Wells"
year: 1995
venue: "Prentice Hall / CRM"
arxiv: null
doi: null
source: "https://www.math.mcgill.ca/barr/papers/ctcs.pdf"
topics:
  - category-theory
  - plt
  - cartesian-closed
  - sketches
seed_rank: 138
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "maths-foundations"
relevance_score: 9
cites:
  - title: "Basic category theory for computer scientists"
    url: "https://mitpress.mit.edu/9780262660716/basic-category-theory-for-computer-scientists/"
    year: 1991
    arxiv: null
    doi: null
  - title: "Sheaves in Geometry and Logic"
    url: "https://doi.org/10.1007/978-1-4612-0927-0"
    year: 1992
    arxiv: null
    doi: "10.1007/978-1-4612-0927-0"
  - title: "Proofs and Types"
    url: "https://www.paultaylor.eu/stable/prot.pdf"
    year: 1989
    arxiv: null
    doi: null
  - title: "Categories for Types"
    url: "https://doi.org/10.1017/CBO9781139172707"
    year: 1993
    arxiv: null
    doi: "10.1017/CBO9781139172707"
  - title: "Categorical Combinators, Sequential Algorithms, and Functional Programming"
    url: "https://doi.org/10.1007/978-1-4612-0317-9"
    year: 1990
    arxiv: null
    doi: "10.1007/978-1-4612-0317-9"
see:
  - "034-basic-category-theory-for-computer-scientists"
---

# Category Theory for Computing Science

## One-sentence takeaway

A sketch is a finite graph plus chosen diagrams, cones and cocones; its models in a category are the algebras, and the theory of the sketch is the classifying category those models factor through.

## Why it matters here

This is the CS-flavoured companion to Mac Lane: cartesian closed categories for typed λ-calculus, and sketches as the finite-spec tool for “what is an ano DSL / ECS schema, categorically.” Reach for it when a signature-plus-equations story needs a name.

## Key ideas

- Three views of a category, held in parallel: a workspace you compute in, a mathematical object, and a formal theory of structure.
- Linear sketches (graph + diagrams) through finite-product sketches (multisorted universal algebra) to finite-limit sketches (partial operations whose domains are limits).
- Cartesian closed categories as the semantics of simply-typed λ-calculus; limits/colimits developed with computing-science examples rather than as an end in themselves.
- The category of sketches: morphisms of sketches induce reduct functors on models, so specifications themselves form a category.
- Written for CS readers: conceptual development first, with the formal proofs available but not the only path through the book.

## Caveats

## Links

- Author PDF: [math.mcgill.ca/barr/papers/ctcs.pdf](https://www.math.mcgill.ca/barr/papers/ctcs.pdf)
