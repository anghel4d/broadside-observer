---
title: "Gradual Typing in an Open World"
authors:
- Michael M. Vitousek
- Jeremy G. Siek
year: 2016
venue: arXiv cs.PL
arxiv: "1610.08476"
doi: null
source: "https://arxiv.org/abs/1610.08476"
topics:
- gradual-typing
- transient
- type-safety
seed_rank: 897
seed_batch: to1000-db-types-2026-08-13
reviewed: 2026-08-13
pool: languages
relevance_score: 9
lineage: type-safety
cites:
  - title: "Design and Evaluation of Gradual Typing for Python"
    url: "https://doi.org/10.1145/2661088.2661101"
    year: 2014
    arxiv: null
    doi: "10.1145/2661088.2661101"
see:
  - "896-design-and-evaluation-of-gradual-typing-for-python"
---

# Gradual Typing in an Open World

## One-sentence takeaway

Transient casts — first-order checks at use sites, no proxies — are sound even when only some modules pass through the Reticulated translator and the rest is stock CPython; the property is proved in Coq on Anthill Python.

## Why it matters here

Proxy-free gradual design that survives FFIs and object-identity tests. The right enforcement story if Anoptic types only *some* agent scripts and they still call raw Python/C.

## Key ideas

- Open world: the translator is applied to a subset of the program; untranslated Python is arbitrary untyped context, not a cooperating cast calculus.
- Higher-order and mutable values cannot be fully checked at the boundary, so transient rechecks at calls, field reads, and writes instead of installing wrappers.
- Open-world soundness: well-typed translated code cannot silently violate its annotations; failures surface as the specified runtime checks.
- Anthill Python is the model; the Coq development is shipped as ancillary files on the arXiv record.
- This card previously pointed at the wrong ECOOP 2017 DOI (a DOT paper) and listed Cameron Swords as an author. The matching title is Vitousek–Siek, arXiv:1610.08476 / IU TR729. The 2017 follow-on with Swords is *Big Types in Little Runtime* (POPL), not this filename's work.

## Caveats

## Links

- arXiv: [1610.08476](https://arxiv.org/abs/1610.08476)
- PDF: https://arxiv.org/pdf/1610.08476
