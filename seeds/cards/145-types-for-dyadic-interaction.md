---
title: "Types for Dyadic Interaction"
authors:
  - "Kohei Honda"
year: 1993
venue: "CONCUR 1993, LNCS 715"
arxiv: null
doi: "10.1007/3-540-57208-2_35"
source: "https://doi.org/10.1007/3-540-57208-2_35"
topics:
  - session-types
  - concurrency
  - type-systems
seed_rank: 145
seed_batch: "prefill-2026-08-13"
reviewed: "2026-08-13"
pool: "maths-foundations"
relevance_score: 9
cites:
  - title: "Computational interpretations of linear logic"
    url: "https://doi.org/10.1016/0304-3975(93)90181-R"
    year: 1993
    arxiv: null
    doi: "10.1016/0304-3975(93)90181-R"
  - title: "Interaction nets"
    url: "https://doi.org/10.1145/96709.96718"
    year: 1990
    arxiv: null
    doi: "10.1145/96709.96718"
  - title: "A calculus of mobile processes, I"
    url: "https://doi.org/10.1016/0890-5401(92)90008-4"
    year: 1992
    arxiv: null
    doi: "10.1016/0890-5401(92)90008-4"
  - title: "A theory of type polymorphism in programming"
    url: "https://doi.org/10.1016/0022-0000(78)90014-4"
    year: 1978
    arxiv: null
    doi: "10.1016/0022-0000(78)90014-4"
  - title: "Barbed bisimulation"
    url: "https://doi.org/10.1007/3-540-55719-9_114"
    year: 1992
    arxiv: null
    doi: "10.1007/3-540-55719-9_114"
  - title: "An object calculus for asynchronous communication"
    url: "https://doi.org/10.1007/BFb0057019"
    year: 1991
    arxiv: null
    doi: "10.1007/BFb0057019"
  - title: "Type Systems for Programming Languages"
    url: "https://doi.org/10.1016/b978-0-444-88074-1.50013-5"
    year: 1990
    arxiv: null
    doi: "10.1016/b978-0-444-88074-1.50013-5"
  - title: "A sort inference algorithm for the polyadic π-calculus"
    url: "https://doi.org/10.1145/158511.158701"
    year: 1993
    arxiv: null
    doi: "10.1145/158511.158701"
  - title: "Types in lambda calculi and programming languages"
    url: "https://doi.org/10.1007/3-540-52592-0_53"
    year: 1990
    arxiv: null
    doi: "10.1007/3-540-52592-0_53"
  - title: "Typing and subtyping for mobile processes"
    url: "https://doi.org/10.1109/lics.1993.287570"
    year: 1993
    arxiv: null
    doi: "10.1109/lics.1993.287570"
  - title: "A Calculus of Communicating Systems with Label Passing"
    url: "https://doi.org/10.7146/dpb.v15i208.7559"
    year: 1986
    arxiv: null
    doi: "10.7146/dpb.v15i208.7559"
  - title: "The Principal Type-Scheme of an Object in Combinatory Logic"
    url: "https://doi.org/10.2307/1995158"
    year: 1969
    arxiv: null
    doi: "10.2307/1995158"
see:
  - "143-computational-interpretations-of-linear-logic"
  - "147-interaction-nets"
---

# Types for Dyadic Interaction

## One-sentence takeaway

Types are freely composable two-party interaction structures — input/output, sequencing, branching/selection, and an involutive dual — and a simple hierarchy on names gives principal typing plus deadlock-freedom for a regular subset of terms.

## Why it matters here

This is the birth of binary session types: a channel's type is already the protocol. Typed agent and engine channels in Broadside/ano sit on that idea.

## Key ideas

- Types start from atoms (`nat`, its co-type, and unit `1` for pure sync). Constructors: `↓δ` / `↑δ` (receive/send a value of type `δ`), sequencing `δ1 ; δ2`, external choice `δ1 & δ2`, internal choice `δ1 ⊕ δ2`. Co-type is an involution: `↓` dualises to `↑`, `&` dualises to `⊕`, and `δ̄̄ = δ`.
- Actions inhabit a single type; terms are named actions composed in parallel, with restriction and replication. Reduction is defined only between a pair of dual-typed actions and always has a unique reduct (subject reduction holds).
- The implicit judgement is `⊢ P ▹ x1:α1, …, xn:αn` — it lists the term's interface points, not "P has type A". The system has principal types and reconstructs exactly the erasures of explicitly typed terms.
- A name-reference structure on untyped terms characterises typability completely. On a regular subset, that same structure implies deadlock-freedom.
- Worked examples (true/false, parallel-or, two buffer encodings) show branching as a typed substitute for untyped summation, without an expansion law into `&`.

## Caveats

## Links

- DOI: [10.1007/3-540-57208-2_35](https://doi.org/10.1007/3-540-57208-2_35)
- Springer: https://link.springer.com/chapter/10.1007/3-540-57208-2_35
- Kyoto preliminary version (PDF): https://www.kurims.kyoto-u.ac.jp/~kyodo/kokyuroku/contents/pdf/0851-05.pdf
