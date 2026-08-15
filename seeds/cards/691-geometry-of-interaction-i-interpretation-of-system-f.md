---
title: "Geometry of Interaction I: Interpretation of System F"
authors:
  - "Jean-Yves Girard"
year: 1989
venue: "Logic Colloquium '88 / Studies in Logic and the Foundations of Mathematics"
arxiv: null
doi: "10.1016/S0049-237X(08)70271-4"
source: "https://doi.org/10.1016/S0049-237X(08)70271-4"
topics:
  - geometry-of-interaction
  - girard
  - system-f
  - linear-logic
seed_rank: 691
seed_batch: "perfects-pl-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 10
lineage: programming-language-foundations
cites:
  - title: "Linear Logic"
    url: "https://doi.org/10.1016/0304-3975(87)90045-4"
    year: 1987
    arxiv: null
    doi: "10.1016/0304-3975(87)90045-4"
  - title: "The System F of Variable Types, Fifteen Years Later"
    url: "https://doi.org/10.1016/0304-3975(86)90044-7"
    year: 1986
    arxiv: null
    doi: "10.1016/0304-3975(86)90044-7"
  - title: "Interaction Nets"
    url: "https://doi.org/10.1145/96709.96718"
    year: 1990
    arxiv: null
    doi: "10.1145/96709.96718"
see:
  - "040-linear-logic"
  - "639-the-system-f-of-variable-types-fifteen-years-later"
  - "147-interaction-nets"
---

# Geometry of Interaction I: Interpretation of System F

## One-sentence takeaway

Girard's Geometry of Interaction interprets System F cut-elimination as feedback in an operator algebra: execution is a path, not a rewrite sequence.

## Why it matters here

GoI is the dynamic-semantics twin to linear logic and interaction nets already on the shelf — the citation if ano ever wants token-passing or geometry-style evaluation instead of a CEK loop.

## Key ideas

- A proof-net / typed term becomes an operator; composition is a feedback (the "execution formula"), so cut-elimination is interaction rather than substitution.
- System F is the test case: second-order quantification has to be interpreted in the same dynamic language as the first-order connectives.
- Later GoI machines and token-passing implementations (Danos–Regnier, Haghverdi–Scott, etc.) start from this paper; Lafont's interaction nets are the combinatorial cousin.
- Logic Colloquium '88, *Studies in Logic and the Foundations of Mathematics*, DOI 10.1016/S0049-237X(08)70271-4.

## Caveats

## Links

- DOI: [10.1016/S0049-237X(08)70271-4](https://doi.org/10.1016/S0049-237X(08)70271-4)
