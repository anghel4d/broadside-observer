---
title: Fast and Precise Type Checking for JavaScript
authors:
- Avik Chaudhuri
- Panagiotis Vekris
- Sam Goldman
- Marshall Roch
- Gabriel Levi
year: 2017
venue: PACMPL OOPSLA
arxiv: 1708.08021
doi: 10.1145/3133872
source: "https://arxiv.org/abs/1708.08021"
topics:
- flow
- javascript
- local-type-inference
- type-safety
seed_rank: 901
seed_batch: to1000-db-types-2026-08-13
reviewed: 2026-08-13
pool: languages
relevance_score: 9
lineage: type-safety
cites:
  []
---

# Fast and Precise Type Checking for JavaScript

## One-sentence takeaway

Flow type-checks millions of lines of Facebook JavaScript by combining flow-sensitive local inference for JS idioms with a parallel, incremental constraint solver that answers in the edit–refresh loop.

## Why it matters here

Anoptic’s JS/TS surface and any ano-facing editor want this grain: infer the common case, refine on `typeof`/`null` tests, and never stall the loop. Flow is the industrial counterpart to TypeScript’s structural checker — precision first, annotations optional, modules as adoption boundaries.

## Key ideas

- Flow-sensitive refinement: runtime tests (`null`, `typeof`, disjoint unions) shrink a variable’s type inside a branch without rewriting the source.
- Local inference targets JS idioms (optional properties, object literals, `this`) so most files type-check with few annotations; a formal fragment is proved sound.
- Constraint generation is modular at module boundaries; a persistent in-memory graph plus worker parallelism keeps response times near-instant on multi-million-line trees.
- Incrementalization rechecks only the dirty dependency cone, so the usual JS edit–refresh cycle does not wait on a batch compile.
- Deployed at Facebook on millions of lines used daily; PACMPL 1(OOPSLA) Article 48, 2017.

## Caveats

## Links

- arXiv: [1708.08021](https://arxiv.org/abs/1708.08021)
- PDF: https://arxiv.org/pdf/1708.08021
- DOI: [10.1145/3133872](https://doi.org/10.1145/3133872)
- Docs: https://flow.org/en/docs/lang/
