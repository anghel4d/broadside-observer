---
title: "Principles of Program Analysis"
authors:
  - "Flemming Nielson"
  - "Hanne Riis Nielson"
  - "Chris Hankin"
year: 1999
venue: "Springer"
arxiv: null
doi: "10.1007/978-3-662-03811-6"
source: "https://doi.org/10.1007/978-3-662-03811-6"
topics:
  - program-analysis
  - dataflow
  - abstract-interpretation
  - textbook
seed_rank: 702
seed_batch: "perfects-pl-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 10
lineage: programming-language-foundations
cites:
  - title: "Abstract Interpretation: A Unified Lattice Model for Static Analysis of Programs by Construction or Approximation of Fixpoints"
    url: "https://doi.org/10.1145/512950.512973"
    year: 1977
    arxiv: null
    doi: "10.1145/512950.512973"
  - title: "A Structural Approach to Operational Semantics"
    url: "https://doi.org/10.1016/j.jlap.2004.05.001"
    year: 1981
    arxiv: null
    doi: "10.1016/j.jlap.2004.05.001"
  - title: "Polymorphic Effect Systems"
    url: "https://doi.org/10.1145/73560.73564"
    year: 1988
    arxiv: null
    doi: "10.1145/73560.73564"
  - title: "The Type and Effect Discipline"
    url: "https://doi.org/10.1006/inco.1994.1037"
    year: 1994
    arxiv: null
    doi: "10.1006/inco.1994.1037"
see:
  - "701-abstract-interpretation-a-unified-lattice-model-for-static-a"
  - "658-a-structural-approach-to-operational-semantics"
  - "150-polymorphic-effect-systems"
  - "142-the-type-and-effect-discipline"
---

# Principles of Program Analysis

## One-sentence takeaway

One textbook presents data-flow, constraint, abstract-interpretation, and type-and-effect analyses as four calculi over the same WHILE language, with shared monotonicity and precision lemmas.

## Why it matters here

When Broadside or the engine needs a reaching-defs, liveness, or effect analysis on ano/ECS IR, this is the cookbook that turns Cousot’s lattice story into transfer functions, worklists, and constraint solvers you can implement.

## Key ideas

- A common WHILE language is given operational and denotational semantics so every later analysis is proved against the same reference.
- Classical bit-vector data-flow (available expressions, live variables, very busy expressions, reaching definitions) is developed as a monotone framework with MFP/MOP solutions.
- Constraint-based analysis and control-flow analysis sit between data-flow and types; type-and-effect systems reconstruct the same facts as annotated typings.
- Abstract interpretation is presented with Galois connections, widening, and reduced products so the four styles can be compared on precision and cost.
- Complexity and implementation chapters treat worklist iteration, widening schedules, and the usual precision/speed tradeoffs.

## Caveats

## Links

- DOI: [10.1007/978-3-662-03811-6](https://doi.org/10.1007/978-3-662-03811-6)
- Springer: https://link.springer.com/book/10.1007/978-3-662-03811-6
