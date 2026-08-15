---
title: "Linear Logic"
authors:
  - "Jean-Yves Girard"
year: 1987
venue: "Theoretical Computer Science"
arxiv: null
doi: "10.1016/0304-3975(87)90045-4"
source: "https://doi.org/10.1016/0304-3975(87)90045-4"
topics:
  - linear-logic
  - girard
  - proof-theory
  - resources
  - category-theory
seed_rank: 40
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "languages"
relevance_score: 10
cites:
  - title: "Investigations into Logical Deduction"
    url: "https://doi.org/10.1007/978-3-642-48397-4"
    year: 1969
    arxiv: null
    doi: null
  - title: "Session Types as Intuitionistic Linear Propositions"
    url: "https://doi.org/10.1007/978-3-642-23217-6_15"
    year: 2011
    arxiv: null
    doi: "10.1007/978-3-642-23217-6_15"
see:
  - "632-investigations-into-logical-deduction"
  - "121-session-types-as-intuitionistic-linear-propositions"
---

# Linear Logic

## One-sentence takeaway

Girard refines classical and intuitionistic connectives into resource-sensitive ones — multiplicative ⊗/⅋, additive &/⊕, and exponentials !/? — so a hypothesis may be used exactly once unless explicitly reusable.

## Why it matters here

Linear types, session types, and capability calculi all quote this paper. ano’s one-shot commands and Anoptic’s consume-on-use GPU buffers are the same discipline: weakening and contraction are not free.

## Key ideas

- Structural rules of Gentzen sequent calculus (weakening, contraction) are the source of “a hypothesis may be used as often as you like”; linear logic removes them by default.
- Multiplicatives (⊗, ⅋, ⊸) handle independent combination; additives (&, ⊕) handle choice; the two layers are not interchangeable, which is the whole point.
- Exponentials !A and ?A restore controlled reuse: !A is “as many A as you want,” the logical form of a reusable reference or a boxed thunk.
- Proof nets give a geometry of interaction that later becomes GoI, geometry of tensor networks, and string-diagram semantics.
- TCS 50 (1987); this is the founding paper, not the later *Linear Logic: its syntax and semantics* tutorial.

## Caveats

## Links

- DOI: [10.1016/0304-3975(87)90045-4](https://doi.org/10.1016/0304-3975(87)90045-4)
