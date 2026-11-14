---
title: "Mathematical foundations for symmetric programming and reasoning"
authors:
  - "Ohad Kammar"
  - "Matija Pretnar"
year: 2026
venue: "arXiv preprint (cs.PL)"
arxiv: "2611.17106"
doi: null
source: "https://arxiv.org/abs/2611.17106"
version_reviewed: "v1"
topics:
  - "typed-programming-systems"
  - "category-theory-plt"
seed_rank: 2591
seed_batch: "frontier-2026-11-14"
reviewed: "2026-11-14"
pool: "languages"
relevance_score: 7
cites:
  - title: "Mathematical foundations for symmetric programming and reasoning"
    url: "https://arxiv.org/abs/2611.17106"
    year: 2026
    arxiv: "2611.17106"
    doi: null
---

# Mathematical foundations for symmetric programming and reasoning

## One-sentence takeaway

Given group actions on inputs and outputs and a canoniser, any function defined on canonical inputs extends to the whole domain, and the paper characterises when this gives the unique equivariant extension, with a dependently typed version that is the w.l.o.g. proof principle under Curry-Howard.

## Why it matters here

Symmetry reduction is everywhere in engine code (grid rotations and reflections in an RTS map, canonical orderings in queries, deduplicated states in search). A principled 'write it once for the canonical case' construction, extended to algebraic data types where constructor symmetries determine the type's symmetries, is a candidate primitive for ano and for typed game-rule code.

## Key ideas

- **Inputs.** Group actions for input and output symmetries plus a canoniser mapping arbitrary inputs to canonical ones.
- **Extension.** Any function on canonical inputs extends to the whole domain; conditions on the canoniser guarantee the unique equivariant extension.
- **Dependent types.** The same construction captures symmetric w.l.o.g. arguments via Curry-Howard.
- **Data types.** Symmetries of constructors uniquely determine the data type's symmetries and allow efficient execution.

## Caveats

Foundations paper; no implementation or performance evaluation in the abstract. Abstract-level read.

## Links

- arXiv abstract: https://arxiv.org/abs/2611.17106
- PDF: https://arxiv.org/pdf/2611.17106
